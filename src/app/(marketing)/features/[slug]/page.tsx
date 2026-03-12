import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { featureBySlugQuery, allFeaturesQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  const features = await client.fetch(allFeaturesQuery);
  return features.map((f: any) => ({ slug: f.slug.current || f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = await client.fetch(featureBySlugQuery, { slug });
  if (!feature) return {};

  return buildMetadata({
    title: `${feature.title} — ChatDaddy WhatsApp Automation`,
    description: feature.shortDescription,
    path: `/features/${slug}`,
    seo: feature.seo,
  });
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = await client.fetch(featureBySlugQuery, { slug });
  if (!feature) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: feature.title, href: `/features/${slug}` },
        ]}
      />

      {/* Feature-specific FAQs — AEO structured data */}
      {feature.faqs?.length > 0 && <FaqJsonLd faqs={feature.faqs} />}

      <article>
        <h1>{feature.title}</h1>
        {/* TODO: Render feature detail page */}
      </article>
    </>
  );
}
