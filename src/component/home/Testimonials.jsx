"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Heading from "@/component/common/Heading";
import { testimonials } from "../../data/home/testimonials";
import "swiper/css";

const Testimonials = () => {
  return (
    <section className="w-full bg-slate-50 py-20 lg:py-24 border-b border-border-secondary/50 relative overflow-hidden select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Centered Headers */}
        <Heading
          tagline="WHAT OUR CLIENT SAY"
          title="Earning Trust Through"
          highlight="Consistent Delivery"
          align="center"
        />

        {/* Swiper Carousel Viewport */}
        <div className="w-full testimonial-swiper-wrapper cursor-grab">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex flex-col">
                <div className="bg-white-background  border border-border-secondary p-8 sm:p-10 flex flex-col justify-between h-full relative shadow-[0_4px_30px_rgba(15,23,42,0.005)]">
                  {/* Decorative quotes watermark */}
                  <span className="absolute top-4 right-6 text-7xl text-text-white font-serif select-text pointer-events-none">
                    “
                  </span>

                  <div>
                    {/* Star ratings */}
                    <div className="flex items-center gap-1 mb-6 select-text">
                      {[...Array(5)].map((_, i) => {
                        const isFilled = i < (t.rating || 5);
                        return (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              isFilled
                                ? "text-amber-500 fill-amber-500"
                                : "text-slate-200 fill-slate-200"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        );
                      })}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed mb-8 italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Profile section */}
                  <div>
                    <div className="w-full h-px bg-slate-100 mb-6" />
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-none bg-slate-50 border border-slate-200/80 flex items-center justify-center text-text-primary font-medium text-xs select-text">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-text-primary leading-tight">
                          {t.organization}
                        </h4>
                        <p className="text-[9px] uppercase font-black text-slate-400 tracking-wider mt-0.5">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
