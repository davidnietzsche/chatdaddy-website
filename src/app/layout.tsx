import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chatdaddy.tech"),
  title: {
    default: "ChatDaddy | WhatsApp CRM & Business Automation Platform",
    template: "%s | ChatDaddy",
  },
  description:
    "ChatDaddy is the most powerful WhatsApp CRM & Business Automation Platform. Automate sales, marketing, and customer support for 23,500+ businesses worldwide.",
  keywords: [
    "WhatsApp CRM",
    "WhatsApp automation",
    "WhatsApp business",
    "WhatsApp marketing",
    "WhatsApp chatbot",
    "business messaging",
    "customer support automation",
    "ChatDaddy",
  ],
  authors: [{ name: "ChatDaddy" }],
  creator: "ChatDaddy",
  publisher: "ChatDaddy",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chatdaddy.tech",
    siteName: "ChatDaddy",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@chatdaddy",
  },
  // Verification tags — fill these in
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex: "",
    // yahoo: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        {/* Preconnect to Sanity CDN for faster image loads */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className="font-sans antialiased">
        {/* Organization schema on every page — AEO critical */}
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
