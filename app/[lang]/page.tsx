import Hero from "../../components/Hero";
import Section from "../../components/Section";
import StatsBlock from "../../components/Stats";
import { content, Locale } from "../../lib/content";

interface PageProps {
  params: { lang: string };
}

// petit type-guard
const isLocale = (x: string): x is Locale => x === "fr" || x === "en";

export default function HomePage({ params }: PageProps) {
  // fallback sûr
  const locale: Locale = isLocale(params.lang) ? params.lang : "fr";

  // on évite de réindexer content partout
  const t = content[locale];
  const homeContent = t.home;

  return (
    <>
      <Hero
        locale={locale}
        headline={homeContent.heroHeadline}
        subHeadline={homeContent.heroSubHeadline}
      />
      <Section
        title={homeContent.sections[0].title}
        text={homeContent.sections[0].text}
      />

      <StatsBlock stats={homeContent.stats} />

      <Section
        title={homeContent.sections[1].title}
        text={homeContent.sections[1].text}
      />
    </>
  );
}
