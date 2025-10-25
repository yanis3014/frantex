/**
 * Generic section component with a heading and descriptive text.
 * It wraps children content and applies consistent spacing.
 */
export default function Section({
  title,
  text,
  children,
}: {
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-4">
          {title}
        </h2>
        {text && (
          <p className="text-neutral-700 mb-6 whitespace-pre-line">
            {text}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}