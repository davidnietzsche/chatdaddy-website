import Link from "next/link";

const features = [
  {
    title: "Your Growth Partner",
    description:
      "We measure our success by yours. From onboarding to scaling, our team is here to help you unlock the full value of ChatDaddy.",
  },
  {
    title: "One platform for the entire customer journey",
    description:
      "From first touch to repeat purchase, ChatDaddy brings marketing, sales, and support into a single, streamlined workspace.",
  },
  {
    title: "Scalable, flexible, and easy to use",
    description:
      "Get started quickly, integrate with your favorite tools, and scale without adding complexity.",
  },
  {
    title: "Proven Messaging Automation",
    description:
      "With millions of conversations managed daily, we\u2019ve built a platform that simplifies complexity so your team can focus on growth.",
  },
];

export default function WhyChatDaddy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f5bff] to-[#0a3fcf] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            Why ChatDaddy?
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Built for the full customer journey
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-100/80">
            From fast-moving startups to structured enterprises, ChatDaddy
            adapts to your team&apos;s real-world workflows, not the other way
            around.
          </p>
          <Link
            href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
            className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0f5bff] transition hover:bg-blue-50"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15"
            >
              <h3 className="font-heading text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
    </section>
  );
}
