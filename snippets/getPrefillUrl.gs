// Build a pre-filled form URL.
// Walkthrough: https://bulldo.gs/build-a-prefilled-form-url-in-google-forms/
// Returns a pre-filled form URL for a given name and email.
// Run getPrefillUrl() and check the Apps Script log.
function getPrefillUrl() {
  var form = FormApp.openById('YOUR_FORM_ID');
  var items = form.getItems();
  var response = form.createResponse();

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var title = item.getTitle();

    if (title === 'Full name') {
      response.withItemResponse(
        item.asTextItem().createResponse('Jane Doe')
      );
    } else if (title === 'Email address') {
      response.withItemResponse(
        item.asTextItem().createResponse('jane@example.com')
      );
    }
  }

  Logger.log(response.toPrefilledUrl());
}
