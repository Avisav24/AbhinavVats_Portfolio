"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { useGSAP } from "@/hooks/useGSAP";

// @ts-ignore
const SphereWire = dynamic(() => import("@/canvas/SphereWire"), { ssr: false });
// @ts-ignore
const StackedPlanes = dynamic(() => import("@/canvas/StackedPlanes"), {
  ssr: false,
});
// @ts-ignore
const BarChart3D = dynamic(() => import("@/canvas/BarChart3D"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    title: "Election Sentiment Analyzer",
    stack: ["Python", "NLP", "Scikit-learn", "NLTK", "Pytest"],
    stats: ["50K Tweets Processed", "85% Accuracy", "40% Noise Reduction"],
    github: "github.com/Avisav24",
    CanvasComponent: SphereWire,
  },
  {
    num: "02",
    title: "ShopMind E-Commerce Platform",
    stack: ["Node.js", "MongoDB", "PostgreSQL", "JWT", "REST APIs"],
    stats: ["0.82 RMSE", "50 req/s", "180ms p95 Latency"],
    github: "github.com/Avisav24",
    CanvasComponent: StackedPlanes,
  },
  {
    num: "03",
    title: "NSE Market Data Automation",
    stack: ["Python", "Shell Scripting", "Data Engineering"],
    stats: ["14+ Data Sources", "99% Reliability", "95% Effort Reduction"],
    github: "github.com/Avisav24",
    CanvasComponent: BarChart3D,
  },
];

export default function Projects() {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useGSAP((ctx) => {
    if (!scrollWrapperRef.current || !scrollContentRef.current) return;

    const cards = gsap.utils.toArray(".project-card", scrollContentRef.current);
    const contentWidth = cards.length * 500 + (cards.length - 1) * 32 + 240; // Including padding

    gsap.to(scrollContentRef.current, {
      x: -(contentWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: scrollWrapperRef.current,
        pin: true,
        scrub: 0.5,
        end: () => `+=${contentWidth}`,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section
      id="projects"
      className="py-[160px] bg-bgMain relative overflow-hidden"
      ref={scrollWrapperRef}
    >
      <div className="max-w-[1280px] mx-auto px-6 mb-16 relative z-10 w-full shrink-0">
        <div className="font-body text-[11px] uppercase text-gold tracking-widest">
          05 / Projects
        </div>
      </div>

      <div className="flex h-[640px] px-6 md:px-[60px]" ref={scrollContentRef}>
        <div className="flex gap-[32px] w-[fit-content]">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="project-card relative flex flex-col w-[300px] sm:w-[400px] md:w-[500px] h-[640px] bg-surface border border-border rounded-[20px] overflow-hidden shrink-0 transition-all duration-250 cursor-none group hover:scale-[1.025]"
            >
              <div className="w-full h-[240px] bg-surfaceRaised relative">
                <proj.CanvasComponent className="w-full h-full pointer-events-none" />
              </div>

              <div className="p-[32px] flex flex-col flex-1">
                <div className="font-mono text-[11px] text-textSecondary mb-2">
                  {proj.num} /
                </div>

                <h3 className="font-display text-[32px] text-textPrimary leading-tight mb-4">
                  {proj.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-surfaceRaised font-mono text-[12px] px-[14px] py-[6px] rounded-full text-textPrimary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2 mt-auto pb-4">
                  {proj.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="font-body text-[14px] text-textSecondary flex items-center"
                    >
                      <span className="w-[4px] h-[4px] bg-gold rounded-full mr-3" />
                      {stat}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border mt-2">
                  <a
                    href={`https://${proj.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-[13px] text-textPrimary group-hover:text-gold transition-colors inline-flex items-center gap-2 group/link"
                  >
                    <span className="group-hover/link:underline">
                      {proj.github}
                    </span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </section>
  );
}
