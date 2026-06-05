"use client";

import React from "react";
import Link from "next/link";
import Heading from "@/component/common/Heading";
import { PhoneCall, Check } from "lucide-react";
import {
  highlightPoints,
  checklistItems,
  whyChooseUsData,
} from "../../data/home/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 lg:py-24 select-text relative overflow-hidden bg-slate-50/10 border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Restored 3-column / 2-row Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1 (Row 1, Col 1): Title Block & Checklist */}
          <div className="flex flex-col justify-center pr-4 mb-6 lg:mb-0">
            <Heading
              tagline={whyChooseUsData.tagline}
              title={whyChooseUsData.title}
              highlight={whyChooseUsData.highlight}
              className="!mb-0"
            />

            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {checklistItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 font-semibold select-text"
                >
                  <Check className="w-4 h-4 text-primary-hover shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Loop over highlights array (Box 2 to Box 5) */}
          {highlightPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 border border-slate-200/60 rounded-none flex flex-col justify-between group transition-all duration-300 min-h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden"
              >
                {/* Bottom expanding yellow hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary transition-all duration-300 group-hover:w-full" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary/15 group-hover:border-primary/10 transition-colors duration-300 shrink-0">
                    <Icon className="w-6 h-6 text-primary-hover group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-4xl font-extrabold text-slate-100 group-hover:text-primary-hover/10 transition-colors duration-300 select-text">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2 transition-colors duration-300 group-hover:text-primary-hover">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-gray group-hover:text-text-primary transition-colors duration-300 leading-relaxed font-medium">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Box 6 (Row 2, Col 3): Call-To-Action Card (Fills grid symmetrically) */}
          <div className="bg-white/80 backdrop-blur-sm p-8 border border-slate-200/60 rounded-none flex flex-col justify-between group transition-all duration-300 min-h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden">
            {/* Bottom expanding yellow hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary transition-all duration-300 group-hover:w-full" />

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary/15 group-hover:border-primary/10 transition-colors duration-300 shrink-0">
                <PhoneCall className="w-6 h-6 text-primary-hover group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-4xl font-extrabold text-slate-100 group-hover:text-primary-hover/10 transition-colors duration-300 select-text">
                0{highlightPoints.length + 1}
              </span>
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2 relative z-10">
                  {whyChooseUsData.cta.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-gray group-hover:text-text-primary transition-colors duration-300 leading-relaxed font-medium relative z-10">
                  {whyChooseUsData.cta.description}
                </p>
              </div>

              <Link
                href={whyChooseUsData.cta.btnHref}
                className="text-primary-hover hover:text-slate-900 font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors duration-200 mt-6 select-text relative z-10"
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
