"use client";

import React from "react";
import Link from "next/link";

const ServiceCTA = () => {
  return (
    <section className="my-25 relative  bg-white overflow-hidden select-text ">
      <div className=" py-15 bg-slate-50 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Text Content */}
          <div className="space-y-3">
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light  block ">
              Start Your Project
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary  tracking-tight ">
              Need this service for your project?
            </h2>
            <p className="text-xs sm:text-sm text-text-gray tracking-wider leading-relaxed  max-w-xl">
              Partner with M/S Patil Construction for PWD-grade engineering
              discipline, certified material supply, and heavy machinery
              execution.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            {/* Call Now Button */}
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-gray-300 hover:border-border-primary hover:bg-primary-light text-text-primary hover:text-white font-bold tracking-widest text-sm transition-all duration-300 rounded-none cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>

            {/* Get a Quote Button */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent hover:border-primary-light bg-primary-light hover:bg-white text-white hover:text-text-primary font-semibold text-sm  transition-all duration-300 rounded-none cursor-pointer"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
