import { NextIntlClientProvider, Locale, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import NavMenu from '@/components/NavMenu';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';



export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <NavMenu />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </NextIntlClientProvider>
  );
}
