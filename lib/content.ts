/**
 * Centralised content definitions for the Frantex International
 * Fashion website. The `content` object stores strings and simple
 * structures for both French (fr) and English (en) locales. Pages
 * can import and use these values to avoid hard‑coding text in
 * components.
 */

export type Locale = "fr" | "en";

export interface NavItem {
  slug: string;
  title: string;
}
export interface HomeStep {
  title: string;
  desc: string;
  videoSrc: string;
}

export interface HomeWhyPoint {
  title: string;
  desc: string;
}

export interface HomeSection {
  title: string;
  text: string;
}

export interface Stats {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// INTERFACE MISE À JOUR (avec les paragraphes 'hero' découpés)
export interface SiteContent {
  siteName: string;
  originBanner: string;
  nav: NavItem[];
  home: {
    heroTitle: string;
    // heroP1 découpé en 3 parties
    heroP1_part1: string;
    heroP1_highlight: string;
    heroP1_part2: string;
    // heroP2 découpé en 3 parties
    heroP2_part1: string;
    heroP2_highlight: string;
    heroP2_part2: string;
    stepsTitle: string;
    stepsSubtitle: string;
    steps: HomeStep[];
    whyTitle: string;
    whySubtitle: string;
    whyP1: string;
    whyPoints: HomeWhyPoint[];
  };
  cta: {
    title: string;
    subtitle: string;
    btn1: string;
    btn2: string;
    btn1href: string;
    btn2href: string;
  };
  knowHow: {
    title: string;
    intro: string;
    sections: HomeSection[];
  };
  products: {
    title: string;
    intro: string;
    details: string;
    options: string;
  };
  quality: {
    title: string;
    intro: string;
    processTitle: string;
    steps: { title: string; description: string }[];
    commitmentsTitle: string;
    commitments: { title: string; description: string }[];
  };
  capacity: {
    title: string;
    intro: string;
    equipmentsTitle: string;
    equipments: { title: string; description: string }[];
    statsTitle: string;
    stats: Stats[];
  };
  contact: {
    title: string;
    intro: string;
    address: string;
    phones: string[];
    email: string;
    form: {
      name: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      productType: string;
      quantity: string;
      attachment: string;
      message: string;
      submit: string;
    };
  };
  legal: {
    title: string;
    content: string;
  };
  faq: FaqItem[];
}

export const content: Record<Locale, SiteContent> = {
  fr: {
    siteName: "Frantex International Fashion",
    originBanner: "Made in Tunisia – Management français",
    nav: [
      { slug: "", title: "Accueil" },
      { slug: "savoir-faire", title: "Savoir‑faire" },
      { slug: "produits", title: "Produits" },
      { slug: "qualite", title: "Qualité" },
      { slug: "capacite", title: "Capacité" },
      { slug: "contact", title: "Contact" },
    ],
    cta: {
      title: "Besoin d’échantillons ou d’un devis ?",
      subtitle:
        "Parlez‑nous de votre projet : quantité, usages, contraintes. On vous oriente vers la meilleure matière, rapidement.",
      btn1: "Contact commercial",
      btn2: "Catalogue PDF",
      btn1href: "mailto:reception_frantex@outlook.fr",
      btn2href: "/fr/catalogue",
    },
    home: {
      heroTitle: "Votre Marque, Notre Atelier",
      // Paragraphe 1 découpé
      heroP1_part1: "Plus qu'une manufacture. Un pont entre deux rives. ",
      heroP1_highlight: "Frantex International Fashion",
      heroP1_part2:
        " sculpte la matière à M'Saken, en Tunisie, avec l'exigence du management français.",
      // Paragraphe 2 découpé
      heroP2_part1:
        "Nous transformons vos concepts en collections complètes de swimwear et lingerie. En alliant la précision de nos méthodes à la flexibilité de notre production, nous devenons le prolongement de votre marque, garantissant ",
      heroP2_highlight: "qualité, réactivité et un savoir-faire",
      heroP2_part2: " qui fait la différence.",
      stepsTitle: "Nos Etapes de Confection",
      stepsSubtitle:
        "Du modélisme à l’emballage : une maîtrise complète de la production textile.",
      steps: [
        {
          title: "Stylisme",
          desc: "Création des designs et définition des tendances pour vos collections.",
          videoSrc: "/assets/videos/stylisme.mp4",
        },
        {
          title: "Patronage",
          desc: "Notre bureau d'études conçoit les patrons et les prototypes précis.",
          videoSrc: "/assets/videos/patronage.mp4",
        },
        {
          title: "Confection",
          desc: "Nos lignes de production assemblent vos pièces avec une qualité rigoureuse.",
          videoSrc: "/assets/videos/confection.mp4",
        },
        {
          title: "Emballage",
          desc: "Contrôle final, conditionnement et préparation pour l'expédition.",
          videoSrc: "/assets/videos/emballage.mp4",
        },
      ],
      whyTitle: "Pourquoi choisir FRANTEX ?",
      whySubtitle:
        "Transparence, contrôle qualité, délais tenus. Des partenariats solides, des produits qui durent.",
      whyP1:
        "Notre engagement va au-delà de la simple confection. Nous sommes un partenaire stratégique qui comprend vos exigences et s'engage sur la qualité et la fiabilité à long terme.",
      whyPoints: [
        {
          title: "Contrôle qualité multi-étapes",
          desc: "De la réception du tissu au produit fini, chaque pièce est inspectÉE pour garantir une conformité totale.",
        },
        {
          title: "Expédition rapide & fiable",
          desc: "Notre logistique optimisée nous permet de tenir des délais courts et fiables vers l'international.",
        },
        {
          title: "Réassort piloté",
          desc: "Nous gérons vos productions et réassorts avec la même rigueur, assurant une continuité pour vos collections.",
        },
        {
          title: "Démarche responsable",
          desc: "Optimisation des coupes, recyclage des chutes et choix de matériaux durables pour réduire notre empreinte.",
        },
        {
          title: "Fiches techniques claires",
          desc: "Une documentation précise et un prototypage rigoureux pour une production sans surprise.",
        },
      ],
    },
    knowHow: {
      title: "Notre savoir‑faire",
      intro:
        "Forts de plus de 20 ans d'expérience, nous avons perfectionné un processus de fabrication qui allie l'artisanat traditionnel à la précision technologique. Notre savoir-faire couvre l'intégralité de la chaîne de production, du design à l'expédition.",
      sections: [
        {
          title: "Modélisme & prototypage",
          text: "Notre bureau d'études vous accompagne dans la création : conception de modèles, patronage, gradation et prototypage rapide afin de valider les coupes et les montages.",
        },
        {
          title: "Coupe",
          text: "Notre salle de coupe est équipée de systèmes numériques pour optimiser la consommation matière et garantir une précision maximale.",
        },
        {
          title: "Confection",
          text: "Des ateliers dotés de surjeteuses, recouvreuses et autres machines spécialisées sont opérés par des couturières expérimentées pour un assemblage parfait.",
        },
        {
          title: "Contrôle qualité",
          text: "Contrôles en cours de production et en fin de chaîne pour assurer la conformité à vos cahiers des charges et une traçabilité complète.",
        },
        {
          title: "Emballage & logistique",
          text: "Conditionnement selon vos spécifications, étiquetage et expédition internationale sous incoterms EXW ou FOB.",
        },
      ],
    },
    products: {
      title: "Produits & expertises",
      intro:
        "Nous confectionnons des maillots de bain une‑pièce, bikinis, boardshorts et tout type de lingerie pour femme et homme (soutiens‑gorge, culottes, brassières).",
      details:
        "Notre expertise couvre la coupe‑cousu sur maille et jersey, l'assemblage de matières complexes et l'ajout d'accessoires tels que bonnets, armatures, élastiques, imprimés et broderies.",
      options:
        "Nous travaillons avec des tissus certifiés Oeko‑Tex®, y compris des matières recyclées. Les quantités minimales de commande débutent à 500 pièces par modèle et couleur. Le délai moyen est de 6 à 8 semaines après validation des prototypes.",
    },
    quality: {
      title: "Qualité & conformité",
      intro:
        "La qualité n'est pas une option, c'est notre standard. De l'inspection des tissus aux audits externes, nous avons mis en place un système rigoureux pour garantir que chaque pièce est conforme à vos exigences les plus strictes.",
      processTitle: "Notre Processus de Contrôle en 3 Étapes",
      steps: [
        {
          title: "1. Inspection des Tissus",
          description:
            "Contrôle qualité systématique à la réception pour détecter tout défaut de matière ou de teinte avant la mise en production.",
        },
        {
          title: "2. Contrôle en Cours de Process",
          description:
            "Vérifications continues sur les lignes de production par nos équipes dédiées pour assurer un assemblage parfait.",
        },
        {
          title: "3. Contrôle Final 100%",
          description:
            "Chaque pièce est inspectée individuellement (coupes, coutures, mesures) avant l'emballage pour une qualité irréprochable.",
        },
      ],
      commitmentsTitle: "Nos Engagements de Conformité",
      commitments: [
        {
          title: "Traçabilité Complète",
          description:
            "Chaque production est tracée via un numéro de lot unique, permettant un suivi transparent et rigoureux de chaque étape.",
        },
        {
          title: "Normes Européennes (REACH)",
          description:
            "Nous respectons scrupuleusement les réglementations (REACH, AZO free, nickel free) pour des produits sûrs et conformes.",
        },
        {
          title: "Audits Sociaux & Environnementaux",
          description:
            "Notre conformité est régulièrement validée par des organismes externes indépendants, garantissant nos engagements RSE.",
        },
      ],
    },
    capacity: {
      title: "Capacité industrielle",
      intro:
        "Notre usine de M'Saken dispose de 6 lignes de production modulables et de 200 collaborateurs qualifiés, prête à s'adapter à vos volumes.",
      equipmentsTitle: "Des Équipements de Pointe",
      equipments: [
        {
          title: "Modélisme & CAO",
          description:
            "Logiciels CAO de dernière génération pour un patronage et une gradation d'une précision absolue.",
        },
        {
          title: "Coupe Automatisée",
          description:
            "Machines de coupe automatique pour optimiser la consommation de matière et garantir la régularité.",
        },
        {
          title: "Ateliers de Confection",
          description:
            "Plus de 80 machines de couture spécialisées (surjeteuses, recouvreuses, etc.) opérées par nos expertes.",
        },
        {
          title: "Finition & Conditionnement",
          description:
            "Presses, tables de contrôle et équipements de finition pour un produit final impeccable.",
        },
      ],
      statsTitle: "La Production en Chiffres",
      stats: [
        { label: "Capacité mensuelle", value: "50 000 pièces" },
        { label: "Délai prototypes", value: "3 semaines" },
        { label: "Délai production", value: "6-8 semaines" },
        {
          label: "Minimum de commande — tous modèles et toutes tailles inclus.",
          value: "350 pièces",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "Pour toute demande de devis, d'information ou de collaboration, n'hésitez pas à nous contacter via le formulaire ci‑dessous ou aux coordonnées indiquées.",
      address: "Route de Sousse GP1\nM'Saken 4070, Sousse, Tunisie",
      phones: ["+216 28 402 518", "+216 73 312 033", "+216 73 312 034"],
      email: "reception_frantex@outlook.fr",
      form: {
        name: "Nom complet",
        firstName: "Prénom",
        lastName: "Nom de famille",
        email: "Email",
        phone: "Téléphone",
        productType: "Type de produit (maillot, lingerie…)",
        quantity: "Quantité estimée",
        attachment: "Fichier technique (PDF, facultatif)",
        message: "Votre message",
        submit: "Envoyer",
      },
    },
    legal: {
      title: "Mentions légales",
      content:
        "Ce site est édité par Frantex International Fashion. Siège social : Route de Sousse GP1, M'Saken 4070, Sousse, Tunisie. Directeur de la publication : Hedi Khedher. Hébergeur : Vercel. Pour plus d'informations sur notre politique de confidentialité et la gestion des cookies, veuillez consulter les pages dédiées.",
    },
    faq: [
      {
        question: "Quel est le minimum de commande (MOQ) ?",
        answer:
          "Les quantités minimales de commande commencent généralement à 500 pièces par modèle et par couleur. Selon la complexité du produit, ce seuil peut être ajusté.",
      },
      {
        question: "Quels sont les délais de production ?",
        answer:
          "Après validation des prototypes, le délai moyen de production est de 6 à 8 semaines. Les échantillons sont généralement réalisés sous 3 semaines.",
      },
      {
        question: "Proposez‑vous des échantillons ?",
        answer:
          "Oui, nous réalisons des prototypes et des échantillons afin de valider les matières, les coupes et les finitions avant le lancement de la production.",
      },
      {
        question: "Comment garantissez‑vous la confidentialité des projets ?",
        answer:
          "Nous travaillons régulièrement sous accords de non‑divulgation (NDA) et mettons en place des procédures internes strictes pour protéger vos informations et designs.",
      },
      {
        question: "Quels incoterms proposez‑vous ?",
        answer:
          "Nous proposons principalement les incoterms EXW Tunisie et FOB Sousse. D'autres modalités peuvent être étudiées sur demande.",
      },
      {
        question: "Livrez‑vous à l'international ?",
        answer:
          "Oui, nous expédions nos productions à l'international. Nos équipes logistiques vous accompagnent dans l'organisation du transport et des formalités douanières.",
      },
    ],
  },
  en: {
    siteName: "Frantex International Fashion",
    originBanner: "Made in Tunisia – French management",
    nav: [
      { slug: "", title: "Home" },
      { slug: "savoir-faire", title: "Know‑how" },
      { slug: "produits", title: "Products" },
      { slug: "qualite", title: "Quality" },
      { slug: "capacite", title: "Capacity" },
      { slug: "contact", title: "Contact" },
    ],
    cta: {
      title: "Need samples or a quote?",
      subtitle:
        "Tell us about your project: quantity, uses, constraints. We'll guide you to the best material, quickly.",
      btn1: "Sales contact",
      btn2: "PDF Catalogue",
      btn1href: "mailto:reception_frantex@outlook.fr",
      btn2href: "/en/catalogue",
    },
    home: {
      heroTitle: "Your Brand, Our Workshop",
      // Paragraphe 1 découpé (EN)
      heroP1_part1: "More than a factory. A bridge between two shores. ",
      heroP1_highlight: "Frantex International Fashion",
      heroP1_part2:
        " crafts materials in M'Saken, Tunisia, with the rigor of French management.",
      // Paragraphe 2 découpé (EN)
      heroP2_part1:
        "We transform your concepts into complete swimwear and lingerie collections. By blending precision methods with production flexibility, we become an extension of your brand, ensuring ",
      heroP2_highlight: "quality, responsiveness, and game-changing expertise",
      heroP2_part2: ".",
      stepsTitle: "Our Manufacturing Steps",
      stepsSubtitle:
        "From design to packing: complete mastery of textile production.",
      steps: [
        {
          title: "Design",
          desc: "Creating designs and defining trends for your collections.",
          videoSrc: "/assets/videos/stylisme.mp4",
        },
        {
          title: "Pattern Making",
          desc: "Our design office creates precise patterns and prototypes.",
          videoSrc: "/assets/videos/patronage.mp4",
        },
        {
          title: "Manufacturing",
          desc: "Our production lines assemble your pieces with rigorous quality.",
          videoSrc: "/assets/videos/confection.mp4",
        },
        {
          title: "Packaging",
          desc: "Final inspection, conditioning, and preparation for shipment.",
          videoSrc: "/assets/videos/emballage.mp4",
        },
      ],
      whyTitle: "Why Choose FRANTEX?",
      whySubtitle:
        "Transparency, quality control, reliable deadlines. Strong partnerships, products that last.",
      whyP1:
        "Our commitment goes beyond simple manufacturing. We are a strategic partner who understands your requirements and commits to long-term quality and reliability.",
      whyPoints: [
        {
          title: "Multi-step quality control",
          desc: "From fabric reception to the finished product, every piece is inspected to ensure full compliance.",
        },
        {
          title: "Fast & reliable shipping",
          desc: "Our optimized logistics allow us to maintain short and reliable international lead times.",
        },
        {
          title: "Managed restocking",
          desc: "We manage your production and reorders with the same rigor, ensuring continuity for your collections.",
        },
        {
          title: "Responsible approach",
          desc: "Optimizing cuts, recycling scraps, and choosing sustainable materials to reduce our footprint.",
        },
        {
          title: "Clear technical files",
          desc: "Precise documentation and rigorous prototyping for production without surprises.",
        },
      ],
    },
    knowHow: {
      title: "Our know‑how",
      intro:
        "With over 20 years of experience, we have perfected a manufacturing process that blends traditional craftsmanship with technological precision. Our expertise covers the entire production chain, from design to dispatch.",
      sections: [
        {
          title: "Design & prototyping",
          text: "Our design office supports your creation process: design, pattern making, grading and rapid prototyping to validate shapes and assemblies.",
        },
        {
          title: "Cutting",
          text: "Our cutting room is equipped with digital systems to optimise fabric utilisation and ensure maximum precision.",
        },
        {
          title: "Sewing & assembly",
          text: "Workshops fitted with overlock, coverstitch and other specialised machines are operated by experienced seamstresses for perfect assembly.",
        },
        {
          title: "Quality control",
          text: "In‑line and final inspections guarantee compliance with your specifications and complete traceability.",
        },
        {
          title: "Packing & logistics",
          text: "Packing to your specifications, labelling and international shipping under EXW or FOB incoterms.",
        },
      ],
    },
    products: {
      title: "Products & expertise",
      intro:
        "We manufacture one‑piece swimsuits, bikinis, boardshorts and all types of lingerie for women and men (bras, briefs, bralettes).",
      details:
        "Our expertise covers cut‑and‑sew on knit and jersey, assembly of complex materials and the addition of accessories such as cups, underwires, elastics, prints and embroidery.",
      options:
        "We use certified Oeko‑Tex® fabrics, including recycled materials. Minimum order quantities start from 500 pieces per style and colour. Average lead time is 6 to 8 weeks after sample approval.",
    },
    quality: {
      title: "Quality & Compliance",
      intro:
        "Quality is not an option; it's our standard. From fabric inspection to external audits, we have implemented a rigorous system to ensure every piece meets your strictest requirements.",
      processTitle: "Our 3-Step Quality Control Process",
      steps: [
        {
          title: "1. Fabric Inspection",
          description:
            "Systematic quality control upon reception to detect any material or color flaws before production begins.",
        },
        {
          title: "2. In-Process Control",
          description:
            "Continuous checks on the production lines by our dedicated teams to ensure a perfect assembly.",
        },
        {
          title: "3. 100% Final Inspection",
          description:
            "Each finished piece is individually inspected (cuts, seams, measurements) before packing for flawless quality.",
        },
      ],
      commitmentsTitle: "Our Compliance Commitments",
      commitments: [
        {
          title: "Full Traceability",
          description:
            "Each production run is tracked via a unique batch number, allowing for transparent and rigorous monitoring of every step.",
        },
        {
          title: "European Standards (REACH)",
          description:
            "We scrupulously comply with regulations (REACH, AZO free, nickel free) for safe and compliant products.",
        },
        {
          title: "Social & Environmental Audits",
          description:
            "Our compliance is regularly validated by independent external bodies, guaranteeing our CSR commitments.",
        },
      ],
    },
    capacity: {
      title: "Industrial Capacity",
      intro:
        "Our factory in M'Saken has 6 modular production lines and 200 qualified employees, ready to adapt to your volumes.",
      equipmentsTitle: "State-of-the-Art Equipment",
      equipments: [
        {
          title: "Pattern Making & CAD",
          description:
            "Latest generation CAD software for pattern making and grading with absolute precision.",
        },
        {
          title: "Automated Cutting",
          description:
            "Automatic cutting machines to optimize fabric consumption and ensure consistency.",
        },
        {
          title: "Sewing Workshops",
          description:
            "Over 80 specialized sewing machines (overlock, coverstitch, etc.) operated by our experts.",
        },
        {
          title: "Finishing & Packing",
          description:
            "Presses, control tables, and finishing equipment for a flawless final product.",
        },
      ],
      statsTitle: "Production by the Numbers",
      stats: [
        { label: "Monthly capacity", value: "50,000 pieces" },
        { label: "Prototype lead time", value: "3 weeks" },
        { label: "Production lead time", value: "6-8 weeks" },
        {
          label: "Minimum order — all models and sizes included.",
          value: "350 pieces",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "For any quotation, information or collaboration request, please contact us via the form below or using the details provided.",
      address: "Route de Sousse GP1\nM'Saken 4070, Sousse, Tunisia",
      phones: ["+216 28 402 518", "+216 73 312 033", "+216 73 312 034"],
      email: "reception_frantex@outlook.fr",
      form: {
        name: "Full name",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone number",
        productType: "Product type (swimwear, lingerie…)",
        quantity: "Estimated quantity",
        attachment: "Technical file (PDF, optional)",
        message: "Your message",
        submit: "Send",
      },
    },
    legal: {
      title: "Legal notice",
      content:
        "This site is published by Frantex International Fashion. Registered office: Route de Sousse GP1, M'Saken 4070, Sousse, Tunisia. Publication director: Hedi Khedher. Hosting: Vercel. For more information on our privacy policy and cookie management, please consult the dedicated pages.",
    },
    faq: [
      {
        question: "What is the minimum order quantity (MOQ)?",
        answer:
          "Minimum order quantities generally start at 500 pieces per style and colour. Depending on product complexity, this threshold can be adjusted.",
      },
      {
        question: "What are your lead times?",
        answer:
          "After sample approval, the average production lead time is 6 to 8 weeks. Samples are usually made within 3 weeks.",
      },
      {
        question: "Do you provide samples?",
        answer:
          "Yes, we make prototypes and samples to validate materials, shapes and finishes before launching production.",
      },
      {
        question: "How do you ensure project confidentiality?",
        answer:
          "We regularly work under non‑disclosure agreements (NDA) and implement strict internal procedures to protect your information and designs.",
      },
      {
        question: "Which incoterms do you offer?",
        answer:
          "We mainly offer EXW Tunisia and FOB Sousse. Other terms can be discussed on request.",
      },
      {
        question: "Do you deliver internationally?",
        answer:
          "Yes, we ship our production worldwide. Our logistics teams support you in organising transport and customs formalities.",
      },
    ],
  },
};
