import '@/app/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: {
    default: 'Frantex International Fashion',
    template: '%s – Frantex International Fashion',
  },
  description: 'Manufacture de maillots de bain et lingerie en Tunisie. Management français, qualité industrielle et délais maîtrisés.',
};

/**
 * Root layout wraps all pages. The locale-specific layout defined in the
 * `[lang]` segment will set the appropriate `lang` attribute and provide
 * translation messages. Fonts are loaded via Google Fonts in globals.css.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}