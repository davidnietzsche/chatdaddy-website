"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// Note: metadata must be in a separate file for client components
// We'll handle this via layout or generateMetadata in a server wrapper

export default function WhatsAppLinkGeneratorPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const generateLink = () => {
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
    if (!cleanNumber) return;

    const encodedMessage = encodeURIComponent(message);
    const link = message
      ? `https://wa.me/${cleanNumber}?text=${encodedMessage}`
      : `https://wa.me/${cleanNumber}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = async () => {
    if (generatedLink) {
      await navigator.clipboard.writeText(generatedLink);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-green-600/20 via-green-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-1.5 text-[13px] font-medium text-green-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Free Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            WhatsApp Link Generator
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/60 leading-relaxed">
            Create WhatsApp click-to-chat links instantly. No app download needed for your customers — they just click and start chatting.
          </p>
        </div>
      </section>

      {/* Generator Tool */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="space-y-6">
              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number (with country code)
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 60123456789"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
                <p className="mt-1.5 text-[12px] text-gray-400">Include country code without + sign (e.g. 60 for Malaysia, 65 for Singapore)</p>
              </div>

              {/* Pre-filled Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Pre-filled Message (optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="e.g. Hi! I'd like to learn more about your products."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={generateLink}
                disabled={!phoneNumber.replace(/[^0-9]/g, "")}
                className="w-full rounded-xl bg-green-600 px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-500 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                Generate WhatsApp Link
              </button>

              {/* Generated Link */}
              {generatedLink && (
                <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Your WhatsApp Link</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={generatedLink}
                      className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[13px] text-gray-700 font-mono"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-[13px] font-semibold text-white hover:bg-blue-500 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <a
                    href={generatedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-green-600 hover:text-green-500"
                  >
                    Test your link
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How to Use WhatsApp Links</h2>
          <div className="space-y-8">
            {[
              { title: "Add to your website", description: "Place the link on your contact page, product pages, or as a floating chat button for instant customer communication." },
              { title: "Share on social media", description: "Include the link in your Instagram bio, Facebook posts, or Twitter profiles to drive WhatsApp conversations." },
              { title: "Print on marketing materials", description: "Generate a QR code from the link and print it on business cards, flyers, or product packaging." },
              { title: "Use in email signatures", description: "Add a 'Chat on WhatsApp' button to your email signature for a direct communication channel." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-[14px] text-gray-500 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
