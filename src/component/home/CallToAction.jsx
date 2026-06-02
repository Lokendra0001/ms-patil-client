"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/CTA/Button";

const CallToAction = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-white select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Floating Premium Card Frame */}
        <div className="relative w-full bg-slate-50/50 border border-slate-200/60 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.015)]">
          {/* Engineering blueprint background watermark */}
          <Image
            src="/construction_blueprint_bg.jpg"
            alt="Engineering Blueprint Background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-[0.08]"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-0" />

          {/* Symmetrical split grid wrapper */}
          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-10 items-center">
            {/* Left Column: Typography Statement & Contacts */}
            <div className="xl:col-span-7 flex flex-col items-start ">
              {/* Gold tagline badge with pulsing dot animation */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-primary-light/10 text-primary-light-hover rounded-none mb-6 border border-primary-light/10 select-text">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase">
                  Let's Build Together
                </span>
              </div>

              {/* Title heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary leading-tight tracking-tight mb-5 max-w-3xl">
                Ready to bring your next infrastructure{" "}
                <span className="text-primary-light-hover">landmark</span> to
                life?
              </h2>

              {/* Standard yellow accent line */}
              <div className="w-16 h-1 bg-primary-light mb-6 select-text" />

              {/* Description body */}
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-8 max-w-2xl">
                From highway bypass corridors and municipal complexes to
                automated concrete manufacturing plants, M/S Chetankumar Bhagwan
                Suryawanshi provides end-to-end PWD contracting solutions
                engineered to last.
              </p>

              {/* Contact Micro-Cards Grid */}
              <div className="flex flex-wrap gap-4 w-full">
                {/* Office Contact Card */}
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 border border-slate-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.005)] hover:border-primary-light/50 transition-all duration-300 group/phone min-w-[280px]">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-primary-light-hover shrink-0 group-hover/phone:bg-primary-light/15 transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-black">
                      Call Our Office
                    </div>
                    <div className="text-sm font-extrabold text-slate-800 group-hover/phone:text-primary-light-hover transition-colors duration-300">
                      +91 98765 43210
                    </div>
                  </div>
                </div>

                {/* Email Support Card */}
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 border border-slate-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.005)] hover:border-primary-light/50 transition-all duration-300 group/email min-w-[280px]">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-primary-light-hover shrink-0 group-hover/email:bg-primary-light/15 transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-black">
                      Email Us
                    </div>
                    <div className="text-sm font-extrabold text-slate-800 group-hover/email:text-primary-light-hover transition-colors duration-300">
                      info@mspatilconstruction.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Stacked Action Buttons Frame */}
            <div className="xl:col-span-5 w-full flex flex-col items-center xl:items-end justify-center  ">
              <div className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row xl:flex-col gap-4">
                <Button
                  href="/contact?consultation=true"
                  variant="theme"
                  size="lg"
                  className="w-full uppercase tracking-wider py-4 h-auto select-text"
                >
                  Book a Consultation
                </Button>

                <Button
                  href="/projects"
                  variant="reverse"
                  size="lg"
                  className="w-full uppercase tracking-wider py-4 h-auto select-text"
                >
                  View Our Portfolio
                </Button>
              </div>

              {/* Bottom validation seal */}
              <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 font-bold tracking-wide uppercase select-text">
                <svg
                  className="w-3.5 h-3.5 text-primary-light-hover"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Registered Class IV PWD Contractor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
