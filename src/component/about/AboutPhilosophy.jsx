"use client";

import React from "react";

const AboutPhilosophy = () => {
  // Dynamic philosophy dataset containing structured text and specialized vector graphics
  const philosophyData = [
    {
      id: "vision",
      num: "01",
      tag: "THE FUTURE",
      title: "Our Vision",
      description:
        "To become a trusted leader in the construction industry by delivering innovative, sustainable, and high-quality infrastructure that shapes the future and improves communities.",
      type: "bullets",
      items: [
        "Global industry leadership standards",
        "Innovation-driven development and structural growth",
        "Sustainable civil engineering and carbon-neutral targets",
      ],
      // Vision graphic:Sightline technical compass drawing
      graphic: (
        <svg
          className="w-full h-full max-w-sm text-primary-light-hover"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          <circle cx="100" cy="100" r="50" className="opacity-60" />
          <line x1="20" y1="100" x2="180" y2="100" className="opacity-40" />
          <line x1="100" y1="20" x2="100" y2="180" className="opacity-40" />
          {/* Compass dial */}
          <line x1="100" y1="100" x2="150" y2="50" strokeWidth="2" />
          <polygon points="150,50 142,58 147,63" fill="currentColor" />
          {/* Measurements */}
          <text
            x="155"
            y="48"
            fontSize="8"
            className="fill-primary font-bold opacity-80 font-mono"
          >
            45° N
          </text>
          <text
            x="105"
            y="32"
            fontSize="8"
            className="fill-primary font-bold opacity-60 font-mono"
          >
            R=80m
          </text>
          <circle cx="100" cy="100" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "mission",
      num: "02",
      tag: "THE EXECUTION",
      title: "Our Mission",
      description:
        "Our mission is to transform every client’s vision into reality by delivering high-quality construction services on time and within budget, while maintaining excellence in workmanship, safety, and professionalism.",
      type: "checkboxes",
      items: [
        "Strict adherence to project delivery timelines",
        "Client-centric customization and communication",
        "Rigorous quality standards and site inspections",
        "Ethical practices, licensing, and regulatory compliance",
      ],
      // Mission graphic: House structural elevation blueprint
      graphic: (
        <svg
          className="w-full h-full max-w-sm text-primary-light-hover"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Ground line */}
          <line x1="10" y1="160" x2="190" y2="160" strokeWidth="2" />
          {/* House frames */}
          <rect x="40" y="80" width="120" height="80" className="opacity-60" />
          <polygon
            points="30,80 100,20 170,80"
            className="opacity-80"
            strokeWidth="1.5"
          />
          <rect x="85" y="110" width="30" height="50" className="opacity-60" />
          {/* Dimension markings */}
          <line x1="30" y1="175" x2="170" y2="175" strokeDasharray="3 3" />
          <line x1="30" y1="170" x2="30" y2="180" />
          <line x1="170" y1="170" x2="170" y2="180" />
          <text
            x="90"
            y="190"
            fontSize="8"
            className="fill-primary font-bold opacity-80 font-mono"
          >
            14.00 m
          </text>
          {/* Grid indicators */}
          <circle cx="100" cy="20" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "values",
      num: "03",
      tag: "THE PILLARS",
      title: "Core Values",
      description:
        "We never compromise on construction standards and are guided by our five core pillars of operation that shape our company culture and delivery standards:",
      type: "numbered",
      items: [
        {
          label: "Quality First",
          desc: "Never compromise on structural build standards",
        },
        {
          label: "Integrity",
          desc: "Honest and transparent corporate work culture",
        },
        { label: "Commitment", desc: "Delivering what we promise on time" },
        {
          label: "Safety",
          desc: "Prioritizing people and site safety guidelines",
        },
        {
          label: "Innovation",
          desc: "Using modern engineering solutions and techniques",
        },
      ],
      // Values graphic: Architectural classical pillars
      graphic: (
        <svg
          className="w-full h-full max-w-sm text-primary-light-hover"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Base */}
          <rect
            x="30"
            y="150"
            width="140"
            height="15"
            className="opacity-85"
            strokeWidth="1.5"
          />
          <rect x="20" y="165" width="160" height="10" className="opacity-60" />
          {/* Pillars */}
          <rect x="50" y="55" width="15" height="95" className="opacity-55" />
          <rect x="92" y="55" width="15" height="95" className="opacity-55" />
          <rect x="135" y="55" width="15" height="95" className="opacity-55" />
          {/* Architrave */}
          <polygon
            points="15,55 100,15 185,55"
            className="opacity-85"
            strokeWidth="1.5"
          />
          <circle cx="57.5" cy="100" r="1.5" fill="currentColor" />
          <circle cx="99.5" cy="100" r="1.5" fill="currentColor" />
          <circle cx="142.5" cy="100" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-24 border-t border-slate-200/40 relative overflow-hidden select-text">
      {/* Blueprint grid background */}
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
        {/* Section Headers */}
        <div className="flex flex-col items-center text-center mb-24 select-none">
          <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2">
            Our Purpose
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
            Our Vision, Mission &{" "}
            <span className="text-primary-light-hover">Core Values</span>
          </h2>
          <div className="w-16 h-1 bg-primary-light mt-4" />
        </div>

        {/* Dynamic alternating row sequence */}
        <div className="space-y-28 lg:space-y-36">
          {philosophyData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Left/Right Text Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  {/* Item Index / Tag */}
                  <div className="flex items-center gap-3.5 mb-5 select-none">
                    <span className="text-xs font-bold text-primary-light-hover font-mono">
                      {item.num}
                    </span>
                    <div className="w-6 h-px bg-slate-300" />
                    <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-6">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Conditional List Rendering */}
                  <div className="w-full border-t border-slate-100 pt-6">
                    {/* 1. Bullets (Vision List) */}
                    {item.type === "bullets" && (
                      <ul className="space-y-3.5 select-none w-full">
                        {item.items.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs font-extrabold text-primary"
                          >
                            <svg
                              className="w-4 h-4 text-primary-light-hover flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                              />
                            </svg>
                            <span className="leading-tight">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* 2. Checkboxes (Mission List) */}
                    {item.type === "checkboxes" && (
                      <ul className="space-y-3.5 select-none w-full">
                        {item.items.map((checkbox, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs font-extrabold text-primary"
                          >
                            <span className="w-4 h-4 bg-primary-light/15 border border-primary-light/35 flex items-center justify-center flex-shrink-0 text-primary-light-hover font-bold text-[9px] mt-0.5">
                              ✓
                            </span>
                            <span className="leading-tight">{checkbox}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* 3. Numbered Core Values List */}
                    {item.type === "numbered" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full">
                        {item.items.map((val, idx) => {
                          const numVal = String(idx + 1).padStart(2, "0");
                          return (
                            <div
                              key={idx}
                              className="flex items-start gap-3.5 pb-2.5 border-b border-slate-100 last:border-none"
                            >
                              <span className="text-xs font-black text-primary-light-hover mt-0.5 select-none font-mono">
                                {numVal}
                              </span>
                              <div className="flex flex-col leading-tight">
                                <span className="text-xs font-extrabold text-primary uppercase select-none">
                                  {val.label}
                                </span>
                                <span className="text-[11px] text-slate-500 font-semibold mt-0.5">
                                  {val.desc}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Left/Right Visual Column (Architectural Drafting Vector) */}
                <div className="w-full lg:w-1/2 flex items-center justify-center py-6">
                  <div className="w-full aspect-square max-w-[320px] bg-slate-50/50 border border-slate-100 rounded-none flex items-center justify-center p-8 relative shadow-inner">
                    {/* Corner Drafting Marks */}
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-slate-300" />
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-slate-300" />
                    <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-slate-300" />
                    <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-slate-300" />

                    {item.graphic}
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

export default AboutPhilosophy;
