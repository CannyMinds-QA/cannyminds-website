"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const useSmoothScroll = () => {
  useEffect(() => {
    // Defer Lenis initialization until after page is fully loaded
    // This prevents it from blocking initial render
    const initLenis = () => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      // Expose lenis instance globally for other components to use
      (window as any).lenis = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return lenis;
    };

    // Wait for page to be fully interactive before initializing
    let lenis: any;
    if (document.readyState === 'complete') {
      lenis = initLenis();
    } else {
      window.addEventListener('load', () => {
        lenis = initLenis();
      });
    }

    return () => {
      if (lenis) {
        lenis.destroy();
        // Clean up global reference
        delete (window as any).lenis;
      }
    };
  }, []);
};
