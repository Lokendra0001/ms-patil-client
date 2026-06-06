"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Button from "@/component/CTA/Button";
import Heading from "../common/Heading";
import { clientLogos, statsList } from "../../data/home/stats";
import "swiper/css";

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

const LogoItem = ({ name, image, className }) => (
  <div className="relative flex items-center justify-center h-full w-full  opacity-70 hover:opacity-100 transition-opacity duration-200">
    <Image
      src={image}
      alt={name}
      fill
      priority
      className={`select-none object-contain grayscale-100 brightness-[0.8] hover:grayscale-0 hover:brightness-100 ${className}`}
    />
  </div>
);

const Stats = () => {
  return (
    <section className="w-full bg-white-background  pb-16 sm:pb-20 border-b border-border-secondary select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top: Client Logo Slider with Swiper */}
        <div className="my-10 relative w-full h-[80px]   select-text">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white-background to-transparent z-10 pointer-events-none" />

          <style
            dangerouslySetInnerHTML={{
              __html: `
            .logo-swiper .swiper-wrapper {
              transition-timing-function: linear !important;
            }
          `,
            }}
          />

          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            speed={3500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 8,
                spaceBetween: 60,
              },
            }}
            className="w-full flex items-center h-full   logo-swiper"
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, idx) => (
                <SwiperSlide key={`${logo.name}-${idx}`} className="h-full ">
                  <LogoItem
                    name={logo.name}
                    image={logo.image}
                    className={logo.className}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>

        {/* Middle: Stats Statement & Action Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <Heading
              tagline="Key Performance"
              title="Delivering Infrastructure That  "
              highlight="Stands For Generations"
              className="mb-0! max-w-3xl"
            />
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
              <div className="w-full h-px bg-border-secondary mb-6" />

              {/* Bold Refined Stat Number */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-2.5 leading-none">
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              {/* Compact Stat Label */}
              <span className="text-xs sm:text-sm font-semibold text-text-gray  tracking-wide uppercase">
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
