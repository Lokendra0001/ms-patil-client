"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { blog } from "@/data/blog";
import ContentContainer from "@/component/common/ContentContainer";
import BlogCard from "./BlogCard";

const BlogsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Filtering
  const filteredPosts = blog.filter((post) => {
    const title = post.title || "";
    const desc = post.description || post.content || "";
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <ContentContainer className="py-20 lg:py-24">
      {/* Search Header Area */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative">
          <input
            type="search"
            placeholder="Search articles here..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-5 pr-12 py-4 bg-white-background  border border-slate-200 rounded-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm text-text-primary transition-all placeholder-slate-400 font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          />
          <Search className="absolute right-4.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-12">
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <BlogCard key={post.id || post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-slate-200 text-slate-400 text-sm font-semibold select-text">
            No blog posts found matching your criteria.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className={`w-10 h-10 transition-all text-xs font-bold rounded-none border select-text cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-primary text-text-white  border-primary"
                    : "bg-white-background  hover:bg-primary text-text-primary hover:text-text-white  border-slate-200 hover:border-primary"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </ContentContainer>
  );
};

export default BlogsList;
