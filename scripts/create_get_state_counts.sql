-- Create an RPC that returns the top states by count
-- Run this in the Supabase SQL editor (or via psql) to enable server-side aggregation

CREATE OR REPLACE FUNCTION public.get_state_counts(_limit integer DEFAULT 20)
RETURNS TABLE(state text, count bigint) AS $$
  SELECT COALESCE(NULLIF(state, ''), 'Unknown') AS state,
         COUNT(*) AS count
  FROM public.ice_events
  GROUP BY state
  ORDER BY count DESC
  LIMIT _limit;
$$ LANGUAGE SQL STABLE;

-- Verify with:
-- SELECT * FROM public.get_state_counts(10);
