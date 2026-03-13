import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service — ChatDaddy",
  description:
    "ChatDaddy's terms of service. Read our terms and conditions for using the ChatDaddy WhatsApp CRM and automation platform.",
  path: "/terms/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms/terms-of-use" },
        ]}
      />

      <section className="bg-[#0a0e1a] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Terms of Service</h1>
          <p className="text-white/50">Last updated: March 2025</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-gray prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using ChatDaddy&apos;s services (&quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services.</p>

          <h2>2. Description of Services</h2>
          <p>ChatDaddy provides a WhatsApp CRM and business automation platform that includes messaging tools, chatbot builder, broadcasting, team inbox, CRM, and related features.</p>

          <h2>3. Account Registration</h2>
          <p>You must provide accurate, complete, and current information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities under your account.</p>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Send spam or unsolicited messages</li>
            <li>Violate WhatsApp&apos;s Business Policy or Commerce Policy</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the Services for illegal, harmful, or fraudulent purposes</li>
          </ul>

          <h2>5. Messaging Compliance</h2>
          <p>You are responsible for obtaining proper consent from recipients before sending messages. You must comply with all applicable anti-spam laws and WhatsApp&apos;s policies regarding business messaging.</p>

          <h2>6. Pricing and Payment</h2>
          <p>Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with 30 days&apos; notice.</p>

          <h2>7. Intellectual Property</h2>
          <p>ChatDaddy and its licensors retain all rights to the Services, including software, trademarks, and content. You retain ownership of your data and content uploaded to the platform.</p>

          <h2>8. Data Processing</h2>
          <p>We process your data in accordance with our Privacy Policy and applicable data protection laws. For enterprise customers, we offer a Data Processing and Security Addendum (DPSA).</p>

          <h2>9. Service Availability</h2>
          <p>We strive for 99.9% uptime but do not guarantee uninterrupted service. We are not liable for downtime due to maintenance, force majeure, or third-party service disruptions.</p>

          <h2>10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, ChatDaddy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.</p>

          <h2>11. Termination</h2>
          <p>Either party may terminate the agreement at any time. Upon termination, your access to the Services will cease. You may export your data within 30 days of termination.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms are governed by the laws of Malaysia. Any disputes shall be resolved in the courts of Kuala Lumpur, Malaysia.</p>

          <h2>13. Contact</h2>
          <p>For questions about these Terms, contact us at <a href="mailto:legal@chatdaddy.tech">legal@chatdaddy.tech</a>.</p>
        </div>
      </article>
    </>
  );
}
