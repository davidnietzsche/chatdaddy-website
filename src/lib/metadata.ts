import type { Metadata } from "next";

const SITE_URL = "https://chatdaddy.tech";
const SITE_NAME = "ChatDaddy";
const DEFAULT_DESCRIPTION =
  "ChatDaddy is the most powerful WhatsApp CRM & Business Automation Platform. Automate sales, marketing, and customer support across messaging channels for 23,500+ businesses worldwide.";

interface SeoInput {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: { asset?: { url?: string } };
  canonicalUrl?: string;
  noIndex?: boolean;
  aiSummary?: string;
}

interface MetadataOptions {
  title: string;
  description?: string;
  path: string;
  seo?: SeoInput;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  seo,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: MetadataOptions): Metadata {
  const metaTitle = seo?.metaTitle || title;
  const metaDescription = seo?.metaDescription || description || DEFAULT_DESCRIPTION;
  const canonical = seo?.canonicalUrl || `${SITE_URL}${path}`;
  const ogImageUrl = seo?.ogImage?.asset?.url || `${SITE_URL}/og-default.png`;

  return {
    title: metaTitle,
    description: metaDescription,

    // ─── Canonical URL (critical for SEO) ───
    alternates: {
      canonical,
    },

    // ─── Robots ───
    robots: seo?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },

    // ─── Open Graph ───
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      type: type === "article" ? "article" : "website",
      locale: "en_US",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: metaTitle }],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },

    // ─── Twitter ───
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImageUrl],
    },
  };
}

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION };
