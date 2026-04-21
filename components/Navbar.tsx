"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -100px",
        end: 99999,
        toggleClass: { className: "nav-scrolled", targets: navRef.current },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-[72px] z-[100] bg-bgMain/88 backdrop-blur-[16px] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex justify-between items-center transition-all duration-300 group-autoscroll:.has-border">
        <div className="font-display font-bold text-[24px]">
          AV<span className="text-gold">·</span>
        </div>
        <div className="flex space-x-8 text-[11px] font-body tracking-[0.12em] uppercase">
          {["Work", "About", "Research", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group nav-item py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .nav-scrolled {
          border-bottom: 1px solid var(--color-border);
        }
      `}</style>
    </nav>
  );
}
