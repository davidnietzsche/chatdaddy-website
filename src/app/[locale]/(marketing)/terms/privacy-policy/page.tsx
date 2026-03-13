import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — ChatDaddy",
  description:
    "ChatDaddy's privacy policy. Learn how we collect, use, and protect your personal information and data.",
  path: "/terms/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/terms/privacy-policy" },
        ]}
      />

      <section className="bg-[#0a0e1a] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Privacy Policy</h1>
          <p className="text-white/50">Last updated: March 2025</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-gray prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none">
          <h2>1. Introduction</h2>
          <p>TNT The Next Tech Ltd. (&quot;ChatDaddy&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Account registration information (name, email, phone number)</li>
            <li>Business information (company name, industry, size)</li>
            <li>Payment and billing information</li>
            <li>Communications with our support team</li>
            <li>Content you create through our platform (messages, templates, contacts)</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>Device and browser information</li>
            <li>IP address and geolocation data</li>
            <li>Usage data and interaction patterns</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send service-related communications</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Detect, prevent, and address security issues</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Business partners with your explicit consent</li>
            <li>Law enforcement when required by law</li>
            <li>Parties involved in business transactions (merger, acquisition)</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data. However, no method of electronic storage is 100% secure.</p>

          <h2>6. Data Retention</h2>
          <p>We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us.</p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>

          <h2>8. Cookies</h2>
          <p>We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings.</p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from children.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.</p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li>Email: <a href="mailto:privacy@chatdaddy.tech">privacy@chatdaddy.tech</a></li>
            <li>Address: TNT The Next Tech Ltd., Kuala Lumpur, Malaysia</li>
          </ul>
        </div>
      </article>
    </>
  );
}
