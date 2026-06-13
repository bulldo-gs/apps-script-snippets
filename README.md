# apps-script-snippets

Copy-paste [Google Apps Script](https://developers.google.com/apps-script) snippets for
everyday Google Sheets and Workspace automation — transposing ranges, splitting names,
syncing calendars, and more. Each snippet is small, dependency-free, and ready to drop
into the Apps Script editor (**Extensions → Apps Script**).

Maintained by **[bulldo.gs](https://bulldo.gs)** — tools that gnaw through Google
Workspace busywork.

## Snippets

30 copy-paste snippets across Google Sheets, Gmail, Drive, Docs,
Calendar, Forms, and Slides.

### Sheets

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`transposeRange.gs`](snippets/transposeRange.gs) | Transpose a range (rows ↔ cols), padding jagged rows so `setValues` never throws | [Guide](https://bulldo.gs/transpose-a-range-in-google-sheets/) |
| [`sumByMatchingValue.gs`](snippets/sumByMatchingValue.gs) | Sum a column where another column matches a key | [Guide](https://bulldo.gs/sum-a-column-by-a-matching-value-in-google-sheets/) |
| [`splitFullName.gs`](snippets/splitFullName.gs) | Split a full name into first / last across columns | [Guide](https://bulldo.gs/split-a-full-name-into-first-and-last-in-google-sheets/) |
| [`sortByMultipleColumns.gs`](snippets/sortByMultipleColumns.gs) | Sort a sheet by multiple columns (multi-key) | [Guide](https://bulldo.gs/sort-a-sheet-by-multiple-columns-in-google-sheets/) |
| [`highlightDuplicateValues.gs`](snippets/highlightDuplicateValues.gs) | Highlight every cell whose value appears more than once | [Guide](https://bulldo.gs/highlight-duplicate-values-in-google-sheets/) |
| [`addCheckboxToCell.gs`](snippets/addCheckboxToCell.gs) | Insert checkboxes down a column | [Guide](https://bulldo.gs/add-a-checkbox-to-a-cell-in-google-sheets/) |
| [`removeDuplicateRows.gs`](snippets/removeDuplicateRows.gs) | Remove duplicate rows | [Guide](https://bulldo.gs/remove-duplicate-rows-in-google-sheets/) |
| [`setupHeader.gs`](snippets/setupHeader.gs) | Freeze the header row | [Guide](https://bulldo.gs/freeze-the-header-row-in-google-sheets/) |
| [`deleteEmptyRows.gs`](snippets/deleteEmptyRows.gs) | Delete empty rows | [Guide](https://bulldo.gs/delete-empty-rows-in-google-sheets/) |
| [`getUniqueColumnValues.gs`](snippets/getUniqueColumnValues.gs) | Get unique values from a column | [Guide](https://bulldo.gs/get-unique-values-from-a-column-in-google-sheets/) |
| [`getLastRowInColumn.gs`](snippets/getLastRowInColumn.gs) | Find the last row with data in a column | [Guide](https://bulldo.gs/find-the-last-row-with-data-in-a-column-in-google-sheets/) |
| [`columnToLetter.gs`](snippets/columnToLetter.gs) | Convert a column number to a letter | [Guide](https://bulldo.gs/convert-a-column-number-to-a-letter-in-google-sheets/) |
| [`alternateRowColors.gs`](snippets/alternateRowColors.gs) | Alternate row colors with a script | [Guide](https://bulldo.gs/alternate-row-colors-with-a-script-in-google-sheets/) |
| [`protectSummaryRange.gs`](snippets/protectSummaryRange.gs) | Protect a range from editing | [Guide](https://bulldo.gs/protect-a-range-from-editing-in-google-sheets/) |
| [`autoResizeAllColumns.gs`](snippets/autoResizeAllColumns.gs) | Auto-resize columns to fit text | [Guide](https://bulldo.gs/auto-resize-columns-to-fit-text-in-google-sheets/) |
| [`trimAllCells.gs`](snippets/trimAllCells.gs) | Trim whitespace from every cell | [Guide](https://bulldo.gs/trim-whitespace-from-every-cell-in-google-sheets/) |
| [`importJsonFromApi.gs`](snippets/importJsonFromApi.gs) | Import JSON from an API | [Guide](https://bulldo.gs/import-json-from-an-api-in-google-sheets/) |

### Gmail

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`sendWithAttachment.gs`](snippets/sendWithAttachment.gs) | Send an email with an attachment in Gmail | [Guide](https://bulldo.gs/send-an-email-with-an-attachment-in-gmail/) |
| [`labelBySearch.gs`](snippets/labelBySearch.gs) | Label emails matching a search query in Gmail | [Guide](https://bulldo.gs/label-emails-matching-a-search-in-gmail/) |
| [`saveAttachmentsToDrive.gs`](snippets/saveAttachmentsToDrive.gs) | Save Gmail attachments to a Drive folder in Gmail | [Guide](https://bulldo.gs/save-gmail-attachments-to-drive-in-gmail/) |
| [`forwardMatchingEmails.gs`](snippets/forwardMatchingEmails.gs) | Forward matching emails automatically in Gmail | [Guide](https://bulldo.gs/forward-emails-automatically-in-gmail/) |

### Drive

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`listAllFiles.gs`](snippets/listAllFiles.gs) | List all files in a folder | [Guide](https://bulldo.gs/list-all-files-in-a-folder-in-google-drive/) |
| [`getOrCreateFolder.gs`](snippets/getOrCreateFolder.gs) | Create a Drive folder only if it doesn't exist | [Guide](https://bulldo.gs/create-a-folder-if-it-does-not-exist-in-google-drive/) |

### Docs

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`replaceInDoc.gs`](snippets/replaceInDoc.gs) | Find and replace text in a Google Doc | [Guide](https://bulldo.gs/find-and-replace-text-in-a-google-doc-in-google-docs/) |

### Calendar

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`createCalendarEventFromRow.gs`](snippets/createCalendarEventFromRow.gs) | Turn spreadsheet rows into Google Calendar events (idempotent) | [Guide](https://bulldo.gs/create-a-calendar-event-from-a-spreadsheet-row-in-google-calendar/) |
| [`listTodayEvents.gs`](snippets/listTodayEvents.gs) | List today's calendar events | [Guide](https://bulldo.gs/list-todays-calendar-events-in-google-calendar/) |
| [`createWeeklyStandup.gs`](snippets/createWeeklyStandup.gs) | Create a recurring event | [Guide](https://bulldo.gs/create-a-recurring-event-in-google-calendar/) |

### Forms

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`getPrefillUrl.gs`](snippets/getPrefillUrl.gs) | Build a pre-filled form URL | [Guide](https://bulldo.gs/build-a-prefilled-form-url-in-google-forms/) |

### Slides

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`createSlidesFromRows.gs`](snippets/createSlidesFromRows.gs) | Create a slide for each row | [Guide](https://bulldo.gs/create-a-slide-for-each-row-in-google-slides/) |

### Apps Script

| Script | What it does | Walkthrough |
|--------|--------------|-------------|
| [`createDailyTrigger.gs`](snippets/createDailyTrigger.gs) | Run a script every day at a set time | [Guide](https://bulldo.gs/run-a-script-every-day-at-a-set-time-apps-script/) |

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
