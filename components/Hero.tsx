import Link from 'next/link';
import { content, Locale } from '../lib/content';

/**
 * Hero component displaying a headline, subheadline and a call‑to‑action
 * button on top of a decorative background. The component uses
 * responsive Tailwind classes to adjust padding and typography
 * according to screen size. The background image is placed via
 * inline styles to avoid loading issues before Next.js processing.
 */
export default function Hero({
  locale,
  headline,
  subHeadline,
}: {
  locale: Locale;
  headline: string;
  subHeadline: string;
}) {
  const ctaText = content[locale].cta;
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-neutral-50"
      style={{
        backgroundImage: "url('/images/hero-pattern.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-primary-dark/60" aria-hidden="true"></div>
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
          {headline}
        </h1>
        <p className="text-base md:text-lg font-medium mb-8">
          {subHeadline}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-block bg-accent py-3 px-6 rounded-md text-white font-semibold hover:bg-accent-dark transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}