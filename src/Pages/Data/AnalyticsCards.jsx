export default function AnalyticsCards({
  totalCount = 0,
  verifiedCount = 0,
  lastSixMonthsCount = 0
}) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card label="Last 1 Year" value={lastSixMonthsCount} />
      <Card label="Verified Reports" value={verifiedCount} />
      <Card label="Total Reports" value={totalCount} />
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div className="bg-white border rounded-xl p-6 text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-3xl font-bold">{value.toLocaleString()}</p>
    </div>
  );
}

