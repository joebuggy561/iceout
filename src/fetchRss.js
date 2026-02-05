import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser();

export async function fetchRSS(url) {
  const proxy = "https://api.allorigins.win/raw?url=";
  const res = await fetch(proxy + encodeURIComponent(url));
  const text = await res.text();
  const json = parser.parse(text);
  return json.rss.channel.item || [];
}