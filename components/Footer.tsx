"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Site footer displaying contact information and legal links. Reads labels from
 * the `footer` namespace in translation files.
 */
export default function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'fr';

  return (
    <footer className="bg-primary-dark text-neutral-light mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-3 text-white">Frantex International Fashion</h3>
          <p className="text-sm leading-relaxed">
            {t('address')}
          </p>
          <p className="text-sm mt-2">
            <span className="font-medium">{t('phoneLabel')}:</span> {t('phone')}
          </p>
          <p className="text-sm mt-1">
            <span className="font-medium">{t('emailLabel')}:</span> {t('email')}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Pages</h4>
          <ul className="space-y-1">
            {['expertise','products','quality','capacity','sustainability','references','careers','blog','contact'].map((key) => (
              <li key={key}>
                <Link href={`/${locale}/${key}`} className="hover:text-secondary text-sm">
                  {t(key as any) ?? key}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-xs mt-4 md:mt-0">{t('rights')}</p>
          <div className="mt-3 space-x-4 text-xs">
            <Link href={`/${locale}/legal`} className="hover:text-secondary">
              {t('legal')}
            </Link>
            <Link href={`/${locale}/privacy`} className="hover:text-secondary">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/cookies`} className="hover:text-secondary">
              {t('cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}