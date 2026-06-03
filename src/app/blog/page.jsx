import React from 'react'
import Blogs from "@/component/blog/Index"
import { META } from "@/config/constant";

import { blog } from "@/data/blog";

export const metadata = {
  title: META.BLOG.title,
  description: META.BLOG.description,
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": META.BLOG.title,
    "description": META.BLOG.description,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blog.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://mspatilconstruction.com/blog/${post.slug}`,
        "name": post.title
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Blogs />
    </>
  )
}

export default page
