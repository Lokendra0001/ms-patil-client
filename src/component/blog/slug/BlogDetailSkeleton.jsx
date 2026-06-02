import React from "react";

const BlogDetailSkeleton = () => {
  return (
    <div className="max-w-[1280px] px-4 sm:px-6 mx-auto lg:px-8 py-10 sm:py-14 animate-pulse">
      {/* Meta Row: Category • Date placeholder */}
      <div className="h-4 bg-gray-200 rounded w-1/6 mb-4"></div>

      {/* Title & Author Info placeholder */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div className="h-10 bg-gray-200 rounded w-3/4"></div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-16"></div>
            <div className="h-3 bg-gray-200 rounded w-12"></div>
          </div>
        </div>
      </div>

      {/* Cover Image placeholder */}
      <div className="w-full h-[450px] bg-gray-200 rounded-2xl mb-10"></div>

      {/* Main Two-Column Layout placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Column: Post Body placeholder */}
        <div className="lg:col-span-8 space-y-6">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-11/12"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Right Column: Sidebar placeholder */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
              <div className="space-y-2 flex-1">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
              <div className="space-y-2 flex-1">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailSkeleton;
