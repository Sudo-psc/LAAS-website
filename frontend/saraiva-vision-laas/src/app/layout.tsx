import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/compliance/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "LAAS - Lentes de Contato por Assinatura | Saraiva Vision",
    template: "%s | Saraiva Vision LAAS",
  },
  description: "Economize até 70% com o primeiro serviço de assinatura de lentes de contato do Brasil. Planos a partir de R$ 162,50/mês com consultas incluídas.",
  keywords: ["lentes de contato", "assinatura", "oftalmologia", "Governador Valadares", "Dr. Philipe Saraiva Cruz", "economia", "lentes por assinatura", "lentes mensais", "contato direto"],
  authors: [{ name: "Dr. Philipe Saraiva Cruz - CRM-MG 69.870" }],
  creator: "Saraiva Vision",
  publisher: "Saraiva Vision",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saraivavision.com.br'),
  openGraph: {
    title: "LAAS - Lentes de Contato por Assinatura | Saraiva Vision",
    description: "Economize até 70% com o primeiro serviço de assinatura de lentes de contato do Brasil",
    type: "website",
    locale: "pt_BR",
    url: "https://saraivavision.com.br",
    siteName: "Saraiva Vision LAAS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saraiva Vision LAAS - Lentes de Contato por Assinatura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LAAS - Lentes de Contato por Assinatura | Saraiva Vision",
    description: "Economize até 70% com o primeiro serviço de assinatura de lentes de contato do Brasil",
    images: ["/og-image.jpg"],
    creator: "@drphilipesaraiva",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_code_here",
    yandex: "verification_code_here",
    yahoo: "verification_code_here",
  },
  alternates: {
    canonical: "https://saraivavision.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
