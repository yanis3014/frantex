/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine the current slug (remove leading / and locale segment)
  // Example: '/fr/produits' -> ['', 'fr', 'produits'] -> slug 'produits'
  const segments = pathname.split("/").filter(Boolean);
  const currentSlug = segments.slice(1).join("/") || "";

  // Build link for the other locale
  const otherLocale: Locale = locale === "fr" ? "en" : "fr";
  const otherHref = `/${otherLocale}/${currentSlug}`;

  const navItems = content[locale].nav;

  useEffect(() => {
    // Close the drawer whenever the route changes
    setIsMenuOpen(false);
  }, [pathname]);

  const mobileNavId = "mobile-navigation";

  return (
    <header className="bg-primary-dark shadow-sm sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link
            href={`/${locale}`}
            className="flex items-center text-white font-serif text-xl font-semibold -ml-2"
            aria-label={content[locale].siteName}
          >
            <Image
              src="/frantex-logo.jpg"
              alt="Frantex Logo"
              width={48}
              height={48}
              className="mr-3"
              priority
            />
            <span className="whitespace-nowrap">Frantex International Fashion</span>
          </Link>
        </div>

        {/* Mobile navigation trigger */}
        <div className="md:hidden" aria-label="Main navigation">
          <button
            type="button"
            className="text-white p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            aria-expanded={isMenuOpen}
            aria-controls={mobileNavId}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
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

        <div className="flex-shrink-0 flex items-center space-x-4">
          <Link
            href={otherHref}
            className="text-sm text-white hover:text-accent underline"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id={mobileNavId}
        className={`md:hidden absolute inset-x-0 top-16 bg-primary-dark border-t border-white/10 shadow-lg transition-all duration-200 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-2" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.slug}`}
              href={`/${locale}/${item.slug}`}
              className="text-white py-2 text-lg hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
