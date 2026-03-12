"use client";

import { useState } from "react";
import Link from "next/link";

interface Tab {
  label: string;
  description: string;
  learnMoreHref?: string;
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
  },
  {
    label: "Chatbot",
    description:
      "Respond instantly with intelligent chatbots that qualify leads, answer questions, and guide customers through every step.",
  },
  {
    label: "Pay",
    description:
      "Simplify transactions with seamless payment options, giving customers a fast, secure, and friction-free checkout experience.",
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
  },
  {
    label: "CRM",
    description:
      "Organize customer data into a single view, making it easy to track interactions, nurture relationships, and boost retention.",
  },
  {
    label: "Automation",
    description:
      "Streamline repetitive tasks with intelligent automation, saving time and scaling your workflows without extra resources.",
  },
];

function TabGroup({
  heading,
  tabs,
  gradientFrom,
  gradientTo,
}: {
  heading: string;
  tabs: Tab[];
  gradientFrom: string;
  gradientTo: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <div>
      <h3 className="mb-6 font-heading text-xl font-bold text-[#191a1c] sm:text-2xl">
        {heading}
      </h3>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Tabs + content */}
        <div>
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveIndex(i)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  i === activeIndex
                    ? "bg-[#0f5bff] text-white"
                    : "bg-[#f4f8ff] text-[#667085] hover:bg-[#e5e5e8]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="mt-6">
            <p className="text-base leading-relaxed text-[#667085]">
              {active.description}
            </p>
            {active.learnMoreHref && (
              <Link
                href={active.learnMoreHref}
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#0f5bff] hover:underline"
              >
                Learn more
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* Mockup placeholder */}
        <div
          className="flex aspect-[4/3] items-center justify-center rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          <div className="rounded-xl border border-white/20 bg-white/10 px-10 py-14 text-center backdrop-blur-sm">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-white/20" />
            <p className="text-sm text-white/60">Feature Illustration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KeyFeatures() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#f4f8ff] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0f5bff]">
            Key Features
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold text-[#191a1c] sm:text-4xl lg:text-5xl">
            Build Around Your Growth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#667085]">
            From attracting new prospects to retaining loyal customers, ChatDaddy
            equips your team with everything you need to grow — in one seamless
            platform.
          </p>
          <Link
            href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
            className="mt-8 inline-flex items-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Start For Free
          </Link>
        </div>

        {/* Tab groups */}
        <div className="mt-20 space-y-20">
          <TabGroup
            heading="From getting customers to converting leads\u2026"
            tabs={acquireTabs}
            gradientFrom="#0f5bff"
            gradientTo="#6366f1"
          />
          <TabGroup
            heading="to keeping customers and managing your growth"
            tabs={retainTabs}
            gradientFrom="#25D366"
            gradientTo="#0f5bff"
          />
        </div>
      </div>
    </section>
  );
}
