"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    // Easing function: easeInOutQuart
    const easeInOutQuart = (x: number): number => {
      return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    };

    const lenis = new Lenis({
      duration: 1.5,
      easing: easeInOutQuart,
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    gsap.ticker.lagSmoothing(0);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}
