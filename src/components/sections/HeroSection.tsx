import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#111827]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-500">
              ChatDaddy
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your AI-Powered Messaging Platform
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400 sm:text-xl">
              Streamline conversations across WhatsApp, Instagram, Facebook
              Messenger, TikTok, SMS, Email, and more — all in one intelligent
              platform built to grow your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Website"
                className="inline-flex items-center rounded-lg border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0a0a0f]"
              >
                Book Demo
              </Link>
              <Link
                href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
                className="inline-flex items-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Start For Free
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Managing{" "}
              <span className="font-semibold text-gray-300">10M+</span> daily
              messages for{" "}
              <span className="font-semibold text-gray-300">23.5K+</span>{" "}
              businesses
            </p>
          </div>

          {/* Right — product mockup placeholder */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/20 via-[#0f5bff]/20 to-transparent backdrop-blur-sm">
              <div className="flex h-full w-full items-center justify-center">
                <div className="rounded-xl border border-white/10 bg-white/5 px-12 py-20 text-center">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-brand-500/30" />
                  <p className="text-sm text-gray-500">Product Screenshot</p>
                </div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#0f5bff]/10 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#0f5bff]/5 blur-3xl" />
      </div>
    </section>
  );
}
