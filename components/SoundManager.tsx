"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundManager() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const shouldPlayRef = useRef(true);

  useEffect(() => {
    // Initialize SFX Engine
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContext) {
      audioCtxRef.current = new AudioContext();
    }

    const tryPlayAmbient = async () => {
      if (!audioRef.current) return;
      audioRef.current.volume = 0.4;

      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Ambient play failed:", err);
        throw err;
      }
    };

    const unlockAudio = async () => {
      if (!audioRef.current || !shouldPlayRef.current) return;

      // Resume SFX engine and then start ambient audio.
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        await audioCtxRef.current.resume().catch((err) => {
          console.error("AudioContext resume failed:", err);
        });
      }

      try {
        await tryPlayAmbient();

        // Remove listeners only after playback actually starts.
        window.removeEventListener("click", unlockAudio);
        window.removeEventListener("touchstart", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
      } catch {
        // Keep listeners active so the next user gesture can retry.
      }
    };

    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);
    window.addEventListener("keydown", unlockAudio);

    const audio = audioRef.current;
    const syncPlay = () => setIsPlaying(true);
    const syncPause = () => setIsPlaying(false);

    audio?.addEventListener("play", syncPlay);
    audio?.addEventListener("pause", syncPause);
    audio?.addEventListener("ended", syncPause);

    const handleVisibilityChange = () => {
      if (
        document.visibilityState === "visible" &&
        shouldPlayRef.current &&
        audioRef.current?.paused
      ) {
        unlockAudio();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Global Hover SFX
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hover-sfx]")
      ) {
        playHoverSfx();
      }
    };
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio?.removeEventListener("play", syncPlay);
      audio?.removeEventListener("pause", syncPause);
      audio?.removeEventListener("ended", syncPause);
    };
  }, []);

  const playHoverSfx = () => {
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state === "suspended") return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = "sine";
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.start(now);
    osc.stop(now + 0.1);
  };

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      shouldPlayRef.current = false;
      audioRef.current.pause();
    } else {
      shouldPlayRef.current = true;
      audioRef.current.play().catch((err) => {
        console.error("Manual ambient play failed:", err);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/sounds/ambient.mp3"
        loop
        autoPlay
        preload="auto"
        playsInline
      />

      <button
        onClick={toggle}
        className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all active:scale-95"
        aria-label="Toggle Sound"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-[#6FFF00]" />
        ) : (
          <VolumeX className="w-5 h-5 text-white/50" />
        )}
      </button>
    </>
  );
}
