// Protect a range from editing.
// Walkthrough: https://bulldo.gs/protect-a-range-from-editing-in-google-sheets/
// Lock B2:D10 so only the script owner can edit it.
// Without removeEditors(), the protection is created but ignored.
function protectSummaryRange() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Summary');
  var range = sheet.getRange('B2:D10');

  var protection = range.protect();
  protection.setDescription('Summary inputs — do not edit');

  // Remove everyone currently listed as an editor.
  var editors = protection.getEditors();
  if (editors.length > 0) {
    protection.removeEditors(editors);
  }

  // Re-add only the owner (the account running this script).
  var owner = SpreadsheetApp.getActiveSpreadsheet().getOwner();
  protection.addEditor(owner);
}
