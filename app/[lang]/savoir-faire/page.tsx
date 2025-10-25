import Section from '../../../components/Section';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * Know‑how page detailing the different stages of our manufacturing
 * process. Each sub‑section is rendered using the generic Section
 * component for consistent styling.
 */
export default function SavoirFairePage({ params }: PageProps) {
  const locale = params.lang;
  const knowHow = content[locale].knowHow;
  return (
    <div>
      <Section title={knowHow.title} />
      {knowHow.sections.map((sec) => (
        <Section key={sec.title} title={sec.title} text={sec.text} />
      ))}
    </div>
  );
}