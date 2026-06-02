import { createBlog, getAllBlogs } from "@/api/blog";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateBlog = () => {
  return useMutation({
    mutationFn: createBlog,
  });
};

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["all-blogs"],
    queryFn: getAllBlogs,
  });
};
