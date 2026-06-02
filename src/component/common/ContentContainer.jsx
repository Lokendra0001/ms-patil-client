import React from "react";

const ContentContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full  max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
