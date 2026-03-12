/**
 * JSON-LD Structured Data Components
 *
 * These generate Schema.org markup that powers:
 * - Google Rich Results (stars, FAQs, breadcrumbs, etc.)
 * - AI Answer Engines (Google AI Overviews, Perplexity, ChatGPT search)
 * - Knowledge Graph entries
 */

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Organization Schema (every page) ───
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ChatDaddy",
        url: "https://chatdaddy.tech",
        logo: "https://chatdaddy.tech/logo.png",
        foundingDate: "2018",
        description:
          "ChatDaddy is the most powerful WhatsApp CRM & Business Automation Platform, empowering 23,500+ businesses worldwide.",
        sameAs: [
          "https://www.linkedin.com/company/chatdaddy",
          "https://www.facebook.com/chatdaddy",
          "https://twitter.com/chatdaddy",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Chinese"],
        },
      }}
    />
  );
}

// ─── WebSite Schema (homepage — enables sitelinks search box) ───
export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ChatDaddy",
        url: "https://chatdaddy.tech",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://chatdaddy.tech/blog?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

// ─── SoftwareApplication Schema (AEO: tells AI engines what ChatDaddy IS) ───
export function SoftwareApplicationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "ChatDaddy",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "WhatsApp CRM and Business Automation Platform for sales, marketing, and customer support automation.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free trial available",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "500",
          bestRating: "5",
        },
      }}
    />
  );
}

// ─── FAQ Schema (AEO: directly answers questions for AI engines) ───
interface FaqItem {
  question: string;
  answer: string;
}

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs?.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

// ─── BreadcrumbList Schema ───
interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `https://chatdaddy.tech${item.href}`,
        })),
      }}
    />
  );
}

// ─── BlogPosting Schema (AEO: tells AI engines about articles) ───
interface BlogPostingProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}

export function BlogPostingJsonLd({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
}: BlogPostingProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url,
        image: imageUrl,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
          "@type": "Person",
          name: authorName,
        },
        publisher: {
          "@type": "Organization",
          name: "ChatDaddy",
          logo: {
            "@type": "ImageObject",
            url: "https://chatdaddy.tech/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }}
    />
  );
}

// ─── HowTo Schema (for setup/tutorial pages — AEO gold) ───
interface HowToStep {
  step: string;
  description: string;
}

export function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.step,
          text: s.description,
        })),
      }}
    />
  );
}
