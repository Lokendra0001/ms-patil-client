import React from "react";
import ServiceDetail from "@/component/services/slug/Index";
import { servicesData } from "@/data/services/details";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | M/S Chetankumar Bhagwan Suryawanshi",
    };
  }

  return {
    title: `${service.title} | Services | M/S Chetankumar Bhagwan Suryawanshi`,
    description: service.description || `High quality execution of ${service.title} by PWD contractor M/S Chetankumar Bhagwan Suryawanshi.`,
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const service = servicesData[slug];

  const jsonLd = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "M/S Chetankumar Bhagwan Suryawanshi",
      "alternateName": "Ms Patil Construction",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhule",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Maharashtra"
    }
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ServiceDetail slug={slug} />
    </>
  );
};

export default page;
