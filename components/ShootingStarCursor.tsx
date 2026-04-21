"use client";

import { useEffect, useRef, useState } from "react";

interface Trail {
  x: number;
  y: number;
  id: number;
  opacity: number;
}

export default function ShootingStarCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [angle, setAngle] = useState(-45);
  const [trails, setTrails] = useState<Trail[]>([]);
  const lastPos = useRef({ x: -100, y: -100 });
  const trailId = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;

      // Only update angle if moving
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const newAngle = Math.atan2(dy, dx) * (180 / Math.PI) - 135;
        setAngle(newAngle);
      }

      lastPos.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      // Add trail particle
      const id = trailId.current++;
      setTrails((prev) => [
        ...prev.slice(-14),
        { x: e.clientX, y: e.clientY, id, opacity: 1 },
      ]);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // Fade out trail particles
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) =>
        prev
          .map((t) => ({ ...t, opacity: t.opacity - 0.08 }))
          .filter((t) => t.opacity > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Trail particles */}
      {trails.map((t, i) => {
        const scale = (i / trails.length) * 0.6 + 0.1;
        const hue = 30 + (i / trails.length) * 30; // orange to yellow gradient
        return (
          <div
            key={t.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: t.x - 4,
              top: t.y - 4,
              width: 8 * scale,
              height: 8 * scale,
              borderRadius: "50%",
              background: `radial-gradient(circle, hsl(${hue}, 100%, 70%), hsl(${hue}, 100%, 40%))`,
              opacity: t.opacity * 0.85,
              transform: "translate(-50%, -50%)",
              boxShadow: `0 0 ${6 * scale}px hsl(${hue}, 100%, 60%)`,
              transition: "opacity 0.03s linear",
            }}
          />
        );
      })}

      {/* Shooting star cursor */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          transition: "transform 0.05s ease-out",
          width: 48,
          height: 48,
        }}
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
        >
          {/* Comet tail */}
          <defs>
            <linearGradient id="tail-grad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFA500" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="star-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#6aabff" />
              <stop offset="100%" stopColor="#1a3fa0" />
            </radialGradient>
          </defs>

          {/* Flame tail */}
          <path
            d="M4 44 Q16 48 28 40 Q16 36 4 20"
            fill="url(#tail-grad)"
            opacity="0.9"
          />
          <path
            d="M8 42 Q18 46 28 40 Q18 38 8 26"
            fill="#FF8C00"
            opacity="0.5"
          />

          {/* Star body */}
          <polygon
            points="36,20 39,30 50,30 41,37 44,47 36,41 28,47 31,37 22,30 33,30"
            fill="url(#star-grad)"
            stroke="#4a7fff"
            strokeWidth="1"
          />

          {/* Star shine */}
          <circle cx="33" cy="29" r="3" fill="white" opacity="0.8" />
        </svg>
      </div>
    </>
  );
}
