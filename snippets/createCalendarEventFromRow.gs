// Turn spreadsheet rows into Google Calendar events, in Google Sheets.
// Idempotent: a "created" flag in column D prevents duplicate events on re-run.
// Columns: A=Title, B=Start, C=End, D=Created flag.
// Walkthrough: https://bulldo.gs/create-a-calendar-event-from-a-spreadsheet-row-in-google-calendar/
function createCalendarEventsFromRows() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cal = CalendarApp.getDefaultCalendar();
  var rows = sheet.getDataRange().getValues();

  for (var i = 1; i < rows.length; i++) { // skip header
    var title = rows[i][0], start = rows[i][1], end = rows[i][2], done = rows[i][3];
    if (!title || !start || done) continue; // skip blanks + already-created rows

    cal.createEvent(title, new Date(start), new Date(end || start));
    sheet.getRange(i + 1, 4).setValue('yes'); // mark as created
  }
}
