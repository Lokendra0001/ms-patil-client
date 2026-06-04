"use client";

import React from "react";
import Image from "next/image";
import ceo from "../../../public/assets/about/ceo-message/profile.webp";
import { credentials } from "../../data/about/leadership";
import { FiUser, FiAward, FiCpu } from "react-icons/fi";

const Leadership = () => {
  return (
    <section className="w-full bg-slate-50 py-20 lg:py-24 border-t border-b border-slate-200/50 relative overflow-hidden select-text">
      {/* Blueprint grid subtle watermarks */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none select-text">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Rounded Portrait of Mr. Chetankumar (Matching CEO Message Style) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Decorative background outline frame */}
            <div
              className="absolute w-full h-full border-2 border-primary/40 pointer-events-none z-0 hidden sm:block max-w-sm rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px]"
              style={{ transform: "translate(16px, 16px)" }}
            />

            {/* Enhanced Portrait Box */}
            <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden z-10 border border-slate-200/80 rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px] shadow-sm bg-white">
              <Image
                src={ceo}
                alt="Mr. Chetankumar Surywanshi Patil"
                className="object-cover object-center hover:scale-103 transition-transform duration-500"
                fill
                priority
              />
            </div>
          </div>

          {/* Right Column: Credentials Dashboard */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tagline block with gold line on left */}
            <div className="flex items-center gap-3 mb-4 select-text">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary uppercase">
                Firm Leadership
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight mb-4  tracking-wide">
              Proprietorship <span className="text-primary">Profile</span>
            </h3>

            <p className="text-xs sm:text-sm text-text-gray font-medium leading-relaxed mb-8 max-w-xl">
              Under Mr. Chetankumar's direct leadership, M/S Chetankumar Bhagwan
              Suryawanshi has scaled operations to execute key state highway
              corridors, railway line alignments, and vertically integrated
              civil infrastructure works.
            </p>

            {/* Dashboard Cards Grid (Looped Dynamically) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {credentials.map((card, idx) => {
                const getIcon = () => {
                  switch (idx) {
                    case 0:
                      return (
                        <FiUser className="w-4 h-4 text-primary-hover group-hover:text-primary transition-colors duration-300" />
                      );
                    case 1:
                      return (
                        <FiAward className="w-4 h-4 text-primary-hover group-hover:text-primary transition-colors duration-300" />
                      );
                    case 2:
                      return (
                        <FiCpu className="w-4 h-4 text-primary-hover group-hover:text-primary transition-colors duration-300" />
                      );
                    default:
                      return null;
                  }
                };

                return (
                  <div
                    key={idx}
                    className={`p-6 bg-white border border-slate-200/60 rounded-none relative group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.015)] ${
                      card.fullWidth ? "sm:col-span-2" : ""
                    }`}
                  >
                    {/* Hover gold underline indicator */}
                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full" />

                    <div>
                      {/* Top Bar: Icon and label/num */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-mono font-bold text-primary-hover group-hover:text-primary tracking-widest uppercase select-text">
                          {card.num} / {card.label}
                        </span>
                        <div className="w-8 h-8 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-none group-hover:bg-primary/15 group-hover:border-primary/10 transition-colors duration-300">
                          {getIcon()}
                        </div>
                      </div>

                      <h4 className="text-sm font-extrabold text-slate-900 mb-1.5 transition-colors duration-300 group-hover:text-primary-hover">
                        {card.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
