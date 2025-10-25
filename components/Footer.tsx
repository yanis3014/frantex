import Link from 'next/link';
import { content, Locale } from '../lib/content';

/**
 * Footer component displaying contact information, secondary navigation
 * and copyright notice. This component is rendered on the server and
 * accepts the current locale to fetch translated strings.
 */
export default function Footer({ locale }: { locale: Locale }) {
  const navItems = content[locale].nav;
  const { address, phones, email } = content[locale].contact;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-neutral-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-lg mb-2">{content[locale].siteName}</h3>
          <p className="text-sm whitespace-pre-line">{address}</p>
          <p className="text-sm mt-2">
            {phones.map((phone) => (
              <span key={phone} className="block">
                {phone}
              </span>
            ))}
          </p>
          <p className="text-sm mt-2">
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-2">{locale === 'fr' ? 'Navigation' : 'Navigation'}</h4>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${locale}/${item.slug}`}
                  className="text-sm hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-2">{locale === 'fr' ? 'Newsletter' : 'Newsletter'}</h4>
          <p className="text-sm mb-2">
            {locale === 'fr'
              ? 'Recevez nos actualités et offres directement par e‑mail.'
              : 'Receive our news and offers directly by email.'}
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder={locale === 'fr' ? 'Votre email' : 'Your email'}
              className="px-3 py-2 rounded-md text-neutral-900"
            />
            <button
              type="submit"
              className="bg-accent text-neutral-50 py-2 px-4 rounded-md hover:bg-accent-dark transition-colors text-sm"
            >
              {locale === 'fr' ? 'S\'inscrire' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-neutral-300">
        © {currentYear} Frantex International Fashion. {locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
      </div>
    </footer>
  );
}