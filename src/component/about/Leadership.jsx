"use client";

import React from "react";
import Image from "next/image";
import ceo from "../../../public/assets/about/ceo-message/ceo-profile1.jpeg";

const Leadership = () => {
  const credentials = [
    {
      num: "01",
      label: "ROLE",
      title: "Founder & Proprietor",
      desc: "Steering all regulatory filings, bidding operations, and quality oversight for stone crushing and RMC plant structures.",
      fullWidth: false,
    },
    {
      num: "02",
      label: "PRACTICE",
      title: "20+ Years Experience",
      desc: "Decades of leadership in civil works, municipal infrastructure drainage, bulk grading, and heavy site earthworks.",
      fullWidth: false,
    },
    {
      num: "03",
      label: "SPECIALIZATION",
      title: "Infrastructure, Railways & Industrial Works",
      desc: "Executing concrete structures, rail alignment corridors, heavy foundation grading, state highways, and vertical raw material processing units.",
      fullWidth: true,
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-24  relative overflow-hidden select-text">
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
        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left Column: Owner Portrait Photo */}
          <div className="lg:col-span-5 relative w-full max-w-[360px] mx-auto select-none">
            {/* Offset outline border backing */}
            <div className="absolute inset-0 border border-primary-light/40 translate-x-4 translate-y-4 pointer-events-none z-0" />

            {/* Image container frame */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-100 border border-slate-200 shadow-md z-10">
              <Image
                src={ceo}
                alt="Chetankumar Bhagwan Suryawanshi"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Accent Caption Block */}
            <div className="ml-7 mt-6 border-l-2 border-primary-light pl-4 py-1">
              <h4 className="text-sm font-extrabold text-primary">
                C. B. Suryawanshi
              </h4>
              <span className="text-[10px] text-slate-400 font-normal uppercase tracking-widest block mt-0.5">
                Founder & Proprietor
              </span>
            </div>
          </div>

          {/* Right Column: Credentials Dashboard */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header copy */}
            <div className="mb-8">
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2 block select-none">
                Firm Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary leading-tight">
                Proprietorship Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-2 max-w-xl">
                Under Mr. Chetankumar's direct leadership, M/S Chetankumar
                Bhagwan Suryawanshi has scaled operations to execute key state
                highway corridors and structural systems.
              </p>
            </div>

            {/* Dashboard Cards Grid (Looped Dynamically) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((card, idx) => (
                <div
                  key={idx}
                  className={`p-6 bg-slate-50 border border-slate-200/60 rounded-none relative group hover:border-primary-light/45 transition-all duration-300 ${
                    card.fullWidth ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="text-[9px] font-mono font-bold text-primary-light block mb-2 select-none">
                    {card.num} / {card.label}
                  </span>
                  <h4 className="text-sm font-extrabold text-primary mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
