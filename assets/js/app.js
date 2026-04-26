document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("animations-ready");
  window.initTheme?.();
  window.initI18n?.();
  window.initAnimations?.();
  initResumeDownload();
});

function initResumeDownload() {
  const button = document.querySelector("[data-download-cv]");
  if (!button) {
    return;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const language = document.documentElement.lang === "en" ? "en" : "ru";
    const resume = window.RESUME_FILES?.[language] || window.RESUME_FILES?.ru;
    if (!resume) {
      return;
    }

    const blob = base64ToBlob(resume.base64, resume.mimeType);
    const url = URL.createObjectURL(blob);
    const download = document.createElement("a");
    download.href = url;
    download.download = resume.fileName;
    document.body.append(download);
    download.click();
    download.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
}

function base64ToBlob(base64, mimeType) {
  const byteCharacters = atob(base64);
  const chunks = [];
  const chunkSize = 8192;

  for (let offset = 0; offset < byteCharacters.length; offset += chunkSize) {
    const chunk = byteCharacters.slice(offset, offset + chunkSize);
    const bytes = new Uint8Array(chunk.length);

    for (let index = 0; index < chunk.length; index += 1) {
      bytes[index] = chunk.charCodeAt(index);
    }

    chunks.push(bytes);
  }

  return new Blob(chunks, { type: mimeType });
}
