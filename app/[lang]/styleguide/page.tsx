import Hero from "../../../components/Hero";
import Section from "../../../components/Section";
import StatsBlock from "../../../components/Stats";
import JobList from "../../../components/JobList";
import PostList from "../../../components/PostList";
import FAQ from "../../../components/FAQ";
import { content, Locale } from "../../../lib/content";

interface PageProps {
  params: { lang: Locale };
}

/**
 * Styleguide page demonstrating the main reusable components and
 * design tokens. Designers and developers can reference this page
 * during development to ensure consistency across the site.
 */
export default function StyleguidePage({ params }: PageProps) {
  const locale = params.lang;
  // MODIFICATION 1: On accède au contenu 'capacity' qui contient maintenant les stats
  const { home, capacity } = content[locale];

  return (
    <div>
      <Section title="Styleguide">
        <p className="text-neutral-600 mb-4">
          {locale === "fr"
            ? "Cette page présente les composants et styles utilisés sur le site."
            : "This page showcases the components and styles used on the site."}
        </p>
        <h3 className="font-serif text-xl text-primary mt-8 mb-2">Couleurs</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { name: "primary", color: "#0A355C" },
            { name: "primary-light", color: "#264D73" },
            { name: "primary-dark", color: "#062042" },
            { name: "accent", color: "#C4312F" },
            { name: "accent-light", color: "#D94A4A" },
            { name: "accent-dark", color: "#842122" },
          ].map(({ name, color }) => (
            <div key={name} className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-md"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs mt-1">{name}</span>
            </div>
          ))}
        </div>
        <h3 className="font-serif text-xl text-primary mt-8 mb-2">
          Typographie
        </h3>
        <p className="font-serif text-2xl mb-2">Heading Serif 2xl</p>
        <p className="font-sans text-lg mb-6">Body Sans lg</p>
        <h3 className="font-serif text-xl text-primary mt-8 mb-2">Bouton</h3>
        <button className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition-colors">
          {locale === "fr" ? "Bouton" : "Button"}
        </button>
        <h3 className="font-serif text-xl text-primary mt-8 mb-2">Hero</h3>
        {/* Le composant Hero est maintenant appelé correctement */}
        <Hero locale={locale} />
        <h3 className="font-serif text-xl text-primary mt-8 mb-2">
          StatsBlock
        </h3>
        {/* MODIFICATION 2: On passe capacity.stats à la place de home.stats */}
        <StatsBlock stats={capacity.stats} />
        <h3 className="font-serif text-xl text-primary mt-8 mb-2">JobList</h3>
        <JobList locale={locale} />
        <h3 className="font-serif text-xl text-primary mt-8 mb-2">PostList</h3>
        <PostList locale={locale} />
        <h3 className="font-serif text-xl text-primary mt-8 mb-2">FAQ</h3>
        <FAQ locale={locale} />
      </Section>
    </div>
  );
}
