import Image from 'next/image';
import Section from '../../../components/Section';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * Products & expertise page. It explains what types of products we
 * manufacture and the options available. Decorative illustrations
 * accompany the text to give a visual hint without revealing any
 * confidential designs.
 */
export default function ProduitsPage({ params }: PageProps) {
  const locale = params.lang;
  const products = content[locale].products;
  return (
    <div>
      <Section title={products.title} />
      <Section title="" text={products.intro}>
        {/* Product illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/products-swim.png"
              alt="Illustration maillots de bain"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/products-lingerie.png"
              alt="Illustration lingerie"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>
      <Section title="" text={products.details} />
      <Section title="" text={products.options} />
    </div>
  );
}