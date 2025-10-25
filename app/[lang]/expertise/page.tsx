import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Section {
  title: string;
  text: string;
}

const content = {
  fr: {
    pageTitle: 'Notre savoir‑faire',
    intro: 'De la créativité à la livraison, Frantex International Fashion maîtrise chaque étape de la confection de maillots de bain et lingerie.',
    sections: [
      {
        title: 'Modélisme & prototypage',
        text: 'Nos modélistes transforment vos dessins en patrons précis. À l\'aide de logiciels CAO et d\'une connaissance approfondie des formes, ils développent des prototypes qui garantissent coupe et ajustement parfaits.',
      },
      {
        title: 'Coupe & préparation',
        text: 'Les pièces sont découpées au laser ou sur tables numériques en minimisant les chutes, conformément à vos spécifications. Cette précision contribue à réduire les déchets tout en respectant les tolérances de production.',
      },
      {
        title: 'Confection & assemblage',
        text: 'Nos opérateurs qualifiés assemblent les pièces avec des coutures renforcées et des points extensibles adaptés aux matières élastiques. Nous intégrons les accessoires (baleines, agrafes, élastiques) en respectant vos exigences.',
      },
      {
        title: 'Contrôle qualité',
        text: 'Chaque série est soumise à des inspections visuelles et à des tests de résistance (traçabilité, tenue des couleurs, résistance au chlore et aux UV) afin de garantir la conformité du produit final.',
      },
      {
        title: 'Emballage & expédition',
        text: 'Les produits sont conditionnés avec soin (sachets individuels, étiquettes, packaging personnalisé) et préparés selon les incoterms convenus. Nous assurons la logistique jusqu’au port ou à l’adresse de votre choix.',
      },
    ],
  },
  en: {
    pageTitle: 'Our expertise',
    intro: 'From creativity to delivery, Frantex International Fashion masters every step of the swimwear and lingerie manufacturing process.',
    sections: [
      {
        title: 'Pattern making & prototyping',
        text: 'Our pattern makers translate your sketches into precise patterns. Using CAD software and a deep understanding of body shapes, they develop prototypes that guarantee perfect fit and drape.',
      },
      {
        title: 'Cutting & preparation',
        text: 'Pieces are cut using laser or digital tables while minimising waste in line with your specifications. This accuracy helps reduce fabric offcuts and respects production tolerances.',
      },
      {
        title: 'Sewing & assembly',
        text: 'Our skilled operators assemble each piece using reinforced seams and stretch stitches suited to elastic materials. We integrate accessories (underwires, clasps, elastics) according to your requirements.',
      },
      {
        title: 'Quality control',
        text: 'Every batch undergoes visual inspections and strength tests (traceability, colour fastness, resistance to chlorine and UV) to ensure the final product meets specifications.',
      },
      {
        title: 'Packing & shipping',
        text: 'Products are carefully packaged (individual bags, labels, custom packaging) and prepared according to agreed incoterms. We manage logistics up to the port or to your address.',
      },
    ],
  },
};

export default function ExpertisePage({ params }: { params: { lang: 'fr' | 'en' } }) {
  const { lang } = params;
  const page = content[lang];
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-4">{page.pageTitle}</h1>
        <p className="text-lg mb-8">{page.intro}</p>
        <div className="space-y-8">
          {page.sections.map((section: Section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-serif mb-2">{section.title}</h2>
              <p className="text-base leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}