const CHECK = (
  <svg
    className="mx-auto h-5 w-5 text-[#5ec369]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CROSS = (
  <svg
    className="mx-auto h-5 w-5 text-[#d1d5db]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface Row {
  feature: string;
  basic: React.ReactNode;
  pro: React.ReactNode;
  max: React.ReactNode;
}

const rows: Row[] = [
  {
    feature: "Number of Teammates",
    basic: "5",
    pro: "10",
    max: "15",
  },
  {
    feature: "Number of Channels",
    basic: "1 WhatsApp, 1 FB, 1 IG",
    pro: "2 WhatsApp, 1 FB, 1 IG",
    max: "5 Any Channels",
  },
  {
    feature: "Number of Messages",
    basic: "5,000",
    pro: "10,000",
    max: "50,000",
  },
  { feature: "Team Management", basic: CHECK, pro: CHECK, max: CHECK },
  { feature: "Marketing Campaigns", basic: CHECK, pro: CHECK, max: CHECK },
  { feature: "Automation", basic: CHECK, pro: CHECK, max: CHECK },
  { feature: "AI Chatbot", basic: CROSS, pro: CHECK, max: CHECK },
  { feature: "Mid-Year Business Review", basic: CROSS, pro: CROSS, max: CHECK },
  { feature: "Submit Ticket Support", basic: CHECK, pro: CHECK, max: CHECK },
  { feature: "Online Group Support", basic: CROSS, pro: CHECK, max: CHECK },
  { feature: "Online Meeting", basic: CROSS, pro: CHECK, max: CHECK },
  { feature: "2h Priority Response", basic: CROSS, pro: CROSS, max: CHECK },
];

export default function PricingComparison() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#0f5bff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0f5bff]">
            Pricing Comparison
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Find Your Perfect Fit
          </h2>
        </div>

        {/* Table */}
        <div className="mt-12 overflow-x-auto rounded-xl border border-[#e5e5e8]">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-[#e5e5e8] bg-gray-50">
                <th className="px-6 py-4 text-left font-semibold text-gray-900">
                  Feature
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">
                  Basic
                </th>
                <th className="px-6 py-4 text-center font-semibold text-[#0f5bff]">
                  Pro
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">
                  Max
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-[#e5e5e8] last:border-b-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.basic}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.pro}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.max}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
