# Super Six, Blues Junior and Prosonic construction 1.0

November 20, 2026. User requested a completed, published batch of about three
source-backed construction models. Started from main `5b6e2a3`, fetched main
and research branch `0cfe2db`, and read the research directly through Git.
**The research branch's older runtime was not merged.** Work was isolated on
`codex/three-combo-expansion` in `/private/tmp/fender-three-combo`.

## Selection and catalog reconciliation

All 208 catalog entries already existed. This batch replaces three gray WIP
placeholders with shared assemblies: **ten modeled studies, 198 placeholders,
47 library components, three existing hotspot explorers**. No additional
hotspot content is implied. Corrected workbook/CSV values remain unchanged.

| Timeline / assembly | Exact CSV row | Production and selected configuration | W × H × D |
| --- | --- | --- | --- |
| 1972 Super Six Reverb | 91, Super Six Reverb | Catalog 1972–1979; 1972-style 100 W master-volume configuration, not later 135 W / pull-boost | 26½ × 40½ × 11½ in, **without casters** |
| 1995 Blues Junior | 131, Blues Junior (I–II) | Catalog groups 1995–2010; original 1995 PR 295, using seller-dated December 1995 exterior | 18 × 16 × 9 13/16 in |
| 1996 Prosonic | 137, Prosonic | Catalog 1996–2002; 1996-style CSR 13 2×10 reverb combo, red factory color | 24 × 18½ × 10½ in |

`timeline-map.json` retains exact source-row hashes and explicit narrower scope.
Super Six introduction claims before 1972 remain unresolved; the catalog date is
retained. Prosonic secondary guides end production in 2001, while the catalog
ends in 2002. Its head format and head-only 4/8/16 selector are outside this
assembly. Blues Junior III/IV details do not apply to this first-year study.

## Sources and photographs actually inspected in this task

These are linked evidence, **not redistributed photos**. Downloaded inspection
copies and generated GLBs stay in ignored `outputs/`. Review screenshots below
are our own renders and use Git LFS.

### Super Six

