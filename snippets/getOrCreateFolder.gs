// Create a Drive folder only if it doesn't exist.
// Walkthrough: https://bulldo.gs/create-a-folder-if-it-does-not-exist-in-google-drive/
// Returns an existing folder by name, or creates it if absent.
// Safe to call on every run — never produces duplicates.
function getOrCreateFolder(folderName) {
  var matches = DriveApp.getFoldersByName(folderName);
  if (matches.hasNext()) {
    return matches.next();
  }
  return DriveApp.createFolder(folderName);
}

// Example: get or create "Monthly Reports" in the root
function main() {
  var folder = getOrCreateFolder('Monthly Reports');
  Logger.log('Folder ID: ' + folder.getId());
}
