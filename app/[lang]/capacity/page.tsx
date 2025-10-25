import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CapacityPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-4">{isFr ? 'Capacité industrielle' : 'Industrial capacity'}</h1>
        <p className="text-lg leading-relaxed mb-6">
          {isFr
            ? 'Notre usine compte 200 collaborateurs hautement qualifiés et 6 lignes de production dédiées au maillot de bain et à la lingerie. Nous disposons d’un parc machine moderne (machines à coudre plates, surjeteuses, recouvreuses, découpe laser) permettant de produire environ 300 000 pièces par an. Nos MOQ démarrent à 300 pièces et nos délais varient de 4 à 8 semaines en fonction de la complexité des modèles.'
            : 'Our plant employs 200 highly skilled collaborators and operates 6 production lines dedicated to swimwear and lingerie. We maintain a modern machine park (flat bed, overlock and coverstitch machines, laser cutting) allowing us to produce around 300,000 pieces per year. Our minimum order quantities start at 300 pieces and lead times range from 4 to 8 weeks depending on style complexity.'}
        </p>
        <h2 className="text-2xl font-serif mb-2">{isFr ? 'KPIs clés' : 'Key KPIs'}</h2>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-base">
          <li><strong>{isFr ? 'Effectif :' : 'Staff:'}</strong> 200</li>
          <li><strong>{isFr ? 'Lignes de production :' : 'Production lines:'}</strong> 6</li>
          <li><strong>{isFr ? 'Capacité annuelle :' : 'Annual capacity:'}</strong> ~300k pièces</li>
          <li><strong>MOQ:</strong> 300</li>
          <li><strong>{isFr ? 'Délais :' : 'Lead time:'}</strong> 4–8 semaines</li>
          <li><strong>Incoterms:</strong> FOB / CIF</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}