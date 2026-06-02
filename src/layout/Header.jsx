// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Button from "@/component/common/Button";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const pathname = usePathname();

//   // Scroll handler to add scroll styling
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 40) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setIsMobileServicesOpen(false);
//   }, [pathname]);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Projects", href: "/projects" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   const services = [
//     { title: "Residential Construction", href: "/services/residential" },
//     { title: "Commercial Projects", href: "/services/commercial" },
//     { title: "Renovation & Remodeling", href: "/services/renovation" },
//     { title: "Interior Design", href: "/services/interior" },
//     { title: "Project Management", href: "/services/management" },
//   ];

//   return (
//     <>
//       {/* Top Bar - Professional Light Theme */}
//       <div className=" w-full bg-slate-50 text-white text-xs py-2.5 px-4 sm:px-8 lg:px-12 border-b border-slate-200 hidden md:block select-text">
//         <div className="max-w-[1600px] mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-6">
//             <span className="flex items-center gap-1.5 font-medium text-slate-700">
//               <svg
//                 className="w-3.5 h-3.5 text-primary-light"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//               </svg>
//               +91 98765 43210
//             </span>
//             <span className="w-px h-3 bg-slate-200" />
//             <span className="flex items-center gap-1.5 font-medium text-slate-700">
//               <svg
//                 className="w-3.5 h-3.5 text-primary-light"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//               info@mspatilconstruction.com
//             </span>
//           </div>
//           <div className="flex items-center gap-6">
//             <span className="flex items-center gap-1.5 font-medium text-white">
//               <svg
//                 className="w-3.5 h-3.5 text-primary-light"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               Mon - Sat: 9:00 AM - 6:00 PM
//             </span>
//             <span className="w-px h-3 bg-slate-200" />
//             <span className="flex items-center gap-1.5 font-medium text-white">
//               <svg
//                 className="w-3.5 h-3.5 text-primary-light"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//               Pune, Maharashtra
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header
//         className={`sticky top-0 z-40 w-full bg-white border-b transition-all duration-200 rounded-none ${
//           isScrolled
//             ? "shadow-sm py-3.5 border-slate-200"
//             : "py-5 border-slate-200"
//         }`}
//       >
//         <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
//           <div className="flex items-center justify-between">
//             {/* LEFT: Solid Corporate Logo */}
//             <Link
//               href="/"
//               className="flex items-center gap-3 group focus:outline-none"
//             >
//               <div className="flex items-center justify-center w-9 h-9 text-primary-light">
//                 <svg
//                   className="w-8 h-8"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M3 21H21M5 21V8L12 3L19 8V21M9 21V13H15V21"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="square"
//                   />
//                   <path
//                     d="M5 12H19M12 3V21"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   />
//                 </svg>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-extrabold text-2xl tracking-tight text-primary leading-none group-hover:text-primary-light transition-colors uppercase">
//                   MS PATIL
//                 </span>
//                 <span className="text-[9px] font-bold tracking-[0.28em] text-primary-light leading-none mt-1.5 uppercase">
//                   CONSTRUCTION & INFRA
//                 </span>
//               </div>
//             </Link>

//             {/* MIDDLE: Desktop Navigation - Centered Menu Links */}
//             <nav className="hidden lg:flex items-center gap-8">
//               <Link
//                 href="/"
//                 className={`text-[13px] font-semibold tracking-wider uppercase transition-colors py-1.5 border-b-2 ${
//                   pathname === "/"
//                     ? "border-primary-light text-primary"
//                     : "border-transparent text-slate-700 hover:text-primary hover:border-primary-light"
//                 }`}
//               >
//                 Home
//               </Link>

