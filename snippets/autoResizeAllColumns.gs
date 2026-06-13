// Auto-resize columns to fit text.
// Walkthrough: https://bulldo.gs/auto-resize-columns-to-fit-text-in-google-sheets/
// Auto-resize all data columns on the active sheet.
// Disables wrap first so cells measure to their longest line.
function autoResizeAllColumns() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastCol = sheet.getLastColumn();
  if (lastCol < 1) return;

  // Turn off wrap so autoResize measures actual text width
  sheet.getRange(1, 1, sheet.getLastRow(), lastCol)
    .setWrap(false);

  // startColumn is 1-based; second arg is a COUNT, not an end index
  sheet.autoResizeColumns(1, lastCol);
}

// Resize a specific range of columns (e.g. columns 2 through 5)
function autoResizeRange() {
  var sheet = SpreadsheetApp.getActiveSheet();
  // Columns B-E: startColumn=2, howMany=4
  sheet.autoResizeColumns(2, 4);
}
