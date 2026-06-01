"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/component/common/Heading";

const ServicesRailway = () => {
  const scopeItems = [
    {
      title: "Track Bed & Subgrade",
      spec: "IRUSS formation gradient & compaction",
    },
    { title: "Ballast Bed & Blanket", spec: "Aggregate laying & treatment" },
    { title: "RDSO RCC Box Culverts", spec: "Live-line under-track drainage" },
    { title: "Toe Walls & Pitching", spec: "Slope protection & stabilization" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/60 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <Heading
          tagline="Official Sector Experience"
          title="Approved Railway"
          highlight="Civil Infrastructure"
          align="center"
          textColor="text-slate-950"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Heavy Visual Showcase */}
          <div className="lg:col-span-6 overflow-hidden relative min-h-[350px] lg:min-h-0 bg-slate-900 border border-slate-200/60">
            <Image
              src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80"
              alt="Approved Railway Infrastructure Work"
              fill
              className="object-cover grayscale-[10%] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-950/15" />

            {/* Absolute Technical Badge */}
            <div className="absolute bottom-6 left-6 bg-primary-light text-text-white px-4 py-2  text-xs uppercase font-semibold tracking-wide z-10">
              RDSO Compliant Work
            </div>
          </div>

          {/* Right Column: High-Density Technical Spec Sheet */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 border border-slate-200/60 flex flex-col justify-between">
            {/* Top Text Intro */}
            <div>
              <p className="text-sm sm:text-base text-text-gray font-medium   mb-8">
                Executing highly regulated civil works in live-line rail
                environments under strict Indian Railways specifications.
              </p>

              {/* Scopes - Clean 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {scopeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-red-linear-right-background pl-4"
                  >
                    <h4 className="text-sm font-semibold uppercase text-text-primary tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-gray  mt-1">{item.spec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Project Validation Banner */}
            <div className="border-t border-slate-200/80 pt-6 mt-8">
              <span className="text-[9px] font-mono text-slate-400 block mb-4 tracking-widest uppercase">
                Validated Project Reference
              </span>

              <div className="grid grid-cols-3 gap-4">
                {/* Agency */}
                <div>
                  <span className="text-[8px] font-black uppercase text-slate-400 block tracking-wider">
                    Agency
                  </span>
                  <p className="text-xs font-black uppercase text-text-primary mt-0.5 truncate">
                    HEIGL Infra Ltd
                  </p>
                </div>

                {/* Location */}
                <div>
                  <span className="text-[8px] font-black uppercase text-slate-400 block tracking-wider">
                    Location
                  </span>
                  <p className="text-xs font-black uppercase text-text-primary mt-0.5">
                    Rajasthan, IN
                  </p>
                </div>

                {/* Assets */}
                <div>
                  <span className="text-[8px] font-black uppercase text-slate-400 block tracking-wider">
                    Assets Deployed
                  </span>
                  <p className="text-xs font-black uppercase text-text-primary mt-0.5 truncate">
                    Hitachi 210 & RMC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesRailway;
