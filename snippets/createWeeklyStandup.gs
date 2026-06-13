// Create a recurring event.
// Walkthrough: https://bulldo.gs/create-a-recurring-event-in-google-calendar/
// Creates a weekly standup series every Monday, ending after 12 occurrences.
// Run once from the Apps Script editor; no trigger needed.
function createWeeklyStandup() {
  var cal = CalendarApp.getDefaultCalendar();

  var recurrence = CalendarApp.newRecurrence()
    .addWeeklyRule()
    .onlyOnWeekday(CalendarApp.Weekday.MONDAY)
    .times(12);

  var start = new Date('2026-06-16T09:00:00');
  var end   = new Date('2026-06-16T09:30:00');

  var series = cal.createEventSeries(
    'Weekly Standup',
    start,
    end,
    recurrence
  );

  Logger.log('Series created: ' + series.getId());
}
