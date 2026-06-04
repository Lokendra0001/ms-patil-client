"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "@/component/CTA/Button";
import Image from "next/image";
import { services } from "../../data/services/hero";

const renderTitle = (title, highlight) => {
  if (!highlight) return title;
  const index = title.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) return title;
  const before = title.substring(0, index);
  const match = title.substring(index, index + highlight.length);
  const after = title.substring(index + highlight.length);
  return (
    <>
      {before}
      <span className="text-primary">{match}</span>
      {after}
    </>
  );
};

const ServicesHero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % services.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleSelect = (idx) => {
    setCurrentIdx(idx);
    resetTimer();
  };

  return (
    <section className="relative">
      <div className="pt-35 relative w-full  h-[600px] md:h-[780px] bg-slate-background select-text">
        {/* Background Images Crossfade */}
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`absolute inset-0  transition-opacity duration-1000 ease-in-out overflow-hidden ${
              idx === currentIdx
                ? "opacity-100 z-0"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={service.image}
              alt="service"
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}

        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-slate-background/70 z-10" />

        {/* Main Content Layout */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20 h-full flex items-center justify-between pb-28 sm:pb-36 lg:pb-44">
          {/* Left Side: Service Details */}
          <div className="max-w-2xl text-left">
            <div
              key={`tagline-${currentIdx}`}
              className="flex items-center gap-3.5 mb-5 animate-content-slide-in"
            >
              <div className="w-12 h-1 bg-primary" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-primary uppercase">
                Our Top Services
              </span>
            </div>

            {/* Title with Slide key */}
            <h1
              key={`title-${currentIdx}`}
              className="text-4xl sm:text-6xl font-extrabold text-text-white  uppercase tracking-tight mb-5 transition-all duration-500 animate-content-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              {renderTitle(
                services[currentIdx].title,
                services[currentIdx].highlight,
              )}
            </h1>

            <p
              key={`desc-${currentIdx}`}
              className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl animate-content-slide-in"
              style={{ animationDelay: "200ms" }}
            >
              {services[currentIdx].description}
            </p>

            <Button
              key={`btn-${currentIdx}`}
              href={services[currentIdx]?.href}
              variant="theme"
              size="hr"
              className="font-semibold animate-content-slide-in hover:text-text-white !"
              style={{ animationDelay: "300ms" }}
            >
              Service Details
            </Button>
          </div>

          {/* Right Side: Vertical Dot Indicators */}
          <div className="flex flex-col gap-4 items-center shrink-0 z-30">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer ${
                  idx === currentIdx
                    ? "border border-primary bg-transparent p-[3px]"
                    : "bg-white-background/40 hover:bg-white-background/70"
                }`}
                aria-label={`Select service ${idx + 1}`}
              >
                {idx === currentIdx && (
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Overlapping Service Selection Cards */}
      <div className="relative  xl:absolute xl:top-full xl:left-0 xl:right-0 z-30 w-full -translate-y-15  xl:-translate-y-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`relative overflow-hidden cursor-pointer text-left h-28 sm:h-36 lg:h-44 transition-all duration-300 border border-white/10 ${
                  idx === currentIdx
                    ? "border-b-4 border-b-primary border-x-white/20 border-t-white/20 scale-[1.03] "
                    : "border-b-4 border-b-transparent hover:scale-[1.01] hover:border-white/20"
                }`}
              >
                {/* Background image inside card */}
                <Image
                  src={service.image}
                  alt="service"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Dark Mask overlay with higher brightness/opacity for the image */}
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    idx === currentIdx
                      ? "bg-slate-background/20"
                      : "bg-slate-background/30 hover:bg-slate-background/35"
                  }`}
                />

                {/* Text on Card */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="text-text-white  text-xs sm:text-sm lg:text-base font-extrabold uppercase tracking-wider leading-snug">
                    {service.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
