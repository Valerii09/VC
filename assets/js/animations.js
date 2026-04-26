export function initAnimations() {
  initCursor();
  initReveal();
  initCaret();
}

function initCursor() {
  const cursor = document.querySelector(".cursor-dot");
  if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.style.opacity = "1";
  });

  window.addEventListener("pointerleave", () => {
    cursor.style.opacity = "0";
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  items.forEach((item) => observer.observe(item));
}

function initCaret() {
  const caret = document.querySelector(".caret");
  if (!caret) {
    return;
  }

  window.setInterval(() => {
    caret.classList.toggle("is-blinking");
  }, 2600);
}
