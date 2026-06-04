import React from "react";
import {
  FiBriefcase,
  FiGrid,
  FiDroplet,
  FiZap,
  FiGlobe,
  FiHexagon,
  FiActivity,
  FiPlusSquare,
} from "react-icons/fi";

export const clientLogos = [
  {
    name: "PWD MAHARASHTRA",
    icon: <FiBriefcase className="w-5 h-5 text-primary" />,
  },
  {
    name: "HEIGL INFRA LTD",
    icon: <FiGrid className="w-5 h-5 text-primary" />,
  },
  {
    name: "MJP INDIA",
    icon: <FiDroplet className="w-5 h-5 text-primary" />,
  },
  {
    name: "MSEDCL",
    icon: <FiZap className="w-5 h-5 text-primary" />,
  },
  {
    name: "GODREJ AGROVET",
    icon: <FiGlobe className="w-5 h-5 text-primary" />,
  },
  {
    name: "RM CHEMICAL",
    icon: <FiHexagon className="w-5 h-5 text-primary" />,
  },
  {
    name: "INDO AMINES LTD",
    icon: <FiActivity className="w-5 h-5 text-primary" />,
  },
  {
    name: "HSCC LIMITED",
    icon: <FiPlusSquare className="w-5 h-5 text-primary" />,
  },
];

export const statsList = [
  {
    target: 20,
    prefix: "",
    suffix: "+",
    label: "Years of Experience",
  },
  {
    target: 11,
    prefix: "₹ ",
    suffix: " Cr",
    label: "Annual Turnover",
  },
  {
    target: 30,
    prefix: "",
    suffix: "+",
    label: "Projects Completed",
  },
  {
    target: 5,
    prefix: "",
    suffix: "",
    label: "States Presence",
  },
];
