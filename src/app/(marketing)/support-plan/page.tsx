import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Support Plans — ChatDaddy Customer Success",
  description:
    "ChatDaddy support plans for every business. From self-service help center to dedicated success managers with priority SLA. Choose the plan that fits your needs.",
  path: "/support-plan",
});

const plans = [
  {
    name: "Basic",
    description: "Self-service support for small teams getting started.",
    price: "Included",
    features: [
      "Help Center access",
      "Community forum",
      "Email support (48hr response)",
      "Product documentation",
      "Video tutorials",
    ],
    cta: "Get Started",
    href: "https://app.chatdaddy.tech",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Priority support for growing businesses.",
    price: "Contact Us",
    features: [
      "Everything in Basic",
      "Priority email support (24hr response)",
      "Live chat support (business hours)",
      "WhatsApp support channel",
      "Onboarding assistance",
      "Monthly check-in calls",
    ],
    cta: "Contact Sales",
    href: "https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=SupportPlan",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Dedicated support for large organizations.",
    price: "Custom",
    features: [
      "Everything in Professional",
      "Dedicated Customer Success Manager",
      "4-hour SLA for critical issues",
      "24/7 emergency support",
      "Custom integration support",
      "Quarterly business reviews",
      "Training sessions for your team",
    ],
    cta: "Contact Sales",
    href: "https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=SupportPlan",
    highlighted: false,
  },
];

export default function SupportPlanPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Support Plan", href: "/support-plan" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Support That Scales With You
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed">
            From self-service to dedicated success management, choose the support level that matches your business needs.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-blue-500 ring-1 ring-blue-500 shadow-lg shadow-blue-50"
                    : "border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-4">Most Popular</div>
                )}
                <h2 className="text-xl font-bold text-gray-900">{plan.name}</h2>
                <p className="text-[14px] text-gray-500 mt-1 mb-4">{plan.description}</p>
                <div className="text-2xl font-bold text-gray-900 mb-6">{plan.price}</div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[14px] text-gray-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target={plan.href.startsWith("http") ? "_blank" : undefined}
                  rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block w-full rounded-xl px-6 py-3 text-center text-[15px] font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 hover:-translate-y-0.5"
                      : "border border-gray-200 text-gray-700 hover:border-blue-200 hover:text-blue-600"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
