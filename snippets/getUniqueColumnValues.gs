// Get unique values from a column.
// Walkthrough: https://bulldo.gs/get-unique-values-from-a-column-in-google-sheets/
// getUniqueColumnValues.gs
// Reads a source column, dedupes it, writes uniques to a target column.
// Adjust SHEET_NAME, SRC_COL, DEST_COL, and START_ROW as needed.

const SHEET_NAME = 'Data';
const SRC_COL    = 1;   // A = 1, B = 2, …
const DEST_COL   = 3;   // write uniques to column C
const START_ROW  = 2;   // skip the header row

function getUniqueColumnValues() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const lastRow = sheet.getLastRow();

  const raw    = sheet.getRange(START_ROW, SRC_COL, lastRow - START_ROW + 1, 1).getValues();
  const flat   = raw.flat();                          // [[a],[b],[a]] → [a,b,a]
  const unique = [...new Set(flat)].filter(String);   // dedupe, drop blanks
  const out    = unique.map(function(v) { return [v]; }); // back to 2D for setValues

  sheet.getRange(START_ROW, DEST_COL, out.length, 1).setValues(out);
  Logger.log('Unique values written: ' + out.length);
}
