import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Section from "@/components/ui/Section";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
    locale: post.locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return { title: "Article non trouvé" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post).slice(0, 3);

  return (
    <>
      <Section background="white">
        <div className="mb-6">
          <Link
            href={`/${locale}/blog`}
            className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("back")}
          </Link>
        </div>

        <article className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-red-100 text-red-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>
                {t("by")} {post.author}
              </span>
              <span>{t("on")} {formatDate(post.date, locale)}</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="prose prose-gray max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <a
              href={`https://wa.me/213671770903?text=${encodeURIComponent(`Bonjour! J'ai lu l'article "${post.title}" et j'aimerais en savoir plus.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("share")}
            </a>
          </div>
        </article>
      </Section>

      {related.length > 0 && (
        <Section title={t("related")} background="gray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rp) => (
              <BlogCard
                key={rp.slug}
                slug={rp.slug}
                title={rp.title}
                excerpt={rp.excerpt}
                date={rp.date}
                image={rp.image}
                locale={locale}
              />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
