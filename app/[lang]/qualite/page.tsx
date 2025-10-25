import Section from '../../../components/Section';
import FAQ from '../../../components/FAQ';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * Quality & compliance page. It summarises our quality process and
 * compliance commitments, then displays a FAQ relevant to quality
 * questions. You could enhance this page by adding icons or a
 * timeline illustrating the process.
 */
export default function QualitePage({ params }: PageProps) {
  const locale = params.lang;
  const quality = content[locale].quality;
  return (
    <div>
      <Section title={quality.title} text={quality.description} />
      {/* Frequently asked questions relevant to quality */}
      <Section
        title={locale === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
      >
        <FAQ locale={locale} />
      </Section>
    </div>
  );
}