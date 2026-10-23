
document.addEventListener("DOMContentLoaded", () => {
  const key = "ottechies-session";
  let state;

  try {
    state = JSON.parse(sessionStorage.getItem(key) || "null");
  } catch (_) {
    state = null;
  }

  if (!state || !state.results) {
    window.location.replace("../index.html");
    return;
  }

  ["perfect", "okay", "fail"].forEach(pile => {
    if (!Array.isArray(state.results[pile])) {
      state.results[pile] = [];
    }
  });

  const el = id => document.getElementById(id);

  function save() {
    sessionStorage.setItem(key, JSON.stringify(state));
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  function getCounts() {
    return {
      perfect: state.results.perfect.length,
      okay: state.results.okay.length,
      fail: state.results.fail.length
    };
  }

  function updateResultsDisplay() {
    const counts = getCounts();
    const total = counts.perfect + counts.okay + counts.fail;

    el("total-count").textContent = total;
    el("perfect-count").textContent = counts.perfect;
    el("okay-count").textContent = counts.okay;
    el("fail-count").textContent = counts.fail;

    el("perfect-badge").textContent =
      `${counts.perfect} card${counts.perfect === 1 ? "" : "s"}`;

    el("okay-badge").textContent =
      `${counts.okay} card${counts.okay === 1 ? "" : "s"}`;

    el("fail-badge").textContent =
      `${counts.fail} card${counts.fail === 1 ? "" : "s"}`;

    el("results-subtitle").textContent =
      `${state.lectureTitle || "Your lecture"} · ${total} cards in your piles`;

    return { counts, total };
  }

  const { counts, total } = updateResultsDisplay();

  if (
    total > 0 &&
    counts.perfect === total &&
    window.CelebrationFX
  ) {
    window.CelebrationFX.trigger();
  }

  document.querySelectorAll("[data-pile]").forEach(button => {
    const pile = button.dataset.pile;

    button.disabled =
      !state.results[pile] || state.results[pile].length === 0;

    button.addEventListener("click", () => {
      const cards = state.results[pile];

      if (!Array.isArray(cards) || cards.length === 0) {
        return;
      }

      // Copy the selected pile into the study deck.
      // Do not clear the original pile when review begins.
      state.deck = shuffle([...cards]);

      state.reviewPile = pile;
      state.index = 0;

      save();

      window.location.href = "study.html";
    });
  });

  el("restart-btn").addEventListener("click", () => {
    const allCards = [
      ...state.results.perfect,
      ...state.results.okay,
      ...state.results.fail
    ];

    if (allCards.length === 0) {
      return;
    }

    // Assemble the new deck before resetting the piles.
    state.deck = shuffle([...allCards]);

    state.results = {
      perfect: [],
      okay: [],
      fail: []
    };

    state.index = 0;
    state.reviewPile = null;

    save();

    window.location.href = "study.html";
  });

  save();
});
