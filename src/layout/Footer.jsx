"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { contactInfo } from "@/data/layout/header";
import { usePathname } from "next/navigation";
import { quickLinks, coreServices } from "@/data/layout/footer";

import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import logo from "../../public/assets/header/logo-black.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="w-full bg-slate-50 text-slate-800 border-t border-slate-200/80 relative overflow-hidden select-text">
      {/* Engineering blueprint background watermark */}
      <Image
        src="/construction_blueprint_bg.webp"
        alt="Engineering Blueprint Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-[0.03]"
        fill
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50 to-slate-50/90 pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-8 relative z-10">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-12">
          {/* Column 1: Company Profile */}
          <div className="flex flex-col items-start">
            <Image
              src={logo}
              alt="logo"
              priority
              className="h-auto w-[120px]"
            />
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <p className="text-xs sm:text-sm text-text-gray  font-medium leading-relaxed mb-6">
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
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <ul className="flex flex-col gap-3.5 w-full">
              {quickLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className={`text-xs sm:text-sm transition-colors duration-200 font-semibold inline-flex items-center gap-1.5 ${
                        isActive
                          ? "text-primary-hover"
                          : "text-slate-600 hover:text-primary"
                      }`}
                    >
                      <span className="text-primary-hover select-text">→</span>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs font-black tracking-[0.2em] text-slate-800 uppercase mb-4">
              Capabilities
            </h3>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <ul className="flex flex-col gap-3.5 w-full">
              {coreServices.map((service, idx) => {
                const isActive = pathname === service.href;
                return (
                  <li key={idx}>
                    <Link
                      href={service.href}
                      className={`text-xs sm:text-sm transition-colors duration-200 font-semibold inline-flex items-center gap-1.5 ${
                        isActive
                          ? "text-primary"
                          : "text-slate-600 hover:text-primary-hover"
                      }`}
                    >
                      <span className="text-primary-hover select-text">▪</span>
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs font-black tracking-[0.2em] text-slate-800 uppercase mb-4">
              Office Contacts
            </h3>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-primary-hover shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-text-gray  font-semibold leading-relaxed">
                  Dhule, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-primary-hover shrink-0" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="text-xs sm:text-sm text-slate-600 hover:text-primary-hover transition-colors duration-200 font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-primary-hover shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs sm:text-sm text-slate-600 hover:text-primary-hover transition-colors duration-200 font-semibold break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright alignment bar */}
        <div className="border-t border-slate-200 pt-8 mt-4 flex flex-col sm:flex-row justify-center items-center text-text-gray  font-semibold text-xs gap-4 select-text">
          <div>
            © {currentYear} M/S Patil Construction. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
