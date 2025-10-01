import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LAAS - Lentes de Contato por Assinatura | Saraiva Vision",
  description: "Economize até 70% com o primeiro serviço de assinatura de lentes de contato do Brasil. Planos a partir de R$ 162,50/mês com consultas incluídas.",
  keywords: ["lentes de contato", "assinatura", "oftalmologia", "Governador Valadares", "Dr. Philipe Saraiva Cruz", "economia", "lentes por assinatura"],
  authors: [{ name: "Dr. Philipe Saraiva Cruz - CRM-MG 69.870" }],
  openGraph: {
    title: "LAAS - Lentes de Contato por Assinatura | Saraiva Vision",
    description: "Economize até 70% com o primeiro serviço de assinatura de lentes de contato do Brasil",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
