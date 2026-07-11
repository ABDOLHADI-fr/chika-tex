import { getTranslations } from "next-intl/server";
import Section from "@/components/ui/Section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <>
      <Section title={t("title")} subtitle={t("subtitle")}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("story_title")}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right" dir="rtl">
              انطلقت مسيرة &quot;شيكا تكس&quot; برؤية واضحة وهدف محدد: إثراء عالم الخياطة والتفصيل في الجزائر عبر توفير مستلزمات الخياطة عالية الجودة بأسعار تنافسية تناسب الجميع. من قلب عاصمة الغرب وهران، وتحديداً من حي قرقينطة العريق، نجحنا في كسب ثقة محترفي وهواة الخياطة لنصبح وجهتهم الأولى والملهمة.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-right" dir="rtl">
              نحن لا نوفر مجرد أدوات، بل نقدم حلولاً متكاملة للإبداع؛ يضم فريقنا خبراء شغوفين يدركون تماماً تطلعاتكم، ومستعدون دائماً لتقديم التوجيه والنصح لضمان نجاح كل مشروع وتصميم.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("info_title")}
              </h3>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Adresse</p>
                  <p className="text-gray-600">{t("address")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <a href="tel:+213671770903" className="text-gray-600 hover:text-red-600">
                    {t("phone")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:contact@chikatex.dz" className="text-gray-600 hover:text-red-600">
                    {t("email")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">
                    {t("hours_title")}
                  </p>
                  <p className="text-gray-600 whitespace-pre-line">{t("hours")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("map_title")}
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34019.123!2d-0.6486875!3d35.6991875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e89007edb5eff%3A0xfffe9a115966a43f!2sChika+tex!5e0!3m2!1sfr!2sdz!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CHIKA TEX - حي قرقينطة وهران"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
