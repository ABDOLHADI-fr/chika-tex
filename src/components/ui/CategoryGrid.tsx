"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const CATEGORY_ICONS: Record<string, string> = {
  "Machines à coudre": "🧵",
  "Tissus": "🫧",
  "Fils": "🧶",
  "Fils à crochet": "🧶",
  "Fils à broder": "🧵",
  "Aiguilles": "📌",
  "Aiguilles à crochet": "🪡",
  "Broderie": "🪡",
  "Sefifa & Passementerie": "✨",
  "Crochet": "🪢",
  "Ciseaux & Outils": "✂️",
  "Boutons & Fermetures": "🔘",
  "Rubans & Dentelles": "🎀",
  "Accessoires": "🛍️",
  "Patrons": "📐",
};

interface Category {
  name: string;
  count: number;
}

interface CategoryGridProps {
  categories: Category[];
  locale: string;
}

export default function CategoryGrid({ categories, locale }: CategoryGridProps) {
  const t = useTranslations("home.categories");

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {categories.map((cat) => {
        const icon = CATEGORY_ICONS[cat.name] || "📦";
        return (
          <Link
            key={cat.name}
            href={`/${locale}/produits?cat=${encodeURIComponent(cat.name)}`}
            className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300"
          >
            <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
            <span className="text-sm font-semibold text-gray-800 text-center leading-tight">
              {cat.name}
            </span>
            <span className="text-xs text-gray-400 mt-1">
              {cat.count} produit{cat.count > 1 ? "s" : ""}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
