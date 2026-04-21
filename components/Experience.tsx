"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-[160px] max-w-[1280px] mx-auto px-6 relative"
    >
      <div className="font-body text-[11px] uppercase text-gold tracking-widest mb-16">
        03 / Experience
      </div>

      <div className="relative w-full flex flex-col items-center">
        {/* Center Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-border" />

        {/* Entry 1 */}
        <div className="relative w-full flex justify-end mb-[80px]">
          <div className="w-[50%] relative pl-[40px]">
            {/* Dot */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[12px] h-[12px] rounded-full bg-gold z-10" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40px] border-t border-dashed border-border" />

            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              className="bg-surface border border-border rounded-[16px] p-[36px] max-w-[480px]"
            >
              <h3 className="font-display text-[28px] text-textPrimary leading-tight mb-1">
                UI/UX Frontend Developer Intern
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-[14px] uppercase text-gold">
                  Looping Loons
                </span>
                <span className="font-mono text-[12px] text-textSecondary">
                  • Nov 2025 – Present
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Agile", "AI Integration", "Lighthouse"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-surfaceRaised font-body text-[11px] px-3 py-1 rounded-full text-textPrimary"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <ul className="space-y-3">
                <li className="font-body text-[15px] text-textSecondary pl-4 border-l-2 border-gold relative">
                  Built 50+ reusable components, cutting feature delivery time
                  40%
                </li>
                <li className="font-body text-[15px] text-textSecondary pl-4 border-l-2 border-gold relative">
                  Achieved 95+ Lighthouse performance score via code splitting
                </li>
                <li className="font-body text-[15px] text-textSecondary pl-4 border-l-2 border-gold relative">
                  Integrated real-time AI recommendation workflows into
                  production
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="relative w-full flex justify-start">
          <div className="w-[50%] relative pr-[40px] flex justify-end">
            {/* Dot */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[12px] h-[12px] rounded-full bg-gold z-10" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] border-t border-dashed border-border" />

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              className="bg-surface border border-border rounded-[16px] p-[36px] max-w-[480px]"
            >
              <h3 className="font-display text-[28px] text-textPrimary leading-tight mb-1">
                AI & Azure Developer Intern
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-[14px] uppercase text-gold">
                  Edunet Foundation
                </span>
                <span className="font-mono text-[12px] text-textSecondary">
                  • Jun 2025 – Jul 2025
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Azure", "Flask", "CI/CD", "NLP"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-surfaceRaised font-body text-[11px] px-3 py-1 rounded-full text-textPrimary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-3">
                <li className="font-body text-[15px] text-textSecondary pl-4 border-l-2 border-gold relative">
                  Deployed sentiment analysis service, 87% F1-score on
                  real-world data
                </li>
                <li className="font-body text-[15px] text-textSecondary pl-4 border-l-2 border-gold relative">
                  Automated ML update cycles via Azure Functions and CI/CD
                  pipelines
                </li>
                <li className="font-body text-[15px] text-textSecondary pl-4 border-l-2 border-gold relative">
                  Built production APIs with structured logging and monitoring
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
