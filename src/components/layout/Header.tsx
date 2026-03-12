"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const featuresItems = [
  { label: "Team Inbox", href: "/features/team-inbox" },
  { label: "Notification", href: "/features/notification" },
  { label: "Chatbot", href: "/features/chatbot" },
  { label: "Marketing", href: "/features/marketing" },
  { label: "Shop", href: "/features/shop" },
  { label: "Pay", href: "/features/pay" },
  { label: "Automation", href: "/features/automation" },
  { label: "CRM", href: "/features/crm" },
];

const resourcesItems: { label: string; href: string; external?: boolean }[] = [
  { label: "Success Stories", href: "/success-studies" },
  { label: "Blog Posts", href: "/blog" },
  { label: "Co-Existence", href: "/whatsapp-coexistence" },
  { label: "WhatsApp Link Generator", href: "/resources/whatsapp-link-generator" },
  { label: "ROI Calculator", href: "/resources/roi-calculator" },
  { label: "Help Center", href: "https://help.chatdaddy.tech/", external: true },
  { label: "API Doc", href: "https://chatdaddy.stoplight.io/docs/openapi/repos/chatdaddy-service-auth/openapi.yaml", external: true },
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

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H3.75A.75.75 0 013 10z"
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

function LogoIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#25D366" />
      <path
        d="M16 6C10.48 6 6 10.48 6 16c0 1.77.46 3.43 1.27 4.88L6 26l5.23-1.24A9.96 9.96 0 0016 26c5.52 0 10-4.48 10-10S21.52 6 16 6zm0 18c-1.58 0-3.07-.46-4.33-1.24l-.31-.18-3.1.74.78-3.02-.2-.33A7.96 7.96 0 018 16c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"
        fill="white"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop dropdown                                                   */
/* ------------------------------------------------------------------ */

function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string; external?: boolean }[];
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150) as ReturnType<typeof setTimeout>;
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 text-sm font-medium text-[#191a1c] hover:text-[#0f5bff] transition-colors py-2"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
          <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 py-2 min-w-[220px]">
            {items.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-[#191a1c] hover:bg-gray-50 hover:text-[#0f5bff] transition-colors"
                >
                  {item.label}
                  <span className="ml-1 text-xs text-[#667085]">&#8599;</span>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-[#191a1c] hover:bg-gray-50 hover:text-[#0f5bff] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile accordion section                                           */
/* ------------------------------------------------------------------ */

function MobileAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { label: string; href: string; external?: boolean }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e5e8]">
      <button
        className="flex w-full items-center justify-between py-3 text-base font-medium text-[#191a1c]"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 pl-4 space-y-2">
          {items.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#667085] hover:text-[#0f5bff]"
                onClick={onNavigate}
              >
                {item.label} &#8599;
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-[#667085] hover:text-[#0f5bff]"
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-[#e5e5e8]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <LogoIcon />
          <span className="text-xl font-bold font-heading text-[#191a1c]">ChatDaddy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <DesktopDropdown label="Features" items={featuresItems} />
          <DesktopDropdown label="Resources" items={resourcesItems} />
          <Link
            href="/pricing"
            className="flex items-center gap-1 text-sm font-medium text-[#191a1c] hover:text-[#0f5bff] transition-colors"
          >
            Pricing
            <ChevronDownIcon />
          </Link>
          <Link
            href="/whatsapp-coexistence"
            className="flex items-center gap-1.5 text-sm font-medium text-[#191a1c] hover:text-[#0f5bff] transition-colors"
          >
            Co-Existence
            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600 ring-1 ring-inset ring-red-500/20">
              Important
            </span>
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BOOK_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#e5e5e8] px-4 py-2 text-sm font-medium text-[#191a1c] hover:bg-gray-50 transition-colors"
          >
            Book Demo
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#1fba59] transition-colors"
          >
            Get Started
            <ArrowRightIcon />
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white overflow-y-auto">
          <div className="px-4 py-4 space-y-0">
            <MobileAccordion label="Features" items={featuresItems} onNavigate={closeMobile} />
            <MobileAccordion label="Resources" items={resourcesItems} onNavigate={closeMobile} />

            <Link
              href="/pricing"
              className="block border-b border-[#e5e5e8] py-3 text-base font-medium text-[#191a1c]"
              onClick={closeMobile}
            >
              Pricing
            </Link>

            <Link
              href="/whatsapp-coexistence"
              className="flex items-center gap-2 border-b border-[#e5e5e8] py-3 text-base font-medium text-[#191a1c]"
              onClick={closeMobile}
            >
              Co-Existence
              <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600 ring-1 ring-inset ring-red-500/20">
                Important
              </span>
            </Link>

            <div className="pt-6 flex flex-col gap-3">
              <a
                href={BOOK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-[#e5e5e8] px-4 py-3 text-center text-sm font-medium text-[#191a1c]"
              >
                Book Demo
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white"
              >
                Get Started
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
