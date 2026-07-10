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
    id: "1",
    name: "Fatima Zohra",
    text: "Superbe magasin! J'ai acheté une machine à coudre Singer et elle fonctionne parfaitement. Le vendeur était très compétent et m'a bien conseillée. Livraison rapide à Alger.",
    rating: 5,
    date: "2026-06-15",
    verified: true,
  },
  {
    id: "2",
    name: "Mohamed Amine",
    text: "Très bon rapport qualité-prix. Les tissus sont de qualité et les prix sont raisonnables. Je recommande vivement CHIKA TEX pour tous vos projets couture.",
    rating: 5,
    date: "2026-06-10",
    verified: true,
  },
  {
    id: "3",
    name: "Sarah B.",
    text: "J'ai trouvé exactement ce que je cherchais. Leur sélection de fils et d'aiguilles est impressionnante. Le service client est excellent!",
    rating: 4,
    date: "2026-05-28",
    verified: true,
  },
  {
    id: "4",
    name: "Karim D.",
    text: "Magasin bien achalandé avec tout le nécessaire pour la couture. Les prix sont compétitifs et la qualité est au rendez-vous. Le personnel est sympathique et serviable.",
    rating: 5,
    date: "2026-05-20",
    verified: true,
  },
  {
    id: "5",
    name: "Nadia K.",
    text: "Je suis cliente fidèle depuis l'ouverture. Ils ont toujours les dernières nouveautés. La commande via WhatsApp est très pratique et la livraison rapide.",
    rating: 5,
    date: "2026-05-12",
    verified: true,
  },
  {
    id: "6",
    name: "Ahmed R.",
    text: "Très satisfait de mon achat. Le patron de robe que j'ai commandé était exactement comme décrit. Je recommande à tous les passionnés de couture.",
    rating: 4,
    date: "2026-05-05",
    verified: true,
  },
];
