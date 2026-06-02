"use client";

import React from "react";
import Image from "next/image";
import ceo from "../../../public/assets/about/ceo-message/ceo-profile1.jpeg";

import { credentials } from "../../data/about/leadership";

const Leadership = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-24  relative overflow-hidden select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left Column: Owner Portrait Photo */}
          <div className="lg:col-span-5 relative w-full max-w-[360px] mx-auto select-text">
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
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2 block select-text">
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
                  <span className="text-[9px] font-mono font-bold text-primary-light block mb-2 select-text">
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
