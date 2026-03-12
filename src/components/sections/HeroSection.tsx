import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Subtle circuit board background pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal lines */}
            <line x1="0" y1="40" x2="80" y2="40" stroke="#e0cece" strokeWidth="1" />
            <line x1="120" y1="40" x2="200" y2="40" stroke="#e0cece" strokeWidth="1" />
            <line x1="0" y1="100" x2="60" y2="100" stroke="#e0cece" strokeWidth="1" />
            <line x1="140" y1="100" x2="200" y2="100" stroke="#e0cece" strokeWidth="1" />
            <line x1="0" y1="160" x2="90" y2="160" stroke="#e0cece" strokeWidth="1" />
            <line x1="110" y1="160" x2="200" y2="160" stroke="#e0cece" strokeWidth="1" />
            {/* Vertical lines */}
            <line x1="40" y1="0" x2="40" y2="60" stroke="#e0cece" strokeWidth="1" />
            <line x1="100" y1="80" x2="100" y2="200" stroke="#e0cece" strokeWidth="1" />
            <line x1="160" y1="0" x2="160" y2="50" stroke="#e0cece" strokeWidth="1" />
            <line x1="160" y1="120" x2="160" y2="200" stroke="#e0cece" strokeWidth="1" />
            {/* Connector dots */}
            <circle cx="80" cy="40" r="3" fill="#e0cece" />
            <circle cx="120" cy="40" r="3" fill="#e0cece" />
            <circle cx="40" cy="60" r="2.5" fill="#e0cece" />
            <circle cx="60" cy="100" r="3" fill="#e0cece" />
            <circle cx="140" cy="100" r="3" fill="#e0cece" />
            <circle cx="100" cy="80" r="2.5" fill="#e0cece" />
            <circle cx="90" cy="160" r="3" fill="#e0cece" />
            <circle cx="110" cy="160" r="3" fill="#e0cece" />
            <circle cx="160" cy="50" r="2.5" fill="#e0cece" />
            <circle cx="160" cy="120" r="2.5" fill="#e0cece" />
            {/* Short angled connectors */}
            <line x1="80" y1="40" x2="100" y2="80" stroke="#e0cece" strokeWidth="1" />
            <line x1="140" y1="100" x2="160" y2="120" stroke="#e0cece" strokeWidth="1" />
            <line x1="60" y1="100" x2="40" y2="60" stroke="#e0cece" strokeWidth="1" />
            <line x1="110" y1="160" x2="160" y2="120" stroke="#e0cece" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Soft radial fade at edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#fafafa_75%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
        {/* App icon */}
        <div className="mb-6">
          <Image
            src="/images/chatdaddy-icon.png"
            alt="ChatDaddy"
            width={120}
            height={120}
            className="rounded-[28px] shadow-lg"
            priority
          />
        </div>

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e5e5e8] bg-white px-4 py-1 shadow-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8 1l1.796 4.858L15 7l-5.204 1.142L8 13l-1.796-4.858L1 7l5.204-1.142L8 1z"
              fill="#9ca3af"
              stroke="#9ca3af"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-gray-600">ChatDaddy</span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-center font-heading text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-[#191a1c] sm:text-6xl lg:text-[64px]">
          Your AI-Powered Messaging Platform
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-[700px] text-center text-lg leading-[1.6] text-[#667085]">
          Streamline conversations across WhatsApp, Instagram, Facebook
          Messenger, TikTok, SMS, Email, and more — all in one intelligent
          platform built to grow your business.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center gap-6">
          <Link
            href="https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Website"
            className="text-[15px] font-medium text-[#191a1c] transition-colors hover:underline"
          >
            Book Demo
          </Link>
          <Link
            href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
            className="inline-flex items-center gap-3 rounded-full bg-[#0f5bff] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0d4fe0]"
          >
            Start For Free
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex items-center gap-4">
          {/* Avatar stack */}
          <div className="flex -space-x-2">
            {[
              "/images/feature-icon-1.png",
              "/images/feature-icon-2.png",
              "/images/feature-icon-3.png",
              "/images/feature-icon-4.png",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Managing{" "}
            <span className="font-semibold text-gray-700">10M+</span> daily
            messages for{" "}
            <span className="font-semibold text-gray-700">23.5K+</span>{" "}
            businesses
          </p>
        </div>
      </div>
    </section>
  );
}
