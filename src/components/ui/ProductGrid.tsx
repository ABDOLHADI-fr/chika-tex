"use client";

import { Product } from "@/data/products";
import Card from "./Card";
import { Link } from "@/i18n/routing";

interface ProductGridProps {
  products: Product[];
  locale: string;
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  locale,
  emptyMessage,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          {emptyMessage || "Aucun produit trouvé."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.name}
          price={product.price}
          badge={product.featured ? "Populaire" : undefined}
          brand={product.brand}
          description={product.description}
          href={`/${locale}/produits/${product.id}`}
        />
      ))}
    </div>
  );
}
