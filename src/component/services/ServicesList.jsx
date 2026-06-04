"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/component/common/Heading";
import { categories } from "../../data/services/list";

const ServicesList = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleToggle = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section className="pb-20 sm:pb-28 sm:pt-10 xl:pt-50 bg-white-background  select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <Heading
          tagline="Capabilities & Scope"
          title="Contracting"
          highlight="Divisions"
          description="Click to expand and view specific technical lists of services for each contracting department."
          layout="split"
          className="mb-0! lg:mb-10!"
        />

        {/* Accordion Container */}
        <div className="border-t border-slate-200">
          {categories.map((cat, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div key={cat.number} className="border-b border-slate-200">
                {/* Accordion Bar Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between py-6 sm:py-8 cursor-pointer select-text text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-primary tracking-wide">
                      {cat.number}
                    </span>
                    <h3
                      className={`text-lg md:text-2.5xl font-semibold ${isOpen ? "text-primary" : "text-text-primary"} tracking-tight group-hover:text-primary-hover transition-colors duration-300`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {/* Accordion Toggle Icon */}
                  <div className="shrink-0 ml-4">
                    <div
                      className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-primary border-primary text-text-white  rotate-180"
                          : "bg-transparent text-text-primary "
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Accordion Collapsible Panel */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[900px] opacity-100 pb-8 sm:pb-12"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-2">
                    {/* Left Column: Gritty Wide-Angle Construction Shot (5 cols) */}
                    <div className="lg:col-span-5">
                      <div className="relative overflow-hidden border border-slate-100 bg-slate-900 aspect-[16/10] lg:aspect-[16/10] w-full">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover grayscale-[15%] hover:grayscale-0 hover:scale-102 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 z-10" />
                      </div>
                    </div>

                    {/* Right Column: Division Summary & Technical Capabilities (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full py-1">
                      <div>
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-primary uppercase mb-2 block">
                          {cat.tagline}
                        </span>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                          {cat.description}
                        </p>

                        {/* Staggered double-column bullet list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-8">
                          {cat.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="flex items-start gap-2.5"
                            >
                              <div className="w-1.5 h-1.5 bg-primary mt-2 shrink-0 rounded-none" />
                              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
