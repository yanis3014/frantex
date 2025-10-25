"use client";
import Image from "next/image";
import Section from "../../../components/Section";
import CtaSection from "../../../components/CtaSection";
import { content, Locale } from "../../../lib/content";
import { motion, Variants } from "framer-motion"; // <-- MODIFICATION 1 : Ajout de Variants
// 2. Importer les nouvelles icônes
import {
  ScissorsIcon,
  SparklesIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  ScaleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

interface PageProps {
  params: { lang: Locale };
}

// Variant pour les images
const imageVariant: Variants = {
  // <-- MODIFICATION 2 : Typage en Variants
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    // MODIFICATION 3 : Remplacement de 'ease: "easeOut"' par une courbe de Bézier (standard pour easeOut)
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Variant pour le texte
const textVariant: Variants = {
  // <-- MODIFICATION 4 : Typage en Variants
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    // MODIFICATION 5 : Remplacement de 'ease: "easeOut"'
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 },
  },
};

/**
 * Page Produits & Expertise - Design Avancé
 */
export default function ProduitsPage({ params }: PageProps) {
  const locale = params.lang;
  const productsContent = content[locale].products;

  // Les 4 produits (inchangé)
  const productImages = [
    {
      src: "/assets/products/maillot-feminin.jpg",
      alt: "Maillot de bain féminin",
      title: locale === "fr" ? "Lignes Féminines" : "Women's Collection",
      desc:
        locale === "fr"
          ? "Confection de maillots de bain aux coupes élégantes et confortables, mettant en valeur la silhouette."
          : "Crafting swimsuits with elegant and comfortable cuts, enhancing the silhouette.",
    },
    {
      src: "/assets/products/maillot-masculin.jpg",
      alt: "Maillot de bain masculin",
      title: locale === "fr" ? "Maillots Masculins" : "Men's Swimwear",
      desc:
        locale === "fr"
          ? "Des shorts de bain et maillots conçus pour la performance et le style, avec une résistance accrue."
          : "Swim shorts and suits designed for performance and style, with enhanced durability.",
    },
    {
      src: "/assets/products/veste-sport.jpg",
      alt: "Veste de sport",
      title: locale === "fr" ? "Vêtements de Sport" : "Sportswear",
      desc:
        locale === "fr"
          ? "Spécialisés dans les tissus techniques pour des vêtements de sport qui optimisent le mouvement et le confort."
          : "Specializing in technical fabrics for sportswear that optimizes movement and comfort.",
    },
    {
      src: "/assets/products/sous-vetements.jpg",
      alt: "Sous-vêtements",
      title: locale === "fr" ? "Confort Intime" : "Intimate Apparel",
      desc:
        locale === "fr"
          ? "Développement de sous-vêtements alliant douceur, maintien et durabilité pour un bien-être au quotidien."
          : "Developing underwear combining softness, support, and durability for everyday comfort.",
    },
  ];

  // 3. Contenu pour la section "Expertise" (basé sur lib/content.ts)
  const expertiseItems = [
    {
      icon: ScissorsIcon,
      title: "Coupe-cousu de précision",
      desc: "Maîtrise parfaite de la coupe-cousu sur maille et jersey pour des lignes impeccables.",
    },
    {
      icon: SparklesIcon,
      title: "Matières complexes",
      desc: "Assemblage et travail de matières techniques et délicates (recyclées, texturées, etc.).",
    },
    {
      icon: CheckBadgeIcon,
      title: "Accessoires & Finitions",
      desc: "Intégration soignée de bonnets, armatures, élastiques, imprimés et broderies sur mesure.",
    },
  ];

  // 4. Contenu pour la section "Modalités" (basé sur lib/content.ts)
  const modaliteItems = [
    {
      icon: GlobeAltIcon,
      title: "Tissus certifiés",
      desc: "Nous travaillons avec des tissus certifiés Oeko-Tex® et des matières recyclées pour une mode plus durable.",
    },
    {
      icon: ScaleIcon,
      title: "Quantités flexibles",
      desc: "Nos quantités minimales (MOQ) débutent à 500 pièces par modèle et couleur, avec une grande adaptabilité.",
    },
    {
      icon: CalendarDaysIcon,
      title: "Délais maîtrisés",
      desc: "Comptez un délai moyen de 6 à 8 semaines après la validation finale de vos prototypes.",
    },
  ];

  return (
    <div>
      {/* Section Titre & Introduction (inchangée) */}
      <Section title={productsContent.title} text={productsContent.intro} />

      {/* 5. NOUVELLES SECTIONS PRODUITS ALTERNÉES */}
      <div className="py-12 md:py-16 space-y-16 md:space-y-24">
        {productImages.map((product, index) => (
          <div
            key={product.title}
            className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Image */}
            <motion.div
              className={`rounded-xl overflow-hidden shadow-2xl ${
                index % 2 === 0 ? "" : "md:order-last" // Alterne l'ordre
              }`}
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={600}
                height={700} // Format plus vertical
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Texte */}
            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-3xl font-serif font-semibold text-primary mb-4">
                {product.title}
              </h3>
              <p className="text-lg text-neutral-700">{product.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* 6. NOUVELLE SECTION EXPERTISE (AVEC ICÔNES) */}
      <Section
        title={
          locale === "fr" ? "Expertise et Finitions" : "Expertise & Finishes"
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {expertiseItems.map((item) => (
            <motion.div
              key={item.title}
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-neutral-200/60"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-serif font-semibold text-primary-dark mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. NOUVELLE SECTION MODALITÉS (AVEC ICÔNES) */}
      <Section
        title={locale === "fr" ? "Options & Modalités" : "Options & Modalities"}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {modaliteItems.map((item) => (
            <motion.div
              key={item.title}
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-neutral-200/60"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-serif font-semibold text-primary-dark mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 8. APPEL À L'ACTION */}
      <CtaSection locale={locale} />
    </div>
  );
}
