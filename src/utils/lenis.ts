// src/utils/lenis.ts
import Lenis from '@studio-freight/lenis';

let lenis: Lenis | null = null;

export function initLenis() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
}

export function destroyLenis() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}