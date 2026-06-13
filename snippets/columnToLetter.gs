// Convert a column number to a letter.
// Walkthrough: https://bulldo.gs/convert-a-column-number-to-a-letter-in-google-sheets/
// Convert a 1-based column index (1, 2, ... 27, 28) into its A1
// letter ('A', 'B', ... 'AA', 'AB'). Handles the base-26 wraparound
// past column Z. Returns '' for non-positive input.
function columnToLetter(column) {
  if (column < 1) return '';
  var letter = '';
  var n = column;
  while (n > 0) {
    var remainder = (n - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    n = Math.floor((n - 1) / 26);
  }
  return letter;
}

// columnToLetter(1)  -> 'A'
// columnToLetter(26) -> 'Z'
// columnToLetter(27) -> 'AA'
// columnToLetter(28) -> 'AB'
