'use client';
import { useState } from 'react';
import Section from '../../../components/Section';
import JobList from '../../../components/JobList';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * Careers page listing current job openings and providing a
 * spontaneous application form. The form does not submit anywhere
 * because backend integration is outside the scope of this example.
 */
export default function CarrierePage({ params }: PageProps) {
  const locale = params.lang;
  const careers = content[locale].careers;
  // Form state for demonstration purposes
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    file: null as File | null,
  });
  return (
    <div>
      <Section title={careers.title} text={careers.intro} />
      <div className="max-w-5xl mx-auto px-4">
        <JobList locale={locale} />
      </div>
      <Section
        title={locale === 'fr' ? 'Candidature spontanée' : 'Spontaneous application'}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                {locale === 'fr' ? 'Nom complet' : 'Full name'}
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              {locale === 'fr' ? 'Message' : 'Message'}
            </label>
            <textarea
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2 h-24"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              {locale === 'fr' ? 'CV (PDF)' : 'CV (PDF)'}
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFormState({ ...formState, file });
              }}
              className="mt-1 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition-colors"
          >
            {locale === 'fr' ? 'Envoyer' : 'Send'}
          </button>
        </form>
      </Section>
    </div>
  );
}