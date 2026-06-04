"use client";

import React from "react";
import Heading from "@/component/common/Heading";

const TechnicalSplit = ({ data }) => {
  if (!data || !data.scope) return null;

  return (
    <section className="py-20 sm:py-24 bg-white-background  border-t border-border-secondary select-text">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Scope & Punchlines */}
          <div className="lg:col-span-7 space-y-8">
            <Heading
              title="Execution "
              tagline="Technical Scope"
              align="left"
              highlight="Overview"
              className="mb-0!"
            />

            <div className="space-y-6">
              {data.scope.punchlines.map((punchline, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  {/* Step Index Number */}
                  <span className="text-xs sm:text-sm font-black text-primary-hover tracking-wider select-text shrink-0 bg-slate-50 w-8 h-8 flex items-center justify-center border border-border-secondary rounded-none">
                    0{idx + 1}
                  </span>

                  {/* Punchline text */}
                  <p className="text-xs sm:text-sm text-text-gray tracking-wider leading-relaxed mt-1">
                    {punchline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Validated Reference Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-border-secondary rounded-none p-8 sm:p-10 space-y-6 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              {/* Gold vertical bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary select-text" />

              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-[0.22em] text-primary uppercase block">
                  Capacity Verification
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
                  Validated Reference
                </h3>
              </div>

              <div className="space-y-4 pt-4 border-t border-border-secondary">
                {/* Client / Partner */}
                <div>
                  <span className="text-[10px] font-bold text-text-gray uppercase tracking-widest block mb-1">
                    Client / Partner
                  </span>
                  <p className="text-sm font-semibold text-text-primary">
                    {data.scope.reference.client}
                  </p>
                </div>

                {/* Project Location */}
                <div>
                  <span className="text-[10px] font-bold text-text-gray uppercase tracking-widest block mb-1">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-text-primary">
                    {data.scope.reference.location}
                  </p>
                </div>

                {/* Scope */}
                <div>
                  <span className="text-[10px] font-bold text-text-gray uppercase tracking-widest block mb-1">
                    Project Scope
                  </span>
                  <p className="text-xs sm:text-sm text-text-gray tracking-wider leading-relaxed">
                    {data.scope.reference.project}
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

export default TechnicalSplit;
