#!/usr/bin/env python3
"""Apply an exported translation patch to local/local.js for a PR.

Usage: apply-translation-patch.py translation-patch.json [local/local.js]

All records are checked before the runtime bank is replaced. English fields and
answer keys cannot be changed by a translation patch.
"""
import copy
import json
import os
import re
import subprocess
import sys
import tempfile

PREFIX = "window.QUIZ_BANKS=window.QUIZ_BANKS||{};window.QUIZ_BANKS.local="
LOCALE_RE = re.compile(r"^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$")


def load_bank(path):
    text = open(path, encoding="utf-8").read().strip()
    if not text.startswith(PREFIX):
        raise ValueError(f"expected exact {PREFIX}[...] wrapper")
    payload = text[len(PREFIX):].strip()
    if payload.endswith(";"):
        payload = payload[:-1].rstrip()
    if not payload.startswith("[") or not payload.endswith("]"):
        raise ValueError("expected a JSON array after the bank wrapper")
    bank = json.loads(payload)
    if not isinstance(bank, list):
        raise ValueError("bank must be a JSON array")
    return bank


def fail(message):
    raise ValueError(message)


def main(argv):
    if len(argv) not in (2, 3):
        print(__doc__.strip(), file=sys.stderr)
        return 2
    patch_path, bank_path = argv[1], argv[2] if len(argv) == 3 else "local/local.js"
    try:
        data = json.load(open(patch_path, encoding="utf-8"))
        if not isinstance(data, dict):
            fail("patch must be an object")
        bank = load_bank(bank_path)
        if data.get("version") != 1 or not isinstance(data.get("patches"), list):
            fail("patch must contain version 1 and a patches array")
        by_id = {q.get("id"): q for q in bank if isinstance(q, dict) and isinstance(q.get("id"), str)}
        known_locales = {"en"}
        for q in bank:
            if not isinstance(q, dict):
                continue
            for group in ("q", "explain", "choices"):
                values = q.get(group)
                if isinstance(values, dict):
                    known_locales.update(locale for locale in values if isinstance(locale, str))
        seen = set()
        updated = copy.deepcopy(bank)
        updated_by_id = {q["id"]: q for q in updated if isinstance(q, dict) and isinstance(q.get("id"), str)}
        for patch in data["patches"]:
            if not isinstance(patch, dict):
                fail("each patch must be an object")
            qid, locale = patch.get("id"), patch.get("locale")
            if not isinstance(qid, str) or not qid.strip():
                fail("patch id must be a non-empty string")
            if not isinstance(locale, str) or not locale.strip():
                fail(f"patch locale must be a non-empty string for {qid}")
            if (qid, locale) in seen:
                fail(f"duplicate patch: {qid}/{locale}")
            seen.add((qid, locale))
            if qid not in by_id:
                fail(f"unknown question ID: {qid}")
            if not LOCALE_RE.fullmatch(locale) or locale == "en" or locale not in known_locales:
                fail(f"unsupported translation locale: {locale}")
            q = updated_by_id[qid]
            if not isinstance(q.get("q"), dict) or not isinstance(q.get("choices"), dict) or not isinstance(q.get("explain"), dict) or not isinstance(q["choices"].get("en"), list):
                fail(f"question {qid} has an invalid localized schema")
            if not isinstance(patch.get("q"), str) or not patch["q"].strip() or not isinstance(patch.get("explain"), str) or not patch["explain"].strip():
                fail(f"invalid translated text for {qid}")
            choices = patch.get("choices")
            if not isinstance(choices, list) or len(choices) != len(q["choices"]["en"]) or any(not isinstance(choice, str) or not choice.strip() for choice in choices):
                fail(f"wrong translated choice count or text for {qid}")
            q["q"][locale] = patch["q"]
            q["choices"][locale] = choices
            q["explain"][locale] = patch["explain"]
        directory = os.path.dirname(os.path.abspath(bank_path)) or "."
        with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=directory, delete=False) as stream:
            temp_path = stream.name
            stream.write(PREFIX)
            json.dump(updated, stream, ensure_ascii=False, indent=2)
            stream.write(";\n")
        validator = os.path.join(os.path.dirname(__file__), "validate-question-bank.py")
        result = subprocess.run([sys.executable, validator, temp_path], text=True, capture_output=True)
        if result.returncode:
            fail(result.stderr.strip() or "updated bank failed validation")
        os.replace(temp_path, bank_path)
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        try:
            if "temp_path" in locals() and os.path.exists(temp_path):
                os.unlink(temp_path)
        except OSError:
            pass
        print(f"Translation patch rejected: {exc}", file=sys.stderr)
        return 1
    print(f"Applied {len(data['patches'])} translation patch(es) to {bank_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
