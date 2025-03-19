import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Gustavo Moura",
    description: "Portfólio de Gustavo Moura",
    keywords: "Gustavo Moura, Desenvolvedor, Front-end, Back-end, Fullstack, Portfolio, Banco de Dados, Node.js, Java, Javascript, React, Angular, Vue, Express, Next.js, Nest.js, MongoDB, MySQL, TypeScript, PostgreSQL, SQL Server",
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}