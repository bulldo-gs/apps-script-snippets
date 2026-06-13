// Send an email with an attachment in Gmail.
// Walkthrough: https://bulldo.gs/send-an-email-with-an-attachment-in-gmail/
// Send a Drive file as an email attachment
// Replace FILE_ID with your Google Drive file ID
function sendWithAttachment() {
  var fileId = 'FILE_ID';
  var file = DriveApp.getFileById(fileId);
  var blob = file.getBlob();

  var recipient = 'someone@example.com';
  var subject = 'Your requested file';
  var body = 'Please find the attached file. Let me know if you have questions.';

  GmailApp.sendEmail(recipient, subject, body, {
    attachments: [blob],
    name: 'Your Name'
  });

  Logger.log('Email sent with attachment: ' + file.getName());
}
