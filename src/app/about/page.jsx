import React from 'react'
import AboutUs from "@/component/about/Index"
import { META } from "@/config/constant";

export const metadata = {
  title: META.ABOUT.title,
  description: META.ABOUT.description,
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "M/S Chetankumar Bhagwan Suryawanshi",
      "alternateName": "Ms Patil Construction",
      "description": "PWD Class IV Contractor based in Dhule, Maharashtra specializing in infrastructure, roadworks, and civil engineering."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutUs />
    </>
  )
}

export default page