import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SustainabilityPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-4">{isFr ? 'RSE & durabilité' : 'CSR & sustainability'}</h1>
        <p className="text-lg leading-relaxed mb-6">
          {isFr
            ? 'La responsabilité sociale et environnementale est intégrée à toutes nos activités. Nous veillons à proposer des conditions de travail sûres et équitables, à réduire notre impact environnemental et à favoriser des matières plus durables.'
            : 'Social and environmental responsibility is embedded throughout our operations. We ensure safe and fair working conditions, reduce our environmental footprint and promote more sustainable materials.'}
        </p>
        <h2 className="text-2xl font-serif mb-2">{isFr ? 'Nos engagements' : 'Our commitments'}</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>{isFr ? 'Utilisation de tissus recyclés et certifiés Oeko‑Tex' : 'Use of recycled and Oeko‑Tex certified fabrics'}</li>
          <li>{isFr ? 'Réduction des déchets et recyclage des chutes' : 'Waste reduction and offcut recycling'}</li>
          <li>{isFr ? 'Installation d’équipements à faible consommation énergétique' : 'Installation of energy-efficient equipment'}</li>
          <li>{isFr ? 'Programme de formation et sécurité pour les employés' : 'Training and safety programme for employees'}</li>
          <li>{isFr ? 'Partenariats avec des fournisseurs responsables' : 'Partnerships with responsible suppliers'}</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}