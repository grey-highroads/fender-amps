# Super Reverb, early Vibrasonic and blonde Showman

November 21, 2026. Owner authorized this three-amp batch after the modeling-order
recommendation. Built from public main `67e058d`, including the current copy
passes and branding. No generated images added; existing images unchanged.

## Selected configurations

| Assembly | Timeline / selected year | Construction | Topics |
| --- | --- | --- | --- |
| `super-reverb-ab763` | 1963 / 1965-style AB763 | 40 W, four nominal 8 Ω tens in parallel, GZ34, two 6L6GC | 9 |
| `vibrasonic-5g13-1960` | 1959 / 1960-style 5G13 | 40 W catalog rating, single fifteen, two 6L6GC and five 7025, diode supply | 6 |
| `showman-blonde-1961` | 1960 / 1961-style 6G14-A | 85 W catalog rating, four 5881, diode supply, separate single-fifteen tone-ring cabinet | 7 |

Total: thirteen assemblies, 87 topics, 57 library records, 208 timeline entries
including 195 WIP. Promoted existing CSV rows 60/38/44; unchanged row hashes and
catalog snapshot. Introductions remain distinct from represented specimen years.

## Shared construction

`dist/library/vintage-profiles.js` contains selected-year configurations and
source records. The existing combo factory consumes them in timeline, detail,
component inspector and GLB exports. `vintage-amp-features.js` contains plain
builder factual drafts, ready for the copy role. Existing card wording unchanged.

New reusable formats: cast-frame fifteen with aluminum dome, ivory barrel knob,
flat script badge, blonde/pink-brown vinyl and oxblood cloth; three new vector
panel layouts/proofs. These are educational geometry, color and lettering
estimates. The shared fifteen does not assert an authenticated D130F/D140F or
vintage power rating. Existing 1–10 skirted knob is reused by Super Reverb.

The Showman has independent head and cabinet walls, a closed rear board,
estimated inner ring/supports and annular baffle opening, hold-downs, legs and
speaker cable. Its internal speaker is a menu-only topic. Diode and feedback
networks also stay menu-only; no exterior marker claims to expose hidden parts.
No rear board removal, exploded state or second construction mode was added.

## Historical evidence and limits

The existing briefs contain current-task checks, separate from November 20
research. Both pages of Fender 5G13 A-FJ and Showman 6G14-A K-FJ were rendered
and read at 2000 px. The early Vibrasonic really has seven bottles; later catalog
literature lists eight. The early drawing has no extension-speaker jack.
Selected-year front photographs were opened at 800 px for cosmetic details only.
No third-party photo pixels were copied or committed.

Fender's 1962–63 catalog, PDF page 4, confirms a fifteen-inch Lansing Showman
format, cabinet size, tube complement and tilt-back/top-mounting construction.
It names D-130 for the later Vibrasonic but no Showman model suffix. This later
catalog is not automatic proof of every 1960/61 factory detail.

Q28 remains open: later catalog head depth 11½ inches conflicts with Showman's
selected 9-inch secondary estimate; later Vibrasonic width 26 inches conflicts
with early 25-inch secondary estimate. Exact selected-year measurements needed.
The Super Reverb primary layout remains missing (Q17). All socket, transformer,
tone-ring, leg pivot and fastener positions are estimates. No acoustic tuning,
response, distortion, sag or power has been measured. Passing checks and review
do not establish historical accuracy or photoreal acceptance.

## Validation and release

`npm test` passes all six scripts with materialized LFS assets. Checks include
selected-year tube/control counts, early rear-jack distinction, speaker/knob
clearances, loads, 208 row mappings, unique library IDs, every topic/anchor,
menu-only scope, and vector panel proofs. The Blender baseline remains intact.

Desktop 1440×1000 and phone 390×844: all 22 new cards opened, expanded notes and
sources, Escape close, three original/previous profiles, 13 Active / 208 All.
Front/rear screenshots reviewed. All three inspectors and GLB exports passed: 9/6/7 anchors, metre metadata, finite geometry and physical bounds within each documented envelope plus external hardware. No browser errors. The Showman driver stays menu-only behind its closed rear.

Own rendered review images are in [images/vintage-trio](images/vintage-trio/), under LFS. Export review found and fixed a missing hidden-chassis anchor; component review also corrected the inspector’s hard-coded 12-inch label to the actual nominal diameter. Existing combo baffle cutouts retain their previous sizes.

Next: record production verification, then the copy role can refine the new factual drafts. Dimensional questions need targeted evidence,
not another broad research pass. Image realism remains deferred.
