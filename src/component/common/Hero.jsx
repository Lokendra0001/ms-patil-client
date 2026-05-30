"use client";

import React from "react";
import Link from "next/link";

const Hero = ({ tagline, title, bgImage, breadcrumbs = [] }) => {
  return (
    <section className="relative w-full py-20 sm:py-28 border-b border-slate-900 overflow-hidden select-none bg-slate-950">
      {/* Background Image with Dark Mask Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter grayscale-[10%]"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-slate-950/80 sm:bg-slate-950/75 z-0" />

      {/* Architectural Blueprint SVG Watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-[0.035] pointer-events-none hidden sm:block z-10">
        <svg
          className="w-full h-full text-white"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200 M 0 250 L 400 250 M 0 300 L 400 300 M 0 350 L 400 350"
            strokeWidth="0.5"
          />
          <path
            d="M 50 0 L 50 400 M 100 0 L 100 400 M 150 0 L 150 400 M 200 0 L 200 400 M 250 0 L 250 400 M 300 0 L 300 400 M 350 0 L 350 400"
            strokeWidth="0.5"
          />
          <rect x="75" y="75" width="180" height="250" strokeWidth="1" />
          <circle cx="280" cy="200" r="65" strokeWidth="1" />
          <line x1="75" y1="75" x2="255" y2="325" strokeWidth="1" />
          <line x1="255" y1="75" x2="75" y2="325" strokeWidth="1" />
          <line
            x1="165"
            y1="40"
            x2="165"
            y2="360"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <line
            x1="40"
            y1="200"
            x2="360"
            y2="200"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20 flex flex-col justify-center min-h-[160px] sm:min-h-[200px]">
        {/* Tagline block */}
        {tagline && (
          <div className="flex items-center gap-3.5 mb-4 animate-fade-in-up">
            <div className="w-12 h-0.5 bg-primary-light" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-primary-light uppercase">
              {tagline}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          {title}
        </h1>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            className="flex items-center gap-2 text-xs font-bold tracking-wide text-slate-400 select-text animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-slate-600">—</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary-light transition-colors"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
};

export default Hero;
