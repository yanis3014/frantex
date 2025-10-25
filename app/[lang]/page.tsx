import Hero from "../../components/Hero";
// import ProductsSection from "../../components/ProductsSection"; // <-- Supprimé (ou commenté)
import SavoirFaireSection from "../../components/SavoirFaireSection";
import CtaSection from "../../components/CtaSection";
import HomeSteps from "../../components/HomeSteps"; // Assurez-vous que cet import est là
import { Locale } from "../../lib/content";

interface PageProps {
  params: { lang: Locale };
}

export default async function HomePage({ params }: PageProps) {
  const locale = params.lang;

  return (
    // J'ai mis HomeSteps après Hero, mais vous pouvez le placer où vous préférez
    <main className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <Hero locale={locale} />
      <HomeSteps locale={locale} />
      {/* <ProductsSection locale={locale} /> */}{" "}
      {/* <-- Ligne supprimée (ou commentée) */}
      <SavoirFaireSection locale={locale} />
      <CtaSection locale={locale} />
    </main>
  );
}
