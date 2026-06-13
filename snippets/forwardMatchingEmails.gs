// Forward matching emails automatically in Gmail.
// Walkthrough: https://bulldo.gs/forward-emails-automatically-in-gmail/
// Forward emails matching QUERY to FORWARD_TO every N minutes.
// Applies a label after forwarding so the thread is excluded next run.
const QUERY = 'from:invoices@supplier.com is:unread';
const FORWARD_TO = 'finance@yourcompany.com';
const DONE_LABEL = 'auto-forwarded';

function forwardMatchingEmails() {
  const label = getOrCreateLabel(DONE_LABEL);
  const threads = GmailApp.search(QUERY + ' -label:' + DONE_LABEL);
  for (const thread of threads) {
    const messages = thread.getMessages();
    for (const msg of messages) {
      GmailApp.sendEmail(FORWARD_TO, msg.getSubject(), msg.getPlainBody());
    }
    thread.addLabel(label);
  }
}

function getOrCreateLabel(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}
