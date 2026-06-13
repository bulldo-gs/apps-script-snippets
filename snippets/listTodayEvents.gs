// List today's calendar events.
// Walkthrough: https://bulldo.gs/list-todays-calendar-events-in-google-calendar/
// List every event on the default calendar for today
// Run manually or attach to a time-driven trigger
function listTodayEvents() {
  var cal = CalendarApp.getDefaultCalendar();

  var start = new Date();
  start.setHours(0, 0, 0, 0);

  var end = new Date(start);
  end.setDate(end.getDate() + 1); // tomorrow at midnight

  var events = cal.getEvents(start, end);

  for (var i = 0; i < events.length; i++) {
    var ev = events[i];
    Logger.log(ev.getTitle() + ' | ' + ev.getStartTime() + ' — ' + ev.getEndTime());
  }

  Logger.log('Total events today: ' + events.length);
}
