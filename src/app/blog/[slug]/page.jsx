import React from "react";
import BlogDetailPage from "@/component/blog/slug/Index";
import { blog } from "@/data/blog";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blog.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | M/S Chetankumar Bhagwan Suryawanshi",
    };
  }

  return {
    title: `${post.title} | M/S Chetankumar Bhagwan Suryawanshi`,
    description:
      post.excerpt ||
      post.description?.substring(0, 155) ||
      `Read our article on ${post.title}`,
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const post = blog.find((b) => b.slug === slug);

  const jsonLd = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.coverImage,
    "datePublished": new Date(post.date).toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "M/S Chetankumar Bhagwan Suryawanshi",
      "alternateName": "Ms Patil Construction"
    },
    "publisher": {
      "@type": "Organization",
      "name": "M/S Chetankumar Bhagwan Suryawanshi",
      "alternateName": "Ms Patil Construction",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mspatilconstruction.com/assets/logo.png"
      }
    },
    "description": post.shortDescription || "Read our latest article on infrastructure and engineering."
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogDetailPage slug={slug} />
    </>
  );
};

export default page;
