'use client';
import { useState } from 'react';
import Section from '../../../components/Section';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * Contact page including company contact details and a quotation
 * request form. The form demonstrates validation and uses a
 * honeypot field for spam prevention. No actual submission is
 * implemented.
 */
export default function ContactPage({ params }: PageProps) {
  const locale = params.lang;
  const contact = content[locale].contact;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    attachment: null as File | null,
    message: '',
    honey: '',
  });
  return (
    <div>
      <Section title={contact.title} text={contact.intro} />
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
        {/* Left: Contact details */}
        <div>
          <h3 className="font-serif text-lg text-primary mb-2">
            {locale === 'fr' ? 'Coordonnées' : 'Contact details'}
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
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </a>
          </p>
          {/* Map placeholder */}
          <div className="mt-6 border border-neutral-200 rounded-md bg-neutral-100 h-60 flex items-center justify-center text-neutral-500 text-sm">
            {locale === 'fr' ? 'Carte Google Maps' : 'Google Map'}
          </div>
        </div>
        {/* Right: Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
          }}
          className="space-y-4"
        >
          {/* Honeypot field for spam bots – hidden from users */}
          <div style={{ display: 'none' }}>
            <label>
              Don’t fill this out
              <input
                type="text"
                value={formData.honey}
                onChange={(e) => setFormData({ ...formData, honey: e.target.value })}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                {contact.form.firstName}
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                {contact.form.lastName}
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                {contact.form.email}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                {contact.form.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              {contact.form.productType}
            </label>
            <input
              type="text"
              value={formData.productType}
              onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
              className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              {contact.form.quantity}
            </label>
            <input
              type="number"
              min="0"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              {contact.form.attachment}
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFormData({ ...formData, attachment: file });
              }}
              className="mt-1 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              {contact.form.message}
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2 h-28"
            />
          </div>
          <button
            type="submit"
            className="bg-accent text-white py-3 px-6 rounded-md hover:bg-accent-dark transition-colors"
          >
            {contact.form.submit}
          </button>
        </form>
      </div>
    </div>
  );
}