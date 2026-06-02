"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Heading from "@/component/common/Heading";
import { phases } from "../../data/services/process";

const ServicesProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % phases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, isHovered, phases.length]);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 bg-white border-t border-slate-100 select-text"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <Heading
          tagline="Project Workflow"
          title="Our Construction"
          highlight="Methodology"
          align="center"
          textColor="text-slate-950"
          className="mb-16"
        />

        {/* Desktop Interface: Interactive Stepper Timeline */}
        <div
          className="hidden lg:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Stepper Dots Track */}
          <div className="relative mb-16 px-4">
            {/* Timeline connection line */}
            <div className="absolute top-[22px] left-10 right-10 h-0.5 bg-slate-200 z-0" />

            {/* Active Highlighted Line segment */}
            <div
              className="absolute top-[22px] left-10 h-0.5 bg-red-linear-right-background transition-all duration-500 z-0"
              style={{ width: `${(activeIndex / (phases.length - 1)) * 94}%` }}
            />

            <div className="flex justify-between relative z-10">
              {phases.map((phase, idx) => {
                const isActive = idx === activeIndex;
                const isCompleted = idx < activeIndex;
                return (
                  <button
                    key={phase.num}
                    onClick={() => setActiveIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                    style={{ width: "90px" }}
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-11 h-11 rounded-none flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                        isActive
                          ? "bg-red-linear-right-background border-red-linear-right-background text-primary scale-105"
                          : isCompleted
                            ? "bg-red-linear-right-background  border-transparent text-white"
                            : "bg-white border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary"
                      }`}
                    >
                      {phase.num}
                    </div>

                    {/* Node label */}
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider mt-3 transition-colors duration-300 text-center ${
                        isActive
                          ? "text-text-primary font-black"
                          : "text-slate-400 group-hover:text-slate-700"
                      }`}
                    >
                      {phase.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeIndex}
            className="bg-slate-50 p-10 flex flex-col md:flex-row gap-10 items-stretch transition-all duration-500 min-h-[480px] md:min-h-[420px] lg:h-[500px]  animate-content-slide-in"
          >
            {/* Left Side: Visual Image representation */}
            <div className="w-full md:w-1/2 overflow-hidden bg-slate-900 relative">
              <Image
                src={phases[activeIndex].image}
                alt={phases[activeIndex].title}
                fill
                className="object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/15 z-10" />
            </div>

            {/* Right Side: Informational Context */}
            <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
              <div>
                <span className="text-[12px] font-black tracking-wider text-primary-light  block mb-3">
                  Phase {phases[activeIndex].num} : {phases[activeIndex].name}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
                  {phases[activeIndex].title}
                </h3>

                <p className="text-text-gray text-sm sm:text-base tracking-wide mb-6">
                  {phases[activeIndex].description}
                </p>
              </div>

              {/* Key Deliverables Bullet layout */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider  text-text-primary mb-3.5">
                  Key Phase Deliverables:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {phases[activeIndex].deliverables.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-xs sm:text-sm text-text-primary font-medium"
                    >
                      <span className="  text-primary-light flex items-center justify-center text-[12px] font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Interface: Collapsible Accordion Layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          {phases.map((phase, idx) => {
            const isOpen = idx === activeIndex;
            return (
              <div
                key={phase.num}
                className="bg-slate-50 border border-slate-200/60 overflow-hidden transition-all duration-300"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold font-mono text-slate-950 bg-red-linear-right-background px-2 py-0.5">
                      {phase.num}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950 uppercase tracking-wider">
                      {phase.title}
                    </h3>
                  </div>
                  <span className="text-lg font-bold text-slate-900">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsed content container */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex flex-col gap-6">
                    <div className="w-full h-48 overflow-hidden bg-slate-900 relative">
                      <Image
                        src={phase.image}
                        alt={phase.title}
                        fill
                        className="object-cover transition-all duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Context details */}
                    <div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold mb-4">
                        {phase.description}
                      </p>

                      <h4 className="text-[10px] font-black tracking-wider uppercase text-slate-900 mb-2">
                        Deliverables:
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {phase.deliverables.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-xs text-slate-700 font-bold"
                          >
                            <span className="w-4.5 h-4.5 bg-red-linear-right-background text-slate-950 flex items-center justify-center text-[8px] font-bold">
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;
