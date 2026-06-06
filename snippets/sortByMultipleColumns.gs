// Sort a sheet by multiple columns in Google Sheets.
// Example: column 2 ascending, then column 4 descending (header row preserved).
// Walkthrough: https://bulldo.gs/sort-a-sheet-by-multiple-columns-in-google-sheets/
function sortByMultipleColumns() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var last = sheet.getLastRow();
  if (last < 3) return; // nothing to sort below the header

  var range = sheet.getRange(2, 1, last - 1, sheet.getLastColumn());
  range.sort([
    { column: 2, ascending: true },
    { column: 4, ascending: false }
  ]);
}
