(() => {
"use strict";
const KEY = "quiz:vocabulary";
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const normalize = word => word.toLowerCase().replace(/’/g, "'");
const panel = document.querySelector("#vocabularyPanel");
const quizPanel = document.querySelector("#quizPanel");
const quizTab = document.querySelector("#quizTab");
const vocabularyTab = document.querySelector("#vocabularyTab");
const notice = document.querySelector("#vocabularyNotice");
let words = [], readError = "", noticeTimer, deck = [], deckIndex = 0, revealed = false;
const lookupStates = new Map();
const meaningDrafts = new Map();
try {
  const stored = JSON.parse(localStorage.getItem(KEY) || "[]");
  if (!Array.isArray(stored) || stored.some(w => !w || typeof w.word !== "string" || typeof w.contextEn !== "string" || typeof w.contextKo !== "string")) throw new Error("저장된 단어장 형식을 읽을 수 없습니다.");
  words = stored;
} catch (e) { readError = e.message; }
let wordKeys = new Set(words.map(w => w.word));

function tell(message) {
  clearTimeout(noticeTimer);
  notice.textContent = message;
  notice.classList.remove("hidden");
  noticeTimer = setTimeout(() => notice.classList.add("hidden"), 3500);
}
function save(next) {
  if (readError) { tell(`단어장 저장 실패: ${readError}`); return false; }
  try { localStorage.setItem(KEY, JSON.stringify(next)); }
  catch (e) { tell(`단어장 저장 실패: ${e.message}`); return false; }
  words = next;
  wordKeys = new Set(words.map(w => w.word));
  document.querySelector("#vocabularyCount").textContent = words.length;
  return true;
}
function update(word, changes) {
  return save(words.map(w => w.word === word ? { ...w, ...changes } : w));
}
function markWord(word, saved) {
  const action = saved ? "단어장에서 제거" : "단어장에 추가";
  document.querySelectorAll(`button[data-vocabulary-word="${CSS.escape(word)}"]`).forEach(button => {
    button.classList.toggle("saved", saved);
    button.title = `${button.textContent} — ${action}`;
    button.setAttribute("aria-label", `${button.textContent} ${action}`);
  });
}
function format(text) {
  return String(text).split(/([A-Za-z][A-Za-z0-9]*(?:['’\-][A-Za-z0-9]+)*)/g).map((part, i) => {
    if (!(i % 2)) return esc(part);
    const word = normalize(part), saved = wordKeys.has(word), action = saved ? "단어장에서 제거" : "단어장에 추가";
    return `<button type="button" class="vocabulary-word${saved ? " saved" : ""}" data-vocabulary-word="${esc(word)}" title="${esc(part)} — ${action}" aria-label="${esc(part)} ${action}">${esc(part)}</button>`;
  }).join("");
}
function selectedWords() {
  const search = document.querySelector("#vocabularySearch").value.trim().toLowerCase();
  const filter = document.querySelector("#vocabularyFilter").value;
  return words.filter(w => (!search || w.word.includes(search) || String(w.meaning || "").toLowerCase().includes(search)) && (filter === "all" || (filter === "known" ? w.known : !w.known)));
}
function definition(w) {
  const state = lookupStates.get(w.word);
  const message = state === "loading" ? "영영사전 조회 중…" : state === "missing" ? "일반 영영사전에 이 단어의 뜻이 없습니다. 기술 용어는 포함되지 않을 수 있습니다." : state === "timeout" ? "영영사전 서버가 10초 안에 응답하지 않았습니다. 단어와 예문은 저장되어 있습니다." : state?.startsWith("http:") ? `외부 영영사전 서버 오류 (HTTP ${state.slice(5)}). 단어와 예문은 저장되어 있습니다.` : state?.startsWith("request:") ? `외부 영영사전 요청 실패: ${state.slice(8)}. 연결 문제나 브라우저 요청 제한 등은 이 메시지만으로 구분할 수 없습니다.` : state === "response" ? "영영사전 응답에서 뜻을 읽지 못했습니다. 단어와 예문은 저장되어 있습니다." : "일반 영영사전의 영어 뜻을 아직 조회하지 않았습니다. 한국어 뜻은 직접 적을 수 있습니다.";
  const source = typeof w.definitionSource === "string" && /^https?:\/\//i.test(w.definitionSource) ? `<a href="${esc(w.definitionSource)}" target="_blank" rel="noopener noreferrer">사전 출처</a>` : "";
  const license = w.definitionLicense && /^https?:\/\//i.test(w.definitionLicense.url || "") ? `<a href="${esc(w.definitionLicense.url)}" target="_blank" rel="noopener noreferrer">${esc(w.definitionLicense.name)}</a>` : "";
  return w.definition ? `<p class="vocabulary-definition"><b>영영사전${w.partOfSpeech ? ` · ${esc(w.partOfSpeech)}` : ""}</b><br>${esc(w.definition)}</p><p class="status">${source} ${license}</p>${state && state !== "found" ? `<p class="status">${esc(message)} 저장된 영영사전 뜻은 유지합니다.</p>` : ""}` : `<p class="status">${esc(message)}</p>`;
}
function renderList() {
  const active = document.activeElement;
  const focusedWord = active?.closest(".vocabulary-meaning-form")?.dataset.word;
  const selection = focusedWord ? [active.selectionStart, active.selectionEnd] : null;
  const list = selectedWords();
  document.querySelector("#vocabularySummary").textContent = readError ? `단어장 읽기 실패: ${readError}` : `${words.length}개 저장 · ${words.filter(w => w.known).length}개 학습 완료 · 현재 목록 ${list.length}개`;
  document.querySelector("#startVocabularyReview").disabled = !list.length;
  document.querySelector("#vocabularyList").innerHTML = list.length ? list.slice().reverse().map(w => `<article class="vocabulary-entry" data-word="${esc(w.word)}">
    <div class="vocabulary-entry-head"><h3>${esc(w.display || w.word)}</h3><span class="status">${w.known ? "학습 완료" : "복습할 단어"}</span></div>
    ${definition(w)}
    <form class="vocabulary-meaning-form" data-word="${esc(w.word)}"><label>한국어 뜻·메모<input name="meaning" type="text" value="${esc(meaningDrafts.has(w.word) ? meaningDrafts.get(w.word) : w.meaning || "")}" placeholder="이 문장에서의 뜻을 적어 주세요"></label><button type="submit">뜻 저장</button></form>
    <details><summary>저장한 한영 예문</summary><p>${esc(w.contextEn)}</p><p>${esc(w.contextKo)}</p></details>
    <div class="vocabulary-actions"><button type="button" data-vocabulary-action="study" data-word="${esc(w.word)}">이 단어 복습</button><button type="button" data-vocabulary-action="lookup" data-word="${esc(w.word)}"${lookupStates.get(w.word) === "loading" ? " disabled" : ""}>영영사전 조회</button><button type="button" data-vocabulary-action="delete" data-word="${esc(w.word)}">삭제</button></div>
  </article>`).join("") : `<p class="status">${words.length ? "검색·필터 조건에 맞는 단어가 없습니다." : "문제·보기·해설의 영단어를 누르면 이곳에 저장됩니다."}</p>`;
  if (focusedWord) {
    const input = document.querySelector(`.vocabulary-meaning-form[data-word="${CSS.escape(focusedWord)}"] input`);
    input?.focus({ preventScroll: true });
    if (input && selection[0] != null) input.setSelectionRange(...selection);
  }
}
function renderStudy() {
  const card = document.querySelector("#vocabularyStudy");
  const hadFocus = card.contains(document.activeElement);
  const focusedAction = hadFocus ? document.activeElement.dataset.vocabularyAction : null;
  const w = words.find(w => w.word === deck[deckIndex]);
  if (!w) {
    card.innerHTML = `<h3>복습 완료</h3><p>${deck.length}개 단어를 복습했습니다.</p><button type="button" data-vocabulary-action="list">단어 목록으로</button>`;
    if (hadFocus) card.querySelector("button")?.focus({ preventScroll: true });
    return;
  }
  card.innerHTML = `<p class="status">${deckIndex + 1} / ${deck.length}</p><h3 class="vocabulary-study-word">${esc(w.display || w.word)}</h3>
    <p>${esc(w.contextEn)}</p>
    ${revealed ? `<div class="vocabulary-study-answer"><p><b>한국어 뜻·메모:</b> ${esc(w.meaning || "아직 입력하지 않았습니다.")}</p>${definition(w)}<p><b>문장 번역:</b> ${esc(w.contextKo)}</p></div>` : ""}
    <div class="vocabulary-actions">${revealed ? `<button type="button" data-vocabulary-action="again">다시 공부</button><button type="button" class="primary" data-vocabulary-action="known">알아요</button>` : `<button type="button" class="primary" data-vocabulary-action="reveal">뜻·번역 보기</button>`}<button type="button" data-vocabulary-action="list">단어 목록으로</button></div>`;
  if (hadFocus) (card.querySelector(`[data-vocabulary-action="${focusedAction}"]`) || card.querySelector("button"))?.focus({ preventScroll: true });
}
function refresh() {
  if (panel.hidden) return;
  if (!document.querySelector("#vocabularyStudy").hidden) renderStudy();
  else renderList();
}
function startStudy(ids) {
  deck = ids || selectedWords().map(w => w.word); deckIndex = 0; revealed = false;
  document.querySelector("#vocabularyBrowse").hidden = true;
  document.querySelector("#vocabularyStudy").hidden = false;
  renderStudy();
  document.querySelector("#vocabularyStudy").scrollIntoView({ block: "start" });
  document.querySelector("#vocabularyStudy button")?.focus();
}
function showList() {
  document.querySelector("#vocabularyBrowse").hidden = false;
  document.querySelector("#vocabularyStudy").hidden = true;
  renderList();
}
function setTab(vocabulary) {
  quizPanel.hidden = vocabulary; panel.hidden = !vocabulary;
  document.body.dataset.view = vocabulary ? "vocabulary" : "quiz";
  quizTab.setAttribute("aria-selected", !vocabulary); vocabularyTab.setAttribute("aria-selected", vocabulary);
  quizTab.tabIndex = vocabulary ? -1 : 0; vocabularyTab.tabIndex = vocabulary ? 0 : -1;
  if (vocabulary) refresh();
}
async function lookup(word) {
  if (lookupStates.get(word) === "loading") return;
  lookupStates.set(word, "loading"); refresh();
  let response;
  try {
    response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, { signal: AbortSignal.timeout(10000) });
  } catch (e) {
    lookupStates.set(word, e.name === "TimeoutError" || e.name === "AbortError" ? "timeout" : `request:${e.message}`);
    refresh(); return;
  }
  if (!response.ok) { lookupStates.set(word, response.status === 404 ? "missing" : `http:${response.status}`); refresh(); return; }
  try {
    const entries = await response.json();
    let found;
    if (Array.isArray(entries)) {
      for (const entry of entries) {
        for (const meaning of entry.meanings || []) {
          const value = (meaning.definitions || []).find(d => typeof d.definition === "string" && d.definition);
          if (value) { found = { definition: value.definition, partOfSpeech: meaning.partOfSpeech || "", definitionSource: (entry.sourceUrls || [])[0] || "", definitionLicense: value.license || entry.license || null }; break; }
        }
        if (found) break;
      }
    }
    lookupStates.set(word, found ? "found" : "response");
    if (found && wordKeys.has(word)) update(word, found);
  } catch (e) { lookupStates.set(word, e.name === "TimeoutError" || e.name === "AbortError" ? "timeout" : "response"); }
  refresh();
}

document.addEventListener("click", e => {
  const button = e.target.closest("button[data-vocabulary-word]");
  if (!button) return;
  e.preventDefault(); e.stopPropagation();
  const word = button.dataset.vocabularyWord;
  if (wordKeys.has(word)) {
    if (save(words.filter(w => w.word !== word))) {
      meaningDrafts.delete(word);
      markWord(word, false);
      tell(`${button.textContent} — 단어장에서 삭제했습니다.`);
      refresh();
    }
    return;
  }
  const context = button.closest("[data-vocabulary-context]");
  if (!context) return;
  const item = { word, display: button.textContent, meaning: "", definition: "", partOfSpeech: "", contextEn: context.dataset.contextEn, contextKo: context.dataset.contextKo, known: false, addedAt: new Date().toISOString() };
  if (!save([...words, item])) return;
  markWord(word, true);
  tell(`${item.display} — 단어장에 저장했습니다.`);
  lookup(word);
}, true);
quizTab.addEventListener("click", () => setTab(false));
vocabularyTab.addEventListener("click", () => setTab(true));
document.querySelector("#studyTabs").addEventListener("keydown", e => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
  e.preventDefault();
  const next = e.key === "Home" ? quizTab : e.key === "End" ? vocabularyTab : e.target === quizTab ? vocabularyTab : quizTab;
  next.click(); next.focus();
});
document.querySelector("#vocabularySearch").addEventListener("input", renderList);
document.querySelector("#vocabularyFilter").addEventListener("change", renderList);
document.querySelector("#startVocabularyReview").addEventListener("click", () => startStudy());
panel.addEventListener("input", e => {
  const form = e.target.closest(".vocabulary-meaning-form");
  if (form && e.target.name === "meaning") meaningDrafts.set(form.dataset.word, e.target.value);
});
panel.addEventListener("submit", e => {
  const form = e.target.closest(".vocabulary-meaning-form");
  if (!form) return;
  e.preventDefault();
  if (update(form.dataset.word, { meaning: form.elements.meaning.value.trim() })) {
    meaningDrafts.delete(form.dataset.word);
    tell("한국어 뜻·메모를 저장했습니다.");
  }
});
panel.addEventListener("click", e => {
  const button = e.target.closest("[data-vocabulary-action]");
  if (!button) return;
  const action = button.dataset.vocabularyAction, word = button.dataset.word;
  if (action === "study") startStudy([word]);
  else if (action === "lookup") lookup(word);
  else if (action === "list") showList();
  else if (action === "reveal") { revealed = true; renderStudy(); }
  else if (action === "known" || action === "again") {
    if (!update(deck[deckIndex], { known: action === "known", reviewedAt: new Date().toISOString() })) return;
    deckIndex++; revealed = false; renderStudy();
  } else if (action === "delete" && confirm(`${words.find(w => w.word === word)?.display || word}를 단어장에서 삭제할까요?`)) {
    if (save(words.filter(w => w.word !== word))) {
      meaningDrafts.delete(word);
      markWord(word, false);
      renderList();
    }
  }
});
document.querySelector("#vocabularyCount").textContent = words.length;
window.QuizVocabulary = { format };
})();
