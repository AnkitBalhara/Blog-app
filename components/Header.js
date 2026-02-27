import { SITE_NAME } from "@/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/blog" className="flex items-center gap-2">
          <span className="text-amber-600 text-xl">✦</span>
          <span
            className="font-bold text-lg tracking-tight text-stone-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {SITE_NAME}
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {/* Can add multiple nav links for better UI, But for those features need time. */}
          <Link href="/blog" className="text-sm text-stone-600 hover:text-amber-600 transition-colors">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
}