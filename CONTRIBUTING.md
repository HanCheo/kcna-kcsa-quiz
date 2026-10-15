# Contributing KCNA / KCSA Questions

This repository accepts KCNA/KCSA study questions through reviewable GitHub pull requests. It is unofficial study practice, not authenticated exam content, a pass predictor, or a validated difficulty benchmark.

## Runtime source of truth

The browser reads the public runtime bank directly from `local/local.js`. Include that file in a question or translation PR; do not add private dumps, raw source exports, paid material, or proprietary question data. `index.html` and `vocabulary.js` implement the app and should not be regenerated or overwritten for a bank-only change.

Every question record has exactly these top-level fields: `id`, `exam`, `domain`, `subtopic`, `difficulty`, `style`, `q`, `choices`, `answer`, `explain`, and `ref`.

- KCNA uses four choices and one scalar `answer` index from 0–3.
- KCSA uses five choices and either one scalar index from 0–4 or a unique array of 2–4 correct indexes.
- For translation-only edits, English is the immutable original: `q.en`, `choices.en`, and `explain.en` must remain present and unchanged. Translation patches cannot change answer keys or choice order. An original-question correction may change English text or an answer key only in a reviewed question PR with a clear justification and supporting reference.
- The current translated locale is Korean (`ko`). Keep `q.ko`, `choices.ko`, and `explain.ko` semantically aligned and in the same choice order when providing Korean content.
- `difficulty` is `easy`, `medium`, `hard`, or `unrated`; `style` is `exam` or `study`.
- `ref` must be an official HTTPS documentation URL supporting the answer.

The validator rejects missing or unexpected top-level fields, malformed locale maps, invalid answer shapes, duplicate English stems, duplicate IDs, and invalid references.

## Translation editor and locale workflow

The question-only locale selector is labeled **Question translation**. It does not change the page UI language, grade a draft, or reshuffle choices. English source fields and answer keys are read-only.

1. Select a translated locale in the quiz.
2. Expand **Edit _locale_ translation** and edit the translated question, each translated choice, and the translated explanation. Choices must stay paired with the English choices and in the original order.
3. **Save translation locally** stores a draft only in this browser under `quiz:translation-overrides:v1`; it does not modify the committed bank or publish anything.
4. **Export translation patch** downloads a version-1 JSON patch. Review it, then apply it to `local/local.js` before opening a PR:

   ```sh
   python3 tools/apply-translation-patch.py translation-patch.json
   python3 tools/validate-question-bank.py
   ```

5. Import is useful for reviewing a patch locally, but the shared update is the reviewed `local/local.js` change in the PR. Patch application is atomic and rejects unknown IDs, duplicate records, English edits, unsupported locales, invalid text, and wrong choice counts.

Future locales are data-backed, not fabricated by the UI. To add one, first edit the bank directly with genuine fields such as `q.<locale-tag>`, `choices.<locale-tag>`, and `explain.<locale-tag>` for a valid BCP 47-style tag (`ja`, `pt-BR`, `zh-Hans`, and similar). Once those fields exist in `local/local.js`, the selector discovers the locale. The apply tool accepts translations only for locale tags already present in the bank; author the new locale in the bank first, then use exported patches for subsequent edits.

## IDs, provenance, and rights

Do not reuse an existing ID. New original questions use the next unused `local-<number>` ID across the bank. Existing `kcsa-mock-*` IDs belong to the imported KCSA source and must not be reassigned.

Submit only content you wrote or have permission to redistribute. Do not copy or translate exam dumps, leaked questions, paid banks, or answer-sharing sites. Describe provenance, author, and license in the PR. The `ref` field is factual support, not a copyright license.

## Local checks and pull requests

1. Fork the repository and create a branch.
2. Edit `local/local.js`. For translation-only PRs, preserve English text, answer keys, answer order, and the appropriate 4-choice KCNA or 5-choice KCSA schema; original-question corrections may change the justified fields in a dedicated reviewed question PR.
3. Run the validator:

   ```sh
   python3 tools/validate-question-bank.py
   ```

4. In a browser, check English and available translations, single-answer grading, exact multi-answer grading, explanations, references, and any translation patch workflow you changed.
5. Commit and push your branch, then open a GitHub PR. Include the exam, domain, IDs, provenance/license, official references, and the checks you ran.

PR validation reads the committed `local/local.js` directly. Do not include private authoring files or unrelated generated artifacts.
