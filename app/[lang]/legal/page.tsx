import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LegalPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-6">
        <h1 className="text-4xl font-serif mb-4">{isFr ? 'Mentions légales' : 'Legal notice'}</h1>
        {isFr ? (
          <>
            <p>
              Ce site est édité par Frantex International Fashion, société de
              confection domiciliée Route de Sousse GP1, M’Saken 4070, Sousse,
              Tunisie. Téléphone : +216 28 402 518 / +216 73 312 033 / +216 73 312 034. Email :
              reception_frantex@outlook.fr.
            </p>
            <p>
              Directeur de la publication : Hedi Khedher. Hébergeur : À
              déterminer. Ce site utilise des cookies pour améliorer votre
              expérience (voir page Cookies).
            </p>
          </>
        ) : (
          <>
            <p>
              This website is published by Frantex International Fashion,
              manufacturing company registered at Route de Sousse GP1, M’Saken
              4070, Sousse, Tunisia. Phone: +216 28 402 518 / +216 73 312 033 /
              +216 73 312 034. Email: reception_frantex@outlook.fr.
            </p>
            <p>
              Publication director: Hedi Khedher. Hosting provider: To be
              defined. This site uses cookies to improve your experience (see
              Cookies page).
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}