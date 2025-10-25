import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const posts = {
  fr: [
    {
      slug: 'salon-maredimoda-2025',
      title: 'Frantex au salon MarediModa 2025',
      date: 'Octobre 2025',
      excerpt: 'Notre équipe sera présente au salon MarediModa à Cannes pour présenter nos dernières innovations en matière de maillots de bain et lingerie.',
    },
    {
      slug: 'investissement-decoupe',
      title: 'Nouvelle ligne de découpe laser',
      date: 'Septembre 2025',
      excerpt: 'Nous avons investi dans une machine de découpe laser de dernière génération afin d’améliorer la précision et de réduire les chutes.',
    },
    {
      slug: 'partenariat-recycle',
      title: 'Partenariat avec un fournisseur de tissus recyclés',
      date: 'Juin 2025',
      excerpt: 'Frantex renforce son engagement durable en collaborant avec un fournisseur certifié pour proposer des fibres recyclées de haute qualité.',
    },
  ],
  en: [
    {
      slug: 'maredimoda-2025-tradeshow',
      title: 'Frantex at MarediModa 2025',
      date: 'October 2025',
      excerpt: 'Our team will attend the MarediModa fair in Cannes to showcase our latest swimwear and lingerie innovations.',
    },
    {
      slug: 'laser-cutting-investment',
      title: 'New laser cutting line',
      date: 'September 2025',
      excerpt: 'We invested in a next‑generation laser cutting machine to improve precision and reduce waste.',
    },
    {
      slug: 'recycled-fabrics-partnership',
      title: 'Partnership with a recycled fabric supplier',
      date: 'June 2025',
      excerpt: 'Frantex strengthens its sustainability commitment by collaborating with a certified supplier to offer high-quality recycled fibres.',
    },
  ],
};

export default function BlogPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isFr = lang === 'fr';
  const articles = posts[isFr ? 'fr' : 'en'];
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-6">{isFr ? 'Actualités' : 'News'}</h1>
        <div className="space-y-8">
          {articles.map((post) => (
            <article key={post.slug} className="border-b pb-6">
              <h2 className="text-2xl font-serif mb-1 text-primary-dark">{post.title}</h2>
              <p className="text-xs text-neutral-dark mb-2">{post.date}</p>
              <p className="text-sm mb-2">{post.excerpt}</p>
              <Link href="#" className="text-secondary text-sm font-medium">
                {isFr ? 'En savoir plus' : 'Read more'}
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}