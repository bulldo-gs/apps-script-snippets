// Freeze the header row.
// Walkthrough: https://bulldo.gs/freeze-the-header-row-in-google-sheets/
// freezeHeader.gs
// Freezes row 1, bolds the header text, and write-protects that row.
// Run once manually, or wire to onOpen if you want it enforced on every open.

function setupHeader() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastCol = sheet.getLastColumn();

  // 1. Freeze the view so row 1 stays visible while scrolling.
  sheet.setFrozenRows(1);

  // 2. Bold the header range — freeze does not do this automatically.
  var headerRange = sheet.getRange(1, 1, 1, lastCol);
  headerRange.setFontWeight('bold');

  // 3. Protect the header row so collaborators cannot edit it.
  var protection = headerRange.protect();
  protection.setDescription('Header row — do not edit');
  protection.setWarningOnly(true);
}
