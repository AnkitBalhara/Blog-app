import { getPosts } from "@/api/api";
import { POSTS_PER_PAGE } from "@/constants";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";

export default async function BlogPage({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getPosts(currentPage, POSTS_PER_PAGE);

  const posts = data.blogs || [];
  const totalPosts = data.total_blogs || 0;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page heading */}
      <div className="mb-14 border-b border-stone-200 pb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-600 font-medium mb-3">
          Our Journal
        </p>
        <h1 className="text-5xl font-bold text-stone-900 leading-tight">
          Latest Stories
        </h1>
      </div>

      {/* Blog grid — max 3 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} priority={index === 0} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}