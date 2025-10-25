"use client";
import Image from "next/image";
import Section from "../../../components/Section";
import StatsBlock from "../../../components/Stats"; // Importer StatsBlock
import { content, Locale } from "../../../lib/content";
import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  ScissorsIcon,
  CpuChipIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";

interface PageProps {
  params: { lang: Locale };
}

// Icônes pour les équipements
const equipmentIcons = [
  ComputerDesktopIcon,
  ScissorsIcon,
  CpuChipIcon,
  ArchiveBoxIcon,
];

// Variants d'animation
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariant = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10, delay },
  },
});

/**
 * Page Capacité - Design amélioré
 */
export default function CapacitePage({ params }: PageProps) {
  const locale = params.lang;
  const capacity = content[locale].capacity;
  return (
    <div>
      {/* 1. Section d'introduction */}
      <Section title={capacity.title} text={capacity.intro} />

      {/* 2. Section Équipements (la partie créative & esthétique) */}
      <div className="relative isolate overflow-hidden py-16 md:py-24">
        {/* Fond avec l'image de tissu floutée */}
        <Image
          src="/tissus-frantex.jpg" // Assurez-vous que cette image est dans /public
          alt="Tissus Frantex"
          layout="fill"
          objectFit="cover"
          className="-z-10  "
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
            {capacity.equipmentsTitle}
          </motion.h2>

          {/* Grille 2x2 des équipements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capacity.equipments.map((item, index) => {
              const Icon = equipmentIcons[index % equipmentIcons.length];
              return (
                <motion.div
                  key={item.title}
                  className="flex items-start p-6 bg-white rounded-xl shadow-xl border border-neutral-200/70"
                  variants={itemVariant(index * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Icon className="w-10 h-10 text-primary flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-primary-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-700">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Section Chiffres Clés (avec le composant StatsBlock) */}
      <Section title={capacity.statsTitle}>
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* On passe les nouvelles stats de "capacity" au composant */}
          <StatsBlock stats={capacity.stats} />
        </motion.div>
      </Section>
    </div>
  );
}
