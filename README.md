# Kubernetes Quiz

A bilingual KCNA/KCSA study quiz with compact question-focused controls.

Questions mix supplied study material and independently written practice. This is not an officially authenticated past-exam bank or a verified exam-difficulty benchmark. KCNA also covers the wider cloud-native/CNCF ecosystem, not only Kubernetes operations. The UI uses `객관식 연습` rather than claiming actual exam style.

Current checkpoint release: **418 questions — KCNA 218, KCSA 200**. Review is incomplete: 180 of 283 supplied links have completed source review, including 40 ambiguous or otherwise unscorable originals; 212 complete source bodies have been acquired. Source-topic relevance and faithful practice rewrites do not verify actual exam appearance. Independently authored questions such as `local-411` are learning exercises, not authenticated past-exam items, and difficulty labels are editorial judgments.

This release restores previous/forward endless-practice state without duplicate grading, persists viewed IDs with unseen-first selection, and makes word clicks toggle vocabulary membership without answering. The independently authored `local-240` shared-responsibility question now specifies accidental exposure and has one defensible key; historical attempt snapshots are not rewritten.

Mock exams contain 60 questions for KCNA or KCSA (90 minutes). The combined KCNA + KCSA mock samples 60 questions from each exam, 120 total (180 minutes). Filters can reduce the available question count. Combined results and saved history show separate exam scores.

Completed attempts are stored in IndexedDB for the current browser and site origin. They do not sync across devices or transfer automatically from localhost, and clearing site data removes them.

## Personal vocabulary

Click an English word in a question, choice, explanation, or saved review to toggle vocabulary membership with its English/Korean context. Clicking a saved word again removes it; case variants share one entry. Word clicks never select or grade answers; use the numbered choice button or an empty area of the choice to answer.

The `단어장` tab provides search, learning/known filters, Korean meaning/note editing, confirmed deletion, and reveal/self-rating study cards. Words, notes, and contexts persist in this browser's localStorage (`quiz:vocabulary`), independently of exam statistics and IndexedDB history. They do not sync across browsers or devices; clearing site data removes them.

General [Free Dictionary API](https://dictionaryapi.dev/) lookups provide English definitions, not automatic Korean translations. Only the selected word is sent. Returned definitions retain source/license attribution; technical terms may be missing. The UI distinguishes missing words, HTTP errors, a ten-second timeout, request failures and unreadable responses. A request failure alone cannot distinguish a connection problem from a browser restriction. Lookup failure does not block saving or studying.

Switching tabs keeps the active mock and its answers intact. Its timer continues running, and expiry does not interrupt vocabulary editing.

## Publication

This repository contains only the runtime quiz HTML/JavaScript and a sanitized question projection. Personal authoring files, source evidence, research, snapshots, and unrelated exercises are not included. Runtime script URLs have a `v=` token; update it when changing those assets so readers receive the new version without clearing their progress.

The site is deployed with GitHub Pages using `.github/workflows/pages.yml`.
