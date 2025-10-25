import { content, Locale } from "../lib/content";

/**
 * PostList component displays a list of blog posts.
 * NOTE: The 'blog' section was removed from lib/content.ts, so this
 * component now returns a placeholder to prevent a compilation error.
 */
export default function PostList({ locale }: { locale: Locale }) {
  // const posts = content[locale].blog.posts; // LIGNE CAUSANT L'ERREUR COMMENTÉE

  // Retourne un message d'absence de données pour éviter l'erreur de compilation
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
      <article className="p-4 border border-neutral-200 rounded-md bg-neutral-50 shadow-sm flex flex-col text-neutral-500">
        {locale === "fr"
          ? "Actualités indisponibles (section Blog retirée)."
          : "News articles currently unavailable (Blog section removed)."}
      </article>
    </div>
  );
}