- [Period Fender specification sheet](https://www.hendrixguitars.com/Images/SuperSix2.jpg),
  opened at full available resolution. It explicitly gives 40½-inch height
  **less casters**, both channels' Middle controls, six tens, 100 W, master
  volume and removable snap-in casters. Sheet is undated; it does not independently
  prove a 1972 introduction or the specimen's date.
- [Dealer gallery, CFA7106](https://www.hendrixguitars.com/Am070.htm): front
  `Am070.JPG`, rear `Am070g.JPG` and panel `Am070b.JPG` were downloaded and opened.
  The rear shows three rows of two speakers, side handles, broad upper board
  with a sloping service cut and a separate lower board. Speaker originality
  and maker are not authenticated. The rendered blue motor labels say construction
  study; they are not a reproduction of a claimed Oxford/CTS original.
- Twelve knobs: Normal Volume/Treble/Middle/Bass; Vibrato Volume/Treble/Middle/
  Bass/Reverb/Speed/Intensity; Master. This corrects the brief's omission of
  the Vibrato-channel Middle control. Bright switches and four inputs remain.
- Six nominal 8 Ω speakers are shown as three series pairs in parallel, giving
  16/3 Ω. UI rounds to 5.33 Ω and records the commonly published 5.2 Ω figure.
  This is a declared educational wiring topology, not a continuity test of CFA7106.
  The ten-tube lineup is Twin-family interpretation; socket positions are estimates.

### Original Blues Junior

- [Fender November 1995 service manual](https://el34world.com/charts/Schematics/Files/Fender/Fender_blues_junior_service_manual.pdf):
  specifications and theory text read. PR 295, 15 W, one 8 Ω Eminence twelve,
  cabinet envelope, six pots, Fat switch and five tubes. The manual's inconsistent
  speaker-replica model wording is not repeated as a speaker identity.
- [Seller-dated December 1995 PR 295](https://reverb.com/item/101464396-fender-blues-junior-pr-295-1995):
  front image 1, top/rear plate image 2 and open-back image 3 opened enlarged in
  Chrome. Serial plate B-029650 is visible. Seller dates speaker/transformers
  to 1995; this is not independent authentication of every fitted part.
- Model uses the rectangular dark/silver front tag, top chrome panel with six
  chicken-head knobs, Fat button, small red LED and power toggle. It does not
  use a later full-size jewel or a later black control panel.
- Broad upper rear board has a real capsule opening, offset toward the rear
  viewer's right; low board exposes the speaker/tank area. Window size, board
  proportions, handle and chassis envelopes remain estimated. Three 12AX7 /
  two EL84 follow the manual; the visible circuit board itself was not audited.

### Prosonic

- [Fender reference/owner manual](https://manualmachine.com/fender/prosonic/19064233-user-manual/):
  front/rear functions and specifications read. Supports two Celestion-format
  tens, dimensions, red/green/black colors, green jewel, rear rectifier/bias
  selector, mode ratings, tube lineup and combo extension-jack behavior.
- [August 1996 Fender service manual transcription](https://manuals.plus/m/92f37ff5c6fa47e902cc1d28a9d5dda7af888d82718621e282e7891828fc89b9)
  corroborates CSR 13 envelope and 30/50/60 W mode ratings. Factory class names
  are reported as factory mode labels, not a modeled/measured conduction audit.
- [Seller-dated red 1996 specimen](https://reverb.com/item/101606356-fender-prosonic-amp-2-channel-60-watt-2x10-guitar-combo-1996-red-lizard):
  enlarged front/three-quarter/top image 2 and rear-label image 3 inspected in
  Chrome. **Black front panel**, eight chicken-head knobs, two inputs and A/B
  switch correct the brief's cream-panel statement. The rear-label detail does
  not show a complete interior; internal positions are explicitly estimated.
  The seller's limited-production count is omitted.
- Two nominal 8 Ω speakers in series make the 16 Ω internal load. Connecting
  the combo's extension jack selects the 8 Ω amplifier tap; there is no
  head-only impedance selector. This is not the head without reverb.
- Red is a supported factory color. The regular procedural vinyl grain is a
  rendering proxy for the photographed lizard covering, not an exact lizard pattern.

## Shared implementation and remaining estimates

`combo-profiles.js` holds selected configurations, sources, speaker centers and
new panel records. `combo-amps.js` constructs walls at each envelope, speaker
baffles with actual circular openings, rear boards/openings, controls and wiring.
One assembly reaches timeline, detail, inspector and export through `createAmpModel`.
No GLB is downloaded by the runtime and no new Blender source is needed.

Reuses the established materials, speakers' construction factory, skirted knob
0.4, chicken-head knobs, handles, raised tail badge, jacks and screws. New library
records add three speaker variants, three panel layouts, red covering, rectangular
Junior tag, green jewel, small red LED and snap-in caster study. Existing panel
artwork/proofs are unchanged; new panels use the same original vector alphabet.
There is no modification of the parallel typography work's accepted lettering.

Wall thickness, radii, taper (not measured), baffle/rail placement, back-board
sizes, tube/chassis/transformer/tank envelopes, socket order/spacing and hardware
sizes are estimates. Speaker frames, motors and labels are nominal-format
construction proxies. No universal original speaker brand, cone, measured sound,
wear or exact surviving specimen is claimed. Replacing these estimates with
measurements is more useful than adding decorative wear.

Detail framing adapts for the tall Super Six and narrower phone views. The
timeline uses a single wider/distant camera for **all** colored assemblies, so
large cabinets fit without changing their physical scale relative to other models.
The inspector intentionally fits each object independently, as before.

## Validation performed during this task

- All five `npm test` scripts pass: 47 components, ten assemblies, 208 pinned
  mappings and unchanged original explorer/card checks. Added tests check speaker
  centers/counts and side/rail/pair clearances, panel knob/input counts, rotary
  clearances, tube counts, selected scope and absence of duplicate WIP entries.
  Wiring checks now handle series and series-pair/parallel loads, rather than
  incorrectly assuming every assembly is parallel.
- New vector panel proofs generated with existing tooling; original proofs are
  byte-identical. Syntax and whitespace checks pass.
- Browser inspection: front, rear and angled views of all three, mounted panels,
  inspector records and component reuse. Fixed front-rail occlusion, thin roof
  hardware being buried by bevels, Junior badge image readiness, tube-window
  readability and clipping of the tall cabinet. Screenshots below are renders,
  not historical or photographic verification.
- Inspector exports for all three reached “GLB exported with materials.” An
  ignored local browser QA page also called the same factory and exporter,
  saved all three binaries and checked 6/1/2 speakers, 10/5/9 tubes, four Super
  Six casters and finite geometry. Binary parsing verified glTF 2 headers,
  finite accessor bounds, embedded images and metre metadata:

| GLB | Bytes | Mesh definitions | Embedded images |
| --- | ---: | ---: | ---: |
| Super Six | 37,119,700 | 532 | 50 |
| Blues Junior | 4,806,356 | 138 | 10 |
| Prosonic | 9,853,504 | 246 | 10 |

The binary run preceded the Junior badge asynchronous-image fix and LED pilot-toggle naming; the
factory awaits image readiness during export. Binaries are local QA artifacts,
not committed assets. Structural checks do not establish historical accuracy.

- Phone 390 × 844: all three detail views fit; document client/scroll widths
  both 390. Closing/reopening Junior restored exactly 22,958 px horizontal
  offset and focus to its timeline card. Desktop timeline cards reviewed;
  wide/tall/compact silhouettes retain shared physical scale.
- Existing Twin AC568 power card, Deluxe Reverb bright-cap card and 5E3
  interacting-volume card open with their correct profiles. No page errors
  captured in these regression reviews. Existing environment-filter warnings
  are not treated as historical/visual validation.

## Own rendered review

| Super Six front | Super Six rear |
| --- | --- |
| ![Super Six](images/three-combos/super-six-front.jpg) | ![Rear](images/three-combos/super-six-rear.jpg) |

| Blues Junior angle | Blues Junior rear |
| --- | --- |
| ![Junior](images/three-combos/junior-angle.jpg) | ![Rear](images/three-combos/junior-rear.jpg) |

| Prosonic angle | Prosonic rear |
| --- | --- |
| ![Prosonic](images/three-combos/prosonic-angle.jpg) | ![Rear](images/three-combos/prosonic-rear.jpg) |

## Next useful batch

Showman blonde 1×15 piggyback, TV-front Pro and 1960 Vibrasonic: reusable
15-inch speaker and a distinct piggyback/TV-front structure fill larger gaps.
Reopen the actual photos and period configurations, especially Showman cabinet
choice and Pro field-coil speaker, before building. The early 5B6 Bassman and
Fender 75 remain blocked by missing/conflicting model-specific dimensions.
Dual Professional is now research-ready with explicitly estimated dimensions;
its V-front is a separate construction task, not a silent substitute cabinet.

## Publication verified

Runtime `4ab115e5b04a54aebea725d23e8adf78a5259e89` is on main and the
codex batch branch. Vercel Git production deployment
`dpl_GiuBbS1SqW9xeoycEhe4qmJxu9R7` is **READY**, aliased to the existing
custom domains. All five remote checks passed, including materialized LFS GLB
validation. Initial batch `d68b21e` also passed its branch preview and production
build; the final forward commit only pulls back the Super Six detail framing
so its complete cabinet remains visible. No history was rewritten.

Eight public runtime files matched the tested batch byte for byte; after the
framing follow-up, `collection.js`, `library/combo-amps.js` and `library/parts.js`
were checked again against final source. Live Chrome review opened all three
models, checked the Junior pilot control and confirmed the full Super Six in
its final framing. No page errors were captured. Live own screenshots:
[Super Six](images/three-combos/live-super-six.jpg) and
[Prosonic](images/three-combos/live-prosonic.jpg).

- https://fendertubeamps.com/?amp=super-six-reverb-1972
- https://fendertubeamps.com/?amp=blues-junior-1995
- https://fendertubeamps.com/?amp=prosonic-1996

Project inspection confirms `all_except_custom_domains` authentication remains:
custom domains public, generated previews protected. The original private Sites
prototype, Site ID, DNS and access settings were not changed. The canonical
workspace was fast-forwarded to the batch, preserving existing typography and
Princeton image work. Later documentation commits may redeploy identical runtime.

