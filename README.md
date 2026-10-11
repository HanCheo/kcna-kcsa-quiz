# Kubernetes Quiz

A bilingual KCNA/KCSA study quiz with compact dark/gold, question-focused controls.

**454 questions: KCNA 252 + KCSA 202.** All 283 supplied links have complete acquired bodies and review dispositions: 49 preserve-existing, 51 revise-existing, 118 add-new and 65 unscorable. An unscorable source is a completed review, not a validated scored question. Some protected originals remain in the bank with known limitations. Source equivalence and editorial qualifications do not authenticate real-exam appearance.

This is not an official past-exam bank, an empirically calibrated difficulty benchmark or a pass-probability predictor. Difficulty/cognitive/distractor judgments are editorial; many items are recognition-heavy and native distractors can be weak. Supported cloud-native/CNCF, community, SRE and FinOps subjects are not excluded merely because they are wider than Kubernetes operations.

## Review and limitations

The original first 74 records remain protected except the approved policy correction to local-036 and explanation-only updates to local-045/local-052. Known limits include missing context, overlapping correct alternatives, old dockershim terminology, Service DNS variants, Secret representation, container-level overrides, host-network packet-capture prerequisites and overlapping hardening recommendations. Preserved grading is not authoritative for an unrestricted technical question; use the explanation and primary reference. Original domain tags can overlap a different preferred curriculum mapping.

Unprotected corrections address NetworkPolicy isolation preconditions, effective Secret get/list/watch grants, container securityContext field scope, storage-platform authorization assumptions, PSA audit versus warning channels, verified signature/provenance evidence and Korean translation. local-411 is independently authored threat-model governance practice, not a PCI DSS or authenticated past-exam item. local-141 explicitly asks about Mesos's historical role; Apache retired it in 2025. local-003 remains protected: runtime/CRI is relevant, while its old version-number question is lower-priority historical recall.

local-610 uses a qualified unencrypted serialized Secret-representation alternative, not a literal reproduction of the source's no-additional-encoding wording. API base64 and backend serialization are not at-rest encryption. local-106 was retired because its incident-activity decision was different from the source's process-ownership decision; its factual ID was not repurposed.

## Mock weights

Weights follow the [KCNA curriculum](https://raw.githubusercontent.com/cncf/curriculum/master/KCNA_Curriculum.pdf) and [KCSA curriculum](https://raw.githubusercontent.com/cncf/curriculum/master/KCSA%20Curriculum.pdf). Bank proportions describe current stored tags. The 60-question counts below were observed in the actual UI and use largest-remainder allocation.

| Exam | Domain | Official % | Bank count | Bank % | Mock count |
|---|---|---:|---:|---:|---:|
| KCNA | Kubernetes Fundamentals | 44 | 112 | 44.4 | 26 |
| KCNA | Container Orchestration | 28 | 73 | 29.0 | 17 |
| KCNA | Cloud Native Application Delivery | 16 | 30 | 11.9 | 10 |
| KCNA | Cloud Native Architecture | 12 | 37 | 14.7 | 7 |
| KCSA | Overview of Cloud Native Security | 14 | 27 | 13.4 | 8 |
| KCSA | Kubernetes Cluster Component Security | 22 | 44 | 21.8 | 13 |
| KCSA | Kubernetes Security Fundamentals | 22 | 44 | 21.8 | 13 |
| KCSA | Kubernetes Threat Model | 16 | 33 | 16.3 | 10 |
| KCSA | Platform Security | 16 | 33 | 16.3 | 10 |
| KCSA | Compliance and Security Frameworks | 10 | 21 | 10.4 | 6 |

An individual mock has up to 60 questions and 90 minutes. Combined KCNA + KCSA samples up to 60 per exam: 120 unique questions and 180 minutes. Domain/type filters can reduce the pool; scarcity redistributes eligible quotas without duplicates. Time is 1.5 minutes per actual question.

PASS/FAIL uses the exact correct/total ratio against the **practice** 75% threshold; result percentages use one decimal where needed. Display rounding cannot turn 44/59 (74.6%) into PASS. The practice verdict does not establish real-exam passing or probability. [Official multiple-choice instructions](https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc) describe the real exam; this site's four-option, single-answer format is not a guarantee about every real item.

## Progress and saved attempts

Endless practice preserves previous/forward question order, choices, picked answers, explanations and translation state. Restored answers are locked and cannot add statistics twice. Viewed IDs persist separately in localStorage, including skipped questions; unseen questions precede weighted repeats. Exam/mode/domain/type changes start a new trail. Language and vocabulary tabs preserve quiz position. Wrong-only practice removes an item after two consecutive correct answers.

Selected-exam reset confirms before clearing that exam's statistics and viewed IDs, not vocabulary or saved history. Malformed viewed storage is preserved with a visible notice rather than silently replaced.

Completed attempts are immutable bilingual snapshots in IndexedDB for the browser and origin that created them. Later bank edits do not rewrite old questions, option orders, references or domains. Combined attempts with exam identity show separate scores; legacy snapshots without identity remain readable without invented exam scores. Statistics, history and vocabulary do not synchronize across devices or transfer automatically from localhost. Clearing site data can remove them; no server backup is provided.

## Personal vocabulary

Click an English word in a question, choice, explanation or saved review to toggle membership with its complete English/Korean text context. Case variants share an entry. Word clicks never select or grade answers; use the numbered choice button or an empty choice area. The vocabulary tab provides search, learning/known filters, Korean meaning/note editing, confirmed deletion and reveal/self-rating cards. Words and notes use the separate localStorage key quiz:vocabulary.

[Free Dictionary API](https://dictionaryapi.dev/) provides general English definitions, not automatic Korean or context-specific translations. Only the selected word is sent, not questions, contexts or notes. Successful responses retain source/license attribution. The UI distinguishes missing words (404), HTTP status errors, ten-second timeout, request failure and unreadable responses. Timeout includes response-body reading. A request failure cannot by itself distinguish connectivity from browser restrictions.

Failed refreshes show an error while retaining cached definitions and attribution. Async updates preserve unsaved notes, focus and caret; a late response cannot restore a deleted word. Switching tabs preserves mock answers, and clock-controlled expiry was verified without interrupting vocabulary editing.

**External verification limit:** real browser lookups for counter, summary and sampler timed out; a direct endpoint read returned HTTP 522. Controlled-response UI coverage is not a real-provider success claim. No proxy or replacement provider was added. Offline saving, note editing and review remain usable.

## Verification and publication

Current-bank verification exercised 42 changed records with visible English/Korean question, choices, explanation and correct grading; individual KCSA and 120-question 60/60 mocks; scarcity, small/empty pools, unanswered results, exact PASS boundaries, immutable legacy history and reset isolation. Question/vocabulary/history/result and long-command surfaces were exercised at a 390×844 Chromium viewport without horizontal overflow. This is viewport emulation, not physical-device testing or empirical exam calibration.

Only index.html, vocabulary.js, local/local.js and README.md are published. The bank projection contains exactly id, exam, domain, subtopic, difficulty, style, q, choices, answer, explain and ref, with only en/ko localized fields. Private provenance, authoring, raw discussions, evidence, source-repository history and unrelated exercises are excluded. Runtime script URLs use v=20261011-final283 to refresh assets without clearing learner storage. GitHub Pages deployment uses the existing workflow.
