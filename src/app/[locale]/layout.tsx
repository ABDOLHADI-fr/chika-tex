import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });

  return {
    metadataBase: new URL(process.env.SITE_URL || "https://chikatex.dz"),
    title: {
      default: "CHIKA TEX - Fournitures de Couture à Oran",
      template: "%s | CHIKA TEX",
    },
    description: t("description"),
    keywords: [
      "couture",
      "fournitures couture",
      "machine à coudre",
      "tissus",
      "Oran",
      "Algérie",
      "chika tex",
      "لوازم الخياطة",
      "وهران",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "CHIKA TEX - Fournitures de Couture à Oran",
      description: t("description"),
      locale: locale === "ar" ? "ar_DZ" : "fr_DZ",
      type: "website",
      siteName: "CHIKA TEX",
      images: [{ url: "/images/logo.svg", width: 180, height: 48, alt: "CHIKA TEX" }],
    },
    alternates: {
      canonical: "/",
      languages: {
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "ar")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/images/logo-icon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
