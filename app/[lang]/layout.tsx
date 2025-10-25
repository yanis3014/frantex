import type { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { content, Locale } from "../../lib/content";

interface LangLayoutProps {
  children: ReactNode;
  params: { lang: string };
}

/**
 * Language layout wraps all pages under a given locale. It renders
 * the header, an optional origin banner and footer around the page
 * content. Using a nested layout for locales avoids duplication of
 * navigation and ensures that translations are passed down via
 * props. The `params.lang` value is provided by Next.js based on
 * the URL segment.
 */
export default function LangLayout({ children, params }: LangLayoutProps) {
  // on revient au français si la langue n’est pas explicitement "en"
  const locale: Locale = params.lang === "en" ? "en" : "fr";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Origin banner emphasising production origin and management */}
      <div className="bg-accent text-neutral-50 text-center text-xs py-1">
        {content[locale].originBanner}
      </div>
      <Header locale={locale} />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}

/**
 * Pre-generate static parameters for each supported locale. This
 * function is used by Next.js to statically build pages for all
 * locales at build time.
 */
export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}
