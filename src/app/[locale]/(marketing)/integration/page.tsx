import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allIntegrationsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Integrations — Connect WhatsApp with Your Favorite Apps",
  description:
    "Integrate ChatDaddy with Salesforce, HubSpot, Shopify, and 50+ business tools. Automate WhatsApp workflows with your existing tech stack.",
  path: "/integration",
});

type CategoryLabel = {
  label: string;
  value: string;
};

const categories: CategoryLabel[] = [
  { label: "All", value: "all" },
  { label: "CRM", value: "crm" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Messaging", value: "messaging" },
  { label: "Productivity", value: "productivity" },
  { label: "Marketing", value: "marketing" },
];

/* Fallback integrations shown when CMS has no data */
const fallbackIntegrations = [
  {
    title: "WhatsApp Business API",
    slug: { current: "whatsapp" },
    shortDescription:
      "Connect to the official WhatsApp Business API for reliable, scalable messaging at enterprise level.",
    category: "messaging",
    logo: null,
    emoji: "\uD83D\uDCAC",
  },
  {
    title: "Shopify",
    slug: { current: "shopify" },
    shortDescription:
      "Sync orders, send shipping updates, and recover abandoned carts automatically via WhatsApp.",
    category: "ecommerce",
    logo: null,
    emoji: "\uD83D\uDECD\uFE0F",
  },
  {
    title: "HubSpot",
    slug: { current: "hubspot" },
    shortDescription:
      "Sync contacts and deals between HubSpot CRM and WhatsApp conversations seamlessly.",
    category: "crm",
    logo: null,
    emoji: "\uD83E\uDDE1",
  },
  {
    title: "Zapier",
    slug: { current: "zapier" },
    shortDescription:
      "Connect ChatDaddy to 5,000+ apps with no-code automation workflows via Zapier.",
    category: "productivity",
    logo: null,
    emoji: "\u26A1",
  },
  {
    title: "Salesforce",
    slug: { current: "salesforce" },
    shortDescription:
      "Two-way sync between Salesforce and WhatsApp for unified customer relationship management.",
    category: "crm",
    logo: null,
    emoji: "\u2601\uFE0F",
  },
  {
    title: "WooCommerce",
    slug: { current: "woocommerce" },
    shortDescription:
      "Automate order confirmations, delivery updates, and customer follow-ups on WhatsApp.",
    category: "ecommerce",
    logo: null,
    emoji: "\uD83D\uDED2",
  },
  {
    title: "Google Sheets",
    slug: { current: "google-sheets" },
    shortDescription:
      "Export contacts, chat data, and analytics directly to Google Sheets for custom reporting.",
    category: "productivity",
    logo: null,
    emoji: "\uD83D\uDCCA",
  },
  {
    title: "Mailchimp",
    slug: { current: "mailchimp" },
    shortDescription:
      "Combine email and WhatsApp marketing for omnichannel campaign automation.",
    category: "marketing",
    logo: null,
    emoji: "\uD83D\uDCE7",
  },
  {
    title: "Make (Integromat)",
    slug: { current: "make" },
    shortDescription:
      "Build advanced multi-step automation scenarios connecting ChatDaddy to hundreds of apps.",
    category: "productivity",
    logo: null,
    emoji: "\uD83D\uDD27",
  },
  {
    title: "Stripe",
    slug: { current: "stripe" },
    shortDescription:
      "Send payment links and receipts through WhatsApp. Get notified of successful payments instantly.",
    category: "ecommerce",
    logo: null,
    emoji: "\uD83D\uDCB3",
  },
  {
    title: "Freshdesk",
    slug: { current: "freshdesk" },
    shortDescription:
      "Create and manage support tickets from WhatsApp conversations automatically.",
    category: "crm",
    logo: null,
    emoji: "\uD83C\uDFAB",
  },
  {
    title: "Slack",
    slug: { current: "slack" },
    shortDescription:
      "Get WhatsApp message notifications in Slack and reply to customers without switching apps.",
    category: "messaging",
    logo: null,
    emoji: "\uD83D\uDCAC",
  },
];

type Integration = {
  title: string;
  slug: { current: string };
  shortDescription: string | null;
  category: string | null;
  logo: any;
  emoji?: string;
};

function IntegrationCard({ item }: { item: Integration }) {
  const hasLogo = item.logo?.asset;

  return (
    <Link
      href={`/application/${item.slug.current}`}
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 transition-colors group-hover:bg-blue-50">
        {hasLogo ? (
          <Image
            src={urlFor(item.logo).width(56).height(56).url()}
            alt={`${item.title} logo`}
            width={56}
            height={56}
            className="rounded-lg object-contain"
          />
        ) : (
          <span className="text-2xl" role="img" aria-label={item.title}>
            {item.emoji || "\uD83D\uDD17"}
          </span>
        )}
      </div>

      <h2 className="text-[17px] font-semibold text-gray-900 mb-2">
        {item.title}
      </h2>

      {item.shortDescription && (
        <p className="text-[14px] leading-relaxed text-gray-500 line-clamp-3 mb-4">
          {item.shortDescription}
        </p>
      )}

      {item.category && (
        <span className="mt-auto inline-flex self-start rounded-full bg-gray-100 px-3 py-1 text-[12px] font-medium text-gray-600 capitalize">
          {item.category === "ecommerce" ? "E-Commerce" : item.category}
        </span>
      )}

      <div className="mt-4 flex items-center gap-1 text-[13px] font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
        Learn more
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export default async function IntegrationPage() {
  let integrations: Integration[] = [];
  try {
    integrations = await client.fetch(allIntegrationsQuery);
  } catch {
    // CMS unavailable — will use fallback
  }

  const items: Integration[] =
    integrations && integrations.length > 0
      ? integrations
      : fallbackIntegrations;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Integrations", href: "/integration" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            50+ Integrations
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Connect WhatsApp with Your Favorite Tools
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed">
            Seamlessly integrate ChatDaddy with your CRM, e-commerce platform,
            helpdesk, and more. Automate workflows and keep everything in sync.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => {
              const count =
                cat.value === "all"
                  ? items.length
                  : items.filter((i) => i.category === cat.value).length;
              if (cat.value !== "all" && count === 0) return null;
              return (
                <span
                  key={cat.value}
                  className="shrink-0 rounded-full border border-gray-200 px-4 py-1.5 text-[13px] font-medium text-gray-600 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
                >
                  {cat.label}
                  <span className="ml-1.5 text-gray-400">{count}</span>
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <IntegrationCard key={item.slug.current} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t See Your Tool?
          </h2>
          <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
            ChatDaddy connects to thousands of apps through Zapier and Make. We
            also build custom integrations for enterprise customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
            >
              Request an Integration
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-xl border border-gray-200 px-6 py-3 text-[15px] font-semibold text-gray-700 transition-all hover:border-blue-200 hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
