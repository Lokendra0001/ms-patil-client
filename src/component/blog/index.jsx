"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock } from "lucide-react";
import { blog } from "@/data/blog";
import { useGetBlogs } from "@/hooks/blog";
import Hero from "@/component/common/hero/Hero";
import ContentContainer from "@/component/common/ContentContainer";
import Button from "@/component/CTA/Button";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const { data, isPending } = useGetBlogs();
  const displayBlogs = data?.blogs?.length > 0 ? data.blogs : blog;

  // Helper functions
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

  const decodeHTMLEntities = (text) => {
    if (!text) return "";
    return text
      .replace(/&rsquo;/g, "'")
      .replace(/&lsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'")
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&nbsp;/g, " ")
      .replace(/&ndash;/g, "-")
      .replace(/&mdash;/g, "-");
  };

  const getPostDescription = (post) => {
    const rawText = post.description1 || post.description || post.content || "";
    const cleanDesc = decodeHTMLEntities(
      rawText.replace(/<\/?[^>]+(>|$)/g, ""),
    );
    return cleanDesc.length > 140 ? cleanDesc.slice(0, 140) + "..." : cleanDesc;
  };

  // Filtering
  const filteredPosts = displayBlogs.filter((post) => {
    const title = post.title || "";
    const desc = post.description || post.content || "";
    const cat = post.category || "";
    const tags = getPostTags(post);

    return (
      (title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        desc.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedCategory ||
        cat.toLowerCase() === selectedCategory.toLowerCase()) &&
      (selectedTags.length === 0 ||
        selectedTags.some((t) => tags.includes(t.toLowerCase())))
    );
  });

  // Pagination
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
    setCurrentPage(1);
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat === selectedCategory ? "" : cat);
    setCurrentPage(1);
  };

  const displayCategories = Array.from(
    new Set(displayBlogs.map((p) => p.category).filter(Boolean)),
  );
  const displayTags = Array.from(
    new Set(displayBlogs.flatMap((p) => getPostTags(p)).filter(Boolean)),
  );

  const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Blog" }];

  return (
    <div className="w-full bg-white select-text">
      {/* Dynamic Hero Header */}
      <Hero
        tagline="RESOURCES & INSIGHTS"
        title="Our Construction Journal"
        bgImage="/assets/image/common/b1.png"
        breadcrumbs={breadcrumbItems}
      />

      <ContentContainer className="py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Grid List */}
          <div className="lg:col-span-8 space-y-12">
            {isPending ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-slate-200/60 bg-white animate-pulse min-h-[420px] flex flex-col justify-between"
                  >
                    <div className="w-full aspect-[4/3] bg-slate-250"></div>
                    <div className="p-6 space-y-4 flex-grow">
                      <div className="h-3 bg-slate-250 w-1/4"></div>
                      <div className="h-5 bg-slate-250 w-3/4"></div>
                      <div className="h-3 bg-slate-250 w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentPosts.map((post) => (
                  <article
                    key={post.id || post.slug}
                    className="relative overflow-hidden group border border-slate-200/60 rounded-none flex flex-col justify-between bg-white transition-all duration-300 min-h-[440px] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                  >
                    {/* Hover gold bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary-light transition-all duration-300 group-hover:w-full z-20" />

                    {/* Image Box */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 select-text">
                      <Image
                        src={getPostImage(post)}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-primary text-white text-[10px] tracking-wider uppercase font-bold rounded-none">
                          {post.category || "General"}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 flex-grow flex flex-col justify-between relative">
                      <div>
                        {/* Meta info */}
                        <span className="text-[10px] font-black tracking-wider text-primary-light-hover uppercase mb-1 block select-text">
                          {getPostDate(post)}
                        </span>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-primary-light-hover line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-4 line-clamp-3">
                          {getPostDescription(post)}
                        </p>
                      </div>

                      {/* Link Footer */}
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
            ) : (
              <div className="text-center py-16 border border-slate-200 text-slate-400 text-sm font-semibold select-text">
                No blog posts found matching your criteria.
              </div>
            )}

            {/* Pagination */}
            {!isPending && totalPages > 1 && (
              <div className="mt-12 flex justify-start items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({ top: 300, behavior: "smooth" });
                    }}
                    className={`w-10 h-10 transition-all text-xs font-bold rounded-none border border-slate-200 select-text cursor-pointer ${
                      currentPage === i + 1
                        ? "bg-primary text-white border-primary"
                        : "bg-white hover:bg-slate-50 text-slate-600 hover:text-primary"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-10">
            {/* Search Widget */}
            <div className="border border-slate-200/60 p-6 bg-white rounded-none">
              <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                Search Articles
              </h4>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Keywords..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-4 pr-10 py-3 bg-white border border-slate-200 rounded-none focus:outline-none focus:ring-1 focus:ring-primary-light focus:border-primary-light text-xs text-slate-800 transition-all placeholder-slate-400 font-semibold"
                />
                <Search className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Categories Widget */}
            {displayCategories.length > 0 && (
              <div className="border border-slate-200/60 p-6 bg-white rounded-none">
                <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                  Categories
                </h4>
                <div className="space-y-1.5">
                  {displayCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className={`w-full flex items-center justify-between text-left text-xs py-2 px-3 rounded-none font-bold tracking-wider uppercase transition-all select-text cursor-pointer ${
                        selectedCategory.toLowerCase() === cat.toLowerCase()
                          ? "bg-primary text-white"
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                      }`}
                    >
                      <span>{cat}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tags Widget */}
            {displayTags.length > 0 && (
              <div className="border border-slate-200/60 p-6 bg-white rounded-none">
                <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                  Popular Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {displayTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider border rounded-none transition-all select-text cursor-pointer ${
                        selectedTags.includes(tag)
                          ? "bg-primary-light border-primary-light text-white"
                          : "bg-white border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Blogs;
