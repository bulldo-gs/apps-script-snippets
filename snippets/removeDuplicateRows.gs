// Remove duplicate rows.
// Walkthrough: https://bulldo.gs/remove-duplicate-rows-in-google-sheets/
// removeDuplicates.gs — dedup active sheet, keep first occurrence
// Run from Extensions > Apps Script, or bind to a trigger.
function removeDuplicateRows() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var seen = new Set();
  var unique = [];
  for (var i = 0; i < data.length; i++) {
    var key = data[i].join('|');
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(data[i]);
    }
  }
  sheet.clearContents();
  sheet.getRange(1, 1, unique.length, unique[0].length).setValues(unique);
}
