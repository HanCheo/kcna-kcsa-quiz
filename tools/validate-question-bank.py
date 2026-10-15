#!/usr/bin/env python3
"""Validate the committed local/local.js runtime question bank.

Usage: validate-question-bank.py [local/local.js]

The bank is JavaScript assigning a JSON array to window.QUIZ_BANKS.local. It is
parsed as JSON without executing JavaScript.
"""
import json
import os
import re
import sys
from urllib.parse import urlparse

PREFIX = "window.QUIZ_BANKS=window.QUIZ_BANKS||{};window.QUIZ_BANKS.local="
ID_RE = re.compile(r"^(?:local|kcsa-mock)-\d+$")
EXAMS = {"kcna", "kcsa"}
DIFFICULTIES = {"easy", "medium", "hard", "unrated"}
STYLES = {"exam", "study"}
LOCALE_RE = re.compile(r"^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$")
REQUIRED = {"id", "exam", "domain", "subtopic", "difficulty", "style", "q", "choices", "answer", "explain", "ref"}


def error(path, message):
    return f"{path}: {message}"


def nonempty(value, field, path, errors):
    if not isinstance(value, str) or not value.strip():
        errors.append(error(path, f"{field} must be a non-empty string"))
        return False
    return True


def load_bank(path):
    text = open(path, encoding="utf-8").read().strip()
    if not text.startswith(PREFIX):
        raise ValueError(f"expected exact {PREFIX}[...] wrapper")
    payload = text[len(PREFIX):].strip()
    if payload.endswith(";"):
        payload = payload[:-1].rstrip()
    if not payload.startswith("[") or not payload.endswith("]"):
        raise ValueError("expected a JSON array after the bank wrapper")
    return json.loads(payload)


def valid_locale(value):
    return isinstance(value, str) and bool(LOCALE_RE.fullmatch(value))


def validate_localized_map(value, field, path, errors, choices_count=None):
    expected = list if choices_count else str
    if not isinstance(value, dict) or not isinstance(value.get("en"), expected):
        errors.append(error(path, f"{field}.en is required and must be {'a list' if choices_count else 'a string'}"))
        return
    if choices_count is None:
        nonempty(value["en"], f"{field}.en", path, errors)
        for locale, translated in value.items():
            if not valid_locale(locale):
                errors.append(error(path, f"{field}.{locale} is not a valid BCP 47-style locale tag"))
                continue
            if not isinstance(translated, str) or not translated.strip():
                errors.append(error(path, f"{field}.{locale} must be a non-empty string"))
    else:
        for locale, translated in value.items():
            if not valid_locale(locale):
                errors.append(error(path, f"{field}.{locale} is not a valid BCP 47-style locale tag"))
                continue
            if not isinstance(translated, list) or len(translated) != choices_count or any(not isinstance(choice, str) or not choice.strip() for choice in translated):
                errors.append(error(path, f"{field}.{locale} must be a list of {choices_count} non-empty strings"))
        english = value["en"]
        if all(isinstance(choice, str) for choice in english) and len({choice.strip() for choice in english}) != choices_count:
            errors.append(error(path, "choices.en must not contain duplicates"))


def validate_question(question, path, seen_ids, seen_stems, errors):
    if not isinstance(question, dict):
        errors.append(error(path, "question must be an object"))
        return
    missing = REQUIRED - question.keys()
    unexpected = set(question) - REQUIRED
    if missing:
        errors.append(error(path, "missing fields: " + ", ".join(sorted(missing))))
    if unexpected:
        errors.append(error(path, "unexpected fields: " + ", ".join(sorted(unexpected))))
    question_id = question.get("id")
    if not isinstance(question_id, str):
        errors.append(error(path, "id must be a string"))
    elif question_id in seen_ids:
        errors.append(error(path, f"duplicate id {question_id!r}"))
    elif not ID_RE.fullmatch(question_id):
        errors.append(error(path, "id must match local-<number> or kcsa-mock-<number>"))
    else:
        seen_ids.add(question_id)
    exam = question.get("exam")
    if not isinstance(exam, str) or exam not in EXAMS:
        errors.append(error(path, "exam must be kcna or kcsa"))
    nonempty(question.get("domain"), "domain", path, errors)
    nonempty(question.get("subtopic"), "subtopic", path, errors)
    difficulty = question.get("difficulty")
    if not isinstance(difficulty, str) or difficulty not in DIFFICULTIES:
        errors.append(error(path, "difficulty must be a string: easy, medium, hard, or unrated"))
    style = question.get("style")
    if not isinstance(style, str) or style not in STYLES:
        errors.append(error(path, "style must be a string: exam or study"))
    validate_localized_map(question.get("q"), "q", path, errors)
    validate_localized_map(question.get("explain"), "explain", path, errors)
    choices_count = 4 if exam == "kcna" else 5 if exam == "kcsa" else None
    if choices_count is not None:
        validate_localized_map(question.get("choices"), "choices", path, errors, choices_count)
    else:
        errors.append(error(path, "choices cannot be checked until exam is kcna or kcsa"))
    answer = question.get("answer")
    valid_answer = False
    if exam == "kcna":
        valid_answer = isinstance(answer, int) and not isinstance(answer, bool) and 0 <= answer < 4
    elif exam == "kcsa":
        valid_answer = (isinstance(answer, int) and not isinstance(answer, bool) and 0 <= answer < 5) or (
            isinstance(answer, list) and 2 <= len(answer) <= 4 and all(isinstance(index, int) and not isinstance(index, bool) and 0 <= index < 5 for index in answer) and len(set(answer)) == len(answer)
        )
    if not valid_answer:
        errors.append(error(path, "answer must be a KCNA index 0-3, or a KCSA index 0-4 / unique index array of length 2-4"))
    ref = question.get("ref")
    if nonempty(ref, "ref", path, errors):
        try:
            parsed = urlparse(ref)
        except ValueError:
            parsed = None
        if parsed is None or parsed.scheme != "https" or not parsed.netloc:
            errors.append(error(path, "ref must be a valid HTTPS URL to official documentation"))
    stem = question.get("q", {}).get("en") if isinstance(question.get("q"), dict) else None
    if isinstance(stem, str):
        normalized = re.sub(r"\W+", " ", stem.casefold()).strip()
        if normalized in seen_stems:
            errors.append(error(path, "duplicate English question stem"))
        seen_stems.add(normalized)


def main(argv):
    path = argv[1] if len(argv) == 2 else "local/local.js"
    if len(argv) > 2:
        print(__doc__.strip(), file=sys.stderr)
        return 2
    if not os.path.isfile(path):
        print(f"Question bank validation failed: missing {path}", file=sys.stderr)
        return 1
    try:
        bank = load_bank(path)
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"Question bank validation failed: {path}: {exc}", file=sys.stderr)
        return 1
    if not isinstance(bank, list) or not bank:
        print(f"Question bank validation failed: {path}: bank must be a non-empty array", file=sys.stderr)
        return 1
    errors, seen_ids, seen_stems = [], set(), set()
    for index, question in enumerate(bank, 1):
        validate_question(question, f"{path}: question {index}", seen_ids, seen_stems, errors)
    if errors:
        print("Question bank validation failed:", file=sys.stderr)
        print("\n".join(f"- {item}" for item in errors), file=sys.stderr)
        return 1
    counts = {exam: sum(q.get("exam") == exam for q in bank if isinstance(q, dict)) for exam in sorted(EXAMS)}
    print(f"Validated {path}: {len(bank)} questions (KCNA {counts['kcna']}, KCSA {counts['kcsa']})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
