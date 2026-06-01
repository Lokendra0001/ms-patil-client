"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/common/Button";
import img1 from "../../../public/assets/home/about/left-img.png";
import img2 from "../../../public/assets/home/about/first-img.png";
import img3 from "../../../public/assets/home/about/main-img.png";


const AboutSnippet = () => {
  return (
    <section className="w-full  py-20 lg:py-28 border-b border-slate-100 select-text overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Custom Shaped Architectural Image Showcase */}
          <div className=" h-full lg:col-span-6 relative pb-12 lg:pb-0 flex justify-center lg:justify-start">
            {/* The Outer Offset Shaped Border */}

            {/* The Image Container */}
            <div className="relative h-full w-full max-w-[500px] z-10">
              <div className="absolute inset-0  -right-10 -bottom-2 border border-primary-light/60 rounded-tl-[40px] rounded-tr-[80px] rounded-br-[15px] rounded-bl-[4px] pointer-events-none z-0 hidden sm:block" />
              <Image
                src={img1}
                alt="M/S Chetankumar Bhagwan Suryawanshi Project Site"
                className="object-cover z-50 relative  rounded-tl-[40px] rounded-tr-[80px] rounded-br-[15px] rounded-bl-[4px]"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Folded 3D Ribbon Badge (Inspired by brochure geometric wraps) */}
            <div className="absolute -left-5 bottom-16  select-none">
              {/* Back shadow fold (z-0) */}
              <div className="absolute -bottom-4 left-2.5 w-15 h-5 bg-primary-light z-0 transform skew-x-45  pointer-events-none" />

              {/* Main front ribbon face (z-20) */}
              <div className="z-30 relative bg-primary-light text-text-white px-6 py-3.5  shadow-2xl  transform ">
                <div className="absolute inset-1 border border-slate-950/10 pointer-events-none" />
                <div className="transform  flex flex-col">
                  <span className="text-2xl font-black tracking-tight leading-none">
                    20+ YRS
                  </span>
                  <span className="text-[8px] font-semibold uppercase tracking-[0.15em] mt-1 text-text-primary">
                    Established Trust
                  </span>
                </div>
              </div>

              {/* Underneath fold shadow bracket (z-0) */}
              {/* <div className="absolute top-[48px] left-0 w-8 h-8 bg-slate-950/90 z-0 transform -skew-x-12 pointer-events-none shadow-md" /> */}
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
