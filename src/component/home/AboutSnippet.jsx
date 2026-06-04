"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/CTA/Button";
import ContentContainer from "../common/ContentContainer";
import { capabilities, images } from "../../data/home/about";
import Heading from "../common/Heading";

const AboutSnippet = () => {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-border-secondary select-text overflow-hidden">
      <ContentContainer>
        <div className="flex flex-col xl:flex-row w-full gap-16  items-center xl:items-stretch">
          {/* Left Column: Custom 4-Image Staggered Collage */}
          <div className="w-full xl:w-[45%] relative pb-12 xl:pb-0 flex justify-center xl:justify-start">
            {/* The Image Container */}
            <div className=" w-full h-[400px] sm:h-[650px] lg:h-[750px] xl:h-full z-10 grid grid-cols-2 gap-2 md:gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-full h-full border border-border-secondary overflow-hidden ${img.classes}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className="object-cover object-top transition-transform duration-500 pointer-events-none select-none"
                    fill
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Folded 3D Ribbon Badge: Back shadow fold (Rendered behind the image container z-10) */}
            <div className="absolute left-0 sm:-left-2.5 xl:-left-3.5 bottom-24 xl:bottom-15.5 select-text z-0">
              <div className="absolute -bottom-4 left-2.5 w-15 h-5 bg-primary transform skew-x-60 pointer-events-none" />
            </div>

            {/* Folded 3D Ribbon Badge: Front ribbon face (Rendered on top of the image container z-10) */}
            <div className="absolute -left-3 sm:-left-5 bottom-15 sm:bottom-25 xl:bottom-16 select-text z-40">
              <div className="relative bg-primary text-text-white  p-2 sm:px-6 sm:py-3.5 shadow-2xl transform">
                <div className="absolute inset-1 border border-slate-950/10 pointer-events-none" />
                <div className="transform flex flex-col">
                  <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-text-white ">
                    20+ YRS
                  </span>
                  <span className=" text-[5px] sm:text-[8px] font-semibold uppercase tracking-[0.15em] mt-1 text-slate-900">
                    Established Trust
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Content & Capability Cards */}
          <div className="w-full xl:w-[55%] flex flex-col items-start pl-0 xl:pl-4">
            {/* Architectural Title Block */}

            <Heading
              title="Decades of"
              tagline="About Our Firm"
              highlight=" Engineering & Infrastructure Excellence"
              className="mb-0!"
              description="M/S Chetankumar Bhagwan Suryawanshi is a professionally managed civil engineering and government contracting firm (PWD Class IV) headquartered in Dhule, Maharashtra. We deliver high-quality structures on-time, within budget, and without compromise."
              descClassName="text-text-primary! font-medium mb-8 xl:max-w-2xl text-xs sm:text-sm md:text-base"
            />

            {/* Dynamic Capabilities Stack with Hover Animations */}
            <div className="w-full xl:max-w-2xl flex flex-col gap-5 mb-10">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="group border-l-2 border-border-secondary hover:border-primary pl-6 py-3.5 transition-all duration-300 cursor-pointer rounded-r-lg hover:bg-slate-50 hover:pl-8"
                >
                  <span className="text-[10px] font-bold tracking-wider select-text transition-colors uppercase text-text-gray group-hover:text-primary">
                    {cap.num} / {cap.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide transition-colors mt-0.5 text-slate-800 group-hover:text-primary">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-text-gray  font-medium leading-relaxed mt-1">
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
