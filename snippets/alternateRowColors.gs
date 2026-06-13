// Alternate row colors with a script.
// Walkthrough: https://bulldo.gs/alternate-row-colors-with-a-script-in-google-sheets/
// Alternate row background colors across a named sheet.
// Writes the entire color grid in one setBackgrounds call.
function alternateRowColors() {
  var SHEET_NAME = 'Sheet1';
  var EVEN_COLOR  = '#ffffff';
  var ODD_COLOR   = '#e8f0fe';

  var sheet = SpreadsheetApp.getActiveSpreadsheet()
                            .getSheetByName(SHEET_NAME);
  var numRows = sheet.getLastRow();
  var numCols = sheet.getLastColumn();

  var colors = [];
  for (var r = 0; r < numRows; r++) {
    var rowColor = (r % 2 === 0) ? EVEN_COLOR : ODD_COLOR;
    var row = [];
    for (var c = 0; c < numCols; c++) {
      row.push(rowColor);
    }
    colors.push(row);
  }

  sheet.getRange(1, 1, numRows, numCols).setBackgrounds(colors);
}
