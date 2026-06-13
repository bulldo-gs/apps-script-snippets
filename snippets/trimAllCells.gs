// Trim whitespace from every cell.
// Walkthrough: https://bulldo.gs/trim-whitespace-from-every-cell-in-google-sheets/
// trimAllCells — strips regular + non-breaking spaces from every cell
// Run from Extensions > Apps Script, then save and run trimAllCells()
function trimAllCells() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();

  for (var r = 0; r < values.length; r++) {
    for (var c = 0; c < values[r].length; c++) {
      var cell = values[r][c];
      if (typeof cell === 'string') {
        //   is the non-breaking space pasted from browsers and PDFs
        cell = cell.replace(/ /g, ' ');
        cell = cell.trim();
        values[r][c] = cell;
      }
    }
  }

  range.setValues(values);
}
