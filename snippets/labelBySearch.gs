// Label emails matching a search query in Gmail.
// Walkthrough: https://bulldo.gs/label-emails-matching-a-search-in-gmail/
// labelBySearch.gs
// Applies a label to every thread matching a Gmail search query.
// Run once manually, or attach to a time-driven trigger.

function labelBySearch() {
  var QUERY = 'from:invoices@acme.com is:unread';
  var LABEL_NAME = 'Acme/Invoices';
  var PAGE_SIZE = 100;

  var label = GmailApp.getUserLabelByName(LABEL_NAME)
             || GmailApp.createUserLabel(LABEL_NAME);

  var start = 0;
  var threads;

  do {
    threads = GmailApp.search(QUERY, start, PAGE_SIZE);
    for (var i = 0; i < threads.length; i++) {
      threads[i].addLabel(label);
    }
    start += threads.length;
  } while (threads.length === PAGE_SIZE);
}
