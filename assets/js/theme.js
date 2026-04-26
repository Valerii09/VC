const STORAGE_KEY = "personal-card-theme";

export function initTheme() {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const saved = localStorage.getItem(STORAGE_KEY);
  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const initialTheme = saved || root.dataset.theme || preferred;

  setTheme(initialTheme);

  toggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  });

  function setTheme(theme) {
    root.dataset.theme = theme;
    if (toggle) {
      toggle.textContent = theme.toUpperCase();
      toggle.setAttribute("aria-label", theme === "dark" ? "Включить светлую тему" : "Включить темную тему");
    }
  }
}