//               {/* Services Dropdown */}
//               <div className="relative group/dropdown py-1.5">
//                 <button className="flex items-center gap-1.5 text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-primary transition-colors cursor-pointer focus:outline-none">
//                   Services
//                   <svg
//                     className="w-3.5 h-3.5 text-slate-400 group-hover/dropdown:text-primary transition-transform duration-200 group-hover/dropdown:rotate-180"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-64 bg-white rounded-none shadow-md border border-slate-200 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-150 z-50">
//                   <div className="h-1 bg-primary-light w-full" />
//                   <div className="flex flex-col">
//                     {services.map((service, index) => (
//                       <Link
//                         key={index}
//                         href={service.href}
//                         className="text-xs font-semibold tracking-wide text-slate-700 hover:text-primary hover:bg-slate-50 px-5 py-3.5 border-b border-slate-100 last:border-none transition-colors uppercase"
//                       >
//                         {service.title}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 href="/projects"
//                 className={`text-[13px] font-semibold tracking-wider uppercase transition-colors py-1.5 border-b-2 ${
//                   pathname === "/projects"
//                     ? "border-primary-light text-primary"
//                     : "border-transparent text-slate-700 hover:text-primary hover:border-primary-light"
//                 }`}
//               >
//                 Projects
//               </Link>
//               <Link
//                 href="/about"
//                 className={`text-[13px] font-semibold tracking-wider uppercase transition-colors py-1.5 border-b-2 ${
//                   pathname === "/about"
//                     ? "border-primary-light text-primary"
//                     : "border-transparent text-slate-700 hover:text-primary hover:border-primary-light"
//                 }`}
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/contact"
//                 className={`text-[13px] font-semibold tracking-wider uppercase transition-colors py-1.5 border-b-2 ${
//                   pathname === "/contact"
//                     ? "border-primary-light text-primary"
//                     : "border-transparent text-slate-700 hover:text-primary hover:border-primary-light"
//                 }`}
//               >
//                 Contact Us
//               </Link>
//             </nav>

//             {/* RIGHT: Consultation Button using common Button component */}
//             <div className="flex items-center gap-4">
//               <Button
//                 href="/contact?consultation=true"
//                 variant="theme"
//                 size="hd"
//                 className="hidden md:inline-flex uppercase tracking-wider py-3 px-6 h-auto"
//               >
//                 Book a Consultation
//               </Button>

//               {/* Mobile Hamburger Button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="lg:hidden p-2 text-slate-800 hover:text-primary-light hover:bg-slate-100 rounded-none border border-slate-200 focus:outline-none transition-colors"
//                 aria-label="Toggle menu"
//               >
//                 {isMobileMenuOpen ? (
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2.5}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2.5}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE DRAWER - Square & Light Grid */}
//       {/* Backdrop */}
//       <div
//         className={`fixed inset-0 bg-slate-900/40 transition-opacity duration-300 z-40 lg:hidden ${
//           isMobileMenuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//         onClick={() => setIsMobileMenuOpen(false)}
//       />

//       {/* Drawer Container */}
//       <div
//         className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-50 p-6 flex flex-col justify-between transition-transform duration-300 ease-out transform rounded-none lg:hidden ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar">
//           {/* Drawer Header */}
//           <div className="flex items-center justify-between pb-4 border-b border-slate-200">
//             <Link
//               href="/"
//               className="flex items-center gap-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <div className="w-8 h-8 text-primary-light flex items-center justify-center">
//                 <svg
//                   className="w-6 h-6"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2050/svg"
//                 >
//                   <path
//                     d="M4 4H20M4 20H20M12 4V20M8 8L16 16M16 8L8 16"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   />
//                 </svg>
//               </div>
//               <span className="font-extrabold text-lg tracking-tight text-primary">
//                 MS PATIL
//               </span>
//             </Link>
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="p-1 text-slate-500 hover:text-slate-950 focus:outline-none border border-transparent hover:border-slate-200"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2.5}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Links */}
//           <nav className="flex flex-col gap-3">
//             <Link
//               href="/"
//               className={`text-[13px] font-semibold tracking-wider uppercase px-3 py-2.5 rounded-none transition-colors border-l-2 ${
//                 pathname === "/"
//                   ? "bg-slate-50 border-primary-light text-primary"
//                   : "text-slate-700 hover:bg-slate-50 border-transparent border-b border-slate-100"
//               }`}
//             >
//               Home
//             </Link>

