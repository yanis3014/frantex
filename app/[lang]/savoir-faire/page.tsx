import Image from "next/image";
import Section from "../../../components/Section";
import ScrollReveal from "../../../components/ScrollReveal";
import { content, Locale } from "../../../lib/content";

// !! IMPORTANT !!
// 1. Assurez-vous que votre image 'fond frantex.jpg' est dans le dossier /public
// 2. Assurez-vous qu'elle est renommée 'fond-frantex.jpg' (avec un tiret)

interface PageProps {
  params: { lang: Locale };
}

/**
 * Page Savoir-faire améliorée avec une timeline dynamique
 * et un arrière-plan artistique pour la section timeline.
 */
export default function SavoirFairePage({ params }: PageProps) {
  const locale = params.lang;
  const knowHow = content[locale].knowHow;
  return (
    <div>
      {/* 1. Section d'introduction (sur le fond blanc normal du site) */}
      <Section title={knowHow.title} text={knowHow.intro} />

      {/* 2. Section Timeline (avec le fond artistique) */}
      {/* Ce conteneur isole l'arrière-plan du reste de la page */}
      <div className="relative overflow-hidden py-12 md:py-16">
        {/* Arrière-plan flouté et artistique */}
        <Image
          src="/fond-frantex.jpg" // Chemin URL direct depuis le dossier /public
          alt="Arrière-plan Frantex"
          layout="fill"
          objectFit="cover"
          className="-z-10 blur-lg opacity-20" // Opacité réduite pour la subtilité
          priority
        />

        {/* Conteneur de la Timeline */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative">
            {/* La ligne verticale de la timeline */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-primary/30 rounded -z-0" />

            {/* Boucle sur les étapes */}
            {knowHow.sections.map((sec, index) => (
              <ScrollReveal key={sec.title} delay={index * 0.1}>
                <div className="relative mb-12">
                  {/* Le point numéroté sur la timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold ring-8 ring-neutral-50">
                    {index + 1}
                  </div>

                  {/* CORRECTION DU LAYOUT : 
                    J'ai supprimé 'md:w-1/2' qui causait le bug d'écrasement.
                    Le padding suffit maintenant à définir la largeur.
                  */}
                  <div
                    className={`relative pt-1 pl-12 md:pl-0 ${
                      index % 2 === 0
                        ? "md:pl-[calc(50%+2rem)]" // Côté droit
                        : "md:pr-[calc(50%+2rem)]" // Côté gauche
                    }`}
                  >
                    {/* La carte de contenu */}
                    <div
                      className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-neutral-200/50 flex flex-col ${
                        index % 2 !== 0
                          ? "md:items-end md:text-right" // Côté gauche : aligne le texte à droite
                          : "" // Côté droit : alignement par défaut (gauche)
                      }`}
                    >
                      <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                        {sec.title}
                      </h3>
                      <p className="text-neutral-700 text-sm">{sec.text}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
