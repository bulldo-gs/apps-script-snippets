// Insert checkboxes down a column in Google Sheets.
// Walkthrough: https://bulldo.gs/add-a-checkbox-to-a-cell-in-google-sheets/
function addCheckboxToCell() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var col = 4; // column D
  var rows = Math.max(sheet.getLastRow() - 1, 1); // every data row below the header
  sheet.getRange(2, col, rows, 1).insertCheckboxes();
}
