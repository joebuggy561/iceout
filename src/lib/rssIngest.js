import { supabase } from "./supabase";

const RSS_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=" +
  encodeURIComponent(
    "https://news.google.com/rss/search?q=ICE+raid+detention"
  );

export async function ingestRSS() {
  try {
    const res = await fetch(RSS_URL);
    const data = await res.json();

    if (!data.items) {
      console.error("No RSS items found");
      return;
    }

    const rows = data.items.map(item => ({
      type: "news",
      title: item.title,
      source_url: item.link,
      source_name: item.source || "Google News",
      event_date: new Date(item.pubDate),
      raw_location_text: item.title,
      verified: false,
      verification_source: "news"
    }));

    // prevent duplicates
    const { error } = await supabase
      .from("ice_events")
      .upsert(rows, { onConflict: "source_url" });

    if (error) throw error;

    console.log(`Ingested ${rows.length} news items`);
  } catch (err) {
    console.error("RSS ingestion failed:", err.message);
  }
}

