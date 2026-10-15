## KCNA / KCSA question or translation contribution

- [ ] KCNA
- [ ] KCSA
- [ ] Translation-only or future-locale update
- Domains/topics:
- IDs and number of questions changed:

### Provenance and rights

- [ ] I wrote the questions, choices, explanations, and translations or have redistribution permission.
- [ ] I did not copy or translate exam dumps, leaked questions, paid question banks, or answer-sharing sites.
- [ ] Every question has an official HTTPS `ref` supporting the answer.
- Provenance, license, author, and source links (if applicable):

### Bank and answer checks

- [ ] The committed runtime source is `local/local.js`.
- [ ] KCNA records have four choices and one scalar answer index; KCSA records have five choices and a valid scalar or unique 2–4-index answer array.
- [ ] English originals, answer keys, choice order, and top-level record schema are unchanged where this is a translation contribution.
- [ ] New original questions use unused `local-<number>` IDs; reserved `kcsa-mock-*` IDs were not reassigned.
- [ ] Available locale fields use genuine `q.<tag>`, `choices.<tag>`, and `explain.<tag>` data with aligned choice order.
- [ ] Future locale tags are valid BCP 47-style tags and were authored directly in the bank before any patch was applied.
- [ ] Browser checks covered English, every changed translation, single-answer grading, exact multi-answer grading, explanations, and reference links.
- [ ] `python3 tools/validate-question-bank.py` passed.

### Translation editor / patch checks (if applicable)

- [ ] Local editor drafts were saved separately from the runtime bank.
- [ ] Exported JSON was reviewed and applied with `python3 tools/apply-translation-patch.py` before committing the bank change.
- [ ] Imported patches reject unknown IDs, English edits, duplicate ID/locale entries, unsupported locales, invalid text, and wrong choice counts.

### Description

Explain the concepts, translations, provenance, and review details needed by maintainers.
