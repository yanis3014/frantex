import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const cases = {
  fr: [
    {
      image: '/assets/cases/bikini.png',
      title: 'Collection resort 2025',
      description:
        'Production de 50 000 bikinis pour une marque européenne premium. Tissu recyclé, impression digitale et packaging personnalisé. Délais : 5 semaines.',
    },
    {
      image: '/assets/cases/bodysuit.png',
      title: 'Capsule one‑piece',
      description:
        'Série limitée de 10 000 une‑pièces combinant dentelle et maille. Ajustement sur mesure et contrôle qualité renforcé. Délais : 6 semaines.',
    },
    {
      image: '/assets/cases/lingerie.png',
      title: 'Lingerie durable',
      description:
        '20 000 ensembles lingerie fabriqués en fibres recyclées. Tests de résistance au chlore et conformité aux normes Oeko‑Tex. Délais : 7 semaines.',
    },
  ],
  en: [
    {
      image: '/assets/cases/bikini.png',
      title: 'Resort 2025 collection',
      description:
        'Production of 50,000 bikinis for a premium European brand. Recycled fabric, digital printing and custom packaging. Lead time: 5 weeks.',
    },
    {
      image: '/assets/cases/bodysuit.png',
      title: 'One‑piece capsule',
      description:
        'Limited run of 10,000 one‑pieces combining lace and jersey. Tailored fit and enhanced quality control. Lead time: 6 weeks.',
    },
    {
      image: '/assets/cases/lingerie.png',
      title: 'Sustainable lingerie',
      description:
        '20,000 lingerie sets made from recycled fibres. Chlorine‑resistant and Oeko‑Tex compliant. Lead time: 7 weeks.',
    },
  ],
};

export default function ReferencesPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  const list = cases[isFr ? 'fr' : 'en'];
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-6">{isFr ? 'Références & études de cas' : 'References & case studies'}</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {list.map((item) => (
            <div key={item.title} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-56 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-serif text-xl mb-2 text-primary-dark">{item.title}</h3>
                <p className="text-sm flex-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}