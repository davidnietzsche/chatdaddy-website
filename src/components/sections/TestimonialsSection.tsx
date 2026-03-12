"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  logo: string | null;
  logoAlt: string;
  logoText?: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Edward",
    company: "Gadget Galaxy Store",
    logo: "/images/lazada-logo.png",
    logoAlt: "Lazada",
    avatar: "/images/testimonial-1.webp",
    quote:
      'Our bot deflection rate with our previous customer service solution was 5–10%. With ChatDaddy, we achieved <strong>65% bot deflection</strong> within just one week of going live.',
  },
  {
    name: "Christian Parker",
    company: "Contact Lens Easy",
    logo: "/images/bloutir-logo.png",
    logoAlt: "Boutir",
    avatar: "/images/testimonial-2.png",
    quote:
      'Self-service and proactive support have helped us <strong>reduce inbound conversation volume by 20%</strong> over the past two years, even as our user base has continued to grow.',
  },
  {
    name: "Geronimo Chala",
    company: "Fashion Fusion Boutique",
    logo: "/images/tokopedia-logo.png",
    logoAlt: "Tokopedia",
    avatar: "/images/testimonial-3.webp",
    quote:
      'ChatDaddy powers our customer communications, delivering conversions, customer engagement, and personalized support. <strong>The WhatsApp chatbot is the heart of this strategy.</strong>',
  },
  {
    name: "Ada May",
    company: "Delicious Bites & More",
    logo: null,
    logoAlt: "Delicious Bites & More",
    logoText: "Delicious Bites & More",
    avatar: "/images/testimonial-4.png",
    quote:
      'We have almost all of our support channels integrated into one system, making it easy for us to manage our support, as well as <strong>take a data-driven approach to continuously improving our service</strong>.',
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 400;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[680px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e8] bg-white px-5 py-2 text-sm font-medium text-[#191a1c] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
                fill="#0f5bff"
              />
            </svg>
            Testimonial
          </span>

          <h2 className="mt-7 font-heading text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-[#191a1c] sm:text-[48px]">
            Trusted by businesses
          </h2>

          <p className="mt-5 text-[17px] leading-[1.6] text-[#667085]">
            Real results&mdash;from startups to enterprises&mdash;showing that smarter
            automation not only pays for itself but drives lasting growth.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-16">
          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-[85%] flex-shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="flex h-full flex-col rounded-2xl border border-[#e5e5e8] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  {/* Company logo */}
                  <div className="mb-8 flex h-10 items-center">
                    {t.logo ? (
                      <Image
                        src={t.logo}
                        alt={t.logoAlt}
                        width={140}
                        height={48}
                        className="h-9 w-auto object-contain object-left"
                      />
                    ) : (
                      <span className="text-lg font-bold text-[#191a1c]">
                        {t.logoText}
                      </span>
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1">
                    <p
                      className="text-[15px] leading-[1.7] text-[#191a1c] [&_strong]:font-bold"
                      dangerouslySetInnerHTML={{ __html: t.quote }}
                    />
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
                    />
                    <div>
                      <p className="text-[14px] font-bold text-[#191a1c]">
                        {t.name}
                      </p>
                      <p className="text-[13px] text-[#667085]">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Previous testimonial"
              className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e8] bg-white text-[#191a1c] shadow-lg transition-all hover:bg-gray-50"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <button
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className={`absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#0f5bff] bg-[#0f5bff] text-white shadow-lg transition-all hover:bg-[#0d4fd9] ${
              !canScrollRight ? "opacity-0 pointer-events-none" : ""
            }`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
