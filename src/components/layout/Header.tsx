"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const featuresItems = [
  { label: "Team Inbox", href: "/features/team-inbox", icon: "/images/feature-icon-1.png" },
  { label: "Notification", href: "/features/notification", icon: "/images/feature-icon-2.png" },
  { label: "Chatbot", href: "/features/chatbot", icon: "/images/feature-icon-3.png" },
  { label: "Marketing", href: "/features/marketing", icon: "/images/feature-icon-4.png" },
  { label: "Shop", href: "/features/shop", icon: "/images/feature-icon-5.png" },
  { label: "Pay", href: "/features/pay", icon: "/images/feature-icon-6.png" },
  { label: "Automation", href: "/features/automation", icon: "/images/feature-icon-7.png" },
  { label: "CRM", href: "/features/crm", icon: "/images/feature-icon-8.png" },
];

const resourcesItems: {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
}[] = [
  { label: "Success Stories", href: "/success-studies" },
  { label: "Blog Posts", href: "/blog" },
  { label: "Co-Existence", href: "/whatsapp-coexistence", badge: "IMPORTANT" },
  { label: "WhatsApp Link Generator", href: "/resources/whatsapp-link-generator" },
  { label: "ROI Calculator", href: "/resources/roi-calculator" },
  { label: "Help Center", href: "https://help.chatdaddy.tech/", external: true },
  {
    label: "API Doc",
    href: "https://chatdaddy.stoplight.io/docs/openapi/repos/chatdaddy-service-auth/openapi.yaml",
    external: true,
  },
  { label: "Service Status", href: "https://status.chatdaddy.tech/", external: true },
];

const BOOK_DEMO_URL =
  "https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Website";
const SIGNUP_URL =
  "https://app.chatdaddy.tech/SignUp?referralCode=Website";

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function ChevronDownIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Features Dropdown (2-column grid)                                  */
/* ------------------------------------------------------------------ */

function FeaturesDropdown() {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 text-[15px] font-medium text-[#191a1c] hover:text-[#0f5bff] transition-colors py-2"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        Features
        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-xl shadow-xl ring-1 ring-black/5 border border-gray-100 p-4 w-[420px]">
          <div className="grid grid-cols-2 gap-1">
            {featuresItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-50 transition-colors group"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={32}
                  height={32}
                  className="shrink-0"
                />
                <span className="text-sm font-semibold text-[#191a1c] group-hover:text-[#0f5bff] transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Resources Dropdown (single column)                                 */
/* ------------------------------------------------------------------ */

function ResourcesDropdown() {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 text-[15px] font-medium text-[#191a1c] hover:text-[#0f5bff] transition-colors py-2"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        Resources
        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-xl shadow-xl ring-1 ring-black/5 border border-gray-100 py-2 min-w-[260px]">
          {resourcesItems.map((item) => {
            const inner = (
              <span className="flex items-center gap-2">
                {item.label}
                {item.badge && (
                  <span className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-500 ring-1 ring-inset ring-orange-500/20">
                    {item.badge}
                  </span>
                )}
                {item.external && <span className="text-xs text-gray-400">&#8599;</span>}
              </span>
            );

            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-sm text-[#191a1c] hover:bg-gray-50 hover:text-[#0f5bff] transition-colors"
              >
                {inner}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-[#191a1c] hover:bg-gray-50 hover:text-[#0f5bff] transition-colors"
                onClick={() => setOpen(false)}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile accordion section                                           */
/* ------------------------------------------------------------------ */

function MobileAccordion({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e5e8]">
      <button
        className="flex w-full items-center justify-between py-4 text-base font-medium text-[#191a1c]"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] pb-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e8]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/chatdaddy-logo.png"
            alt="ChatDaddy"
            width={28}
            height={28}
            className="shrink-0"
          />
          <span className="font-bold text-lg text-[#191a1c]">ChatDaddy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <FeaturesDropdown />
          <ResourcesDropdown />
          <Link
            href="/pricing"
            className="flex items-center gap-1 text-[15px] font-medium text-[#191a1c] hover:text-[#0f5bff] transition-colors"
          >
            Pricing
            <ChevronDownIcon />
          </Link>
          <Link
            href="/whatsapp-coexistence"
            className="flex items-center gap-2 text-[15px] font-medium text-[#191a1c] hover:text-[#0f5bff] transition-colors"
          >
            Co-Existence
            <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-500 ring-1 ring-inset ring-red-500/20">
              IMPORTANT
            </span>
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BOOK_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-[#191a1c] hover:text-[#0f5bff] transition-colors"
          >
            Book Demo
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0f5bff] h-10 px-5 text-[15px] font-medium text-white hover:bg-[#0d4fdf] transition-colors"
          >
            Get Started
            <span className="w-2 h-2 rounded-full bg-white/80" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 text-[#191a1c]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 bg-black/20 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`lg:hidden fixed top-16 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-5 py-2">
          {/* Features */}
          <MobileAccordion label="Features">
            <div className="space-y-1 pl-1">
              {featuresItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                  onClick={closeMobile}
                >
                  <Image src={item.icon} alt={item.label} width={28} height={28} />
                  <span className="text-sm font-medium text-[#191a1c]">{item.label}</span>
                </Link>
              ))}
            </div>
          </MobileAccordion>

          {/* Resources */}
          <MobileAccordion label="Resources">
            <div className="space-y-1 pl-1">
              {resourcesItems.map((item) => {
                const content = (
                  <span className="flex items-center gap-2 text-sm text-[#667085] hover:text-[#0f5bff]">
                    {item.label}
                    {item.badge && (
                      <span className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-orange-500">
                        {item.badge}
                      </span>
                    )}
                    {item.external && <span className="text-xs">&#8599;</span>}
                  </span>
                );
                return item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2"
                    onClick={closeMobile}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2"
                    onClick={closeMobile}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </MobileAccordion>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="flex items-center border-b border-[#e5e5e8] py-4 text-base font-medium text-[#191a1c]"
            onClick={closeMobile}
          >
            Pricing
          </Link>

          {/* Co-Existence */}
          <Link
            href="/whatsapp-coexistence"
            className="flex items-center gap-2 border-b border-[#e5e5e8] py-4 text-base font-medium text-[#191a1c]"
            onClick={closeMobile}
          >
            Co-Existence
            <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-500">
              IMPORTANT
            </span>
          </Link>

          {/* CTA buttons */}
          <div className="pt-6 flex flex-col gap-3">
            <a
              href={BOOK_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border border-[#e5e5e8] h-12 leading-[48px] text-center text-[15px] font-medium text-[#191a1c] hover:bg-gray-50 transition-colors"
            >
              Book Demo
            </a>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#0f5bff] h-12 text-[15px] font-medium text-white hover:bg-[#0d4fdf] transition-colors"
            >
              Get Started
              <span className="w-2 h-2 rounded-full bg-white/80" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
