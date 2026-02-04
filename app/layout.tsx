import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateOrganizationJsonLd, generateWebsiteJsonLd } from "@/lib/seo-utils";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SEOtika - Formation SEO et GEO Gratuite à l'Ère de l'IA",
    template: "%s | SEOtika",
  },
  description: siteConfig.description,
  keywords: [
    "formation seo gratuite",
    "formation geo gratuite",
    "apprendre le seo",
    "référencement naturel",
    "seo ia",
    "generative engine optimization",
    "cours seo gratuit",
    "tutoriel seo",
    "formation référencement",
    "seo 2026",
  ],
  authors: [{ name: "SEOtika" }],
  creator: "SEOtika",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "SEOtika - Formation SEO et GEO Gratuite à l'Ère de l'IA",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEOtika - Formation SEO et GEO Gratuite",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@seotika",
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLd data={generateOrganizationJsonLd()} />
        <JsonLd data={generateWebsiteJsonLd()} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
