import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Partner Program — Earn Revenue with ChatDaddy",
  description:
    "Join ChatDaddy's partner program. Earn recurring commissions by referring businesses, reselling our WhatsApp CRM, or building integrations.",
  path: "/join-partnership",
});

const PARTNER_FORM_URL = "https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Partnership";

const partnerTypes = [
  {
    title: "Marketing Affiliate",
    description: "Earn commissions by referring ChatDaddy to your audience. Your traffic, your revenue.",
    benefits: [
      "Recurring commission on referrals",
      "Dedicated partner dashboard",
      "Marketing materials provided",
      "Performance tracking & analytics",
    ],
  },
  {
    title: "Marketing Agency",
    description: "Enhance your services with ChatDaddy's automation tools — chatbots, campaigns, and more — for your clients.",
    benefits: [
      "White-label reporting",
      "Client management tools",
      "Priority support channel",
      "Co-marketing opportunities",
    ],
  },
  {
    title: "White Label Partner",
    description: "Use our technology under your own brand. Offer tailor-branded automation solutions without building from scratch.",
    benefits: [
      "Full white-label branding",
      "Wholesale pricing",
      "Custom domain support",
      "Dedicated account manager",
    ],
  },
  {
    title: "App Partner",
    description: "Join the ChatDaddy ecosystem as an app partner. Integrate your tools and collaborate closely with our community.",
    benefits: [
      "Full API access and documentation",
      "Marketplace listing",
      "Joint customer acquisition",
      "Technical support and sandbox",
    ],
  },
];

export default function JoinPartnershipPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Partner Program", href: "/join-partnership" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Partner Program
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Become a Partner and Unlock New Opportunities
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed mb-10">
            Join the ChatDaddy Partnership Program and access exclusive rewards, resources, and revenue opportunities. Together, we&apos;ll bring the power of WhatsApp automation and multichannel marketing to more businesses worldwide.
          </p>
          <a
            href={PARTNER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
          >
            Become a Partner
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Partner Track</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Multiple ways to partner with ChatDaddy, tailored to your business model.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-8 hover:border-blue-200 hover:shadow-sm transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-[14px] text-gray-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Partner?</h2>
          <p className="text-gray-500 mb-8">Apply today and our partnership team will get in touch within 48 hours.</p>
          <a
            href={PARTNER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
