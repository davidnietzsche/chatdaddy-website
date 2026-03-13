import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Data Processing & Security Addendum (DPSA) — ChatDaddy",
  description:
    "ChatDaddy's Data Processing and Security Addendum. Learn about our data processing practices, security measures, and compliance commitments.",
  path: "/terms/data-processing-and-security-addendum",
});

export default function DPSAPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "DPSA", href: "/terms/data-processing-and-security-addendum" },
        ]}
      />

      <section className="bg-[#0a0e1a] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Data Processing & Security Addendum</h1>
          <p className="text-white/50">Last updated: March 2025</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-gray prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none">
          <h2>1. Scope</h2>
          <p>This Data Processing and Security Addendum (&quot;DPSA&quot;) forms part of the agreement between ChatDaddy (TNT The Next Tech Ltd.) and the Customer, and applies to the processing of personal data in connection with the Services.</p>

          <h2>2. Definitions</h2>
          <ul>
            <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
            <li><strong>Processing:</strong> Any operation performed on Personal Data, including collection, storage, use, and deletion.</li>
            <li><strong>Data Controller:</strong> The Customer, who determines the purposes and means of processing.</li>
            <li><strong>Data Processor:</strong> ChatDaddy, who processes data on behalf of the Customer.</li>
          </ul>

          <h2>3. Data Processing</h2>
          <h3>3.1 Purpose</h3>
          <p>ChatDaddy processes Personal Data solely for the purpose of providing the Services as described in the main agreement and as instructed by the Customer.</p>

          <h3>3.2 Types of Data</h3>
          <ul>
            <li>Contact information (names, phone numbers, email addresses)</li>
            <li>Message content and metadata</li>
            <li>Usage and analytics data</li>
            <li>Business transaction data</li>
          </ul>

          <h2>4. Security Measures</h2>
          <p>ChatDaddy implements the following security measures:</p>
          <ul>
            <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
            <li>Role-based access control (RBAC)</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Incident response procedures with 72-hour notification</li>
            <li>Data backup and disaster recovery</li>
            <li>Employee security training and background checks</li>
            <li>Physical security at data center facilities</li>
          </ul>

          <h2>5. Sub-Processors</h2>
          <p>ChatDaddy may engage sub-processors to assist in providing the Services. We maintain a list of current sub-processors and will notify the Customer before engaging new sub-processors.</p>

          <h2>6. Data Subject Rights</h2>
          <p>ChatDaddy will assist the Customer in responding to data subject requests, including access, correction, deletion, and portability requests.</p>

          <h2>7. Data Breach Notification</h2>
          <p>In the event of a personal data breach, ChatDaddy will notify the Customer without undue delay, and in any event within 72 hours of becoming aware of the breach.</p>

          <h2>8. Data Retention and Deletion</h2>
          <p>Upon termination of the agreement, ChatDaddy will delete or return all Personal Data within 30 days, unless retention is required by law.</p>

          <h2>9. International Transfers</h2>
          <p>If Personal Data is transferred outside the Customer&apos;s jurisdiction, ChatDaddy ensures appropriate safeguards are in place, including Standard Contractual Clauses where applicable.</p>

          <h2>10. Audit Rights</h2>
          <p>The Customer may audit ChatDaddy&apos;s compliance with this DPSA upon reasonable notice. ChatDaddy will cooperate and provide necessary information.</p>

          <h2>11. Contact</h2>
          <p>For questions about data processing, contact our Data Protection team at <a href="mailto:privacy@chatdaddy.tech">privacy@chatdaddy.tech</a>.</p>
        </div>
      </article>
    </>
  );
}
