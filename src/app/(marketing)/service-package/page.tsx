import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Service Packages — ChatDaddy Setup & Support",
  description:
    "Get expert help setting up ChatDaddy. Our service packages include message flow customization, broadcast setup, bot configuration, and team onboarding.",
  path: "/service-package",
});

export default function ServicePackagePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Service Packages", href: "/service-package" },
        ]}
      />
      <article>
        <h1>Service Packages</h1>
        {/* TODO: Render service packages from CMS */}
      </article>
    </>
  );
}
