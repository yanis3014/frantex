"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import clsx from 'clsx';

/**
 * Main navigation bar. Reads labels from the translation files and builds
 * language-specific URLs by prefixing the current locale.
 */
export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  // Extract locale from pathname: it always starts with /{lang}
  const locale = pathname?.split('/')[1] || 'fr';

  const items: { key: string; href: string }[] = [
    { key: 'expertise', href: '/expertise' },
    { key: 'products', href: '/products' },
    { key: 'quality', href: '/quality' },
    { key: 'capacity', href: '/capacity' },
    { key: 'sustainability', href: '/sustainability' },
    { key: 'references', href: '/references' },
    { key: 'careers', href: '/careers' },
    { key: 'blog', href: '/blog' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-neutral-light">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-2xl font-serif text-primary-dark font-bold">
          Frantex
        </Link>
        <ul className="hidden md:flex space-x-6 font-medium">
          {items.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={`/${locale}${href}`}
                className="text-neutral-dark hover:text-secondary transition-colors"
              >
                {t(key as any)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          {/* Language switcher */}
          <Link
            href={pathname.replace(`/${locale}`, locale === 'fr' ? '/en' : '/fr')}
            className="text-sm text-primary-dark hover:text-secondary border border-primary-dark px-2 py-1 rounded-md"
          >
            {locale === 'fr' ? 'EN' : 'FR'}
          </Link>
        </div>
      </div>
    </nav>
  );
}