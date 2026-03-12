import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/metadata";
import { WebSiteJsonLd, SoftwareApplicationJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import HeroSection from "@/components/sections/HeroSection";
import WhyChatDaddy from "@/components/sections/WhyChatDaddy";
import KeyFeatures from "@/components/sections/KeyFeatures";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(homePageQuery);
  return buildMetadata({
    title: "ChatDaddy | WhatsApp CRM & Business Automation Platform",
    description:
      "The most powerful WhatsApp CRM & Business Automation Platform. Automate sales, marketing, and customer support across messaging channels.",
    path: "/",
    seo: page?.seo,
  });
}

export default async function HomePage() {
  const page = await client.fetch(homePageQuery);

  // Extract FAQs from page sections for structured data
  const faqSection = page?.sections?.find((s: any) => s._type === "faqSection");
  const faqs = faqSection?.faqs || [];

  return (
    <>
      {/* Schema.org structured data — AEO critical */}
      <WebSiteJsonLd />
      <SoftwareApplicationJsonLd />
      {faqs.length > 0 && <FaqJsonLd faqs={faqs} />}

      {/* Page content */}
      <article>
        <h1 className="sr-only">
          ChatDaddy — WhatsApp CRM & Business Automation Platform
        </h1>
        <HeroSection />
        <WhyChatDaddy />
        <KeyFeatures />
        <TestimonialsSection />
      </article>
    </>
  );
}
