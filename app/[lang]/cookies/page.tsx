import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookiesPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-6">
        <h1 className="text-4xl font-serif mb-4">{isFr ? 'Cookies' : 'Cookies'}</h1>
        {isFr ? (
          <>
            <p>
              Nous utilisons des cookies et technologies similaires pour analyser
              le trafic, optimiser l’ergonomie et mesurer l’audience du site.
              Vous pouvez accepter ou refuser les cookies non essentiels via la
              bannière de consentement.
            </p>
            <p>
              Cookies fonctionnels : nécessaires au bon fonctionnement du site
              (préférences de langue, session).
            </p>
            <p>
              Cookies analytiques : utilisés pour collecter des statistiques
              anonymes de fréquentation via Matomo/Google Analytics. Ces
              informations nous aident à améliorer le site.
            </p>
          </>
        ) : (
          <>
            <p>
              We use cookies and similar technologies to analyse traffic, optimise
              usability and measure site audience. You can accept or refuse
              non‑essential cookies via the consent banner.
            </p>
            <p>
              Functional cookies: necessary for the proper operation of the site
              (language preferences, session).
            </p>
            <p>
              Analytical cookies: used to collect anonymous traffic statistics via
              Matomo/Google Analytics. This information helps us improve the
              site.
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}