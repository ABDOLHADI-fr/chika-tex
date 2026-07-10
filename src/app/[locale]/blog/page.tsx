import { getTranslations } from "next-intl/server";
import Section from "@/components/ui/Section";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const posts = blogPosts.filter((p) => p.locale === locale);

  return (
    <Section title={t("title")} subtitle={t("subtitle")}>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 py-12">{t("no_articles")}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              locale={locale}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
