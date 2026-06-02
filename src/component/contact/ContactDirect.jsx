"use client";

import React from "react";

const ContactDirect = () => {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hello M/S Patil Construction, I would like to inquire about your construction and infrastructure services.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailAddress = "rajpurohitlokendra62@gmail.com";
  const emailSubject = encodeURIComponent(
    "Project & Civil Construction Inquiry",
  );
  const emailUrl = `mailto:${emailAddress}?subject=${emailSubject}`;

  return (
    <section className="py-12 bg-white border-t border-slate-100 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Minimalist Text Content */}
        <div className="text-center md:text-left">
          <span className="text-[9px] font-black tracking-[0.25em] text-primary-light uppercase block mb-1">
            Direct Redirection
          </span>
          <h3 className="text-xl font-extrabold text-primary uppercase">
            Connect Instantly
          </h3>
          <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">
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
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-emerald-500/20 text-[#25d366] text-xs font-bold uppercase tracking-wider bg-emerald-500/[0.03] hover:bg-[#25d366] hover:text-white transition-all duration-200 select-text cursor-pointer"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.704 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            WhatsApp Chat
          </a>

          {/* Call Operations Direct */}
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider bg-slate-50 hover:bg-primary-light hover:text-white hover:border-primary-light transition-all duration-200 select-text cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Operations
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactDirect;
