"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/component/common/Heading";
import { sectorsData } from "@/data/sectors";

const SectorsList = () => {
  const sectors = Object.values(sectorsData);

  return (
    <section className="py-20 sm:py-24 bg-white select-text">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <Heading
          title="Heavy Industry "
          tagline="Capabilities Matrix"
          align="center"
          highlight="Sectors"
          className="mb-16"
        />

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sectors.map((sector) => (
            <div
              key={sector.slug}
              className="group relative flex flex-col justify-between min-h-[460px] bg-white border border-border-secondary rounded-none overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300"
            >
              
              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 select-text">
                <Image
                  src={sector.image}
                  alt={sector.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Sector Badge overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary text-white text-[10px] tracking-wider uppercase font-bold rounded-none">
                    {sector.badge}
                  </span>
                </div>
              </div>

              {/* Text Context & Link */}
              <div className="p-8 flex-grow flex flex-col justify-between relative">
                
                {/* Bottom expanding gold line */}
                <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary-light transition-all duration-300 group-hover:w-full select-text" />

                <div className="space-y-3">
                  {/* Subtitle */}
                  <span className="text-[10px] font-black tracking-wider text-primary-light-hover uppercase block">
                    Infrastructure Sector
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight transition-colors duration-300 group-hover:text-primary-light-hover">
                    {sector.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-gray tracking-wider leading-relaxed line-clamp-2">
                    {sector.overview}
                  </p>
                </div>

                {/* Explore Trigger */}
                <div className="pt-6">
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-primary-light-hover transition-colors duration-300 select-text"
                  >
                    <span>Explore Capabilities</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectorsList;
