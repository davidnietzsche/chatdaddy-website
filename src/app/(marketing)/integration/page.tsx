import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allIntegrationsQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Integrations — Connect WhatsApp with Your Favorite Apps",
  description:
    "Integrate ChatDaddy with Salesforce, HubSpot, Shopify, and 50+ business tools. Automate WhatsApp workflows with your existing tech stack.",
  path: "/integration",
});

export default async function IntegrationPage() {
  const integrations = await client.fetch(allIntegrationsQuery);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Integrations", href: "/integration" },
        ]}
      />
      <section>
        <h1>Integrations</h1>
        <p>Connect ChatDaddy with your favorite tools</p>

        {/* TODO: Render integration cards grid */}
        {/* Each card links to /application/{slug} */}
      </section>
    </>
  );
}
