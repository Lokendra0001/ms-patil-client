"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/common/Button";

const AboutDetails = () => {
  const bulletPoints = [
    "Making lives easier",
    "Get every solution right here",
    "Innovation and creativity",
    "Fine engineering only with us",
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Brand Story & Feature Bullets */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tagline block with gold line on left */}
            <div className="flex items-center gap-3 mb-4 select-none">
              <div className="w-8 h-0.5 bg-primary-light" />
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase">
                Who We Are
              </span>
            </div>

            {/* Highlight Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-6">
              Bringing{" "}
              <span className="text-primary-light-hover">Your Ideas</span> and
              Innovations to Life
            </h2>

            {/* Paragraph Description */}
            <div className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed space-y-6 max-w-3xl mb-8">
              <p>
                M/S Chetankumar Bhagwan Suryawanshi (formerly operating under Ms
                Patil Construction) is a premier PWD Class IV Government
                Contractor based in Dhule, Maharashtra. Over the past 20 years,
                we have delivered engineering, procurement, and civil
                construction services for highway networks, industrial
                facilities, and urban municipal utilities.
              </p>
            </div>

            {/* List with gold arrows (matching reference template) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-10 select-none">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-primary-light-hover flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm font-extrabold text-primary">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Consult Now Button */}
            <div className="select-none">
              <Button
                variant="theme"
                href="/contact?consultation=true"
                className="px-8 py-3.5 text-xs tracking-wider uppercase h-auto "
              >
                Consult Now
              </Button>
            </div>
          </div>

          {/* Right Column: Engineering Side Image */}
          <div className="lg:col-span-5 relative">
            {/* Decorative wireframe background bracket */}
            <div 
              className="absolute w-full h-full border-2 border-primary-light/40 pointer-events-none z-0 hidden sm:block rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[20px] rounded-br-[20px]" 
              style={{ transform: "translate(16px, 16px)" }}
            />

            {/* Primary Image: Engineers looking at documents on-site */}
            <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] bg-slate-100 overflow-hidden z-10 border border-slate-200/80 rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[20px] rounded-br-[20px]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Site Managers Reviewing Structural Blueprints"
                className="object-cover filter grayscale-[10%] hover:grayscale-0 transition-all duration-500 hover:scale-102"
                fill
                priority
              />
            </div>

            {/* Secondary Floating Statistics Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary-light text-text-primary px-6 py-5  z-20 flex flex-col justify-center items-center w-28 h-28 sm:w-32 sm:h-32 select-none">
              <span className=" text-3xl sm:text-4xl font-black tracking-tight leading-none">
                20+
              </span>
              <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-slate-900 mt-1.5 text-center leading-tight">
                Years of Trust
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
