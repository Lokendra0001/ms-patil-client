"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blog } from "@/data/blog";
import BlogDetails from "@/component/blog/blogdetail";
import Hero from "@/component/common/hero/Hero";
import ContentContainer from "@/component/common/ContentContainer";
import Button from "@/component/CTA/Button";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "@/api/blog";
import { useParams } from "next/navigation";
import BlogDetailSkeleton from "./BlogDetailSkeleton";
import { ArrowRight } from "lucide-react";

const BlogDetailPage = () => {
  const { slug } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["get-particular-blog", slug],
    queryFn: () => getBlog(slug),
    enabled: !!slug,
  });

  const blogFromDb = data?.blog;
  const staticBlog = blog.find((z) => z.slug === slug);
  const blogdetail = blogFromDb || staticBlog;

  const showSkeleton = isPending && !staticBlog;

  // Filter recommendations: other blogs in the same category or just general latest blogs
  const dbBlogsList = data?.blogs || [];
  const displayBlogs = dbBlogsList.length > 0 ? dbBlogsList : blog;
  const recommendations = displayBlogs
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  const getPostImage = (post) => {
    const img = post.coverImage || post.imageUrl || post.image;
    return typeof img === "string" ? img : img?.src || "/placeholder.svg";
  };

  const getPostDate = (post) =>
    post.date ||
    (post.createdAt &&
      new Date(post.createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })) ||
    "";

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: blogdetail?.title || "Blog Details" },
  ];

  return (
    <div className="w-full bg-white select-text">
      {showSkeleton ? (
        <>
          {/* Fallback skeleton layout */}
          <Hero
            tagline="ARTICLE"
            title="Loading Post Details..."
            bgImage="/assets/image/common/b1.png"
            breadcrumbs={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: "Loading..." },
            ]}
          />
          <ContentContainer className="py-16">
            <BlogDetailSkeleton />
          </ContentContainer>
        </>
      ) : blogdetail ? (
        <>
          {/* Main Hero Header */}
          <Hero
            tagline={blogdetail.category || "ARTICLE"}
            title={blogdetail.title}
            bgImage={getPostImage(blogdetail)}
            breadcrumbs={breadcrumbItems}
          />

          {/* Reading Layout */}
          <ContentContainer className="py-16 lg:py-24">
            <BlogDetails blogdetail={blogdetail} />
          </ContentContainer>

          {/* Related Articles Footer */}
          {recommendations.length > 0 && (
            <section className="border-t border-slate-100 bg-slate-50/50 py-16 lg:py-20">
              <ContentContainer>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div>
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2.5 block">
                      KEEP READING
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary select-text">
                      Related Articles & Insights
                    </h2>
                  </div>
                  <div>
                    <Button href="/blog" variant="theme" size="md">
                      View All Articles
                    </Button>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recommendations.map((post) => (
                    <article
                      key={post.id || post.slug}
                      className="relative overflow-hidden group border border-slate-200/60 rounded-none flex flex-col justify-between bg-white transition-all duration-300 min-h-[400px] shadow-none"
                    >
                      {/* Hover gold bottom accent line */}
                      <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary-light transition-all duration-300 group-hover:w-full z-20" />

                      {/* Image Box */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 select-text">
                        <Image
                          src={getPostImage(post)}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 bg-primary text-white text-[10px] tracking-wider uppercase font-bold rounded-none">
                            {post.category || "General"}
                          </span>
                        </div>
                      </div>

                      {/* Content Box */}
                      <div className="p-6 flex-grow flex flex-col justify-between relative">
                        <div>
                          {/* Date info */}
                          <span className="text-[10px] font-black tracking-wider text-primary-light-hover uppercase mb-1 block select-text">
                            {getPostDate(post)}
                          </span>

                          {/* Title */}
                          <h3 className="text-base font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-primary-light-hover line-clamp-2">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                        </div>

                        {/* Read Link */}
                        <Link
                          href={`/blog/${post.slug}`}
                          className="w-fit mt-4 relative z-10 flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-primary-light-hover transition-colors duration-300 select-text"
                        >
                          <span>Read Article</span>
                          <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </ContentContainer>
            </section>
          )}
        </>
      ) : (
        <div className="text-center py-24 min-h-[50vh] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-red-500">Blog Not Found</h1>
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
    </div>
  );
};

export default BlogDetailPage;
