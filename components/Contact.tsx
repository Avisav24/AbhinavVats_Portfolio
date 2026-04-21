"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("av4125@srmist.edu.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-[160px] bg-[#F5F3EF] relative">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        <div className="font-body text-[11px] uppercase text-gold tracking-widest mb-16">
          06 / Contact
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[56px] md:text-[80px] leading-[1.05] text-textPrimary">
            Let&apos;s Build
            <br />
            Something Real.
          </h2>

          <p className="font-body text-[18px] text-textSecondary mt-6 max-w-[500px]">
            Open to backend, fullstack, and AI/ML internship roles.
            <br />
            Always up for interesting problems.
          </p>

          <div className="mt-14 relative group cursor-none">
            <button
              onClick={handleCopy}
              className="font-display text-[28px] md:text-[36px] text-textPrimary cursor-none"
            >
              av4125@srmist.edu.in
            </button>
            <div className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-gold origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-textPrimary text-bgMain font-body text-[12px] px-4 py-2 rounded uppercase tracking-wider whitespace-nowrap"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-12 flex gap-8">
            {[
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "GitHub", url: "https://github.com" },
              { name: "LeetCode", url: "https://leetcode.com" },
            ].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                className="flex flex-col items-center gap-2 group cursor-none"
              >
                <div className="w-[48px] h-[48px] rounded-full border border-border flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                  <span className="text-[12px]">↗</span>
                </div>
                <span className="font-body text-[13px] text-textSecondary group-hover:text-textPrimary transition-colors">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-[160px] pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 font-body text-[12px] text-textSecondary">
          <div>Abhinav Vats © 2026</div>
          <div>Designed & Developed by Abhinav Vats</div>
        </div>
      </div>
    </section>
  );
}
