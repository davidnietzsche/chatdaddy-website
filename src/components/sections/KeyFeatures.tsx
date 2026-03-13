"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Tab {
  label: string;
  description: string;
  learnMoreHref: string;
}

const acquireTabs: Tab[] = [
  {
    label: "Marketing",
    description:
      "Expand your reach effortlessly by targeting the right audiences with precision campaigns, helping you attract and convert more prospects.",
    learnMoreHref: "/features/marketing",
  },
  {
    label: "Shop",
    description:
      "Showcase your products and services in an engaging storefront, making it simple for customers to browse, discover, and buy.",
    learnMoreHref: "/features/shop",
  },
  {
    label: "Chatbot",
    description:
      "Respond instantly with intelligent chatbots that qualify leads, answer questions, and guide customers through every step.",
    learnMoreHref: "/features/chatbot",
  },
  {
    label: "Pay",
    description:
      "Simplify transactions with seamless payment options, giving customers a fast, secure, and friction-free checkout experience.",
    learnMoreHref: "/features/pay",
  },
];

const retainTabs: Tab[] = [
  {
    label: "Team Inbox",
    description:
      "Manage all conversations in one shared inbox, ensuring clear communication and faster resolutions across your entire team.",
    learnMoreHref: "/features/team-inbox",
  },
  {
    label: "Notification",
    description:
      "Keep customers informed in real time with instant notifications, helping you stay connected and responsive at scale.",
    learnMoreHref: "/features/notification",
  },
  {
    label: "CRM",
    description:
      "Organize customer data into a single view, making it easy to track interactions, nurture relationships, and boost retention.",
    learnMoreHref: "/features/crm",
  },
  {
    label: "Automation",
    description:
      "Streamline repetitive tasks with intelligent automation, saving time and scaling your workflows without extra resources.",
    learnMoreHref: "/features/automation",
  },
];

/* Tab icons — simple blue outlines matching Framer */
const tabIcons: Record<string, React.ReactNode> = {
  Marketing: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Shop: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  Chatbot: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  Pay: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  "Team Inbox": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  Notification: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  ),
  CRM: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Automation: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Payment Request Mockup (matching Framer exactly)                   */
/* ------------------------------------------------------------------ */

function PaymentMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />

      {/* Phone card */}
      <div className="relative w-full max-w-[320px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]">
            <span className="text-[11px] font-bold text-white">CD</span>
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-semibold text-white">ChatDaddy</p>
            <p className="text-[11px] text-white/60">online</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="white" opacity="0.6">
            <circle cx="8" cy="3" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="8" cy="13" r="1.5" />
          </svg>
        </div>

        {/* Chat body */}
        <div className="space-y-3 bg-[#ece5dd] px-4 py-5">
          {/* Incoming message */}
          <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
            <p className="text-[13px] leading-relaxed text-[#191a1c]">
              I&apos;d like to complete my payment 💳
            </p>
          </div>

          {/* Payment Request card */}
          <div className="max-w-[85%] ml-auto rounded-lg bg-white p-4 shadow-sm">
            <p className="text-[14px] font-bold text-[#191a1c]">Payment Request</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[13px] text-[#667085]">Amount</span>
              <span className="text-[14px] font-bold text-[#0f5bff]">RM 23.60</span>
            </div>
            <button className="mt-3 w-full rounded-lg bg-[#075e54] py-2.5 text-[13px] font-semibold text-white">
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Profile Mockup (matching Framer exactly)                   */
/* ------------------------------------------------------------------ */

function ContactProfileMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />

      {/* Profile card */}
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-2 text-[#667085]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
            <span className="text-[14px] font-semibold text-[#191a1c]">Contact Profile</span>
          </div>

          {/* Profile info */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
              SK
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#191a1c]">Sarah Kim</p>
              <p className="text-[12px] text-[#667085]">TechFlow Solutions · Marketing Lead</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { label: "VIP Customer", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
              { label: "Active", color: "text-blue-600 bg-blue-50 border-blue-200" },
              { label: "Enterprise", color: "text-purple-600 bg-purple-50 border-purple-200" },
              { label: "Renewal Q3", color: "text-amber-600 bg-amber-50 border-amber-200" },
            ].map((tag) => (
              <span
                key={tag.label}
                className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Deal Stage */}
          <div className="mt-5">
            <p className="text-[11px] font-medium text-[#667085]">Deal Stage</p>
            <div className="mt-2 flex gap-1">
              {[true, true, true, true, false].map((filled, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${filled ? "bg-[#0f5bff]" : "bg-gray-200"}`}
                />
              ))}
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[#0f5bff]">Negotiation</span>
              <span className="text-[13px] font-bold text-[#191a1c]">RM 12,500</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-5">
            <p className="text-[11px] font-medium text-[#667085]">Recent Activity</p>
            <div className="mt-2.5 space-y-2.5">
              {[
                { color: "bg-blue-500", label: "Quote sent", detail: "Enterprise plan proposal" },
                { color: "bg-emerald-500", label: "Call completed", detail: "30 min demo session" },
                { color: "bg-orange-500", label: "Note added", detail: "Interested in API integration" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2.5">
                  <div className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${item.color}`} />
                  <p className="text-[12px] text-[#191a1c]">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-[#667085]"> — {item.detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Vertical Tabs (Accordion style matching Framer)                    */
/* ------------------------------------------------------------------ */

function VerticalTabs({
  tabs,
  activeIndex,
  onSelect,
}: {
  tabs: Tab[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="divide-y divide-[#e5e5e8]">
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={tab.label}
            onClick={() => onSelect(i)}
            className="block w-full text-left transition-colors"
          >
            <div className="py-5">
              {/* Icon + Label row */}
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-[#0f5bff]/10 text-[#0f5bff]" : "bg-gray-100 text-[#667085]"}`}>
                  {tabIcons[tab.label]}
                </div>
                <span
                  className={`text-[17px] font-semibold transition-colors ${
                    isActive ? "text-[#191a1c]" : "text-[#667085]"
                  }`}
                >
                  {tab.label}
                </span>
              </div>

              {/* Expanded description */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isActive ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-[52px]">
                  <p className="text-[14px] leading-[1.65] text-[#667085]">
                    {tab.description}
                  </p>
                  <Link
                    href={tab.learnMoreHref}
                    className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0f5bff] hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn more
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function KeyFeatures() {
  const [acquireActive, setAcquireActive] = useState(0);
  const [retainActive, setRetainActive] = useState(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Header ---- */}
        <div className="mx-auto max-w-[680px] text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e5e8] bg-white px-5 py-2 text-sm font-medium text-[#191a1c] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
                fill="#0f5bff"
              />
            </svg>
            Key Features
          </span>

          <h2 className="mt-7 font-heading text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-[#191a1c] sm:text-[40px] lg:text-[48px]">
            Build Around Your Growth
          </h2>

          <p className="mt-5 text-[17px] leading-[1.6] text-[#667085]">
            From attracting new prospects to retaining loyal customers, ChatDaddy
            equips your team with everything you need to grow — in one seamless
            platform.
          </p>

          <Link
            href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#0f5bff] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_2px_12px_rgba(15,91,255,0.3)] transition-all hover:bg-[#0d4fd9] hover:shadow-[0_4px_20px_rgba(15,91,255,0.4)]"
          >
            <span className="h-2 w-2 rounded-full bg-white/60" />
            Start For Free
          </Link>
        </div>

        {/* ---- ChatDaddy icon ---- */}
        <div className="mt-20 flex flex-col items-center">
          <div className="rounded-[28px] shadow-[0_8px_40px_rgba(15,91,255,0.15)]">
            <Image
              src="/images/chatdaddy-logo.png"
              alt="ChatDaddy"
              width={120}
              height={120}
              className="rounded-[28px]"
            />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#25D366]" />
            <span className="text-sm font-medium text-[#191a1c]">
              Prospect Discovery
            </span>
          </div>
        </div>

        {/* ---- Tab Group 1: Getting Customers ---- */}
        <div className="mt-24">
          <h3 className="mb-10 font-heading text-[24px] font-bold tracking-[-0.01em] text-[#191a1c] sm:text-[32px] lg:text-[40px]">
            From getting customers to converting leads&hellip;
          </h3>

          <div className="overflow-hidden rounded-3xl border border-[#e5e5e8] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="grid lg:grid-cols-2">
              {/* Left: Tabs */}
              <div className="flex flex-col justify-center px-8 py-6 lg:px-12 lg:py-10">
                <VerticalTabs
                  tabs={acquireTabs}
                  activeIndex={acquireActive}
                  onSelect={setAcquireActive}
                />
              </div>

              {/* Right: Mockup */}
              <div className="min-h-[400px] sm:min-h-[480px]">
                <PaymentMockup />
              </div>
            </div>
          </div>
        </div>

        {/* ---- Tab Group 2: Keeping Customers ---- */}
        <div className="mt-24">
          <h3 className="mb-10 font-heading text-[24px] font-bold tracking-[-0.01em] text-[#191a1c] sm:text-[32px] lg:text-[40px]">
            to keeping customers and managing your growth
          </h3>

          <div className="overflow-hidden rounded-3xl border border-[#e5e5e8] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="grid lg:grid-cols-2">
              {/* Left: Mockup */}
              <div className="order-2 min-h-[400px] sm:min-h-[520px] lg:order-1">
                <ContactProfileMockup />
              </div>

              {/* Right: Tabs */}
              <div className="order-1 flex flex-col justify-center px-8 py-6 lg:order-2 lg:px-12 lg:py-10">
                <VerticalTabs
                  tabs={retainTabs}
                  activeIndex={retainActive}
                  onSelect={setRetainActive}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
