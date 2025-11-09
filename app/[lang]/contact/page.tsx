"use client";
import { useState } from "react"; // <-- 1. IMPORTER useState
import Image from "next/image";
import Section from "../../../components/Section";
import { content, Locale } from "../../../lib/content";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface PageProps {
  params: { lang: Locale };
}

export default function ContactPage({ params }: PageProps) {
  const locale = params.lang;
  const contact = content[locale].contact;
  // Ajustez cette valeur pour cadrer la carte sur le marqueur GPS (format CSS: "x% y%" ou "center top")
  const mapObjectPosition = "50% 45%"; // Exemple: centré horizontalement, légèrement vers le haut
  // Requête de recherche pour Google Maps (plus code + adresse)
  const mapQuery = "PHVM+2XC, Bd Dr Taieb Hachicha, M'saken, Tunisie";
  const [state, handleSubmit] = useForm("manawazk");

  // --- 2. AJOUTER UN ÉTAT POUR LE SUJET ---
  const [subject, setSubject] = useState("");

  // Libellés (vous devriez les ajouter à lib/content.ts pour la traduction)
  const labels = {
    subject: locale === "fr" ? "Sujet de la demande" : "Inquiry Subject",
    optionDefault:
      locale === "fr" ? "--- Choisir un sujet ---" : "--- Select a subject ---",
    optionQuote: locale === "fr" ? "Demande de devis" : "Request for quote",
    optionGeneral: locale === "fr" ? "Question générale" : "General question",
    optionOther:
      locale === "fr"
        ? "Autre (Suivi, Qualité...)"
        : "Other (Tracking, Quality...)",
  };

  // Le message de succès est inchangé
  if (state.succeeded) {
    return (
      <div>
        <Section title={contact.title}>
          <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-lg border border-green-200 text-center">
            <CheckCircleIcon className="w-16 h-16 text-green-500" />
            <h3 className="mt-4 text-2xl font-serif font-semibold text-green-800">
              Merci !
            </h3>
            <p className="mt-2 text-neutral-700">
              Votre message a bien été envoyé. Nous vous répondrons rapidement.
            </p>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div>
      <Section title={contact.title} text={contact.intro} />

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
        {/* --- COLONNE DE GAUCHE : INFOS CONTACT (Inchangée) --- */}
        <div>
          <h3 className="font-serif text-lg text-primary mb-2">
            {locale === "fr" ? "Coordonnées" : "Contact details"}
          </h3>
          <p className="whitespace-pre-line text-sm text-neutral-700">
            {contact.address}
          </p>
          <p className="mt-2 text-sm text-neutral-700">
            {contact.phones.map((p) => (
              <span key={p} className="block">
                {p}
              </span>
            ))}
          </p>
          <p className="mt-2 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="text-primary hover:underline"
            >
              {contact.email}
            </a>
          </p>
          {/* Carte statique : remplace le placeholder. */}
          <div className="mt-6 rounded-md overflow-hidden border border-neutral-200 h-60 relative">
            <Image
              src="/maps-frantex.jpg"
              alt={
                locale === "fr"
                  ? "Carte Frantex (M'Saken)"
                  : "Frantex map (M'Saken)"
              }
              layout="fill"
              objectFit="cover"
              objectPosition={mapObjectPosition}
              priority
              className="block"
            />
            {/* Lien vers Google Maps - s'ouvre dans un nouvel onglet */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                mapQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 bottom-2 bg-white/80 text-sm text-primary px-3 py-1 rounded-md shadow-sm hover:underline"
            >
              {locale === "fr"
                ? "Ouvrir dans Google Maps"
                : "Open in Google Maps"}
            </a>
          </div>
        </div>

        {/* --- COLONNE DE DROITE : FORMULAIRE DYNAMIQUE --- */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Prénom et Nom (Inchangé) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-neutral-700"
                >
                  {contact.form.firstName}
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required
                  className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-neutral-700"
                >
                  {contact.form.lastName}
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
                />
              </div>
            </div>

            {/* Email (Inchangé) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700"
              >
                {contact.form.email}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Téléphone (Inchangé) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-neutral-700"
              >
                {contact.form.phone}
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              />
            </div>

            {/* --- 3. NOUVEAU CHAMP "SUJET" --- */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-neutral-700"
              >
                {labels.subject}
              </label>
              <select
                id="subject"
                name="_subject" // <--- L'ASTUCE FORMSPREE pour le "dispatch"
                required
                value={subject} // Lié à notre état
                onChange={(e) => setSubject(e.target.value)} // Met à jour l'état
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              >
                <option value="" disabled>
                  {labels.optionDefault}
                </option>
                <option value={labels.optionQuote}>{labels.optionQuote}</option>
                <option value={labels.optionGeneral}>
                  {labels.optionGeneral}
                </option>
                <option value={labels.optionOther}>{labels.optionOther}</option>
              </select>
            </div>

            {/* --- 4. CHAMPS CONDITIONNELS --- */}
            {/* Ces champs n'apparaissent que si le sujet est "Demande de devis" */}
            {subject === labels.optionQuote && (
              <>
                {/* Type de produit */}
                <div>
                  <label
                    htmlFor="productType"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    {contact.form.productType}
                  </label>
                  <input
                    id="productType"
                    type="text"
                    name="productType"
                    className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
                  />
                </div>

                {/* Quantité */}
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    {contact.form.quantity}
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    name="quantity"
                    min="0"
                    className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
                  />
                </div>
              </>
            )}

            {/* Message (Inchangé) */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700"
              >
                {contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2 h-28"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Bouton d'envoi (Inchangé) */}
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-accent text-white py-3 px-6 rounded-md hover:bg-accent-dark transition-colors disabled:opacity-50"
            >
              {state.submitting ? "Envoi en cours..." : contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
