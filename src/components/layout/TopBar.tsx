"use client";

import { useTranslations } from "next-intl";
import SocialLinks from "../ui/SocialLinks";

export default function TopBar() {
  const t = useTranslations("topbar");

  return (
    <div className="bg-gray-900 text-white text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <span className="font-medium">{t("delivery")}</span>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/213671770903"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            {t("whatsapp")}
          </a>
          <SocialLinks size="sm" iconClassName="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
