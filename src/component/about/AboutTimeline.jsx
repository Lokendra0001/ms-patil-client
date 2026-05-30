"use client";

import React, { useState } from "react";
import Image from "next/image";

const AboutTimeline = () => {
  // Default active index set to the present milestone (index 3)
  const [activeIndex, setActiveIndex] = useState(3);

  const milestones = [
    {
      year: "2006",
      tag: "PHASE I",
      title: "The Foundation",
      description:
        "Established the firm, executing localized civil works, earthworks, and municipal drainage systems to lay down our core construction capabilities.",
      metric: "Focus Area",
      metricDetail: "Localized Civil Works & Earthmoving Operations",
      image:
        "https://images.unsplash.com/photo-1579847259164-e35f08e5988d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      year: "2014",
      tag: "PHASE II",
      title: "Scale & Capability Upgrade",
      description:
        "Expanded operations into major institutional structures, industrial foundation laying, and grading up to handling large-scale concrete works.",
      metric: "Focus Area",
      metricDetail: "Industrial Foundations & Heavy Concrete Works",
      image:
        "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
    },
    {
      year: "2021",
      tag: "PHASE III",
      title: "Vertical Integration",
      description:
        "Shifted to self-reliance by setting up fully automated Ready Mix Concrete (RMC) plants and stone crushing facilities to control raw material quality.",
      metric: "Focus Area",
      metricDetail: "RMC Operations & Crushing Plant Production",
      image:
        "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      year: "Present",
      tag: "CURRENT STATE",
      title: "Premier Contractor",
      description:
        "Operating as a premier Class IV PWD Contractor delivering critical highway bypass corridors, institutional complexes, and private infrastructure frameworks.",
      metric: "Focus Area",
      metricDetail: "Highway Bypass Corridors & PWD Infrastructure",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b border-slate-200/50 relative overflow-hidden select-text">
      {/* Blueprint grid watermark */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-primary-light uppercase mb-2">
            Our Evolution
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
            Our{" "}
            <span className="text-primary-light-hover font-bold">
              Growth Journey
            </span>
          </h2>
          <div className="w-16 h-1 bg-primary-light mt-4" />
        </div>

        {/* Split Screen Dynamic Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-[580px] lg:h-[520px] bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.01)] relative">
          {/* Drafting guidelines crosshairs */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-slate-200 z-20 pointer-events-none" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-slate-200 z-20 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-slate-200 z-20 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-slate-200 z-20 pointer-events-none" />

          {/* Left Panel: Dynamic Ken-Burns Image Screen */}
          <div className="col-span-1 lg:col-span-7 relative overflow-hidden bg-slate-900 min-h-[300px] lg:min-h-full">
            {milestones.map((milestone, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isSelected ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    className={`object-cover transition-transform duration-[10000ms] ease-out ${
                      isSelected ? "scale-105" : "scale-100"
                    }`}
                    priority={idx === 3}
                  />
                  {/* Subtle dark layout shield overlay */}
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>
              );
            })}
          </div>

          {/* Right Panel: Vertical Accordion Switcher */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-slate-200/85 bg-white select-none">
            <div className="space-y-4">
              {milestones.map((milestone, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className={`border-l-2 transition-all duration-300 pl-6 py-2 cursor-pointer ${
                      isSelected
                        ? "border-l-primary-light pl-8"
                        : "border-l-slate-100 hover:border-l-slate-300 hover:pl-7"
                    }`}
                  >
                    {/* Panel Header */}
                    <div className="flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span
                          className={`text-[9px] font-bold tracking-wider transition-colors duration-300 ${
                            isSelected ? "text-primary-light" : "text-slate-400"
                          }`}
                        >
                          0{idx + 1} / {milestone.tag}
                        </span>

                        <h3
                          className={`text-sm sm:text-base font-bold tracking-wide mt-0.5 transition-colors duration-300 ${
                            isSelected ? "text-primary" : "text-slate-500"
                          }`}
                        >
                          {milestone.title}
                        </h3>
                      </div>

                      <span
                        className={`text-xs font-bold font-mono tracking-wider transition-colors duration-300 ${
                          isSelected ? "text-primary-light" : "text-slate-400"
                        }`}
                      >
                        {milestone.year}
                      </span>
                    </div>

                    {/* Accordion Slide Details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isSelected
                          ? "max-h-[160px] opacity-100 mt-3"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {/* Description */}
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Operational Focus area */}
                      <div className="flex flex-col text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                        <span>
                          {milestone.metric}:{" "}
                          <span className="text-primary font-bold lowercase first-letter:uppercase">
                            {milestone.metricDetail}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
