export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  locale: "fr" | "ar";
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "comment-choisir-sa-machine-a-coudre",
    title: "Comment choisir sa machine à coudre",
    excerpt:
      "Guide complet pour choisir la machine à coudre adaptée à vos besoins. Des machines mécaniques aux électroniques, découvrez nos conseils.",
    content: `Choisir une machine à coudre peut sembler complexe avec toutes les options disponibles sur le marché. Que vous soyez débutant ou couturier expérimenté, il est essentiel de sélectionner la machine qui correspond à vos besoins spécifiques.

Pour les débutants, une machine mécanique comme la Singer Tradition est parfaite. Elle offre les points de base nécessaires sans complexité. Pour les utilisateurs avancés, les machines électroniques avec programmation de points et boutonnière automatique sont recommandées.

Chez CHIKA TEX, nous vous conseillons de considérer la fréquence d'utilisation, les types de projets que vous réalisez et votre budget. N'hésitez pas à venir essayer nos modèles en magasin à حي قرقينطة.`,
    date: "2026-06-20",
    image: "/images/blog-machine-coudre.jpg",
    author: "Équipe CHIKA TEX",
    locale: "fr",
    tags: ["machines à coudre", "guide", "débutant"],
  },
  {
    slug: "types-de-tissus-expliques",
    title: "Les différents types de tissus expliqués",
    excerpt:
      "Apprenez à reconnaître et choisir le bon tissu pour chacun de vos projets couture. Coton, lin, soie, polyester... tout comprendre.",
    content: `Le choix du tissu est crucial dans tout projet couture. Chaque type de tissu a ses caractéristiques et ses usages spécifiques. Le coton est parfait pour les vêtements légers d'été, tandis que le denim convient mieux aux vestes et pantalons.

Le lin est idéal pour les vêtements décontractés mais froisse facilement. La soie naturelle est luxueuse mais délicate à travailler. Le polyester offre une bonne résistance et un entretien facile. Nous proposons tous ces types de tissus dans notre magasin à Oran.

Pour choisir, tenez compte du tombé, de la texture et de l'entretien. Nos conseillers sont là pour vous guider dans votre sélection.`,
    date: "2026-06-15",
    image: "/images/blog-tissus.jpg",
    author: "Équipe CHIKA TEX",
    locale: "fr",
    tags: ["tissus", "guide", "matériaux"],
  },
  {
    slug: "10-astuces-debuter-couture",
    title: "10 astuces pour débuter en couture",
    excerpt:
      "Vous commencez la couture? Découvrez nos 10 astuces essentielles pour bien démarrer et éviter les erreurs courantes.",
    content: `La couture est une compétence merveilleuse qui demande de la pratique et de la patience. Voici 10 astuces pour bien débuter :
1. Investissez dans une bonne machine à coudre de qualité
2. Commencez par des projets simples comme des coussins ou des sacs
3. Apprenez à lire et comprendre un patron
4. Prenez vos mesures correctement
5. Utilisez du fil et des aiguilles de qualité
6. Repassez vos coutures pour un résultat professionnel
7. Pratiquez régulièrement, même 15 minutes par jour
8. Regardez des tutoriels en ligne
9. Rejoignez une communauté de couture
10. Ne vous découragez pas, chaque erreur est une leçon

Chez CHIKA TEX, nous proposons des kits débutants avec tout le nécessaire pour commencer.`,
    date: "2026-06-10",
    image: "/images/blog-debuter.jpg",
    author: "Équipe CHIKA TEX",
    locale: "fr",
    tags: ["débutant", "astuces", "conseils"],
  },
  {
    slug: "comment-prendre-mesures-correctement",
    title: "Comment prendre ses mesures correctement",
    excerpt:
      "Guide détaillé pour prendre vos mesures avec précision. Une étape essentielle pour des vêtements qui vous vont parfaitement.",
    content: `La prise de mesures est l'étape la plus importante dans la confection de vêtements sur mesure. Des mesures précises garantissent un vêtement qui vous va parfaitement. Utilisez un mètre ruban flexible et tenez-vous droit, sans serrer trop le mètre.

Les mesures clés à prendre sont : le tour de poitrine, la taille, les hanches, la longueur du dos, l'entrejambe et la longueur des manches. Pour chaque mesure, assurez-vous que le mètre ruban est droit et parallèle au sol.

Conservez vos mesures dans un carnet dédié. Elles vous serviront de référence pour tous vos projets. Nous vendons des mètres rubans de qualité chez CHIKA TEX.`,
    date: "2026-06-05",
    image: "/images/blog-mesures.jpg",
    author: "Équipe CHIKA TEX",
    locale: "fr",
    tags: ["mesures", "guide", "patron"],
  },
  {
    slug: "outils-essentiels-couture",
    title: "Les outils essentiels pour la couture",
    excerpt:
      "Découvrez les outils indispensables pour constituer votre kit de couture parfait. Que faut-il avoir dans sa trousse?",
    content: `Pour bien pratiquer la couture, il est essentiel d'avoir les bons outils. Voici ce qui doit absolument se trouver dans votre kit de couture : une bonne paire de ciseaux de couture (jamais utilisée pour le papier!), des aiguilles assorties, du fil de qualité, un mètre ruban, des épingles, un découseur, un dé à coudre et un coussin à aiguilles.

Un fer à repasser est également indispensable pour un travail soigné. Pour les projets avancés, une machine à coudre de qualité, un patron bien choisi et du tissu adapté sont nécessaires.

Chez CHIKA TEX à Oran, nous proposons des kits couture complets pour tous les niveaux. Passez nous voir à حي قرقينطة!`,
    date: "2026-05-28",
    image: "/images/blog-outils.jpg",
    author: "Équipe CHIKA TEX",
    locale: "fr",
    tags: ["outils", "équipement", "essentiel"],
  },
  {
    slug: "entretenir-machine-a-coudre",
    title: "Entretenir sa machine à coudre",
    excerpt:
      "Guide d'entretien pour prolonger la durée de vie de votre machine à coudre. Des gestes simples mais essentiels.",
    content: `L'entretien régulier de votre machine à coudre est crucial pour garantir son bon fonctionnement et prolonger sa durée de vie. Après chaque utilisation, retirez les fils et la poussière accumulés dans la zone de la canette.

Huilez les mécanismes internes tous les mois selon les recommandations du fabricant. Changez régulièrement les aiguilles (toutes les 8 heures de couture environ) pour éviter d'endommager vos tissus. Faites réviser votre machine une fois par an par un professionnel.

Chez CHIKA TEX, nous proposons des kits d'entretien et pouvons vous conseiller sur les bonnes pratiques. Une machine bien entretenue vous durera des années.`,
    date: "2026-05-20",
    image: "/images/blog-entretien.jpg",
    author: "Équipe CHIKA TEX",
    locale: "fr",
    tags: ["entretien", "machine à coudre", "maintenance"],
  },
  {
    slug: "kayfa-tabda-fi-al-khiyata",
    title: "كيف تبدأ في الخياطة",
    excerpt:
      "دليل شامل للمبتدئين لتعلم الخياطة خطوة بخطوة. من اختيار الماكينة إلى أول مشروع.",
    content: `الخياطة مهارة رائعة يمكن لأي شخص تعلمها بالصبر والممارسة. للبدء، تحتاج إلى ماكينة خياطة جيدة، مقص خاص بالخياطة، خيوط متنوعة الألوان، إبر، شريط قياس، ورق نقش، وقماش مناسب للمبتدئين مثل القطن.

ننصحك بالبدء بمشاريع بسيطة مثل وسادة أو حقيبة صغيرة. تعلم قراءة الباترونات خطوة بخطوة. شاهد دروساً تعليمية على الإنترنت ولا تتردد في طلب المساعدة من الخياطين المحترفين.

في متجر شيكا تكس بحي قرقينطة وهران، نقدم دورات تعليمية للخياطة لجميع المستويات. زورونا للاستفادة من خبرتنا.`,
    date: "2026-05-15",
    image: "/images/blog-arabe-debut.jpg",
    author: "فريق شيكا تكس",
    locale: "ar",
    tags: ["خياطة", "مبتدئ", "دليل"],
  },
  {
    slug: "guide-aiguilles-machine-coudre",
    title: "Guide des aiguilles pour machine à coudre",
    excerpt:
      "Tout savoir sur les aiguilles pour machine à coudre : tailles, types et usages. Comment choisir l'aiguille adaptée à votre tissu.",
    content: `Les aiguilles sont l'un des composants les plus importants mais souvent négligés de la machine à coudre. Utiliser la mauvaise aiguille peut endommager vos tissus et votre machine. Les aiguilles sont classées par taille (numéro) et par type.

Les tailles vont généralement de 60 (très fine) à 120 (très épaisse). Plus le chiffre est élevé, plus l'aiguille est épaisse. Pour le coton léger, utilisez une aiguille 70/10. Pour le denim, une aiguille 100/16 est recommandée.

Nous proposons chez CHIKA TEX un large choix d'aiguilles de toutes marques. N'hésitez pas à demander conseil à notre équipe.`,
    date: "2026-05-10",
    image: "/images/blog-aiguilles.jpg",
    author: "Équipe CHIKA TEX",
    locale: "fr",
    tags: ["aiguilles", "guide", "machine à coudre"],
  },
  {
    slug: "tendances-couture-annee",
    title: "Les tendances couture de l'année",
    excerpt:
      "Quelles sont les tendances couture à suivre cette année? Découvrez les styles, tissus et techniques qui font fureur.",
    content: `Cette année, la couture met à l'honneur les matières naturelles et durables. Le lin et le coton bio sont particulièrement prisés. Les couleurs pastel et les tons neutres dominent les collections. La tendance est au fait-main personnalisé et unique.

Les patrons de vêtements amples et confortables sont très demandés. La technique du zéro déchet gagne en popularité, avec des projets qui utilisent chaque chute de tissu. Les accessoires faits main comme les sacs et les pochettes sont aussi très tendance.

Chez CHIKA TEX, nous suivons les tendances et proposons les tissus et patrons les plus récents. Visitez notre magasin à Oran pour découvrir nos nouveautés.`,
    date: "2026-05-05",
    image: "/images/blog-tendances.jpg",
    author: "Équipe CHIKA TEX",
    locale: "fr",
    tags: ["tendances", "mode", "tissus"],
  },
  {
    slug: "nasaih-li-ikhtiar-al-qumash-al-munasib",
    title: "نصائح لاختيار القماش المناسب",
    excerpt:
      "كيف تختار القماش المثالي لمشروع الخياطة الخاص بك؟ نصائح خبراء لاختيار الأقمشة المناسبة.",
    content: `اختيار القماش المناسب هو خطوة حاسمة في نجاح أي مشروع خياطة. لكل نوع قماش خصائصه واستخداماته. القطن مثالي للملابس الصيفية الخفيفة، بينما الدنيم مناسب للجواكت والبناطيل.

للمبتدئين، ننصح بالبدء بالأقمشة القطنية سهلة التعامل. تجنب الأقمشة الزلقة مثل الحرير في البداية. انظر دائماً إلى تعليمات العناية بالقماش قبل الشراء. تأكد من أن القماش مناسب لنوع المشروع الذي تخطط له.

في متجر شيكا تكس، نقدم مجموعة واسعة من الأقمشة عالية الجودة بأسعار منافسة. فريقنا مستعد لمساعدتك في اختيار القماش المثالي لمشروعك.`,
    date: "2026-04-28",
    image: "/images/blog-arabe-tissus.jpg",
    author: "فريق شيكا تكس",
    locale: "ar",
    tags: ["أقمشة", "نصائح", "اختيار"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return blogPosts.filter(
    (p) => p.locale === post.locale && p.slug !== post.slug
  );
}
