"use client";

import React, { useState, useEffect } from "react";
import Button from "@/component/CTA/Button";
import { slides } from "@/data/home/hero";
import ContentContainer from "../common/ContentContainer";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  // const handleNext = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const handlePrev = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  return (
    <main className=" w-full flex-1 bg-white-background -background">
      {/* Hero Section */}
      <section className="  relative w-full min-h-[700px] sm:min-h-[750px] lg:min-h-[850px] bg-slate-background overflow-hidden select-text flex flex-col justify-between">
        {/* Background Images Layer */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={`${slide.titleText} ${slide.titleHighlight} - M/S Chetankumar Bhagwan Suryawanshi`}
                priority
                fill
                className={`object-cover transition-transform duration-[6000ms] ease-out ${
                  index === currentSlide ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          ))}
          {/* Solid Heavy Dark Overlay (Tinted for high contrast text) */}
          <div className="absolute inset-0 bg-slate-background/70 z-10" />
        </div>

        {/* Slides Content Layer */}
        <div className="w-full relative z-20 flex-grow flex items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide
                  ? "relative opacity-100 z-10"
                  : "absolute inset-0 opacity-0 pointer-events-none z-0"
              }`}
            >
              {index === currentSlide && (
                <ContentContainer>
                  <div className="max-w-4xl pt-15 lg:pt-0">
                    {/* Accent Line + Subtitle */}
                    <div className="flex items-center  justify-start gap-3.5 mb-5 animate-fade-in-up">
                      <div className="w-5 md:w-12 h-1 bg-primary " />
                      <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-primary uppercase">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Bold Uppercase Heading */}
                    <h1
                      className="text-[28px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-white  leading-tight uppercase mb-6 max-w-4xl animate-fade-in-up text-cente lg:text-left"
                      style={{ animationDelay: "150ms" }}
                    >
                      {slide.titleText}
                      <span className="text-primary-hover">
                        {slide.titleHighlight}
                      </span>
                    </h1>

                    {/* Description Text */}
                    <p
                      className=" text-sm sm:text-base text-text-white /95 mb-9 max-w-2xl leading-relaxed animate-fade-in-up"
                      style={{ animationDelay: "300ms" }}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Buttons using common Button component */}
                    <div
                      className="flex flex-wrap  gap-4 animate-fade-in-up"
                      style={{ animationDelay: "450ms" }}
                    >
                      <Button
                        href={slide.primaryBtn.href}
                        variant="theme"
                        size="hr"
                        className="px-8 py-3.5 text-xs tracking-wider uppercase h-auto hover:text-text-white "
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
                </ContentContainer>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Left/Right Sides) */}
        {/* <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white-background /10 hover:bg-primary-light text-text-white  hover:border-primary-light border border-white/20 flex items-center justify-center rounded-none transition-colors focus:outline-none cursor-pointer"
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
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white-background /10 hover:bg-primary-light text-text-white  hover:border-primary-light border border-white/20 flex items-center justify-center rounded-none transition-colors focus:outline-none cursor-pointer"
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
        </button> */}

        {/* Bottom Bar: Slider Dots & Counter */}
        <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 z-20 w-full">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
            {/* Slide Hero Counter (01 / 03) */}
            <div className="text-text-white  text-xs sm:text-sm font-bold tracking-widest select-text">
              <span className="text-primary">0{currentSlide + 1}</span>
              <span className="text-text-white /30 mx-2">/</span>
              <span className="text-text-white /55 font-medium">
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
                      ? "w-10 bg-primary"
                      : "w-6 bg-white-background/35 hover:bg-white-background /70"
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
