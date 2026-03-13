import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface FeatureSection {
  title: string;
  description: string;
  bullets?: string[];
  reversed?: boolean;
  image?: string;
}

export interface FeatureFaq {
  question: string;
  answer: string;
}

export interface FeaturePageData {
  badge: string;
  headline: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  heroImage?: string;
  sections: FeatureSection[];
  stats?: { value: string; label: string }[];
  faqs?: FeatureFaq[];
}

/* ------------------------------------------------------------------ */
/*  CTA button                                                         */
/* ------------------------------------------------------------------ */

const SIGNUP_URL = "https://app.chatdaddy.tech/SignUp?referralCode=Website";
const BOOK_DEMO_URL =
  "https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Website";

/* ------------------------------------------------------------------ */
/*  Feature Hero                                                       */
/* ------------------------------------------------------------------ */

function FeatureHero({
  badge,
  headline,
  subtitle,
  ctaText,
  ctaHref,
  heroImage,
}: {
  badge: string;
  headline: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  heroImage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Gradient orb */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />

      {/* Grid pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="feature-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="60" stroke="white" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="60" y2="0" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#feature-grid)" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          {badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          {headline}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed mb-10">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref || SIGNUP_URL}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            {ctaText || "Get Started Free"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href={BOOK_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            Book a Demo
          </a>
        </div>

        {/* Hero Image */}
        {heroImage && (
          <div className="mt-12 mx-auto max-w-3xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10">
              <Image
                src={heroImage}
                alt={headline}
                width={900}
                height={560}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature Section Block                                              */
/* ------------------------------------------------------------------ */

function FeatureSectionBlock({
  section,
  index,
}: {
  section: FeatureSection;
  index: number;
}) {
  const isReversed = section.reversed ?? index % 2 !== 0;

  return (
    <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
      {/* Text */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {section.title}
        </h2>
        <p className="text-[16px] leading-relaxed text-gray-500 mb-6">
          {section.description}
        </p>
        {section.bullets && section.bullets.length > 0 && (
          <ul className="space-y-3">
            {section.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600">
                <svg className="mt-1 h-5 w-5 shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Illustration */}
      <div className="flex-1 w-full">
        {section.image ? (
          <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 shadow-lg">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={450}
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/60 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                  <svg className="h-7 w-7 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">{section.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats Band                                                         */
/* ------------------------------------------------------------------ */

function StatsBand({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="bg-[#0a0e1a] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Section                                                        */
/* ------------------------------------------------------------------ */

function FaqSection({ faqs }: { faqs: FeatureFaq[] }) {
  return (
    <section className="py-20 bg-gray-50">
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
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom CTA                                                         */
/* ------------------------------------------------------------------ */

function BottomCTA() {
  return (
    <section className="bg-[#0a0e1a] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/50 mb-8">
          Join 23,500+ businesses using ChatDaddy to automate their WhatsApp conversations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
          >
            Start Free Trial
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href={BOOK_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Layout                                                        */
/* ------------------------------------------------------------------ */

export default function FeaturePageLayout({ data }: { data: FeaturePageData }) {
  return (
    <>
      <FeatureHero
        badge={data.badge}
        headline={data.headline}
        subtitle={data.subtitle}
        ctaText={data.ctaText}
        ctaHref={data.ctaHref}
        heroImage={data.heroImage}
      />

      {/* Feature sections */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-24 lg:space-y-32">
          {data.sections.map((section, i) => (
            <FeatureSectionBlock key={i} section={section} index={i} />
          ))}
        </div>
      </section>

      {/* Stats */}
      {data.stats && data.stats.length > 0 && <StatsBand stats={data.stats} />}

      {/* FAQs — AEO optimized */}
      {data.faqs && data.faqs.length > 0 && <FaqSection faqs={data.faqs} />}

      {/* Bottom CTA */}
      <BottomCTA />
    </>
  );
}
