import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const galetoVintage = localFont({
  src: "./fonts/GalleroVintage.otf",
  variable: "--font-galeto-vintage",
});

const gotham = localFont({
  src: "./fonts/Gotham.ttf",
  weight: "100 900",
  style: "normal",
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title: {
    default: "Mambo Gastro Bar - Réveillon 2025",
    template: "%s | Mambo Gastro Bar"
  },
  description: "Celebre o Réveillon 2025 no Mambo Gastro Bar com gastronomia excepcional, música ao vivo e uma experiência inesquecível em Fazenda Rio Grande, PR.",
  keywords: ["Réveillon 2025", "Mambo Gastro Bar", "Fazenda Rio Grande", "gastronomia", "música ao vivo", "festa de ano novo"],
  authors: [{ name: "Mambo Gastro Bar" }],
  creator: "Mambo Gastro Bar",
  publisher: "Mambo Gastro Bar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.mambogastrobar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mambo Gastro Bar - Réveillon 2025",
    description: "Celebre o Réveillon 2025 com gastronomia excepcional e música ao vivo no Mambo Gastro Bar.",
    url: "https://www.mambogastrobar.com",
    siteName: "Mambo Gastro Bar",
    images: [
      {
        url: "https://www.mambogastrobar.com/images/reveillon-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Mambo Gastro Bar Réveillon 2025",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mambo Gastro Bar - Réveillon 2025",
    description: "Celebre o Réveillon 2025 com gastronomia excepcional e música ao vivo no Mambo Gastro Bar.",
    images: ["https://www.mambogastrobar.com/images/reveillon-2025.jpg"],
    creator: "@mambogastrobar",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${galetoVintage.variable} ${gotham.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}