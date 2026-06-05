"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { renderMarkdownContent } from "./markdownHelper";

const BlogDetails = ({ blogdetail }) => {
  return (
    <div className="py-6 space-y-8">
      {/* Blog Title */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary leading-tight select-text">
        {blogdetail.title}
      </h1>

      {/* Meta Bar */}
      <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          {/* Custom Construction Building Logo Avatar */}
          <div className="w-8 h-8 bg-slate-50 border border-border-secondary flex items-center justify-center text-primary">
            <User className="w-4 h-4" />
          </div>
          <span className="text-text-gray font-extrabold select-text">
            By {blogdetail.author || "Ms Patil Construction"}
          </span>
        </div>

        <span className="flex items-center gap-1.5 select-text">
          <Calendar className="w-4 h-4 text-primary" />
          {blogdetail.date || "January 2025"}
        </span>

        <span className="flex items-center gap-1.5 select-text">
          <Clock className="w-4 h-4 text-primary" />
          {blogdetail.readTime || "5 Min Read"}
        </span>
      </div>

      {/* Cover Image */}
      {blogdetail.coverImage && (
        <div className="relative w-full h-[300px] sm:h-[600px] overflow-hidden my-8">
          <Image
            src={blogdetail.coverImage}
            alt={blogdetail.title || "Blog cover image"}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* Short Description */}
      {blogdetail.shortDescription && (
        <div className="p-6 bg-slate-50 border-l-4 border-primary text-primary-hover text-base sm:text-lg italic leading-relaxed my-6 font-medium">
          {blogdetail.shortDescription}
        </div>
      )}

      {/* Content Render */}
      <div className="blog-body select-text">
        {renderMarkdownContent(blogdetail.content)}
      </div>

      {/* Spacing Styles Tag to fix Tailwind margin reset inside dangerouslySetInnerHTML */}
      <style>{`
        .blog-body p {
          margin-bottom: 1.5rem !important;
          line-height: 1.75 !important;
          color: #475569 !important;
        }
        .blog-body h2 {
          font-size: 1.05rem !important;
          font-weight: 500 !important;
          color: #1a1a1a !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
          line-height: 1.4 !important;
        }
        .blog-body h3 {
          font-size: 0.8rem !important;
          font-weight: 700 !important;
          color: #1a1a1a !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.75rem !important;
          line-height: 1.4 !important;
        }
        .blog-body ul {
          margin-bottom: 1.5rem !important;
          padding-left: 1.5rem !important;
          list-style-type: disc !important;
        }
        .blog-body ol {
          margin-bottom: 1.5rem !important;
          padding-left: 1.5rem !important;
          list-style-type: decimal !important;
        }
        .blog-body li {
          margin-bottom: 0.5rem !important;
          line-height: 1.75 !important;
          font-size: 0.9rem !important;

        }
        .blog-body img {
          margin-top: 2.5rem !important;
          margin-bottom: 2.5rem !important;
          display: block !important;
          max-width: 100% !important;
          height: auto !important;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;
