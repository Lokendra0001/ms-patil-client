"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/component/common/Heading";
import { railway, scopeItems, reference } from "../../data/services/railway";

const ServicesRailway = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-border-secondary select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <Heading
          tagline="STRATEGIC SECTOR EXPERIENCE"
          title="Aviation & "
          highlight="Railway Infrastructure"
          align="center"
          textColor="text-text-primary "
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          {/* Left Column: Heavy Visual Showcase */}
          <div className="lg:col-span-6 overflow-hidden relative min-h-[350px] lg:min-h-0 bg-slate-background border border-border-secondary">
            <Image
              src={railway}
              alt="Approved Railway Infrastructure Work"
              fill
              className="object-cover grayscale-[10%] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-background/15" />

            {/* Absolute Technical Badge */}
            <div className="absolute bottom-6 left-6 bg-primary text-text-white  px-4 py-2  text-xs uppercase font-semibold tracking-wide z-10">
              RDSO Compliant Work
            </div>
          </div>

          {/* Right Column: High-Density Technical Spec Sheet */}
          <div className="lg:col-span-6 bg-white-background  p-8 sm:p-10 border border-border-secondary flex flex-col justify-between">
            {/* Top Text Intro */}
            <div>
              <p className="text-sm sm:text-base text-text-gray font-medium   mb-8">
               Executing precision civil works under strict RDSO railway specifications and preparing for high-grade airside airport deployments.
              </p>

              {/* Scopes - Clean 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {scopeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-border-primary pl-4"
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
            <div className="border-t border-border-secondary pt-6 mt-8">
              <span className="text-[9px] font-mono text-text-gray block mb-4 tracking-widest uppercase">
                Validated Project Reference
              </span>

              <div className="grid  lg:grid-cols-3 gap-4">
                {/* Agency */}
                <div>
                  <span className="text-[8px] font-black uppercase text-text-gray block tracking-wider">
                    Agency
                  </span>
                  <p className="text-xs font-black uppercase text-text-primary mt-0.5 truncate">
                    {reference.agency}
                  </p>
                </div>

                {/* Location */}
                <div>
                  <span className="text-[8px] font-black uppercase text-text-gray block tracking-wider">
                    Location
                  </span>
                  <p className="text-xs font-black uppercase text-text-primary mt-0.5">
                    {reference.location}
                  </p>
                </div>

                {/* Assets */}
                <div>
                  <span className="text-[8px] font-black uppercase text-text-gray block tracking-wider">
                    Assets Deployed
                  </span>
                  <p className="text-xs font-black uppercase text-text-primary mt-0.5 truncate">
                    {reference.assets}
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
