import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <>
      <Navbar />
      <Hero />
      {/* Intro section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif mb-4">{t('introTitle')}</h2>
        <p className="text-lg leading-relaxed mb-8">{t('introText')}</p>
        {/* Expertise */}
        <h3 className="text-2xl font-serif mt-12 mb-4">{t('expertiseTitle')}</h3>
        <ul className="space-y-2 list-disc list-inside">
          {['expertise.item1','expertise.item2','expertise.item3','expertise.item4','expertise.item5'].map((key) => (
            <li key={key} className="text-base">{t(key)}</li>
          ))}
        </ul>
        {/* Products */}
        <h3 className="text-2xl font-serif mt-12 mb-4">{t('productsTitle')}</h3>
        <p className="text-base leading-relaxed">{t('productsText')}</p>
        {/* Quality */}
        <h3 className="text-2xl font-serif mt-12 mb-4">{t('qualityTitle')}</h3>
        <p className="text-base leading-relaxed">{t('qualityText')}</p>
        {/* Capacity */}
        <h3 className="text-2xl font-serif mt-12 mb-4">{t('capacityTitle')}</h3>
        <p className="text-base leading-relaxed">{t('capacityText')}</p>
        {/* Sustainability */}
        <h3 className="text-2xl font-serif mt-12 mb-4">{t('sustainabilityTitle')}</h3>
        <p className="text-base leading-relaxed">{t('sustainabilityText')}</p>
      </section>
      <Footer />
    </>
  );
}