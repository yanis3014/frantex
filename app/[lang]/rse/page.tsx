import Section from '../../../components/Section';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * CSR & sustainability page summarising our commitments to social and
 * environmental responsibility.
 */
export default function RsePage({ params }: PageProps) {
  const locale = params.lang;
  const sustainability = content[locale].sustainability;
  return (
    <div>
      <Section title={sustainability.title} text={sustainability.description} />
    </div>
  );
}