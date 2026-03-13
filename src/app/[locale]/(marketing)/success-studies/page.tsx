import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Success Stories — How Businesses Grow with ChatDaddy",
  description:
    "See how 23,500+ businesses use ChatDaddy to increase sales, automate customer support, and grow revenue through WhatsApp automation.",
  path: "/success-studies",
});

const caseStudies = [
  {
    company: "CoinFactory",
    industry: "Blockchain & FinTech",
    logo: "/images/framer/success-studies-coinfactory.png",
    quote: "ChatDaddy increased our whitepaper downloads by 50% and client call bookings by 40%, so we can focus on deeper blockchain projects.",
    stats: [
      { value: "35%", label: "Higher Lead Conversion" },
      { value: "78%", label: "Fewer Repetitive Inquiries" },
      { value: "50%", label: "More Whitepaper Downloads" },
    ],
    challenge: "Handling high volumes of repetitive blockchain inquiries while maintaining quality engagement with serious prospects.",
    solution: "Implemented ChatDaddy's keyword reply with button feature to automate FAQ responses, qualify leads, and route serious inquiries to the sales team.",
    results: "35% higher lead conversion rate, 78% reduction in repetitive inquiries, and 40% increase in client call bookings.",
  },
  {
    company: "Contact Lens Easy",
    industry: "E-Commerce",
    logo: "/images/framer/success-studies-contact-lens-easy.png",
    quote: "Elevate your contact lens shopping experience with our online store. WhatsApp automation revolutionized customer engagement and conversions.",
    stats: [
      { value: "37%", label: "Boost in Repeat Purchases" },
      { value: "90%", label: "Queries Resolved Instantly" },
      { value: "3x", label: "Faster Customer Response" },
    ],
    challenge: "Managing high volumes of product inquiries and reorder requests manually, leading to slow response times and lost sales.",
    solution: "Deployed ChatDaddy's chatbot for instant product recommendations, automated reorder reminders, and broadcast campaigns for promotions.",
    results: "37% boost in repeat purchases, 90% of frequent customer queries resolved instantly, and significantly improved customer satisfaction.",
  },
  {
    company: "GFG Group",
    industry: "Financial Services",
    logo: "/images/framer/success-studies-gfg-group.png",
    quote: "Discover the game-changing potential of WhatsApp automation with GFG Group. Increase sales from 300 to 600 orders in just one month!",
    stats: [
      { value: "2x", label: "Sales Orders in 1 Month" },
      { value: "80%", label: "Less Time on Messages" },
      { value: "22%", label: "More Property Sales" },
    ],
    challenge: "Spending excessive time manually managing client messages and calls, limiting the team's ability to focus on closing deals.",
    solution: "Implemented WhatsApp Business API with ChatDaddy for automated client communication, targeted broadcasts for property developments, and streamlined message management.",
    results: "80% reduction in time spent managing client messages, 22% additional property sales from targeted WhatsApp messages, and doubled order volume from 300 to 600 in one month.",
  },
  {
    company: "JWC Academy",
    industry: "Education",
    logo: "/images/framer/success-studies-jwc-academy.png",
    quote: "Elevate communication at JWC Academy with ChatDaddy's WhatsApp automation. Streamline processes, engage effectively. Discover the power of automation!",
    stats: [
      { value: "62%", label: "More Course Enrollments" },
      { value: "80%", label: "Fewer Missed Deadlines" },
      { value: "3x", label: "Faster Student Response" },
    ],
    challenge: "Difficulty managing student inquiries, course registration follow-ups, and deadline reminders across multiple programs.",
    solution: "Deployed ChatDaddy's automation for student onboarding, course deadline reminders, and personalized follow-up sequences for enrollment nurturing.",
    results: "62% more course enrollments, 80% fewer missed course deadlines, and dramatically faster response times for student inquiries.",
  },
];

export default function SuccessStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Success Stories", href: "/success-studies" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Success Stories
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Real Results From Real Businesses
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed">
            See how companies across industries are using ChatDaddy to transform their customer conversations into growth.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-16">
          {caseStudies.map((study, i) => (
            <article key={i} className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    {study.logo && (
                      <Image
                        src={study.logo}
                        alt={study.company}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-lg object-contain"
                      />
                    )}
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{study.company}</h2>
                      <p className="text-sm text-gray-500 mt-0.5">{study.industry}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    {study.stats.map((stat, j) => (
                      <div key={j} className="text-center">
                        <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <blockquote className="text-[16px] italic text-gray-600 border-l-3 border-blue-500 pl-4 mb-8">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-wider text-gray-400 mb-2">Challenge</h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-wider text-gray-400 mb-2">Solution</h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-wider text-gray-400 mb-2">Results</h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{study.results}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Your Success Story Starts Here</h2>
          <p className="text-lg text-white/50 mb-8">
            Join 23,500+ businesses growing with ChatDaddy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.chatdaddy.tech"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
            <a
              href="https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
