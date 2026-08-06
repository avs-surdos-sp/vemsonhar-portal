import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ASESP — Associação de Surdos do Estado de São Paulo",
  description:
    "Site oficial da ASESP. Conheça nossa missão, associe-se e apoie a comunidade surda de São Paulo.",
  keywords: ["ASESP", "surdos", "Libras", "inclusão", "São Paulo", "associação"],
  openGraph: {
    title: "ASESP — Associação de Surdos do Estado de São Paulo",
    description:
      "Site oficial da ASESP. Conheça nossa missão, associe-se e apoie a comunidade surda de São Paulo.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        {/*
          SiteChrome renderiza AccessibilityBar + Header + Footer apenas
          fora do /studio — o Sanity Studio precisa da tela toda livre.
        */}
        <SiteChrome>{children}</SiteChrome>
        <SpeedInsights />
      </body>
    </html>
  );
}
