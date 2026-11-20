# Authoritative catalog snapshot

The user designated the [corrected workbook](https://docs.google.com/spreadsheets/d/18bzOLj0RdEdjSneLXf9USwPAM5Zs7IRoAFwKpWmkBJw/edit)
as the catalog source of truth on November 20, 2026. It supersedes the previous
spreadsheet identified in `source.json`. GitHub remains the canonical code and
project-record repository; the corrected workbook governs catalog data.

All three populated tabs are preserved as formatted values in JSON and CSV:

| Tab | Snapshot | Data rows | Columns |
| --- | --- | ---: | ---: |
| Tube amp catalog | `catalog.json`, `catalog.csv` | 208 | 22 |
| Changes | `changes.json`, `changes.csv` | 58 | 6 |
| Scope and sources | `scope-and-sources.json`, `scope-and-sources.csv` | 36 | 2 |

`source.json` records the source identity, modification/retrieval times, bounded
read ranges, superseded sheet identity and SHA-256 file hashes. The snapshots
retain cell text, source URLs, review notes and confidence fields. CSV rows are
padded to the header width; JSON retains the returned cell arrays. These are
value snapshots, not an archive of formulas, formatting or revision history.

The workbook's scope and evidence qualifications travel with the catalog.
Prices are estimates with differing evidence and confidence; rarity is
qualitative. A row marked reviewed but not source-checked has not become a
verified historical specification by being copied here. Source review dates
remain distinct from the snapshot retrieval date.

There is no live synchronization. Refresh by reading the same workbook's tab
metadata and bounded populated ranges, exporting all three tabs, checking counts
and headers, updating hashes and retrieval metadata, and recording changes in the
handoff. Do not collapse blanks into zero or strip production-status, load-type,
price-confidence, review-status or review-note columns.

The app still uses a separately authored 19-entry selection. This records update
does not import the whole catalog, change geometry or reconcile every runtime
specification. See [reconciliation notes](../../docs/handoff/CATALOG_RECONCILIATION.md)
before applying grouped catalog entries to selected-year assemblies.

## Runtime reconciliation

[TIMELINE_MAPPING.md](TIMELINE_MAPPING.md) maps all 19 selected timeline entries
to logical CSV rows and explains differences. `timeline-map.json` pins exact
row names/hashes, the snapshot hash, runtime comparison fields and review notes.
`npm test` validates this mapping. Update it deliberately when the catalog or
runtime specifications change; do not change a hash merely to bypass a failure.
No runtime specifications were altered during the first mapping pass.
