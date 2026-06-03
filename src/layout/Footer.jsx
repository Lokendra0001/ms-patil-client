"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home Page", href: "/" },
    { name: "Projects Portfolio", href: "/projects" },
    { name: "About Our Firm", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const coreServices = [
    { name: "Civil Construction", href: "/services/civil-construction" },
    { name: "Road & Pavement Works", href: "/services/road-pavement-works" },
    {
      name: "Drainage & Water Infrastructure",
      href: "/services/drainage-water-infra",
    },
    { name: "Industrial Projects", href: "/services/industrial-projects" },
    {
      name: "Railway & Infrastructure",
      href: "/services/railway-infrastructure",
    },
    { name: "Material Supply & Mfg", href: "/services/material-supply-mfg" },
  ];

  return (
    <footer className="w-full bg-slate-50 text-slate-800 border-t border-slate-200/80 relative overflow-hidden select-text">
      {/* Engineering blueprint background watermark */}
      <Image
        src="/construction_blueprint_bg.webp"
        alt="Engineering Blueprint Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-[0.03]"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50 to-slate-50/90 pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-8 relative z-10">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-12">
          {/* Column 1: Company Profile */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs font-black tracking-[0.2em] text-slate-800 uppercase mb-4">
              M/S Chetankumar B. Suryawanshi
            </h3>
            <div className="w-8 h-0.5 bg-primary-light mb-5" />
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-6">
              Delivering highway bypass corridors, municipal complexes, and
              vertically integrated manufacturing solutions for public and
              private infrastructure landmarks.
            </p>
            <div className="flex flex-col gap-1.5 text-xs text-slate-400 font-bold select-text">
              <div>✓ Class IV PWD Contractor</div>
              <div>✓ MSME & GST Registered</div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs font-black tracking-[0.2em] text-slate-800 uppercase mb-4">
              Quick Links
            </h3>
            <div className="w-8 h-0.5 bg-primary-light mb-5" />
            <ul className="flex flex-col gap-3.5 w-full">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-primary-light-hover transition-colors duration-200 font-semibold inline-flex items-center gap-1.5"
                  >
                    <span className="text-primary-light-hover select-text">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs font-black tracking-[0.2em] text-slate-800 uppercase mb-4">
              Capabilities
            </h3>
            <div className="w-8 h-0.5 bg-primary-light mb-5" />
            <ul className="flex flex-col gap-3.5 w-full">
              {coreServices.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-primary-light-hover transition-colors duration-200 font-semibold inline-flex items-center gap-1.5"
                  >
                    <span className="text-primary-light-hover select-text">
                      ▪
                    </span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs font-black tracking-[0.2em] text-slate-800 uppercase mb-4">
              Office Contacts
            </h3>
            <div className="w-8 h-0.5 bg-primary-light mb-5" />
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary-light-hover shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  Dhule & Pune, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-primary-light-hover shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+919876543210"
                  className="text-xs sm:text-sm text-slate-600 hover:text-primary-light-hover transition-colors duration-200 font-semibold"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-primary-light-hover shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@mspatilconstruction.com"
                  className="text-xs sm:text-sm text-slate-600 hover:text-primary-light-hover transition-colors duration-200 font-semibold break-all"
                >
                  info@mspatilconstruction.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright alignment bar */}
        <div className="border-t border-slate-200 pt-8 mt-4 flex flex-col sm:flex-row justify-center items-center text-slate-500 font-semibold text-xs gap-4 select-text">
          <div>
            © {currentYear} M/S Patil Construction. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
