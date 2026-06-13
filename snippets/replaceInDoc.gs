// Find and replace text in a Google Doc.
// Walkthrough: https://bulldo.gs/find-and-replace-text-in-a-google-doc-in-google-docs/
// Replace text in the active Google Doc
// Note: first arg to replaceText is a regex pattern — escape special chars
function replaceInDoc() {
  var body = DocumentApp.getActiveDocument().getBody();

  // Safe: plain alphanumeric strings need no escaping
  body.replaceText('Hello World', 'Hi There');

  // Unsafe example: 'v1.0' matches 'v100' because . is regex wildcard
  // body.replaceText('v1.0', 'v2.0'); // DON'T do this

  // Correct: escape the dot with a double backslash
  body.replaceText('v1\.0', 'v2.0');

  // Replace a bracketed placeholder like [NAME]
  body.replaceText('\[NAME\]', 'Jordan');

  // Replace a dollar-sign token like $TOTAL
  body.replaceText('\$TOTAL', '1,240.00');
}
