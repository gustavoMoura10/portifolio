import { NextIntlClientProvider, Locale, hasLocale } from 'next-intl';
import '../globals.css';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import NavMenu from '@/components/NavMenu';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gustavo Moura",
  description: "Portfólio de Gustavo Moura",
  keywords: "Gustavo Moura, Desenvolvedor, Front-end, Back-end, Fullstack, Portfolio, Banco de Dados, Node.js, Java, Javascript, React, Angular, Vue, Express, Next.js, Nest.js, MongoDB, MySQL, TypeScript, PostgreSQL, SQL Server",
};
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
