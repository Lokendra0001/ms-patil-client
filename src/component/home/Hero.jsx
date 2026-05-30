"use client";

import React, { useState, useEffect } from "react";
import Button from "@/component/common/Button";
import banner1 from "../../../public/assets/home/hero/banner-1.png";
import banner2 from "../../../public/assets/home/hero/banner-2.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: banner1,
      subtitle: "LEADERS IN INFRASTRUCTURE & CONSTRUCTION",
      titleText: "BUILDING THE FOUNDATIONS OF ",
      titleHighlight: "MODERN INFRASTRUCTURE",
      description:
        "Delivering world-class engineering, procurement, and construction services for national highway networks, heavy industrial structures, and modern urban environments.",
      primaryBtn: { text: "Our Projects", href: "/projects" },
      secondaryBtn: { text: "Get in Touch", href: "/contact" },
    },
    {
      image: banner2,
      subtitle: "ENGINEERING EXCELLENCE & TRUST",
      titleText: "COMMERCIAL & ",
      titleHighlight: "INDUSTRIAL LANDMARKS",
      description:
        "Setting new benchmarks in corporate architecture with state-of-the-art office parks, advanced manufacturing complexes, and highly functional logistical hubs.",
      primaryBtn: { text: "Explore Services", href: "/services" },
      secondaryBtn: { text: "Contact Us", href: "/contact" },
    },
    {
      image:
        // "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
        banner1,
      subtitle: "CRAFTING PREMIUM SPACES",
      titleText: "LUXURY RESIDENCES & ",
      titleHighlight: "MODERN TOWNSHIPS",
      description:
        "Architecting master-planned housing communities, luxury apartments, and premium townships built with unmatched material quality and structural integrity.",
      primaryBtn: { text: "Our Residences", href: "/services/residential" },
      secondaryBtn: {
        text: "Book Consultation",
        href: "/contact?consultation=true",
      },
    },
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="w-full flex-grow bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[580px] sm:h-[650px] lg:h-[720px] bg-slate-950 overflow-hidden select-none">
        {/* Slides Container */}
        <div className="w-full h-full relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image with Ken Burns effect */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
                  index === currentSlide ? "scale-105" : "scale-100"
                }`}
                style={{
                  backgroundImage: `url(${slide.image?.src || slide.image})`,
                }}
              />

              {/* Solid Heavy Dark Overlay (Tinted for high contrast text) */}
              <div className="absolute inset-0 bg-slate-950/70" />

              {/* Slide Content - Only render when active to force CSS animation trigger on slide change */}
              {index === currentSlide && (
                <div className="absolute inset-0 flex items-center z-20">
                  <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
                    <div className="max-w-3xl">
                      {/* Accent Line + Subtitle */}
                      <div className="flex items-center gap-3.5 mb-5 animate-fade-in-up">
                        <div className="w-12 h-1 bg-primary-light" />
                        <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-primary-light uppercase">
                          {slide.subtitle}
                        </span>
                      </div>

                      {/* Bold Uppercase Heading */}
                      <h1
                        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase mb-6 max-w-3xl animate-fade-in-up"
                        style={{ animationDelay: "150ms" }}
                      >
                        {slide.titleText}
                        <span className="text-primary-light-hover">
                          {slide.titleHighlight}
                        </span>
                      </h1>

                      {/* Description Text */}
                      <p
                        className="text-sm sm:text-base text-slate-300 mb-9 max-w-2xl leading-relaxed animate-fade-in-up"
                        style={{ animationDelay: "300ms" }}
                      >
                        {slide.description}
                      </p>

                      {/* CTA Buttons using common Button component */}
                      <div
                        className="flex flex-wrap gap-4 animate-fade-in-up"
                        style={{ animationDelay: "450ms" }}
                      >
                        <Button
                          href={slide.primaryBtn.href}
                          variant="theme"
                          size="hr"
                          className="px-8 py-3.5 text-xs tracking-wider uppercase h-auto hover:text-white"
                        >
                          {slide.primaryBtn.text}
                        </Button>
                        <Button
                          href={slide.secondaryBtn.href}
                          variant="hero"
                          size="hr"
                          className="px-8 py-3.5 text-xs tracking-wider uppercase h-auto"
                        >
                          {slide.secondaryBtn.text}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Left/Right Sides) */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-primary-light text-white hover:border-primary-light border border-white/20 flex items-center justify-center rounded-none transition-colors focus:outline-none cursor-pointer"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/10 hover:bg-primary-light text-white hover:border-primary-light border border-white/20 flex items-center justify-center rounded-none transition-colors focus:outline-none cursor-pointer"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Bottom Bar: Slider Dots & Counter */}
        <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 z-20 w-full">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
            {/* Slide Hero Counter (01 / 03) */}
            <div className="text-white text-xs sm:text-sm font-bold tracking-widest select-none">
              <span className="text-primary-light">0{currentSlide + 1}</span>
              <span className="text-white/30 mx-2">/</span>
              <span className="text-white/55 font-medium">
                0{slides.length}
              </span>
            </div>

            {/* Slider Dots (Blueprint style horizontal dash bars) */}
            <div className="flex gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 rounded-none cursor-pointer focus:outline-none ${
                    index === currentSlide
                      ? "w-10 bg-primary-light"
                      : "w-6 bg-white/35 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Empty space for design symmetry */}
            <div className="w-16 hidden sm:block" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
