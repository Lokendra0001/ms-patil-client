"use client";

import React from "react";
import { contactInfo } from "@/data/layout/header";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";

const ContactDirect = () => {
  const whatsappNumber = contactInfo.phone.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    "Hello M/S Patil Construction, I would like to inquire about your construction and infrastructure services.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailAddress = contactInfo.email;
  const emailSubject = encodeURIComponent(
    "Project & Civil Construction Inquiry",
  );
  const emailUrl = `mailto:${emailAddress}?subject=${emailSubject}`;

  return (
    <section className="py-12 bg-white-background  border-t border-slate-100 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Minimalist Text Content */}
        <div className="text-center md:text-left">
          <span className="text-[9px] font-black tracking-[0.25em] text-primary-light uppercase block mb-1">
            Direct Redirection
          </span>
          <h3 className="text-xl font-extrabold text-primary uppercase">
            Connect Instantly
          </h3>
          <p className="text-xs text-text-gray  font-normal leading-relaxed mt-1">
            Skip the intake form and reach out directly to our operations
            coordinators.
          </p>
        </div>

        {/* Right Side: Sleek Compact Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-emerald-500/20 text-[#25d366] text-xs font-bold uppercase tracking-wider bg-emerald-500/[0.03] hover:bg-[#25d366] hover:text-text-white  transition-all duration-200 select-text cursor-pointer"
          >
            <TbBrandWhatsapp className="w-4 h-4" />
            WhatsApp Chat
          </a>

          {/* Call Operations Direct */}
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider bg-slate-50 hover:bg-primary hover:text-text-white  hover:border-primary transition-all duration-200 select-text cursor-pointer"
          >
            <FiPhone className="w-4 h-4" />
            Call Operations
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactDirect;
