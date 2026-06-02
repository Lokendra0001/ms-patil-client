"use client";

import React from "react";
import Link from "next/link";

const SectorsHero = () => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center pt-32 pb-20 select-text overflow-hidden bg-slate-950">
      {/* Background blueprint lines */}

      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2.5 text-[11px] font-bold tracking-widest uppercase text-slate-400">
            <Link
              href="/"
              className="hover:text-primary-light transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-primary-light-hover">Sectors</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase tracking-tight font-sans">
            Sectors <span className="text-primary-light-hover">We Serve</span>
          </h1>

          {/* Subheading */}
          <p className="text-xs sm:text-sm text-text-gray tracking-wider leading-relaxed max-w-xl mx-auto">
            Heavy infrastructure execution, industrial construction, and public
            works engineered with 100% in-house machinery and material supply
            control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectorsHero;
