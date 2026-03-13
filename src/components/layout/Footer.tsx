import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const BOOK_DEMO_URL =
  "https://chatdaddy-consultation.paperform.co/?utm_source=Website&utm_campaign=Website";

const featuresLinks = [
  { label: "Team Inbox", href: "/features/team-inbox" },
  { label: "Notification", href: "/features/notification" },
  { label: "Chatbot", href: "/features/chatbot" },
  { label: "Marketing", href: "/features/marketing" },
  { label: "Shop", href: "/features/shop" },
  { label: "Pay", href: "/features/pay" },
  { label: "Automation", href: "/features/automation" },
  { label: "CRM", href: "/features/crm" },
];

const companyLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "About Us", href: "/our-story" },
  { label: "Careers", href: "/careers" },
  { label: "Partner Program", href: "/join-partnership" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support Plan", href: "/support-plan" },
  { label: "Book Demo", href: BOOK_DEMO_URL, external: true },
  { label: "Contact Us", href: "/contact-us" },
];

const resourcesLinks: {
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

const legalLinks = [
  { label: "Privacy Policy", href: "/terms/privacy-policy" },
  { label: "Terms of Service", href: "/terms/terms-of-use" },
  { label: "DPSA", href: "/terms/data-processing-and-security-addendum" },
];

/* ------------------------------------------------------------------ */
/*  Social Icons                                                       */
/* ------------------------------------------------------------------ */

function SocialIcon({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-white/60 transition-all hover:bg-white/[0.15] hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Link column                                                        */
/* ------------------------------------------------------------------ */

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean; badge?: string }[];
}) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold uppercase tracking-wider text-white/90 mb-5">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors"
              >
                {link.label}
                {link.badge && (
                  <span className="inline-flex items-center rounded-full bg-orange-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-orange-400">
                    {link.badge}
                  </span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export default function Footer() {
  return (
    <footer className="bg-[#111318]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top section: logo + columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Logo */}
          <div className="shrink-0">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/chatdaddy-logo.png"
                alt="ChatDaddy"
                width={24}
                height={24}
                className="shrink-0 brightness-0 invert"
              />
              <span className="text-[17px] font-bold text-white">ChatDaddy</span>
            </Link>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-14 flex-1">
            <FooterLinkColumn title="Features" links={featuresLinks} />
            <FooterLinkColumn title="Company" links={companyLinks} />
            <FooterLinkColumn title="Resources" links={resourcesLinks} />
            <FooterLinkColumn title="Security & Legal" links={legalLinks} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/[0.08] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/30">
              2026 Copyright &copy; TNT The Next Tech Ltd. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <SocialIcon href="https://www.facebook.com/chatdaddytech" label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/chatdaddy.tech" label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@chatdaddy.tech" label="TikTok">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86-4.43V7.56a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.79.01h-.4z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@chatdaddy" label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.xiaohongshu.com/user/profile/chatdaddy" label="Xiaohongshu">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.5 7h3.25l1.5 5.5h.1L16.85 7h3.25l-3.5 10h-2.6l-3.5-10zm8 0H22v1.5h-2v7h2V17h-5.5v-1.5h2v-7h-2V7z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
