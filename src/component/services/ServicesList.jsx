"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/component/common/Heading";
import service1 from "../../../public/assets/home/hero/banner-2.png";
import service2 from "../../../public/assets/services/hero/service2.png";
import service3 from "../../../public/assets/home/projects/indo.jpg";
import service4 from "../../../public/assets/home/deliver/highway.png";
import service5 from "../../../public/assets/home/hero/banner-1.png";
import service7 from "../../../public/assets/services/hero/service7.png";

const ServicesList = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const categories = [
    {
      number: "01",
      title: "Roads, Surfaces & Finishing",
      tagline: "Pavement Paving & Landscaping",
      description:
        "Constructing high-traffic pavements, asphalt surfaces, interlocking paver configurations, and finished transit landscaping elements.",
      items: [
        "Bituminous Road Laying",
        "Interlocking Pavers Block Paving",
        "Wet Mix Macadam (WMM) Base",
        "Kerb Stone & Median Edge Laying",
        "Soft & Hard Landscaping Elements",
        "Surface Dressing & Markings",
      ],
      image: service4,
    },
    {
      number: "02",
      title: "Structural & Concrete Works",
      tagline: "Heavy Framework & Foundations",
      description:
        "Delivering heavy structural foundations, concrete reinforcement frameworks, and precision shuttering solutions for industrial and residential specifications.",
      items: [
        "Reinforced Cement Concrete (RCC)",
        "Trimix Flooring / Dewatering",
        "Slab Drains & Heavy Drainage",
        "Box Culverts & Slab Culverts",
        "System Formwork & Shuttering",
        "Foundations & Retaining Walls",
      ],
      image: service1,
    },
    {
      number: "03",
      title: "Earthworks & Infrastructure",
      tagline: "Site Preparation & Utility Ducting",
      description:
        "Providing deep excavation, structural shoring, piling foundations, sewer lines, and underground utility layouts for core site readiness.",
      items: [
        "Deep & Bulk Site Excavation",
        "Piling & Shoring Systems",
        "Soil Backfilling & Compaction",
        "Drainage & Sewer Line Laying",
        "Underground Utility Ducts",
        "Land Grading & Site Clearing",
      ],
      image: service2,
    },
  ];

  const handleToggle = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 lg:pt-50 bg-white select-none">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <Heading
          tagline="Capabilities & Scope"
          title="Contracting"
          highlight="Divisions"
          description="Click to expand and view specific technical lists of services for each contracting department."
          layout="split"
        />

        {/* Accordion Container */}
        <div className="border-t border-slate-200">
          {categories.map((cat, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div key={cat.number} className="border-b border-slate-200">
                {/* Accordion Bar Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between py-6 sm:py-8 cursor-pointer select-none text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-primary-light tracking-wide">
                      {cat.number}
                    </span>
                    <h3 className="text-xl sm:text-2.5xl font-extrabold text-primary tracking-tight group-hover:text-primary-light-hover transition-colors duration-300">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Accordion Toggle Icon */}
                  <div className="shrink-0 ml-4">
                    <div
                      className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-primary-light border-primary-light text-white rotate-180"
                          : "bg-transparent text-slate-950"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Accordion Collapsible Panel */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[600px] opacity-100 pb-8 sm:pb-12"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-2">
                    {/* Left Column: Gritty Wide-Angle Construction Shot (5 cols) */}
                    <div className="lg:col-span-5">
                      <div className="relative overflow-hidden border border-slate-100 bg-slate-900 aspect-[16/10] lg:aspect-[16/10] w-full">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover grayscale-[15%] hover:grayscale-0 hover:scale-102 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 z-10" />
                      </div>
                    </div>

                    {/* Right Column: Division Summary & Technical Capabilities (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full py-1">
                      <div>
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-primary-light uppercase mb-2 block">
                          {cat.tagline}
                        </span>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                          {cat.description}
                        </p>

                        {/* Staggered double-column bullet list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-8">
                          {cat.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="flex items-start gap-2.5"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-light mt-2 shrink-0 rounded-none" />
                              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct Enquiry Link */}
                      <div className="pt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-950 uppercase hover:text-primary-light transition-colors group/link"
                        >
                          Enquire Department
                          <svg
                            className="w-4.5 h-4.5 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
