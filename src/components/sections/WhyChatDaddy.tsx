import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

/* Simple line icons matching Framer's style */
function GrowthIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="white" strokeWidth="2" />
      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="white" strokeWidth="2" />
      <path d="M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function PlatformIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2" />
      <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2" />
      <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function ScalableIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" />
      <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" />
      <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" />
    </svg>
  );
}

const cardKeys = [
  { key: "growthPartner", Icon: GrowthIcon },
  { key: "onePlatform", Icon: PlatformIcon },
  { key: "scalable", Icon: ScalableIcon },
  { key: "proven", Icon: AutomationIcon },
] as const;

export default async function WhyChatDaddy() {
  const t = await getTranslations("whyChatDaddy");
  const tc = await getTranslations("common");

  return (
    <section className="w-full bg-[#0f5bff] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top area */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
                fill="white"
              />
            </svg>
            {t("badge")}
          </span>

          {/* Heading */}
          <h2 className="mt-7 font-heading text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[48px] lg:text-[56px]">
            {t("heading")}
          </h2>

          {/* Subtitle */}
          <p className="mt-5 max-w-[600px] text-[17px] leading-[1.6] text-white/75">
            {t("subtitle")}
          </p>

          {/* CTA Button */}
          <a
            href="https://app.chatdaddy.tech/SignUp?referralCode=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#0f5bff] shadow-[0_2px_12px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          >
            {tc("startFreeTrial")}
            <span className="inline-block h-2 w-2 rounded-full bg-[#0f5bff]/60" />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cardKeys.map((card, i) => {
            const { Icon } = card;
            const isFirst = i === 0;
            const isLast = i === 3;
            return (
              <div
                key={card.key}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.10] ${
                  isFirst ? "sm:row-span-2 lg:row-span-2" : ""
                } ${isLast ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <div className={`relative flex h-full flex-col justify-end p-8 ${isFirst ? "pt-48 sm:pt-0" : "pt-12"}`}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <Icon />
                  </div>

                  <h3 className="text-[20px] font-bold leading-tight text-white">
                    {t(`cards.${card.key}.title`)}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.6] text-white/65">
                    {t(`cards.${card.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
