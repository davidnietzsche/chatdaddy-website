import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { pageBySlugQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(pageBySlugQuery, { slug: "our-story" });
  return buildMetadata({
    title: "Our Story — Building the Future of Business Messaging",
    description:
      "Founded in 2018, ChatDaddy has empowered 23,500+ businesses worldwide to automate WhatsApp sales, marketing, and customer support.",
    path: "/our-story",
    seo: page?.seo,
  });
}

export default async function OurStoryPage() {
  const page = await client.fetch(pageBySlugQuery, { slug: "our-story" });

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Our Story", href: "/our-story" },
        ]}
      />
      <article>
        {/* TODO: Render page sections from CMS */}
        <h1>Our Story</h1>
      </article>
    </>
  );
}
