"use client";

import React from "react";
import { Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollVelocity from "@/components/ScrollVelocity";
import BlurText from "@/components/BlurText";

// Simple custom SVG icons since brand icons were removed from lucide-react
const Twitter = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010828] text-[#EFF4FF] font-mono uppercase">
      {/* SECTION 1: HERO */}
      <section
        id="homepage"
        className="relative w-full h-[100vh] rounded-b-[32px] overflow-hidden flex flex-col items-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
        />

        {/* Vignette overlay on all 4 borders */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(1,8,40,0.55) 70%, rgba(1,8,40,0.92) 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-40 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(1,8,40,0.85), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(1,8,40,0.85), transparent)",
          }}
        />
        <div
          className="absolute top-0 left-0 bottom-0 w-32 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(1,8,40,0.75), transparent)",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-32 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(1,8,40,0.75), transparent)",
          }}
        />

        <div className="relative z-10 w-full max-w-[1831px] px-6 md:px-12 lg:px-24 h-full flex flex-col pt-[32px]">
          {/* Header - Logo | Nav | Social */}
          <header className="relative flex items-center justify-between w-full gap-6">
            <div className="font-grotesk text-[24px] sm:text-[32px] font-bold tracking-wider z-20 shrink-0">
              ABHINAV.VATS
            </div>
            {/* Inline centered navbar */}
            <nav className="hidden lg:flex items-center justify-center gap-8 bg-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] px-10 py-3 flex-1 max-w-[700px] mx-auto">
              {[
                "Homepage",
                "Work",
                "Experience",
                "About",
                "Skills",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-grotesk text-[18px] md:text-[20px] uppercase hover:text-[#6FFF00] transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </nav>
            {/* Social Desktop - inline */}
            <div className="hidden lg:flex flex-row items-center gap-3 shrink-0">
              <a
                href="mailto:abhinavvats.dev@gmail.com"
                className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-colors drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              >
                <Mail className="w-[16px] h-[16px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-vats25/"
                target="_blank"
                rel="noreferrer"
                className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-colors drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              >
                <svg
                  className="w-[16px] h-[16px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com/Avisav24"
                target="_blank"
                rel="noreferrer"
                className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-colors drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              >
                <Github className="w-[16px] h-[16px]" />
              </a>
            </div>
          </header>

          <div className="flex-1 flex flex-col justify-center items-center w-full">
            <div className="relative text-center w-full max-w-[1100px]">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  filter: [
                    "drop-shadow(0 0 0px rgba(111,255,0,0))",
                    "drop-shadow(0 0 15px rgba(111,255,0,0.2))",
                    "drop-shadow(0 0 0px rgba(111,255,0,0))",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <h1 className="font-grotesk text-[32px] sm:text-[48px] md:text-[65px] lg:text-[80px] leading-[1.1] sm:leading-[1.15] drop-shadow-[0_8px_24px_rgba(0,0,0,1)] [text-shadow:0_4px_16px_rgba(0,0,0,0.8)] px-4">
                  <span className="block">
                    <BlurText
                      text="Beyond Earth"
                      className="justify-center"
                      delay={140}
                      animateBy="words"
                      direction="top"
                      threshold={0.1}
                      rootMargin="0px"
                      stepDuration={0.32}
                    />
                  </span>
                  <span className="block">
                    <BlurText
                      text="and the limits of the known"
                      className="justify-center"
                      delay={110}
                      animateBy="words"
                      direction="bottom"
                      threshold={0.1}
                      rootMargin="0px"
                      stepDuration={0.32}
                    />
                  </span>
                </h1>
              </motion.div>

              {/* Glitch Role Roller */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 h-[42px] md:h-[56px] overflow-hidden relative w-fit mx-auto px-8 md:px-12 bg-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              >
                <div className="glitch-roller font-condiment text-[24px] md:text-[48px] text-[#6FFF00] lowercase capitalize [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_100%)]">
                  <span className="block h-[42px] md:h-[56px] leading-[42px] md:leading-[56px]">
                    Full Stack Dev
                  </span>
                  <span className="block h-[42px] md:h-[56px] leading-[42px] md:leading-[56px]">
                    AI/ML Practitioner
                  </span>
                  <span className="block h-[42px] md:h-[56px] leading-[42px] md:leading-[56px]">
                    Personal Portfolio
                  </span>
                </div>
              </motion.div>

              {/* Resume Box - wide, centered below text */}
              <motion.a
                href="https://drive.google.com/file/d/1fil5aEGxhIkwf7yfvw7RRGEsIjA264aL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-8 mx-auto w-full max-w-[320px] bg-white/10 backdrop-blur-[15px] border border-white/20 shadow-lg rounded-[8px] px-8 py-4 font-grotesk text-[16px] text-white hover:text-[#6FFF00] hover:border-[#6FFF00]/50 transition-all uppercase flex items-center justify-center gap-3"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M3 15h6" />
                  <path d="M3 18h6" />
                  <path d="M14 15l-4 4 4 4" />
                </svg>
                Resume
              </motion.a>
            </div>

            {/* Social Mobile */}
            <div className="flex space-x-4 lg:hidden mt-10 justify-center">
              <a
                href="mailto:abhinavvats.dev@gmail.com"
                className="liquid-glass w-[56px] h-[56px] rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Mail className="w-[20px] h-[20px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-vats25/"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass w-[56px] h-[56px] rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-[20px] h-[20px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com/Avisav24"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass w-[56px] h-[56px] rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Github className="w-[20px] h-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section
        id="about"
        className="relative w-full min-h-[100vh] flex flex-col items-center py-16 md:py-24"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
        />

        <div className="relative z-10 w-full max-w-[1831px] px-6 md:px-12 lg:px-24 flex flex-col justify-between h-full min-h-[80vh]">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end w-full gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="font-grotesk text-[32px] md:text-[60px] leading-[1.1]">
                Hello!
                <br />
                I'm Abhinav
              </h2>
              <span className="font-condiment text-[36px] md:text-[68px] text-[#6FFF00] mix-blend-exclusion absolute -bottom-8 -right-8 md:-bottom-12 md:-right-16 -rotate-1 lowercase capitalize">
                Vats
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, filter: "blur(5px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-mono text-[14px] md:text-[16px] max-w-[266px] leading-[1.5]"
            >
              A digital system beyond time and place. Exploring structure, form,
              and interaction.
            </motion.p>
          </div>

          <div
            className="flex flex-col lg:flex-row justify-between w-full mt-12 md:mt-24 gap-8 p-6 md:p-8 rounded-[8px] bg-[rgba(20,25,40,0.55)] backdrop-blur-[15px] border border-white/15 shadow-lg"
            style={{
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
            }}
          >
            <div className="flex flex-col space-y-6 flex-1 text-[#EFF4FF]">
              <div>
                <h3 className="font-grotesk text-[24px] text-[#6FFF00] mb-2">
                  Details
                </h3>
                <ul className="font-mono text-[14px] opacity-80 space-y-2">
                  <li>
                    <strong>Name:</strong> Abhinav Vats
                  </li>
                  <li>
                    <strong>Location:</strong> New Delhi, India
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 9205562868
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:abhinavvats.dev@gmail.com">
                      abhinavvats.dev@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-grotesk text-[24px] text-[#6FFF00] mb-2">
                  Education
                </h3>
                <ul className="font-mono text-[14px] opacity-80 space-y-2">
                  <li>
                    <strong>B.Tech in Computer Science and Engineering</strong>
                  </li>
                  <li>SRM Institute of Science and Technology, Delhi-NCR</li>
                  <li>Aug 2023 – May 2027 | CGPA: 9.17/10.0</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-6 flex-1 text-[#EFF4FF]">
              <div>
                <h3 className="font-grotesk text-[24px] text-[#6FFF00] mb-2">
                  Research
                </h3>
                <ul className="font-mono text-[14px] opacity-80 space-y-2">
                  <li>
                    <strong>
                      First Author, IEEE Conference Paper (Under Review) 2026
                    </strong>
                  </li>
                  <li>
                    AI-Driven Fashion Recommendation System (CNNs +
                    Transformers)
                  </li>
                  <li>
                    Full pipeline from training (PyTorch) to REST API deployment
                    (FastAPI) on AWS.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SKILLS */}
      <section
        id="skills"
        className="w-full bg-[#010828] py-24 flex flex-col items-center border-t border-white/5"
      >
        <div className="w-full max-w-[1831px] px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-grotesk text-[32px] md:text-[60px] leading-[1]">
              Technical
              <br />
              <span className="inline-block ml-12 md:ml-24 lg:ml-32">
                <span className="font-condiment text-[#6FFF00] mr-4 lowercase capitalize text-[36px] md:text-[68px] -rotate-2 inline-block">
                  Skills
                </span>
              </span>
            </h2>
          </motion.div>

          <div className="mb-14 rounded-[12px] border border-white/10 bg-white/5 backdrop-blur-[18px] overflow-hidden">
            <ScrollVelocity
              texts={[
                "Python  FastAPI  PyTorch  TensorFlow  Scikit-learn",
                "TypeScript  React  Next.js  Node.js  Tailwind CSS",
                "AWS  Docker  Linux  GitHub Actions  CI/CD  PostgreSQL  MongoDB",
              ]}
              velocity={58}
              className="font-grotesk text-[#EFF4FF] drop-shadow-[0_0_12px_rgba(111,255,0,0.18)]"
              damping={50}
              stiffness={380}
              numCopies={6}
              parallaxClassName="py-4 md:py-5"
              scrollerClassName="flex items-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[
              {
                category: "Languages",
                skills:
                  "Python (Primary), Java, JavaScript, TypeScript, C++, SQL",
                icons: [
                  "python",
                  "openjdk",
                  "javascript",
                  "typescript",
                  "cplusplus",
                ],
              },
              {
                category: "AI / ML",
                skills:
                  "PyTorch, TensorFlow, Scikit-learn, CNNs, Transformers, NLP, Pandas, NumPy",
                icons: [
                  "pytorch",
                  "tensorflow",
                  "scikitlearn",
                  "pandas",
                  "numpy",
                ],
              },
              {
                category: "Cloud & DevOps",
                skills:
                  "AWS (EC2, S3, Lambda), Azure, Docker, GitHub Actions CI/CD, Git, Linux, Shell",
                icons: [
                  "amazonaws",
                  "azure",
                  "docker",
                  "githubactions",
                  "git",
                  "linux",
                ],
              },
              {
                category: "Backend & APIs",
                skills:
                  "FastAPI, Flask, Node.js, REST APIs, JWT, PostgreSQL, MongoDB, Redis",
                icons: [
                  "fastapi",
                  "flask",
                  "nodedotjs",
                  "postgresql",
                  "mongodb",
                  "redis",
                ],
              },
              {
                category: "Testing & QA",
                skills:
                  "Pytest, Unit Testing, API Testing, Automated Test Pipelines",
                icons: ["pytest", "postman"],
              },
            ].map((skillGrp, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="liquid-glass backdrop-blur-[25px] rounded-[8px] p-[32px] hover:bg-[#6FFF00]/10 hover:border-[#6FFF00]/50 hover:shadow-[0_0_30px_rgba(111,255,0,0.1)] hover:-translate-y-2 transition-all duration-300 w-full group flex flex-col justify-between"
                data-hover-sfx="true"
              >
                <div>
                  <h3 className="font-grotesk text-[24px] text-[#6FFF00] mb-4 uppercase">
                    {skillGrp.category}
                  </h3>
                  <p className="font-mono text-[14px] text-[#EFF4FF]/80 normal-case leading-relaxed">
                    {skillGrp.skills}
                  </p>
                </div>

                {/* 3D Logos */}
                <div className="flex flex-wrap gap-4 mt-8">
                  {skillGrp.icons.map((icon, idx) => (
                    <div key={idx} className="relative group/icon" title={icon}>
                      {/* 3D Base/Shadow */}
                      <div className="absolute inset-0 bg-[#6FFF00]/20 rounded-xl blur-[6px] transform group-hover/icon:scale-110 transition-transform"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity"></div>

                      {/* Icon Container */}
                      <div className="relative flex items-center justify-center w-12 h-12 bg-[#010828]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),_inset_0_-2px_4px_rgba(0,0,0,0.5),_0_4px_8px_rgba(0,0,0,0.5)] transform transition-transform group-hover/icon:-translate-y-2 group-hover/icon:shadow-[inset_0_1px_1px_rgba(111,255,0,0.4),_inset_0_-2px_4px_rgba(111,255,0,0.2),_0_8px_16px_rgba(111,255,0,0.3)] group-hover/icon:border-[#6FFF00]/50">
                        {icon === "amazonaws" || icon === "azure" ? (
                          <span className="text-[#6FFF00] font-grotesk text-[14px] font-bold drop-shadow-[0_0_8px_rgba(111,255,0,0.8)] transition-transform group-hover/icon:scale-110">
                            {icon === "amazonaws" ? "AWS" : "AZR"}
                          </span>
                        ) : (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={`https://cdn.simpleicons.org/${icon}/6FFF00`}
                            alt={icon}
                            className="w-6 h-6 drop-shadow-[0_0_8px_rgba(111,255,0,0.8)] transition-transform group-hover/icon:scale-110"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION: EXPERIENCE */}
      <section
        id="experience"
        className="w-full bg-[#010828] py-24 flex flex-col items-center border-t border-white/5"
      >
        <div className="w-full max-w-[1831px] px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-grotesk text-[32px] md:text-[60px] leading-[1]">
              Professional
              <br />
              <span className="inline-block ml-12 md:ml-24 lg:ml-32">
                <span className="font-condiment text-[#6FFF00] mr-4 lowercase capitalize text-[36px] md:text-[68px] -rotate-2 inline-block">
                  Experience
                </span>
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 w-full">
            {/* Experience Item 1 */}
            <motion.div
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="liquid-glass rounded-[8px] p-[32px] hover:bg-white/10 transition-colors w-full flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <div className="text-[#EFF4FF]/50 text-[14px] mb-2">
                  Nov 2025 – Present
                </div>
                <h3 className="font-grotesk text-[24px] md:text-[36px] text-cream mb-1 flex items-center">
                  UI/UX Frontend Developer Intern
                  <span className="w-2 h-2 text-center rounded-full bg-[#6FFF00] mb-6 ml-1"></span>
                </h3>
                <ul className="font-mono text-[14px] text-[#EFF4FF]/80 max-w-[600px] normal-case relative list-disc pl-5 space-y-2">
                  <li>
                    Built 50+ reusable components for an AI-driven platform,
                    cutting feature delivery time by 40%; integrated real-time
                    AI recommendation workflows and backend services into
                    production.
                  </li>
                  <li>
                    Optimized rendering via code splitting and lazy loading,
                    achieving 95+ Lighthouse scores; participated in Agile
                    sprints, code reviews, and cross-functional release
                    deployments.
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0 liquid-glass rounded-[8px] px-6 py-3 border border-[#6FFF00]/20 flex items-center justify-center">
                <span className="text-[#6FFF00] font-bold text-[14px]">
                  Looping Loons
                </span>
              </div>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="liquid-glass rounded-[8px] p-[32px] hover:bg-white/10 transition-colors w-full flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <div className="text-[#EFF4FF]/50 text-[14px] mb-2">
                  Jun 2025 – Jul 2025
                </div>
                <h3 className="font-grotesk text-[24px] md:text-[36px] text-cream mb-1 flex items-center">
                  AI & Azure Developer Intern
                  <span className="w-2 h-2 text-center rounded-full bg-[#6FFF00] mb-6 ml-1"></span>
                </h3>
                <ul className="font-mono text-[14px] text-[#EFF4FF]/80 max-w-[600px] normal-case relative list-disc pl-5 space-y-2">
                  <li>
                    Designed and deployed sentiment analysis service using Azure
                    Cognitive Services and Flask, achieving 87% F1-score on
                    real-world text data.
                  </li>
                  <li>
                    Automated end-to-end ML workflows using Azure Functions and
                    CI/CD pipelines, reducing manual intervention in model
                    update and release cycles.
                  </li>
                  <li>
                    Built production-ready APIs with structured logging, error
                    handling, and monitoring integration; managed cloud
                    infrastructure, deployment pipelines, and service
                    reliability on Azure.
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0 liquid-glass rounded-[8px] px-6 py-3 border border-[#6FFF00]/20 flex items-center justify-center">
                <span className="text-[#6FFF00] font-bold text-[14px]">
                  Edunet Foundation
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS GRID */}
      <section
        id="work"
        className="w-full bg-[#010828] py-24 flex flex-col items-center"
      >
        <div className="w-full max-w-[1831px] px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
            <div>
              <h2 className="font-grotesk text-[32px] md:text-[60px] leading-[1]">
                Featured
                <br />
                <span className="inline-block ml-4 sm:ml-8 md:ml-24 lg:ml-32">
                  <span className="font-condiment text-[#6FFF00] mr-4 lowercase capitalize text-[28px] sm:text-[48px] md:text-[68px] -rotate-2 inline-block">
                    Github
                  </span>
                  Projects
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-start cursor-pointer group">
              <a
                href="https://github.com/Avisav24"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-start gap-4 liquid-glass px-8 py-4 rounded-[8px] hover:bg-white/10 transition-colors pointer-events-auto"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6FFF00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                    <span className="w-8 h-8 rounded-full border border-[#6FFF00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <span className="font-grotesk text-[32px] md:text-[60px] leading-[0.85] tracking-tight">
                    VISIT
                  </span>
                  <div className="flex flex-col -space-y-1">
                    <span className="font-grotesk text-[20px] md:text-[36px] leading-[0.85] text-transparent [-webkit-text-stroke:1px_#EFF4FF]">
                      GITHUB
                    </span>
                    <span className="font-grotesk text-[20px] md:text-[36px] leading-[0.85] text-transparent [-webkit-text-stroke:1px_#EFF4FF]">
                      PROFILE
                    </span>
                  </div>
                </div>
                <div className="w-full h-[12px] bg-[#6FFF00] group-hover:scale-x-105 transition-transform origin-left" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="liquid-glass rounded-[8px] p-[18px] hover:bg-white/10 transition-colors group cursor-pointer flex flex-col h-full"
              data-hover-sfx="true"
            >
              <div className="relative w-full pb-[100%] rounded-[8px] overflow-hidden mb-4 relative z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-[#010828]/90 via-[#010828]/40 to-transparent">
                  <h3 className="font-grotesk text-[28px] leading-[1.1] mb-2 shadow-sm">
                    NSE Data Downloader
                  </h3>
                  <p className="font-mono text-[12px] normal-case text-[#EFF4FF]/90 line-clamp-3">
                    Automates daily downloads of NIFTY 500 and Market Indices
                    files from NSE India with scheduled times, running
                    seamlessly in the background and logging with timestamps.
                  </p>
                </div>
              </div>
              <div className="liquid-glass rounded-[8px] px-5 py-4 flex justify-between items-center mt-auto">
                <div>
                  <div className="text-[11px] text-[#EFF4FF]/70 mb-1 tracking-wider">
                    TECH STACK:
                  </div>
                  <div className="text-[14px] font-bold">Python • Pandas</div>
                </div>
                <a
                  href="https://github.com/Avisav24/NSE_Data_Downloader"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[48px] h-[48px] rounded-[8px] bg-[#6FFF00] flex items-center justify-center shadow-lg shadow-[#6FFF00]/50 group-hover:scale-110 transition-transform text-black"
                >
                  <ChevronRight />
                </a>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="liquid-glass rounded-[8px] p-[18px] hover:bg-white/10 transition-colors group cursor-pointer flex flex-col h-full"
              data-hover-sfx="true"
            >
              <div className="relative w-full pb-[100%] rounded-[8px] overflow-hidden mb-4 relative z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-[#010828]/90 via-[#010828]/40 to-transparent">
                  <h3 className="font-grotesk text-[28px] leading-[1.1] mb-2 shadow-sm">
                    Indian Election Predictor V2
                  </h3>
                  <p className="font-mono text-[12px] normal-case text-[#EFF4FF]/90 line-clamp-3">
                    AI-powered sentiment analysis web app predicting election
                    outcomes using Twitter CSV data and NLP. Features real-time
                    analyses and interactive Plotly charting vectors.
                  </p>
                </div>
              </div>
              <div className="liquid-glass rounded-[8px] px-5 py-4 flex justify-between items-center mt-auto">
                <div>
                  <div className="text-[11px] text-[#EFF4FF]/70 mb-1 tracking-wider">
                    TECH STACK:
                  </div>
                  <div className="text-[14px] font-bold">
                    Python • NLP • CSS
                  </div>
                </div>
                <a
                  href="https://github.com/Avisav24/Indian_Election_Predictor_V2"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[48px] h-[48px] rounded-[8px] bg-[#6FFF00] flex items-center justify-center shadow-lg shadow-[#6FFF00]/50 group-hover:scale-110 transition-transform text-black"
                >
                  <ChevronRight />
                </a>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="liquid-glass backdrop-blur-[25px] rounded-[8px] p-[18px] hover:bg-white/10 transition-colors group cursor-pointer flex flex-col h-full"
              data-hover-sfx="true"
            >
              <div className="relative w-full pb-[100%] rounded-[8px] overflow-hidden mb-4 relative z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-[#010828]/90 via-[#010828]/40 to-transparent">
                  <h3 className="font-grotesk text-[28px] leading-[1.1] mb-2 shadow-sm">
                    ShopMind Ecosystem
                  </h3>
                  <p className="font-mono text-[12px] normal-case text-[#EFF4FF]/90 line-clamp-3">
                    Intelligent e-commerce architecture built with sophisticated
                    AI-powered recommendations, complete real-time cart
                    functionality, eco-friendly metrics and deep responsiveness.
                  </p>
                </div>
              </div>
              <div className="liquid-glass backdrop-blur-[25px] rounded-[8px] px-5 py-4 flex justify-between items-center mt-auto">
                <div>
                  <div className="text-[11px] text-[#EFF4FF]/70 mb-1 tracking-wider">
                    TECH STACK:
                  </div>
                  <div className="text-[14px] font-bold">
                    Node.js • React • JS
                  </div>
                </div>
                <a
                  href="https://github.com/Avisav24/ShopMind"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[48px] h-[48px] rounded-[8px] bg-[#6FFF00] flex items-center justify-center shadow-lg shadow-[#6FFF00]/50 group-hover:scale-110 transition-transform text-black"
                >
                  <ChevronRight />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section
        id="contact"
        className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
        />

        <div className="absolute inset-0 w-full h-full flex items-center justify-end max-w-[1831px] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-right lg:pr-[20%] z-10 w-full max-w-[800px] drop-shadow-xl"
          >
            <span className="absolute -top-8 -left-8 md:-top-16 md:-left-16 font-condiment text-[17px] md:text-[68px] text-[#6FFF00] mix-blend-exclusion lowercase capitalize -rotate-2">
              Go beyond
            </span>
            <h2 className="font-grotesk text-[16px] md:text-[40px] lg:text-[60px] leading-[1.1] text-right ml-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <div className="mb-4 md:mb-12">JOIN IN.</div>
              <div>SOLVE WHAT OTHERS IGNORE.</div>
              <div>BUILD WHAT'S NEXT.</div>
              <div>FOLLOW THE SIGNAL.</div>
            </h2>
          </motion.div>
        </div>

        {/* Bottom Social Block (Horizontal) & Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-[12%] md:bottom-[15%] flex flex-col md:flex-row items-center gap-8 z-20"
        >
          <div
            className="liquid-glass rounded-[8px] flex flex-row"
            style={{
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
            }}
          >
            <a
              href="mailto:abhinavvats.dev@gmail.com"
              className="flex items-center justify-center px-6 md:px-12 h-[12vw] sm:h-[5rem] border-r border-white/10 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-vats25/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-6 md:px-12 h-[12vw] sm:h-[5rem] border-r border-white/10 hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/Avisav24"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-6 md:px-12 h-[12vw] sm:h-[5rem] hover:bg-white/10 transition-colors"
            >
              <Github className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]" />
            </a>
          </div>

          {/* Quick Message Form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const btn = form.querySelector("button");
              const input = form.elements.namedItem(
                "message",
              ) as HTMLInputElement;

              if (btn) {
                btn.innerHTML = "Sending...";
                btn.disabled = true;
              }

              try {
                // Using Web3Forms for backend-less email delivery
                // You can get your own access key at https://web3forms.com/
                const response = await fetch(
                  "https://api.web3forms.com/submit",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: JSON.stringify({
                      access_key: "fc8d3547-ec69-493d-ad31-7ff460162145", // Added your live access key
                      message: input.value,
                      subject: "New Portfolio Message",
                      from_name: "Portfolio Visitor",
                    }),
                  },
                );

                if (response.ok) {
                  if (btn) {
                    btn.innerHTML = "Sent!";
                    btn.classList.add("bg-[#6FFF00]/30");
                  }
                  form.reset();
                } else {
                  throw new Error("Failed to send");
                }
              } catch (err) {
                if (btn) {
                  btn.innerHTML = "Error!";
                  setTimeout(() => {
                    btn.innerHTML = "Send";
                    btn.disabled = false;
                  }, 2000);
                }
              }
            }}
            className="liquid-glass backdrop-blur-[25px] rounded-[8px] p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 h-full md:h-[5rem]"
          >
            <input
              name="message"
              type="text"
              placeholder="Write a message..."
              onInput={(e) => {
                const btn = (
                  e.currentTarget.form as HTMLFormElement
                ).querySelector("button");
                if (btn && btn.innerHTML === "Sent!") {
                  btn.innerHTML = "Send";
                  btn.classList.remove("bg-[#6FFF00]/30");
                  btn.disabled = false;
                }
              }}
              className="bg-transparent border-b border-[#6FFF00]/50 outline-none px-4 py-2 font-mono text-[12px] md:text-[16px] w-full md:w-[300px] h-full focus:border-[#6FFF00] transition-colors placeholder:text-white/30"
              required
            />
            <button
              type="submit"
              className="uppercase font-grotesk text-[14px] md:text-[18px] bg-[#6FFF00]/10 hover:bg-[#6FFF00]/20 border border-[#6FFF00]/30 text-[#6FFF00] px-8 rounded-[8px] transition-colors w-full md:w-auto h-[48px] flex items-center justify-center cursor-pointer hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