//             {/* Mobile Services Accordion */}
//             <div className="flex flex-col border-b border-slate-100">
//               <button
//                 onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                 className="flex items-center justify-between text-[13px] font-semibold tracking-wider uppercase px-3 py-2.5 text-slate-700 hover:bg-slate-50 focus:outline-none text-left cursor-pointer"
//               >
//                 <span>Services</span>
//                 <svg
//                   className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
//                     isMobileServicesOpen ? "rotate-180 text-primary-light" : ""
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2.5}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               <div
//                 className={`overflow-hidden transition-all duration-300 ${
//                   isMobileServicesOpen
//                     ? "max-h-[300px] mt-1 mb-2 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <div className="flex flex-col gap-1.5 pl-5 border-l-2 border-primary-light">
//                   {services.map((service, index) => (
//                     <Link
//                       key={index}
//                       href={service.href}
//                       className="text-xs font-semibold text-white hover:text-primary py-1.5 transition-colors uppercase tracking-wide"
//                     >
//                       {service.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <Link
//               href="/projects"
//               className={`text-[13px] font-semibold tracking-wider uppercase px-3 py-2.5 rounded-none transition-colors border-l-2 ${
//                 pathname === "/projects"
//                   ? "bg-slate-50 border-primary-light text-primary"
//                   : "text-slate-700 hover:bg-slate-50 border-transparent border-b border-slate-100"
//               }`}
//             >
//               Projects
//             </Link>
//             <Link
//               href="/about"
//               className={`text-[13px] font-semibold tracking-wider uppercase px-3 py-2.5 rounded-none transition-colors border-l-2 ${
//                 pathname === "/about"
//                   ? "bg-slate-50 border-primary-light text-primary"
//                   : "text-slate-700 hover:bg-slate-50 border-transparent border-b border-slate-100"
//               }`}
//             >
//               About Us
//             </Link>
//             <Link
//               href="/contact"
//               className={`text-[13px] font-semibold tracking-wider uppercase px-3 py-2.5 rounded-none transition-colors border-l-2 ${
//                 pathname === "/contact"
//                   ? "bg-slate-50 border-primary-light text-primary"
//                   : "text-slate-700 hover:bg-slate-50 border-transparent border-b border-slate-100"
//               }`}
//             >
//               Contact Us
//             </Link>
//           </nav>
//         </div>

