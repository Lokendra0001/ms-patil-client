"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Calendar, Clock } from "lucide-react";
import { blog } from "@/data/blog";
import { useGetBlogs } from "@/hooks/blog";

const BlogDetails = ({ blogdetail }) => {
  const { data } = useGetBlogs();

  const dbBlogsList = data?.blogs || [];
  const displayBlogs = dbBlogsList.length > 0 ? dbBlogsList : blog;

  // Filter out current blog and limit sidebar to 3 latest posts
  const sidebarLatest = displayBlogs
    .filter((z) => z.slug !== blogdetail.slug)
    .slice(0, 3);

  // Dynamic tags parser
  const getPostTags = (post) => {
    if (!post?.tags) return [];
    if (Array.isArray(post.tags))
      return post.tags.map((t) => String(t).trim().toLowerCase());
    if (typeof post.tags === "string") {
      const clean = post.tags.trim();
      if (clean.startsWith("[") && clean.endsWith("]")) {
        try {
          return JSON.parse(clean).map((t) => String(t).trim().toLowerCase());
        } catch {}
      }
      return clean
        .split(",")
        .map((t) => t.trim().toLowerCase())
        .filter(Boolean);
    }
    return [];
  };

  const displayCategories = Array.from(
    new Set(displayBlogs.map((p) => p.category).filter(Boolean)),
  );
  const displayTags = Array.from(
    new Set(displayBlogs.flatMap((p) => getPostTags(p)).filter(Boolean)),
  );

  const getImgSrc = (img) => {
    if (!img) return "/placeholder.svg";
    return typeof img === "string" ? img : img.src || "/placeholder.svg";
  };

  const renderContent = (content) => {
    if (!content) return null;
    const normalized = content.replace(/\u00A0/g, " ");

    if (/<[a-z][\s\S]*>/i.test(normalized)) {
      return (
        <div
          className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed break-words w-full prose-headings:text-primary prose-a:text-primary-light-hover"
          dangerouslySetInnerHTML={{ __html: normalized }}
        />
      );
    }

    return normalized.split(/\n+/).map((para, i) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      if (trimmed.match(/^[1-9]\.\s+/)) {
        const [num, ...rest] = trimmed.split(/\.\s+/);
        const titleText = rest.join(". ");
        return (
          <div key={i} className="mt-6 mb-3">
            <h3 className="text-base font-bold text-primary leading-snug">
              {num}. {titleText}
            </h3>
          </div>
        );
      }

      if (
        trimmed.length < 100 &&
        (trimmed.startsWith("Why ") ||
          trimmed.endsWith("Traction") ||
          trimmed.includes("Introduction") ||
          trimmed.includes("Are Gaining"))
      ) {
        return (
          <h2 key={i} className="text-xl font-bold text-primary mt-8 mb-4">
            {trimmed}
          </h2>
        );
      }

      return (
        <p
          key={i}
          className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 break-words w-full"
        >
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-6">
      {/* Left Column: Post Body */}
      <div className="lg:col-span-8 min-w-0 space-y-8">
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative overflow-hidden border border-slate-100 rounded-none">
              <Image
                src={
                  blogdetail.authorAvatar ||
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                }
                alt={blogdetail.author || "Alex Reed"}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-primary font-extrabold select-text">
              By {blogdetail.author || "Alex Reed"}
            </span>
          </div>

          <span className="flex items-center gap-1.5 select-text">
            <Calendar className="w-4 h-4 text-primary-light" />
            {blogdetail.date || "January 2025"}
          </span>

          <span className="flex items-center gap-1.5 select-text">
            <Clock className="w-4 h-4 text-primary-light" />
            {blogdetail.readTime || "5 Min Read"}
          </span>
        </div>

        {/* Content Render */}
        <div className="blog-body select-text">
          {blogdetail.paragraphs
            ? blogdetail.paragraphs.map((para, index) => {
                const trimmed = para.trim();
                if (trimmed.startsWith("Introduction")) {
                  return (
                    <div key={index} className="mb-6">
                      <h2 className="text-xl font-bold text-primary mb-3">
                        Introduction
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {trimmed.replace("Introduction", "").trim()}
                      </p>
                    </div>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6"
                  >
                    {para}
                  </p>
                );
              })
            : renderContent(blogdetail.content)}
        </div>

        {/* Secondary Section */}
        {blogdetail.secondaryHeading && (
          <div className="border-t border-slate-100 pt-8 mt-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              {blogdetail.secondaryHeading}
            </h2>
            {blogdetail.secondaryParagraph && (
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {blogdetail.secondaryParagraph}
              </p>
            )}
            {blogdetail.secondaryImage && (
              <div className="relative w-full h-[220px] sm:h-[340px] rounded-none overflow-hidden mt-6">
                <Image
                  src={getImgSrc(blogdetail.secondaryImage)}
                  alt="Secondary illustration"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Column: Sidebar */}
      <div className="lg:col-span-4 space-y-10">
        {/* Latest Posts */}
        {sidebarLatest.length > 0 && (
          <div className="bg-slate-50 p-6 rounded-none border border-slate-100">
            <h3 className="text-sm font-extrabold text-primary uppercase tracking-wider mb-5 pb-2 border-b border-slate-200/60">
              Latest Articles
            </h3>
            <div className="space-y-4">
              {sidebarLatest.map((item, index) => {
                const itemImg = item.coverImage || item.image || item.imageUrl;
                return (
                  <Link
                    key={index}
                    href={`/blog/${item.slug}`}
                    className="flex items-center gap-3.5 group pb-3 border-b border-slate-200/30 last:border-0 last:pb-0"
                  >
                    <div className="w-16 h-16 relative rounded-none overflow-hidden flex-shrink-0 border border-slate-200/50 bg-white">
                      <Image
                        src={getImgSrc(itemImg)}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-500 filter grayscale-[15%] group-hover:grayscale-0"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-bold text-primary leading-snug group-hover:text-primary-light-hover transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                        {item.date}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Categories */}
        {displayCategories.length > 0 && (
          <div className="bg-slate-50 p-6 rounded-none border border-slate-100">
            <h3 className="text-sm font-extrabold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-slate-200/60">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {displayCategories.map((category, index) => (
                <Link
                  key={index}
                  href="/blog"
                  className="px-3.5 py-1.5 rounded-none text-xs font-bold border border-slate-200/80 text-slate-600 hover:border-primary hover:text-primary transition-all bg-white hover:bg-slate-50 uppercase tracking-wide"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Popular Tags */}
        {displayTags.length > 0 && (
          <div className="bg-slate-50 p-6 rounded-none border border-slate-100">
            <h3 className="text-sm font-extrabold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-slate-200/60">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {displayTags.map((tag) => (
                <Link
                  key={tag}
                  href="/blog"
                  className="px-3 py-1.5 rounded-none text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-500 hover:border-primary hover:text-primary transition-all"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Social Media Sharing */}
        <div className="bg-slate-50 p-6 rounded-none border border-slate-100">
          <h3 className="text-sm font-extrabold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-slate-200/60">
            Share This Article
          </h3>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 flex items-center justify-center rounded-none border border-slate-200 bg-white text-slate-600 hover:text-primary-light hover:border-primary-light transition-all hover:scale-105"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
