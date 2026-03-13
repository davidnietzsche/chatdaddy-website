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
/*  Marketing Broadcast Mockup                                         */
/* ------------------------------------------------------------------ */

function MarketingMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f5bff]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="text-[14px] font-bold text-[#191a1c]">Broadcast Campaign</span>
            </div>
            <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-medium text-green-600">Active</span>
          </div>
        </div>

        {/* Campaign Card */}
        <div className="px-5 py-4">
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-[#191a1c]">Birthday VIP</span>
              <span className="text-[11px] text-[#667085]">3 recipients</span>
            </div>

            {/* Recipient avatars */}
            <div className="mt-3 flex items-center gap-2">
              {[
                { initials: "AS", bg: "bg-violet-500" },
                { initials: "MR", bg: "bg-rose-500" },
                { initials: "JL", bg: "bg-amber-500" },
              ].map((a) => (
                <div key={a.initials} className={`flex h-7 w-7 items-center justify-center rounded-full ${a.bg} text-[10px] font-bold text-white`}>
                  {a.initials}
                </div>
              ))}
              <span className="text-[11px] text-[#667085]">Selected</span>
            </div>
          </div>

          {/* Message Preview */}
          <div className="mt-4">
            <p className="text-[11px] font-medium text-[#667085]">Message Template</p>
            <div className="mt-2 rounded-lg border border-blue-100 bg-blue-50/50 p-3">
              <p className="text-[12px] leading-relaxed text-[#191a1c]">
                Hi <span className="rounded bg-blue-100 px-1 py-0.5 text-[11px] font-medium text-[#0f5bff]">{"{{name}}"}</span>, Happy Birthday! 🎂
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-[#191a1c]">
                As a VIP customer, enjoy <span className="font-semibold text-[#0f5bff]">20% OFF</span> on your next order. Use code: <span className="rounded bg-gray-100 px-1 py-0.5 font-mono text-[11px] font-bold">BDAY20</span>
              </p>
              <p className="mt-1.5 text-[12px] text-[#667085]">
                Tracking: <span className="rounded bg-gray-100 px-1 py-0.5 font-mono text-[11px]">{"{{tracking_no}}"}</span>
              </p>
            </div>
          </div>

          {/* Send button */}
          <button className="mt-4 w-full rounded-lg bg-[#0f5bff] py-2.5 text-[13px] font-semibold text-white">
            Send Broadcast
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shop Catalog Mockup                                                */
/* ------------------------------------------------------------------ */

function ShopMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]">
            <span className="text-[11px] font-bold text-white">CD</span>
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-semibold text-white">ChatDaddy Shop</p>
            <p className="text-[11px] text-white/60">online</p>
          </div>
        </div>

        <div className="bg-[#ece5dd] px-4 py-5">
          {/* Bot message with catalog */}
          <div className="max-w-[90%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
            <p className="text-[13px] leading-relaxed text-[#191a1c]">
              Welcome! 🛍️ Here are our featured products:
            </p>
            {/* Product cards */}
            <div className="mt-3 space-y-2">
              {[
                { name: "Premium Headphones", price: "RM 299", emoji: "🎧" },
                { name: "Wireless Speaker", price: "RM 199", emoji: "🔊" },
                { name: "Smart Watch Pro", price: "RM 459", emoji: "⌚" },
              ].map((product) => (
                <div key={product.name} className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50 p-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg">
                    {product.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold text-[#191a1c] truncate">{product.name}</p>
                    <p className="text-[11px] font-bold text-[#0f5bff]">{product.price}</p>
                  </div>
                  <button className="rounded-md bg-[#25D366] px-2.5 py-1 text-[10px] font-semibold text-white">
                    Buy
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Customer reply */}
          <div className="mt-3 max-w-[70%] ml-auto rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
            <p className="text-[13px] text-[#191a1c]">I&apos;ll take the Smart Watch! ⌚</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Chatbot Conversation Mockup                                        */
/* ------------------------------------------------------------------ */

function ChatbotMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-semibold text-white">AI Assistant</p>
            <p className="text-[11px] text-white/60">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              Always online
            </p>
          </div>
        </div>

        <div className="space-y-3 bg-[#ece5dd] px-4 py-5">
          {/* Customer message */}
          <div className="max-w-[80%] ml-auto rounded-lg rounded-tr-none bg-[#dcf8c6] px-3 py-2 shadow-sm">
            <p className="text-[13px] text-[#191a1c]">Do you offer refunds?</p>
          </div>

          {/* Bot typing indicator */}
          <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#0f5bff">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </span>
              <span className="text-[11px] font-medium text-[#0f5bff]">AI Agent</span>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[#191a1c]">
              Yes! We offer a <span className="font-semibold">30-day money-back guarantee</span> on all products. Simply contact us with your order number and we&apos;ll process it within 24 hours. 😊
            </p>
            {/* Quick reply buttons */}
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {["Start refund", "More info", "Talk to human"].map((btn) => (
                <button key={btn} className="rounded-full border border-[#0f5bff]/20 bg-blue-50 px-3 py-1 text-[11px] font-medium text-[#0f5bff]">
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Payment Request Mockup                                             */
/* ------------------------------------------------------------------ */

function PaymentMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />
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
        </div>

        <div className="space-y-3 bg-[#ece5dd] px-4 py-5">
          <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
            <p className="text-[13px] leading-relaxed text-[#191a1c]">
              I&apos;d like to complete my payment 💳
            </p>
          </div>

          <div className="max-w-[85%] ml-auto rounded-lg bg-white p-4 shadow-sm">
            <p className="text-[14px] font-bold text-[#191a1c]">Payment Request</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[13px] text-[#667085]">Amount</span>
              <span className="text-[14px] font-bold text-[#0f5bff]">RM 23.60</span>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[13px] text-[#667085]">Status</span>
              <span className="text-[12px] font-medium text-amber-500">Pending</span>
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
/*  Team Inbox Mockup                                                  */
/* ------------------------------------------------------------------ */

function TeamInboxMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />
      <div className="relative w-full max-w-[380px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-[14px] font-bold text-[#191a1c]">Team Inbox</span>
            </div>
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#0f5bff] px-1.5 text-[10px] font-bold text-white">3</span>
          </div>
        </div>

        {/* Conversation list */}
        <div className="divide-y divide-gray-50">
          {[
            {
              name: "Sarah Kim",
              initials: "SK",
              bg: "bg-purple-500",
              preview: "About my subscription renewal...",
              time: "2m",
              badge: "Sales",
              badgeColor: "text-blue-600 bg-blue-50",
              unread: true,
            },
            {
              name: "James Wong",
              initials: "JW",
              bg: "bg-emerald-500",
              preview: "Issue resolved ✓ Thanks!",
              time: "15m",
              badge: "Support",
              badgeColor: "text-green-600 bg-green-50",
              unread: false,
            },
            {
              name: "Rachel Lee",
              initials: "RL",
              bg: "bg-rose-500",
              preview: "Can you send me pricing details?",
              time: "1h",
              badge: "Sales",
              badgeColor: "text-blue-600 bg-blue-50",
              unread: true,
            },
          ].map((conv) => (
            <div key={conv.name} className={`flex items-start gap-3 px-5 py-3.5 transition-colors ${conv.unread ? "bg-blue-50/30" : ""}`}>
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${conv.bg} text-[12px] font-bold text-white`}>
                {conv.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className={`text-[13px] ${conv.unread ? "font-bold" : "font-medium"} text-[#191a1c]`}>{conv.name}</span>
                  <span className="text-[11px] text-[#667085]">{conv.time}</span>
                </div>
                <p className="mt-0.5 text-[12px] text-[#667085] truncate">{conv.preview}</p>
                <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${conv.badgeColor}`}>{conv.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="border-t border-gray-100 px-5 py-3 flex gap-2">
          <button className="flex-1 rounded-lg bg-[#0f5bff] py-2 text-[12px] font-semibold text-white">Assign to me</button>
          <button className="flex-1 rounded-lg border border-gray-200 py-2 text-[12px] font-semibold text-[#667085]">Quick reply</button>
          <button className="rounded-lg border border-gray-200 px-3 py-2 text-[12px] font-semibold text-green-600">Resolve</button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Notification Stats Mockup                                          */
/* ------------------------------------------------------------------ */

function NotificationMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />
      <div className="relative w-full max-w-[380px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span className="text-[14px] font-bold text-[#191a1c]">Campaign Analytics</span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 px-5 py-4">
          {[
            { label: "Delivered", value: "1,247", trend: "↑12%", trendColor: "text-green-500" },
            { label: "Open Rate", value: "89%", trend: "↑5%", trendColor: "text-green-500" },
            { label: "Clicks", value: "342", trend: "↑8%", trendColor: "text-green-500" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
              <p className="text-[11px] text-[#667085]">{stat.label}</p>
              <p className="mt-1 text-[18px] font-bold text-[#191a1c]">{stat.value}</p>
              <p className={`mt-0.5 text-[11px] font-medium ${stat.trendColor}`}>{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="border-t border-gray-100 px-5 py-4">
          <p className="text-[11px] font-medium text-[#667085] mb-3">Recent Activity</p>
          <div className="space-y-2.5">
            {[
              { icon: "✅", text: "Sarah Kim opened message", time: "2m ago", color: "bg-green-50" },
              { icon: "🔗", text: "James Wong clicked link", time: "5m ago", color: "bg-blue-50" },
              { icon: "📩", text: "Batch #3 delivered (128)", time: "12m ago", color: "bg-purple-50" },
              { icon: "⚡", text: "Auto-reply triggered (45)", time: "1h ago", color: "bg-amber-50" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${item.color} text-[12px]`}>{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-[#191a1c] truncate">{item.text}</p>
                </div>
                <span className="text-[10px] text-[#667085] flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CRM Contact Profile Mockup                                        */
/* ------------------------------------------------------------------ */

function CRMMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        <div className="p-5">
          <div className="flex items-center gap-2 text-[#667085]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-[13px] font-semibold text-[#191a1c]">Contact Profile</span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">SK</div>
            <div>
              <p className="text-[15px] font-bold text-[#191a1c]">Sarah Kim</p>
              <p className="text-[12px] text-[#667085]">TechFlow Solutions · Marketing Lead</p>
            </div>
          </div>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {[
              { label: "VIP Customer", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
              { label: "Active", color: "text-blue-600 bg-blue-50 border-blue-200" },
              { label: "Enterprise", color: "text-purple-600 bg-purple-50 border-purple-200" },
              { label: "Renewal Q3", color: "text-amber-600 bg-amber-50 border-amber-200" },
            ].map((tag) => (
              <span key={tag.label} className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${tag.color}`}>
                {tag.label}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-[11px] font-medium text-[#667085]">Deal Stage</p>
            <div className="mt-2 flex gap-1">
              {[true, true, true, true, false].map((filled, i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full ${filled ? "bg-[#0f5bff]" : "bg-gray-200"}`} />
              ))}
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[#0f5bff]">Negotiation</span>
              <span className="text-[13px] font-bold text-[#191a1c]">RM 12,500</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[11px] font-medium text-[#667085]">Recent Activity</p>
            <div className="mt-2 space-y-2">
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
/*  Automation Workflow Mockup                                         */
/* ------------------------------------------------------------------ */

function AutomationMockup() {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl bg-[#0f5bff] p-6 pb-0 sm:p-10 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f5bff]/50" />
      <div className="relative w-full max-w-[380px] overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f5bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span className="text-[14px] font-bold text-[#191a1c]">Workflow Builder</span>
            </div>
            <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-medium text-green-600">Live</span>
          </div>
        </div>

        {/* Workflow nodes */}
        <div className="px-5 py-5">
          <div className="flex flex-col items-center gap-0">
            {/* Trigger node */}
            <div className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-400 text-[10px] text-white">⚡</span>
                <div>
                  <p className="text-[11px] font-bold text-amber-700">Trigger</p>
                  <p className="text-[10px] text-amber-600">New Message Received</p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="h-5 w-0.5 bg-gray-200" />

            {/* AI node */}
            <div className="w-full rounded-xl border-2 border-purple-200 bg-purple-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-500 text-[10px] text-white">🤖</span>
                <div>
                  <p className="text-[11px] font-bold text-purple-700">AI Agent</p>
                  <p className="text-[10px] text-purple-600">Classify Intent</p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="h-5 w-0.5 bg-gray-200" />

            {/* Condition node */}
            <div className="w-full rounded-xl border-2 border-blue-200 bg-blue-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500 text-[10px] text-white">◇</span>
                <div>
                  <p className="text-[11px] font-bold text-blue-700">Condition</p>
                  <p className="text-[10px] text-blue-600">Route by Intent</p>
                </div>
              </div>
            </div>

            {/* Branch connectors */}
            <div className="flex w-full items-start justify-between px-4">
              <div className="flex flex-col items-center">
                <div className="h-4 w-0.5 bg-gray-200" />
                <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-center">
                  <p className="text-[10px] font-bold text-green-700">Support</p>
                  <p className="text-[9px] text-green-600">Assign agent</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-4 w-0.5 bg-gray-200" />
                <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-center">
                  <p className="text-[10px] font-bold text-blue-700">Sales</p>
                  <p className="text-[9px] text-blue-600">Send catalog</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-4 w-0.5 bg-gray-200" />
                <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-center">
                  <p className="text-[10px] font-bold text-amber-700">FAQ</p>
                  <p className="text-[9px] text-amber-600">Auto-reply</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mockup selector — maps tab label to component                      */
/* ------------------------------------------------------------------ */

const acquireMockups: Record<number, React.ReactNode> = {
  0: <MarketingMockup />,
  1: <ShopMockup />,
  2: <ChatbotMockup />,
  3: <PaymentMockup />,
};

const retainMockups: Record<number, React.ReactNode> = {
  0: <TeamInboxMockup />,
  1: <NotificationMockup />,
  2: <CRMMockup />,
  3: <AutomationMockup />,
};

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
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-[#0f5bff]/10 text-[#0f5bff]" : "bg-gray-100 text-[#667085]"}`}>
                  {tabIcons[tab.label]}
                </div>
                <span className={`text-[17px] font-semibold transition-colors ${isActive ? "text-[#191a1c]" : "text-[#667085]"}`}>
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

              {/* Right: Dynamic Mockup */}
              <div className="min-h-[400px] sm:min-h-[480px] relative">
                <div className="absolute inset-0 transition-opacity duration-300">
                  {acquireMockups[acquireActive]}
                </div>
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
              {/* Left: Dynamic Mockup */}
              <div className="order-2 min-h-[400px] sm:min-h-[520px] lg:order-1 relative">
                <div className="absolute inset-0 transition-opacity duration-300">
                  {retainMockups[retainActive]}
                </div>
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
