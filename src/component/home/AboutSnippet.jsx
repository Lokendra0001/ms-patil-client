"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/CTA/Button";
import ContentContainer from "../common/ContentContainer";
import { capabilities, images } from "../../data/home/about";

const AboutSnippet = () => {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-slate-100 select-text overflow-hidden">
      <ContentContainer>
        <div className="flex flex-col lg:flex-row w-full gap-16 xl:gap-24 items-center lg:items-stretch">
          {/* Left Column: Custom 4-Image Staggered Collage */}
          <div className="w-full lg:w-[45%] relative pb-12 lg:pb-0 flex justify-center lg:justify-start">
            {/* The Image Container */}
            <div className="px-5 md:px-0 w-full h-[540px] lg:h-full lg:absolute lg:inset-0 z-10 grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-full h-full border border-slate-100 overflow-hidden ${img.classes}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    fill
                    priority={img.priority}
                  />
                </div>
              ))}
            </div>

            {/* Folded 3D Ribbon Badge: Back shadow fold (Rendered behind the image container z-10) */}
            <div className="absolute -left-1 md:-left-5 bottom-16 select-text z-0">
              <div className="absolute -bottom-4 left-2.5 w-15 h-5 bg-primary-light transform skew-x-45 pointer-events-none" />
            </div>

            {/* Folded 3D Ribbon Badge: Front ribbon face (Rendered on top of the image container z-10) */}
            <div className="absolute -left-1 md:-left-5 bottom-16 select-text z-40">
              <div className="relative bg-primary-light text-white px-6 py-3.5 shadow-2xl transform">
                <div className="absolute inset-1 border border-slate-950/10 pointer-events-none" />
                <div className="transform flex flex-col">
                  <span className="text-2xl font-black tracking-tight leading-none text-white">
                    20+ YRS
                  </span>
                  <span className="text-[8px] font-semibold uppercase tracking-[0.15em] mt-1 text-slate-900">
                    Established Trust
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Content & Capability Cards */}
          <div className="w-full lg:w-[55%] flex flex-col items-start pl-0 lg:pl-4">
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
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="group border-l-2 border-slate-100 hover:border-primary-light pl-6 py-3.5 transition-all duration-300 cursor-pointer rounded-r-lg hover:bg-slate-50 hover:pl-8"
                >
                  <span className="text-[10px] font-bold tracking-wider select-text transition-colors uppercase text-slate-400 group-hover:text-primary-light">
                    {cap.num} / {cap.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide transition-colors mt-0.5 text-slate-800 group-hover:text-primary">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                    {cap.desc}
                  </p>
                </div>
              ))}
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
      </ContentContainer>
    </section>
  );
};

export default AboutSnippet;
