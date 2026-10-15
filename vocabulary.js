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
const lookupTokens = new Map();
const meaningDrafts = new Map();
let meaningFocus = null;
const dictionaryText = value => new DOMParser().parseFromString(String(value || ""), "text/html").body.textContent;
try {
  const stored = JSON.parse(localStorage.getItem(KEY) || "[]");
  if (!Array.isArray(stored) || stored.some(w => !w || typeof w.word !== "string" || typeof w.contextEn !== "string" || typeof w.contextKo !== "string")) throw new Error("The saved vocabulary format could not be read.");
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
  if (readError) { tell(`Vocabulary save failed: ${readError}`); return false; }
  try { localStorage.setItem(KEY, JSON.stringify(next)); }
  catch (e) { tell(`Vocabulary save failed: ${e.message}`); return false; }
  words = next;
  wordKeys = new Set(words.map(w => w.word));
  document.querySelector("#vocabularyCount").textContent = words.length;
  return true;
}
function update(word, changes) {
  return save(words.map(w => w.word === word ? { ...w, ...changes } : w));
}
function markWord(word, saved) {
  const action = saved ? "Remove from vocabulary" : "Add to vocabulary";
  document.querySelectorAll(`button[data-vocabulary-word="${CSS.escape(word)}"]`).forEach(button => {
    button.classList.toggle("saved", saved);
    button.title = `${button.textContent} — ${action}`;
    button.setAttribute("aria-label", `${button.textContent} ${action}`);
  });
}
function format(text) {
  return String(text).split(/([A-Za-z][A-Za-z0-9]*(?:['’\-][A-Za-z0-9]+)*)/g).map((part, i) => {
    if (!(i % 2)) return esc(part);
    const word = normalize(part), saved = wordKeys.has(word), action = saved ? "Remove from vocabulary" : "Add to vocabulary";
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
  const message = state === "loading" ? "Looking up English definition…" : state === "missing" ? "This word was not found in the English dictionary. Technical terms may be missing." : state === "timeout" ? "The dictionary server did not respond within 10 seconds. The word and example are still saved." : state?.startsWith("http:") ? `Dictionary server error (HTTP ${state.slice(5)}). The word and example are still saved.` : state?.startsWith("request:") ? `Dictionary request failed: ${state.slice(8)}. The browser or network may have blocked the request.` : state === "response" ? "The dictionary response did not contain a definition. The word and example are still saved." : "No English definition has been looked up yet. Add your own translation or note.";
  const source = typeof w.definitionSource === "string" && /^https?:\/\//i.test(w.definitionSource) ? `<a href="${esc(w.definitionSource)}" target="_blank" rel="noopener noreferrer">Dictionary source</a>` : "";
  const license = w.definitionLicense && /^https?:\/\//i.test(w.definitionLicense.url || "") ? `<a href="${esc(w.definitionLicense.url)}" target="_blank" rel="noopener noreferrer">${esc(w.definitionLicense.name)}</a>` : "";
  return w.definition ? `<p class="vocabulary-definition"><b>English dictionary${w.partOfSpeech ? ` · ${esc(w.partOfSpeech)}` : ""}</b><br>${esc(w.definition)}</p><p class="status">${source} ${license}</p>${state && state !== "found" ? `<p class="status">${esc(message)} The saved dictionary definition is kept.</p>` : ""}` : `<p class="status">${esc(message)}</p>`;
}
function renderList() {
  const active = document.activeElement;
  const focusedWord = active?.closest(".vocabulary-meaning-form")?.dataset.word;
  const activeSelection = focusedWord ? [active.selectionStart, active.selectionEnd] : null;
  const focusWord = focusedWord || meaningFocus?.word;
  const selection = activeSelection || (meaningFocus && meaningFocus.word === focusWord ? meaningFocus.selection : null);
  const list = selectedWords();
  document.querySelector("#vocabularySummary").textContent = readError ? `Vocabulary read failed: ${readError}` : `${words.length} saved · ${words.filter(w => w.known).length} completed · ${list.length} in current list`;
  document.querySelector("#startVocabularyReview").disabled = !list.length;
  document.querySelector("#vocabularyList").innerHTML = list.length ? list.slice().reverse().map(w => `<article class="vocabulary-entry" data-word="${esc(w.word)}">
    <div class="vocabulary-entry-head"><h3>${esc(w.display || w.word)}</h3><span class="status">${w.known ? "Completed" : "Review"}</span></div>
    ${definition(w)}
    <form class="vocabulary-meaning-form" data-word="${esc(w.word)}"><label>Meaning / note<input name="meaning" type="text" value="${esc(meaningDrafts.has(w.word) ? meaningDrafts.get(w.word) : w.meaning || "")}" placeholder="Add the meaning for this sentence"></label><button type="submit">Save note</button></form>
    <details><summary>Saved bilingual example</summary><p>${esc(w.contextEn)}</p><p>${esc(w.contextKo)}</p></details>
    <div class="vocabulary-actions"><button type="button" data-vocabulary-action="study" data-word="${esc(w.word)}">Study this word</button><button type="button" data-vocabulary-action="lookup" data-word="${esc(w.word)}"${lookupStates.get(w.word) === "loading" ? " disabled" : ""}>Look up definition</button><button type="button" data-vocabulary-action="delete" data-word="${esc(w.word)}">Delete</button></div>
  </article>`).join("") : `<p class="status">${words.length ? "No words match the search or filter." : "Click an English word in a question, choice, or explanation to save it here."}</p>`;
  if (focusWord) {
    const input = document.querySelector(`.vocabulary-meaning-form[data-word="${CSS.escape(focusWord)}"] input`);
    input?.focus({ preventScroll: true });
    if (input && selection?.[0] != null) input.setSelectionRange(...selection);
  }
  if (meaningFocus?.word === focusWord) meaningFocus = null;
}
function renderStudy() {
  const card = document.querySelector("#vocabularyStudy");
  const hadFocus = card.contains(document.activeElement);
  const focusedAction = hadFocus ? document.activeElement.dataset.vocabularyAction : null;
  const w = words.find(w => w.word === deck[deckIndex]);
  if (!w) {
    card.innerHTML = `<h3>Review complete</h3><p>You reviewed ${deck.length} word${deck.length === 1 ? "" : "s"}.</p><button type="button" data-vocabulary-action="list">Back to word list</button>`;
    if (hadFocus) card.querySelector("button")?.focus({ preventScroll: true });
    return;
  }
  card.innerHTML = `<p class="status">${deckIndex + 1} / ${deck.length}</p><h3 class="vocabulary-study-word">${esc(w.display || w.word)}</h3>
    <p>${esc(w.contextEn)}</p>
    ${revealed ? `<div class="vocabulary-study-answer"><p><b>Meaning / note:</b> ${esc(w.meaning || "No note yet.")}</p>${definition(w)}<p><b>Sentence translation:</b> ${esc(w.contextKo)}</p></div>` : ""}
    <div class="vocabulary-actions">${revealed ? `<button type="button" data-vocabulary-action="again">Study again</button><button type="button" class="primary" data-vocabulary-action="known">I know it</button>` : `<button type="button" class="primary" data-vocabulary-action="reveal">Show meaning &amp; translation</button>`}<button type="button" data-vocabulary-action="list">Back to word list</button></div>`;
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
function invalidateLookup(word) {
  const token = (lookupTokens.get(word) || 0) + 1;
  lookupTokens.set(word, token);
  return token;
}
function lookupIsCurrent(word, token) {
  return lookupTokens.get(word) === token && wordKeys.has(word);
}
async function lookup(word) {
  if (lookupStates.get(word) === "loading") return;
  const token = invalidateLookup(word);
  lookupStates.set(word, "loading"); refresh();
  let response;
  try {
    response = await fetch(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`, { signal: AbortSignal.timeout(10000) });
  } catch (e) {
    if (!lookupIsCurrent(word, token)) return;
    lookupStates.set(word, e.name === "TimeoutError" || e.name === "AbortError" ? "timeout" : `request:${e.message}`);
    refresh(); return;
  }
  if (!lookupIsCurrent(word, token)) return;
  if (!response.ok) {
    lookupStates.set(word, response.status === 404 ? "missing" : `http:${response.status}`);
    refresh(); return;
  }
  try {
    const data = await response.json();
    if (!lookupIsCurrent(word, token)) return;
    let found;
    for (const entry of (Array.isArray(data?.en) ? data.en : [])) {
      const value = (entry.definitions || []).find(d => typeof d.definition === "string" && dictionaryText(d.definition));
      if (value) {
        found = {
          definition: dictionaryText(value.definition),
          partOfSpeech: entry.partOfSpeech || "",
          definitionSource: `https://en.wiktionary.org/wiki/${encodeURIComponent(word)}`,
          definitionLicense: { name: "CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0/" },
        };
        break;
      }
    }
    if (!lookupIsCurrent(word, token)) return;
    lookupStates.set(word, found ? "found" : "response");
    if (found) update(word, found);
  } catch (e) {
    if (!lookupIsCurrent(word, token)) return;
    lookupStates.set(word, e.name === "TimeoutError" || e.name === "AbortError" ? "timeout" : "response");
  }
  if (lookupIsCurrent(word, token)) refresh();
}

document.addEventListener("click", e => {
  const button = e.target.closest("button[data-vocabulary-word]");
  if (!button) return;
  e.preventDefault(); e.stopPropagation();
  const word = button.dataset.vocabularyWord;
  if (wordKeys.has(word)) {
    if (save(words.filter(w => w.word !== word))) {
      invalidateLookup(word);
      lookupStates.delete(word);
      meaningDrafts.delete(word);
      markWord(word, false);
      tell(`${button.textContent} — removed from vocabulary.`);
      refresh();
    }
    return;
  }
  const context = button.closest("[data-vocabulary-context]");
  if (!context) return;
  invalidateLookup(word);
  lookupStates.delete(word);
  const item = { word, display: button.textContent, meaning: "", definition: "", partOfSpeech: "", contextEn: context.dataset.contextEn, contextKo: context.dataset.contextKo, known: false, addedAt: new Date().toISOString() };
  if (!save([...words, item])) return;
  markWord(word, true);
  tell(`${item.display} — saved to vocabulary.`);
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
panel.addEventListener("mousedown", e => {
  const button = e.target.closest("[data-vocabulary-action=\"lookup\"]");
  const input = document.activeElement;
  if (button && input?.matches(".vocabulary-meaning-form input[name=\"meaning\"]")) {
    meaningFocus = { word: input.closest(".vocabulary-meaning-form").dataset.word, selection: [input.selectionStart, input.selectionEnd] };
  }
});
panel.addEventListener("submit", e => {
  const form = e.target.closest(".vocabulary-meaning-form");
  if (!form) return;
  e.preventDefault();
  if (update(form.dataset.word, { meaning: form.elements.meaning.value.trim() })) {
    meaningDrafts.delete(form.dataset.word);
    tell("Note saved.");
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
  } else if (action === "delete" && confirm(`Delete ${words.find(w => w.word === word)?.display || word} from your vocabulary?`)) {
    invalidateLookup(word);
    lookupStates.delete(word);
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
