## Active / All filter — November 20, 2026

The timeline now opens with Show active: all ten current modeled construction
studies. Show all reveals all 208 entries, including 198 gray WIP placeholders.
The pressed buttons and live count state the current selection. No preference
is saved: a fresh load defaults to Active. Existing amp review links still work.

Filtering hides empty year groups, recalculates shared-year counts and markers,
and disables decades with no entries in that view. It retains the nearest year
when changing views. Hidden cards do not participate in navigation or rendering.
Catalog mappings and all assembly/model data remain unchanged.

Validation in this task: npm test passed all five checks. Browser review verified
10/208 card counts, switching both ways, 2020s navigation in All, Active after
reload, desktop and 390 × 844 layout, and no console errors. Local review image:
`outputs/timeline-toggle-review.jpg`. Historical evidence limits below apply.

Current update: the [second construction batch](THREE_COMBOS.md) brings the timeline
to ten models / 198 WIP entries, still 208 total. The record below describes
the preceding full-catalog rollout.

# Full catalog timeline — November 20, 2026

The user authorized showing the entire spreadsheet collection with generic gray
WIP amps. Timeline revision 1.0 now has one entry for each of the 208 pinned
catalog rows: seven existing shared construction studies in color and 201 gray
placeholders. This authorizes catalog visibility, not additional modeled assemblies.

`dist/catalog-timeline.js` retains spreadsheet-only entry data and all source
fields verbatim from the pinned CSV. Blank fields display “Not recorded.” WIP
notes show the description, format, approximate output/load, era, version notes,
review status and specification link. No new historical or sonic claims were
researched or inferred. Pricing is retained in source records but not displayed.
The common silhouette is a CSS illustration with no cabinet dimensions, logo,
component layout or claim of factory configuration. It consumes no 3D resources.

The seven authored entries preserve their selected-year context and reviewed
mapping differences, including the 85 W 1968 Twin versus its grouped catalog row.
The previous sixteen representative studies now use their source rows and gray
placeholders; a modern reissue no longer borrows a vintage assembly implicitly.
The Bassman grouped row appears at its spreadsheet introduction (1957); it is
not represented as a specifically verified 1958 5F6-A assembly.

All 208 rows have explicit identities/hashes in `data/catalog/timeline-map.json`.
Checks require complete, unique catalog coverage and verbatim WIP source fields.
When refreshing the snapshot, reconcile these records and the seven assembly
mappings deliberately. The catalog does not synchronize live.

Current-task validation: all five npm checks passed, including materialized GLB.
Browser review confirmed gray silhouettes, catalog-only notes and the colored
5E3 model/explorer. These checks do not authenticate historical specifications
or establish photorealism. Phone layout and publication are recorded below.

Next useful action: expand Princeton hotspot research on its existing shared
assembly. Additional 3D studies still follow the reviewed-batch process.

Browser review also passed at 390 × 844: two entries remain readable, the WIP
notes scroll within their dialog, and closing restores timeline focus. Desktop
review shows the 5E3 and Tremolux in color beside gray placeholders. No browser
console errors were captured. Screenshot: `outputs/full-timeline-review.jpg`
(local review artifact, not a redistributed reference photo).

The user explicitly approved committing and pushing to `main` on November 20,
2026. Publication verification follows the existing GitHub auto-deployment workflow.
The original private Sites prototype remains unchanged.