//         {/* Drawer Bottom CTA using common Button */}
//         <div className="pt-6 border-t border-slate-200">
//           <Button
//             href="/contact?consultation=true"
//             variant="theme"
//             size="hd"
//             className="w-full flex items-center justify-center uppercase tracking-wider py-3.5 h-auto"
//           >
//             Book a Consultation
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/component/CTA/Button";
import ContentContainer from "@/component/common/ContentContainer";
import AnnouncementBar from "@/component/common/header/AnnouncementBar";
import { sectors, navLinks } from "@/data/layout/header";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll handler to add scroll styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobileSectorsOpen, setIsMobileSectorsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSectorsOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={
          isScrolled
            ? "fixed top-0 z-999 w-full bg-white border-b border-gray-100 animate-slide-down"
            : "absolute top-0 z-999 w-full bg-transparent"
        }
      >
        <AnnouncementBar isScrolled={isScrolled} />

        {/* Main Header */}
        <header
          className={`sticky top-0 z-40 w-full   transition-all duration-200 rounded-none ${
            isScrolled ? " py-3.5 " : "py-5 "
          }`}
        >
          <ContentContainer className="">
            <div className="flex items-center justify-between">
              {/* LEFT: Solid Corporate Logo */}
              <Link
                href="/"
                className="flex items-center gap-3 group focus:outline-none"
              >
                <div className="flex items-center justify-center w-9 h-9 text-primary-light">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21H21M5 21V8L12 3L19 8V21M9 21V13H15V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                    <path
                      d="M5 12H19M12 3V21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`font-extrabold text-2xl tracking-tight leading-none transition-colors uppercase ${isScrolled ? "text-slate-900 group-hover:text-primary-light" : "text-white group-hover:text-white"}`}
                  >
                    MS PATIL
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.28em] text-primary-light leading-none mt-1.5 uppercase">
                    CONSTRUCTION & INFRA
                  </span>
                </div>
              </Link>

              {/* MIDDLE: Desktop Navigation - Centered Menu Links */}
              <nav className="hidden xl:flex items-center gap-8">
                {navLinks.map((link) => {
                  if (link.name === "Sectors") {
                    const isSectorsActive = pathname.startsWith("/sectors");
                    return (
                      <div key={link.name} className="relative group py-1.5">
                        <button
                          className={`flex items-center gap-1.5 text-[13px] font-semibold tracking-wider transition-colors py-1.5 border-b-2 cursor-pointer ${
                            isSectorsActive
                              ? `border-primary-light ${isScrolled ? "text-primary" : "text-white"}`
                              : `border-transparent  ${
                                  isScrolled
                                    ? "text-slate-700 group-hover:text-primary"
                                    : "text-white group-hover:text-white"
                                }`
                          }`}
                        >
                          <span>Sectors</span>
                          <svg
                            className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Dropdown Menu with Hover Bridge */}
                        <div
                          className={`absolute left-0 pt-4 w-72 z-50 hidden group-hover:block animate-fade-in ${isScrolled ? "top-full" : "top-7"}`}
                        >
                          <div className="bg-white  border-b border-border-secondary shadow-2xl py-1 rounded-none">
                            {sectors.map((sec) => {
                              const isLinkActive = pathname === sec.href;
                              return (
                                <Link
                                  key={sec.href}
                                  href={sec.href}
                                  className={`group/item flex items-center justify-between px-5 py-4 bg-white border-b border-slate-100 last:border-0 border-l-2 transition-all duration-200 rounded-none text-left ${
                                    isLinkActive
                                      ? "border-l-primary-light bg-slate-50/80"
                                      : "border-l-transparent hover:border-l-primary-light hover:bg-slate-50/80"
                                  }`}
                                >
                                  <span
                                    className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                                      isLinkActive
                                        ? "text-primary-light"
                                        : "text-text-primary group-hover/item:text-primary-light"
                                    }`}
                                  >
                                    {sec.name}
                                  </span>
                                  <span
                                    className={`text-[8px] font-mono font-bold tracking-widest px-2 py-0.5 transition-colors uppercase ${
                                      isLinkActive
                                        ? "bg-primary-light text-slate-950"
                                        : "text-slate-500 bg-slate-100 group-hover/item:bg-primary-light group-hover/item:text-slate-950"
                                    }`}
                                  >
                                    {sec.code}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-[13px] font-semibold tracking-wider  transition-colors py-1.5 border-b-2 ${
                        isActive
                          ? `border-primary-light ${isScrolled ? "text-primary" : "text-white"}`
                          : `border-transparent ${isScrolled ? "text-slate-700 hover:text-primary hover:border-primary-light" : "text-white hover:opacity-90 "}`
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* RIGHT: Consultation Button using common Button component */}
              <div className=" flex items-center gap-4">
                <Button
                  href="/contact?consultation=true"
                  variant="theme"
                  size="hd"
                  className={` hidden! xl:flex! uppercase tracking-wider py-3 px-6 h-auto ${isScrolled ? "hover:text-text-primary" : "hover:text-white"} `}
                >
                  Book a Consultation
                </Button>

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`xl:hidden p-2 rounded-none border focus:outline-none transition-colors ${isScrolled ? "text-slate-800 border-slate-200 hover:bg-slate-100" : "text-white border-white/20 hover:bg-white/10"}`}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </ContentContainer>
        </header>
      </div>

      {/* MOBILE DRAWER - Square & Light Grid */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/40 transition-opacity duration-300 z-[9999] xl:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs md:max-w-xl bg-white z-[10000] p-6 flex flex-col justify-between transition-transform duration-300 ease-out transform rounded-none xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 text-primary-light flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2050/svg"
                >
                  <path
                    d="M4 4H20M4 20H20M12 4V20M8 8L16 16M16 8L8 16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-primary">
                MS PATIL
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 text-slate-500 hover:text-slate-950 focus:outline-none border border-transparent hover:border-slate-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              if (link.name === "Sectors") {
                const isSectorsActive = pathname.startsWith("/sectors");
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() =>
                        setIsMobileSectorsOpen(!isMobileSectorsOpen)
                      }
                      className={`w-full flex items-center justify-between text-[13px] font-semibold tracking-wider uppercase px-3 py-2.5 rounded-none border-b border-slate-100 focus:outline-none cursor-pointer hover:bg-slate-50 transition-colors ${
                        isSectorsActive
                          ? "bg-slate-50 border-l-2 border-l-primary-light text-primary"
                          : "text-slate-800"
                      }`}
                    >
                      <span>Sectors</span>
                      <svg
                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isMobileSectorsOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isMobileSectorsOpen && (
                      <div className="bg-slate-50 pl-6 pr-3 py-2 flex flex-col gap-1 border-b border-slate-100 select-text">
                        {sectors.map((sec) => (
                          <Link
                            key={sec.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            href={sec.href}
                            className="block py-2.5 pl-3 border-l border-slate-200 text-xs font-bold text-slate-600 hover:text-primary-light hover:border-l-primary-light uppercase tracking-wider transition-all text-left"
                          >
                            {sec.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-semibold tracking-wider uppercase px-3 py-2.5 rounded-none transition-colors border-l-2 ${
                    isActive
                      ? "bg-slate-50 border-primary-light text-primary"
                      : "text-slate-800 hover:text-primary hover:bg-slate-50 border-transparent border-b border-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom CTA using common Button */}
        <div className="  pt-6 border-t border-slate-200">
          <Button
            href="/contact?consultation=true"
            variant="theme"
            size="hd"
            className=" w-full flex items-center justify-center uppercase tracking-wider py-3.5 h-auto"
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
