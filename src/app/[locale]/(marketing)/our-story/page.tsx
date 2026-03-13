import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd, OrganizationJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Our Story — Building the Future of Business Messaging",
  description:
    "Founded in 2018, ChatDaddy has empowered 23,500+ businesses worldwide to automate WhatsApp sales, marketing, and customer support across Southeast Asia and beyond.",
  path: "/our-story",
});

const milestones = [
  { year: "2018", title: "Founded in Malaysia", description: "ChatDaddy was born from the vision of making WhatsApp a powerful business tool for SMEs across Southeast Asia." },
  { year: "2019", title: "1,000 Businesses Onboarded", description: "Reached our first thousand customers, proving demand for WhatsApp automation in the region." },
  { year: "2020", title: "WhatsApp API Partnership", description: "Became an official WhatsApp Business Solution Provider, enabling enterprise-grade messaging at scale." },
  { year: "2021", title: "Multi-Channel Expansion", description: "Added Instagram, Messenger, and Telegram support, creating a true omni-channel messaging platform." },
  { year: "2022", title: "AI Chatbot Launch", description: "Launched AI-powered chatbot builder with NLU capabilities, automating 70% of routine customer queries." },
  { year: "2023", title: "10,000+ Businesses", description: "Crossed 10,000 active businesses and expanded into 15+ countries across Asia Pacific." },
  { year: "2024", title: "CRM & Commerce Suite", description: "Launched integrated CRM, WhatsApp Shop, and payment features for end-to-end customer lifecycle management." },
  { year: "2025", title: "23,500+ Businesses", description: "Serving 23,500+ businesses globally with over 1 million messages processed daily." },
];

const whyChooseUs = [
  {
    title: "Proven Automation Expertise",
    description: "With years of experience in marketing automation, we've built tools that remove complexity and help you work smarter, not harder.",
  },
  {
    title: "Dedicated to Your Success",
    description: "Your success is our success. Our customer success team is here every step of the way to ensure you get the most from our platform.",
  },
  {
    title: "Relentless Innovation",
    description: "The digital world moves fast — and so do we. We're constantly innovating to deliver new features, smarter AI capabilities, and better integrations.",
  },
];

const coreValues = [
  { title: "We never stop learning", description: "We're committed to learning, improving, and evolving every single day." },
  { title: "We keep an open mind", description: "New ideas and constructive feedback are fuel for innovation. We value every perspective." },
  { title: "We win as a team", description: "Collaboration makes us stronger. Together, we adapt faster and achieve more." },
  { title: "We reward initiative", description: "A great idea put into action today is worth more than a perfect plan left for tomorrow." },
  { title: "We learn from mistakes", description: "Taking risks and testing new ideas is part of how we grow. Every misstep is a chance to improve." },
  { title: "We strive for excellence", description: "In everything we do, we aim for the highest quality and the best outcomes for our customers." },
];

export default function OurStoryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Our Story", href: "/our-story" },
        ]}
      />
      <OrganizationJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Empowering Businesses to Connect, Convert, and Grow
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed">
            At ChatDaddy, we believe every conversation is an opportunity to build stronger relationships and grow your business. Since our founding in 2018, we&apos;ve empowered 23,500+ clients worldwide to streamline sales, marketing, and customer support across messaging channels.
          </p>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">23,500+</div>
              <div className="mt-1 text-sm text-gray-500">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">15+</div>
              <div className="mt-1 text-sm text-gray-500">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">1M+</div>
              <div className="mt-1 text-sm text-gray-500">Messages Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">50+</div>
              <div className="mt-1 text-sm text-gray-500">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ChatDaddy */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why Businesses Choose ChatDaddy</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">From fast-growing startups to established enterprises, across e-commerce, education, health & beauty, and professional services.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-8 hover:border-blue-200 hover:shadow-sm transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">The Building Blocks of Our Success</h2>
          <p className="text-center text-white/50 mb-12 max-w-2xl mx-auto">Our core values guide everything we do.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-[16px] font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-lg text-white/50 mb-8">
            We&apos;re always looking for talented people who share our passion for transforming business communication.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
            >
              View Open Positions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
