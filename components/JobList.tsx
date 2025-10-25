import { content, Locale } from "../lib/content";

/**
 * JobList component displays a list of current job openings.
 * NOTE: The 'careers' section was removed from lib/content.ts, so this
 * component now returns a placeholder to prevent a compilation error.
 */
export default function JobList({ locale }: { locale: Locale }) {
  // const jobs = content[locale].careers.jobs; // LIGNE CAUSANT L'ERREUR COMMENTÉE

  // Retourne un message d'absence de données pour éviter l'erreur de compilation
  return (
    <div className="space-y-6 mt-4">
      <div className="p-4 border border-neutral-200 rounded-md bg-neutral-50 shadow-sm text-neutral-500">
        {locale === "fr"
          ? "Les offres d'emploi sont actuellement indisponibles (section Carrières retirée)."
          : "Job listings are currently unavailable (Careers section removed)."}
      </div>
    </div>
  );
}
