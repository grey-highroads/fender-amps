# Timeline-to-catalog map

Reviewed November 20, 2026. All 19 runtime entries are mapped below. CSV row numbers include the header; the machine-readable [timeline-map.json](timeline-map.json) also pins the exact catalog name, row hash, source-file hash, runtime comparison fields and decisions. Display names are aliases, not separate catalog models.

This is reconciliation, not a new historical audit. Catalog review/confidence labels retain their original meaning. No runtime specifications were changed. Grouped rows must not overwrite selected-year evidence automatically.

| Timeline entry | CSV row / catalog entry | Differences or selection notes |
| --- | --- | --- |
| 1946 Woodie Deluxe (wood) | 3 — Deluxe / Model 26 (woodie) | Model 26 is the timeline label; early speaker/output variation remains qualified by the catalog. |
| 1949 Champion 600 (cream) | 11 — Champion 600 (original) | Original Champion 600, not the later reissue. |
| 1953 Wide-panel Deluxe (tweed) | 16 — Deluxe (wide panel) | The timeline names two circuit variants within the catalog’s wide-panel group. |
| 1955 Tweed Deluxe (tweed) | 24 — Deluxe (5E3) | 1955 is introduction; the shared assembly uses a 1957-style example and modern reissue dimension proxies. Do not change introduction to the specimen year. |
| 1957 High-power Twin (tweed) | 36 — Twin (5F8 / 5F8-A high power) | Catalog retains 1957 while noting some sources date introduction to 1958. No new introduction-date research is claimed. |
| 1958 Tweed Bassman (tweed) | 35 — Bassman (5F6 / 5F6-A) | Runtime selects the 5F6-A subset of the catalog’s combined 5F6 / 5F6-A group. Keep the year difference explicit pending primary circuit-specific dating. |
| 1961 Brown Princeton (brown) | 45 — Princeton (6G2 brown) | Brown finish selects the usual 6G2 appearance; the catalog warns some late examples have black cosmetics. |
| 1963 Deluxe Reverb (black) | 53 — Deluxe Reverb (black panel) | Introduction 1963; shared explorer is a 1965-style AB763 reference assembled from multiple specimens. Measurements and original configuration remain qualified. |
| 1963 Brown Vibroverb (brown) | 56 — Vibroverb (6G16 brown) | Original 6G16 brown Vibroverb, not its later reissue. |
| 1963 Super Reverb (black) | 60 — Super Reverb (black panel) | Runtime uses vintage 40 W, matching the catalog; do not substitute the modern reissue’s 45 W rating. Interior remains a representative study. |
| 1963 Twin Reverb (black) | 63 — Twin Reverb (black panel) | Black-panel AB763 entry is distinct from the 1968 silver-panel explorer; it does not inherit that explorer. |
| 1968 Twin Reverb (silver) | 78 — Twin Reverb (silver panel, early) | Runtime selects 1968 / 85 W within a broader 1967–1976 row. The row itself explicitly notes early 85 W examples. Preserve selected-year evidence rather than replacing it with the grouped 100 W value. |
| 1977 Ultralinear Twin (silver) | 99 — Twin Reverb (ultralinear) | Ultralinear generation is separate from the early silver-panel Twin; output and dates match this row. |
| 1982 Super Champ (black) | 107 — Super Champ | Rivera-era Super Champ, not the digital-preamp XD/X2 or the separate hardwood Super Champ Deluxe. |
| 1993 Blues Deluxe (tweed) | 124 — Blues Deluxe (original) | Original Blues Deluxe, not the 2005 reissue. |
| 1996 Hot Rod Deluxe (black) | 135 — Hot Rod Deluxe (I–II) | Runtime wording “early generations” denotes the catalog’s combined I–II group; date endpoints agree. |
| 2006 Super-Sonic 60 (cream) | 155 — Super-Sonic 60 | Runtime is the 1x12 / 8 Ω combo subset. Catalog combines head/combo and revisions; the displayed end date is less precise than the catalog’s approximate 2016. |
| 2016 ’57 Custom Deluxe (tweed) | 186 — '57 Custom Deluxe | Modern 2016 Custom Deluxe, not a 1957 introduction. Runtime visually references the tweed family; no vintage circuit/parts identity is implied. |
| 2021 Custom Pro Reverb (silver) | 204 — '68 Custom Pro Reverb | Timeline shortens the model name to Custom Pro Reverb. This is the modern 2021 single-speaker model, not vintage dual-channel 2x12 Pro Reverb. |

## Differences requiring attention

- **5F6-A Bassman:** timeline 1958–1960; CSV row 35 groups 5F6 / 5F6-A from 1957. Circuit-specific introduction remains a scoped dating question.
- **Early silver-panel Twin:** timeline 1968–1976 / 85 W; row 78 groups 1967–1976 / 100 W, with an explicit early-85-W note. Period 1968 Fender evidence supports retaining the selected-year rating. This does not settle every transition date.
- **Super-Sonic 60:** timeline uses “2006–2010s, early series”; row 155 ends approximately 2016. End-date wording is an open reconciliation. The timeline is specifically the 1x12 / 8 Ω combo, while the row includes selectable-load heads.

No other core year/endpoints/output/speaker-count-size/load conflicts were found in the 19-entry comparison. Broader cabinet descriptions and narrower circuit labels are selection scope, documented per entry. Unknown interior layouts, catalog pricing and speculative rarity were not audited.

## Before another explorer

The 5E3 Deluxe and black-panel Super Reverb already map to rows 24 and 60. The proposed Princeton Reverb must receive an explicit mapping when it is added to the runtime; the catalog row alone is not an implemented or verified assembly. `npm test` now fails if the timeline set, mapped runtime fields or catalog snapshot changes without reconciliation.
