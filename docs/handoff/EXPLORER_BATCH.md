# Princeton, brown Deluxe and Champ explorers · November 20, 2026

Built on isolated `codex/explorer-batch` from main `0c0d6ad`. Fetch confirmed main,
research `0cfe2db` and copy `6c9b62c` were unchanged from the request. Research
README, QUESTIONS, three amp briefs, Princeton modeling and small-amp packets
were read through Git; its older runtime was not merged.

## Result and scope

Six explorers now share the existing assembled-model interface: 44 topics total,
including **seven AA1164 Princeton, six 6G3 brown Deluxe and five 5F1 Champ**.
Ten modeled amps / 198 gray WIP / 208 mapped catalog rows remain unchanged.
No cabinet dimensions, panel hardware, speaker configuration, tube specification
or typography was changed. Anchors belong to the same shared model used by the
timeline, detail, inspector and actual GLB exporter.

The image rail now mounts amp-specific records rather than Princeton name checks.
All three have front/rear whole-amp **Generated illustration** assets. Modal
captions distinguish these from historical photographs and model exports.
The model-left/story-right desktop arrangement and phone thumbnail rail remain.

## Topics and anchors

All coordinates are **modeling estimates**, not measured socket/service positions.
Knob indices below are zero-based entries in `SMALL_PANELS`; anchors consume those
same coordinates. Tube indices refer to each existing shared `tubeKinds` list.
Speaker points sit just behind the rendered motor surface, rather than inside it.
Ray tests still hide points behind cabinet parts and on the far side. A tube
marker may legitimately remain hidden behind the upper panel. Every topic is
available through the menu. Hidden circuits have no floating visible marker.

| Amp / topic ID | Anchor and viewing side | Evidence basis |
| --- | --- | --- |
| Princeton `tone` | Treble knob 1, front | AA1164 passive tone network; doubtful fixed-mid value omitted |
| Princeton `reverb` | Reverb knob 3, front | AA1164 transformer driver, recovery and dry/wet mix |
| Princeton `tremolo` | Intensity knob 5, front | AA1164 output-grid bias modulation |
| Princeton `inverter` | Tube 3 / chassis area, rear, **menu only** | AA1164 one-triode cathodyne; not a visible resistor |
| Princeton `power` | Output tube 1, rear | AA1164 output wiring and 2.7 kΩ feedback return |
| Princeton `supply` | Rectifier tube 0, rear | AA1164 5U4GB and resistor filtering; early chart dispute retained |
| Princeton `speaker` | Shared ten-inch motor surface, rear | Cabinet/replacement history and separately reported Oxford example |
| Brown `channels` | Normal Tone knob 1, front | 6G3 separate control networks and mixing resistors |
| Brown `tremolo` | Intensity knob 5, front | 6G3 bias feed after channel mixing, affecting both channels |
| Brown `inverter` | Tube 3 / chassis area, rear, **menu only** | 6G3 long-tail inverter topology |
| Brown `power` | Output tube 1, rear | 6G3 fixed bias and 56 kΩ output feedback |
| Brown `rectifier` | Rectifier tube 0, rear | 6G3 GZ34 designation |
| Brown `speaker` | Shared twelve-inch motor surface, rear | D02985 dealer replacement account and opened rear photo |
| Champ `volume` | Volume knob 0, top | 5F1 first stage before Volume; no separate tone stack |
| Champ `feedback` | Internal chassis area, rear, **menu only** | 5F1 22 kΩ speaker-output return to second triode cathode |
| Champ `power` | Output tube 1, rear | 5F1 single-ended, cathode-biased 6V6, no phase inverter |
| Champ `rectifier` | Rectifier tube 0, rear | 5F1 5Y3GT, 16/8/8 µF resistor-filtered supply |
| Champ `speaker` | Shared eight-inch motor surface, rear | C-12147 cabinet/speaker history, eight-inch catalog scope |

`dist/library/explorer-anchors.js` is the machine-readable target map.
`dist/small-amp-features.js` holds copy and source links. Every card discloses
its anchor/visibility limit. The hidden inverter tube indices identify estimated
assembly locations, not an authenticated rear socket order for the brown amp.

## Evidence inspected during this task

The following period Fender scans were downloaded privately, rendered and opened:

- [5F1 K-EE](https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Champ-5F1-Schematic.pdf)
- [6G3 I-FA](https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf)
- [AA1164 K-FD](https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf)

The drawings support the circuit descriptions and published values. Consequences
for drive, bias, feedback and supply response are labeled in the copy as circuit
interpretation; no listening test, electrical measurements or complete specimen
audit was performed. No universal ten-inch breakup, no-choke softness, or single
stage explanation of distortion was imported from research drafts.

