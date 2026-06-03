import React from "react";
import HomePage from "@/component/home/Index";
import { META } from "@/config/constant";

export const metadata = {
  title: META.HOME.title,
  description: META.HOME.description,
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "M/S Chetankumar Bhagwan Suryawanshi",
    "alternateName": "Ms Patil Construction",
    "url": "https://mspatilconstruction.com"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
};

export default page;
