"use client";

import React from "react";
import { blog } from "@/data/blog";
import BlogDetails from "@/component/blog/slug/BlogDetail";
import Hero from "@/component/common/hero/Hero";
import ContentContainer from "@/component/common/ContentContainer";
import Button from "@/component/CTA/Button";
import { useParams } from "next/navigation";
import BlogCard from "../BlogCard";
import Heading from "@/component/common/Heading";

const BlogDetailPage = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params?.slug;
  const blogdetail = blog.find((z) => z.slug === slug);

  // Filter recommendations: other blogs
  const recommendations = blog.filter((b) => b.slug !== slug).slice(0, 3);

  // Dynamic Hero values
  const heroTagline = blogdetail?.category || "ARTICLE";
  const heroTitle = "Resources & Insights";
  const heroBg = "/assets/image/common/b1.webp";
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    {
      name: blogdetail?.title
        ? blogdetail.title.slice(0, 30) + "..."
        : "Not Found",
    },
  ];

  return (
    <div className="w-full bg-white select-text">
      <Hero
        tagline={heroTagline}
        title={heroTitle}
        bgImage={heroBg}
        breadcrumbs={breadcrumbs}
      />

      <ContentContainer className="py-16 lg:py-24">
        {blogdetail ? (
          <BlogDetails blogdetail={blogdetail} />
        ) : (
          <div className="text-center py-12 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-red-500">Blog Not Found</h2>
            <p className="text-slate-500 mt-2">
              The blog post you are looking for does not exist.
            </p>
            <div className="mt-6">
              <Button href="/blog" variant="theme">
                Back to Blog
              </Button>
            </div>
          </div>
        )}
      </ContentContainer>

      {/* Related Articles Footer */}
      {blogdetail && recommendations.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50/50 py-16 lg:py-20">
          <ContentContainer>
            <div className="mb-10 flex justify-between items-center">
              <Heading
                title="Related Articles & Insights"
                tagline="KEEP READING"
                className="mb-0!"
              />
              <Button href="/blog" variant="theme" size="md">
                View All Articles
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((post) => (
                <BlogCard key={post.id || post.slug} post={post} />
              ))}
            </div>
          </ContentContainer>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;
