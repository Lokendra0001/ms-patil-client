import React from 'react'
import ServicesIndex from "@/component/services/Index"
import { META } from "@/config/constant";

import { servicesData } from "@/data/services/details";

export const metadata = {
  title: META.SERVICE.title,
  description: META.SERVICE.description,
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": META.SERVICE.title,
    "description": META.SERVICE.description,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": Object.keys(servicesData).map((slug, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://mspatilconstruction.com/services/${slug}`,
        "name": servicesData[slug].title
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesIndex />
    </>
  )
}

export default page
