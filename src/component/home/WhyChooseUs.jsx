"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/component/common/Heading";
import {
  highlightPoints,
  checklistItems,
  whyChooseUsData,
} from "../../data/home/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 lg:py-24 select-text relative overflow-hidden bg-slate-50/10 border-b border-slate-100">
      {/* Next.js optimized background Image component acting as a watermark drawing */}
      <Image
        src="/construction_blueprint_bg.webp"
        alt="L&T style blueprint layout background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-80"
        fill
        priority
      />
      {/* 80% opacity overlay to keep drawing lines soft and secure high-contrast typography */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Restored 3-column / 2-row Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1 (Row 1, Col 1): Title Block & Checklist */}
          <div className="flex flex-col justify-center pr-4 mb-6 lg:mb-0">
            <Heading
              tagline={whyChooseUsData.tagline}
              title={whyChooseUsData.title}
              highlight={whyChooseUsData.highlight}
              textColor="text-primary"
              className="!mb-0"
            />

            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {checklistItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 font-semibold select-text"
                >
                  {/* Yellow Check SVG */}
                  <svg
                    className="w-4 h-4 text-primary-light-hover shrink-0"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Loop over highlights array (Box 2 to Box 5) */}
          {highlightPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 border border-slate-200/60 rounded-none flex flex-col justify-between group transition-all duration-300 min-h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden"
            >
              {/* Bottom expanding yellow hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary-light transition-all duration-300 group-hover:w-full" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary-light/15 group-hover:border-primary-light/10 transition-colors duration-300 shrink-0">
                  {point.icon}
                </div>
                <span className="text-4xl font-extrabold text-slate-100 group-hover:text-primary-light-hover/10 transition-colors duration-300 select-text">
                  0{index + 1}
                </span>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-primary-light-hover">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300 leading-relaxed font-semibold">
                  {point.description}
                </p>
              </div>
            </div>
          ))}

          {/* Box 6 (Row 2, Col 3): Call-To-Action Card (Fills grid symmetrically) */}
          <div className="bg-white/80 backdrop-blur-sm p-8 border border-slate-200/60 rounded-none flex flex-col justify-between group transition-all duration-300 min-h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden">
            {/* Bottom expanding yellow hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary-light transition-all duration-300 group-hover:w-full" />

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary-light/15 group-hover:border-primary-light/10 transition-colors duration-300 shrink-0">
                <svg
                  className="w-6 h-6 text-primary-light-hover"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <span className="text-4xl font-extrabold text-slate-100 group-hover:text-primary-light-hover/10 transition-colors duration-300 select-text">
                0{highlightPoints.length + 1}
              </span>
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 relative z-10">
                  {whyChooseUsData.cta.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300 leading-relaxed font-semibold relative z-10">
                  {whyChooseUsData.cta.description}
                </p>
              </div>

              <Link
                href={whyChooseUsData.cta.btnHref}
                className="text-primary-light-hover hover:text-slate-900 font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors duration-200 mt-6 select-text relative z-10"
              >
                {whyChooseUsData.cta.btnText}{" "}
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
