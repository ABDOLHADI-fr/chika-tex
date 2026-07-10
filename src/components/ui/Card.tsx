"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import Button from "./Button";

interface CardProps {
  image: string;
  title: string;
  price?: number;
  badge?: string;
  brand?: string;
  description?: string;
  href?: string;
  onAction?: () => void;
  actionLabel?: string;
  children?: ReactNode;
}

export default function Card({
  image,
  title,
  price,
  badge,
  brand,
  description,
  href,
  onAction,
  actionLabel,
  children,
}: CardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {badge && (
          <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        {brand && (
          <span className="text-xs text-red-600 font-medium mb-1">
            {brand}
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        {price !== undefined && (
          <p className="text-xl font-bold text-red-600 mb-4">
            {formatPrice(price)}
          </p>
        )}
        {children}
        <div className="mt-auto">
          {href && (
            <Button variant="outline" size="sm" href={href}>
              Voir le produit
            </Button>
          )}
          {onAction && actionLabel && (
            <Button variant="primary" size="sm" onClick={onAction}>
              {actionLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
