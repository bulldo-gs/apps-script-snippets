// Highlight every cell whose value appears more than once, in Google Sheets.
// Walkthrough: https://bulldo.gs/highlight-duplicate-values-in-google-sheets/
function highlightDuplicateValues() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();

  var counts = {};
  values.forEach(function(row) {
    row.forEach(function(v) {
      if (v !== '' && v !== null) counts[v] = (counts[v] || 0) + 1;
    });
  });

  var backgrounds = values.map(function(row) {
    return row.map(function(v) {
      return (v !== '' && counts[v] > 1) ? '#FFE08A' : null; // amber for dupes
    });
  });

  range.setBackgrounds(backgrounds);
}
