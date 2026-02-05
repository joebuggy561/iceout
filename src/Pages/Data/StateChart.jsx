import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function IceByCityChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data: rows, error } = await supabase
        .from("ice_events")
        .select("location, count:id", { count: "exact" })
        .group("location")
        .order("count", { ascending: false })
        .limit(10); // top 10 locations

      if (error) {
        console.error(error);
        return;
      }

      setData(rows.map(r => ({
        city: r.location,
        count: r.count
      })));
    }

    fetchData();
  }, []);

  return <BarChartState data={data} />;
}
