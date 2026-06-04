"use client";

import React from "react";
import Image from "next/image";
import Button from "@/component/CTA/Button";
import Heading from "../common/Heading";
import { contactInfo } from "../../data/layout/header";
import { FiPhone, FiMail, FiCheck } from "react-icons/fi";

const CallToAction = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-white-background  select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Floating Premium Card Frame */}
        <div className="relative w-full bg-slate-50/50 border border-border-secondary/60 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.015)]">
          {/* Engineering blueprint background watermark */}
          <Image
            src="/construction_blueprint_bg.webp"
            alt="Engineering Blueprint Background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-[0.08]"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-0" />

          {/* Symmetrical split grid wrapper */}
          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-10 items-center">
            {/* Left Column: Typography Statement & Contacts */}
            <div className="xl:col-span-7 flex flex-col items-start ">
              <Heading
                tagline="Let's Build Together"
                title="Ready to partner with a trusted leader to engineer your next"
                highlight="infrastructure landmark?"
                className="mb-6! max-w-4xl"
                description="From highway bypass corridors and municipal complexes to automated concrete manufacturing plants, M/S Chetankumar Bhagwan Suryawanshi provides end-to-end PWD contracting solutions engineered to last."
                descClassName="text-text-primary! font-medium mb-8 max-w-2xl text-xs sm:text-sm"
              />

              {/* Contact Micro-Cards Grid */}
              <div className="flex flex-wrap gap-4 w-full">
                {/* Office Contact Card */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 bg-white-background/80 backdrop-blur-sm p-4 border border-border-secondary/50 shadow-[0_4px_20px_rgba(0,0,0,0.005)] hover:border-primary/50 transition-all duration-300 group/phone min-w-[280px]"
                >
                  <div className="w-10 h-10 bg-gray-background border border-border-secondary flex items-center justify-center text-primary-hover shrink-0 group-hover/phone:bg-primary/15 transition-colors duration-300">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-text-gray font-black">
                      Call Our Office
                    </div>
                    <div className="text-sm font-extrabold text-text-primary group-hover/phone:text-primary-hover transition-colors duration-300">
                      {contactInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Email Support Card */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 bg-white-background/80 backdrop-blur-sm p-4 border border-border-secondary/50 shadow-[0_4px_20px_rgba(0,0,0,0.005)] hover:border-primary/50 transition-all duration-300 group/email min-w-[280px]"
                >
                  <div className="w-10 h-10 bg-gray-background border border-border-secondary flex items-center justify-center text-primary-hover shrink-0 group-hover/email:bg-primary/15 transition-colors duration-300">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-text-gray font-black">
                      Email Us
                    </div>
                    <div className="text-sm font-extrabold text-text-primary group-hover/email:text-primary-hover transition-colors duration-300">
                      {contactInfo.email}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Stacked Action Buttons Frame */}
            <div className="xl:col-span-5 w-full flex flex-col items-center xl:items-end justify-center  ">
              <div className="w-full max-w-sm lg:max-w-full flex flex-col lg:flex-row xl:flex-col gap-4">
                <Button
                  href="/contact?consultation=true"
                  variant="theme"
                  size="lg"
                  className="w-full uppercase tracking-wider py-4 h-auto select-text"
                >
                  Book a Consultation
                </Button>

                <Button
                  href="/projects"
                  variant="reverse"
                  size="lg"
                  className="w-full uppercase tracking-wider py-4 h-auto select-text"
                >
                  View Our Portfolio
                </Button>
              </div>

              {/* Bottom validation seal */}
              <div className="mt-4 flex items-center gap-2 text-[10px] text-text-gray font-bold tracking-wide uppercase select-text">
                <FiCheck className="w-3.5 h-3.5 text-primary-hover" strokeWidth={3} />
                <span>Registered Class IV PWD Contractor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
