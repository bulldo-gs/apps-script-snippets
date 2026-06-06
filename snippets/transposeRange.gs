// Transpose a range (rows <-> cols) in Google Sheets.
// Pads jagged rows so setValues never throws "incorrect range width".
// Walkthrough: https://bulldo.gs/transpose-a-range-in-google-sheets/
// Reads A1:C4, transposes rows<->cols, writes to E1
function transposeRange() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var source = sheet.getRange('A1:C4').getValues();

  // Pad rows so every row is the same length before transposing
  var colCount = source.reduce(function(max, row) {
    return Math.max(max, row.length);
  }, 0);
  var padded = source.map(function(row) {
    while (row.length < colCount) row.push('');
    return row;
  });

  // Build transposed array: [row][col] becomes [col][row]
  var transposed = padded[0].map(function(_, c) {
    return padded.map(function(row) { return row[c]; });
  });

  var dest = sheet.getRange(1, 5, transposed.length, transposed[0].length);
  dest.setValues(transposed);
}
