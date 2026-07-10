import { getTranslations } from "next-intl/server";
import Section from "@/components/ui/Section";
import ProductsContent from "@/components/ui/ProductsContent";
import { products, categories } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ cat?: string }>;
}) {
  const { locale } = await params;
  const { cat } = await searchParams;
  const t = await getTranslations({ locale, namespace: "products" });

  const activeCategory = cat || "Tous";

  return (
    <Section title={t("title")} subtitle={t("subtitle")}>
      <ProductsContent
        products={products}
        categories={categories}
        locale={locale}
        activeCategory={activeCategory}
      />
    </Section>
  );
}
