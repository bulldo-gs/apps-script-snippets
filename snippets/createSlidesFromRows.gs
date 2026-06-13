// Create a slide for each row.
// Walkthrough: https://bulldo.gs/create-a-slide-for-each-row-in-google-slides/
// Duplicate template slide once per row, swap {{placeholders}}, delete template
function createSlidesFromRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');
  var rows = sheet.getDataRange().getValues();
  var headers = rows[0];
  var pres = SlidesApp.openById('YOUR_PRESENTATION_ID');
  var slides = pres.getSlides();
  var template = slides[0]; // first slide is the template

  for (var i = 1; i < rows.length; i++) {
    var dupe = template.duplicate();
    for (var j = 0; j < headers.length; j++) {
      var tag = '{{' + headers[j] + '}}';
      dupe.replaceAllText(tag, String(rows[i][j]));
    }
  }

  template.remove(); // clean up the template slide
}
