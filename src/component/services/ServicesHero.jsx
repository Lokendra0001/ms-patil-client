"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "@/component/common/Button";
import service1 from "../../../public/assets/home/hero/banner-2.png";
import service2 from "../../../public/assets/services/hero/service2.png";
import service3 from "../../../public/assets/home/projects/indo.jpg";
import service4 from "../../../public/assets/home/deliver/highway.png";
import service5 from "../../../public/assets/home/hero/banner-1.png";
import service7 from "../../../public/assets/services/hero/service7.png";

import Image from "next/image";

const ServicesHero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const timerRef = useRef(null);

  const services = [
    {
      title: "Civil Construction",
      tagline: "BUILDING STRUCTURES OF TRUST",
      description:
        "Specializing in high-quality residential, commercial, and corporate civil constructions. Delivering unparalleled structural integrity, robust foundation works, and state-of-the-art architectures.",
      image: service1,
    },
    {
      title: "Infrastructure Development",
      tagline: "NATION-BUILDING UTILITIES & TRANSITS",
      description:
        "Designing and developing core regional transit highways, storm drainage networks, concrete bridges, retaining walls, and utility networks engineered to last generations.",
      image: service2,
    },
    {
      title: "Industrial Projects",
      tagline: "PRECISION CIVIL ENGINEERING",
      description:
        "Building sophisticated heavy-industry setups, logistical parks, and warehouses. Custom industrial floorings like Vacuum Dewatered Trimix to support massive machine loads.",
      image: service3,
    },
    {
      title: "Road & Pavement Works",
      tagline: "HIGHWAY-GRADE PAVING & SURFACINGS",
      description:
        "Constructing durable bituminous and concrete highway layers, interlocking paver blocks for large commercial complexes, and expert sub-base grading for maximum lifespans.",
      image: service4,
    },
    {
      title: "Material Supply",
      tagline: "UNCOMPROMISING MATERIAL STANDARDS",
      description:
        "Providing key structural raw resources, specialized concrete mixtures, certified aggregates, and heavy structural fills directly to active construction zones.",
      image: service5,
    },
    {
      title: "Government Projects",
      tagline: "COMPLIANCE & STRATEGIC PUBLIC WORKS",
      description:
        "Executing public building construction, road infrastructure expansions, state schools, and municipal development works matching rigorous government standards.",
      image: service7,
    },
  ];

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
    <section className="pt-35 relative w-full h-[620px] sm:h-[700px] lg:h-[780px] bg-slate-950 select-none">
      {/* Background Images Crossfade */}
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden ${
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
      <div className="absolute inset-0 bg-slate-950/50 z-10" />

      {/* Main Content Layout */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20 h-full flex items-center justify-between pb-28 sm:pb-36 lg:pb-44">
        {/* Left Side: Service Details */}
        <div className="max-w-2xl text-left">
          <div
            key={`tagline-${currentIdx}`}
            className="flex items-center gap-3.5 mb-5 animate-content-slide-in"
          >
            <div className="w-12 h-1 bg-primary-light" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-primary-light uppercase">
              Our Top Services
            </span>
          </div>

          {/* Title with Slide key */}
          <h1
            key={`title-${currentIdx}`}
            className="text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight mb-5 transition-all duration-500 animate-content-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            {services[currentIdx].title}
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
            href="/contact"
            variant="theme"
            size="hr"
            className="font-semibold animate-content-slide-in hover:text-white!"
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
                  ? "border border-primary-light bg-transparent p-[3px]"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Select service ${idx + 1}`}
            >
              {idx === currentIdx && (
                <div className="w-1.5 h-1.5 bg-primary-light rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Overlapping Service Selection Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-30 w-full translate-y-12 sm:translate-y-16 lg:translate-y-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`relative overflow-hidden cursor-pointer text-left h-28 sm:h-36 lg:h-44 transition-all duration-300 border border-white/10 ${
                  idx === currentIdx
                    ? "border-b-4 border-b-primary-light border-x-white/20 border-t-white/20 scale-[1.03] "
                    : "border-b-4 border-b-transparent hover:scale-[1.01] hover:border-white/20"
                }`}
              >
                {/* Background image inside card */}
                <Image
                  src={service.image}
                  alt="service"
                  fill
                  priority
                  className=""
                />

                {/* Dark Mask overlay with higher brightness/opacity for the image */}
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    idx === currentIdx
                      ? "bg-slate-950/20"
                      : "bg-slate-950/30 hover:bg-slate-950/35"
                  }`}
                />

                {/* Text on Card */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="text-white text-xs sm:text-sm lg:text-base font-extrabold uppercase tracking-wider leading-snug">
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
