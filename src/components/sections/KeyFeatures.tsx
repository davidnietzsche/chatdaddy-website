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
  icon: string; // path under /images/
}

const acquireTabs: Tab[] = [
  {
    label: "Marketing",
    description:
      "Expand your reach effortlessly by targeting the right audiences with precision campaigns, helping you attract and convert more prospects.",
    learnMoreHref: "/features/marketing",
    icon: "/images/feature-icon-1.png",
  },
  {
    label: "Shop",
    description:
      "Showcase your products and services in an engaging storefront, making it simple for customers to browse, discover, and buy.",
    learnMoreHref: "/features/shop",
    icon: "/images/feature-icon-2.png",
  },
  {
    label: "Chatbot",
    description:
      "Respond instantly with intelligent chatbots that qualify leads, answer questions, and guide customers through every step.",
    learnMoreHref: "/features/chatbot",
    icon: "/images/feature-icon-3.png",
  },
  {
    label: "Pay",
    description:
      "Simplify transactions with seamless payment options, giving customers a fast, secure, and friction-free checkout experience.",
    learnMoreHref: "/features/pay",
    icon: "/images/feature-icon-4.png",
  },
];

const retainTabs: Tab[] = [
  {
    label: "Team Inbox",
    description:
      "Manage all conversations in one shared inbox, ensuring clear communication and faster resolutions across your entire team.",
    learnMoreHref: "/features/team-inbox",
    icon: "/images/feature-icon-5.png",
  },
  {
    label: "Notification",
    description:
      "Keep customers informed in real time with instant notifications, helping you stay connected and responsive at scale.",
    learnMoreHref: "/features/notification",
    icon: "/images/feature-icon-6.png",
  },
  {
    label: "CRM",
    description:
      "Organize customer data into a single view, making it easy to track interactions, nurture relationships, and boost retention.",
    learnMoreHref: "/features/crm",
    icon: "/images/feature-icon-7.png",
  },
  {
    label: "Automation",
    description:
      "Streamline repetitive tasks with intelligent automation, saving time and scaling your workflows without extra resources.",
    learnMoreHref: "/features/automation",
    icon: "/images/feature-icon-8.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Sparkle SVG used in the badge                                      */
/* ------------------------------------------------------------------ */

function SparkleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mr-1.5"
    >
      <path
        d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
        fill="#0f5bff"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  WhatsApp-style Broadcast Mockup (Tab Group 1)                      */
/* ------------------------------------------------------------------ */

function BroadcastMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-[#0f5bff] p-6 sm:p-10">
      {/* Phone-like card */}
      <div className="w-full max-w-[340px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <span className="text-xs font-bold text-white">CD</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">ChatDaddy</p>
            <p className="text-[11px] text-white/70">online</p>
          </div>
        </div>

        {/* Chat body */}
        <div className="space-y-3 bg-[#ece5dd] px-3 py-4">
          {/* Broadcast card */}
          <div className="rounded-lg bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#0f5bff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-semibold text-[#191a1c]">
                Broadcast — June Birthday VIP
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#667085]">
              <span>To</span>
              <div className="flex -space-x-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[8px] font-bold text-blue-600 ring-1 ring-white">
                  AS
                </div>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-100 text-[8px] font-bold text-pink-600 ring-1 ring-white">
                  MR
                </div>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[8px] font-bold text-amber-600 ring-1 ring-white">
                  JL
                </div>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[8px] font-bold text-gray-500 ring-1 ring-white">
                  +
                </div>
              </div>
            </div>
          </div>

          {/* Outgoing message bubble */}
          <div className="ml-8 rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
            <p className="text-[13px] leading-relaxed text-[#191a1c]">
              Hi{" "}
              <span className="rounded bg-blue-100 px-1 text-[#0f5bff]">
                {"{{customer first name}}"}
              </span>
              ! 🎂 Happy Birthday! Here&apos;s a special gift for you.
            </p>
            <p className="mt-1 text-right text-[10px] text-[#667085]">10:30 AM ✓✓</p>
          </div>

          {/* Tracking bubble */}
          <div className="ml-8 rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
            <p className="text-[13px] text-[#191a1c]">
              📦 Tracking: <span className="text-[#0f5bff] underline">BD-20250613</span>
            </p>
            <p className="mt-1 text-right text-[10px] text-[#667085]">10:30 AM ✓✓</p>
          </div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 bg-[#f0f0f0] px-3 py-2">
          <div className="flex-1 rounded-full bg-white px-3 py-1.5 text-[12px] text-[#999]">
            Type a message...
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Team Inbox Mockup (Tab Group 2)                                    */
/* ------------------------------------------------------------------ */

const inboxConversations = [
  {
    name: "Sarah Kim",
    initials: "SK",
    color: "bg-purple-100 text-purple-600",
    time: "2m ago",
    message: "I need help with my subscription renewal",
    assigned: "Alex",
    assignedColor: "bg-blue-100 text-blue-600",
  },
  {
    name: "James Wong",
    initials: "JW",
    color: "bg-emerald-100 text-emerald-600",
    time: "15m ago",
    message: "Thanks! The issue is resolved now",
    assigned: "Maya",
    assignedColor: "bg-pink-100 text-pink-600",
  },
  {
    name: "Rachel Lee",
    initials: "RL",
    color: "bg-amber-100 text-amber-600",
    time: "1h ago",
    message: "Can you send me the pricing details?",
    assigned: null,
    assignedColor: "",
  },
];

function TeamInboxMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#0f5bff] to-white p-6 sm:p-10">
      <div className="w-full max-w-[380px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5e5e8] px-5 py-4">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191a1c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-sm font-semibold text-[#191a1c]">
              Team Inbox
            </span>
          </div>
          <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
            3 unread
          </span>
        </div>

        {/* Conversation list */}
        <div className="divide-y divide-[#e5e5e8]">
          {inboxConversations.map((conv) => (
            <div
              key={conv.name}
              className="flex items-start gap-3 px-5 py-3.5 transition hover:bg-gray-50"
            >
              {/* Avatar */}
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${conv.color}`}
              >
                {conv.initials}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#191a1c]">
                    {conv.name}
                  </span>
                  <span className="flex-shrink-0 text-[11px] text-[#667085]">
                    {conv.time}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-[13px] text-[#667085]">
                  {conv.message}
                </p>
                <div className="mt-1.5">
                  {conv.assigned ? (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${conv.assignedColor}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                      Assigned: {conv.assigned}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      Unassigned
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 border-t border-[#e5e5e8] px-5 py-3">
          {["Assign to me", "Quick reply", "Resolve"].map((label) => (
            <button
              key={label}
              className="flex-1 rounded-lg border border-[#e5e5e8] bg-white px-2 py-2 text-[11px] font-medium text-[#191a1c] transition hover:bg-gray-50"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Vertical Tabs Component                                            */
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
    <div className="divide-y divide-[#e5e5e8] border-y border-[#e5e5e8]">
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={tab.label}
            onClick={() => onSelect(i)}
            className="block w-full text-left transition-colors"
          >
            <div className="px-1 py-4">
              {/* Icon + Label row */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={40}
                    height={40}
                    className="object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(28%) sepia(96%) saturate(2476%) hue-rotate(218deg) brightness(101%) contrast(103%)",
                    }}
                  />
                </div>
                <span
                  className={`text-base font-semibold ${
                    isActive ? "text-[#191a1c]" : "text-[#667085]"
                  }`}
                >
                  {tab.label}
                </span>
              </div>

              {/* Expanded content (selected only) */}
              {isActive && (
                <div className="mt-3 pl-[52px]">
                  <p className="text-sm leading-relaxed text-[#667085]">
                    {tab.description}
                  </p>
                  <Link
                    href={tab.learnMoreHref}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-[#0f5bff] hover:underline"
                    onClick={(e) => e.stopPropagation()}
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              )}
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
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Header ---- */}
        <div className="mx-auto max-w-[700px] text-center">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-[#e5e5e8] bg-white px-4 py-1.5 text-sm font-medium text-[#191a1c]">
            <SparkleIcon />
            Key Features
          </span>

          <h2 className="mt-6 font-heading text-3xl font-bold text-[#191a1c] sm:text-4xl lg:text-[48px] lg:leading-tight">
            Build Around Your Growth
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-[#667085]">
            From attracting new prospects to retaining loyal customers, ChatDaddy
            equips your team with everything you need to grow — in one seamless
            platform.
          </p>

          <Link
            href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0f5bff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d4fd9]"
          >
            <span className="h-2 w-2 rounded-full bg-white opacity-80" />
            Start For Free
          </Link>
        </div>

        {/* ---- ChatDaddy icon + Prospect Discovery ---- */}
        <div className="mt-16 flex flex-col items-center">
          <div className="relative">
            <div className="rounded-3xl shadow-xl">
              <Image
                src="/images/chatdaddy-icon.png"
                alt="ChatDaddy"
                width={140}
                height={140}
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#25D366]" />
            <span className="text-sm font-medium text-[#191a1c]">
              Prospect Discovery
            </span>
          </div>
        </div>

        {/* ---- Tab Group 1: Acquire ---- */}
        <div className="mt-20">
          <h3 className="mb-10 font-heading text-2xl font-semibold text-[#191a1c] sm:text-3xl lg:text-[36px] lg:leading-snug">
            From getting customers to converting leads&hellip;
          </h3>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Tabs */}
            <div className="flex flex-col justify-center">
              <VerticalTabs
                tabs={acquireTabs}
                activeIndex={acquireActive}
                onSelect={setAcquireActive}
              />
            </div>

            {/* Right: Mockup */}
            <div className="min-h-[420px] sm:min-h-[500px]">
              <BroadcastMockup />
            </div>
          </div>
        </div>

        {/* ---- Tab Group 2: Retain ---- */}
        <div className="mt-28">
          <h3 className="mb-10 font-heading text-2xl font-semibold text-[#191a1c] sm:text-3xl lg:text-[36px] lg:leading-snug">
            to keeping customers and managing your growth
          </h3>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Mockup (swapped order) */}
            <div className="order-2 min-h-[420px] sm:min-h-[500px] lg:order-1">
              <TeamInboxMockup />
            </div>

            {/* Right: Tabs */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <VerticalTabs
                tabs={retainTabs}
                activeIndex={retainActive}
                onSelect={setRetainActive}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
