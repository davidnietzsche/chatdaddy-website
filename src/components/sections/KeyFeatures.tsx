"use client";

import { useState, useRef, useEffect } from "react";
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

/* Tab icons */
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
/*  WhatsApp Phone Mockup — single continuous conversation              */
/*  All 4 sections stacked, scrolls to active section on tab change    */
/* ------------------------------------------------------------------ */

// Section offsets (in px) for each tab — tuned to scroll to the right spot
const SECTION_OFFSETS = [0, 320, 580, 830];

function WhatsAppPhoneMockup({ activeIndex }: { activeIndex: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: SECTION_OFFSETS[activeIndex] || 0,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 sm:p-8">
      {/* Phone frame */}
      <div className="relative w-full max-w-[340px] overflow-hidden rounded-[28px] bg-white shadow-[0_8px_60px_rgba(0,0,0,0.25)]">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-[#075e54] px-4 py-1.5">
          <span className="text-[10px] text-white/70">9:41</span>
          <div className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity="0.7"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity="0.7"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#075e54] px-3 pb-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
            <span className="text-[10px] font-bold text-white">CD</span>
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-white">ChatDaddy</p>
            <p className="text-[10px] text-white/60">online</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" opacity="0.7"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </div>

        {/* Scrollable conversation area */}
        <div
          ref={scrollRef}
          className="h-[420px] overflow-hidden bg-[#ece5dd]"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="px-3 py-3 space-y-1">
            {/* ═══════════ SECTION 1: Marketing ═══════════ */}
            <div className="mb-3">
              {/* Section label */}
              <div className="mx-auto mb-2 w-fit rounded-md bg-white/80 px-3 py-1 shadow-sm">
                <p className="text-[10px] font-medium text-[#667085]">Broadcast — June Birthday VIP</p>
              </div>
              {/* Recipients row */}
              <div className="mb-2 flex items-center gap-1.5 px-1">
                {[
                  { initials: "AS", bg: "bg-violet-500" },
                  { initials: "MR", bg: "bg-rose-500" },
                  { initials: "JL", bg: "bg-amber-500" },
                ].map((a) => (
                  <div key={a.initials} className={`flex h-6 w-6 items-center justify-center rounded-full ${a.bg} text-[8px] font-bold text-white`}>
                    {a.initials}
                  </div>
                ))}
                <button className="flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-gray-400 text-[10px] text-gray-400">+</button>
                <span className="text-[10px] text-[#667085] ml-1">Add</span>
              </div>
              {/* Broadcast message bubble */}
              <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
                <p className="text-[12px] leading-relaxed text-[#191a1c]">
                  Hi <span className="rounded bg-blue-100 px-1 py-0.5 text-[10px] font-medium text-[#0f5bff]">{"{{customer first name}}"}</span>! 🎂 Happy Birthday! Here&apos;s a special gift for you.
                </p>
                <p className="mt-1.5 text-[12px] text-[#191a1c]">
                  Your tracking: <span className="rounded bg-gray-100 px-1 py-0.5 font-mono text-[10px]">{"{{tracking number}}"}</span>
                </p>
                <p className="mt-1 text-right text-[9px] text-[#667085]">10:30 AM</p>
              </div>
            </div>

            {/* ═══════════ SECTION 2: Shop ═══════════ */}
            <div className="mb-3">
              <div className="mx-auto mb-2 w-fit rounded-md bg-white/80 px-3 py-1 shadow-sm">
                <p className="text-[10px] font-medium text-[#667085]">Shop</p>
              </div>
              {/* Customer message */}
              <div className="mb-2 ml-auto max-w-[75%] rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
                <p className="text-[12px] text-[#191a1c]">Hi! I&apos;d like to check my order 🛒</p>
                <p className="mt-0.5 text-right text-[9px] text-[#667085]">10:32 AM</p>
              </div>
              {/* Order summary card */}
              <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2.5 shadow-sm">
                <p className="text-[12px] font-bold text-[#191a1c]">Order Summary</p>
                <div className="mt-1.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#667085]">Items</span>
                    <span className="text-[11px] font-medium text-[#191a1c]">2 items</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#667085]">Estimated Total</span>
                    <span className="text-[11px] font-bold text-[#191a1c]">RM 23.60</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="text-[11px]">⏳</span>
                    <span className="text-[11px] font-medium text-amber-500">Pending Payment</span>
                  </div>
                </div>
                <p className="mt-1 text-right text-[9px] text-[#667085]">10:33 AM</p>
              </div>
            </div>

            {/* ═══════════ SECTION 3: Chatbot ═══════════ */}
            <div className="mb-3">
              <div className="mx-auto mb-2 w-fit rounded-md bg-white/80 px-3 py-1 shadow-sm">
                <p className="text-[10px] font-medium text-[#667085]">Chatbot</p>
              </div>
              {/* Customer asks about hours */}
              <div className="mb-2 ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
                <p className="text-[12px] text-[#191a1c]">What are your business hours? 🕐</p>
                <p className="mt-0.5 text-right text-[9px] text-[#667085]">10:35 AM</p>
              </div>
              {/* Bot reply */}
              <div className="mb-2 max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-50">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#0f5bff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </span>
                  <span className="text-[9px] font-medium text-[#0f5bff]">Bot</span>
                </div>
                <p className="text-[12px] leading-relaxed text-[#191a1c]">
                  We&apos;re open Mon–Fri, 9 AM – 6 PM (GMT+8).
                </p>
                <p className="mt-1 text-right text-[9px] text-[#667085]">10:35 AM</p>
              </div>
              {/* Customer asks about tracking */}
              <div className="mb-2 ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
                <p className="text-[12px] text-[#191a1c]">Can I track my order?</p>
                <p className="mt-0.5 text-right text-[9px] text-[#667085]">10:36 AM</p>
              </div>
              {/* Bot reply */}
              <div className="mb-2 max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-50">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#0f5bff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </span>
                  <span className="text-[9px] font-medium text-[#0f5bff]">Bot</span>
                </div>
                <p className="text-[12px] leading-relaxed text-[#191a1c]">
                  Sure! Just share your order number and I&apos;ll look it up 📦
                </p>
                <p className="mt-1 text-right text-[9px] text-[#667085]">10:36 AM</p>
              </div>
              {/* Knowledge base badge */}
              <div className="mx-auto w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1">
                <p className="text-[9px] font-medium text-[#0f5bff] flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#0f5bff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Knowledge Base connected
                </p>
              </div>
            </div>

            {/* ═══════════ SECTION 4: Pay ═══════════ */}
            <div className="mb-3">
              <div className="mx-auto mb-2 w-fit rounded-md bg-white/80 px-3 py-1 shadow-sm">
                <p className="text-[10px] font-medium text-[#667085]">Pay</p>
              </div>
              {/* Customer message */}
              <div className="mb-2 ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
                <p className="text-[12px] text-[#191a1c]">I&apos;d like to complete my payment 💳</p>
                <p className="mt-0.5 text-right text-[9px] text-[#667085]">10:38 AM</p>
              </div>
              {/* Payment request card */}
              <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2.5 shadow-sm">
                <p className="text-[12px] font-bold text-[#191a1c]">Payment Request</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[11px] text-[#667085]">Amount</span>
                  <span className="text-[12px] font-bold text-[#0f5bff]">RM 23.60</span>
                </div>
                <button className="mt-2 w-full rounded-lg bg-[#075e54] py-2 text-[11px] font-semibold text-white">
                  Pay now
                </button>
                <p className="mt-1 text-right text-[9px] text-[#667085]">10:38 AM</p>
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="h-4" />
          </div>
        </div>

        {/* Message input bar */}
        <div className="flex items-center gap-2 bg-[#f0f0f0] px-3 py-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667085" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          <div className="flex-1 rounded-full bg-white px-3 py-1.5">
            <p className="text-[11px] text-[#667085]">Type a message...</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Retain Mockup — stacked cards on light lavender background          */
/* ------------------------------------------------------------------ */

const RETAIN_SECTION_OFFSETS = [0, 420, 780, 1120];

function RetainStackedMockup({ activeIndex }: { activeIndex: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: RETAIN_SECTION_OFFSETS[activeIndex] || 0,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#e8eeff] p-6 sm:p-8">
      {/* Subtle decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e8eeff] via-[#f0f2ff] to-[#e0e8ff]" />

      <div
        ref={scrollRef}
        className="relative h-[480px] w-full max-w-[400px] overflow-hidden space-y-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* ═══════════ CARD 1: Team Inbox ═══════════ */}
        <div className="rounded-2xl bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-[14px] font-bold text-[#191a1c]">Team Inbox</span>
            </div>
            <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[10px] font-semibold text-red-500">3 unread</span>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "Sarah Kim",
                initials: "SK",
                bg: "bg-purple-500",
                preview: "I need help with my subscription renewal",
                time: "2m ago",
                assigned: "Alex",
              },
              {
                name: "James Wong",
                initials: "JW",
                bg: "bg-emerald-500",
                preview: "Thanks! The issue is resolved now",
                time: "15m ago",
                assigned: "Maya",
              },
              {
                name: "Rachel Lee",
                initials: "RL",
                bg: "bg-rose-500",
                preview: "Can you send me the pricing details?",
                time: "1h ago",
                assigned: null,
              },
            ].map((conv) => (
              <div key={conv.name} className="flex items-start gap-3 rounded-xl bg-gray-50/80 p-3">
                <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${conv.bg} text-[11px] font-bold text-white`}>
                  {conv.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-[#191a1c]">{conv.name}</span>
                    <span className="text-[10px] text-[#667085]">{conv.time}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-[#667085] truncate">{conv.preview}</p>
                  <p className="mt-1 text-[10px] text-[#667085]">
                    {conv.assigned ? (
                      <>Assigned: <span className="font-medium text-[#191a1c]">{conv.assigned}</span></>
                    ) : (
                      <span className="text-amber-500 font-medium">Unassigned</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-lg bg-[#0f5bff] py-2 text-[11px] font-semibold text-white">Assign to me</button>
            <button className="flex-1 rounded-lg border border-gray-200 py-2 text-[11px] font-semibold text-[#667085]">Quick reply</button>
            <button className="rounded-lg border border-gray-200 px-3 py-2 text-[11px] font-semibold text-green-600">Resolve</button>
          </div>
        </div>

        {/* ═══════════ CARD 2: Notification ═══════════ */}
        <div className="rounded-2xl bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2 mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span className="text-[14px] font-bold text-[#191a1c]">Campaign Analytics</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: "Delivered", value: "1,247", trend: "↑12%", trendColor: "text-green-500" },
              { label: "Open Rate", value: "89%", trend: "↑5%", trendColor: "text-green-500" },
              { label: "Clicks", value: "342", trend: "—  0%", trendColor: "text-gray-400" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-100 bg-gray-50 p-2.5 text-center">
                <p className="text-[10px] text-[#667085]">{stat.label}</p>
                <p className="mt-0.5 text-[16px] font-bold text-[#191a1c]">{stat.value}</p>
                <p className={`text-[10px] font-medium ${stat.trendColor}`}>{stat.trend}</p>
              </div>
            ))}
          </div>

          {/* Activity feed */}
          <p className="text-[10px] font-medium text-[#667085] mb-2">Activity</p>
          <div className="space-y-2">
            {[
              { icon: "📤", text: "Campaign 'Summer Sale' sent" },
              { icon: "💬", text: "New reply from Sarah Kim" },
              { icon: "⚠️", text: "Rate limit warning" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-[12px]">{item.icon}</span>
                <p className="text-[11px] text-[#191a1c]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════ CARD 3: CRM ═══════════ */}
        <div className="rounded-2xl bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-[14px] font-bold text-[#191a1c]">Contact Profile</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">SK</div>
            <div>
              <p className="text-[14px] font-bold text-[#191a1c]">Sarah Kim</p>
              <p className="text-[11px] text-[#667085]">TechFlow Solutions · Marketing Lead</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {[
              { label: "VIP Customer", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
              { label: "Active", color: "text-blue-600 bg-blue-50 border-blue-200" },
              { label: "Enterprise", color: "text-purple-600 bg-purple-50 border-purple-200" },
              { label: "Renewal Q3", color: "text-amber-600 bg-amber-50 border-amber-200" },
            ].map((tag) => (
              <span key={tag.label} className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${tag.color}`}>
                {tag.label}
              </span>
            ))}
          </div>

          <div className="mb-3">
            <p className="text-[10px] font-medium text-[#667085]">Deal Stage</p>
            <div className="mt-1.5 flex gap-1">
              {[true, true, true, true, false].map((filled, i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full ${filled ? "bg-[#0f5bff]" : "bg-gray-200"}`} />
              ))}
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#0f5bff]">Negotiation</span>
              <span className="text-[12px] font-bold text-[#191a1c]">RM 12,500</span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-medium text-[#667085]">Recent Activity</p>
            <div className="mt-1.5 space-y-1.5">
              {[
                { color: "bg-blue-500", label: "Quote sent", detail: "Enterprise plan proposal" },
                { color: "bg-emerald-500", label: "Call completed", detail: "30 min demo session" },
                { color: "bg-orange-500", label: "Note added", detail: "Interested in API integration" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <div className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${item.color}`} />
                  <p className="text-[11px] text-[#191a1c]">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-[#667085]"> — {item.detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ CARD 4: Automation ═══════════ */}
        <div className="rounded-2xl bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span className="text-[14px] font-bold text-[#191a1c]">Workflow Builder</span>
            </div>
            <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-medium text-green-600">Active</span>
          </div>

          {/* Workflow nodes */}
          <div className="flex flex-col items-center gap-0">
            <div className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-400 text-[10px] text-white">⚡</span>
                <div>
                  <p className="text-[10px] font-bold text-amber-700">Trigger</p>
                  <p className="text-[9px] text-amber-600">New Message</p>
                </div>
              </div>
            </div>
            <div className="h-4 w-0.5 bg-gray-200" />
            <div className="w-full rounded-xl border-2 border-purple-200 bg-purple-50 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-500 text-[10px] text-white">🤖</span>
                <div>
                  <p className="text-[10px] font-bold text-purple-700">AI</p>
                  <p className="text-[9px] text-purple-600">Classify Intent</p>
                </div>
              </div>
            </div>
            <div className="h-4 w-0.5 bg-gray-200" />
            <div className="w-full rounded-xl border-2 border-blue-200 bg-blue-50 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500 text-[10px] text-white">◇</span>
                <div>
                  <p className="text-[10px] font-bold text-blue-700">Condition</p>
                  <p className="text-[9px] text-blue-600">Route</p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start justify-between px-2 mt-0">
              {[
                { label: "Support", color: "border-green-200 bg-green-50", textColor: "text-green-700" },
                { label: "Sales", color: "border-blue-200 bg-blue-50", textColor: "text-blue-700" },
                { label: "FAQ", color: "border-amber-200 bg-amber-50", textColor: "text-amber-700" },
              ].map((branch) => (
                <div key={branch.label} className="flex flex-col items-center">
                  <div className="h-3 w-0.5 bg-gray-200" />
                  <div className={`rounded-lg border ${branch.color} px-2.5 py-1.5 text-center`}>
                    <p className={`text-[9px] font-bold ${branch.textColor}`}>{branch.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-4" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Vertical Tabs (Accordion style)                                    */
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
    <div className="space-y-1">
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={tab.label}
            onClick={() => onSelect(i)}
            className="block w-full text-left transition-colors"
          >
            <div className={`rounded-2xl px-4 py-4 transition-all duration-200 ${isActive ? "bg-[#f7f9ff]" : "hover:bg-gray-50/50"}`}>
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-[#0f5bff]/10 text-[#0f5bff]" : "bg-gray-100 text-[#667085]"}`}>
                  {tabIcons[tab.label]}
                </div>
                <span className={`text-[16px] font-semibold transition-colors ${isActive ? "text-[#191a1c]" : "text-[#667085]"}`}>
                  {tab.label}
                </span>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${isActive ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
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
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
              <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" fill="#0f5bff" />
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

        {/* ---- ChatDaddy icon with animated connection line ---- */}
        <div className="mt-20 flex flex-col items-center">
          {/* Animated line */}
          <div className="relative h-16 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f5bff]/30 to-[#0f5bff]/60" />
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-[#0f5bff]/60 to-[#0f5bff]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#0f5bff] shadow-[0_0_8px_rgba(15,91,255,0.6)] animate-pulse" />
          </div>

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
            <span className="h-2.5 w-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-sm font-medium text-[#191a1c]">
              Prospect Discovery
            </span>
          </div>

          {/* Animated line down */}
          <div className="relative h-16 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f5bff]/60 via-[#0f5bff]/30 to-transparent" />
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-[#0f5bff] via-[#0f5bff]/60 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#0f5bff] shadow-[0_0_8px_rgba(15,91,255,0.6)] animate-pulse" />
          </div>
        </div>

        {/* ---- Tab Group 1: Getting Customers ---- */}
        <div className="mt-8">
          <h3 className="mb-10 font-heading text-[24px] font-bold tracking-[-0.01em] text-[#191a1c] sm:text-[32px] lg:text-[40px]">
            From getting customers to converting leads&hellip;
          </h3>

          <div className="overflow-hidden rounded-3xl border border-blue-100/60 bg-[#fafbff] shadow-[0_2px_20px_rgba(15,91,255,0.06)]">
            <div className="grid lg:grid-cols-2">
              {/* Left: Tabs */}
              <div className="flex flex-col justify-center px-6 py-6 lg:px-10 lg:py-10">
                <VerticalTabs
                  tabs={acquireTabs}
                  activeIndex={acquireActive}
                  onSelect={setAcquireActive}
                />
              </div>

              {/* Right: WhatsApp Phone Mockup */}
              <div className="min-h-[500px] sm:min-h-[560px]">
                <WhatsAppPhoneMockup activeIndex={acquireActive} />
              </div>
            </div>
          </div>
        </div>

        {/* ---- Tab Group 2: Keeping Customers ---- */}
        <div className="mt-24">
          <h3 className="mb-10 font-heading text-[24px] font-bold tracking-[-0.01em] text-[#191a1c] sm:text-[32px] lg:text-[40px]">
            to keeping customers and managing your growth
          </h3>

          <div className="overflow-hidden rounded-3xl border border-blue-100/60 bg-[#fafbff] shadow-[0_2px_20px_rgba(15,91,255,0.06)]">
            <div className="grid lg:grid-cols-2">
              {/* Left: Stacked Cards Mockup */}
              <div className="order-2 min-h-[500px] sm:min-h-[560px] lg:order-1">
                <RetainStackedMockup activeIndex={retainActive} />
              </div>

              {/* Right: Tabs */}
              <div className="order-1 flex flex-col justify-center px-6 py-6 lg:order-2 lg:px-10 lg:py-10">
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
