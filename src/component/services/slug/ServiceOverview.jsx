"use client";

import React from "react";
import Heading from "@/component/common/Heading";

const ServiceOverview = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-slate-100 select-text">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Technical Spec sheet info */}
          <div className="lg:col-span-5 space-y-8">
            <Heading
              title={"Execution "}
              tagline={"Service Overview"}
              align="left"
              highlight={"Scope"}
              className="mb-0!"
            />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {data.detailedOverview}
            </p>

            {data.machinery && (
              <div className="p-8 bg-slate-50 border-l-4 border-primary-light mt-8">
                <span className="text-[10px] font-black tracking-widest text-slate-400 block mb-2 uppercase">
                  Active Machinery & Fleet
                </span>
                <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
                  {data.machinery}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Text-Driven Capability Grid (No Images) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.capabilities.map((item, index) => {
                const indexStr = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={index}
                    className="p-8 border border-slate-200 bg-white hover:border-primary-light/40  transition-all duration-300 flex flex-col justify-between min-h-[180px] group"
                  >
                    <div>
                      <span className="text-3xl sm:text-4xl font-black text-slate-100 group-hover:text-primary-light/25 transition-colors block mb-4">
                        {indexStr}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-wide leading-snug">
                        {item.name}
                      </h3>
                    </div>
                    <div className="h-1 w-8 bg-slate-200 group-hover:w-16 group-hover:bg-primary-light transition-all duration-300 mt-6" />
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

export default ServiceOverview;
