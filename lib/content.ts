/**
 * Centralised content definitions for the Frantex International
 * Fashion website. The `content` object stores strings and simple
 * structures for both French (fr) and English (en) locales. Pages
 * can import and use these values to avoid hard‑coding text in
 * components. If additional pages are added, extend this file
 * accordingly. Keeping translations together makes future updates
 * easier and encourages consistency across the site.
 */

export type Locale = 'fr' | 'en';

export interface NavItem {
  /**
   * URL path segment without locale, e.g. 'savoir-faire'. When
   * constructing links, prepend the current locale.
   */
  slug: string;
  /**
   * Human readable title for navigation menus.
   */
  title: string;
}

export interface HomeSection {
  /** heading for the section */
  title: string;
  /** short descriptive paragraph */
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

export interface SiteContent {
  /** Title tag for the site */
  siteName: string;
  /** Banner text emphasising the origin and management */
  originBanner: string;
  /** Navigation menu items */
  nav: NavItem[];
  /** Call to action text used in hero sections */
  cta: string;
  /** Home page content */
  home: {
    heroHeadline: string;
    heroSubHeadline: string;
    sections: HomeSection[];
    stats: Stats[];
  };
  /** Know‑how page */
  knowHow: {
    title: string;
    sections: HomeSection[];
  };
  /** Products & expertise page */
  products: {
    title: string;
    intro: string;
    details: string;
    options: string;
  };
  /** Quality & compliance */
  quality: {
    title: string;
    description: string;
  };
  /** Industrial capacity */
  capacity: {
    title: string;
    description: string;
  };
  /** Sustainability & CSR */
  sustainability: {
    title: string;
    description: string;
  };
  /** References */
  references: {
    title: string;
    description: string;
  };
  /** Careers */
  careers: {
    title: string;
    intro: string;
    jobs: { title: string; description: string }[];
  };
  /** Blog */
  blog: {
    title: string;
    intro: string;
    posts: { title: string; description: string; date: string }[];
  };
  /** Contact */
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
  /** Legal */
  legal: {
    title: string;
    content: string;
  };
  /** Frequently asked questions */
  faq: FaqItem[];
};

export const content: Record<Locale, SiteContent> = {
  fr: {
    siteName: 'Frantex International Fashion',
    originBanner: 'Made in Tunisia – Management français',
    nav: [
      { slug: '', title: 'Accueil' },
      { slug: 'savoir-faire', title: 'Savoir‑faire' },
      { slug: 'produits', title: 'Produits' },
      { slug: 'qualite', title: 'Qualité' },
      { slug: 'capacite', title: 'Capacité' },
      { slug: 'rse', title: 'RSE & Durabilité' },
      { slug: 'references', title: 'Références' },
      { slug: 'carriere', title: 'Carrières' },
      { slug: 'blog', title: 'Blog' },
      { slug: 'contact', title: 'Contact' },
    ],
    cta: 'Discutons de votre projet',
    home: {
      heroHeadline:
        'Manufacture de maillots de bain & lingerie en Tunisie',
      heroSubHeadline:
        'Frantex International Fashion conçoit et produit vos collections swimwear et lingerie depuis son usine à M\'Saken. Notre équipe franco‑tunisienne allie savoir‑faire textile, réactivité et rigueur pour répondre aux exigences des marques internationales. De la conception au conditionnement, confiez‑nous votre projet pour un accompagnement complet.',
      sections: [
        {
          title: 'Savoir‑faire complet',
          text: 'Modélisme & prototypage, coupe automatisée, confection, contrôle qualité, emballage et logistique : nous maîtrisons chaque étape de la création d\'un produit textile.',
        },
        {
          title: 'Produits sur mesure',
          text: 'Maillots de bain une‑pièce, bikinis, lingerie : nous développons des modèles adaptés à vos cahiers des charges et à votre identité de marque.',
        },
        {
          title: 'Qualité et flexibilité',
          text: 'Processus de contrôle stricts, délais maîtrisés et adaptation aux petites comme aux grandes séries garantissent la réussite de vos projets.',
        },
      ],
      stats: [
        { label: 'Lignes de production', value: '6' },
        { label: 'Collaborateurs', value: '200+' },
        { label: 'Capacité mensuelle', value: '50 000 pièces' },
        { label: 'Délais de production', value: '6–8 semaines' },
      ],
    },
    knowHow: {
      title: 'Notre savoir‑faire',
      sections: [
        {
          title: 'Modélisme & prototypage',
          text: 'Notre bureau d\'études vous accompagne dans la création : conception de modèles, patronage, gradation et prototypage rapide afin de valider les coupes et les montages.',
        },
        {
          title: 'Coupe',
          text: 'Notre salle de coupe est équipée de systèmes numériques pour optimiser la consommation matière et garantir une précision maximale.',
        },
        {
          title: 'Confection',
          text: 'Des ateliers dotés de surjeteuses, recouvreuses et autres machines spécialisées sont opérés par des couturières expérimentées pour un assemblage parfait.',
        },
        {
          title: 'Contrôle qualité',
          text: 'Contrôles en cours de production et en fin de chaîne pour assurer la conformité à vos cahiers des charges et une traçabilité complète.',
        },
        {
          title: 'Emballage & logistique',
          text: 'Conditionnement selon vos spécifications, étiquetage et expédition internationale sous incoterms EXW ou FOB.',
        },
      ],
    },
    products: {
      title: 'Produits & expertises',
      intro:
        'Nous confectionnons des maillots de bain une‑pièce, bikinis, boardshorts et tout type de lingerie pour femme et homme (soutiens‑gorge, culottes, brassières).',
      details:
        'Notre expertise couvre la coupe‑cousu sur maille et jersey, l\'assemblage de matières complexes et l\'ajout d\'accessoires tels que bonnets, armatures, élastiques, imprimés et broderies.',
      options:
        'Nous travaillons avec des tissus certifiés Oeko‑Tex®, y compris des matières recyclées. Les quantités minimales de commande débutent à 500 pièces par modèle et couleur. Le délai moyen est de 6 à 8 semaines après validation des prototypes.',
    },
    quality: {
      title: 'Qualité & conformité',
      description:
        'La qualité est au cœur de notre organisation. Nous appliquons des contrôles rigoureux à chaque étape : inspection des tissus, contrôle process, contrôle final sur 100 % des pièces. Chaque production est tracée via un numéro de lot. Nous respectons les réglementations européennes (REACH) et les exigences des marques en matière de normes (AZO free, nickel free). Des audits réguliers par des organismes externes garantissent notre conformité sociale et environnementale.',
    },
    capacity: {
      title: 'Capacité industrielle',
      description:
        'Notre usine de M\'Saken dispose de 6 lignes de production modulables et de 200 collaborateurs qualifiés. Équipements : logiciels CAO pour le patronage, machines de coupe automatique, 80 machines de couture spécialisées, presses et équipements de finition. Capacité mensuelle : jusqu’à 50 000 pièces, selon la complexité des modèles. Délais standard : prototypes en 3 semaines, production en 6 à 8 semaines. Incoterms proposés : EXW Tunisie, FOB Sousse.',
    },
    sustainability: {
      title: 'RSE & durabilité',
      description:
        'Frantex International Fashion s\'engage pour une production responsable. Nous veillons au respect des droits des travailleurs (conditions de travail sûres, horaires conformes), favorisons la formation continue et l\'égalité des chances. Sur le plan environnemental, nous optimisons l\'utilisation des matières, recyclons les chutes de tissus et investissons dans des équipements moins énergivores. Nous développons des collections en matières recyclées pour réduire notre empreinte carbone.',
    },
    references: {
      title: 'Références & études de cas',
      description:
        'Pour des raisons de confidentialité, nous ne pouvons pas afficher les marques avec lesquelles nous collaborons. Nous réalisons des projets sur mesure pour des marques européennes et internationales de maillots de bain et lingerie. Sur demande et sous NDA, nous pouvons vous présenter des références et études de cas démontrant notre savoir‑faire et notre flexibilité.',
    },
    careers: {
      title: 'Carrières',
      intro:
        'Rejoignez une entreprise en pleine croissance ! Nous recherchons régulièrement des opérateurs de coupe, des couturières spécialisées, des contrôleurs qualité et des profils administratifs. Nous offrons une formation continue et un environnement de travail respectueux. Consultez nos offres d\'emploi ci‑dessous ou envoyez une candidature spontanée.',
      jobs: [
        {
          title: 'Technicien(ne) modélisme',
          description:
            'Responsable de la création de patrons et de la gradation, en lien avec le bureau d\'études et les clients.',
        },
        {
          title: 'Opérateur(trice) de coupe',
          description:
            'Prépare et découpe les tissus à l\'aide d\'équipements numériques, assure l\'optimisation de la matière.',
        },
        {
          title: 'Couturier(ère) polyvalent(e)',
          description:
            'Assemble les pièces selon les instructions techniques, maîtrise plusieurs types de machines.',
        },
        {
          title: 'Contrôleur(se) qualité',
          description:
            'Vérifie la conformité des produits à chaque étape de la production et en fin de chaîne.',
        },
      ],
    },
    blog: {
      title: 'Blog & actualités',
      intro:
        'Découvrez nos actualités : participation aux salons professionnels, innovations en matière de matériaux et de process, nouvelles certifications.',
      posts: [
        {
          title: 'Frantex au salon Interfilière Paris 2024',
          description: 'Retour sur notre présence au rendez‑vous incontournable de la lingerie et du swimwear.',
          date: '2024-01-15',
        },
        {
          title: 'Nouveau parc machines de découpe automatisée',
          description: 'Nous investissons dans des équipements de pointe pour améliorer la précision et réduire les délais.',
          date: '2024-03-02',
        },
        {
          title: 'Collection éco‑responsable en matières recyclées',
          description: 'Zoom sur nos développements utilisant des tissus recyclés certifiés Oeko‑Tex®.',
          date: '2024-05-20',
        },
      ],
    },
    contact: {
      title: 'Contact',
      intro:
        'Pour toute demande de devis, d\'information ou de collaboration, n\'hésitez pas à nous contacter via le formulaire ci‑dessous ou aux coordonnées indiquées.',
      address: 'Route de Sousse GP1\nM\'Saken 4070, Sousse, Tunisie',
      phones: ['+216 28 402 518', '+216 73 312 033', '+216 73 312 034'],
      email: 'reception_frantex@outlook.fr',
      form: {
        name: 'Nom complet',
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        email: 'Email',
        phone: 'Téléphone',
        productType: 'Type de produit (maillot, lingerie…)',
        quantity: 'Quantité estimée',
        attachment: 'Fichier technique (PDF, facultatif)',
        message: 'Votre message',
        submit: 'Envoyer',
      },
    },
    legal: {
      title: 'Mentions légales',
      content:
        'Ce site est édité par Frantex International Fashion. Siège social : Route de Sousse GP1, M\'Saken 4070, Sousse, Tunisie. Directeur de la publication : Hedi Khedher. Hébergeur : Vercel. Pour plus d\'informations sur notre politique de confidentialité et la gestion des cookies, veuillez consulter les pages dédiées.',
    },
    faq: [
      {
        question: 'Quel est le minimum de commande (MOQ) ?',
        answer: 'Les quantités minimales de commande commencent généralement à 500 pièces par modèle et par couleur. Selon la complexité du produit, ce seuil peut être ajusté.',
      },
      {
        question: 'Quels sont les délais de production ?',
        answer: 'Après validation des prototypes, le délai moyen de production est de 6 à 8 semaines. Les échantillons sont généralement réalisés sous 3 semaines.',
      },
      {
        question: 'Proposez‑vous des échantillons ?',
        answer: 'Oui, nous réalisons des prototypes et des échantillons afin de valider les matières, les coupes et les finitions avant le lancement de la production.',
      },
      {
        question: 'Comment garantissez‑vous la confidentialité des projets ?',
        answer: 'Nous travaillons régulièrement sous accords de non‑divulgation (NDA) et mettons en place des procédures internes strictes pour protéger vos informations et designs.',
      },
      {
        question: 'Quels incoterms proposez‑vous ?',
        answer: 'Nous proposons principalement les incoterms EXW Tunisie et FOB Sousse. D\'autres modalités peuvent être étudiées sur demande.',
      },
      {
        question: 'Livrez‑vous à l\'international ?',
        answer: 'Oui, nous expédions nos productions à l\'international. Nos équipes logistiques vous accompagnent dans l\'organisation du transport et des formalités douanières.',
      },
    ],
  },
  en: {
    siteName: 'Frantex International Fashion',
    originBanner: 'Made in Tunisia – French management',
    nav: [
      { slug: '', title: 'Home' },
      { slug: 'savoir-faire', title: 'Know‑how' },
      { slug: 'produits', title: 'Products' },
      { slug: 'qualite', title: 'Quality' },
      { slug: 'capacite', title: 'Capacity' },
      { slug: 'rse', title: 'CSR & Sustainability' },
      { slug: 'references', title: 'References' },
      { slug: 'carriere', title: 'Careers' },
      { slug: 'blog', title: 'Blog' },
      { slug: 'contact', title: 'Contact' },
    ],
    cta: 'Tell us about your project',
    home: {
      heroHeadline:
        'Swimwear & lingerie manufacturing in Tunisia',
      heroSubHeadline:
        'Frantex International Fashion designs and manufactures your swimwear and lingerie collections from its factory in M\'Saken. Our Franco‑Tunisian team combines textile expertise, responsiveness and strict quality assurance to meet the requirements of international brands. From design to packing, trust us to provide end‑to‑end support for your project.',
      sections: [
        {
          title: 'Complete know‑how',
          text: 'Pattern making & prototyping, automated cutting, sewing & assembly, quality control, packing and logistics: we master every stage in creating a textile product.',
        },
        {
          title: 'Tailored products',
          text: 'One‑piece swimsuits, bikinis, lingerie: we develop styles tailored to your specifications and brand identity.',
        },
        {
          title: 'Quality and flexibility',
          text: 'Strict control processes, controlled lead times and the ability to adapt to small or large series ensure the success of your projects.',
        },
      ],
      stats: [
        { label: 'Production lines', value: '6' },
        { label: 'Team members', value: '200+' },
        { label: 'Monthly capacity', value: '50k pieces' },
        { label: 'Lead times', value: '6–8 weeks' },
      ],
    },
    knowHow: {
      title: 'Our know‑how',
      sections: [
        {
          title: 'Design & prototyping',
          text: 'Our design office supports your creation process: design, pattern making, grading and rapid prototyping to validate shapes and assemblies.',
        },
        {
          title: 'Cutting',
          text: 'Our cutting room is equipped with digital systems to optimise fabric utilisation and ensure maximum precision.',
        },
        {
          title: 'Sewing & assembly',
          text: 'Workshops fitted with overlock, coverstitch and other specialised machines are operated by experienced seamstresses for perfect assembly.',
        },
        {
          title: 'Quality control',
          text: 'In‑line and final inspections guarantee compliance with your specifications and complete traceability.',
        },
        {
          title: 'Packing & logistics',
          text: 'Packing to your specifications, labelling and international shipping under EXW or FOB incoterms.',
        },
      ],
    },
    products: {
      title: 'Products & expertise',
      intro:
        'We manufacture one‑piece swimsuits, bikinis, boardshorts and all types of lingerie for women and men (bras, briefs, bralettes).',
      details:
        'Our expertise covers cut‑and‑sew on knit and jersey, assembly of complex materials and the addition of accessories such as cups, underwires, elastics, prints and embroidery.',
      options:
        'We use certified Oeko‑Tex® fabrics, including recycled materials. Minimum order quantities start from 500 pieces per style and colour. Average lead time is 6 to 8 weeks after sample approval.',
    },
    quality: {
      title: 'Quality & compliance',
      description:
        'Quality is at the heart of our organisation. We apply stringent controls at each stage: fabric inspection, in‑process control, final inspection on 100% of pieces. Each production is tracked via a batch number. We comply with European regulations (REACH) and the standards requested by our clients (AZO free, nickel free). Regular audits by external bodies ensure our social and environmental compliance.',
    },
    capacity: {
      title: 'Industrial capacity',
      description:
        'Our factory in M\'Saken has 6 modular production lines and over 200 skilled employees. Equipment: CAD software for pattern making, automatic cutting machines, 80 specialised sewing machines, presses and finishing equipment. Monthly capacity: up to 50,000 pieces depending on model complexity. Standard lead times: prototypes in 3 weeks, production in 6 to 8 weeks. Offered incoterms: EXW Tunisia, FOB Sousse.',
    },
    sustainability: {
      title: 'CSR & sustainability',
      description:
        'Frantex International Fashion is committed to responsible production. We ensure respect for workers’ rights (safe working conditions, compliant hours), promote continuous training and equal opportunities. Environmentally, we optimise material usage, recycle fabric offcuts and invest in energy‑efficient equipment. We develop collections using recycled materials to reduce our carbon footprint.',
    },
    references: {
      title: 'References & case studies',
      description:
        'For confidentiality reasons we cannot display the brands we work with. We carry out bespoke projects for European and international swimwear and lingerie brands. On request and under NDA, we can present references and case studies demonstrating our know‑how and flexibility.',
    },
    careers: {
      title: 'Careers',
      intro:
        'Join a growing company! We regularly recruit cutting operators, specialised seamstresses, quality controllers and administrative profiles. We offer continuous training and a respectful work environment. See our job offers below or send an open application.',
      jobs: [
        {
          title: 'Pattern technician',
          description:
            'Responsible for creating patterns and grading in collaboration with the design office and clients.',
        },
        {
          title: 'Cutting operator',
          description:
            'Prepares and cuts fabrics using digital equipment and ensures material optimisation.',
        },
        {
          title: 'Multi‑skilled seamstress',
          description:
            'Assembles pieces according to technical instructions and masters several types of machines.',
        },
        {
          title: 'Quality controller',
          description:
            'Checks product conformity at each stage of production and on the final line.',
        },
      ],
    },
    blog: {
      title: 'Blog & news',
      intro:
        'Discover our news: participation in trade shows, innovations in materials and processes, new certifications.',
      posts: [
        {
          title: 'Frantex at the Interfilière Paris 2024 trade show',
          description:
            'A recap of our presence at the must‑attend lingerie and swimwear event.',
          date: '2024-01-15',
        },
        {
          title: 'New automated cutting equipment',
          description:
            'We invest in state‑of‑the‑art equipment to improve precision and reduce lead times.',
          date: '2024-03-02',
        },
        {
          title: 'Eco‑friendly collection using recycled materials',
          description:
            'A closer look at our developments using Oeko‑Tex® certified recycled fabrics.',
          date: '2024-05-20',
        },
      ],
    },
    contact: {
      title: 'Contact',
      intro:
        'For any quotation, information or collaboration request, please contact us via the form below or using the details provided.',
      address: 'Route de Sousse GP1\nM\'Saken 4070, Sousse, Tunisia',
      phones: ['+216 28 402 518', '+216 73 312 033', '+216 73 312 034'],
      email: 'reception_frantex@outlook.fr',
      form: {
        name: 'Full name',
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email',
        phone: 'Phone number',
        productType: 'Product type (swimwear, lingerie…)',
        quantity: 'Estimated quantity',
        attachment: 'Technical file (PDF, optional)',
        message: 'Your message',
        submit: 'Send',
      },
    },
    legal: {
      title: 'Legal notice',
      content:
        'This site is published by Frantex International Fashion. Registered office: Route de Sousse GP1, M\'Saken 4070, Sousse, Tunisia. Publication director: Hedi Khedher. Hosting: Vercel. For more information on our privacy policy and cookie management, please consult the dedicated pages.',
    },
    faq: [
      {
        question: 'What is the minimum order quantity (MOQ)?',
        answer: 'Minimum order quantities generally start at 500 pieces per style and colour. Depending on product complexity, this threshold can be adjusted.',
      },
      {
        question: 'What are your lead times?',
        answer: 'After sample approval, the average production lead time is 6 to 8 weeks. Samples are usually made within 3 weeks.',
      },
      {
        question: 'Do you provide samples?',
        answer: 'Yes, we make prototypes and samples to validate materials, shapes and finishes before launching production.',
      },
      {
        question: 'How do you ensure project confidentiality?',
        answer: 'We regularly work under non‑disclosure agreements (NDA) and implement strict internal procedures to protect your information and designs.',
      },
      {
        question: 'Which incoterms do you offer?',
        answer: 'We mainly offer EXW Tunisia and FOB Sousse. Other terms can be discussed on request.',
      },
      {
        question: 'Do you deliver internationally?',
        answer: 'Yes, we ship our production worldwide. Our logistics teams support you in organising transport and customs formalities.',
      },
    ],
  },
};