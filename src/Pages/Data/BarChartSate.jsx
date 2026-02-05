import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from "recharts";

// Pleasant color palette for bars (cycles if more states than colors)
const COLORS = [
  '#4f46e5', // indigo
  '#06b6d4', // teal
  '#f97316', // orange
  '#ef4444', // red
  '#10b981', // green
  '#8b5cf6', // violet
  '#f59e0b', // amber
  '#60a5fa', // sky
  '#a78bfa', // purple
  '#34d399', // emerald
  '#f472b6', // pink
  '#64748b'  // slate
];

export function BarChartState({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-muted-foreground">
        No chart data available.
      </div>
    );
  }

  return (
    <div className="mt-6 max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm" style={{ minWidth: 0, minHeight: 420 }}>
      <h3 className="text-lg font-medium mb-3">Reports by state</h3>
      <ResponsiveContainer width="100%" height={420}>
        <ReBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="state" angle={-45} textAnchor="end" height={80} interval={0} tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} label={{ value: 'Reports', angle: -90, position: 'insideLeft', dy: -10 }} />
          <Tooltip formatter={(value) => [value, 'Reports']} />
          <Bar dataKey="count" barSize={18} radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Default export for easy importing
export default BarChartState; 
