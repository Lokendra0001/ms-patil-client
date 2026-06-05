export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
export const API = {
  BLOG: {
    CREATE_BLOG: `${BASE_URL}admin/blog/create-blog`,
    GET_ALL_BLOGS: `${BASE_URL}admin/blog/all-blogs`,
    GET_BLOG_BY_ID: `${BASE_URL}admin/blog/`,
    DELETE_BLOG: `${BASE_URL}admin/blog/delete-blog`,
  },
  PROJECT: {
    CREATE_PROJECT: `${BASE_URL}admin/project/create-project`,
    GET_ALL_PROJECTS: `${BASE_URL}admin/project/all-projects`,
    GET_PROJECT_BY_SLUG: `${BASE_URL}admin/project/`,
    DELETE_PROJECT: `${BASE_URL}admin/project/delete-project`,
  },
};

export const CONTACT_INFO = {
  phone: "+91 9420857717",
  fallback_phone: "+91 9422366937",
  email: "chetankumarsuryawanshi5599@gmail.com",
};

export const META = {
  HOME: {
    title: "M/S Chetankumar Bhagwan Suryawanshi | Ms Patil Construction",
    description:
      "M/S Chetankumar Bhagwan Suryawanshi (formerly Ms Patil Construction) is a premier PWD Class IV Government Contractor based in Dhule, Maharashtra, delivering highway, industrial, and civil construction services.",
  },
  ABOUT: {
    title: "About Us | M/S Chetankumar Bhagwan Suryawanshi | Ms Patil Construction",
    description:
      "Learn more about M/S Chetankumar Bhagwan Suryawanshi (Ms Patil Construction). We are a leading civil infrastructure and government contractor with 20+ years of trust.",
  },
  PROJECT: {
    title: "Our Construction Projects | M/S Chetankumar Bhagwan Suryawanshi",
    description:
      "Explore our portfolio of industrial structures, PWD highway bypass corridors, railway operations, and institutional constructions executed by M/S Chetankumar Bhagwan Suryawanshi.",
  },
  SERVICE: {
    title: "Civil Engineering & Construction Services | M/S Chetankumar Bhagwan Suryawanshi",
    description:
      "Comprehensive construction and engineering services including industrial structures, highway corridors, railway operations, and urban municipal utility services.",
  },
  BLOG: {
    title: "Construction Insights & Articles | M/S Chetankumar Bhagwan Suryawanshi",
    description:
      "Stay updated with the latest construction trends, industry insights, and engineering updates from M/S Chetankumar Bhagwan Suryawanshi (Ms Patil Construction).",
  },
  CONTACT: {
    title: "Contact Us | M/S Chetankumar Bhagwan Suryawanshi",
    description:
      "Get in touch with our corporate office or project division. Let's discuss your next industrial, civil infrastructure, or road construction project.",
  },
  PLANT: {
    title: "Machinery, Equipment & Batching Plants | M/S Chetankumar Bhagwan Suryawanshi",
    description:
      "Discover our state-of-the-art machinery, batching plants, and equipment inventory enabling precision engineering at M/S Chetankumar Bhagwan Suryawanshi.",
  },
};

