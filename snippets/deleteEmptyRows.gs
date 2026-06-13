// Delete empty rows.
// Walkthrough: https://bulldo.gs/delete-empty-rows-in-google-sheets/
// Delete every fully-empty row in the active sheet.
// Run from Extensions > Apps Script > Run.
function deleteEmptyRows() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn();

  for (var i = lastRow; i >= 1; i--) {
    var values = sheet.getRange(i, 1, 1, lastCol).getValues()[0];
    var isEmpty = values.every(function(cell) { return cell === ''; });
    if (isEmpty) {
      sheet.deleteRow(i);
    }
  }
}
