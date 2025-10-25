import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductsPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-4">{isFr ? 'Produits & expertises' : 'Products & expertise'}</h1>
        <p className="text-lg mb-6">
          {isFr
            ? 'Nous proposons une large gamme de maillots de bain (bikinis, une‑pièces, boardshorts) et de lingerie (soutiens‑gorge, culottes, homewear). Notre expertise couvre les matières maille et jersey, les assemblages techniques et les finitions haut de gamme (impression sublimée, découpes laser, coutures thermocollées).'
            : 'We offer a wide range of swimwear (bikinis, one‑pieces, boardshorts) and lingerie (bras, briefs, loungewear). Our expertise covers knit and jersey fabrics, technical assemblies and premium finishes such as sublimation printing, laser cuts and bonded seams.'}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-serif mb-2">{isFr ? 'Maillots de bain' : 'Swimwear'}</h2>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>{isFr ? 'Bikinis & brassières' : 'Bikinis & bralettes'}</li>
              <li>{isFr ? 'Une‑pièces & body' : 'One‑pieces & bodysuits'}</li>
              <li>{isFr ? 'Boardshorts & shorts de bain' : 'Boardshorts & swim shorts'}</li>
              <li>{isFr ? 'Combinaisons de surf' : 'Surf suits'}</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-2">{isFr ? 'Lingerie & homewear' : 'Lingerie & loungewear'}</h2>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>{isFr ? 'Soutiens‑gorge & bustiers' : 'Bras & bustiers'}</li>
              <li>{isFr ? 'Culottes, shorties & tangas' : 'Briefs, boyshorts & thongs'}</li>
              <li>{isFr ? 'Bodies & corsets' : 'Bodies & corsets'}</li>
              <li>{isFr ? 'Pyjamas & homewear' : 'Pyjamas & loungewear'}</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}