import Section from '../../../components/Section';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * Capacity page presenting information about the industrial means and
 * capacity of the factory. In future you could add an interactive
 * timeline or chart to visualise the capacity growth.
 */
export default function CapacitePage({ params }: PageProps) {
  const locale = params.lang;
  const capacity = content[locale].capacity;
  return (
    <div>
      <Section title={capacity.title} text={capacity.description} />
    </div>
  );
}