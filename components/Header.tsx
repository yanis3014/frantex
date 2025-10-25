/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content, Locale } from "../lib/content";

/**
 * Header component displaying the company logo, primary navigation and
 * language switcher. It is implemented as a client component because
 * we use the `usePathname` hook to build locale switching links at
 * runtime. The component accepts the current locale as a prop to
 * select appropriate labels from the content dictionary.
 */
export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  // Determine the current slug (remove leading / and locale segment)
  // Example: '/fr/produits' -> ['', 'fr', 'produits'] -> slug 'produits'
  const segments = pathname.split("/").filter(Boolean);
  const currentSlug = segments.slice(1).join("/") || "";

  // Build link for the other locale
  const otherLocale: Locale = locale === "fr" ? "en" : "fr";
  const otherHref = `/${otherLocale}/${currentSlug}`;

  const navItems = content[locale].nav;

  return (
    <header className="bg-primary-dark shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          {/* Logo placeholder */}
          <Link
            href={`/${locale}`}
            className="flex items-center text-white font-serif text-xl font-semibold"
            aria-label={content[locale].siteName}
          >
            Frantex
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/${item.slug}`}
              className="text-white hover:text-accent transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href={otherHref}
            className="text-sm text-white hover:text-accent underline"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}
