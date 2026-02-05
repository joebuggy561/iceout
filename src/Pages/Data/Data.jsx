import React from 'react'
import DataHeading from './DataHeading'
import AnalyticsCards from './AnalyticsCards'
import useIceEvents from '../../hooks/useIceEvents'
import BarChartState from './BarChartSate'

const Data = () => {
  const { events, loading, totalCount, verifiedCount, lastSixMonthsCount, stateCounts, rpcError } = useIceEvents();

  if (loading) return (
    <div className="max-w-5xl mx-auto p-6">
      <DataHeading />
      <p className="text-sm text-muted-foreground">Loading data…</p>
    </div>
  );

  // Prefer server-side aggregated state counts (efficient for large tables)
  const chartData = (stateCounts && stateCounts.length > 0)
    ? stateCounts.map((r) => ({ state: r.state, count: Number(r.count) }))
    : // fallback: aggregate from limited `events` returned from the hook
      (() => {
        const counts = events.reduce((acc, e) => {
          const state = (e.state || e.State || e.state_code || 'Unknown').toString().trim() || 'Unknown';
          acc[state] = (acc[state] || 0) + 1;
          return acc;
        }, {});

        return Object.entries(counts)
          .map(([state, count]) => ({ state, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 20);
      })();

  return (
    <>
      <DataHeading />
      <AnalyticsCards
        totalCount={totalCount}
        verifiedCount={verifiedCount}
        lastSixMonthsCount={lastSixMonthsCount}
      />

      {rpcError && (
        <div className="max-w-5xl mx-auto p-4 mb-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded">
          <strong>State aggregation RPC missing:</strong> {rpcError}. Run the SQL in <code>scripts/create_get_state_counts.sql</code> in the Supabase SQL editor to enable server-side aggregation.
        </div>
      )}

      {(!stateCounts || stateCounts.length === 0) && events.length > 0 && (
        <div className="max-w-5xl mx-auto p-3 mb-4 bg-blue-50 border border-blue-200 text-blue-800 rounded">
          Using client-side aggregation over {events.length} events (limited to 1000). To get full results, create the RPC or a materialized view.
        </div>
      )}

      <BarChartState data={chartData} />

      {/* <AnalyticsCards events={events} /> */}
    </>
  )
}

export default Data
