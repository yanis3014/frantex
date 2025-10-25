import ScrollReveal from "./ScrollReveal";
import { content, Locale } from "../lib/content";

// Accepter 'locale'
export default function CtaSection({ locale }: { locale: Locale }) {
  const c = content[locale].cta; // Récupérer le contenu

  return (
    // J'ai vérifié et retiré les '*/' invalides des lignes ci-dessous
    <section id="contact" className="bg-white py-16 md:py-20 text-blue-950">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center rounded-3xl border border-blue-200 p-[1px] shadow-lg">
            <div className="rounded-3xl bg-white px-6 py-10">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-950">
                {c.title}
              </h3>
              <p className="mt-2 text-blue-800">{c.subtitle}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-blue-700/60 px-4 py-2 font-semibold hover:bg-blue-600/60 transition text-white"
                  href={c.btn1href}
                >
                  {c.btn1}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-blue-700/60 px-4 py-2 font-semibold hover:bg-blue-600/60 transition text-white"
                  href={c.btn2href}
                >
                  {c.btn2}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
