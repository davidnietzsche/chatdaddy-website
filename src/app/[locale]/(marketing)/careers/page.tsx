import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Join ChatDaddy & Shape the Future of Messaging",
  description:
    "Join ChatDaddy's growing team. We're building the most powerful WhatsApp CRM & automation platform. See open positions in engineering, sales, and more.",
  path: "/careers",
});

const perks = [
  { title: "Personal Growth", description: "An excellent career incubator where you'll sharpen your skills, expand your knowledge, and keep learning every day." },
  { title: "Fast-Track Career Development", description: "Grow alongside a rapidly expanding company with opportunities to build and lead your own team." },
  { title: "Competitive Salary", description: "We believe talent is our greatest asset — which is why we make investing in people our top priority." },
];

const departments = [
  {
    name: "Engineering",
    roles: [
      { title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time" },
      { title: "Backend Engineer (Node.js)", location: "Remote", type: "Full-time" },
      { title: "Mobile Engineer (React Native)", location: "Remote", type: "Full-time" },
    ],
  },
  {
    name: "Product & Design",
    roles: [
      { title: "Product Manager", location: "Remote / KL", type: "Full-time" },
      { title: "UI/UX Designer", location: "Remote", type: "Full-time" },
    ],
  },
  {
    name: "Sales & Growth",
    roles: [
      { title: "Enterprise Account Executive", location: "Singapore / KL", type: "Full-time" },
      { title: "Growth Marketing Manager", location: "Remote", type: "Full-time" },
      { title: "Customer Success Manager", location: "Remote", type: "Full-time" },
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            We&apos;re Hiring
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Build the Future of AI-Powered Customer Engagement
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
            Join a global team of innovators, builders, and problem-solvers. At ChatDaddy, you&apos;ll accelerate your career and personal growth while shaping how businesses connect with customers through messaging, automation, and AI.
          </p>
          <a
            href="mailto:hiring@chatdaddy.tech"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
          >
            Send resume to hiring@chatdaddy.tech
          </a>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">Why Join ChatDaddy?</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">We believe great work comes from great people in great environments.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:border-blue-200 transition-colors">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-10">
            {departments.map((dept, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{dept.name}</h3>
                <div className="space-y-3">
                  {dept.roles.map((role, j) => (
                    <a
                      key={j}
                      href="mailto:careers@chatdaddy.tech"
                      className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-4 transition-all hover:border-blue-200 hover:shadow-sm group"
                    >
                      <div>
                        <div className="text-[15px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{role.title}</div>
                        <div className="text-[13px] text-gray-500 mt-0.5">{role.location} · {role.type}</div>
                      </div>
                      <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-[15px] mb-4">Don&apos;t see a role that fits? We&apos;re always looking for great people.</p>
            <a
              href="mailto:careers@chatdaddy.tech"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
            >
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
