import Image from "next/image"; // Si vous utilisez des images dans les étapes, sinon à retirer
import ScrollReveal from "./ScrollReveal";
import { content, Locale } from "../lib/content";

export default function HomeSteps({ locale }: { locale: Locale }) {
  const c = content[locale].home;

  return (
    <section className="bg-white py-16 md:py-20 text-blue-950">
      {" "}
      {/* Changé ici */}
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950">
            {" "}
            {/* Changé ici */}
            {c.stepsTitle}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-blue-800">
            {" "}
            {/* Changé ici */}
            {c.stepsSubtitle}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                {" "}
                {/* Fond de carte léger */}
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md mb-4">
                  {/* Remplacez ceci par un composant Video si vous avez des vidéos, ou par Image pour des images */}
                  {/* Pour l'instant, je mets un placeholder si les vidéos ne sont pas encore gérées */}
                  {step.videoSrc ? (
                    <video
                      src={step.videoSrc}
                      // --- MODIFICATIONS ICI ---
                      // 'controls' A ÉTÉ SUPPRIMÉ
                      muted
                      autoPlay
                      loop
                      playsInline // Ajouté pour iOS
                      className="w-full h-full object-cover pointer-events-none" // Ajouté pour bloquer le clic
                      // -------------------------
                    ></video>
                  ) : (
                    <div className="w-full h-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
                      Vidéo ou Image Placeholder
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mt-2">
                  {" "}
                  {/* Changé ici */}
                  {step.title}
                </h3>
                <p className="mt-2 text-blue-700">
                  {" "}
                  {/* Changé ici */}
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
