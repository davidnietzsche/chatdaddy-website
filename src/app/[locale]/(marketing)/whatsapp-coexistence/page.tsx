import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "WhatsApp Co-Existence — Keep Your App While Using Official API",
  description:
    "Keep your WhatsApp mobile app while upgrading to the official API channel. Same number, chat history preserved, zero-downtime migration. Free for ChatDaddy customers.",
  path: "/whatsapp-coexistence",
});

const faqs = [
  {
    question: "Is Coexistence Migration mandatory?",
    answer:
      "Yes. Businesses using WhatsApp automation must migrate to an official coexistence configuration to remain compliant with Meta policies effective 2026.",
  },
  {
    question: "Will my WhatsApp number change after migration?",
    answer:
      "No. Coexistence Migration allows businesses to retain their existing WhatsApp number.",
  },
  {
    question: "Will existing chat history be affected?",
    answer:
      "No. Chat history is preserved as part of the coexistence setup.",
  },
  {
    question: "Does this apply to all WhatsApp Business accounts?",
    answer:
      "This applies to accounts using automation or operating on direct or non-compliant connections. Eligibility must be verified.",
  },
  {
    question: "When will enforcement begin?",
    answer:
      "Meta has announced enforcement of updated WhatsApp automation policies beginning in 2026.",
  },
  {
    question: "What happens if migration is not completed?",
    answer:
      "Non-compliant accounts may experience service disruption, number suspension, or loss of access to WhatsApp automation features.",
  },
  {
    question: "Is this endorsed by Meta?",
    answer:
      "This migration follows Meta's official WhatsApp Business API requirements. ChatDaddy operates as a Meta Official Business Solution Partner.",
  },
  {
    question: "Is there a fee for Coexistence Migration?",
    answer:
      "No. Coexistence Migration is provided at no cost for eligible businesses. ChatDaddy supports this process as a Meta Official Business Solution Partner.",
  },
];

const migrationSteps = [
  { step: "01", title: "Eligibility Check", description: "Our team reviews your account status and current configuration to confirm you qualify. Most ChatDaddy customers are eligible." },
  { step: "02", title: "Official Configuration", description: "We enable Co-Existence on your account following Meta's official process. Our expert team handles everything." },
  { step: "03", title: "Dual Channel Activated", description: "Your account now has both the mobile app channel and the official API channel. Both operate independently without interference." },
  { step: "04", title: "Upgrade Complete", description: "You're all set. Continue using the mobile app while enjoying all of ChatDaddy's automation features. No service interruption." },
];

const upgradeBenefits = [
  { title: "Ban risk significantly reduced", description: "Meta officially certified — your account is treated as a 'legitimate account,' drastically lowering the chance of being banned." },
  { title: "Mobile app works as normal", description: "No impact on existing workflows. Bosses and employees can still reply via phone." },
  { title: "Broadcasting speed 20x faster", description: "From 1/sec to 20/sec. Reach your audience dramatically faster." },
  { title: "Fast template review", description: "Message templates usually approved within 3-5 minutes — no long waits." },
  { title: "0% message markup", description: "Pay Meta directly — no middleman markup. Messaging costs are fully transparent." },
];

const requirements = [
  { title: "7-Day Active History", description: "Real customer conversations required. No bans on the account." },
  { title: "Business Verification", description: "Facebook Business Manager must be verified." },
  { title: "Supported Region", description: "HK / MY / SG / ID etc. Nigeria and South Africa numbers are not supported." },
  { title: "Latest WhatsApp", description: "Required for QR code scanning during the migration process." },
];

export default function WhatsAppCoexistencePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "WhatsApp Co-Existence", href: "/whatsapp-coexistence" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-[13px] font-medium text-orange-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Important — Free Migration
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            WhatsApp Co-Existence
          </h1>
          <p className="text-lg font-medium text-blue-300 mb-4">Secure Dual-Channel Edition</p>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
            Keep your WhatsApp mobile app while upgrading to the official API channel. Same number, chat history preserved, zero-downtime migration. As a ChatDaddy customer, this upgrade is completely free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-[13px] text-white/80">Number unchanged</span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-[13px] text-white/80">Chat history preserved</span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-[13px] text-white/80">2 minutes setup</span>
          </div>
          <a
            href="https://www.app.chatdaddy.tech/Login?source=coexist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
          >
            Check Your Eligibility
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* What is Co-Existence */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">What Is the Secure Dual-Channel Edition?</h2>
          <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
            Co-Existence gives your WhatsApp account two channels at once: the mobile app channel and the official API channel. Keep using your phone for everyday conversations while leveraging the API for automation, bulk broadcasts, and advanced features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">Convenience Channel</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Continue using the WhatsApp mobile app you already know. Everyday chats, voice calls, sending photos and videos — everything stays the same. Your customers won&apos;t notice any change.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-8">
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Secure Channel</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Official API</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Through Meta&apos;s officially certified API channel, unlock all of ChatDaddy&apos;s features: auto-replies, bulk broadcasts, CRM integration, AI customer service, and more. Fully compliant, with the highest level of account protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">Co-Existence Upgrade Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upgradeBenefits.map((benefit, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-200 transition-colors">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          {/* Warning callout */}
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="text-[14px] text-red-800 leading-relaxed">
              <strong>2025 Q3-Q4: WhatsApp ban data grew 300%</strong> — 6.8 million accounts banned in a single month in 2025. If you continue using old methods, expect 4+ bans in 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Migration Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">Four Simple Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {migrationSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">What You Need Before Upgrading</h2>
          <p className="text-center text-gray-500 mb-12">Before starting the migration, make sure your account meets these criteria.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {requirements.map((req, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-[15px] font-semibold text-gray-900 mb-1">{req.title}</h3>
                <p className="text-[14px] text-gray-500">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white px-6 py-5 transition-shadow hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between text-[16px] font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Free Migration Program</div>
          <h2 className="text-3xl font-bold text-white mb-4">Migrate With An Official Meta Partner</h2>
          <p className="text-lg text-white/50 mb-6">
            As a Meta Business Solution Partner, we facilitate this migration on Meta&apos;s behalf for eligible businesses.
          </p>
          <ul className="inline-flex flex-col items-start gap-2 text-left mb-8">
            {["No cost for eligible businesses", "Keep your existing number", "Chat history preserved", "Zero downtime migration", "Full Meta compliance"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[14px] text-white/70">
                <svg className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://www.app.chatdaddy.tech/Login?source=coexist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
          >
            Check Your Eligibility
          </a>
          <p className="mt-3 text-[12px] text-white/30">Takes less than 2 minutes</p>
          <p className="mt-8 text-[13px] text-orange-400/80">
            Enforcement Deadline — Meta enforcement of updated WhatsApp automation policies begins in 2026. Early migration is recommended.
          </p>
        </div>
      </section>
    </>
  );
}
