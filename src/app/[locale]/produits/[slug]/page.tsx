import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProductGrid from "@/components/ui/ProductGrid";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
    locale: product.locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return { title: "Produit non trouvé" };

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "product_detail" });

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product).slice(0, 4);

  return (
    <>
      <Section background="white">
        <div className="mb-6">
          <Link
            href={`/${locale}/produits`}
            className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("back")}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.featured && (
              <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                {t("featured")}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-sm font-medium text-red-600 uppercase tracking-wider">
                {product.category}
              </span>
              {product.brand && (
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                  {product.brand}
                </span>
              )}
              {product.material && (
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                  {product.material}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {product.price !== undefined && (
              <p className="text-3xl font-bold text-red-600 mb-6">
                {formatPrice(product.price)}
              </p>
            )}

            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-700 block mb-2">
                  Couleurs disponibles:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="text-xs bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/213671770903?text=${encodeURIComponent(`Bonjour! Je suis intéressé(e) par le produit: ${product.name}${product.price !== undefined ? ` (${formatPrice(product.price)})` : ""}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("contact_whatsapp")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section title={t("related")} background="gray">
          <ProductGrid products={related} locale={locale} />
        </Section>
      )}
    </>
  );
}
