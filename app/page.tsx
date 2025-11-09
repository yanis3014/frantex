import { redirect } from "next/navigation";

/**
 * Root entry point. We serve the French version of the site by default, so the
 * bare domain should point visitors to /fr to match the existing [lang] routes.
 */
export default function RootPage() {
  redirect("/fr");
}
