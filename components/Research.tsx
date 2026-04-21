"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const NeuralNet = dynamic(() => import("@/canvas/NeuralNet"), { ssr: false });

export default function Research() {
  return (
    <section id="research" className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 mb-8 mt-[160px]">
        <div className="font-body text-[11px] uppercase text-gold tracking-widest">
          04 / Research
        </div>
      </div>

      <div className="w-full bg-[#0F0F0D] py-[80px] px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 text-[#F5F3EF]">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative w-fit">
              <span className="font-body text-[11px] uppercase text-gold tracking-widest border border-gold px-4 py-1.5 rounded-full inline-block animate-pulse-border">
                IEEE · First Author · Under Review 2026
              </span>
            </div>

            <h2 className="font-display text-[40px] md:text-[52px] leading-[1.1] mt-8 mb-4 max-w-[600px]">
              AI-Driven Fashion
              <br />
              Recommendation System
            </h2>

            <p className="font-body text-[16px] text-[#9B9790] max-w-[500px]">
              CNNs + Transformers · PyTorch · FastAPI · AWS ECS
            </p>

            <div className="mt-[40px] grid grid-cols-3 gap-8 max-w-[500px]">
              <div>
                <div className="font-display text-[32px] md:text-[40px] leading-tight">
                  1,000+
                </div>
                <div className="font-body text-[11px] uppercase text-[#6B6860] tracking-widest mt-1">
                  Concurrent Users
                </div>
              </div>
              <div>
                <div className="font-display text-[32px] md:text-[40px] leading-tight">
                  AWS ECS
                </div>
                <div className="font-body text-[11px] uppercase text-[#6B6860] tracking-widest mt-1">
                  Deployment
                </div>
              </div>
              <div>
                <div className="font-display text-[32px] md:text-[40px] leading-tight">
                  Docker
                </div>
                <div className="font-body text-[11px] uppercase text-[#6B6860] tracking-widest mt-1">
                  Containerized
                </div>
              </div>
            </div>

            <div className="mt-[48px]">
              <button className="border border-[#F5F3EF] text-[#F5F3EF] px-9 py-4 rounded-[4px] font-body text-[15px] hover:bg-[#F5F3EF] hover:text-[#0F0F0D] transition-colors duration-200 cursor-none">
                Read Abstract
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[400px] lg:h-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full h-full min-h-[400px]"
            >
              <NeuralNet className="w-full h-full bg-[#0F0F0D]" />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseBorder {
          0% {
            box-shadow: 0 0 0 0 rgba(200, 169, 110, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(200, 169, 110, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(200, 169, 110, 0);
          }
        }
        .animate-pulse-border {
          animation: pulseBorder 2s infinite;
        }
      `}</style>
    </section>
  );
}
