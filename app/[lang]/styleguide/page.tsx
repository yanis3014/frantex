import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function StyleguidePage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        <h1 className="text-4xl font-serif mb-6">{isFr ? 'Guide de style' : 'Style guide'}</h1>
        <section>
          <h2 className="text-2xl font-serif mb-4">{isFr ? 'Palette de couleurs' : 'Colour palette'}</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-md" style={{ backgroundColor: '#003f5c' }}>
              <p className="text-white">#003f5c</p>
              <p className="text-white text-sm">Primary dark</p>
            </div>
            <div className="p-4 rounded-md" style={{ backgroundColor: '#2f7ca7' }}>
              <p className="text-white">#2f7ca7</p>
              <p className="text-white text-sm">Primary light</p>
            </div>
            <div className="p-4 rounded-md" style={{ backgroundColor: '#e63946' }}>
              <p className="text-white">#e63946</p>
              <p className="text-white text-sm">Secondary</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-serif mb-4">{isFr ? 'Typographie' : 'Typography'}</h2>
          <p className="font-serif text-3xl mb-2">Playfair Display</p>
          <p className="font-sans text-xl">Inter</p>
        </section>
        <section>
          <h2 className="text-2xl font-serif mb-4">Components</h2>
          <div className="space-y-4">
            <div>
              <p className="mb-2 font-medium">Buttons</p>
              <button className="bg-secondary text-white px-4 py-2 rounded-md mr-2">
                {isFr ? 'Bouton primaire' : 'Primary button'}
              </button>
              <button className="bg-primary-dark text-white px-4 py-2 rounded-md">
                {isFr ? 'Bouton secondaire' : 'Secondary button'}
              </button>
            </div>
            <div>
              <p className="mb-2 font-medium">Cards</p>
              <div className="border rounded-md p-4 shadow-sm max-w-sm">
                <h3 className="font-serif text-lg mb-2">{isFr ? 'Titre de la carte' : 'Card title'}</h3>
                <p className="text-sm mb-2">
                  {isFr
                    ? 'Un petit texte descriptif pour illustrer la mise en page d’une carte.'
                    : 'A short descriptive text to illustrate the card layout.'}
                </p>
                <Link href="#" className="text-secondary text-sm font-medium">
                  {isFr ? 'En savoir plus' : 'Learn more'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}