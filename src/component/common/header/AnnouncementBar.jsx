import React from "react";
import ContentContainer from "@/component/common/ContentContainer";
import { contactInfo } from "@/data/layout/header";

const AnnouncementBar = ({ isScrolled }) => {
  return (
    <div
      className={`w-full text-text-white  text-xs py-2.5 px-4 sm:px-8 lg:px-12 select-text border-b border-transparent transition-all duration-300 ${
        isScrolled ? "hidden" : "hidden lg:block"
      }`}
    >
      <ContentContainer className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium">
            <svg
              className="w-3.5 h-3.5 text-primary"
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
            {contactInfo.phone}
          </span>
          <span className="w-px h-3 bg-slate-200" />
          <span className="flex items-center gap-1.5 font-medium text-text-white ">
            <svg
              className="w-3.5 h-3.5 text-primary"
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
            {contactInfo.email}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium text-text-white ">
            <svg
              className="w-3.5 h-3.5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {contactInfo.hours}
          </span>
          <span className="w-px h-3 bg-slate-200" />
          <span className="flex items-center gap-1.5 font-medium text-text-white ">
            <svg
              className="w-3.5 h-3.5 text-primary"
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
            {contactInfo.location}
          </span>
        </div>
      </ContentContainer>
    </div>
  );
};

export default AnnouncementBar;
