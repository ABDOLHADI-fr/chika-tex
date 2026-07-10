import { getTranslations } from "next-intl/server";
import Section from "@/components/ui/Section";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reviews" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reviews" });

  return (
    <Section title={t("title")} subtitle={t("subtitle")}>
      {testimonials.length === 0 ? (
        <p className="text-center text-gray-500 py-12">{t("no_reviews")}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              verified={testimonial.verified}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
