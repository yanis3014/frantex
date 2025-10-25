import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-6">
        <h1 className="text-4xl font-serif mb-4">{isFr ? 'Politique de confidentialité' : 'Privacy policy'}</h1>
        {isFr ? (
          <>
            <p>
              Les informations collectées via les formulaires (nom, entreprise,
              email, téléphone, messages et pièces jointes) sont utilisées
              uniquement pour traiter votre demande de devis ou votre
              candidature. Elles ne sont ni vendues ni transmises à des tiers
              et sont conservées pendant la durée nécessaire au traitement de
              votre demande.
            </p>
            <p>
              Conformément au Règlement général sur la protection des données
              (RGPD), vous disposez d’un droit d’accès, de rectification et
              d’effacement de vos données personnelles. Pour l’exercer, merci
              d’envoyer un email à reception_frantex@outlook.fr.
            </p>
          </>
        ) : (
          <>
            <p>
              Information collected through the forms (name, company, email,
              phone, messages and attachments) is used solely to process your
              quote request or application. It is neither sold nor shared with
              third parties and is kept only for the time required to process
              your request.
            </p>
            <p>
              In accordance with the General Data Protection Regulation (GDPR),
              you have the right to access, rectify and delete your personal
              data. To exercise these rights, please email
              reception_frantex@outlook.fr.
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}