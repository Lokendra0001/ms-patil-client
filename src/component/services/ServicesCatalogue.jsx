"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/component/common/Heading";
import { catalogue } from "../../data/services/catalogue";

const ServicesCatalogue = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/40 select-text border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Centered Heading */}
        <Heading
          tagline="Sectors of Operation"
          title="Our Contracting"
          highlight="Catalogue"
          align="center"
          textColor="text-text-primary "
          className="mb-16"
        />

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {catalogue.map((item) => (
            <div
              key={item.num}
              className="flex flex-col bg-white-background  overflow-hidden group border border-border-secondary relative"
            >
              {/* Image Header */}
              <div className="relative h-48 sm:h-70 overflow-hidden bg-slate-background">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale-[15%] group-hover:scale-105 group-hover:grayscale-[0%] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-background/20 z-10" />
              </div>

              {/* Card Body */}
              <div className="p-6  flex-grow flex flex-col justify-between">
                <div className="flex gap-4 sm:gap-6 items-start">
                  {/* Dark Blue Square Icon Box */}
                  <div className="w-14 h-14 bg-primary/80  flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-primary   transition-colors duration-300 group-hover:text-primary-hover leading-tight">
                      {item.title}
                    </h3>

                    {/* Yellow line decoration */}
                    <div className="w-12 h-0.5 bg-primary mt-2 mb-3.5" />

                    <p className="text-text-gray text-xs sm:text-sm  max-w-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-slate-100/80 px-6 sm:px-8 py-4 flex items-center justify-end ">
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-text-primary   hover:text-primary transition-colors duration-200 group/link"
                >
                  View Details
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCatalogue;
