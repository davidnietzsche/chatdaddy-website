import Link from "next/link";

const SIGNUP_URL =
  "https://app.chatdaddy.tech/SignUp?referralCode=Website";

interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  price: string;
  billing: string;
  badge?: string;
  highlighted?: boolean;
  features: PlanFeature[];
  support: PlanFeature[];
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "$119",
    billing: "Billed annually",
    features: [
      { text: "5 Teammates" },
      { text: "5,000 Messages" },
      { text: "Automation" },
      { text: "Marketing" },
      { text: "Team Management" },
      { text: "1 WhatsApp Channel" },
      { text: "1 Facebook Channel" },
      { text: "1 Instagram Channel" },
    ],
    support: [
      { text: "Submit Ticket Support" },
      { text: "WhatsApp Group Support" },
    ],
  },
  {
    name: "Pro",
    price: "$299",
    billing: "Billed annually",
    badge: "Best Value",
    highlighted: true,
    features: [
      { text: "10 Teammates" },
      { text: "10,000 Messages" },
      { text: "Everything in Basic" },
      { text: "AI Chatbot" },
      { text: "Customised Flow Templates" },
      { text: "2 WhatsApp Channels" },
    ],
    support: [
      { text: "Submit Ticket Support" },
      { text: "Online Meeting" },
      { text: "WhatsApp Group Support" },
    ],
  },
  {
    name: "Max",
    price: "$799",
    billing: "Billed annually",
    features: [
      { text: "15 Teammates" },
      { text: "50,000 Messages" },
      { text: "Everything in Pro" },
      { text: "Mid-Year Business Review" },
      { text: "Unlimited Integrations" },
      { text: "5 Any Channels" },
    ],
    support: [
      { text: "Submit Ticket Support" },
      { text: "WhatsApp Group Support" },
      { text: "Online Meeting" },
      { text: "2h Priority Response" },
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[#5ec369]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#111827]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#0f5bff]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        {/* Hero text */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Flexible Plans for Every Business
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-400 sm:text-xl">
            Choose the plan that fits your needs today — and scale as you grow.
            All plans include core ChatDaddy features, with advanced tools
            available as you expand your automation and customer engagement.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl bg-white p-8 ${
                plan.highlighted
                  ? "border-2 border-[#0f5bff] shadow-[0_0_40px_-12px_rgba(15,91,255,0.3)]"
                  : "border border-[#e5e5e8]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0f5bff] px-4 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-base text-gray-500">/m</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{plan.billing}</p>
              </div>

              {/* Features */}
              <div className="mb-6 flex-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Features
                </p>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon />
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Support
                </p>
                <ul className="space-y-3">
                  {plan.support.map((s) => (
                    <li key={s.text} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon />
                      {s.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href={SIGNUP_URL}
                className={`block rounded-lg py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-[#0f5bff] text-white hover:bg-[#0d4fdf]"
                    : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                Get Started For Free
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
