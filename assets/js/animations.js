function initAnimations() {
  initCursor();
  initReveal();
  initCounters();
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
    "a, button, .job, .metrics, .feature, .education, .solve-panel, .dev-panel, .case-card, .skill-grid article, .metric-grid article, .solve-grid article, .contact-grid a"
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

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach((counter) => setCounterValue(counter, Number(counter.dataset.count)));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(counter) {
  const target = Number(counter.dataset.count);
  const duration = 900;
  const startedAt = performance.now();

  function frame(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setCounterValue(counter, Math.round(target * eased));

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function setCounterValue(counter, value) {
  counter.textContent = `${value}${counter.dataset.suffix || ""}`;
}
