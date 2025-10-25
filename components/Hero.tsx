import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

/**
 * Hero banner component. Displays a locale-specific background image, title,
 * subtitle and a call-to-action button. The background image should be placed
 * in the `public/assets` folder following the naming convention
 * `hero-{locale}.jpg`.
 */
export default function Hero() {
  const t = useTranslations('home');
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'fr';
  return (
    <section className="relative overflow-hidden text-white">
      <Image
        src={`/assets/hero-${locale}.png`}
        alt=""
        fill
        priority
        className="object-cover brightness-75"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-32 text-center flex flex-col items-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl">
          {t('heroSubtitle')}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-block bg-secondary text-white px-6 py-3 rounded-md text-base font-medium hover:bg-secondary/90 transition-colors"
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  );
}