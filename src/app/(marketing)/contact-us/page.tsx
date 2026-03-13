import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Get in Touch with ChatDaddy",
  description:
    "Contact ChatDaddy for WhatsApp CRM demos, enterprise pricing, technical support, or partnership inquiries. We typically respond within 24 hours.",
  path: "/contact-us",
});

const WHATSAPP_URL = "https://wa.me/60389429381";
const EMAIL = "support@chatdaddy.tech";
const BOOK_DEMO_URL =
  "https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Website";

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Chat with us directly on WhatsApp for the fastest response.",
    href: WHATSAPP_URL,
    cta: "Chat on WhatsApp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    title: "Email",
    description: "Send us a detailed message and we'll get back to you within 24 hours.",
    href: `mailto:${EMAIL}`,
    cta: "Send Email",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: "Book a Demo",
    description: "Schedule a personalized walkthrough of ChatDaddy's features.",
    href: BOOK_DEMO_URL,
    cta: "Schedule Demo",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

export default function ContactUsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact Us", href: "/contact-us" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Questions, Ideas, or Feedback? We&apos;re Listening.
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed">
            Whether you&apos;re curious about our product, need help with something, or just want to explore possibilities, our team is ready to connect.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.title !== "Email" ? "_blank" : undefined}
                rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center rounded-2xl border border-gray-200 p-8 text-center transition-all hover:border-blue-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                  {method.icon}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h2>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{method.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                  {method.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Office</h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="text-[15px] font-semibold text-gray-900 mb-1">TNT The Next Tech Ltd.</p>
            <p className="text-[14px] text-gray-500">Kuala Lumpur, Malaysia</p>
            <p className="text-[14px] text-gray-500 mt-4">
              Email: <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:underline">{EMAIL}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
