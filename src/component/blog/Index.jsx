import React from "react";
import Hero from "@/component/common/hero/Hero";
import BlogsList from "./BlogsList";

const Blogs = () => {
  const breadcrumbItems = [{ name: "Home", href: "/" }, { name: "Blog" }];

  return (
    <>
      <Hero
        tagline="RESOURCES & INSIGHTS"
        title="Our Construction Journal"
        bgImage="/assets/image/common/b1.webp"
        breadcrumbs={breadcrumbItems}
      />

      <BlogsList />
    </>
  );
};

export default Blogs;
