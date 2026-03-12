import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "/images/feature-icon-1.png",
    title: "Your Growth Partner",
    description:
      "We measure our success by yours. From onboarding to scaling, our team is here to help you unlock the full value of ChatDaddy.",
  },
  {
    icon: "/images/feature-icon-2.png",
    title: "One platform for the entire customer journey",
    description:
      "From first touch to repeat purchase, ChatDaddy brings marketing, sales, and support into a single, streamlined workspace.",
  },
  {
    icon: "/images/feature-icon-3.png",
    title: "Scalable, flexible, and easy to use",
    description:
      "Get started quickly, integrate with your favorite tools, and scale without adding complexity.",
  },
  {
    icon: "/images/feature-icon-4.png",
    title: "Proven Messaging Automation",
    description:
      "With millions of conversations managed daily, we\u2019ve built a platform that simplifies complexity so your team can focus on growth.",
  },
];

export default function WhyChatDaddy() {
  return (
    <section className="w-full bg-[#0f5bff] py-24">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6">
        {/* Top area */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z"
                fill="white"
              />
            </svg>
            Why ChatDaddy?
          </span>

          {/* Heading */}
          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            Built for the full customer journey
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-[600px] text-lg leading-relaxed text-white/80">
            From fast-moving startups to structured enterprises, ChatDaddy
            adapts to your team&apos;s real-world workflows, not the other way
            around.
          </p>

          {/* CTA Button */}
          <Link
            href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0f5bff] transition hover:bg-white/90"
          >
            Start Free Trial
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0f5bff]" />
          </Link>
        </div>

        {/* 2x2 Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-8"
            >
              <Image
                src={feature.icon}
                alt=""
                width={40}
                height={40}
                className="brightness-0 invert"
              />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
