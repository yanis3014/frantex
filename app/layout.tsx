import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Frantex International Fashion",
  description:
    "Manufacture de maillots de bain & lingerie – Made in Tunisia / French management",
};

/**
 * Root layout for the Next.js app. It defines the global HTML
 * structure and includes the global stylesheet. Since locale is
 * handled in the nested [lang] layout, we set the default lang to
 * French here. Nested layouts can provide further semantic
 * information such as lang attributes on child elements if needed.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
