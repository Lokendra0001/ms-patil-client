"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SectorHero = ({ data }) => {
  if (!data) return null;
  const title = data.name;
  const highlight = data.highlight;

  let titleNode = title;
  if (highlight && title.includes(highlight)) {
    const parts = title.split(highlight);
    titleNode = (
      <>
        {parts[0]}
        <span className="text-primary-light">{highlight}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <section className="relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center pt-32 pb-20 select-text overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.image}
          alt={data.name}
          fill
          priority
          className="object-cover"
        />
        {/* Dark mask overlay */}
        <div className="absolute inset-0 bg-slate-950/80 z-10" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-12 relative z-20">
        <div className="max-w-3xl space-y-6">
          {/* Technical Badge Overlay */}
          <div className="inline-block">
            <span className="px-3 py-1 bg-primary-light text-slate-950 text-[10px] sm:text-xs font-black tracking-widest uppercase rounded-none select-none">
              [ {data.badge} ]
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase tracking-tight font-sans">
            {titleNode}
          </h1>

          {/* 2-line operational overview */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium tracking-wide">
            {data.overview}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectorHero;
