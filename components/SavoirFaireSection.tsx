import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";
import { content, Locale } from "../lib/content"; // Importer
import {
  CheckBadgeIcon,
  TruckIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

// Les icônes restent ici, elles ne vont pas dans le JSON
const icons = [
  CheckBadgeIcon,
  TruckIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  DocumentTextIcon,
];

// Accepter 'locale'
export default function SavoirFaireSection({ locale }: { locale: Locale }) {
  const c = content[locale].home; // Récupérer le contenu
  const points = c.whyPoints; // Récupérer les points

  return (
    <section
      id="savoirfaire"
      className="relative isolate overflow-hidden py-16 md:py-24"
    >
      <Image
        src="/tissus-frantex.jpg"
        alt="Tissus Frantex en arrière-plan"
        layout="fill"
        objectFit="cover"
        className="-z-10  scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-slate-950/40 -z-10"
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {c.whyTitle} {/* Texte dynamique */}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <p className="mt-4 text-slate-300 text-lg">
                {c.whySubtitle} {/* Texte dynamique */}
              </p>
              <p className="mt-3 text-slate-300">
                {c.whyP1} {/* Texte dynamique */}
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            {points.map((p, i) => {
              const Icon = icons[i]; // Associer l'icône par index
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-4">
                    <Icon
                      className="w-8 h-8 text-white flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {p.title} {/* Texte dynamique */}
                      </h3>
                      <p className="text-slate-300 text-sm">
                        {p.desc} {/* Texte dynamique */}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
