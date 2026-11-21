# Two Bassmans and Pano Verb

November 21, 2026. Owner explicitly authorized these three construction models
and hotspots, with no generated images. Starts from current public main
`f4aa2cc`, preserving the latest copy pass on the preceding vintage trio. The
original workspace's uncommitted homepage work is untouched; implementation is
in detached worktree `/private/tmp/fender-bassman-pano`, for a normal main push.

## Selected configurations

| Assembly | Catalog introduction / represented year | Construction | Topics |
| --- | --- | --- | --- |
| `bassman-5f6a` | 1957 grouped 5F6/5F6-A / 1959-style | Four parallel 8 Ω alnico-format tens, GZ34, two 5881 | 9 |
| `bassman-blackface-ab165-1965` | 1964 / 1965-style AB165 | Two 6L6GC, diode supply, closed horizontal 2x12 / 4 Ω | 6 |
| `pano-verb-2024` | 2024 / PR 6273 launch configuration | OUT1: 50 W / 4 Ω fifteen; OUT2: 20 W / 8 Ω ten | 7 |

Totals: 16 assemblies, 109 topics, 68 library records, 208 timeline entries
including 192 WIP. Exactly existing catalog rows 35, 70 and 206 promoted; CSV,
row hashes and source review/confidence fields unchanged. Pano Verb is the short
display alias for the Jack White Pano Verb source row. Its compact 4 / 8 Ω label
is explained as independent outputs in the story, cards, wiring and inspector.

## Shared construction

`dist/library/bassman-pano-profiles.js` is the shared selected-configuration data;
`dist/bassman-pano-features.js` holds builder factual first drafts. New profiles
consume the existing combo factory in timeline, detail, inspector and export.
The tweed top chassis has four separate parallel underside jacks, no fictitious
rear strip or reverb tank. AB165 has ordinary twin baffle openings behind its
closed rear, with no Showman tone ring. Pano uses two speaker records, different
hole diameters, separate output leads and explicit per-output load metadata.
There is no combined Pano load in the assembly catalog or export.

New reusable study parts: four speaker formats (tweed alnico ten, Bassman ceramic
twelve, Pano C15N-format ceramic fifteen and P10R-format alnico ten), three panel
layouts/proofs, metal radio knob, yellow jewel, yellow flat badge and rectangular
Bassman nameplate. Speaker power ratings remain unknown rather than borrowing
amplifier ratings. The Pano fifteen does not reuse the Lansing cast frame.
Existing component geometry, media and accepted marker behavior are preserved.
The piggyback cable now derives its endpoint from the shared speaker-jack
coordinates; this also shifts the prior Showman estimate by about 0.2 mm.

## Evidence and estimates

Existing briefs carry appended November 21 checks, distinct from original
November 20 research. Both pages of 5F6-A I-EG and AB165 D-FE were rendered at
1900 px and visually read. Pano PR 6273 manual English pages 1–2 were read at
1700 px. Selected vintage front/top photographs and Fender's Pano rear photo
were inspected at full size for geometry. No unlicensed photo pixels saved in
the repository; only source links and our own review screenshots.

Q22 remains: AB165 cabinet's secondary 21-inch height conflicts with a reader's
20-inch correction. Tweed width uses a 23-inch estimate amid conflicting
specimen measurements. New Q29 records 5F6-A inverter label discrepancy: layout
12AX7, companion schematic appears 12AY7. The model follows the layout. Q23's
missing-assembly block is resolved for 5F6-A; Vibroverb's block remains.

Pano manual resolves the previously unassigned 4/8 Ω outputs and confirms Split
reverb goes to the ten alone. It does not establish internal rectifier or
modulation topology, detailed tube order, or which output pair connects to which
socket positions. Those are not invented. The old brief's supposed speaker-image
URL is actually a product tag/top view; a verified Fender rear photograph
supersedes it. Radio knob, basket/motor, tank, transformer and socket dimensions
remain educational estimates. Passing tests is not historical or photoreal
acceptance; no audio, sag, response, distortion or acoustic tuning was measured.

## Validation

All six `npm test` scripts pass with materialized LFS data. New checks cover
independent output loads, distinct frame clearances, selected tube/control
counts, split cabinet envelope, shared hardware anchors, 208 mappings and panel
proofs. Existing Blender baseline and vector panel proofs pass.

At 1440×1000 and 390×844, all 22 new cards opened, notes/sources expanded, Escape
closed them, and filters showed 16 Active / 208 All. Existing 5E3, Princeton and
Prosonic card regressions passed. Browser reported no errors. Front/rear and
component views inspected. All three GLBs exported in metres with 9/6/7 anchors,
finite attributes and bounds matching body envelopes plus external hardware.
The closed AB165 speaker marker stays menu-only. Pano GLB preserves `[4,8]`
output-load metadata. Final exports after jack-lead alignment passed again. Own rendered review images are in [images/bassman-pano](images/bassman-pano/), tracked through LFS.

Copy role can now refine the 22 new factual drafts and three stories on current
main. Preserve circuit values, per-output loads, source distinctions and Q29.
Continue targeted evidence work on the dimensional conflicts. Image generation
and realism remain deferred.

## Release

Local validation complete; production release and live verification pending.
