import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import AccessibilityBar from "@/components/layout/AccessibilityBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ASESP — Associação dos Surdos do Estado de São Paulo",
  description:
    "Site oficial da ASESP. Conheça nossa missão, associe-se e apoie a comunidade surda de São Paulo.",
  keywords: ["ASESP", "surdos", "Libras", "inclusão", "São Paulo", "associação"],
  openGraph: {
    title: "ASESP — Associação dos Surdos do Estado de São Paulo",
    description:
      "Site oficial da ASESP. Conheça nossa missão, associe-se e apoie a comunidade surda de São Paulo.",
    locale: "pt_BR",
    type: "website",
  },
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
        <AccessibilityBar />
        <Header />
        {/* pt-[100px] = barra acessibilidade (36px) + header (64px) */}
        <div id="main-content" className="flex-1 pt-[100px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
