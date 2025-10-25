"use client";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { content, Locale } from "../lib/content"; // Importer

// Accepter 'locale'
export default function Hero({ locale }: { locale: Locale }) {
  const c = content[locale].home; // Récupérer le contenu

  return (
    <section className="relative isolate overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
      <Image
        src="/fond-hero-frantex.jpg" // (Assurez-vous que c'est le bon chemin)
        alt="Arrière-plan Frantex"
        layout="fill"
        objectFit="cover"
        className="-z-10"
        priority
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-slate-950/40 -z-10"
      />

      <div className="relative px-4 grid md:grid-cols-1 gap-8 items-center">
        <div className="max-w-xl">
          <ScrollReveal delay={0.05}>
            <h1 className="mt-4 text-4xl md:text-[3.5rem] font-extrabold leading-[1.02] text-white whitespace-nowrap">
              {c.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            {/* PARAGRAPHE 1 RECONSTRUIT AVEC STYLE */}
            <p className="mt-4 text-lg md:text-xl text-slate-300 leading-relaxed">
              {c.heroP1_part1}
              {/* Le 'bleu' et 'un peu gros' que vous vouliez */}
              <span className="font-semibold text-primary-light md:text-2xl">
                {c.heroP1_highlight}
              </span>
              {c.heroP1_part2}
            </p>

            {/* PARAGRAPHE 2 RECONSTRUIT AVEC STYLE */}
            <p className="mt-4 text-lg md:text-xl text-slate-300 leading-relaxed">
              {c.heroP2_part1}
              {/* Le 'accent-dark' et 'un peu gros' que vous vouliez */}
              <span className="font-semibold text-accent-dark md:text-2xl">
                {c.heroP2_highlight}
              </span>
              {c.heroP2_part2}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
