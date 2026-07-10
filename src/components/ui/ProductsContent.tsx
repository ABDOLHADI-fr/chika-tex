"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import ProductGrid from "./ProductGrid";
import SearchBar from "./SearchBar";

interface ProductsContentProps {
  products: Product[];
  categories: string[];
  locale: string;
  activeCategory: string;
}

export default function ProductsContent({
  products,
  categories,
  locale,
  activeCategory: initialCategory,
}: ProductsContentProps) {
  const t = useTranslations("products");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "Tous") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.brand && p.brand.toLowerCase().includes(q)) ||
          (p.material && p.material.toLowerCase().includes(q))
      );
    }

    return result;
  }, [products, activeCategory, searchQuery]);

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />

      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {searchQuery
              ? t("no_search_results")
              : t("no_products")}
          </p>
        </div>
      ) : (
        <ProductGrid products={filtered} locale={locale} />
      )}
    </>
  );
}
