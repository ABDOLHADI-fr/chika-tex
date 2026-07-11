export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "2",
    name: "محمد أمين",
    text: "جودة ممتازة مقابل السعر. الأقمشة عالية الجودة والأسعار معقولة. أنصح الجميع بزيارة شيكا تكس لمشاريع الخياطة.",
    rating: 5,
    date: "2026-06-10",
    verified: true,
  },
  {
    id: "3",
    name: "سارة ب.",
    text: "وجدت بالضبط ما كنت أبحث عنه. تشكيلة الخيوط والإبر رائعة. خدمة العملاء ممتازة!",
    rating: 4,
    date: "2026-05-28",
    verified: true,
  },
  {
    id: "4",
    name: "كريم د.",
    text: "متجر متكامل يحتوي على كل مستلزمات الخياطة. الأسعار تنافسية والجودة في الموعد. الموظفون ودودون ومتعاونون.",
    rating: 5,
    date: "2026-05-20",
    verified: true,
  },
  {
    id: "5",
    name: "نادية ك.",
    text: "أنا زبونة وفية منذ الافتتاح. دائماً عندهم أحدث المنتجات. الطلب عبر واتساب مريح جداً والتوصيل سريع.",
    rating: 5,
    date: "2026-05-12",
    verified: true,
  },
  {
    id: "6",
    name: "أحمد ر.",
    text: "راضٍ جداً عن مشترياتي. الباترون الذي طلبته كان مطابقاً تماماً للوصف. أنصح به لكل عشاق الخياطة.",
    rating: 4,
    date: "2026-05-05",
    verified: true,
  },
];
