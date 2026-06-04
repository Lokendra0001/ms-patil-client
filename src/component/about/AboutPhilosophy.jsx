"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/component/common/Heading";

import { philosophyData } from "../../data/about/philosophy";
import visionImg from "../../../public/assets/about/vision/vision.webp";
import missionImg from "../../../public/assets/about/vision/mission.webp";
import valuesImg from "../../../public/assets/about/vision/ourValue.webp";

const AboutPhilosophy = () => {
  const imagesMap = {
    vision: visionImg,
    mission: missionImg,
    values: valuesImg,
  };

  return (
    <section className="w-full bg-white-background  py-20 lg:py-24 border-t border-border-secondary/40 relative overflow-hidden select-text">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none select-text">
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
        {/* Section Headers */}
        <Heading
          tagline="Our Purpose"
          title="Our Vision, Mission &"
          highlight="Core Values"
          align="center"
          className="mb-24!"
        />

        {/* Dynamic alternating row sequence */}
        <div className="space-y-28 lg:space-y-36">
          {philosophyData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Left/Right Text Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  {/* Item Index / Tag */}
                  <div className="flex items-center gap-3.5 mb-3 select-text">
                    <span className="text-xs font-bold text-primary font-mono">
                      {item.num}
                    </span>
                    <div className="w-6 h-px bg-slate-300" />
                    <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-6">
                    {(() => {
                      const words = item.title.split(" ");
                      if (words.length <= 1) return item.title;
                      const lastWord = words.pop();
                      const mainPart = words.join(" ");
                      return (
                        <>
                          {mainPart}{" "}
                          <span className="text-primary">{lastWord}</span>
                        </>
                      );
                    })()}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-gray  font-medium leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Conditional List Rendering */}
                  <div className="w-full border-t border-border-secondary pt-6">
                    {/* 1. Bullets (Vision List) */}
                    {item.type === "bullets" && (
                      <ul className="space-y-3.5 select-text w-full">
                        {item.items.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs font-semibold text-text-gray"
                          >
                            <svg
                              className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                              />
                            </svg>
                            <span className="leading-tight">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* 2. Checkboxes (Mission List) */}
                    {item.type === "checkboxes" && (
                      <ul className="space-y-3.5 select-text w-full">
                        {item.items.map((checkbox, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs font-semibold text-text-gray"
                          >
                            <span className="w-4 h-4 bg-primary/15 border border-primary/35 flex items-center justify-center flex-shrink-0 text-primary font-bold text-[9px] mt-0.5">
                              ✓
                            </span>
                            <span className="leading-tight">{checkbox}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* 3. Numbered Core Values List */}
                    {item.type === "numbered" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full">
                        {item.items.map((val, idx) => {
                          const numVal = String(idx + 1).padStart(2, "0");
                          return (
                            <div
                              key={idx}
                              className="flex items-start gap-3.5 pb-2.5 border-b border-border-secondary last:border-none"
                            >
                              <span className="text-xs font-black text-primary mt-0.5 select-text font-mono">
                                {numVal}
                              </span>
                              <div className="flex flex-col leading-tight">
                                <span className="text-xs font-extrabold text-primary uppercase select-text">
                                  {val.label}
                                </span>
                                <span className="text-[11px] text-text-gray  font-semibold mt-0.5">
                                  {val.desc}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Left/Right Visual Column (Proprietor-style Offset Frame) */}
                <div className="w-full lg:w-1/2 flex items-center justify-center py-6">
                  <div className="relative w-full max-w-[440px]">
                    {/* Offset outline border backing with matching curves */}
                    <div
                      className={`absolute inset-0 border-2 border-primary/30 pointer-events-none z-0 transition-transform duration-300 ${
                        isEven
                          ? "translate-x-4 translate-y-4 rounded-tr-[3.5rem] rounded-bl-[3.5rem]"
                          : "-translate-x-4 translate-y-4 rounded-tl-[3.5rem] rounded-br-[3.5rem]"
                      }`}
                    />

                    {/* Image container frame with premium curves */}
                    <div
                      className={`relative w-full aspect-[4/3] overflow-hidden z-10 shadow-[0_15px_30px_rgba(0,0,0,0.08)] ${
                        isEven
                          ? "rounded-tr-[3.5rem] rounded-bl-[3.5rem]"
                          : "rounded-tl-[3.5rem] rounded-br-[3.5rem]"
                      }`}
                    >
                      <Image
                        src={imagesMap[item.id]}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105 pointer-events-none select-none"
                      />
                      {/* Subtle shading overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
