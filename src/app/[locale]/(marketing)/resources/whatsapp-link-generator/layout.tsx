import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "WhatsApp Link Generator — Free Click-to-Chat Link Tool",
  description:
    "Generate free WhatsApp click-to-chat links with pre-filled messages. Create wa.me links for your website, social media, and marketing materials.",
  path: "/resources/whatsapp-link-generator",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
