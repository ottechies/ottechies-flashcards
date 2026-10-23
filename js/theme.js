(() => {
  const key = "ottechies-theme";
  const root = document.documentElement;
  function applyTheme(theme) {
    const selected = theme === "dark" ? "dark" : "light";
    root.dataset.theme = selected;
    document.querySelectorAll("[data-theme-icon]").forEach(el => {
      el.textContent = selected === "dark" ? "☀" : "☾";
    });
    document.querySelectorAll("[data-theme-toggle]").forEach(el => {
      el.setAttribute("aria-label", selected === "dark" ? "Switch to light mode" : "Switch to dark mode");
      el.title = selected === "dark" ? "Switch to light mode" : "Switch to dark mode";
    });
  }
  let saved = "light";
  try { saved = localStorage.getItem(key) || "light"; } catch (_) {}
  applyTheme(saved);
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-theme-toggle]");
    if (!button) return;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(key, next); } catch (_) {}
  });
})();