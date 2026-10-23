window.CelebrationFX = {
  trigger() {
    if (document.getElementById("celebration-overlay")) return;
    const overlay = document.createElement("div");
    overlay.id = "celebration-overlay";
    overlay.className = "celebration-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "celebration-title");
    overlay.innerHTML = `
      <div class="celebration-dialog">
        <div class="celebration-trophy" aria-hidden="true">✦</div>
        <span class="celebration-pill">100% MASTERY</span>
        <h2 id="celebration-title">Brilliant work!</h2>
        <p>You rated every card as a confident recall. Keep the momentum going and come back to review these ideas later.</p>
        <div class="celebration-actions">
          <button class="primary-button" id="celebration-restart" type="button">Study this deck again ↻</button>
          <button class="celebration-close" id="celebration-close" type="button">View my results</button>
        </div>
      </div>`;
    const colors = ["#7669f2", "#28b890", "#f0bd66", "#ee7194", "#51b8d6"];
    for (let i = 0; i < 38; i++) {
      const particle = document.createElement("span");
      particle.className = "celebration-particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDuration = `${3 + Math.random() * 3}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      overlay.appendChild(particle);
    }
    document.body.appendChild(overlay);
    overlay.querySelector("#celebration-restart").addEventListener("click", () => {
      const state = JSON.parse(sessionStorage.getItem("ottechies-session") || "null");
      if (state) {
        state.deck = [...state.results.perfect, ...state.results.okay, ...state.results.fail];
        for (let i = state.deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]];
        }
        state.results = { perfect: [], okay: [], fail: [] };
        state.index = 0;
        state.reviewPile = null;
        sessionStorage.setItem("ottechies-session", JSON.stringify(state));
      }
      window.location.href = "study.html";
    });
    overlay.querySelector("#celebration-close").addEventListener("click", () => overlay.remove());
  }
};