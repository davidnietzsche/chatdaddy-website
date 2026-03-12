import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allBlogPostsQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Blog — WhatsApp Business Tips, Guides & Updates",
  description:
    "Expert guides on WhatsApp CRM, business automation, chatbot strategies, and messaging best practices from the ChatDaddy team.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await client.fetch(allBlogPostsQuery);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <section>
        <h1>Blog</h1>
        {/* TODO: Render blog post cards */}
      </section>
    </>
  );
}
