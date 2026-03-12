"use client";

import { useState, useCallback } from "react";

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Edward",
    company: "Gadget Galaxy Store",
    initials: "E",
    quote:
      "Our bot deflection rate with our previous customer service solution was 5\u201310%. With ChatDaddy, we achieved <strong>65% bot deflection</strong> within just one week of going live.",
  },
  {
    name: "Christian Parker",
    company: "Contact Lens Easy",
    initials: "CP",
    quote:
      "Self-service and proactive support have helped us <strong>reduce inbound conversation volume by 20%</strong> over the past two years, even as our user base has continued to grow.",
  },
  {
    name: "Geronimo Chala",
    company: "Fashion Fusion Boutique",
    initials: "GC",
    quote:
      "ChatDaddy powers our customer communications, delivering conversions, customer engagement, and personalized support. <strong>The WhatsApp chatbot is the heart of this strategy.</strong>",
  },
  {
    name: "Ada May",
    company: "Delicious Bites & More",
    initials: "AM",
    quote:
      "We have almost all of our support channels integrated into one system, making it easy for us to manage our support, as well as <strong>take a data-driven approach to continuously improving our service</strong>.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  return (
    <section className="bg-[#f4f8ff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0f5bff]">
            Testimonial
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold text-[#191a1c] sm:text-4xl lg:text-5xl">
            Trusted by businesses
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#667085]">
            Real results — from startups to enterprises — showing that smarter
            automation not only pays for itself but drives lasting growth.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-16">
          {/* Cards row — show 1 on mobile, 2 on md, 3 on lg */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-[#e5e5e8] bg-white p-8 shadow-sm">
                    {/* Company logo placeholder */}
                    <div className="mb-6 flex h-10 w-24 items-center justify-center rounded-lg bg-[#f4f8ff]">
                      <span className="text-xs font-semibold text-[#667085]">
                        Logo
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-1">
                      <p
                        className="text-sm leading-relaxed text-[#667085]"
                        dangerouslySetInnerHTML={{ __html: `\u201C${t.quote}\u201D` }}
                      />
                    </blockquote>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-3 border-t border-[#e5e5e8] pt-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f5bff] text-sm font-bold text-white">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#191a1c]">
                          {t.name}
                        </p>
                        <p className="text-xs text-[#667085]">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e8] bg-white text-[#191a1c] transition hover:bg-[#f4f8ff]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-[#0f5bff]"
                      : "w-2.5 bg-[#e5e5e8] hover:bg-[#667085]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e8] bg-white text-[#191a1c] transition hover:bg-[#f4f8ff]"
            >
              <svg
                className="h-5 w-5"
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
