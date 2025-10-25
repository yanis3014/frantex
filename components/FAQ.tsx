import { content, Locale } from '../lib/content';

/**
 * FAQ component renders an accordion of frequently asked questions. In
 * this simplified implementation, questions are always visible; you
 * could enhance it with interactive collapse behaviour by making
 * this a client component. For static sites and SEO, keeping all
 * answers visible is acceptable.
 */
export default function FAQ({ locale }: { locale: Locale }) {
  const faqs = content[locale].faq;
  return (
    <div className="mt-8 space-y-6">
      {faqs.map((item, idx) => (
        <div
          key={idx}
          className="border border-neutral-200 rounded-md bg-neutral-50 p-4"
        >
          <h4 className="font-medium text-neutral-800">
            {item.question}
          </h4>
          <p className="text-sm text-neutral-700 mt-2 whitespace-pre-line">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}