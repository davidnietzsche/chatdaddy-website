import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Subtle tech grid background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="tech-grid"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Thin grid lines */}
            <line x1="0" y1="60" x2="120" y2="60" stroke="#c0c0c0" strokeWidth="0.5" />
            <line x1="60" y1="0" x2="60" y2="120" stroke="#c0c0c0" strokeWidth="0.5" />
            {/* Circuit traces */}
            <line x1="0" y1="30" x2="40" y2="30" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="80" y1="30" x2="120" y2="30" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="0" y1="90" x2="50" y2="90" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="70" y1="90" x2="120" y2="90" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="30" y1="0" x2="30" y2="40" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="90" y1="0" x2="90" y2="50" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="30" y1="80" x2="30" y2="120" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="90" y1="70" x2="90" y2="120" stroke="#b0b0b0" strokeWidth="0.5" />
            {/* Diagonal connectors */}
            <line x1="40" y1="30" x2="60" y2="60" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="80" y1="30" x2="60" y2="60" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="50" y1="90" x2="30" y2="80" stroke="#b0b0b0" strokeWidth="0.5" />
            <line x1="70" y1="90" x2="90" y2="70" stroke="#b0b0b0" strokeWidth="0.5" />
            {/* Node dots */}
            <circle cx="60" cy="60" r="2" fill="#c0c0c0" />
            <circle cx="40" cy="30" r="1.5" fill="#c0c0c0" />
            <circle cx="80" cy="30" r="1.5" fill="#c0c0c0" />
            <circle cx="30" cy="40" r="1.5" fill="#c0c0c0" />
            <circle cx="90" cy="50" r="1.5" fill="#c0c0c0" />
            <circle cx="50" cy="90" r="1.5" fill="#c0c0c0" />
            <circle cx="70" cy="90" r="1.5" fill="#c0c0c0" />
            <circle cx="30" cy="80" r="1.5" fill="#c0c0c0" />
            <circle cx="90" cy="70" r="1.5" fill="#c0c0c0" />
            {/* Small squares at intersections */}
            <rect x="58" y="58" width="4" height="4" rx="0.5" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid)" />
      </svg>

      {/* Soft radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#fafafa_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-32 sm:px-6 lg:px-8">
        {/* App icon */}
        <div className="mb-5">
          <Image
            src="/images/chatdaddy-logo.png"
            alt="ChatDaddy"
            width={100}
            height={100}
            className="rounded-[24px] shadow-[0_8px_40px_rgba(15,91,255,0.15)]"
            priority
          />
        </div>

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e5e5e8] bg-white px-4 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
              fill="#9ca3af"
            />
          </svg>
          <span className="text-sm font-medium text-[#667085]">ChatDaddy</span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-center font-heading text-[44px] font-bold leading-[1.08] tracking-[-0.03em] text-[#191a1c] sm:text-[56px] lg:text-[72px]">
          Your AI-Powered
          <br />
          Messaging Platform
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-[640px] text-center text-[17px] leading-[1.65] text-[#667085]">
          Streamline conversations across WhatsApp, Instagram, Facebook
          Messenger, TikTok, SMS, Email, and more — all in one intelligent
          platform built to grow your business.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center gap-6">
          <Link
            href="https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Website"
            className="text-[15px] font-medium text-[#191a1c] transition-colors hover:text-[#0f5bff]"
          >
            Book Demo
          </Link>
          <Link
            href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0f5bff] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_2px_12px_rgba(15,91,255,0.3)] transition-all hover:bg-[#0d4fe0] hover:shadow-[0_4px_20px_rgba(15,91,255,0.4)]"
          >
            Start For Free
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex items-center gap-3">
          {/* Company avatar stack */}
          <div className="flex -space-x-2">
            {[
              { bg: "bg-red-500", text: "M", textColor: "text-yellow-300" },
              { bg: "bg-orange-500", text: "B", textColor: "text-white" },
              { bg: "bg-green-600", text: "G", textColor: "text-white" },
              { bg: "bg-blue-600", text: "T", textColor: "text-white" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-full ${item.bg} ${item.textColor} text-xs font-bold ring-2 ring-white`}
              >
                {item.text}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#667085]">
            Managing{" "}
            <span className="font-semibold text-[#191a1c]">10M+</span> daily
            messages for{" "}
            <span className="font-semibold text-[#191a1c]">23.5K+</span>{" "}
            businesses
          </p>
        </div>

        {/* Partner logos */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {[
            { src: "/images/framer/home-partner-logo-1.png", alt: "Partner", w: 32, h: 32 },
            { src: "/images/framer/home-partner-logo-2.png", alt: "Partner", w: 32, h: 32 },
            { src: "/images/framer/home-partner-logo-3.webp", alt: "Partner", w: 32, h: 32 },
            { src: "/images/framer/home-partner-logo-4.webp", alt: "Partner", w: 32, h: 32 },
            { src: "/images/framer/home-partner-logo-5.png", alt: "Partner", w: 32, h: 32 },
            { src: "/images/framer/home-partner-logo-6.webp", alt: "Partner", w: 32, h: 32 },
            { src: "/images/framer/home-partner-logo-7.png", alt: "Partner", w: 32, h: 32 },
            { src: "/images/framer/home-partner-logo-8.png", alt: "Partner", w: 32, h: 32 },
            { src: "/images/framer/home-partner-logo-9.jpeg", alt: "Partner", w: 32, h: 32 },
          ].map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="h-8 w-auto grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
