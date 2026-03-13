import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "WhatsApp Marketing ROI Calculator — ChatDaddy",
  description:
    "Calculate the potential ROI of WhatsApp marketing with ChatDaddy. Estimate revenue from broadcast campaigns based on your contact list and conversion rates.",
  path: "/resources/roi-calculator",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
