import { apiWrapper } from "./apiWrapper.js";
import { POSTS_PER_PAGE } from "@/constants";

export async function getPosts(page = 1, limit = POSTS_PER_PAGE) {
  const offset = (page - 1) * limit;
  const data = await apiWrapper.get(`/articles?limit=${limit}&offset=${offset}`);
  return {
    blogs: data.results,
    total_blogs: data.count,
  };
}

export async function getPostById(id) {
  return apiWrapper.get(`/articles/${id}`);
}