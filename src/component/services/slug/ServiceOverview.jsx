"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/component/common/Heading";

const ServiceOverview = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100 select-text">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Technical Spec sheet info */}
          <div className="lg:col-span-4 space-y-6">
            <Heading
              title={"Execution "}
              tagline={"Service Overview"}
              align="left"
              highlight={"Scope"}
              className="mb-0!"
            />

            <p className="text-sm text-text-gray  leading-relaxed  ">
              {data.detailedOverview}
            </p>

            {data.machinery && (
              <div className="pt-6 border-t border-slate-200">
                <span className="text-[10px] font-black tracking-widest text-slate-400 block mb-1.5 uppercase  ">
                  Active Machinery
                </span>
                <p className="text-xs text-text-gray font-semibold tracking-wide leading-relaxed  ">
                  {data.machinery}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Raw Visual Showcase Gallery */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.capabilities.map((item, index) => {
                const indexStr = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={index}
                    className="border border-slate-200 bg-white group overflow-hidden relative rounded-none flex flex-col justify-between"
                  >
                    {/* Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover  group-hover:scale-102 group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/10 z-10" />
                    </div>

                    {/* Content Details */}
                    <div className="p-5 border-t border-slate-200 bg-white">
                      <span className="text-[10px] font-bold text-primary-light   tracking-widest block mb-1.5 ">
                        {indexStr} / Techinical Component
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold text-text-primary  tracking-wider leading-snug  ">
                        {item.name}
                      </h3>
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

export default ServiceOverview;
