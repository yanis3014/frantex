import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        <h1 className="text-4xl font-serif mb-6">{isFr ? 'Contact' : 'Contact'}</h1>
        {/* Coordinates */}
        <section>
          <h2 className="text-2xl font-serif mb-2">{isFr ? 'Coordonnées' : 'Contact details'}</h2>
          <p className="text-sm mb-1">Route de Sousse GP1, M’Saken 4070, Sousse, Tunisie</p>
          <p className="text-sm mb-1">Tel : +216 28 402 518 / +216 73 312 033 / +216 73 312 034</p>
          <p className="text-sm mb-4">Email : reception_frantex@outlook.fr</p>
          <div className="w-full h-64 bg-neutral-light rounded-md border">
            {/* Placeholder for Google Map embed */}
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5360207793117!2d10.55328111521272!3d35.733092380181284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302290399ae097d%3A0x1de41ab31b4223e6!2sM%E2%80%99Saken%2C%20Tunisia!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </section>
        {/* Quote form */}
        <section>
          <h2 className="text-2xl font-serif mb-4">{isFr ? 'Demander un devis' : 'Request a quote'}</h2>
          <form method="POST" action="#" className="space-y-4" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  {isFr ? 'Nom & prénom' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-neutral-light rounded-md px-3 py-2 focus:border-primary-dark focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="company">
                  {isFr ? 'Société' : 'Company'}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full border border-neutral-light rounded-md px-3 py-2 focus:border-primary-dark focus:outline-none"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-neutral-light rounded-md px-3 py-2 focus:border-primary-dark focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  {isFr ? 'Téléphone' : 'Phone'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-neutral-light rounded-md px-3 py-2 focus:border-primary-dark focus:outline-none"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="type">
                  {isFr ? 'Type de produit' : 'Product type'}
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full border border-neutral-light rounded-md px-3 py-2 focus:border-primary-dark focus:outline-none"
                >
                  <option value="swimwear">{isFr ? 'Maillot de bain' : 'Swimwear'}</option>
                  <option value="lingerie">{isFr ? 'Lingerie' : 'Lingerie'}</option>
                  <option value="other">{isFr ? 'Autre' : 'Other'}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="quantity">
                  {isFr ? 'Quantité estimée' : 'Estimated quantity'}
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="0"
                  step="1"
                  className="w-full border border-neutral-light rounded-md px-3 py-2 focus:border-primary-dark focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="files">
                {isFr ? 'Fichiers techniques (optionnel)' : 'Technical files (optional)'}
              </label>
              <input
                type="file"
                id="files"
                name="files"
                multiple
                className="w-full border border-neutral-light rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                {isFr ? 'Message' : 'Message'}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-neutral-light rounded-md px-3 py-2 focus:border-primary-dark focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary/90"
            >
              {isFr ? 'Envoyer la demande' : 'Send request'}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}