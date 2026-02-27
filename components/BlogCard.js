import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { slugify } from "@/utils/slugify";

export default function BlogCard({ post, priority = false }) {
  // console.log("post", post);
  const formattedDate = formatDate(post.published_at);

  return (
    <Link href={`/blog/${post.id}-${slugify(post.title)}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
        <div className="relative w-full h-52 overflow-hidden">
          {post.image_url ? (
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-stone-100 flex items-center justify-center">
              <span className="text-stone-300 text-4xl">✦</span>
            </div>
          )}

          {post.news_site && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full">
              {post.news_site}
            </span>
          )}
        </div>

        <div className="p-6">
          <p className="text-xs text-stone-400 mb-3">{formattedDate}</p>
          <h2 className="text-lg font-bold text-stone-900 leading-snug mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
            {post.summary}
          </p>

          <div className="mt-5 flex items-center gap-1.5 text-amber-600 text-sm font-medium">
            Read more
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}