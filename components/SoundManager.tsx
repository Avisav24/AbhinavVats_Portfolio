"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundManager() {
  const [isPlaying, setIsPlaying] = useState(true);
  const userDisabled = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Create ambient audio
    const audio = new Audio("/sounds/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audioRef.current = audio;

    const playOnInteract = async () => {
      if (userDisabled.current) return;
      try {
        await audio.play();
        window.removeEventListener("mousedown", playOnInteract);
        window.removeEventListener("keydown", playOnInteract);
        window.removeEventListener("touchstart", playOnInteract);
        window.removeEventListener("scroll", playOnInteract);
      } catch (e) {
        console.error("Interaction play failed:", e);
      }
    };

    // Add listeners to catch interaction even on the loading screen
    window.addEventListener("mousedown", playOnInteract);
    window.addEventListener("keydown", playOnInteract);
    window.addEventListener("touchstart", playOnInteract);
    window.addEventListener("scroll", playOnInteract);

    // Attempt to play immediately (might only work if browser cache/policy allows)
    audio.play().catch(() => {
      console.log("Autoplay blocked, waiting for interaction...");
    });
    // Initialize Web Audio API for SFX
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContext) {
      audioCtxRef.current = new AudioContext();
    }

    // Global Hover Event Listener for SFX
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hover-sfx]")
      ) {
        playHoverSfx();
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleAmbient = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      userDisabled.current = true;
    } else {
      userDisabled.current = false;
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  // Synthesize a quick Sci-Fi Hover Sound
  const playHoverSfx = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    
    // Resume context if suspended (browser policy)
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Space-y sweep up sound
    osc.type = "sine";
    const now = ctx.currentTime;
    
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
    
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.05, now + 0.02); // Keep volume low
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.start(now);
    osc.stop(now + 0.1);
  };

  return (
    <button
      onClick={toggleAmbient}
      className="fixed bottom-6 right-6 z-[9990] w-12 h-12 bg-[#010828]/80 backdrop-blur-md border border-[#6FFF00]/30 rounded-full flex items-center justify-center text-[#6FFF00] shadow-[0_0_15px_rgba(111,255,0,0.2)] hover:scale-110 transition-transform cursor-pointer"
      title="Toggle Ambient Music"
      style={{ cursor: "none" }} // use custom cursor
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
}
