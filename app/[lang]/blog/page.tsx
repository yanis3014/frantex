import Section from '../../../components/Section';
import PostList from '../../../components/PostList';
import { content, Locale } from '../../../lib/content';

interface PageProps {
  params: { lang: Locale };
}

/**
 * Blog page listing recent news. Currently it draws from static
 * content defined in the content dictionary, but in a real site
 * this data would come from a CMS.
 */
export default function BlogPage({ params }: PageProps) {
  const locale = params.lang;
  const blog = content[locale].blog;
  return (
    <div>
      <Section title={blog.title} text={blog.intro} />
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <PostList locale={locale} />
      </div>
    </div>
  );
}