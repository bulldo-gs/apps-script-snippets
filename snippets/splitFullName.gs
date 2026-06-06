// Split a full name in column A into First (B) and Last (C), in Google Sheets.
// Last name = everything after the first token (handles middle names).
// Walkthrough: https://bulldo.gs/split-a-full-name-into-first-and-last-in-google-sheets/
function splitFullName() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var last = sheet.getLastRow();
  if (last < 2) return;

  var names = sheet.getRange('A2:A' + last).getValues();
  var out = names.map(function(row) {
    var full = String(row[0]).trim();
    if (!full) return ['', ''];
    var parts = full.split(/\s+/);
    var first = parts.shift();
    return [first, parts.join(' ')];
  });

  sheet.getRange(2, 2, out.length, 2).setValues(out); // write First, Last
}
