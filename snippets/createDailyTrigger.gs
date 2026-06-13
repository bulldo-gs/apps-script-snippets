// Run a script every day at a set time.
// Walkthrough: https://bulldo.gs/run-a-script-every-day-at-a-set-time-apps-script/
// Run myDailyJob at 8 AM every day (script timezone).
// Call createDailyTrigger() once from the editor — never from a trigger.
function createDailyTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'myDailyJob') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  ScriptApp.newTrigger('myDailyJob')
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();
}

function myDailyJob() {
  Logger.log('Running daily job at: ' + new Date());
}
