"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds loading sequence
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(nextProgress);
      if (nextProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{
            opacity: { duration: 0.55, ease: "easeOut" },
            scale: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 0.7, ease: "easeOut" },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#010828] text-[#6FFF00] font-mono overflow-hidden"
        >
          {/* Starfield background */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
            <div className="absolute top-3/4 left-2/3 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300" />
            <div className="absolute top-1/2 left-4/5 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-700" />
            {/* simple warp lines */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#010828_100%)] z-10" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Spinning space radar / loader */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="w-24 h-24 mb-8 rounded-full border-t-2 border-r-2 border-[#6FFF00] border-opacity-80 border-b-2 border-b-transparent border-l-2 border-l-transparent shadow-[0_0_20px_rgba(111,255,0,0.4)] relative"
            >
              <div className="absolute inset-2 border border-[#6FFF00]/30 rounded-full" />
              <div className="absolute inset-6 bg-[#6FFF00]/20 rounded-full blur-[4px]" />
            </motion.div>

            {/* Text & Progress */}
            <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase mb-4 text-center">
              Initiating <br />
              <span className="text-white text-sm tracking-widest mt-2 block">
                Deep Space Protocol
              </span>
            </h2>

            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#6FFF00] shadow-[0_0_10px_#6FFF00]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-[10px] tracking-widest text-[#EFF4FF]/60 uppercase">
              SYS. BOOT {Math.floor(progress)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
