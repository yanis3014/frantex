import { content, Locale } from '../lib/content';

/**
 * PostList component displays a list of blog posts with their title,
 * excerpt and publication date. It receives the current locale and
 * uses it to fetch posts from the content dictionary. In a real
 * project this data would come from a CMS.
 */
export default function PostList({ locale }: { locale: Locale }) {
  const posts = content[locale].blog.posts;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
      {posts.map((post) => (
        <article
          key={post.title}
          className="p-4 border border-neutral-200 rounded-md bg-neutral-50 shadow-sm flex flex-col"
        >
          <h3 className="font-serif text-lg text-primary mb-1">
            {post.title}
          </h3>
          <p className="text-sm text-neutral-600 mb-2">
            {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="text-sm text-neutral-700 flex-grow">
            {post.description}
          </p>
          {/* In a real site, there would be a link to read more */}
        </article>
      ))}
    </div>
  );
}