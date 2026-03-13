import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { integrationBySlugQuery, allIntegrationsQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, HowToJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

// ─── Static generation for all integration pages (ISR) ───
export async function generateStaticParams() {
  const integrations = await client.fetch(allIntegrationsQuery);
  return integrations.map((i: any) => ({ slug: i.slug.current || i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const integration = await client.fetch(integrationBySlugQuery, { slug });
  if (!integration) return {};

  return buildMetadata({
    title: `${integration.title} + ChatDaddy WhatsApp Integration`,
    description:
      integration.shortDescription ||
      `Connect ${integration.title} with ChatDaddy to automate WhatsApp business workflows.`,
    path: `/application/${slug}`,
    seo: integration.seo,
  });
}

export default async function IntegrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const integration = await client.fetch(integrationBySlugQuery, { slug });
  if (!integration) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Integrations", href: "/integration" },
          { name: integration.title, href: `/application/${slug}` },
        ]}
      />

      {/* HowTo schema for setup steps — AEO gold */}
      {integration.setupSteps?.length > 0 && (
        <HowToJsonLd
          name={`How to connect ${integration.title} with ChatDaddy`}
          description={`Step-by-step guide to integrate ${integration.title} with your ChatDaddy WhatsApp automation.`}
          steps={integration.setupSteps}
        />
      )}

      <article>
        <h1>{integration.title} + ChatDaddy Integration</h1>
        {/* TODO: Render integration detail page */}
      </article>
    </>
  );
}
