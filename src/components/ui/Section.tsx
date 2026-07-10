"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "dark" | "red";
}

const bgClasses: Record<string, string> = {
  white: "bg-white",
  gray: "bg-gray-50",
  dark: "bg-gray-900 text-white",
  red: "bg-red-600 text-white",
};

export default function Section({
  children,
  title,
  subtitle,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${background === "dark" || background === "red" ? "text-white/80" : "text-gray-600"}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
