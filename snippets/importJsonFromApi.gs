// Import JSON from an API.
// Walkthrough: https://bulldo.gs/import-json-from-an-api-in-google-sheets/
// Fetch JSON from an API and write it to the active sheet
// Adjust API_URL and the field list to match your endpoint
function importJsonFromApi() {
  var API_URL = 'https://jsonplaceholder.typicode.com/users';
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var response = UrlFetchApp.fetch(API_URL);
  var raw = response.getContentText();
  var data = JSON.parse(raw);

  var headers = ['id', 'name', 'username', 'email', 'phone'];
  var rows = data.map(function(obj) {
    return headers.map(function(key) { return obj[key] || ''; });
  });

  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
}
