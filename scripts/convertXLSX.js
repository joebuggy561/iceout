import XLSX from "xlsx";
import fs from "fs";

const workbook = XLSX.readFile("./scripts/icedatabase.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

const records = jsonData.map(row => ({
  type: "historical",
  title: row["Title"] || "",
  source_url: row["Source"] || "",
  event_date: row["Date"] || null,
  location_text: row["Location"] || "",
  verified: true,
  verification_source: "ICE FOIA"
}));

fs.writeFileSync("ice_historical.json", JSON.stringify(records, null, 2));
console.log("✅ XLSX converted to JSON!");