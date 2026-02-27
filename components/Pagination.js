import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className="flex items-center justify-between px-2">
      
      {/* Left side - rows info */}
      <span className="text-sm text-stone-500">
        Page {currentPage} of {totalPages}
      </span>

      {/* Right side - navigation controls */}
      <div className="flex items-center gap-1">

        {/* First Page */}
        {currentPage > 1 ? (
          <Link
            href="/blog?page=1"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-colors"
            title="First Page"
          >
            «
          </Link>
        ) : (
          <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-100 text-stone-300 cursor-not-allowed">
            «
          </span>
        )}

        {/* Previous Page */}
        {currentPage > 1 ? (
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-colors"
            title="Previous Page"
          >
            ‹
          </Link>
        ) : (
          <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-100 text-stone-300 cursor-not-allowed">
            ‹
          </span>
        )}

        {/* Current page indicator */}
        <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-900 bg-stone-900 text-white text-sm">
          {currentPage}
        </span>

        {/* Next Page */}
        {currentPage < totalPages ? (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-colors"
            title="Next Page"
          >
            ›
          </Link>
        ) : (
          <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-100 text-stone-300 cursor-not-allowed">
            ›
          </span>
        )}

        {/* Last Page */}
        {currentPage < totalPages ? (
          <Link
            href={`/blog?page=${totalPages}`}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-colors"
            title="Last Page"
          >
            »
          </Link>
        ) : (
          <span className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-100 text-stone-300 cursor-not-allowed">
            »
          </span>
        )}

      </div>
    </div>
  );
}