"use client";

import React, { useEffect, useState, useRef } from "react";
import Button from "@/component/CTA/Button";
import { clientLogos, statsList } from "../../data/home/stats";

const AnimatedCounter = ({
  target,
  duration = 1800,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Smooth easeOut transition
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-extrabold">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const LogoItem = ({ name, icon }) => (
  <div className="flex items-center gap-2.5 text-slate-400 opacity-65 hover:opacity-95 transition-opacity duration-200">
    {icon}
    <span className="font-bold text-sm tracking-wider uppercase select-text">
      {name}
    </span>
  </div>
);

const Stats = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 border-b border-slate-100 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top: 5 Logo Marquee with Left & Right Fading Effects */}
        <div className="relative w-full overflow-hidden pb-16 border-b border-slate-100 select-text">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Marquee Tape */}
          <div className="flex w-max gap-16 items-center animate-marquee">
            {/* Set 1 */}
            <div className="flex gap-16 items-center shrink-0 pr-8">
              {clientLogos.map((logo, idx) => (
                <LogoItem
                  key={`set1-${idx}`}
                  name={logo.name}
                  icon={logo.icon}
                />
              ))}
            </div>
            {/* Set 2 (for seamless loop wrapping) */}
            <div className="flex gap-16 items-center shrink-0 pr-8">
              {clientLogos.map((logo, idx) => (
                <LogoItem
                  key={`set2-${idx}`}
                  name={logo.name}
                  icon={logo.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Middle: Stats Statement & Action Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Aligned Tagline typography block */}
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2 block select-text">
              KEY PERFORMANCE
            </span>

            {/* Aligned standard sentence-case heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight max-w-3xl select-text">
              Our construction performance translates blueprints into{" "}
              <span className="text-primary-light-hover">
                completed landmarks
              </span>{" "}
              that stand the test of time.
            </h2>

            {/* Standard yellow accent line */}
            <div className="w-16 h-1 bg-primary-light mt-4 select-text" />
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              href="/projects"
              variant="reverse"
              size="lg"
              className="uppercase tracking-wider text-xs px-8 py-4 h-auto inline-flex items-center gap-2"
            >
              View Projects <span>→</span>
            </Button>
          </div>
        </div>

        {/* Bottom: Thin divider lines and centered stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 sm:gap-x-12 pt-4">
          {statsList.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Thin Separator Line */}
              <div className="w-full h-px bg-slate-200 mb-6" />

              {/* Bold Refined Stat Number */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-2.5 leading-none">
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              {/* Compact Stat Label */}
              <span className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
