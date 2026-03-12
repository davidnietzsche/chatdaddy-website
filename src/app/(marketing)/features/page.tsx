import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allFeaturesQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Features — WhatsApp Automation, AI Chatbot & CRM Tools",
  description:
    "Explore ChatDaddy's powerful features: WhatsApp automation, AI chatbot, broadcast messaging, team inbox, analytics, and 50+ integrations.",
  path: "/features",
});

export default async function FeaturesPage() {
  const features = await client.fetch(allFeaturesQuery);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
        ]}
      />
      <section>
        <h1>Features</h1>
        {/* TODO: Render feature cards grouped by category */}
      </section>
    </>
  );
}
