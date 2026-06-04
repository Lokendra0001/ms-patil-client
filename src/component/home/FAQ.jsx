"use client";

import React, { useState } from "react";
import Button from "@/component/CTA/Button";
import Heading from "@/component/common/Heading";
import { faqs } from "../../data/home/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white-background  py-20 lg:py-24 border-b border-border-secondary select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Parent grid is set to items-start to keep the left column stable */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vertically Centered CTA Block (Non-sticky) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Heading
              tagline="Quick answers"
              title="Need Clarity? We’ve Got "
              highlight="You Covered"
              description="Browse common questions or contact us for more information."
              className="mb-8! max-w-md"
            />

            {/* Rectangular Contact Button */}
            <Button href="/contact" variant="theme" size="lg" className="">
              Contact Us
            </Button>
          </div>

          {/* Right Column: Accordion FAQ Stack */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border rounded-none bg-white-background  transition-all duration-300 ${
                    isOpen
                      ? "border-primary-hover shadow-[0_4px_25px_rgba(245,158,11,0.04)]"
                      : "border-slate-200/80 hover:border-border-primary"
                  }`}
                >
                  {/* Accordion header button */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 focus:outline-none select-text cursor-pointer"
                  >
                    <span
                      className={` text-sm sm:text-base font-bold transition-colors duration-200 ${
                        isOpen ? "text-primary-hover" : "text-text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Expand/Collapse sign indicator */}
                    <span
                      className={`text-lg sm:text-xl font-bold shrink-0 leading-none transition-colors duration-200 select-text ${
                        isOpen ? "text-primary-hover" : "text-text-gray"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Accordion expandable text wrapper */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 sm:p-6 bg-slate-50/30 border-t border-border-secondary">
                      <p className="text-xs sm:text-sm text-text-gray  font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
