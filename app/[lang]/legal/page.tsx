import Section from '../../../components/Section';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * Legal notice page. Displays static legal information.
 */
export default function LegalPage({ params }: PageProps) {
  const locale = params.lang;
  const legal = content[locale].legal;
  return (
    <div>
      <Section title={legal.title} text={legal.content} />
    </div>
  );
}