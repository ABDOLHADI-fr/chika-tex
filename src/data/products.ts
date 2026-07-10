export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  images?: string[];
  category: string;
  featured: boolean;
  locale: "fr" | "ar";
  brand?: string;
  material?: string;
  colors?: string[];
}

export const products: Product[] = [
  // ═══════════════════════════════════════════
  // MACHINES À COUDRE
  // ═══════════════════════════════════════════
  {
    id: "machine-coudre-singer",
    name: "Machine à Coudre Singer Tradition 2282",
    description:
      "Machine à coudre mécanique avec 23 points intégrés, enfileur d'aiguille automatique et plateau de travail. Idéale pour les débutants et les experts.",
    image: "/images/products/",
    category: "Machines à coudre",
    featured: true,
    locale: "fr",
    brand: "Singer",
  },
  {
    id: "machine-coudre-brother",
    name: "Machine à Coudre Électronique Brother",
    description:
      "Machine électronique avec 80 points de couture et motifs de broderie. Écran LCD, enfilage automatique et boutonnière en une étape.",
    image: "/images/products/",
    category: "Machines à coudre",
    featured: true,
    locale: "fr",
    brand: "Brother",
  },
  {
    id: "machine-coudre-janome",
    name: "Machine à Coudre Janome 2050",
    description:
      "Machine mécanique robuste avec 15 points de couture, navette rotative et enfile-aiguille. Parfaite pour un usage quotidien.",
    image: "/images/products/",
    category: "Machines à coudre",
    featured: false,
    locale: "fr",
    brand: "Janome",
  },
  {
    id: "machine-coudre-surjeteuse",
    name: "Surjeteuse Professionnelle 4 Fils",
    description:
      "Surjeteuse professionnelle pour finitions parfaites. Vitesse de 1300 points/min, coupe-fil et enfilage facilité.",
    image: "/images/products/",
    category: "Machines à coudre",
    featured: false,
    locale: "fr",
  },
  {
    id: "machine-coudre-tsuba",
    name: "Machine à Coudre Tsuba TS-880",
    description:
      "Machine à coudre mécanique polyvalente avec 22 points. Idéale pour la confection traditionnelle algérienne.",
    image: "/images/products/",
    category: "Machines à coudre",
    featured: false,
    locale: "fr",
    brand: "Tsuba",
  },

  // ═══════════════════════════════════════════
  // TISSUS
  // ═══════════════════════════════════════════
  {
    id: "tissu-coton-imprime",
    name: "Tissu Coton Imprimé (par mètre)",
    description:
      "Tissu en coton 100% de haute qualité. Idéal pour la confection de vêtements légers, chemises et robes. Large choix de motifs.",
    image: "/images/products/",
    category: "Tissus",
    featured: true,
    locale: "fr",
    material: "Coton 100%",
  },
  {
    id: "tissu-denim",
    name: "Tissu Jean/Denim (par mètre)",
    description:
      "Tissu denim épais de haute qualité. Idéal pour la confection de jeans, vestes et sacs. Plusieurs teintes disponibles.",
    image: "/images/products/",
    category: "Tissus",
    featured: false,
    locale: "fr",
    material: "Denim",
  },
  {
    id: "tissu-soie",
    name: "Tissu Satin de Soie (par mètre)",
    description:
      "Satin luxueux au toucher soyeux. Parfait pour les robes de cérémonie, caftans et tenues traditionnelles algériennes.",
    image: "/images/products/",
    category: "Tissus",
    featured: true,
    locale: "fr",
    material: "Soie",
  },
  {
    id: "tissu-lin",
    name: "Tissu Lin Naturel (par mètre)",
    description:
      "Lin 100% naturel, respirant et confortable. Idéal pour les vêtements d'été et les tenues traditionnelles légères.",
    image: "/images/products/",
    category: "Tissus",
    featured: false,
    locale: "fr",
    material: "Lin",
  },
  {
    id: "tissu-voile",
    name: "Tissu Voile de Coton (par mètre)",
    description:
      "Voile en coton fin et léger. Parfait pour les foulards, écharpes et vêtements d'été. Disponible en plusieurs coloris.",
    image: "/images/products/",
    category: "Tissus",
    featured: false,
    locale: "fr",
    material: "Coton",
  },

  // ═══════════════════════════════════════════
  // FILS À COUDRE ET À BRODER
  // ═══════════════════════════════════════════
  {
    id: "khit-shaara",
    name: "خيط شعرة / Fil Cheveux (100m)",
    description:
      "خيط شعرة للخياطة اليدوية والتقليدية. قوي ومتين، يستخدم في خياطة القفطان والجلابة.",
    image: "/images/products/RIVV0447.JPG",
    images: [
      "/images/products/RIVV0447.JPG",
      "/images/products/WPUJ9450.JPG",
      "/images/products/XCUG3654.JPG",
    ],
    category: "Fils",
    featured: true,
    locale: "ar",
    material: "Polyester",
  },
  {
    id: "fil-polyester",
    name: "Fil à Coudre Polyester Pro 1000m",
    description:
      "Bobine de fil polyester de haute résistance. Disponible en plusieurs couleurs. Parfait pour tous types de tissus.",
    image: "/images/products/",
    category: "Fils",
    featured: true,
    locale: "fr",
    material: "Polyester",
  },
  {
    id: "fil-coton",
    name: "Fil à Coudre Coton Mercerisé 500m",
    description:
      "Fil coton mercerisé de haute qualité. Résistant et brillant, idéal pour la couture du coton et du lin.",
    image: "/images/products/",
    category: "Fils",
    featured: false,
    locale: "fr",
    material: "Coton mercerisé",
  },
  {
    id: "fil-soie",
    name: "Fil à Coudre en Soie 200m",
    description:
      "Fil de soie naturelle pour couture délicate et broderie fine. Idéal pour les tissus précieux et la soie.",
    image: "/images/products/",
    category: "Fils",
    featured: false,
    locale: "fr",
    material: "Soie",
  },
  {
    id: "fil-crochet-coton",
    name: "خيط كروشي / Fil à Crochet Coton Perlée n°3",
    description:
      "خيط كروشي قطن بيرلي عالي الجودة. مناسب للخياطة التقليدية وإكسسوارات الكروشي.",
    image: "/images/products/AJAE2055.JPG",
    images: [
      "/images/products/AJAE2055.JPG",
      "/images/products/CTMV9965.JPG",
      "/images/products/GZRP5540.JPG",
      "/images/products/RKWT7791.JPG",
    ],
    category: "Fils à crochet",
    featured: true,
    locale: "ar",
    material: "Coton",
  },
  {
    id: "fil-crochet-akrylique",
    name: "خيط كروشي أكريليك / Fil Crochet Akrylique 100g",
    description:
      "خيط كروشي أكريليك ناعم وخفيف. مناسب للغطاء والشالات والملابس الكروشي.",
    image: "/images/products/KRPA5643.JPG",
    images: [
      "/images/products/KRPA5643.JPG",
      "/images/products/SUBJ4705.JPG",
    ],
    category: "Fils à crochet",
    featured: false,
    locale: "ar",
    material: "Akrylique",
  },
  {
    id: "laine-crochet",
    name: "Laine à Crochet Himalaya Super Soft",
    description:
      "Laine akrylique super douce de la marque Himalaya. Idéale pour les vêtements bébé, écharpes et accessoires.",
    image: "/images/products/",
    category: "Fils à crochet",
    featured: true,
    locale: "fr",
    brand: "Himalaya",
    material: "Akrylique",
  },
  {
    id: "fil-broderie-dmc",
    name: "Fil à Broderie DMC Mouliné 8m",
    description:
      "Fil à broderie DMC de qualité professionnelle. 6 brins séparables. Large gamme de couleurs disponibles.",
    image: "/images/products/",
    category: "Fils à broder",
    featured: true,
    locale: "fr",
    brand: "DMC",
    material: "Coton",
  },
  {
    id: "fil-broderie-metal",
    name: "Fil à Broderie Métallisé Doré",
    description:
      "Fil métallisé brillant pour broderie décorative. Parfait pour les caftans, tenues traditionnelles et accessoires de fête.",
    image: "/images/products/",
    category: "Fils à broder",
    featured: false,
    locale: "fr",
    material: "Métallisé",
  },
  {
    id: "fil-broderie-alu",
    name: "Fil Aluminium Kabyle Traditionnel",
    description:
      "Fil aluminium de qualité utilisé dans la broderie traditionnelle kabyle. Résistant et brillant pour un rendu authentique.",
    image: "/images/products/",
    category: "Fils à broder",
    featured: true,
    locale: "fr",
    material: "Aluminium",
  },

  // ═══════════════════════════════════════════
  // AIGUILLES
  // ═══════════════════════════════════════════
  {
    id: "aiguilles-machine",
    name: "Lot d'Aiguilles pour Machine à Coudre (20 pièces)",
    description:
      "Aiguilles pour machine à coudre. Tailles variées du 70 au 110. Compatibles avec toutes les marques.",
    image: "/images/products/",
    category: "Aiguilles",
    featured: true,
    locale: "fr",
    brand: "Schmetz",
  },
  {
    id: "aiguilles-main",
    name: "Lot d'Aiguilles à Coudre Main Assorties (30 pièces)",
    description:
      "Set complet d'aiguilles à main. Tailles variées pour tous types de travaux de couture et broderie.",
    image: "/images/products/",
    category: "Aiguilles",
    featured: false,
    locale: "fr",
  },
  {
    id: "aiguilles-broderie",
    name: "Aiguilles à Broderie (lot de 10)",
    description:
      "Aiguilles à broderie à chas long. Idéales pour le travail au fil DMC et la broderie traditionnelle.",
    image: "/images/products/",
    category: "Aiguilles",
    featured: false,
    locale: "fr",
  },
  {
    id: "aiguilles-crochet",
    name: "Crochet Aluminium Lot de 6 tailles",
    description:
      "Set de 6 crochets en aluminium. Tailles: 2mm, 2.5mm, 3mm, 3.5mm, 4mm, 5mm. Poignée ergonomique.",
    image: "/images/products/",
    category: "Aiguilles à crochet",
    featured: true,
    locale: "fr",
    material: "Aluminium",
  },
  {
    id: "aiguilles-crochet-bois",
    name: "Crochet en Bois Lot de 4",
    description:
      "Crochets en bois naturel. Tailles: 3.5mm, 4mm, 5mm, 6mm. Prise en main confortable pour longues sessions.",
    image: "/images/products/",
    category: "Aiguilles à crochet",
    featured: false,
    locale: "fr",
    material: "Bois",
  },
  {
    id: "epingles",
    name: "Épingles à Tête Colorée (Lot de 100)",
    description:
      "Épingles fines en acier à tête colorée. Faciles à repérer et à utiliser. Longueur 35mm.",
    image: "/images/products/",
    category: "Aiguilles",
    featured: false,
    locale: "fr",
  },

  // ═══════════════════════════════════════════
  // FOURNITURES DE BRODERIE
  // ═══════════════════════════════════════════
  {
    id: "cerceau-broderie",
    name: "Cerceau à Broderie Bois 20cm",
    description:
      "Cerceau en bois naturel diamètre 20cm. Vis de serrage métallique. Idéal pour la broderie traditionnelle.",
    image: "/images/products/",
    category: "Broderie",
    featured: true,
    locale: "fr",
  },
  {
    id: "toile-aida",
    name: "Toile Aïda pour Broderie (par mètre)",
    description:
      "Toile Aïda 11 points/cm. Idéale pour le point de croix et la broderie traditionnelle. Blanche et écrue disponibles.",
    image: "/images/products/",
    category: "Broderie",
    featured: false,
    locale: "fr",
    material: "Coton",
  },
  {
    id: "tambour-broderie",
    name: "Tambour à Broderie Métallique 15cm",
    description:
      "Tambour à broderie professionnel. Système de serrage à vis. Diamètre 15cm. Idéal pour la broderie fine.",
    image: "/images/products/",
    category: "Broderie",
    featured: false,
    locale: "fr",
  },
  {
    id: "metallique-broderie",
    name: "Fil Métallique Broderie Kabyle (10m)",
    description:
      "Fil métallique traditionnel pour broderie kabyle. Brillant et souple. Couleurs or et argent disponibles.",
    image: "/images/products/",
    category: "Broderie",
    featured: true,
    locale: "fr",
  },

  // ═══════════════════════════════════════════
  // SEFIFA - ترتر - سفيفة
  // ═══════════════════════════════════════════
  {
    id: "sefifa-doree",
    name: "سفيفة مذهبة / Seffifa Dorée (10m)",
    description:
      "سفيفة تقليدية مذهبة عالية الجودة. تستخدم لتزيين القفطان والجلابة والملابس التقليدية. متوفرة بعدة ألوان.",
    image: "/images/products/",
    category: "Sefifa & Passementerie",
    featured: true,
    locale: "ar",
  },
  {
    id: "sefifa-argentee",
    name: "سفيفة فضية / Seffifa Argentée (10m)",
    description:
      "سفيفة فضية لامعة لتزيين الملابس التقليدية. مثالية للقفطان والكاراكو والجلابة.",
    image: "/images/products/",
    category: "Sefifa & Passementerie",
    featured: true,
    locale: "ar",
  },
  {
    id: "sefifa-coloree",
    name: "سفيفة ملونة / Seffifa Colorée (10m)",
    description:
      "سفيفة ملونة بألوان متنوعة: أزرق ملكي، تركواز، عسلي، أخضر عسكري، أزرق فرنسا. تستخدم في التطريز التقليدي وتزيين الأعراس والمناسبات.",
    image: "/images/products/BEIA0608.JPG",
    images: [
      "/images/products/BEIA0608.JPG",
      "/images/products/CDQE9743.JPG",
      "/images/products/GCHU4915.JPG",
      "/images/products/KSBD0979.JPG",
      "/images/products/YAOI5558.JPG",
    ],
    category: "Sefifa & Passementerie",
    featured: true,
    locale: "ar",
  },
  {
    id: "aakad-el-hor",
    name: "عقد الحر / Aakad El Hor (10m)",
    description:
      "عقد الحر للخياطة التقليدية الفاخرة. يستخدم في تزيين القفطان والكاراكو والجلابة.",
    image: "/images/products/QSGG3941.JPG",
    category: "Sefifa & Passementerie",
    featured: false,
    locale: "ar",
  },
  {
    id: "sefifa-fine",
    name: "سفيفة ناعمة رفيعة / Seffifa Fine (20m)",
    description:
      "سفيفة رفيعة ناعمة للتطريز الدقيق. مثالية للتفاصيل الدقيقة في القفطان والملابس الفاخرة.",
    image: "/images/products/",
    category: "Sefifa & Passementerie",
    featured: false,
    locale: "ar",
  },

  // ═══════════════════════════════════════════
  // CROCHET & LOISIRS CRÉATIFS
  // ═══════════════════════════════════════════
  {
    id: "crochet-kit-debutant",
    name: "Kit Crochet Débutant Complet",
    description:
      "Kit complet pour débuter le crochet: 3 crochets, 5 pelotes de laine, 2 marqueurs, aiguille à laine et livre d'explications.",
    image: "/images/products/",
    category: "Crochet",
    featured: true,
    locale: "fr",
  },
  {
    id: "crochet-laine-epaisse",
    name: "Laine à Crochet Épaisse 200g",
    description:
      "Laine épaisse qualité premium. Idéale pour les couvertures, paniers et accessoires déco au crochet.",
    image: "/images/products/",
    category: "Crochet",
    featured: false,
    locale: "fr",
    material: "Akrylique",
  },
  {
    id: "crochet-marqueurs",
    name: "Marqueurs de Crochet (Lot de 50)",
    description:
      "Marqueurs de mailles en plastique. Pratiques pour suivre vos comptes de rangs et de mailles.",
    image: "/images/products/",
    category: "Crochet",
    featured: false,
    locale: "fr",
  },
  {
    id: "crochet-yarn-bowl",
    name: "Bol à Laine Tournant",
    description:
      "Bol en céramique tournant pour travailler la laine sans qu'elle ne s'emmêle. Idéal pour le crochet et le tricot.",
    image: "/images/products/",
    category: "Crochet",
    featured: false,
    locale: "fr",
  },

  // ═══════════════════════════════════════════
  // CISEAUX & OUTILS DE COUPE
  // ═══════════════════════════════════════════
  {
    id: "ciseaux-couture",
    name: "Ciseaux de Couture Professionnels 9 pouces",
    description:
      "Ciseaux de couture en acier inoxydable avec lames rectifiées. Poignées ergonomiques pour une coupe précise sans fatigue.",
    image: "/images/products/",
    category: "Ciseaux & Outils",
    featured: true,
    locale: "fr",
  },
  {
    id: "ciseaux-broderie",
    name: "Ciseaux à Broderie 5 pouces",
    description:
      "Petits ciseaux fins pour la broderie et les travaux de précision. Lames courbées pour coupe nette.",
    image: "/images/products/",
    category: "Ciseaux & Outils",
    featured: false,
    locale: "fr",
  },
  {
    id: "cutter-rotatif",
    name: "Cutter Rotatif 45mm",
    description:
      "Cutter rotatif professionnel 45mm avec lame de rechange. Idéal pour couper le tissu avec précision.",
    image: "/images/products/",
    category: "Ciseaux & Outils",
    featured: false,
    locale: "fr",
  },
  {
    id: "tapissier-coupe",
    name: "Tapis de Coupe Autocicatrisant A2",
    description:
      "Tapis de coupe professionnel format A2 (45x60cm). Quadrillage centimétrique. Surface autocicatrisante.",
    image: "/images/products/",
    category: "Ciseaux & Outils",
    featured: false,
    locale: "fr",
  },
  {
    id: "decoud-vite",
    name: "Découd-Vite Professionnel",
    description:
      "Outil découd-vite avec lame de précision et pointe fine. Manche ergonomique pour un travail confortable.",
    image: "/images/products/",
    category: "Ciseaux & Outils",
    featured: false,
    locale: "fr",
  },

  // ═══════════════════════════════════════════
  // BOUTONS & FERMETURES
  // ═══════════════════════════════════════════
  {
    id: "boutons-assortis",
    name: "Lot de Boutons Assortis (50 pièces)",
    description:
      "Collection variée de boutons en plastique et métal. Différentes tailles et couleurs pour tous vos projets.",
    image: "/images/products/",
    category: "Boutons & Fermetures",
    featured: true,
    locale: "fr",
  },
  {
    id: "boutons-traditionnels",
    name: "بزيمير تقليدي / Boutons Traditionnels (lot de 20)",
    description:
      "بزيمير تقليدي للجلابة والقفطان. أصناف متنوعة من البلاستيك والمعدن الملون.",
    image: "/images/products/",
    category: "Boutons & Fermetures",
    featured: false,
    locale: "ar",
  },
  {
    id: "fermeture-eclair",
    name: "Fermeture Éclair Invisible 40cm",
    description:
      "Fermeture à glissière invisible en nylon. Idéale pour les robes, jupes et coussins. Disponible en plusieurs couleurs.",
    image: "/images/products/",
    category: "Boutons & Fermetures",
    featured: true,
    locale: "fr",
  },
  {
    id: "fermeture-metal",
    name: "Fermeture Éclair Métal 20cm",
    description:
      "Fermeture à glissière métal robuste. Parfaite pour les vestes, jeans et sacs.",
    image: "/images/products/",
    category: "Boutons & Fermetures",
    featured: false,
    locale: "fr",
  },
  {
    id: "velcro",
    name: "Bande Velcro Adhésive 2cm x 1m",
    description:
      "Bande velcro avec dos adhésif. Facile à installer. Idéale pour la confection et les projets DIY.",
    image: "/images/products/",
    category: "Boutons & Fermetures",
    featured: false,
    locale: "fr",
  },
  {
    id: "crochets-oeillets",
    name: "Crochets et Œillets (Lot de 50)",
    description:
      "Lot de crochets et œillets pour vêtements. Parfaits pour les robes, jupes et lingerie.",
    image: "/images/products/",
    category: "Boutons & Fermetures",
    featured: false,
    locale: "fr",
  },

  // ═══════════════════════════════════════════
  // RUBANS, DENTELLES & PASSEMENTERIE
  // ═══════════════════════════════════════════
  {
    id: "galon-hindou",
    name: "Galon Hindou Or et Argent (10m)",
    description:
      "غالون هندي للخياطة التقليدية. نوعين: ذهبي وفضي. يستخدم لتزيين القفطان والجلابة.",
    image: "/images/products/QMAY3964.JPG",
    images: [
      "/images/products/QMAY3964.JPG",
      "/images/products/WAKW2278.JPG",
    ],
    category: "Rubans & Dentelles",
    featured: true,
    locale: "ar",
  },
  {
    id: "ruban-satin",
    name: "Ruban Satin 15mm (10m)",
    description:
      "Ruban satin de haute qualité. Brillant et lisse. Idéal pour les noeuds, emballages et décorations.",
    image: "/images/products/",
    category: "Rubans & Dentelles",
    featured: false,
    locale: "fr",
    material: "Polyester",
  },
  {
    id: "dentelle-fine",
    name: "Dentelle Fine Fleurie (5m)",
    description:
      "Dentelle délicate à motifs floraux. Idéale pour la lingerie, les robes et la décoration.",
    image: "/images/products/",
    category: "Rubans & Dentelles",
    featured: true,
    locale: "fr",
    material: "Coton",
  },
  {
    id: "dentelle-elastique",
    name: "Dentelle Élastique 5cm (5m)",
    description:
      "Dentelle élastique stretch. Parfaite pour les lingeries, vêtements de sport et costumes.",
    image: "/images/products/",
    category: "Rubans & Dentelles",
    featured: false,
    locale: "fr",
  },
  {
    id: "galon-traditionnel",
    name: "قروفيل / Grofil et Galon Traditionnel Algérien (10m)",
    description:
      "قروفيف وغالون تقليدي لتزيين الملابس الجزائرية. أشكال متنوعة: خطوط، أزهار، معينات. متوفر بعدة ألوان.",
    image: "/images/products/BRNS8110.JPG",
    images: [
      "/images/products/BRNS8110.JPG",
      "/images/products/DCTE4504.JPG",
      "/images/products/EPOT9471.JPG",
      "/images/products/GIRH6448.JPG",
      "/images/products/IBSI8804.JPG",
      "/images/products/KIEX0321.JPG",
      "/images/products/LFXO2228.JPG",
      "/images/products/LMGI2829.JPG",
      "/images/products/QPSK0849.JPG",
      "/images/products/RUNF2956.JPG",
      "/images/products/UCRU5721.JPG",
      "/images/products/XOYU7072.JPG",
    ],
    category: "Sefifa & Passementerie",
    featured: true,
    locale: "ar",
  },
  {
    id: "passepoil",
    name: "Passepoil Coton 3mm (10m)",
    description:
      "Passepoil coton pour couture décorative. Idéal pour les coussins, vêtements et projets déco.",
    image: "/images/products/",
    category: "Rubans & Dentelles",
    featured: false,
    locale: "fr",
  },

  // ═══════════════════════════════════════════
  // ACCESSOIRES DE COUTURE
  // ═══════════════════════════════════════════
  {
    id: "metre-ruban",
    name: "Mètre Ruban 150cm",
    description:
      "Mètre ruban flexible double face (cm/pouces). Idéal pour la prise de mesures en couture.",
    image: "/images/products/",
    category: "Accessoires",
    featured: true,
    locale: "fr",
  },
  {
    id: "de-a-coudre",
    name: "Dé à Coudre en Métal (Lot de 3)",
    description:
      "Dés à coudre en laiton et acier. Taille réglable pour un confort maximal. Protection idéale.",
    image: "/images/products/",
    category: "Accessoires",
    featured: false,
    locale: "fr",
  },
  {
    id: "coussin-aiguilles",
    name: "Coussin à Aiguilles Magnétique",
    description:
      "Coussin magnétique pour aiguilles et épingles. Base antidérapante. Maintient vos aiguilles en sécurité.",
    image: "/images/products/",
    category: "Accessoires",
    featured: false,
    locale: "fr",
  },
  {
    id: "enfile-aiguille",
    name: "Enfile-Aiguille Automatique",
    description:
      "Enfile-aiguille pratique pour les aiguilles à main et machine. Idéal pour les malvoyants et travaux de précision.",
    image: "/images/products/",
    category: "Accessoires",
    featured: false,
    locale: "fr",
  },
  {
    id: "craie-couture",
    name: "Lot de Craies de Couture Assorties (6 pièces)",
    description:
      "Craies de couture triangulaires. 6 couleurs différentes. Trait fin et précis, lavable.",
    image: "/images/products/",
    category: "Accessoires",
    featured: false,
    locale: "fr",
  },
  {
    id: "regle-couture",
    name: "Règle de Couture Transparente 60cm",
    description:
      "Règle transparente graduée. Idéale pour la coupe et le marquage du tissu. Graduations en cm et pouces.",
    image: "/images/products/",
    category: "Accessoires",
    featured: false,
    locale: "fr",
  },

  // ═══════════════════════════════════════════
  // PATRONS
  // ═══════════════════════════════════════════
  {
    id: "patron-robe",
    name: "Patron de Robe Taille Basse PDF",
    description:
      "Patron de couture taille 36-46 avec instructions détaillées. Comprend les marges de couture et un guide pas à pas.",
    image: "/images/products/",
    category: "Patrons",
    featured: true,
    locale: "fr",
  },
  {
    id: "patron-chemise",
    name: "Patron de Chemise Homme PDF",
    description:
      "Patron professionnel pour chemise homme taille S-XXL. Instructions détaillées avec diagrammes.",
    image: "/images/products/",
    category: "Patrons",
    featured: false,
    locale: "fr",
  },
  {
    id: "patron-caftan",
    name: "Patron de Caftan Algérien PDF",
    description:
      "Patron traditionnel pour caftan algérien. Tailles 38-52. Instructions détaillées pour la coupe et l'assemblage.",
    image: "/images/products/",
    category: "Patrons",
    featured: true,
    locale: "fr",
  },
  {
    id: "patron-karakou",
    name: "Patron de Karakou Traditionnel PDF",
    description:
      "Patron du Karakou algérien traditionnel. Tailles 36-48. Guide complet avec schémas et explications.",
    image: "/images/products/",
    category: "Patrons",
    featured: true,
    locale: "fr",
  },
  {
    id: "patron-gandoura",
    name: "Patron de Gandoura PDF",
    description:
      "Patron de gandoura algérienne. Tailles 38-54. Patron simple et élégant pour tenue traditionnelle.",
    image: "/images/products/",
    category: "Patrons",
    featured: false,
    locale: "fr",
  },
];

export const categories = [
  "Tous",
  "Machines à coudre",
  "Tissus",
  "Fils",
  "Fils à crochet",
  "Fils à broder",
  "Aiguilles",
  "Aiguilles à crochet",
  "Broderie",
  "Sefifa & Passementerie",
  "Crochet",
  "Ciseaux & Outils",
  "Boutons & Fermetures",
  "Rubans & Dentelles",
  "Accessoires",
  "Patrons",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "Tous") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product): Product[] {
  return products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
}
