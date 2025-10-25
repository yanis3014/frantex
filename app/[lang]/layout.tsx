import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { languages } from '@/i18n';

interface Props {
  children: ReactNode;
  params: {
    lang: string;
  };
}

/**
 * Locale layout loads the appropriate translation messages and sets the
 * `lang` attribute on the HTML element. If an unsupported locale is
 * requested it returns a 404.
 */
export default async function LocaleLayout({ children, params }: Props) {
  const { lang } = params;
  if (!languages.includes(lang as any)) {
    notFound();
  }
  const messages = (await import(`../../messages/${lang}.json`)).default;
  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider locale={lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}