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
        src="/fond-hero-frantex.jpg"
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

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 flex items-center">
        <div className="max-w-2xl ml-8 md:ml-16 lg:ml-24">
          <ScrollReveal delay={0.05}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {c.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-prose">
              {c.heroP1_part1}
              <span className="font-semibold text-primary-light md:text-2xl px-1">
                {c.heroP1_highlight}
              </span>
              {c.heroP1_part2}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
