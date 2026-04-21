# 04 Parallel Factory

This project is the parallel-loading variant of the remote factory exercise.

## Goal

- Reuse the same jsonblobs created for 03-remote-factory.
- Keep each car in a separate jsonblob.
- Load all car blobs in parallel.
- Show a loader while requests are running.
- Render detailed car info directly on the page (no collapsible panel).
- Handle request and data errors.

## Data model

The app expects a factory blob with this field:

- `carBlobIds`: array of car jsonblob IDs

Each car blob stores a single car object.

## Configuration

1. Open [scripts/main.js](scripts/main.js).
2. Set `FACTORY_BLOB_ID` to your existing factory blob ID from 03-remote-factory.
3. Make sure that factory blob includes valid `carBlobIds` for your car blobs.

## Run

Use a local web server and open [html/index.html](html/index.html).

Example with VS Code Live Server:

1. Right click [html/index.html](html/index.html).
2. Select "Open with Live Server".

## Error handling included

The app shows an error message when:

- `FACTORY_BLOB_ID` is not configured
- a jsonblob request fails (HTTP errors)
- a blob does not contain valid JSON
- factory JSON does not contain a valid `carBlobIds` array

## Notes

- Car blobs are fetched with `Promise.all`, so all requests start together.
- The cars list is displayed only after all requests complete successfully.
