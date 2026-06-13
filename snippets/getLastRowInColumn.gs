// Find the last row with data in a column.
// Walkthrough: https://bulldo.gs/find-the-last-row-with-data-in-a-column-in-google-sheets/
// Return the last row that has data in a single column (1-based
// colIndex). Reads the whole column once, then scans upward for the
// first non-empty cell. Returns 0 if the column is empty.
function getLastRowInColumn(colIndex) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var maxRows = sheet.getMaxRows();
  var values = sheet.getRange(1, colIndex, maxRows, 1).getValues();

  for (var row = values.length - 1; row >= 0; row--) {
    if (values[row][0] !== '') {
      return row + 1;  // convert 0-based index to 1-based row
    }
  }
  return 0;
}
