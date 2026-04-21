"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroObject = dynamic(() => import("@/canvas/HeroObject"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center">
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-[80px] grid grid-cols-1 lg:grid-cols-12 h-full z-10 relative">
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-body text-[12px] uppercase text-gold tracking-widest mb-6"
          >
            Full Stack Engineer · AI/ML Researcher
          </motion.div>

          <h1 className="font-display font-bold text-[60px] md:text-[80px] lg:text-[100px] leading-[1.0] text-textPrimary">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Building
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ delay: 0.32, duration: 0.7 }}
            >
              Systems
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ delay: 0.44, duration: 0.7 }}
            >
              That Think.
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="font-body text-[18px] text-textSecondary mt-6 max-w-[500px]"
          >
            SRM IST · CGPA 9.17 · IEEE First Author
            <br />
            Open to backend, fullstack, and AI/ML roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-12 flex space-x-4"
          >
            <button className="bg-textPrimary text-bgMain px-9 py-4 rounded-[4px] font-body text-[15px] hover:scale-95 transition-transform duration-200 cursor-none">
              View Projects
            </button>
            <button className="border-[1.5px] border-accentDark text-accentDark px-9 py-4 rounded-[4px] font-body text-[15px] hover:scale-95 transition-transform duration-200 cursor-none">
              Download Resume
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 h-[50vh] lg:h-full relative pointer-events-none">
          <HeroObject className="w-full h-full" />
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-surfaceRaised border-t border-border py-[14px] overflow-hidden">
        <div className="hero-marquee flex items-center font-body text-[12px] uppercase text-textSecondary whitespace-nowrap">
          <div
            className="flex px-4"
            style={{ animation: "marquee 25s linear infinite" }}
          >
            Python <span className="text-gold mx-4">·</span> Node.js{" "}
            <span className="text-gold mx-4">·</span> AWS{" "}
            <span className="text-gold mx-4">·</span> PyTorch{" "}
            <span className="text-gold mx-4">·</span> FastAPI{" "}
            <span className="text-gold mx-4">·</span> MongoDB{" "}
            <span className="text-gold mx-4">·</span> Docker{" "}
            <span className="text-gold mx-4">·</span> TypeScript{" "}
            <span className="text-gold mx-4">·</span> React{" "}
            <span className="text-gold mx-4">·</span> TensorFlow{" "}
            <span className="text-gold mx-4">·</span> PostgreSQL{" "}
            <span className="text-gold mx-4">·</span>
            Python <span className="text-gold mx-4">·</span> Node.js{" "}
            <span className="text-gold mx-4">·</span> AWS{" "}
            <span className="text-gold mx-4">·</span> PyTorch{" "}
            <span className="text-gold mx-4">·</span> FastAPI{" "}
            <span className="text-gold mx-4">·</span> MongoDB{" "}
            <span className="text-gold mx-4">·</span> Docker{" "}
            <span className="text-gold mx-4">·</span> TypeScript{" "}
            <span className="text-gold mx-4">·</span> React{" "}
            <span className="text-gold mx-4">·</span> TensorFlow{" "}
            <span className="text-gold mx-4">·</span> PostgreSQL{" "}
            <span className="text-gold mx-4">·</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
