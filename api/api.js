import { apiWrapper } from "@/api/apiWrapper";
import { POSTS_PER_PAGE } from "@/constants";

export async function getPosts(page = 1, limit = POSTS_PER_PAGE) {
  const offset = (page - 1) * limit;
  return apiWrapper.get(`/blog-posts?offset=${offset}&limit=${limit}`);
}

export async function getPostById(id) {
  const data = await apiWrapper.get(`/blog-posts/${id}`);
  return data.blog;
}