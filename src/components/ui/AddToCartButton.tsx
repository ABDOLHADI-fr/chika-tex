"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.id === product.id);

  return (
    <button
      onClick={() =>
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
      className={`w-full mt-2 py-2 rounded-lg text-sm font-bold transition-colors ${
        inCart
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-red-600 text-white hover:bg-red-700"
      }`}
    >
      {inCart ? "✓ في السلة" : "أضف إلى السلة"}
    </button>
  );
}
