"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function useGSAP(
  callback: (context: gsap.Context) => void,
  dependencies: any[] = [],
) {
  useEffect(() => {
    const ctx = gsap.context(callback);
    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
