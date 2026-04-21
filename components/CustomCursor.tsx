"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 15;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const requestRef = useRef<number>();
  
  // Track mouse and cursor coordinates
  const mouse = useRef({ x: -1000, y: -1000 });
  const pos = useRef({ x: -1000, y: -1000 });
  const angle = useRef(-45);

  // Store history of positions for the trail
  const history = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Initialize trail elements
    trailsRef.current.forEach((el, i) => {
      if (el) {
        const progress = i / TRAIL_LENGTH;
        const hue = 25 + progress * 25; // orange → yellow
        const size = 10 * (0.3 + progress * 0.7);
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 75%) 0%, hsl(${hue}, 100%, 45%) 60%, transparent 100%)`;
        el.style.boxShadow = `0 0 ${size * 1.5}px hsl(${hue}, 100%, 60%)`;
      }
    });

    const update = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;

      // Smooth interpolation for the main cursor (optional, but makes it feel smoother)
      // We'll snap to mouse to keep it highly responsive, but we calculate angle based on movement
      pos.current.x = mouse.current.x;
      pos.current.y = mouse.current.y;

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        angle.current = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      // Update cursor DOM
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 12}px, ${pos.current.y - 36}px) rotate(${angle.current + 45}deg)`;
      }

      // Update history for trails
      history.current.push({ x: pos.current.x, y: pos.current.y });
      if (history.current.length > TRAIL_LENGTH) {
        history.current.shift();
      }

      // Update trails DOM
      trailsRef.current.forEach((el, i) => {
        if (!el) return;
        // History contains oldest at index 0, newest at end.
        // trailsRef contains oldest at index 0, newest at end.
        const histPos = history.current[i] || history.current[history.current.length - 1] || pos.current;
        
        // opacity scales based on how far we are in the trail
        const opacity = history.current.length > i ? (i / TRAIL_LENGTH) * 0.9 : 0;
        
        el.style.transform = `translate(${histPos.x}px, ${histPos.y}px) translate(-50%, -50%)`;
        el.style.opacity = opacity.toString();
      });

      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Comet trail particles */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailsRef.current[i] = el;
          }}
          className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full will-change-transform"
        />
      ))}

      {/* Shooting star cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          transformOrigin: "36px 36px",
          width: 48,
          height: 48,
          filter: "drop-shadow(0 0 6px rgba(100, 160, 255, 0.8))",
        }}
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
        >
          <defs>
            <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF8C00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="sg" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#90c0ff" />
              <stop offset="100%" stopColor="#1a3fa0" />
            </radialGradient>
            <radialGradient id="sg2" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#1a3fa0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0a1a60" stopOpacity="0.3" />
            </radialGradient>
          </defs>

          {/* Tail flames */}
          <path d="M6 58 Q20 52 30 40 Q18 44 6 38 Z" fill="url(#cg)" opacity="0.95" />
          <path d="M10 56 Q22 50 30 40 Q20 46 10 42 Z" fill="#FFA500" opacity="0.5" />
          <path d="M14 54 Q24 49 30 40 Q22 48 14 46 Z" fill="#FFD700" opacity="0.35" />

          {/* Star body — 5-point star */}
          <polygon
            points="36,16 39.5,27 51,27 42,34 45.5,45 36,38 26.5,45 30,34 21,27 32.5,27"
            fill="url(#sg)"
          />
          {/* Dark overlay for depth */}
          <polygon
            points="36,16 39.5,27 51,27 42,34 45.5,45 36,38 26.5,45 30,34 21,27 32.5,27"
            fill="url(#sg2)"
          />
          {/* Outline */}
          <polygon
            points="36,16 39.5,27 51,27 42,34 45.5,45 36,38 26.5,45 30,34 21,27 32.5,27"
            fill="none"
            stroke="#4a7fff"
            strokeWidth="1.2"
          />
          {/* Shine highlight */}
          <ellipse cx="32" cy="26" rx="4" ry="3" fill="white" opacity="0.75" transform="rotate(-20, 32, 26)" />
        </svg>
      </div>
    </>
  );
}
