import React from "react";
import ContactPage from "@/component/contact/Index";
import { META, CONTACT_INFO } from "@/config/constant";

export const metadata = {
  title: META.CONTACT.title,
  description: META.CONTACT.description,
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "M/S Chetankumar Bhagwan Suryawanshi",
      "alternateName": "Ms Patil Construction",
      "telephone": CONTACT_INFO.phone.replace(/\s+/g, ""),  
      "email": CONTACT_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhule",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPage />
    </>
  );
};

export default page;
