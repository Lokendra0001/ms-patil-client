"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/component/common/Heading";


const WhyChooseUs = () => {
  const highlightPoints = [
    {
      title: "Vertical Integration",
      description:
        "Operating our own stone aggregate crushers, sand processing units, RMC, and fly ash brick plants.",
      icon: (
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Owned Machinery Fleet",
      description:
        "Complete scheduling control with our comprehensive inventory of modern cranes, mixers, and paving machinery.",
      icon: (
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
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V9a1 1 0 00-1-1h-6v8h7z"
          />
        </svg>
      ),
    },
    {
      title: "Quality & Compliance",
      description:
        "Registered Class IV PWD contractor with strict laboratory batch testing at our plants to verify strength.",
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "On-Time Execution",
      description:
        "Strict project timeline management protocols delivering highway corridors and institutional facilities on schedule.",
      icon: (
        <svg
          className="w-6 h-6 text-primary-light-hover"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const checklistItems = [
    "Building the future with ideas",
    "Designing future with excellence",
    "Discovering possibility in concrete",
  ];

  return (
    <section className="w-full py-20 lg:py-24 select-text relative overflow-hidden bg-slate-50/10 border-b border-slate-100">
      {/* Next.js optimized background Image component acting as a watermark drawing */}
      <Image
        src="/construction_blueprint_bg.jpg"
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
              tagline="WHY CHOOSE US"
              title="Designing Future"
              highlight="with Excellence"
              textColor="text-primary"
              className="!mb-0"
            />


            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {checklistItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 font-semibold select-none"
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
                <span className="text-4xl font-extrabold text-slate-100 group-hover:text-primary-light-hover/10 transition-colors duration-300 select-none">
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

              <Link
                href={"#"}
                className="w-fit mt-6 relative z-10 flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-primary-light-hover transition-colors duration-300"
              >
                <span>Explore Details</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </Link>
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
              <span className="text-4xl font-extrabold text-slate-100 group-hover:text-primary-light-hover/10 transition-colors duration-300 select-none">
                05
              </span>
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 relative z-10">
                  Partner With Us
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300 leading-relaxed font-semibold relative z-10">
                  Ready to initiate your next industrial, municipal, or
                  infrastructure landmark? Let's connect.
                </p>
              </div>

              <Link
                href="/contact"
                className="text-primary-light-hover hover:text-slate-900 font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors duration-200 mt-6 select-none relative z-10"
              >
                CONTACT US{" "}
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
