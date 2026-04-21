"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { useGSAP } from "@/hooks/useGSAP";

// @ts-ignore
const AboutTorus = dynamic(() => import("@/canvas/AboutTorus"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP((ctx) => {
    if (!statsRef.current) return;

    const cgpaObj = { val: 0 };
    const internObj = { val: 0 };
    const usersObj = { val: 0 };

    const cgpaEl = statsRef.current.querySelector(".stat-cgpa");
    const internEl = statsRef.current.querySelector(".stat-intern");
    const usersEl = statsRef.current.querySelector(".stat-users");

    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(cgpaObj, {
          val: 9.17,
          duration: 2,
          ease: "power3.out",
          onUpdate: () => {
            if (cgpaEl) cgpaEl.innerHTML = cgpaObj.val.toFixed(2);
          },
        });
        gsap.to(internObj, {
          val: 2,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            if (internEl)
              internEl.innerHTML = Math.round(internObj.val).toString();
          },
        });
        gsap.to(usersObj, {
          val: 1000,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: () => {
            if (usersEl) {
              const formatted = Math.round(usersObj.val)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              usersEl.innerHTML = formatted + "+";
            }
          },
        });
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-[160px] max-w-[1280px] mx-auto px-6 relative overflow-hidden"
    >
      <div className="font-body text-[11px] uppercase text-gold tracking-widest mb-16">
        01 / About
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        <div className="lg:col-span-7 relative z-10">
          <div className="absolute top-[-40px] left-[-20px] font-display text-[260px] leading-none text-surfaceRaised -z-10 select-none pointer-events-none">
            01
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-[56px] text-textPrimary leading-tight mb-8">
              About Me
            </h2>
            <p className="font-body text-[17px] leading-[1.85] text-textSecondary max-w-[560px]">
              Pre-final year CS undergraduate at SRM IST, Delhi. I build
              full-stack systems, deploy AI/ML research to production, and
              architect cloud infrastructure that scales. IEEE first author.
              Currently interning as a frontend developer while aggressively
              building backend and AI depth.
            </p>

            <div ref={statsRef} className="mt-[56px] flex flex-wrap gap-[48px]">
              <div>
                <div className="stat-cgpa font-display text-[64px] text-textPrimary leading-none mb-2">
                  0
                </div>
                <div className="font-body text-[12px] uppercase text-textSecondary tracking-widest">
                  CGPA / 10
                </div>
              </div>
              <div>
                <div className="stat-intern font-display text-[64px] text-textPrimary leading-none mb-2">
                  0
                </div>
                <div className="font-body text-[12px] uppercase text-textSecondary tracking-widest">
                  Internships
                </div>
              </div>
              <div>
                <div className="stat-users font-display text-[64px] text-textPrimary leading-none mb-2">
                  0
                </div>
                <div className="font-body text-[12px] uppercase text-textSecondary tracking-widest">
                  Concurrent Users
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-16 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="w-full h-[480px]"
          >
            <AboutTorus className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
