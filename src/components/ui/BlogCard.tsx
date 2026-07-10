"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  locale: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  image,
  locale,
}: BlogCardProps) {
  return (
    <Link
      href={`/${locale}/blog/${slug}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 flex flex-col"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <time className="text-sm text-gray-500 mb-2">
          {formatDate(date, locale)}
        </time>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <span className="mt-4 text-red-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
          Lire la suite
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
