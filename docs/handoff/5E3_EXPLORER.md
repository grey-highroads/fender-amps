# 5E3 explorer 1.0

November 20, 2026. User authorized the tweed Deluxe explorer while the separate
research agent finishes Princeton research. No Princeton entry or research-branch
merge is included. Research consulted at `origin/codex/amp-expansion-research`
commit `3d9c2ab`; runtime remains mapped to catalog row 24 (1955 introduction,
1957-style specimen). Catalog values and all 22 timeline entries are unchanged.

## Result

Nine musician-focused cards: interacting volumes, Tone, inputs/bridging, 12AY7,
12AX7 cathodyne, cathode-biased 6V6 pair, 5Y3 supply, transformer/bass and reconed
P12R. Live route: https://fendertubeamps.com/?amp=deluxe-1957

`dist/tweed-features.js` supplies the copy. `dist/explore.js` now accepts top-facing
markers, with a top-panel menu group. Selecting one moves the existing camera;
selecting a rear part from that elevated angle returns toward the rear. There
are no separate cabinet/inside modes. Hardware and marker centers share
`TWEED_PANEL` in `identification-profile.js`. The same `createAmpModel` builds the
library, timeline and detail model, including five distinct tube envelopes.

## Evidence actually inspected this task

- Both pages of Fender's Deluxe Model 5E3 F-EE schematic/layout, rendered locally
  and visually read:
  https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-5E3-Schematic.pdf
  Establishes 12AY7, 12AX7, two 6V6GTs and 5Y3GT; rear socket order; 820 Ω input
  cathode resistor; 56 kΩ cathodyne loads; 250 Ω / 5 W output cathode resistor;
  25 µF bypasses; three 16 µF supply caps; 500 pF / 5 nF tone caps. No numerical
  supply voltage or transformer primary impedance is assigned. No global output
  feedback is drawn; this is not a claim of no local feedback or class A.
- Baxter front, rear, top and panel photographs visually opened, including rear
  gallery image 6 and panel image 10. Dealer record:
  https://www.andybaxterbass.com/products/1956-fender-deluxe
  Page identifies a 1957 specimen despite its URL. P12R 220633 is reconed;
  replacement handle and service history qualify the specimen. The existing
  cabinet is not rebuilt as a scan of it. Dealer photos stay outside Git.
- Commons file page, license and full image visually inspected:
  https://commons.wikimedia.org/wiki/File:Tweed_deluxe.jpg
  Nimasu, CC BY-SA 4.0. Original image bytes committed unmodified with visible
  attribution and license link. Modern orange capacitors are visible, and the
  page also describes a handmade amp. Captions explicitly withhold year,
  circuit and vintage-originality claims. This is representative construction,
  not the Baxter amp or an authenticated original Fender.

The tone copy offers listening comparisons, not measured clipping, sag or
transformer response. No absolute “all distortion is power tubes” claim, modern
speaker wattage substitution, fixed transformer impedance or saturation setting.

## Validation performed in this task

- All five `npm test` scripts pass. Library check now covers all nine cards,
  unique IDs, top/rear grouping and photograph provenance/file availability.
- JavaScript syntax and `git diff --check` pass.
- In-app browser: all nine menu choices opened the intended card; Escape closed
  only the card and restored focus to the menu. Top controls, rear tubes and
  speaker viewed; representative photo loaded at 3264 px with caption/credit.
- 390 × 844 phone review: card readable, menu available, document width 390 px
  with no horizontal overflow. Card scrolls; lower content requires scrolling.
- Twin reverb and blackface Deluxe bright-cap cards opened correctly. Champ
  displayed without an explorer menu. No browser errors in the checked 5E3 tab.
- Shared inspector front/rear/angle controls and GLB export exercised. Actual
  downloaded `deluxe-5e3.glb`: 4,995,412 bytes, 123 meshes, five named tube nodes
  (5Y3GT, two 6V6GT, 12AX7, 12AY7), all nine unique anchor IDs, metre metadata,
  finite accessor min/max. Download is a local QA artifact, not committed.
- Our own screenshots in `images/5e3-explorer/` are Git LFS assets. Lighting and
  scale unchanged; the new top-control camera and existing selected-card zoom
  change the presentation. These are UX evidence, not matched visual-fidelity
  comparisons or evidence of historical authentication.

## Remaining uncertainty and next work

Cabinet dimensions remain a modern reissue proxy. Rear-panel construction,
chassis recess, exact socket spacing, glass envelopes, transformer size/mounting,
and speaker basket remain estimates. The visible transformer is a conceptual
marker, explicitly labeled in its card; its position is not authenticated.
The existing rear panel is much simpler than the specimen's slotted panel.
No circuit audio simulation or measured tone response is provided. Model tests
establish structural consistency, not historical or photographic accuracy.

Next useful work: validate the Princeton evidence before building that explorer;
use measured vintage chassis/cabinet evidence for a later construction pass.
