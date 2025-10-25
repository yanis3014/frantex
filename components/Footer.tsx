import Link from "next/link";
import { content, Locale } from "../lib/content";

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
    // MOD 1: Fond 'bg-primary-dark' et texte de base 'text-neutral-300'
    <footer className="bg-primary-dark text-neutral-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1: Infos Contact */}
        <div>
          <h3 className="font-serif text-lg mb-2 text-white">
            {content[locale].siteName}
          </h3>
          <p className="text-sm whitespace-pre-line">{address}</p>
          <p className="text-sm mt-2">
            {phones.map((phone) => (
              <span key={phone} className="block">
                {phone}
              </span>
            ))}
          </p>
          <p className="text-sm mt-2">
            {/* MOD 3: Lien avec survol 'accent' */}
            <a
              href={`mailto:${email}`}
              className="hover:text-accent transition-colors text-white"
            >
              {email}
            </a>
          </p>
        </div>

        {/* Colonne 2: Navigation */}
        <div>
          <h4 className="font-serif text-lg mb-2 text-white">
            {locale === "fr" ? "Navigation" : "Navigation"}
          </h4>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${locale}/${item.slug}`}
                  // MOD 3: Liens avec survol 'accent'
                  className="text-sm hover:text-accent transition-colors text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3: Newsletter */}
        <div>
          <h4 className="font-serif text-lg mb-2 text-white">
            {locale === "fr" ? "Newsletter" : "Newsletter"}
          </h4>
          <p className="text-sm mb-2">
            {locale === "fr"
              ? "Recevez nos actualités et offres directement par e‑mail."
              : "Receive our news and offers directly by email."}
          </p>
          {/* MOD 4: Formulaire restylé */}
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder={locale === "fr" ? "Votre email" : "Your email"}
              className="px-3 py-2 rounded-md bg-primary border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent-dark text-white py-2 px-4 rounded-md hover:bg-accent transition-colors text-sm"
            >
              {locale === "fr" ? "S'inscrire" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* MOD 5: Ligne de séparation et copyright */}
      <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500 text-white">
        © {currentYear} Frantex International Fashion.{" "}
        {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
      </div>
    </footer>
  );
}
