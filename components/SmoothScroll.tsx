"use client";

import { useEffect } from "react";

const SCROLL_DURATION_MS = 900;

function easeInOutCubic(progress: number): number {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function getScrollOffset(): number {
  const value = getComputedStyle(document.documentElement).scrollPaddingTop;
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 78;
}

function scrollToElement(element: HTMLElement): void {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const offset = getScrollOffset();
  const target = element.getBoundingClientRect().top + window.scrollY - offset;

  if (prefersReducedMotion) {
    window.scrollTo({ top: target, behavior: "auto" });
    return;
  }

  const start = window.scrollY;
  const distance = target - start;
  let startTime: number | null = null;

  function step(currentTime: number) {
    if (startTime === null) {
      startTime = currentTime;
    }

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function SmoothScroll() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest('a[href^="#"]');
      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) {
        return;
      }

      event.preventDefault();
      scrollToElement(target);
      history.pushState(null, "", hash);
    }

    function handleInitialHash() {
      const hash = window.location.hash;
      if (!hash || hash === "#") {
        return;
      }

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) {
        return;
      }

      requestAnimationFrame(() => scrollToElement(target));
    }

    document.addEventListener("click", handleClick);
    handleInitialHash();

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
