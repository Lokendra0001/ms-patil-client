"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Heading from "@/component/common/Heading";
import { regionsData } from "@/data/geographicReach";

const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full max-w-[550px] aspect-[5/6] bg-slate-50 border border-border-secondary p-8 shadow-sm flex flex-col items-center justify-center overflow-hidden rounded-xs">
      <span className="text-[10px] font-bold text-text-gray uppercase tracking-widest block mb-2">
        Loading Map
      </span>
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const GeographicReach = () => {
  const [activeRegion, setActiveRegion] = useState("maharashtra");
  const regions = regionsData;

  return (
    <section className="w-full bg-white-background  py-20 lg:py-24 border-t border-border-secondary select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <Heading
          tagline="Geographic Reach"
          title="Our Presence &"
          highlight="Operations"
          align="center"
          className="mb-16!"
        />

        {/* 2-Column Map Dashboard (Map Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* LEFT COLUMN: Real India Vector Map with Pulsing Hotspots */}
          <div className="lg:col-span-7 order-1 w-full h-[450px] lg:h-auto lg:min-h-full">
            <InteractiveMap
              regions={regions}
              activeRegion={activeRegion}
              onSelectRegion={setActiveRegion}
            />
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
                      : "border-border-secondary bg-white-background  hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-extrabold text-primary">
                      {region.name}
                    </h4>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 ${
                        isActive
                          ? "bg-primary text-text-white"
                          : "bg-border-secondary text-text-gray "
                      }`}
                    >
                      {region.type}
                    </span>
                  </div>

                  <p className="text-xs text-text-gray  font-normal leading-relaxed mb-3">
                    {region.details}
                  </p>

                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
