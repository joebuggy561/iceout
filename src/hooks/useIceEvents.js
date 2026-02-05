import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function useIceEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Counts for analytics
  const [totalCount, setTotalCount] = useState(0);
  const [verifiedCount, setVerifiedCount] = useState(0);
  const [lastSixMonthsCount, setLastSixMonthsCount] = useState(0);
  // aggregated counts per state (for chart)
  const [stateCounts, setStateCounts] = useState([]);
  // If RPC call fails, store message so UI can show helpful guidance
  const [rpcError, setRpcError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);

      try {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        // Limit the events returned to a reasonable number to avoid fetching all 225k rows
        const eventsPromise = supabase
          .from("ice_events")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(1000);

        const totalPromise = supabase
          .from("ice_events")
          .select("*", { count: "exact", head: true });

        const verifiedPromise = supabase
          .from("ice_events")
          .select("*", { count: "exact", head: true })
          .eq("verified", true);

        const lastSixMonthsPromise = supabase
          .from("ice_events")
          .select("*", { count: "exact", head: true })
          .gte("created_at", sixMonthsAgo.toISOString());

        const [eventsRes, totalRes, verifiedRes, lastSixRes] = await Promise.all([
          eventsPromise,
          totalPromise,
          verifiedPromise,
          lastSixMonthsPromise,
        ]);

        if (!mounted) return;

        const eventsArray = eventsRes.data || [];
     

        setEvents(eventsArray);
        setTotalCount(totalRes.count ?? 0);
        setVerifiedCount(verifiedRes.count ?? 0);
        setLastSixMonthsCount(lastSixRes.count ?? 0);

        // Attempt server-side aggregation via RPC (recommended when table is large)
        try {
          // Call the RPC using the parameter name `_limit` used in the function signature
          const { data: rpcData, error: rpcCallError } = await supabase.rpc('get_state_counts', { _limit: 20 });
          if (rpcCallError) {
            const msg = rpcCallError.message || String(rpcCallError);
            console.debug('get_state_counts rpc not available or failed:', msg);
            setRpcError(msg);
          }
          if (rpcData && Array.isArray(rpcData)) {
            setStateCounts(rpcData);
            setRpcError(null);
            return;
          }
        } catch (rpcErr) {
          const msg = rpcErr?.message || String(rpcErr);
          console.debug('RPC call failed', msg);
          setRpcError(msg);
        }

        // Fallback: compute from the limited events returned client-side
        const counts = eventsArray.reduce((acc, e) => {
          const s = (e.state || e.State || e.location_text || e.location || 'Unknown').toString().trim() || 'Unknown';
          acc[s] = (acc[s] || 0) + 1;
          return acc;
        }, {});

        const computed = Object.entries(counts).map(([state, count]) => ({ state, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 20);

        setStateCounts(computed);

      } catch (err) {
        console.error("useIceEvents fetch error", err);
        // keep safe defaults
        setEvents([]);
        setTotalCount(0);
        setVerifiedCount(0);
        setLastSixMonthsCount(0);
        setStateCounts([]);
        setRpcError(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    events,
    loading,
    totalCount,
    verifiedCount,
    lastSixMonthsCount,
    stateCounts,
    rpcError,
  };
}
