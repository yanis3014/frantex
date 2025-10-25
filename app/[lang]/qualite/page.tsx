"use client";
import Image from "next/image";
import Section from "../../../components/Section";
import FAQ from "../../../components/FAQ";
import { content, Locale } from "../../../lib/content";
import { motion, Variants } from "framer-motion"; // MODIFICATION 1: Ajout de 'Variants'
import {
  ListBulletIcon,
  BeakerIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

interface PageProps {
  params: { lang: Locale };
}

// Icônes pour les engagements
const commitmentIcons = [ListBulletIcon, BeakerIcon, BuildingLibraryIcon];

// Variants d'animation
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// MODIFICATION 2: Typer explicitement la fonction pour retourner 'Variants'
const itemVariant = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10, delay },
  },
});

/**
 * Page Qualité & Conformité - Design amélioré
 */
export default function QualitePage({ params }: PageProps) {
  // ... (reste du code inchangé)
  const locale = params.lang;
  const quality = content[locale].quality;
  return (
    <div>
      {/* 1. Section d'introduction (avec le nouveau texte d'intro) */}
      <Section title={quality.title} text={quality.intro} />

      {/* 2. Section Processus (la partie créative & esthétique) */}
      <div className="relative isolate overflow-hidden py-16 md:py-24">
        {/* Fond avec l'image de tissu floutée */}
        <Image
          src="/tissus-frantex.jpg" // Assurez-vous que cette image est dans /public
          alt="Tissus Frantex"
          layout="fill"
          objectFit="cover"
          className="-z-10 "
        />
        {/* Superposition claire pour la lisibilité */}
        <div className="absolute inset-0 bg-white/30 -z-10" />

        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-serif font-semibold text-primary text-center mb-12"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {quality.processTitle}
          </motion.h2>

          {/* Timeline horizontale */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Ligne de connexion (pour desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2 -z-0" />

            {quality.steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-xl border border-neutral-200/70"
                variants={itemVariant(index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Section Engagements (grille avec icônes) */}
      <Section title={quality.commitmentsTitle}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {quality.commitments.map((item, index) => {
            const Icon = commitmentIcons[index % commitmentIcons.length];
            return (
              <motion.div
                key={item.title}
                className="text-center p-6 bg-white rounded-lg shadow-lg border border-neutral-200/60"
                variants={itemVariant(index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-serif font-semibold text-primary-dark mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 4. Section FAQ (inchangée) */}
      <Section
        title={
          locale === "fr"
            ? "Questions fréquentes"
            : "Frequently asked questions"
        }
      >
        <FAQ locale={locale} />
      </Section>
    </div>
  );
}
