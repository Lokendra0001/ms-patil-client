"use client";

import React, { useState } from "react";
import Button from "@/component/common/Button";
import Heading from "@/component/common/Heading";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What work does M/S Patil Associates & Developers do?",
      answer: "We are a civil engineering and government contracting firm specializing in RCC works, road building, earthworks, drainage networks, and major infrastructure.",
    },
    {
      question: "How many years of construction experience do you have?",
      answer: "Over 20 years of experience with 30+ completed projects and an average annual turnover of ₹11 Crore.",
    },
    {
      question: "Where are you located and which areas do you serve?",
      answer: "We are headquartered in Dhule, Maharashtra and operate across Maharashtra, Rajasthan, Madhya Pradesh, Delhi, and Mumbai.",
    },
    {
      question: "Do you own your construction equipment fleet or hire it?",
      answer: "We own 100% of our fleet (including Tata Hitachi excavators, transit mixers, road rollers, and Kyb Conmat RMC plants) for zero mobilization delay.",
    },
    {
      question: "Are you a registered government contractor?",
      answer: "Yes, we hold Class IV PWD registration along with MSME, GST, and full EPF/ESIC contract compliance.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b border-slate-100 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Parent grid is set to items-start to keep the left column stable */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vertically Centered CTA Block (Non-sticky) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Heading
              tagline="DEALING WITH YOUR WORRIES"
              title="If Your Question Is Not Here"
              highlight="Contact Us"
              description="Can't find the specific contracting, registration, or machinery details you're looking for? Reach out directly to our operations office, and we'll resolve your query."
              textColor="text-primary"
              className="!mb-8 max-w-md"
            />


            {/* Rectangular Contact Button */}
            <Button
              href="/contact"
              variant="theme"
              size="lg"
              className=""
            >
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
                  className={`border rounded-none bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-primary-light shadow-[0_4px_25px_rgba(245,158,11,0.04)]"
                      : "border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  {/* Accordion header button */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 focus:outline-none select-none cursor-pointer"
                  >
                    <span
                      className={` text-sm sm:text-base font-bold transition-colors duration-200 ${
                        isOpen ? "text-primary-light-hover" : "text-slate-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                    
                    {/* Expand/Collapse sign indicator */}
                    <span
                      className={`text-lg sm:text-xl font-bold shrink-0 leading-none transition-colors duration-200 select-none ${
                        isOpen ? "text-primary-light-hover" : "text-slate-400"
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
                    <div className="p-5 sm:p-6 bg-slate-50/30 border-t border-slate-100">
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
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
