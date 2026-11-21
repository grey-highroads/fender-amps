# Remaining active amps: hotspots only

November 20, 2026. User accepted the first expansion batch’s hotspot information
and placement, and explicitly rejected its generated renders as unrealistic.
The next authorized work is **hotspot content and placement for the remaining
active amps**, not image generation or model/material realism. Existing image
files/viewer remain unchanged; no new media is attached to these four profiles.

Started on isolated `codex/remaining-active-hotspots` from `c2853f5`; research
branch started at `0cfe2db`. Read the research briefs through Git, not a merge of
its older runtime. During completion, main advanced to `d3b0003` with the research
moved into `docs/research/`; those documentation-only commits were merged into
the review branch without runtime changes. The four briefs and QUESTIONS now
link this implementation/evidence follow-up. On the review branch, all ten active amps now have explorers: **65 topics**, adding
4 Tremolux, 6 Super Six, 5 original Blues Junior and 6 Prosonic. The ten assembly
choices, 208 catalog mappings, panel art, dimensions and component geometry are
unchanged. Anchors are metadata/empty objects in the actual shared factories.

## Source decisions made during this task

### Early Tremolux

Reopened serial 0093’s full-size tube-chart and top-panel photographs from
[RetroFret’s 1955 gallery](https://retrofret.com/products/fender-tremolux-model-5e9-tube-amplifier-1955-10792).
The chart visibly shows 5E9, six tubes, printed 5U4GA crossed out for handwritten
5Y3GT, and the 12AY7 at the right end of the rear-order list. The control panel
has Depth/Speed/Tone/Instrument/Microphone controls.

A new search again found 5E9-A drawings, not an established original 5E9 sheet.
No 5E9-A tremolo mechanism, component values, bias scheme or stage-gain claim is
promoted into this 5E9 profile. Four useful topics cover revision identification,
tube specification, the corrected rectifier chart and small-box/speaker history.
The rectifier and cabinet uncertainties from SMALL_AMPS.md remain open. Gallery
replacement history is specimen attribution, not a universal factory rule.

### Super Six

Downloaded, rendered and inspected the Fender **010182 Rev C**, titled
“100 watts RMS amp w/ reverb and vibrato,” hosted as
[100 W master-volume/no-pull drawing](https://el34world.com/charts/Schematics/files/Fender/Fender_twinreverb_sf_100_mv_noboost.pdf).
Crucially, the sheet itself includes **Super Six speaker hookup**: three series
pairs of nominal eight-ohm drivers in parallel. Thus its relevance is stronger
than assuming every silver-panel amp is the same circuit.

Traced channel mixing resistors into common Master ahead of the inverter,
120 pF Bright bypasses, reverb drive and wet/dry mix before Master, optical
signal-shunt tremolo, four 6L6GCs and the bias Balance network. The scanned sheet
is a family reference, not proof of the exact revision in dealer-attributed
1972 CFA7106. No pull-boost, 135 W ultralinear, line-out or hum-balance feature is
added to the selected 100 W model.

Reopened existing full-size CFA7106 front-panel/rear photographs and the prior
period-sheet evidence in THREE_COMBOS.md. The newly downloaded official archive
[Super Six owner manual](https://www.fmicassets.com/Damroot/Original/10001/OM_leg_gtramp_Super_Six_Reverb.pdf)
turned out to show **135 W, push-pull distortion and later rear features**.
Those pages were inspected and excluded as authority for this 1972-style model.
An official archive label without a year does not establish an early circuit.

### Original Blues Junior

Downloaded the [Fender service manual](https://el34world.com/charts/Schematics/Files/Fender/Fender_blues_junior_service_manual.pdf)
and rendered/read its **November 1995 specifications and theory page** (PDF page
3). It establishes Fat’s first-stage cathode bypass/JFET switching, Volume then
further gain/tone stages then Master, a reverb feed after Master, solid-state
spring drive/recovery, push-pull EL84 pair and resistor-set negative grid bias.
The speaker format remains one eight-ohm Eminence twelve without copying the
manual’s inconsistent specific speaker-model wording.

The downloaded bundle also contains 1996 revisions and 2001–2003 supplement
sheets; their title/revision blocks were opened. They are **not first-year
component-value evidence**. The runtime cards use original service text and avoid
later board values, a universal green-board tonal claim or a noise measurement.
Physical anchors use the existing 1995-style hardware/window construction, not
an imported later-board layout.

### Prosonic combo

Read the [official Fender owner manual](https://www.fmicassets.com/Damroot/Original/10001/OM_leg_gtramp_Prosonic.pdf),
including drive-only Master, Gain 2’s manufacturer-described compression-like
behavior, shared combo reverb, switched Return path and extension-jack tap change.
The downloaded [schematic pair](https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Prosonic-Schematic.pdf)
was rendered and both sheets opened: **head 050173 Rev C** and **combo D049951
Rev E, revised January 1997**. The runtime cites the latter only as later combo
topology reference, not a full 1996 parts audit. Head-only impedance selection
is excluded. The combo’s 16 Ω internal speaker connection and 8 Ω extension-jack
tap agree with the owner manual.

Mode ratings 30/50/60 W retain the existing August 1996 service-manual evidence.
Factory Class A / AB names are identified as labels, not measured conduction
angles. No tube substitution, bias setting, measured sag, compressor ratio or
speaker response is invented.

All reference downloads are private ignored files. No third-party photographs,
manual pages or wiring images are redistributed in the application. Sources are
linked from each card; practical consequences are circuit interpretation rather
than listening tests of these surviving specimens.

## Topics and anchor decisions

All detailed hardware and internal placement remains **estimated**. Knob/button/
toggle indices are zero-based coordinates in the same panel profiles used to
construct the hardware. Rear controls share `combo-rear-profiles.js` with the
builder; no screen-space guesses stand in for component coordinates.

| Profile / topic | Shared anchor | View and evidence |
| --- | --- | --- |
| Tremolux `revision` | Depth, knob 0 | Top; opened 1955 panel/chart, no unverified mechanism |
| Tremolux `input-tube` | Tube 5, chart’s 12AY7 end | Rear; chart specification, estimated envelope |
| Tremolux `rectifier` | Tube 0 | Rear; photographed handwritten 5Y3GT correction |
| Tremolux `speaker` | Existing motor surface | Rear; small-box decision and qualified Jensen-family proxy |
| Super Six `master` | Knob 11 | Front; 010182 pre-inverter Master |
| Super Six `bright` | Normal toggle 0 | Front; 010182 120 pF bypass |
| Super Six `reverb` | Knob 8 | Front; family drawing’s drive/return/Master routing |
| Super Six `tremolo` | Intensity, knob 10 | Front; family drawing’s optical shunt |
| Super Six `speakers` | Motor of driver index 2 | Rear; one middle-row modeled driver represents the six-speaker assembly |
| Super Six `power` | Tube 6, first modeled 6L6 | Rear; quartet and Balance network, not a claimed socket map |
| Junior `gain` | Volume, knob 5 | Top; original 1995 stage order |
| Junior `fat` | Button 0 | Top; shared actual Fat-button center, internal bypass remains hidden |
| Junior `reverb` | Knob 0 | Top; original solid-state spring drive/recovery |
| Junior `power` | Tube 0, modeled EL84 | Rear; existing tube-window construction and manual lineup |
| Junior `speaker` | Driver index 0 motor | Rear; original single-twelve format |
| Prosonic `gain` | Gain 1, knob 1 | Front; two drive controls and qualified factory behavior description |
| Prosonic `master` | Knob 6 | Front; drive-only level control |
| Prosonic `reverb` | Knob 7 | Front; combo-only reverb, not head circuitry |
| Prosonic `modes` | Rear control 4, rotary | Rear; shared rectifier/bias selector center |
| Prosonic `loop` | Rear control 8, Return | Rear; actual Return jack, not neighboring Send |
| Prosonic `load` | Rear control 6, extension | Rear; switched output tap and two-driver load relationship |

No marker claims to reveal an internal resistor or optical device through a
panel. Tube markers may remain hidden when the assembled back obstructs them;
all topics are reachable through Explore a part. The existing menu-only topics
on other profiles retain their behavior. The single assembled model is preserved.

## Implementation

- `active-amp-features.js`: 21 source-scoped cards and four registry entries.
- `explore.js`: mounts those entries through the existing shared explorer.
- `explorer-anchors.js`: explicit targets for all seven expansion profiles.
- `combo-rear-profiles.js`: existing rear control coordinates extracted unchanged
  for hardware and anchors to consume together.
- `combo-amps.js`: empty anchors on actual shared panels, speakers and tubes.
  Existing `batchFit` and model geometry remain intact.
- `checks/explorers.mjs`: validates 39 expansion-topic/anchor pairs, new target
  kinds and the deliberate absence of generated images on these four profiles.
  The original 26 topics remain covered by browser regression and prior checks.

## Validation and remaining uncertainty

Current task checks:

- All six `npm test` scripts pass, including all ten active-profile coverage,
  39 expansion card/anchor pairs, six unchanged existing media records, all
  208 catalog mappings and materialized LFS master. Syntax and whitespace pass.
- Chrome at 1440 × 1000 and 390 × 844 opened all 21 new cards, expanded their
  circuit/source notes, scrolled long cards and used Escape without closing the
  amp. Rotation stopped on selection. Top/front/rear navigation, marker grouping,
  rear visibility and the complete tall Super Six framing were checked.
- All six older profiles retain the correct card counts and open/close behavior.
  The new four have no image rail. Image data, viewer code and image assets are
  byte-unchanged by this batch.
- Active/All remains 10/208. Switching through all four new profiles clears
  selection and restores exact nonzero timeline scroll and focus on closing.
  Phone checks found no document overflow.
- A final independent 21-card/keyboard run found no JavaScript page errors;
  Reset and orbit/zoom keyboard controls remained usable.
- Shared inspector exports were opened from **fresh documents** and parsed as
  glTF 2 with metre metadata and exactly 4/6/5/6 unique persisted anchor IDs:

| Assembly | Export bytes | Anchor IDs |
| --- | ---: | ---: |
| Tremolux | 5,323,732 | 4 |
| Super Six | 37,121,792 | 6 |
| Original Blues Junior | 4,807,712 | 5 |
| Prosonic combo | 9,855,476 | 6 |

An initial export harness reused the inspector document across hash-only URLs,
so its second download was still the first amp. The fresh-document check above
corrected that harness error; inspector loading behavior was not changed.
These checks establish integration, not circuit originality, measured sound,
source-backed internal positions or realism.

Remaining evidence gaps: original 5E9 drawing and circuit trace; exact specimen
socket positions and component condition; Super Six’s exact selected-year
revision and fitted speaker originality; original Junior board identification;
1996 Prosonic values versus the available 1997 combo revision. None is concealed
by importing later drawings or generating a visual explanation.

## Review captures

These are our browser captures for hotspot placement and card review, not new
generated illustrations or evidence of realistic rendering. All use Git LFS.

| Tremolux | Super Six |
| --- | --- |
| ![Top Depth topic](images/active-hotspots/tremolux-1955-revision-1440.png) | ![Master topic and full cabinet](images/active-hotspots/super-six-reverb-1972-master-1440.png) |

| Original Blues Junior | Prosonic |
| --- | --- |
| ![Fat button](images/active-hotspots/blues-junior-1995-fat-1440.png) | ![Rear mode selector](images/active-hotspots/prosonic-1996-modes-1440.png) |

Every new topic has a desktop capture under `images/active-hotspots/`; phone
first-card and rear-view captures are included for each new profile.

## Release status

Completed and validated on the isolated review branch. Publication of this new
batch is separate from the earlier approved first-batch release. Private Sites,
DNS, Vercel protection settings and existing generated assets were untouched.
