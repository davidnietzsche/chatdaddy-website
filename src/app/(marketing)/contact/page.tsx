import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Get in Touch with ChatDaddy",
  description:
    "Contact ChatDaddy for WhatsApp CRM demos, enterprise pricing, technical support, or partnership inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <article>
        <h1>Contact Us</h1>
        {/* TODO: Contact form + WhatsApp chat widget */}
      </article>
    </>
  );
}
