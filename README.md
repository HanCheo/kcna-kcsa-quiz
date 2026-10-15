# KCNA / KCSA Quiz

[Open the English-first KCNA / KCSA quiz](https://hancheo.github.io/kcna-kcsa-quiz/).

**562 questions: 252 unchanged KCNA + 310 fully replaced KCSA.** English question text is the canonical original and is read-only in the translation editor; Korean and any future data-backed locales are translations selected for question content only. Existing factual IDs, learner storage, vocabulary and saved attempts are not reset or repurposed.

This is unofficial study practice, not authenticated past-exam content, an empirically calibrated difficulty benchmark or a pass-probability predictor. The retained KCNA material still includes the wider cloud-native/CNCF ecosystem; historical and protected source limitations remain applicable.

## KCSA source and attribution

All rows in `public/questions.sqlite` from [thiago4go/kubernetes-security-kcsa-mock](https://github.com/thiago4go/kubernetes-security-kcsa-mock/tree/3b84cb8b17b6409d7f01b648de90c6cc2a8e7c81) were imported at commit `3b84cb8b17b6409d7f01b648de90c6cc2a8e7c81`.

Attribution: [Thiago S Shimada Ramos / thiago4go](https://github.com/thiago4go). The upstream README declares the project MIT-licensed and expressly disclaims CNCF/Linux Foundation affiliation or endorsement. This quiz does not claim official endorsement either.

New IDs use `kcsa-mock-<three-digit upstream ID>`, preserving upstream gaps. English questions, all five choices in original order and complete answer keys are retained. Korean questions, choices and full explanations are provided; literal commands, API identifiers and technical names remain recognizable. Imported difficulty is `unrated`: the source provides no empirical difficulty measurements.

Two explanation-only corrections apply to `kcsa-mock-254` and `kcsa-mock-255`: denial of performed actions is **Repudiation**, not Denial of Service, in [Microsoft's STRIDE model](https://learn.microsoft.com/en-us/azure/security/develop/secure-design). Their questions, choices and answer keys are unchanged. Other explanations and keys remain community-source content, not an independently verified 310-question semantic audit. Some command alternatives and broad security-model wording can be ambiguous or version-dependent; compare primary references rather than treating preserved grading as authoritative.

## Question contributions and PRs

`local/local.js` is the runtime question-bank source published to the browser. Add or edit questions there and include that file in the PR. KCNA uses four choices and one answer index; KCSA uses five choices and either one answer index or a unique array of 2–4 answer indexes. Keep English and each translated question, choice, and explanation order aligned, and include an official HTTPS `ref` that supports the answer.

New original questions must use the next unused `local-<number>` ID across the bank. `kcsa-mock-*` IDs are reserved for the imported KCSA source and must not be reassigned. Do not copy exam dumps, leaked questions or question banks without redistribution rights. State provenance and license in the PR description; do not add a separate license file without a project decision.

The quiz defaults to the English original. **Translation language** is a question-only selector discovered from locale keys present in the bank; it does not translate the page UI. Selecting Korean or another available locale changes the target but does not reveal it immediately: click **Translate** beside the navigation button to show the selected-language question, choices, and explanation alongside English; click **Hide translation** to hide it. English selection disables the button with guidance to select a translated language. The reveal resets when navigating to another question, while the target language persists. English source text and answer keys are read-only in the editor. In the browser, expand the translation editor, save a draft locally, and export a version-1 JSON patch. Local drafts stay in `quiz:translation-overrides:v1`; they do not change the shared bank until reviewed and applied to `local/local.js` in a PR. For a new language, author genuine `q.<tag>`, `choices.<tag>`, and `explain.<tag>` fields directly in the bank first; the apply tool accepts only locale tags already present there. If a selected question has no data for that locale, Translate remains unavailable and English remains visible.

```sh
python3 tools/apply-translation-patch.py translation-patch.json
python3 tools/validate-question-bank.py
```

Fork the repository, create a branch, edit the runtime bank, run the checks, commit and push the branch, then open a GitHub PR. Describe the exam, domain, provenance/license and official references, and verify English and changed-locale rendering plus single- and multiple-answer grading in the browser.

## Choices and grading

- Retained KCNA: four choices and a scalar answer index.
- Imported KCSA: five choices; 278 single-answer and 32 multiple-answer questions. Multiple keys have sizes two (12 questions), three (17) or four (3).
- Single-answer practice gives immediate feedback. Multiple-answer practice uses checkboxes, then **Check answer**.
- Multiple-answer grading requires exactly all correct choices and no extras, in any selection order. Subsets and extra selections receive no credit. An empty set is unanswered.
- Number keys support the displayed choice count, including the fifth choice. Outside focused controls, Enter confirms an ungraded multiple-answer practice question; otherwise it advances.
- Explicit option-number references in explanations follow the shuffled display order. Stored source explanation text and saved snapshots are not rewritten.

## Mock weights and timing

Weights follow the [KCNA curriculum](https://raw.githubusercontent.com/cncf/curriculum/master/KCNA_Curriculum.pdf) and [KCSA curriculum](https://raw.githubusercontent.com/cncf/curriculum/master/KCSA%20Curriculum.pdf). Current stored-domain proportions differ from exam weights. The individual quota below was observed in the actual quiz and uses largest-remainder allocation.

| Exam | Domain | Official weight % | Bank count | 60-question quota |
|---|---|---:|---:|---:|
| KCNA | Kubernetes Fundamentals | 44 | 112 | 26 |
| KCNA | Container Orchestration | 28 | 73 | 17 |
| KCNA | Cloud Native Application Delivery | 16 | 30 | 10 |
| KCNA | Cloud Native Architecture | 12 | 37 | 7 |
| KCSA | Overview of Cloud Native Security | 14 | 36 | 8 |
| KCSA | Kubernetes Cluster Component Security | 22 | 89 | 13 |
| KCSA | Kubernetes Security Fundamentals | 22 | 99 | 13 |
| KCSA | Kubernetes Threat Model | 16 | 22 | 10 |
| KCSA | Platform Security | 16 | 34 | 10 |
| KCSA | Compliance and Security Frameworks | 10 | 30 | 6 |

An individual mock has up to 60 questions and 90 minutes. Combined KCNA + KCSA samples up to 60 per exam: 120 unique questions and 180 minutes. Filters can reduce the pool; scarcity redistributes eligible quotas without duplicates. Time remains 1.5 minutes per actual question, not the upstream simulator's timing.

PASS/FAIL compares exact counts (`right * 4 >= total * 3`) against the **practice** 75% threshold. Display rounding cannot promote a sub-threshold score. Neither the verdict nor the smoke results below predict real-exam passing.

## Progress and immutable history

Endless practice preserves previous/forward question order, scalar/array selections, draft versus graded state, explanations and translation state. Restoring a draft does not grade it; restoring a confirmed answer cannot add statistics twice. Viewed IDs persist separately, including skipped questions; unseen questions precede weighted repeats. Changing exam/mode/domain/type starts a new trail. Language and vocabulary tabs preserve quiz position.

Old KCSA progress remains stored under retired IDs; the new namespace begins separate per-question progress. Selected-exam reset confirms before clearing that exam's statistics and viewed IDs, not vocabulary or saved history. Malformed viewed storage is preserved with a notice.

Completed attempts are immutable bilingual snapshots in IndexedDB. Array keys and picks are copied; later bank edits do not alter old questions, answers, choice order, references or domains. Legacy scalar snapshots remain readable. Combined attempts with exam identity show separate scores; legacy snapshots without it do not receive inferred exam scores.

Storage is browser-and-origin local, with no server backup or cross-device synchronization. Clearing site data can remove statistics, vocabulary and attempts. No migration or reset of the existing hosted origin is required.

## Personal vocabulary

Click an English word in a question, choice, explanation or saved review to toggle membership with its complete English and translated context. Word clicks do not select or grade answers; use the choice control or an empty choice area. The vocabulary tab supports search, learning/known filters, editable meanings or notes, confirmed deletion and reveal/self-rating cards. Vocabulary uses the separate `quiz:vocabulary` key.

Wiktionary supplies general English definitions, not automatic translations or context-specific translations. Saving an English word from a question, choice, explanation, or saved review adds it to the Vocabulary tab without making a dictionary request. In Vocabulary, activate **Look up definition** (by click or keyboard activation) to request only that selected word from `https://en.wiktionary.org/api/rest_v1/page/definition/<word>`; pressing Enter in the meaning/note field saves the note instead of querying the dictionary. The UI distinguishes missing words and request errors; offline saving, note editing and review remain usable.

## Verification and publication

Baseline verification (from the retained runtime) covered sanitized-bank counts and fidelity, ID retirement, scalar/array bounds, exact multi-answer cases, immutable snapshots, a 60-question KCSA mock, a mixed mock, and 390×844 checkbox rendering. Those historical smoke results are not learner performance measurements and are not claimed as a rerun for every contribution.

Current integration checks cover English-first rendering, question-only locale discovery, English-baseline plus translated content, translation-editor local save/export/import boundaries, generic future-locale fallback, history translation toggles, Wiktionary success/not-found/offline cache behavior, no-auto-fetch word saving, note/caret preservation, word isolation, and staged Pages asset loading. CI runs bank validation; patch-tool and UI smoke checks were exercised locally.

Only `.nojekyll`, `index.html`, `vocabulary.js` and `local/local.js` are staged into the GitHub Pages artifact. Tools, contribution guidance, validation workflows and source material remain in the repository but are not published as site assets. Each bank record contains exactly `id exam domain subtopic difficulty style q choices answer explain ref`, with locale keys discovered from the data. Script URLs use `v=20261015-contributions` to refresh assets without clearing learner storage. Deployment uses the existing GitHub Pages workflow.
