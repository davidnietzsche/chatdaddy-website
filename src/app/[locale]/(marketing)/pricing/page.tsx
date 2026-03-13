import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import PricingCards from "@/components/sections/PricingCards";
import PricingComparison from "@/components/sections/PricingComparison";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Plans for Every Business Size",
  description:
    "ChatDaddy pricing plans for WhatsApp CRM & automation. Free trial available. Scale from startup to enterprise with flexible messaging plans.",
  path: "/pricing",
});

export default function PricingPage() {
  // Pricing FAQs — AEO optimization for "how much does ChatDaddy cost" queries
  const pricingFaqs = [
    {
      question: "How much does ChatDaddy cost?",
      answer:
        "ChatDaddy offers flexible pricing plans starting with a free trial. Plans scale based on the number of contacts and messages. Contact us for enterprise pricing.",
    },
    {
      question: "Is there a free trial for ChatDaddy?",
      answer:
        "Yes, ChatDaddy offers a free trial so you can test all features before committing to a paid plan.",
    },
    {
      question: "Can I change my ChatDaddy plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      <FaqJsonLd faqs={pricingFaqs} />
      <PricingCards />
      <PricingComparison />
    </>
  );
}
