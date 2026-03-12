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
/*  Social Icons (circle style, ~32px)                                 */
/* ------------------------------------------------------------------ */

function FacebookIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.1" />
      <path
        d="M17.5 13h2l-.5 2h-1.5v6h-2v-6h-2v-2h2v-1.654C15.5 9.818 16.318 9 17.826 9H19.5v2h-1.174c-.51 0-.826.316-.826.826V13z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.1" />
      <path
        d="M16 11.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7.425a2.928 2.928 0 01-2.925-2.925A2.928 2.928 0 0116 13.075 2.928 2.928 0 0118.925 16 2.928 2.928 0 0116 18.925zm5.738-7.613a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0zM23.4 16c0-1.02.009-2.031-.048-3.048-.057-1.182-.326-2.23-1.188-3.092-.864-.864-1.91-1.131-3.092-1.188C18.054 8.615 17.043 8.625 16.023 8.625s-2.031-.009-3.048.048c-1.182.057-2.23.326-3.092 1.188-.864.864-1.131 1.91-1.188 3.092-.057 1.018-.048 2.029-.048 3.048s-.009 2.031.048 3.048c.057 1.182.326 2.23 1.188 3.092.864.864 1.91 1.131 3.092 1.188 1.018.057 2.029.048 3.048.048s2.031.009 3.048-.048c1.182-.057 2.23-.326 3.092-1.188.864-.864 1.131-1.91 1.188-3.092.059-1.018.048-2.029.048-3.048zm-1.875 4.612c-.144.363-.326.624-.613.911-.287.287-.548.469-.911.613-.938.372-3.164.288-4.2.288s-3.264.082-4.2-.29a2.562 2.562 0 01-.911-.612 2.562 2.562 0 01-.613-.911c-.37-.938-.288-3.164-.288-4.2s-.08-3.264.29-4.2c.144-.363.326-.624.612-.911.287-.287.548-.469.911-.613.938-.372 3.164-.288 4.2-.288s3.264-.082 4.2.29c.363.144.624.326.911.612.287.287.469.548.613.911.372.938.288 3.164.288 4.2s.082 3.264-.288 4.2z"
        fill="white"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.1" />
      <path
        d="M19.32 9.5c.07 1.15.48 2.32 1.32 3.14.84.83 2.02 1.22 3.18 1.34v3.03c-1.08-.04-2.17-.26-3.15-.73-.43-.2-.82-.44-1.22-.7v6.56c-.06 1.05-.4 2.1-1.01 2.96-.98 1.44-2.69 2.38-4.43 2.41-1.08.06-2.15-.23-3.06-.77-1.52-.89-2.58-2.53-2.74-4.29-.02-.37-.02-.75 0-1.12.13-1.43.84-2.79 1.94-3.72 1.24-1.08 2.99-1.6 4.61-1.29v3.33c-.74-.24-1.61-.17-2.27.28-.47.31-.83.78-1.02 1.31-.16.38-.11.8-.1 1.21.18 1.23 1.37 2.27 2.63 2.16.84-.01 1.64-.5 2.08-1.21.14-.25.3-.5.31-.79.07-1.34.04-2.68.05-4.02V9.5h2.88z"
        fill="white"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.1" />
      <path
        d="M23.76 11.89a2.26 2.26 0 00-1.59-1.6C20.88 10 16 10 16 10s-4.88 0-6.17.29a2.26 2.26 0 00-1.59 1.6C8 13.17 8 16 8 16s0 2.83.24 4.11a2.26 2.26 0 001.59 1.6C11.12 22 16 22 16 22s4.88 0 6.17-.29a2.26 2.26 0 001.59-1.6C24 18.83 24 16 24 16s0-2.83-.24-4.11zM14.4 18.6v-5.2L18.96 16l-4.56 2.6z"
        fill="white"
      />
    </svg>
  );
}

function XiaohongshuIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.1" />
      <path
        d="M10.5 11h3.25l1.5 5.5h.1L16.85 11h3.25l-3.5 10h-2.6l-3.5-10zm8 0H22v1.5h-2v7h2V21h-5.5v-1.5h2v-7h-2V11z"
        fill="white"
      />
    </svg>
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
      <h3 className="text-sm font-semibold text-white mb-5">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#9ca3af] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                {link.label}
                <span className="text-xs">&#8599;</span>
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-[13px] text-[#9ca3af] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-orange-500 ring-1 ring-inset ring-orange-500/20">
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
    <footer className="bg-[#0d0f1a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section: logo + columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Logo */}
          <div className="shrink-0">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/chatdaddy-icon.png"
                alt="ChatDaddy"
                width={28}
                height={28}
                className="shrink-0 brightness-0 invert"
              />
              <span className="text-lg font-bold text-white">ChatDaddy</span>
            </Link>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-1">
            <FooterLinkColumn title="Features" links={featuresLinks} />
            <FooterLinkColumn title="Company" links={companyLinks} />
            <FooterLinkColumn title="Resources" links={resourcesLinks} />
            <FooterLinkColumn title="Security & Legal" links={legalLinks} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-[#1f2937] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              2026 Copyright &copy; TNT The Next Tech Ltd. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/chatdaddytech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/chatdaddy.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/@chatdaddy.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.youtube.com/@chatdaddy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/chatdaddy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Xiaohongshu"
              >
                <XiaohongshuIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
