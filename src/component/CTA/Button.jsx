"use client";

import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

// Define button variants using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold transition-all duration-200 select-text",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-text-white  border border-primary hover:bg-transparent hover:text-text-primary font-bold rounded-none",
        hero: "bg-transparent border border-white text-text-white  rounded-none hover:bg-primary hover:text-text-white  hover:border-primary",
        theme:
          "bg-primary text-text-white  border border-primary hover:bg-transparent hover:text-text-primary font-bold rounded-none",
        header:
          "bg-primary text-text-white  font-medium border border-border-primary hover:bg-transparent hover:text-text-primary rounded-none",
        reverse:
          "bg-transparent text-text-primary border border-slate-300 rounded-none hover:bg-primary hover:text-text-white  hover:border-primary",
      },

      disableHoverOnGroup: {
        true: "group-hover:hover:bg-transparent group-hover:hover:text-inherit", // Stops hover effect
        false: "",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-6 py-2 text-sm",
        lg: "px-8 py-3 text-base",

        // header
        hd: "px-4 py-1.5 text-sm",

        // about
        at: "px-4 py-1 text-xs",

        // hero
        hr: "px-6 py-2 text-sm",

        // contact
        ct: "w-full px-6 py-3 text-md",

        // career
        cr: "w-[250px] py-3 text-base",

        // case study
        cs: "w-[245px] py-3 text-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disableHoverOnGroup: false,
    },
  },
);

// Button component supporting both <button> and Next.js <Link> routing
export default function Button({
  variant,
  size,
  className,
  disableHoverOnGroup = false,
  href,
  children,
  ...props
}) {
  const classes = clsx(
    buttonVariants({ variant, size, disableHoverOnGroup }),
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
