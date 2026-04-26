import { initTheme } from "./theme.js";
import { initI18n } from "./i18n.js";
import { initAnimations } from "./animations.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initI18n();
  initAnimations();
});
