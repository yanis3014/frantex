import { content, Locale } from '../lib/content';

/**
 * JobList component displays a list of current job openings. Each job
 * shows its title and a brief description. This component receives
 * the current locale to fetch the appropriate translation from the
 * content dictionary.
 */
export default function JobList({ locale }: { locale: Locale }) {
  const jobs = content[locale].careers.jobs;
  return (
    <div className="space-y-6 mt-4">
      {jobs.map((job) => (
        <div
          key={job.title}
          className="p-4 border border-neutral-200 rounded-md bg-neutral-50 shadow-sm"
        >
          <h3 className="font-serif text-lg text-primary mb-1">
            {job.title}
          </h3>
          <p className="text-sm text-neutral-700">
            {job.description}
          </p>
        </div>
      ))}
    </div>
  );
}