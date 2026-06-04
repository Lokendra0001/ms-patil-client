"use client";

import React from "react";
import Heading from "@/component/common/Heading";

const CompliancePanel = ({ data }) => {
  if (!data || !data.compliance) return null;

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-border-secondary select-text">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <Heading
          title="Codes & "
          tagline="The Quality Anchor"
          align="center"
          highlight="Compliance"
        />

        {/* 3-Column Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
          {data.compliance.map((item, idx) => (
            <div
              key={idx}
              className="bg-white-background  border border-border-secondary rounded-none p-6 sm:p-8 space-y-4 hover:border-border-primary transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative group"
            >
              {/* Gold Top Border Hover Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-primary transition-all duration-300" />

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-primary-hover uppercase tracking-widest block">
                  Standard 0{idx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-text-gray tracking-wider leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompliancePanel;
