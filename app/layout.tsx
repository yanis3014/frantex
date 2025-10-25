// Fichier : app/layout.tsx
import "@/app/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "Frantex International Fashion",
    template: "%s – Frantex International Fashion",
  },
  description:
    "Manufacture de maillots de bain et lingerie en Tunisie. Management français, qualité industrielle et délais maîtrisés.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Les balises <html> et <body> sont INDISPENSABLES ici
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
