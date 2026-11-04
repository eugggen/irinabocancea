function largestSrc(img: HTMLImageElement): string {
  const srcset = img.getAttribute("srcset");
  if (!srcset) return img.currentSrc || img.src;

  let bestUrl = img.currentSrc || img.src;
  let bestWidth = 0;
  for (const entry of srcset.split(",")) {
    const parts = entry.trim().split(/\s+/);
    const url = parts[0];
    const width = parts[1]?.endsWith("w") ? Number.parseInt(parts[1], 10) : 0;
    if (width > bestWidth) {
      bestWidth = width;
      bestUrl = url;
    }
  }
  return bestUrl;
}

function init() {
  const overlay = document.getElementById("lightbox");
  const lightboxImg = overlay?.querySelector<HTMLImageElement>(".lightbox-image");
  if (!overlay || !lightboxImg) return;

  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("lightbox-open");
    lightboxImg.removeAttribute("src");
  };

  const open = (src: string, alt: string) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("lightbox-open");
  };

  if (overlay.dataset.bound === "true") {
    close();
    return;
  }
  overlay.dataset.bound = "true";

  overlay.addEventListener("click", () => {
    if (overlay.classList.contains("is-open")) close();
  });

  document.addEventListener("click", (event) => {
    if (overlay.classList.contains("is-open")) return;

    const frame = (event.target as Element).closest<HTMLElement>("[data-lightbox]");
    if (!frame) return;

    const img = frame.querySelector("img");
    if (!img) return;

    event.preventDefault();
    open(largestSrc(img), img.alt);
  });

  document.addEventListener("astro:before-preparation", close);
}

document.addEventListener("astro:page-load", init);
