import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    .replace(/&rsquo;|rsquo;/g, "'")
    .replace(/&lsquo;|lsquo;/g, "'")
    .replace(/&ldquo;|ldquo;/g, '"')
    .replace(/&rdquo;|rdquo;/g, '"')
    .replace(/&#39;|#39;/g, "'")
    .replace(/&#x27;|#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;|quot;/g, '"')
    .replace(/&amp;|amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;|ndash;/g, "-")
    .replace(/&mdash;|mdash;/g, "-");
};

const getPostDescription = (post) => {
  const rawText = post.description1 || post.description || post.content || "";
  const cleanDesc = decodeHTMLEntities(rawText.replace(/<\/?[^>]+(>|$)/g, ""));
  return cleanDesc.length > 140 ? cleanDesc.slice(0, 140) + "..." : cleanDesc;
};

const BlogCard = ({ post }) => {
  return (
    <article
      key={post.id || post.slug}
      className="relative overflow-hidden group border border-slate-200/60 rounded-none flex flex-col justify-between bg-white transition-all duration-300 min-h-[440px] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
    >
      {/* Hover gold bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary-light transition-all duration-300 group-hover:w-full z-20" />

      {/* Image Box */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 select-text">
        <Image
          src={post.coverImage || "/placeholder.webp"}
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
  );
};

export default BlogCard;
