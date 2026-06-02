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

export const META = {
  HOME: {
    title: "M/S Patil Associates | Premium Construction & Engineering Services",
    description: "M/S Patil Associates (Ms Patil Construction) specializes in delivering high-quality residential, commercial, and industrial construction projects with precision and innovation.",
  },
  ABOUT: {
    title: "About Us | M/S Patil Associates",
    description: "Meet the team of quality and innovation architects at M/S Patil Associates. We deliver robust construction services backed by safety and excellence.",
  },
  PROJECT: {
    title: "Our Construction Projects | M/S Patil Associates",
    description: "Explore our portfolio of completed and ongoing residential, commercial, and industrial construction projects showcasing engineering excellence.",
  },
  SERVICE: {
    title: "Construction & Engineering Services | M/S Patil Associates",
    description: "M/S Patil Associates offers comprehensive construction, project management, and structural engineering services tailored to your vision.",
  },
  BLOG: {
    title: "Construction Blog & Industry Insights | M/S Patil Associates",
    description: "Stay updated with the latest construction trends, project highlights, and engineering news from M/S Patil Associates.",
  },
  CONTACT: {
    title: "Contact Our Construction Team | M/S Patil Associates",
    description: "Get in touch with M/S Patil Associates to discuss your residential or commercial building project. Reach out today for consultations.",
  },
  PLANT: {
    title: "Machinery, Equipment & Batching Plants | M/S Patil Associates",
    description: "Discover the state-of-the-art machinery, batching plants, and equipment inventory enabling precision engineering at M/S Patil Associates.",
  },
};
