document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("animations-ready");
  window.initTheme?.();
  window.initI18n?.();
  window.initAnimations?.();
  initResumeDownload();
});

function initResumeDownload() {
  const link = document.querySelector("[data-download-cv]");
  if (!link) {
    return;
  }

  link.addEventListener("click", async (event) => {
    event.preventDefault();

    if (!window.fetch || window.location.protocol === "file:") {
      forceDownloadByNavigation(link);
      return;
    }

    try {
      const response = await fetch(link.href);
      if (!response.ok) {
        throw new Error("Resume request failed");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const download = document.createElement("a");
      download.href = url;
      download.download = link.getAttribute("download") || "Trufanov_Valerii_CV.pdf";
      document.body.append(download);
      download.click();
      download.remove();
      URL.revokeObjectURL(url);
    } catch {
      forceDownloadByNavigation(link);
    }
  });
}

function forceDownloadByNavigation(link) {
  const fallback = document.createElement("a");
  fallback.href = link.href;
  fallback.download = link.getAttribute("download") || "Trufanov_Valerii_CV.pdf";
  fallback.rel = "noopener";
  document.body.append(fallback);
  fallback.click();
  fallback.remove();
}
