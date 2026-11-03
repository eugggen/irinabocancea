import { animate, inView, stagger } from "motion";

let stops: Array<() => void> = [];

function readTokens() {
  const style = getComputedStyle(document.documentElement);
  const seconds = (name: string) =>
    Number.parseFloat(style.getPropertyValue(name)) / 1000;
  const parts = style
    .getPropertyValue("--ease")
    .match(/[\d.]+/g)
    ?.slice(0, 4)
    .map(Number);
  const ease: [number, number, number, number] =
    parts?.length === 4 ? [parts[0], parts[1], parts[2], parts[3]] : [0.22, 1, 0.36, 1];
  return {
    ease,
    dur: seconds("--dur"),
    slow: seconds("--dur-slow"),
  };
}

function init() {
  for (const stop of stops) stop();
  stops = [];

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const { ease, dur, slow } = readTokens();
  const lines = [...document.querySelectorAll<HTMLElement>("[data-menu-line]")];

  if (lines.length) {
    animate(lines, { y: ["100%", "0%"] }, { duration: dur, delay: stagger(0.08), ease });
  }

  for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
    if (el.dataset.revealed === "true") continue;
    const stop = inView(el, () => {
      if (el.dataset.revealed === "true") return;
      el.dataset.revealed = "true";
      animate(el, { opacity: 1, y: 0 }, { duration: dur, ease });
    });
    stops.push(stop);
  }

  for (const frame of document.querySelectorAll<HTMLElement>("[data-reveal-image]")) {
    const image = frame.querySelector<HTMLElement>("img");
    if (!image || frame.dataset.revealed === "true") continue;
    const stop = inView(frame, () => {
      if (frame.dataset.revealed === "true") return;
      frame.dataset.revealed = "true";
      animate(image, { opacity: 1, scale: 1 }, { duration: slow, ease });
    });
    stops.push(stop);
  }
}

document.addEventListener("astro:page-load", init);
