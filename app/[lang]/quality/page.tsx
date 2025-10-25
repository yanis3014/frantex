import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function QualityPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-4">{isFr ? 'Qualité & conformité' : 'Quality & compliance'}</h1>
        <p className="text-lg leading-relaxed mb-6">
          {isFr
            ? 'Notre culture qualité est au cœur de notre modèle. Nous appliquons des contrôles à chaque étape de production, des tests en laboratoire (résistance au chlore et aux UV, tenue des couleurs) et des audits réguliers pour garantir la conformité aux normes internationales. La traçabilité est assurée par un marquage et une gestion de lotage rigoureux.'
            : 'Our quality culture is at the core of our business. We apply controls at every production stage, perform lab tests (chlorine and UV resistance, colour fastness) and undertake regular audits to ensure compliance with international standards. Traceability is ensured through rigorous batch marking and management.'}
        </p>
        <h2 className="text-2xl font-serif mb-2">{isFr ? 'Notre approche' : 'Our approach'}</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>{isFr ? 'Contrôle matière et laboratoire' : 'Incoming material and lab testing'}</li>
          <li>{isFr ? 'Audits internes et suivi des process' : 'Internal audits and process monitoring'}</li>
          <li>{isFr ? 'Respect des normes REACH et CPSIA' : 'Compliance with REACH and CPSIA standards'}</li>
          <li>{isFr ? 'Traçabilité de chaque lot' : 'Traceability of each batch'}</li>
          <li>{isFr ? 'Amélioration continue et formation' : 'Continuous improvement and training'}</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}