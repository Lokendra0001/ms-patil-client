import { API } from "@/config/constant";
import axios from "axios";

export const createBlog = async (data) => {
  try {
    const res = await axios.post(API.BLOG.CREATE_BLOG, data, {
      withCredentials: true,
    });
    console.log("API response:", res);
    return res.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

export const getAllBlogs = async () => {
  try {
    const res = await axios.get(API.BLOG.GET_ALL_BLOGS, {
      withCredentials: true,
    });
    console.log("API response:", res);
    return res.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

export const getBlog = async (slug) => {
  try {
    const res = await axios.get(`${API.BLOG.GET_BLOG_BY_ID}${slug}`, {
      withCredentials: true,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error fetching blog details from API:", error);
  }
};

export const deleteBlog = async (id) => {
  try {
    console.log(id);
    const res = await axios.delete(`${API.BLOG.DELETE_BLOG}/${id}`, {
      withCredentials: true,
    });
    console.log("API response:", res);
    return res.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};
