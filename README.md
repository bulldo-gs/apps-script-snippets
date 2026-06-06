# apps-script-snippets

Copy-paste [Google Apps Script](https://developers.google.com/apps-script) snippets for
everyday Google Sheets and Workspace automation — transposing ranges, splitting names,
syncing calendars, and more. Each snippet is small, dependency-free, and ready to drop
into the Apps Script editor (**Extensions → Apps Script**).

Maintained by **[bulldo.gs](https://bulldo.gs)** — tools that gnaw through Google
Workspace busywork.

## Snippets

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`transposeRange.gs`](snippets/transposeRange.gs) | Transpose a range (rows ↔ cols), padding jagged rows so `setValues` never throws | [Guide](https://bulldo.gs/transpose-a-range-in-google-sheets/) |
| [`sumByMatchingValue.gs`](snippets/sumByMatchingValue.gs) | Sum a column where another column matches a key | [Guide](https://bulldo.gs/sum-a-column-by-a-matching-value-in-google-sheets/) |
| [`splitFullName.gs`](snippets/splitFullName.gs) | Split a full name into first / last across columns | [Guide](https://bulldo.gs/split-a-full-name-into-first-and-last-in-google-sheets/) |
| [`sortByMultipleColumns.gs`](snippets/sortByMultipleColumns.gs) | Sort a sheet by multiple columns (multi-key) | [Guide](https://bulldo.gs/sort-a-sheet-by-multiple-columns-in-google-sheets/) |
| [`highlightDuplicateValues.gs`](snippets/highlightDuplicateValues.gs) | Highlight every cell whose value appears more than once | [Guide](https://bulldo.gs/highlight-duplicate-values-in-google-sheets/) |
| [`addCheckboxToCell.gs`](snippets/addCheckboxToCell.gs) | Insert checkboxes down a column | [Guide](https://bulldo.gs/add-a-checkbox-to-a-cell-in-google-sheets/) |
| [`createCalendarEventFromRow.gs`](snippets/createCalendarEventFromRow.gs) | Turn spreadsheet rows into Google Calendar events (idempotent) | [Guide](https://bulldo.gs/create-a-calendar-event-from-a-spreadsheet-row-in-google-calendar/) |

## How to use

1. Open your Google Sheet → **Extensions → Apps Script**.
2. Paste a snippet into the editor.
3. Adjust the column/range constants at the top of the function to match your sheet.
4. Run it, or attach it to a trigger or custom menu.

Need a custom variant from one sentence? [Gnaw](https://bulldo.gs/gnaw) writes the
Apps Script for you — fields, triggers, and edge cases handled.

## License

[MIT](LICENSE) © bulldo.gs — use freely; attribution appreciated.

## Contributing

Snippets should be small, single-purpose, dependency-free, and documented with a
one-line header comment that links to a walkthrough. PRs welcome.
