// Fichier : app/[lang]/layout.tsx (Version de test ultra-simple)
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: {
    lang: string;
  };
}

// On enlève TOUTE la logique async et next-intl pour le test
export default function LocaleLayout({ children, params }: Props) {
  const { lang } = params;
  console.log(`>>> RENDERING LocaleLayout for lang: ${lang}`); // Ajout d'un log visible

  // On retourne juste les enfants, sans provider
  return <>{children}</>;
}
