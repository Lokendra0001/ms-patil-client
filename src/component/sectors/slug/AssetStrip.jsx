"use client";

import React from "react";
import Image from "next/image";

const AssetStrip = ({ data }) => {
  if (!data || !data.asset) return null;

  return (
    <section className="relative  pt-16 sm:py-20 overflow-hidden select-text border-t border-border-secondary">
      {/* Blueprint Grid Lines Watermark (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern-asset"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-asset)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Machinery Focus copy */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-primary uppercase block font-sans">
              Dedicated Asset Integration
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-text-primary uppercase tracking-tight font-sans">
              {data.asset.focus}
            </h2>
            <p className="text-xs sm:text-sm text-text-gray tracking-wider leading-relaxed max-w-xl">
              {data.asset.text}
            </p>

            {/* Value Stamp */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary-hover text-[10px] font-bold uppercase tracking-wider select-text">
                Zero Third-Party Dependency
              </span>
            </div>
          </div>

          {/* Right Column: Asset Image Visual Frame */}
          <div className="lg:col-span-5 relative w-full aspect-[16/9] lg:aspect-[4/3] bg-slate-200 border border-border-secondary overflow-hidden rounded-none">
            <Image
              src={data.asset.image}
              alt={data.asset.focus}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Layout Framing Corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/40 select-text pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/40 select-text pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/40 select-text pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/40 select-text pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetStrip;
