require("dotenv").config();
const XLSX = require("xlsx");
const { createClient } = require("@supabase/supabase-js");

/* ---------- Supabase ---------- */
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_SERVICE_KEY
);

/* ---------- helpers ---------- */
function excelDateToISO(value) {
  if (!value || typeof value !== "number") return null;
  return new Date(Math.round((value - 25569) * 86400 * 1000)).toISOString();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ---------- load CSV ---------- */
const workbook = XLSX.readFile("./scripts/ice_historical.csv");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { defval: null });

/* ---------- map to RAW table ---------- */
function mapRow(row) {
  if (!row.apprehension_state) return null;

  return {
    apprehension_date: excelDateToISO(row.apprehension_date),
    apprehension_state: row.apprehension_state,
    apprehension_aor: row.apprehension_aor,
    final_program: row.final_program,
    final_program_group: row.final_program_group,
    apprehension_method: row.apprehension_method,
    apprehension_criminality: row.apprehension_criminality,
    case_status: row.case_status,
    case_category: row.case_category,
    departed_date: excelDateToISO(row.departed_date),
    departure_country: row.departure_country,
    final_order_yes_no: row.final_order_yes_no,
    final_order_date: excelDateToISO(row.final_order_date),
    birth_year: row.birth_year,
    citizenship_country: row.citizenship_country,
    gender: row.gender,
    apprehension_site_landmark: row.apprehension_site_landmark,
    unique_identifier: row.unique_identifier,
    apprehension_date_time: excelDateToISO(row.apprehension_date_time),
    duplicate_likely: row.duplicate_likely,
    file_original: row.file_original,
    sheet_original: row.sheet_original,
    row_original: row.row_original
  };
}

const mapped = rows.map(mapRow).filter(Boolean);

/* ---------- upload ---------- */
async function uploadInChunks(chunkSize = 100) {
  console.log(`Uploading ${mapped.length} records to ice_events_raw...`);

  const START_AT = 206200; // resume safely

  for (let i = START_AT; i < mapped.length; i += chunkSize) {
    const chunk = mapped.slice(i, i + chunkSize);

    let attempts = 0;
    let success = false;

    while (!success && attempts < 5) {
      try {
        const { error } = await supabase
          .from("ice_events_raw")
          .insert(chunk);

        if (error) throw error;

        success = true;
        console.log(`✅ Uploaded ${i + chunk.length}`);
      } catch (err) {
        attempts++;
        console.warn(`⚠️ Retry ${attempts} at chunk ${i}`, err.message);
        await sleep(2000);
      }
    }

    if (!success) {
      console.error(`❌ Permanently failed at chunk ${i}`);
      return;
    }

    await sleep(500);
  }

  console.log("🎉 Upload complete");
}

/* ---------- RUN ---------- */
uploadInChunks().catch(console.error);

// require("dotenv").config();
// const fs = require("fs");
// const XLSX = require("xlsx");
// const { createClient } = require("@supabase/supabase-js");

// const supabase = createClient(
//   process.env.VITE_SUPABASE_URL,
//   process.env.VITE_SUPABASE_SERVICE_KEY
// );

// /* ---------- helpers ---------- */
// function excelDateToISO(value) {
//   if (!value || typeof value !== "number") return null;
//   return new Date(Math.round((value - 25569) * 86400 * 1000)).toISOString();
// }

// /* ---------- load CSV ---------- */
// const workbook = XLSX.readFile("./scripts/ice_historical.csv");
// const sheet = workbook.Sheets[workbook.SheetNames[0]];
// const rows = XLSX.utils.sheet_to_json(sheet, { defval: null });

// /* ---------- map to RAW table ---------- */
// function mapRow(row) {
//   if (!row.apprehension_state) return null;

//   return {
//     apprehension_date: excelDateToISO(row.apprehension_date),
//     apprehension_state: row.apprehension_state,
//     apprehension_aor: row.apprehension_aor,
//     final_program: row.final_program,
//     final_program_group: row.final_program_group,
//     apprehension_method: row.apprehension_method,
//     apprehension_criminality: row.apprehension_criminality,
//     case_status: row.case_status,
//     case_category: row.case_category,
//     departed_date: excelDateToISO(row.departed_date),
//     departure_country: row.departure_country,
//     final_order_yes_no: row.final_order_yes_no,
//     final_order_date: excelDateToISO(row.final_order_date),
//     birth_year: row.birth_year,
//     citizenship_country: row.citizenship_country,
//     gender: row.gender,
//     apprehension_site_landmark: row.apprehension_site_landmark,
//     unique_identifier: row.unique_identifier,
//     apprehension_date_time: excelDateToISO(row.apprehension_date_time),
//     duplicate_likely: row.duplicate_likely,
//     file_original: row.file_original,
//     sheet_original: row.sheet_original,
//     row_original: row.row_original
//   };
// }

// const mapped = rows.map(mapRow).filter(Boolean);

// async function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function uploadInChunks(chunkSize = 100) {
//   console.log(`Uploading ${mapped.length} records to ice_events_raw...`);

//   let START_AT = 106200; // resume point

//   for (let i = START_AT; i < mapped.length; i += chunkSize) {
//     const chunk = mapped.slice(i, i + chunkSize);

//     let attempts = 0;
//     let success = false;

//     while (!success && attempts < 5) {
//       try {
//         const { error } = await supabase
//           .from("ice_events_raw")
//           .insert(chunk);

//         if (error) throw error;

//         success = true;
//         console.log(`✅ Uploaded ${i + chunk.length}`);
//       } catch (err) {
//         attempts++;
//         console.warn(`⚠️ Retry ${attempts} at chunk ${i}`, err.message);
//         await sleep(2000); // backoff
//       }
//     }

//     if (!success) {
//       console.error(`❌ Permanently failed at chunk ${i}`);
//       return;
//     }

//     // 👇 THIS is what prevents EAI_AGAIN
//     await sleep(500);
//   }

//   console.log("🎉 Upload complete");
// }


// /* ---------- upload ---------- */
// async function uploadInChunks(chunkSize = 300) {
//   console.log(`Uploading ${mapped.length} records to ice_events_raw...`);

//   const START_AT = 106200; // resume point

//   for (let i = START_AT; i < mapped.length; i += chunkSize) {
//     const chunk = mapped.slice(i, i + chunkSize);

//     const { error } = await supabase
//       .from("ice_events_raw")
//       .insert(chunk);

//     if (error) {
//       console.error(`❌ Failed at chunk ${i}`, error);
//       return;
//     }

//     console.log(`✅ Uploaded ${i + chunk.length}`);
//   }

//   console.log("🎉 Upload complete");
// }

// uploadInChunks();
