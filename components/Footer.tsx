import Link from "next/link";
import { content, Locale } from "../lib/content";

/**
 * Footer component displaying contact information, secondary navigation
 * and copyright notice.
 */
export default function Footer({ locale }: { locale: Locale }) {
  const navItems = content[locale].nav;
  const { address, phones, email } = content[locale].contact;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-neutral-300 pt-12 pb-8">
      {/* MOD: Passage à 3 colonnes pour un look plus "développé" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1: Infos Entreprise & Adresse */}
        <div>
          <h3 className="font-serif text-lg mb-2 text-white">
            {content[locale].siteName}
          </h3>
          {/* L'adresse est maintenant seule dans cette colonne */}
          <p className="text-sm whitespace-pre-line">{address}</p>
        </div>

        {/* Colonne 2: Navigation (identique à avant) */}
        <div>
          <h4 className="font-serif text-lg mb-2 text-white">
            {locale === "fr" ? "Navigation" : "Navigation"}
          </h4>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${locale}/${item.slug}`}
                  className="text-sm hover:text-accent transition-colors text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3: Contact (SANS les mentions légales) */}
        <div>
          <h4 className="font-serif text-lg mb-2 text-white">
            {locale === "fr" ? "Nous Contacter" : "Contact Us"}
          </h4>
          <ul className="space-y-1">
            {/* Numéros de téléphone */}
            {phones.map((phone) => (
              <li key={phone} className="text-sm text-white">
                {phone}
              </li>
            ))}

            {/* Email */}
            <li className="text-sm mt-2">
              <a
                href={`mailto:${email}`}
                className="hover:text-accent transition-colors text-white"
              >
                {email}
              </a>
            </li>

            {/* --- MENTIONS LÉGALES SUPPRIMÉES DE CETTE LISTE --- */}
          </ul>
        </div>
      </div>

      {/* Ligne de séparation et copyright (SANS les mentions légales) */}
      <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500 text-white">
        <div>
          © {currentYear} Frantex International Fashion.{" "}
          {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
        </div>

        {/* --- LIEN VERS LES MENTIONS LÉGALES SUPPRIMÉ D'ICI --- */}
      </div>
    </footer>
  );
}
