import Image from 'next/image';
import Section from '../../../components/Section';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * References page explaining that case studies are available under
 * NDA and presenting a placeholder gallery. In a real project you
 * would fetch actual case studies and client logos here.
 */
export default function ReferencesPage({ params }: PageProps) {
  const locale = params.lang;
  const references = content[locale].references;
  return (
    <div>
      <Section title={references.title} text={references.description} />
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/images/hero-pattern.png"
                alt="Galerie de références"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}