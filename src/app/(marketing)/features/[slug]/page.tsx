import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import { featurePages, featureSlugs } from "@/data/features";

export function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = featurePages[slug];
  if (!data) return {};

  return buildMetadata({
    title: `${data.badge} — ChatDaddy WhatsApp Automation`,
    description: data.subtitle,
    path: `/features/${slug}`,
  });
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = featurePages[slug];
  if (!data) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: data.badge, href: `/features/${slug}` },
        ]}
      />

      {data.faqs && data.faqs.length > 0 && <FaqJsonLd faqs={data.faqs} />}

      <FeaturePageLayout data={data} />
    </>
  );
}
