"use client";

import React from "react";
import Image from "next/image";
import profilePic from "../../../public/assets/about/ceo-message/profile3.webp";

import { ceoMessage } from "../../data/about/ceo";

const CeoMessage = () => {
  const renderTitle = (title, highlight) => {
    if (!highlight) return title;
    const parts = title.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-primary-light-hover">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Enhanced Portrait of Mr. Chetankumar */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Decorative background outline frame */}
            <div
              className="absolute w-full h-full border-2 border-primary/40 pointer-events-none z-0 hidden sm:block max-w-sm rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px]"
              style={{ transform: "translate(16px, 16px)" }}
            />

            {/* Enhanced Portrait Box */}
            <div className="relative w-full max-w-sm aspect-[4/5]  overflow-hidden z-10 border border-slate-200/80 rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px]">
              <Image
                src={profilePic}
                alt="Mr. Chetankumar Surywanshi Patil"
                className="object-cover object-center hover:scale-103 transition-transform duration-500"
                fill
                priority
              />
            </div>
          </div>

          {/* Right Column: Title, Quote, Message paragraphs & Signature */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tagline block with gold line on left */}
            <div className="flex items-center gap-3 mb-4 select-text">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary uppercase">
                CEO's Message
              </span>
            </div>

            {/* Vision Quote */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary italic leading-snug mb-8">
              {renderTitle(ceoMessage.quote, "vision")}
            </h3>

            {/* Message paragraphs directly from catalogue page 3 */}
            <div className="text-xs sm:text-sm text-text-gray  font-medium leading-relaxed space-y-6 max-w-3xl">
              {ceoMessage.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Signature & Credentials block */}
            <div className="mt-8 flex flex-col items-start select-text">
              {/* Cursive text rendering */}
              <div
                className="text-2xl sm:text-3xl text-primary tracking-wide font-normal mb-1.5"
                style={{
                  fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
                }}
              >
                Chetankumar Surywanshi
              </div>
              <div className="w-24 h-px bg-slate-300 mb-2.5" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Mr. Chetankumar Surywanshi Patil
              </span>
              <span className="text-[9px] text-text-gray font-bold uppercase tracking-wider mt-0.5">
                Founder & CEO, Ms Patil Construction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
