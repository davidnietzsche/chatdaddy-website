"use client";

import { useState } from "react";

export default function RoiCalculatorPage() {
  const [contacts, setContacts] = useState(1000);
  const [avgOrderValue, setAvgOrderValue] = useState(50);
  const [conversionRate, setConversionRate] = useState(5);
  const [campaignsPerMonth, setCampaignsPerMonth] = useState(4);

  const monthlyReach = contacts * campaignsPerMonth;
  const openRate = 0.98; // WhatsApp open rate
  const monthlyOpens = Math.round(monthlyReach * openRate);
  const monthlyConversions = Math.round(monthlyOpens * (conversionRate / 100));
  const monthlyRevenue = monthlyConversions * avgOrderValue;
  const annualRevenue = monthlyRevenue * 12;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Free Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            WhatsApp Marketing ROI Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/60 leading-relaxed">
            Estimate the revenue you could generate with WhatsApp marketing campaigns using ChatDaddy.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Your Business Numbers</h2>
              <div className="space-y-6">
                <div>
                  <label className="flex items-center justify-between text-sm font-medium text-gray-900 mb-2">
                    <span>Contact List Size</span>
                    <span className="text-blue-600 font-semibold">{contacts.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min={100}
                    max={50000}
                    step={100}
                    value={contacts}
                    onChange={(e) => setContacts(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between text-sm font-medium text-gray-900 mb-2">
                    <span>Average Order Value ($)</span>
                    <span className="text-blue-600 font-semibold">${avgOrderValue}</span>
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={500}
                    step={5}
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between text-sm font-medium text-gray-900 mb-2">
                    <span>Expected Conversion Rate (%)</span>
                    <span className="text-blue-600 font-semibold">{conversionRate}%</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <label className="flex items-center justify-between text-sm font-medium text-gray-900 mb-2">
                    <span>Campaigns Per Month</span>
                    <span className="text-blue-600 font-semibold">{campaignsPerMonth}</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={campaignsPerMonth}
                    onChange={(e) => setCampaignsPerMonth(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="rounded-2xl bg-[#0a0e1a] p-8 text-white">
                <h2 className="text-lg font-semibold mb-6">Estimated Results</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-white/60">Monthly Messages Sent</span>
                    <span className="text-xl font-bold">{monthlyReach.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-white/60">Messages Opened (98%)</span>
                    <span className="text-xl font-bold">{monthlyOpens.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-white/60">Monthly Conversions</span>
                    <span className="text-xl font-bold">{monthlyConversions.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-white/60">Monthly Revenue</span>
                    <span className="text-2xl font-bold text-green-400">${monthlyRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-white/60">Annual Revenue Potential</span>
                    <span className="text-3xl font-bold text-green-400">${annualRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-blue-50 border border-blue-100 p-5">
                <p className="text-[13px] text-blue-800 leading-relaxed">
                  <strong>WhatsApp vs Email:</strong> WhatsApp messages have a 98% open rate compared to email&apos;s 20%. That means 5x more people see your message, leading to significantly higher conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
