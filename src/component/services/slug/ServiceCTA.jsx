"use client";

import React from "react";
import Link from "next/link";
import { contactInfo } from "@/data/layout/header";
import Heading from "@/component/common/Heading";
import { Phone, PhoneCall } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="my-25 relative  bg-white-background  overflow-hidden select-text ">
      <div className=" py-15 bg-slate-50 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Text Content */}
          <Heading
            tagline="Start Your Project"
            title="Need this service for your project?"
            description="Partner with M/S Patil Construction for PWD-grade engineering discipline, certified material supply, and heavy machinery execution."
            className="mb-0! flex-grow text-left"
            align="left"
          />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            {/* Call Now Button */}
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-gray-300 hover:border-border-primary hover:bg-primary text-text-primary hover:text-text-white  font-bold tracking-widest text-sm transition-all duration-300 rounded-none cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>

            {/* Get a Quote Button */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent hover:border-primary bg-primary hover:bg-white-background  text-text-white  hover:text-text-primary font-semibold text-sm  transition-all duration-300 rounded-none cursor-pointer"
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
