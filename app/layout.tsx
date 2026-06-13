import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Lato } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

/* Fonts (PRD §2.2, §8) — self-hosted via next/font with display: swap.
   CSS variables are consumed by globals.css and component modules. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title:
    "The Corporate Baklawa — Premium Corporate Gifting Solutions India",
  description:
    "Curated corporate gifts for every occasion — employee welcome kits, festive hampers, executive gifts & sustainable gifting with pan-India delivery and custom branding.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "The Corporate Baklawa",
    description:
      "Premium corporate gifting. Strengthening relationships, celebrating milestones, elevating brands.",
    images: site.ogImage ? [{ url: site.ogImage }] : undefined,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A3C2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${lato.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
