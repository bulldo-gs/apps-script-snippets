// Save Gmail attachments to a Drive folder in Gmail.
// Walkthrough: https://bulldo.gs/save-gmail-attachments-to-drive-in-gmail/
// saveAttachments.gs — run on a time trigger or manually
// Saves qualifying Gmail attachments to a named Drive folder.
function saveAttachmentsToDrive() {
  var folderName = 'Gmail Attachments';
  var searchQuery = 'has:attachment newer_than:1d';

  var folders = DriveApp.getFoldersByName(folderName);
  var folder = folders.hasNext()
    ? folders.next()
    : DriveApp.createFolder(folderName);

  var threads = GmailApp.search(searchQuery);
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var attachments = messages[j].getAttachments();
      for (var k = 0; k < attachments.length; k++) {
        var att = attachments[k];
        var ct = att.getContentType();
        if (ct === 'application/ics') continue;
        if (ct.indexOf('image/') === 0 && att.getSize() < 20000) continue;
        folder.createFile(att);
      }
    }
  }
}
