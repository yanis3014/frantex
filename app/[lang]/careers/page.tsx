import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareersPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  const jobs = isFr
    ? [
        { title: 'Couturière expérimentée', desc: 'Vous maîtrisez les techniques de couture maille et souhaitez rejoindre une équipe dynamique.' },
        { title: 'Responsable qualité', desc: 'Vous assurez la conformité des produits et pilotez les plans d’amélioration continue.' },
        { title: 'Chef de ligne de production', desc: 'Vous coordonnez les équipes et veillez au respect des délais et de la qualité.' },
      ]
    : [
        { title: 'Experienced seamstress', desc: 'You master knit sewing techniques and want to join a dynamic team.' },
        { title: 'Quality manager', desc: 'You ensure product compliance and drive continuous improvement plans.' },
        { title: 'Production line leader', desc: 'You coordinate teams and ensure deadlines and quality are met.' },
      ];
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-6">{isFr ? 'Rejoignez‑nous' : 'Join us'}</h1>
        <p className="text-lg mb-8">
          {isFr
            ? 'Nous recherchons régulièrement des talents pour renforcer nos équipes. Découvrez nos offres d’emploi et postulez en ligne.'
            : 'We regularly seek talented people to strengthen our teams. Discover our job openings and apply online.'}
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {jobs.map((job) => (
            <div key={job.title} className="border border-neutral-light rounded-lg p-4 shadow-sm">
              <h3 className="font-serif text-xl mb-2">{job.title}</h3>
              <p className="text-sm mb-4">{job.desc}</p>
              <a
                href="#application-form"
                className="inline-block px-4 py-2 bg-secondary text-white rounded-md text-sm hover:bg-secondary/90"
              >
                {isFr ? 'Postuler' : 'Apply'}
              </a>
            </div>
          ))}
        </div>
        <h2 id="application-form" className="text-2xl font-serif mb-4">
          {isFr ? 'Candidature spontanée' : 'Spontaneous application'}
        </h2>
        <form
          method="POST"
          action="#"
          className="space-y-4"
          encType="multipart/form-data"
        >
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
          </div>
          <div className="grid md:grid-cols-2 gap-4">
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
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="cv">
                {isFr ? 'CV (PDF)' : 'Resume (PDF)'}
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept="application/pdf"
                className="w-full border border-neutral-light rounded-md px-3 py-2"
              />
            </div>
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
            {isFr ? 'Envoyer la candidature' : 'Submit application'}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}