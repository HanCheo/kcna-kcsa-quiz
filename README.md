# Kubernetes Quiz

[Open the bilingual KCNA/KCSA quiz](https://hancheo.github.io/kubernetes-quiz/).

**562 questions: 252 unchanged KCNA + 310 fully replaced KCSA.** No question from the former 202-record KCSA pool remains live. Existing factual IDs, learner storage, vocabulary and saved attempts are not reset or repurposed.

This is unofficial study practice, not authenticated past-exam content, an empirically calibrated difficulty benchmark or a pass-probability predictor. The retained KCNA material still includes the wider cloud-native/CNCF ecosystem; historical and protected source limitations remain applicable.

## KCSA source and attribution

All rows in `public/questions.sqlite` from [thiago4go/kubernetes-security-kcsa-mock](https://github.com/thiago4go/kubernetes-security-kcsa-mock/tree/3b84cb8b17b6409d7f01b648de90c6cc2a8e7c81) were imported at commit `3b84cb8b17b6409d7f01b648de90c6cc2a8e7c81`.

Attribution: [Thiago S Shimada Ramos / thiago4go](https://github.com/thiago4go). The upstream README declares the project MIT-licensed and expressly disclaims CNCF/Linux Foundation affiliation or endorsement. This quiz does not claim official endorsement either.

New IDs use `kcsa-mock-<three-digit upstream ID>`, preserving upstream gaps. English questions, all five choices in original order and complete answer keys are retained. Korean questions, choices and full explanations are provided; literal commands, API identifiers and technical names remain recognizable. Imported difficulty is `unrated`: the source provides no empirical difficulty measurements.

Two explanation-only corrections apply to `kcsa-mock-254` and `kcsa-mock-255`: denial of performed actions is **Repudiation**, not Denial of Service, in [Microsoft's STRIDE model](https://learn.microsoft.com/en-us/azure/security/develop/secure-design). Their questions, choices and answer keys are unchanged. Other explanations and keys remain community-source content, not an independently verified 310-question semantic audit. Some command alternatives and broad security-model wording can be ambiguous or version-dependent; compare primary references rather than treating preserved grading as authoritative.

## Choices and grading

- Retained KCNA: four choices and a scalar answer index.
- Imported KCSA: five choices; 278 single-answer and 32 multiple-answer questions. Multiple keys have sizes two (12 questions), three (17) or four (3).
- Single-answer practice gives immediate feedback. Multiple-answer practice uses checkboxes, then **정답 확인**.
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

Click an English word in a question, choice, explanation or saved review to toggle membership with its complete English/Korean context. Word clicks do not select or grade answers; use the choice control or an empty choice area. The vocabulary tab supports search, learning/known filters, editable Korean meanings/notes, confirmed deletion and reveal/self-rating cards. Vocabulary uses the separate `quiz:vocabulary` key.

[Free Dictionary API](https://dictionaryapi.dev/) supplies general English definitions, not automatic Korean or context-specific translations. Only the selected word is sent, not questions, contexts or notes. Successful responses retain attribution. The UI distinguishes missing words, HTTP errors, ten-second timeout, request failure and unreadable responses. Failed refreshes retain cached definitions; async updates preserve notes, focus and caret, and cannot restore a deleted word.

**External verification limit:** real lookups for `counter`, `summary` and `sampler` timed out; a direct endpoint read returned HTTP 522. Controlled-response coverage is not real-provider success. No proxy or replacement provider was added. Offline saving, note editing and review remain usable.

## Verification and publication

The private and exact sanitized banks passed count, retained-KCNA equality, native question/option/key fidelity, ID-retirement, scalar/array bounds and public-schema validation. Actual UI scenarios exercised two/three/four-key exact sets, subsets, extras, empty selections, draft/graded restoration, word isolation and the fifth keyboard choice.

The exact sanitized runtime completed a 60-question KCSA mock at 90:00 with 60/60, including six reverse-selected multiple-answer questions. A full mixed mock scored 117/120: one unanswered, one subset and one extra-selection case were the only misses. Array order, null unanswered picks, retired scalar history and byte-unchanged stored snapshots were verified. These are automated key-driven smoke scenarios, not learner performance measurements.

Five real checkboxes and readable question metadata were exercised at a 390×844 Chromium viewport without horizontal overflow. This is viewport emulation, not physical-device testing.

Only `index.html`, `vocabulary.js`, `local/local.js` and `README.md` are published. Each bank record contains exactly `id exam domain subtopic difficulty style q choices answer explain ref`, with only `en` and `ko` localized fields. Raw source material, private provenance, authoring, validation evidence and source-repository history are excluded. Script URLs use `v=20261011-kcsa310-multi` to refresh assets without clearing learner storage. Deployment uses the existing GitHub Pages workflow.
