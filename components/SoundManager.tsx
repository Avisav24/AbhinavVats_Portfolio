"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundManager() {
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    // Initialize AudioContext
    const initAudioContext = () => {
      if (audioCtxRef.current) return;
      const AudioContext =
        window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    };

    const unlockAudio = async () => {
      initAudioContext();

      if (audioCtxRef.current?.state === "suspended") {
        await audioCtxRef.current.resume().catch(console.error);
      }

      if (audioRef.current && isPlayingRef.current) {
        audioRef.current.volume = 0.5;
        try {
          await audioRef.current.play();
          removeUnlockListeners();
        } catch (err) {
          console.warn(
            "Ambient audio blocked. Waiting for user gesture...",
            err,
          );
        }
      }
    };

    const removeUnlockListeners = () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };

    // Try to play immediately
    initAudioContext();
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Keep the toggle ON visually as requested, but wait for interaction to actually play
            setIsPlaying(true);
            window.addEventListener("click", unlockAudio);
            window.addEventListener("touchstart", unlockAudio);
            window.addEventListener("keydown", unlockAudio);
          });
      }
    }

    // Sync state with audio element ONLY if it's explicitly paused by user
    const audio = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => {
      // Don't auto-set to false if blocked by browser
      if (audio && audio.currentTime > 0 && !audio.ended) {
        setIsPlaying(false);
      }
    };

    audio?.addEventListener("play", handlePlay);
    audio?.addEventListener("pause", handlePause);

    return () => {
      removeUnlockListeners();
      audio?.removeEventListener("play", handlePlay);
      audio?.removeEventListener("pause", handlePause);
    };
  }, []);

  // Hover SFX
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
    gain.gain.linearRampToValueAtTime(0.04, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.start(now);
    osc.stop(now + 0.1);
  };

  useEffect(() => {
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
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(console.error);
      if (audioCtxRef.current?.state === "suspended") {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/sounds/ambient.mp3"
        loop
        autoPlay
        muted={false}
        preload="auto"
        playsInline
      />

      <button
        onClick={toggle}
        className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-[12px] bg-[#010828]/60 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#6FFF00]/10 hover:border-[#6FFF00]/30 transition-all active:scale-95 group shadow-2xl"
        aria-label="Toggle Sound"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-[#6FFF00] group-hover:scale-110 transition-transform" />
        ) : (
          <VolumeX className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
        )}
      </button>
    </>
  );
}
