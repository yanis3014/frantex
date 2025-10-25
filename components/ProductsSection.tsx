import ScrollReveal from "../components/ScrollReveal";
import { content, Locale } from "../lib/content"; // Importer

// Accepter 'locale'
export default function ProductsSection({ locale }: { locale: Locale }) {
  const c = content[locale].home; // Récupérer le contenu

  return (
    <section id="produits" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white ">
            {c.stepsTitle} {/* Texte dynamique */}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <p className="mt-2 text-slate-300">
            {c.stepsSubtitle} {/* Texte dynamique */}
          </p>
        </ScrollReveal>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.steps.map(
            (
              it,
              idx // Utiliser 'c.steps'
            ) => (
              <ScrollReveal key={idx} delay={idx * 0.06}>
                <article className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 shadow hover:shadow-xl transition text-white">
                  <video
                    src={it.videoSrc}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="h-56 w-full object-cover"
                  >
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {it.title} {/* Texte dynamique */}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {it.desc} {/* Texte dynamique */}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
