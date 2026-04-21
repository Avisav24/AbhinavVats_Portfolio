"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import dynamic from "next/dynamic";

const SkillsGem = dynamic(() => import("@/canvas/SkillsGem"), { ssr: false });

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    name: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Pandas", "NumPy"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "GitHub Actions", "Linux", "Shell"],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "JWT",
    ],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    gsap.to(el, {
      y: -4,
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      borderColor: "#C8A96E",
      duration: 0.2,
      ease: "power2.out",
    });
    const dot = el.querySelector(".skill-dot");
    if (dot) gsap.to(dot, { opacity: 1, duration: 0.2 });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    gsap.to(el, {
      y: 0,
      boxShadow: "none",
      borderColor: "#E2DED8",
      duration: 0.2,
      ease: "power2.out",
    });
    const dot = el.querySelector(".skill-dot");
    if (dot) gsap.to(dot, { opacity: 0, duration: 0.2 });
  };

  return (
    <section
      id="skills"
      className="py-[160px] max-w-[1280px] mx-auto px-6 relative"
    >
      <div className="font-body text-[11px] uppercase text-gold tracking-widest mb-16">
        02 / Skills
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 item-center">
        <div
          className="lg:col-span-8 flex flex-col gap-10 z-10"
          ref={containerRef}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="font-body text-[11px] uppercase text-textSecondary mb-3">
                {category.name}
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative flex items-center bg-surface border border-border rounded-full px-[18px] py-[8px] font-mono text-[13px] text-accentDark cursor-none transition-colors"
                  >
                    <span className="skill-dot opacity-0 w-[5px] h-[5px] rounded-full bg-gold absolute left-[12px]" />
                    <span className="ml-[10px]">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-4 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[320px] h-[320px]"
          >
            <SkillsGem className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
