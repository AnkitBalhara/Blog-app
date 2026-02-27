import Link from "next/link";
import Image from "next/image";
import { getPostById } from "@/api/api";
import { formatDate } from "@/utils/formatDate";

export default async function BlogDetailPage({ params }) {
  // Extract just the numeric ID from slug like "1-defense-the-travel"
  const id = params.blogId.split("-")[0];
  const post = await getPostById(id);


const formattedDate = formatDate(post.created_at);
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-amber-600 transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to all posts
      </Link>

      <div className="flex items-center gap-3 mb-5">
        <span className="bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">
          {post.category}
        </span>
        <span className="text-stone-400 text-sm">{formattedDate}</span>
      </div>

      <h1 className="text-4xl font-bold text-stone-900 leading-tight mb-6">
        {post.title}
      </h1>

      <p className="text-xl text-stone-500 leading-relaxed mb-10 font-light italic">
        {post.description}
      </p>

      {post.photo_url && (
        <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.photo_url}
            alt={post.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="flex items-center gap-4 mb-10">
        <div className="h-px bg-stone-200 flex-1" />
        <span className="text-stone-300 text-lg">✦</span>
        <div className="h-px bg-stone-200 flex-1" />
      </div>

      <article
        className="prose prose-stone prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-stone-900
          prose-p:text-stone-700 prose-p:leading-relaxed
          prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: post.content_html }}
      />
    </div>
  );
}