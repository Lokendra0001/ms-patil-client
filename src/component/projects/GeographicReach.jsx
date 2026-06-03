"use client";

import React, { useState } from "react";

const GeographicReach = () => {
  const [activeRegion, setActiveRegion] = useState("maharashtra");

  const regions = [
    {
      id: "maharashtra",
      name: "Maharashtra",
      type: "Primary Hub",
      details:
        "Corporate Headquarters in Pune. Major construction projects across Dhule, Nandurbar, Chalisgaon, and Nashik.",
      stats: "15+ Completed Projects",
      coordinates: { top: "61.5%", left: "17.5%" },
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      type: "Infrastructure",
      details:
        "State highway bypass corridors, earthworks, and PWD road construction projects utilizing heavy concrete paving machinery.",
      stats: "Highway Bypass Projects",
      coordinates: { top: "35.76%", left: "26.99%" },
    },
    {
      id: "mp",
      name: "Madhya Pradesh",
      type: "Materials & Grading",
      details:
        "Industrial site grading, aggregate crushing plant connections, and raw material procurement networks.",
      stats: "Supply Chain Network",
      coordinates: { top: "40.79%", left: "42.05%" },
    },
    {
      id: "delhi",
      name: "Delhi NCR",
      type: "Tendering & Regulatory",
      details:
        "Central liaison office for national highway tenders, government regulatory approvals, and structural compliance certification.",
      stats: "National Liaison Hub",
      coordinates: { top: "30.23%", left: "30.44%" },
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-24 border-t border-slate-100 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 select-text">
          <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2">
            Geographic Reach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary leading-tight">
            Our Presence & Operations
          </h2>
          <div className="w-16 h-1 bg-primary-light mt-4" />
        </div>

        {/* 2-Column Map Dashboard (Map Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Real India Vector Map with Pulsing Hotspots */}
          <div className="lg:col-span-7 flex justify-center order-1">
            <div className="relative w-full max-w-[550px] aspect-[5/6] bg-slate-50 border border-slate-200/50 p-8 shadow-sm flex items-center justify-center overflow-hidden">
              {/* Map Title/Indicator overlay */}
              <div className="absolute top-6 left-6 z-10 select-text">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                  Interactive Map
                </span>
                <span className="text-xs font-extrabold text-primary uppercase">
                  Regional Workstations
                </span>
              </div>

              {/* Real India Map Outline Silhouette with Absolute hotspots inside the same wrapper */}
              <div className="relative w-[85%] h-[85%] select-text">
                <img
                  src="/india_map.webp"
                  alt="Map of India outline"
                  className="w-full h-full object-contain opacity-[0.08] grayscale"
                />

                {/* Glowing Interactive Hotspot Overlay Pins inside the same scaling context */}
                {regions.map((region) => {
                  const isActive = activeRegion === region.id;

                  return (
                    <div
                      key={region.id}
                      style={{
                        top: region.coordinates.top,
                        left: region.coordinates.left,
                      }}
                      onMouseEnter={() => setActiveRegion(region.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin flex items-center justify-center w-8 h-8"
                    >
                      {/* Ring ping animation centered */}
                      <span
                        className={`absolute h-8 w-8 rounded-full opacity-75 ${
                          isActive
                            ? "animate-ping bg-primary-light"
                            : "group-hover/pin:animate-ping bg-slate-400"
                        }`}
                      />

                      {/* Inner hotspot dot centered */}
                      <span
                        className={`absolute h-4 w-4 rounded-full border border-white shadow-md transition-all duration-300 ${
                          isActive
                            ? "bg-primary-light scale-125"
                            : "bg-slate-500 hover:bg-slate-700"
                        }`}
                      />

                      {/* Popover Hover Tooltip */}
                      <div
                        className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 whitespace-nowrap shadow-lg transition-all duration-300 pointer-events-none ${
                          isActive
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 translate-y-1"
                        }`}
                      >
                        {region.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Content Cards List */}
          <div className="lg:col-span-5 flex flex-col gap-4 order-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 select-text">
              Select or Hover on a Region
            </span>

            {regions.map((region) => {
              const isActive = activeRegion === region.id;
              return (
                <div
                  key={region.id}
                  onMouseEnter={() => setActiveRegion(region.id)}
                  className={`p-5 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-primary bg-slate-50 shadow-md translate-x-1"
                      : "border-slate-200/60 bg-white hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-extrabold text-primary">
                      {region.name}
                    </h4>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 ${
                        isActive
                          ? "bg-primary-light text-slate-900"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {region.type}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 font-normal leading-relaxed mb-3">
                    {region.details}
                  </p>

                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-primary-light-hover">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light-hover" />
                    <span>{region.stats}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicReach;
