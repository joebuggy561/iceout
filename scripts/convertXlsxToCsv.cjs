const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("./scripts/icedatabase.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const csv = XLSX.utils.sheet_to_csv(sheet);
fs.writeFileSync("./scripts/ice_historical.csv", csv);

console.log("✅ CSV created");
