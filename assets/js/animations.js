function initAnimations() {
  initCursor();
  initReveal();
}

window.initAnimations = initAnimations;

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

  const interactiveItems = document.querySelectorAll(
    "a, button, .job, .metrics, .feature, .education, .skill-grid article, .metric-grid article, .contact-grid a"
  );

  interactiveItems.forEach((item) => {
    item.addEventListener("pointerenter", () => cursor.classList.add("is-hovering"));
    item.addEventListener("pointerleave", () => cursor.classList.remove("is-hovering"));
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

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
