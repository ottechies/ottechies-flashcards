
document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "ottechies-session";
  let state;

  try {
    state = JSON.parse(sessionStorage.getItem(storageKey) || "null");
  } catch (_) {
    state = null;
  }

  if (!state || !Array.isArray(state.deck) || !state.deck.length) {
    window.location.replace("../index.html");
    return;
  }

  state.results = state.results || {
    perfect: [],
    okay: [],
    fail: []
  };

  ["perfect", "okay", "fail"].forEach(pile => {
    if (!Array.isArray(state.results[pile])) {
      state.results[pile] = [];
    }
  });

  state.index = Math.max(0, Number(state.index) || 0);

  let flipped = false;

  const el = id => document.getElementById(id);

  el("lecture-title").textContent =
    state.lectureTitle || "Study session";

  el("course-title").textContent = state.courseTitle || "";

  el("deck-label").textContent =
    `${state.deck.length} cards in this deck`;

  function save() {
    sessionStorage.setItem(storageKey, JSON.stringify(state));
  }

  function sameCard(a, b) {
    if (!a || !b) return false;

    if (a.id && b.id) {
      return a.id === b.id;
    }

    return (
      (a.question || "") === (b.question || "") &&
      (a.answer || a.correct || "") ===
        (b.answer || b.correct || "") &&
      (a.topic || "") === (b.topic || "")
    );
  }

  function moveCardToPile(card, destination) {
    Object.keys(state.results).forEach(pile => {
      if (!Array.isArray(state.results[pile])) return;

      state.results[pile] = state.results[pile].filter(
        existingCard => !sameCard(existingCard, card)
      );
    });

    state.results[destination].push(card);

    save();
  }

  function addReturnButton() {
    if (document.getElementById("return-to-results")) return;

    const button = document.createElement("button");

    button.id = "return-to-results";
    button.type = "button";
    button.textContent = "← Back to results";
    button.setAttribute("aria-label", "Return to results page");

    const lectureHeader = el("lecture-title").parentElement;

    lectureHeader.appendChild(button);

    button.addEventListener("click", () => {
      save();
      window.location.href = "results.html";
    });
  }

  function showCard() {
    if (state.index >= state.deck.length) {
      save();
      window.location.href = "results.html";
      return;
    }

    const card = state.deck[state.index];

    flipped = false;

    el("flashcard").classList.remove("is-flipped");
    el("flashcard").setAttribute("aria-label", "Reveal answer");

    el("topic-chip").textContent = card.topic || "FLASHCARD";

    el("question-text").textContent =
      card.question || "Question not provided.";

    el("answer-text").textContent =
      card.answer || card.correct || "Refer to your lecture notes.";

    const rationale = card.rationale || "";

    el("rationale-text").textContent = rationale;
    el("rationale-text").hidden = !rationale;

    el("progress-label").textContent =
      `Card ${state.index + 1} of ${state.deck.length}`;

    const percent = Math.round(
      (state.index / state.deck.length) * 100
    );

    el("progress-percent").textContent = `${percent}% complete`;
    el("progress-bar").style.width = `${percent}%`;

    el("rating-prompt").textContent =
      "Reveal the answer to rate your recall.";

    el("rating-buttons").classList.add("is-disabled");

    el("rating-buttons")
      .querySelectorAll("button")
      .forEach(button => {
        button.disabled = true;
      });

    save();
  }

  el("flashcard").addEventListener("click", () => {
    flipped = !flipped;

    el("flashcard").classList.toggle("is-flipped", flipped);

    el("flashcard").setAttribute(
      "aria-label",
      flipped ? "Show question" : "Reveal answer"
    );

    el("rating-prompt").textContent = flipped
      ? "Be honest with your recall — it helps you learn."
      : "Reveal the answer to rate your recall.";

    el("rating-buttons").classList.toggle(
      "is-disabled",
      !flipped
    );

    el("rating-buttons")
      .querySelectorAll("button")
      .forEach(button => {
        button.disabled = !flipped;
      });
  });

  el("rating-buttons").addEventListener("click", event => {
    const button = event.target.closest("[data-rating]");

    if (!button || button.disabled || !flipped) return;

    const rating = button.dataset.rating;

    if (!["perfect", "okay", "fail"].includes(rating)) return;

    const currentCard = state.deck[state.index];

    // Move the card only after the learner rates it again.
    moveCardToPile(currentCard, rating);

    state.index += 1;

    showCard();
  });

  addReturnButton();
  showCard();
});
