// Sum a column where another column matches a key, in Google Sheets.
// Walkthrough: https://bulldo.gs/sum-a-column-by-a-matching-value-in-google-sheets/
function sumByMatchingValue() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var matchKey = 'Widget'; // value to match in the key column
  var keyCol = 1;          // column A (1-based): the value to match on
  var sumCol = 3;          // column C: the numbers to add up

  var rows = sheet.getDataRange().getValues();
  var total = 0;
  for (var i = 1; i < rows.length; i++) { // skip the header row
    if (rows[i][keyCol - 1] === matchKey) {
      total += Number(rows[i][sumCol - 1]) || 0;
    }
  }
  Logger.log(matchKey + ': ' + total);
  return total;
}
