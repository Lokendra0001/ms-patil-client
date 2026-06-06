"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/CTA/Button";
import Heading from "@/component/common/Heading";
import banner from "../../../public/assets/about/who-we-are/banner2.webp";
import { bulletPoints } from "../../data/about/details";

const AboutDetails = () => {
  return (
    <section className="w-full bg-white-background  py-20 lg:py-28 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-y-16 gap-10 xl:gap-15 items-center">
          {/* Left Column: Brand Story & Feature Bullets */}
          <div className="order-2 lg:order-1 col-span-1 lg:col-span-7 flex flex-col items-start">
            <Heading
              tagline="Who We Are"
              title="Bringing Your"
              highlight=" Ideas and Innovations to Life"
              className="mb-6! max-w-2xl"
              description="M/s Chetankumar Bhagwan Suryawanshi is a premier registered PWD Class IV Government Contractor based in Dhule, Maharashtra. Backed by 20+ years of civil engineering expertise, we deliver end-to-end engineering, procurement, and specialized concrete infrastructure—spanning highway bypass corridors, complex industrial foundations, and heavy cross-drainage networks across 5 states including Maharashtra, Rajasthan, and Madhya Pradesh."
            />

            {/* List with gold arrows (matching reference template) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-10 select-text">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
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
                  <span className="text-xs sm:text-sm font-medium text-text-primary">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Consult Now Button */}
            <div className="select-text">
              <Button
                variant="theme"
                href="/contact?consultation=true"
                className="px-8 py-3.5 text-xs tracking-wider uppercase h-auto "
              >
                Consult Now
              </Button>
            </div>
          </div>

          {/* Right Column: Engineering Side Image (Large-Scale Precision Bevel Layout) */}
          <div className="order-1 lg:order-2 col-span-1 lg:col-span-5 relative w-full select-none py-6">
            <div className="relative w-full mx-auto lg:ml-auto">
              {/* Background gold bevel outline SVG (prevents browser clipping borders) */}
              <svg
                className="absolute inset-0 text-primary pointer-events-none z-0 translate-x-4 translate-y-4 hidden sm:block w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon
                  points="12,0 100,0 100,88 88,100 0,100 0,12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Primary Image Container with Precision Beveled Shape */}
              <div
                className="relative overflow-hidden z-10 bg-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200/50"
                style={{
                  clipPath:
                    "polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)",
                }}
              >
                <Image
                  src={banner}
                  alt="Site Managers Reviewing Blueprints"
                  className="w-full h-auto hover:scale-102 transition-transform duration-700 select-none pointer-events-none"
                  priority
                />
              </div>

              {/* Floating Statistics Badge with matching Beveled Corners */}
              <div
                className="absolute -bottom-6 -left-2 sm:-left-6 bg-primary text-text-white px-6 py-5 z-20 flex flex-col justify-center items-center w-25 h-20 sm:w-32 sm:h-32 shadow-xl border border-primary/20"
                style={{
                  clipPath:
                    "polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)",
                }}
              >
                <span className="text-2xl sm:text-4xl font-extrabold text-text-white tracking-tight leading-none font-mono">
                  20+
                </span>
                <span className="text-[8px] sm:text-[10px] font-bold tracking-widest uppercase text-text-white mt-2 text-center leading-tight">
                  Years of Trust
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
