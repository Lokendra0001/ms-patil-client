"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/common/Button";

const AboutSnippet = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28 border-b border-slate-100 select-text overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Staggered Architectural Dual Image Collage */}
          <div className="lg:col-span-6 relative pb-16 sm:pb-24 lg:pb-0">
            {/* Background design border wireframe */}
            <div className="absolute top-8 left-4 right-12 bottom-12 border border-primary-light/35 pointer-events-none z-0 hidden sm:block" />

            <div className="grid grid-cols-2 gap-6 relative z-10">
              {/* Image 1: Infrastructure/Roadways (Staggered high) */}
              <div className="aspect-[3/4] relative bg-slate-100 overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
                  alt="Infrastructure Project Site"
                  className="object-cover filter grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-102"
                  fill
                  priority
                />
              </div>

              {/* Image 2: Commercial/Structural Building (Staggered low) */}
              <div className="aspect-[3/4] relative bg-slate-100 overflow-hidden border border-slate-200 shadow-md mt-16">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="Industrial Construction Site"
                  className="object-cover filter grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-102"
                  fill
                  priority
                />
              </div>
            </div>

            {/* Floating Black Heritage Stamp Badge */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-950 text-white p-5 shadow-2xl z-20 border border-slate-800 flex flex-col items-center justify-center text-center w-32 h-32 select-none">
              <span className="text-[10px] font-black tracking-[0.25em] text-primary-light uppercase">
                Experience
              </span>
              <span className="text-2xl font-black text-white mt-1">
                20+ Yrs
              </span>
              <div className="w-6 h-0.5 bg-primary-light mt-2" />
            </div>
          </div>

          {/* Right Column: Professional Content & Interactive Capability Cards */}
          <div className="lg:col-span-6 flex flex-col items-start pl-0 lg:pl-4">
            {/* Architectural Title Block */}
            <div className="flex flex-col items-start mb-6">
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2">
                About Our Firm
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
                Decades of Engineering &{" "}
                <span className="text-primary-light-hover">
                  Contracting Excellence
                </span>
              </h2>
              <div className="w-16 h-1 bg-primary-light mt-3" />
            </div>

            {/* Professional intro statement */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-semibold mb-8 max-w-xl">
              M/S Chetankumar Bhagwan Suryawanshi is a professionally managed
              civil engineering and government contracting firm (PWD Class IV)
              headquartered in Dhule, Maharashtra. We deliver high-quality
              structures on-time, within budget, and without compromise.
            </p>

            {/* Dynamic Capabilities Stack with Hover Animations */}
            <div className="w-full max-w-xl flex flex-col gap-5 mb-10">
              {/* Item 01 */}
              <div className="group border-l-2 border-slate-100 hover:border-primary-light pl-6 py-2 transition-all duration-300 hover:pl-8 cursor-default">
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary-light tracking-wider select-none transition-colors">
                  01 / Vertical Integration
                </span>
                <h4 className="text-xs sm:text-sm font-bold tracking-wide text-slate-800 group-hover:text-primary transition-colors mt-0.5">
                  We don't just build, we manufacture
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                  Operating our own Stone Crusher, RMC, Sand Processing, and Fly
                  Ash Brick plants to guarantee material quality from source to
                  structure.
                </p>
              </div>

              {/* Item 02 */}
              <div className="group border-l-2 border-slate-100 hover:border-primary-light pl-6 py-2 transition-all duration-300 hover:pl-8 cursor-default">
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary-light tracking-wider select-none transition-colors">
                  02 / Compliant Registry
                </span>
                <h4 className="text-xs sm:text-sm font-bold tracking-wide text-slate-800 group-hover:text-primary transition-colors mt-0.5">
                  PWD Class IV Government Contractor
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                  Fully registered and licensed under GST, PAN, MSME, and PWD
                  Class IV regulations to execute high-capacity projects.
                </p>
              </div>

              {/* Item 03 */}
              <div className="group border-l-2 border-slate-100 hover:border-primary-light pl-6 py-2 transition-all duration-300 hover:pl-8 cursor-default">
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary-light tracking-wider select-none transition-colors">
                  03 / Regional Operations
                </span>
                <h4 className="text-xs sm:text-sm font-bold tracking-wide text-slate-800 group-hover:text-primary transition-colors mt-0.5">
                  Multi-State Infrastructure Delivery
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                  Managing institutional, civil, and industrial developments
                  across Maharashtra, Rajasthan, Madhya Pradesh, Delhi, and
                  Mumbai.
                </p>
              </div>
            </div>

            {/* Yellow Action Button */}
            <Button
              href="/about"
              variant="theme"
              size="lg"
              className="group uppercase tracking-wider text-xs px-10 py-4 h-auto inline-flex items-center gap-2"
            >
              Know More
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">
                →
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