6G3's bias-modulated tremolo acts on **both** channels on the drawing. This corrects
the Music Emporium description's Bright-channel-only statement without treating
that dealer description as circuit authority. AA1164's 5U4GB remains the modeled
specification; researcher-reported early AA764/GZ34 chart evidence is unresolved.

Opened actual reference photographs at full available local resolution:

- [Music Emporium D02985](https://themusicemporium.com/products/fender-6g3-deluxe-1962):
  front `AMP26002-1.jpg`, rear `AMP26002-12.jpg`. The pictured pale Oxford and
  separately described fitted Mojotone remain distinct specimen records.
- [RetroFret C-12147](https://retrofret.com/products/fender-champ-amp-5f1-tube-amplifier-1959-8054):
  front, rear, angle, chart and top panel, local `champ-01` through `champ-05`.
  Chart rear order is 5Y3GT / 6V6GT / 12AX7. Missing speaker label, replacement
  handle/power tube, service work and depth disagreement remain qualified.
- [RetroFret A-03894](https://retrofret.com/products/fender-princeton-reverb-tube-amplifier-1965-9339):
  full front/rear. Replacement Weber bell, tank, tubes/filter can are not factory
  evidence. Images use cabinet form and a generic ceramic ten, not that Weber.

No third-party photos, local downloads, credential material or generated wiring
were embedded as historical evidence.

## Editorial integration

Selectively retained the copy branch's Twin and Deluxe Reverb rewrites in
`twin-features.js`, `twin-tone.js`, `deluxe-features.js`. Their source records,
attributes, photos and anchors stay intact. Softened the input title to avoid
promising cleanup for every operating condition. The 5E3 file was left at main:
its branch log flags unsupported or insufficiently checked lore, load/gain,
transformer and tube-swap claims. The copy branch remains available for separate
review; it was not merged wholesale or marked fully accepted.

## Generated media and provenance

[Manifest](../../dist/assets/studies/manifest.json) records configuration, view,
full generation prompts, reference links, date, file paths, method, provenance
and known inaccuracies for all six current images. Built-in image generation
was used, followed only by JPEG conversion. No photograph is redistributed.

The previous Princeton studies were opened and rejected for current use because
of invented small lettering/numerals and misleading apparent precision. Their
original files remain unchanged; [superseded records](../../dist/assets/studies/princeton/superseded.json)
retain A-05948 provenance. New `front-v2.jpg` / `rear-v2.jpg` are family
illustrations guided by the separately documented A-03894 cabinet. They do not
claim to show the model or an identical authenticated specimen.

Text is deliberately omitted from new illustrations. Princeton's logo location
uses an abstract silver shape, not faithful artwork. All covering colors/pitch,
basket/motor shapes, tube tips, cabinet depth and hardware spacing remain
illustrative. The first Champ rear omitted a credible speaker motor; a targeted
regeneration added the motor and illustrative basket-mounted transformer before
acceptance. Neither generated part establishes vintage construction detail.
The three pairs were inspected for control count, speaker format, cabinet,
cosmetics and absence of invented readable text. Front viewpoints show the
Champ top panel more clearly; paired views are not calibrated dimension studies.

## Interaction and current validation

- `npm test`: all six checks pass, including hydrated LFS Blender master, all
  208 catalog mappings, existing geometry/artwork checks, 18 unique topic/target
  pairs and six materialized media records with complete provenance.
- Actual Chrome review at **1440 × 1000** and **390 × 844** opened all **44 cards**,
  expanded deep notes/sources, checked scrolling, long-title wrapping, native
  menu access and Escape. Existing 26 cards retain their profiles and photos.
- Final new images opened from both thumbnail buttons at both widths. Previous/
  next, arrow keys, zoom reset/fit, native Escape and focus return passed. A card
  remains open beneath the image modal; the next Escape closes the card before
  another Escape can close the amp.
- Rear speaker markers were rechecked after moving their anchors out of their
  own motor geometry. Front/rear suppression and Champ top control were checked
  at both sizes. Internal tubes remain occluded where the assembled panel hides
  them, with menu access retained. No panel-removal mode was introduced.
- Switching through Princeton, brown Deluxe and Champ clears selection and mounts
  the correct menu. Active/All remains 10/208 and exact nonzero timeline scroll
  restoration passed. No horizontal overflow or JavaScript page errors observed.
- Model-specific `batchFit` now takes precedence over exploration zoom, protecting
  future large profiles. Current Super Six fit was visually rechecked.
- Shared inspector rear views and actual downloadable GLBs were checked: Princeton
  16,880,352 bytes / 7 anchor IDs; brown 6,011,892 / 6; Champ 4,724,960 / 5.
  Parsed as glTF 2 with metre metadata and unique persisted anchor nodes.
- Syntax and whitespace checks passed. A browser harness initially waited for a
  deliberately hidden WIP card; its visible-card selector was corrected and the
  focused navigation checks passed. This was a review-script issue, not an app fix.

These checks establish structural and interaction consistency, **not historical
accuracy or photorealism**. Exact interior locations, speaker constructions,
Princeton rectifier history and Champ depth remain open.

## Our rendered review evidence

| Princeton | Brown Deluxe | Champ |
| --- | --- | --- |
| ![Princeton reverb card](images/explorer-batch/princeton-reverb-1965-1440.png) | ![Brown tremolo card](images/explorer-batch/deluxe-1962-1440.png) | ![Champ top control](images/explorer-batch/champ-1959-1440.png) |
| ![Princeton rear marker](images/explorer-batch/princeton-reverb-1965-rear-1440.png) | ![Brown rear marker](images/explorer-batch/deluxe-1962-rear-1440.png) | ![Champ rear marker](images/explorer-batch/champ-1959-rear-1440.png) |
| ![Phone](images/explorer-batch/princeton-reverb-1965-390.png) | ![Phone](images/explorer-batch/deluxe-1962-390.png) | ![Phone](images/explorer-batch/champ-1959-390.png) |

These are our browser captures, stored under Git LFS. They are not historical
reference photographs or a controlled rendering comparison.

## Subsequent owner review

The owner accepted this batch’s hotspot information and placement, but rejected
its renders as unrealistic. The generation inspection above records checks
performed during that task; it **does not record owner acceptance of realism**.
The next round is hotspot-only for the remaining four active amps; see
[updated scope](ACTIVE_HOTSPOTS.md). Generated media are not a prerequisite.

## Next batch requirements

- **Tremolux:** trace a genuine 5E9 before writing mechanism claims; the available
  5E9-A is a different revision. Preserve the small-box dimensions/rectifier
  evidence conflict and verify internal anchor positions.
- **Super Six:** scope the selected 100 W/master-volume circuit against the
  period sheet and chassis drawing; distinguish later 135 W versions, confirm
  six-driver wiring and retain large-model fitting.
- **Original Blues Junior:** use the November 1995 PR 295 manual/green-board
  revision for Fat, gain/Master and reverb topics; avoid later III/IV circuitry.
- **Prosonic combo:** trace CSR 13 switching/rectification and reverb against its
  service documents; keep head-only features out of the 2×10 combo.

Each needs reviewed source-to-topic/anchor decisions. The subsequent owner
instruction authorizes those four hotspot profiles only and defers image work.

## Publication

User explicitly approved the public-main fast-forward in this session. Runtime
`75b619d59d8d74b4e74e1d2e672dd1263aad45b8` auto-deployed via Git as
`dpl_2LhcFKjkRWJptykHzb2ArbhSRHqC`, **READY**, aliased to fendertubeamps.com.
All six checks passed in the inspected build logs, including hydrated LFS master
and the new explorer/media check. Public bytes matched all 16 checked runtime,
manifest and current-image files. Live Chrome opened each new explorer, its
correct topic count, both images, navigation/zoom and layered Escape; no page
errors were observed. Our captures: `images/explorer-batch/live-*.png`.

Live links:
- https://fendertubeamps.com/?amp=princeton-reverb-1965
- https://fendertubeamps.com/?amp=deluxe-1962
- https://fendertubeamps.com/?amp=champ-1959

Post-release project inspection reconfirmed the existing team/project and
`all_except_custom_domains` SSO protection: public custom domains, protected
generated URLs. Original private Sites prototype, existing Site ID and DNS
were untouched. Documentation/evidence follow-up does not change runtime bytes.

## Brown Deluxe image replacement — user approved

November 20: user approved the new same-specimen D02985 front/rear pair and
requested publication. `brown/front-v2.jpg` and `rear-v2.jpg` replace the painted
placeholders in the shared image registry. Full prompts and corrected provenance
are in `assets/studies/manifest.json`; no text-omission claim remains for this pair.
The previous files remain unused. No model, hotspot, other amp image or viewer
behavior changed. Six npm checks and whitespace passed; both images were opened
and visually checked in the local viewer. Image accuracy is still interpretive.

Publication verified: runtime `5da8975659023511b9e4a459b18013d9cfc0f95e`,
Git production deployment `dpl_EUyTgnNMXXbhcMfADnJHmYCsZ7nH`, READY.
Public brown Deluxe route loaded both replacement images; front source resolved
to `front-v2.jpg` (1393 px wide), rear visibly matched the approved new pair.
Escape returned to the model. Live capture saved privately under
`outputs/brown-deluxe-photoreal-review-v2/published-rear.jpg`.
https://fendertubeamps.com/?amp=deluxe-1962

## Champ image replacement — user approved

November 20: user approved the C-12147 same-specimen pair and requested publication.
Shared registry now uses `champ/front-v2.jpg` and `champ/rear-v2.jpg`, replacing
painted placeholders. Exact prompts and corrected provenance are in the media
manifest. Earlier files remain unused. No model, hotspot or other amp media changed.
Six npm checks and whitespace pass; local browser opened and visually reviewed
both replacement images. Tiny lettering, tweed and obscured components remain
interpretive, with fitted parts and wear attributed to the photographed specimen.

Champ publication verified: runtime `8399b4dd5c698ca563c503988c37cd5e22293023`,
Git production deployment `dpl_69tna6ib9RkThkme4GqbZt248pr8`, READY.
Live front resolved to `champ/front-v2.jpg` (1330 px wide); direct rear thumbnail
and Next navigation showed the approved rear pair, Escape returned to detail.
Private live capture: `outputs/champ-photoreal-review-v2/published-rear.jpg`.
https://fendertubeamps.com/?amp=champ-1959

## Tremolux image pair — user approved

November 20: user approved and requested publication of the RetroFret 0093
same-specimen front/rear pair. Two new records in the shared media registry use
`assets/studies/tremolux/{front,rear}.jpg`; the existing thumbnail rail and enlarged
viewer mount automatically. Full generation prompts and provenance are in the
media manifest. This separately authorizes media on Tremolux after its original
hotspot-only batch; its tests now require Front/Rear while the other three newer
profiles remain without media. No geometry, hotspot, other amp media or viewer
behavior changed. Six npm checks and whitespace pass; local viewer opened both
images and visually matched the approved pair. Fine details remain interpretive.

Tremolux publication verified: runtime `6f4bb873ff19973365fae2bdaa2802c92a9a2d8b`,
Git production deployment `dpl_HPifttf7SNYVuMqLgqByKPjqEMfY`, READY.
Live thumbnails opened front (1402 px, `tremolux/front.jpg`) and rear; the rear
visually matched the approved pair. Private capture:
`outputs/tremolux-photoreal-review/published-rear.jpg`.
https://fendertubeamps.com/?amp=tremolux-1955

## Tweed Deluxe image pair — user approved

November 20: user approved the Andy Baxter D-03176 front/rear pair and requested
publication in the shared thumbnail rail. Added two `deluxe-5e3` media records,
`assets/studies/tweed-deluxe/{front,rear}.jpg`, with exact prompts and specimen
provenance. No model, hotspot, other amp media or viewer behavior changed.
Six npm checks and whitespace passed; local viewer visually reviewed front/rear.
Fine lettering, cloth and components remain approximate; replacement handle and
reconed speaker appearance are specimen evidence, not factory fitment proof.

Tweed Deluxe publication verified: runtime `6400a31a7d38234d4a80b4535df960144bb7865a`,
Git production deployment `dpl_FQQiwkV2HyeG45J3xu9WZnX85K68`, READY.
Live thumbnail/viewer check loaded front (1402 px, `tweed-deluxe/front.jpg`) and
rear visibly matching the approved pair. Private capture:
`outputs/tweed-deluxe-photoreal-review/published-rear.jpg`.
https://fendertubeamps.com/?amp=deluxe-1957

## Blackface Deluxe Reverb images — user approved

November 20: user approved publication of Black Book A-08900 front/rear pair.
Two shared media records use `assets/studies/deluxe-reverb/{front,rear}.jpg` in
the existing thumbnail/viewer. Exact prompts and provenance are tracked in the
media manifest; private dealer references remain ignored. No model, hotspot,
other amp media or viewer code changed. Six npm checks and whitespace pass;
local front/rear viewer images visually checked. Generated fine details remain
interpretive; dealer originality and replacement grounded cord remain qualified.

Deluxe Reverb publication verified: runtime `536700398f32b7c963ab6f665d8752c4dbbf0127`,
Git production deployment `dpl_BFoaCGdyxf2DuyCYBCMphufc3q9r`, READY.
Live thumbnail/viewer loaded front (1536 px, `deluxe-reverb/front.jpg`) and rear
visibly matching the approved pair. Private capture:
`outputs/deluxe-reverb-photoreal-review/published-rear.jpg`.
https://fendertubeamps.com/?amp=deluxe-reverb-1965

## Twin Reverb images — user approved

November 20: user approved the RetroFret A-13834 front/rear pair and requested
publication in the existing shared thumbnail rail. Two `twin-reverb-early`
records use `assets/studies/twin/{front,rear}.jpg`. Exact prompts and specimen
source are in the media manifest; dealer photographs remain ignored. JBLs and
casters describe this specimen, not universal factory equipment. The viewer
explicitly distinguishes its JBL configuration from the shared model's speakers.
Six npm checks and whitespace passed; local enlarged front/rear visually checked.
Fine lettering, dimensions and texture scale remain approximate. No model,
hotspot or viewer behavior changed. Next action: verify production publication.

Twin publication verified: runtime `15e6a610d164a18ac02bea2ac52a773344114922`,
Git production deployment `dpl_EfDgCkzyWQHMza3tv3VbMJq5RmpA`, READY.
Public thumbnail/viewer loaded front (1254 px, `twin/front.jpg`) and rear
visibly matching the approved pair. This completes the publication check above.
https://fendertubeamps.com/?amp=twin-1968

## Super Six Reverb images — user approved

November 20: user approved the Hendrix CFA7106 front/rear pair and requested
publication in the existing shared thumbnail rail. Two `super-six-reverb-1972`
records use `assets/studies/super-six/{front,rear}.jpg`. Exact prompts and source
links are tracked in the manifest; dealer photos remain ignored. The twelve
controls, side handles and installed boards follow the specimen; upper speaker
row remains partly hidden. Fine lettering, dimensions and speaker details are
approximate; dealer dating and originality are not independently authenticated.
No model, hotspots or viewer behavior changed. Updated the media scope check
for this explicit user authorization. All six npm checks and whitespace pass;
local front and rear enlarged views visually checked. Production check follows.

Super Six publication verified: runtime `e6e95f0348a175e91da1ac97abf84cc17d4967f1`,
Git production deployment `dpl_8purVxpqrmzEuLBAJcMMCr8Ai8vs`, READY.
Public thumbnail/viewer loaded front (1024 px, `super-six/front.jpg`) and rear
visibly matching the approved pair. Private review capture:
`outputs/super-six-photoreal-review/published-rear.jpg`.
https://fendertubeamps.com/?amp=super-six-reverb-1972

## Blues Junior images — user approved

November 20: user approved the B-029650 original PR 295 front/rear pair and
requested publication in the shared thumbnail rail. Two `blues-junior-1995`
records use `assets/studies/blues-junior/{front,rear}.jpg`. Exact generation and
six-knob rear correction prompts and specimen source are tracked in the manifest;
seller photographs remain ignored. The rectangular badge, top controls, installed
rear board, offset tube slot and low tank opening follow the specimen. Generated
lettering, textures, dimensions and component details remain approximate; seller
dating and originality are not independently verified. No model, hotspot or
viewer behavior changed. Media scope check now includes this explicit approval.
All six checks and whitespace passed; local front/rear enlarged views visually
checked. Next action: verify production publication.

Blues Junior publication verified: runtime `2ffcf168cf1e7e8363b624ed8b1ce48c3f8b4e6d`,
Git production deployment `dpl_4SiVhLigMLowXJjMwisy6f1HUh2F`, READY.
Public thumbnail/viewer loaded front (1254 px, `blues-junior/front.jpg`) and
rear visibly matching the approved pair. Private review capture:
`outputs/blues-junior-photoreal-review/published-rear.jpg`.
https://fendertubeamps.com/?amp=blues-junior-1995

## Prosonic images — user approved

November 20: user approved the red-lizard Zikinf 2328714 front/rear pair and
requested publication in the shared thumbnail rail. Two `prosonic-1996` records
use `assets/studies/prosonic/{front,rear}.jpg`. Exact prompts and specimen source
are in the manifest; third-party photographs remain ignored. This photo set
provides an assembled rear missing from the earlier model's reference set.
International 230 V panel, staggered speaker placement and fitted Celestions
are specimen evidence, not an independent factory fitment audit. Exact specimen
year/originality remain unverified; seller limited-run claim is not adopted.
Fine lettering, covering pattern, dimensions and component details approximate.
No model, hotspots or viewer behavior changed. Media scope check includes this
explicit user approval. Six npm checks and whitespace passed; local enlarged
front/rear visually checked. Next action: verify production publication.
