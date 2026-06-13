// List all files in a folder.
// Walkthrough: https://bulldo.gs/list-all-files-in-a-folder-in-google-drive/
// List every file in a folder, recursing into subfolders
function listAllFiles(folderId) {
  var folder = DriveApp.getFolderById(folderId);
  var results = [];
  collectFiles(folder, results);
  Logger.log(results.join('\n'));
}

function collectFiles(folder, results) {
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    results.push(file.getName() + ' — ' + file.getId());
  }
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    collectFiles(subfolders.next(), results);
  }
}
