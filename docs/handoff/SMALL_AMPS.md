# First timeline expansion: three small combos

November 20, 2026. User authorized the Champ, early Tremolux and brown Deluxe
while another research agent closes the broader batch's evidence gaps. These
are timeline/detail construction studies, not new hotspot treatments or
photoreal replicas. The timeline grows from 19 to 22; all entries have reviewed
catalog mappings. No catalog source values were overwritten.

## Selection and scale

| Study | Timeline / specimen | Catalog row | Working cabinet W × H × D | Basis |
| --- | --- | --- | --- | --- |
| Champ 5F1, 8-inch | 1958 / 1959 | 37 | 13.5 × 12 × 8 in | RetroFret C-12147 dealer report; other specimens report 13.25 × 11.75 × 6.5 and the first research pass lists another size. Not a new measurement. |
| Early Tremolux 5E9 | 1955 / 1955 | 25 | 20 × 16 × 9.5 in | Cream City dealer report; **provisional**. RetroFret 0093 reports 22 × 20 × 10.5 although its front photograph and small-box description differ. Do not silently resolve this conflict. |
| Brown Deluxe 6G3 | 1961 / 1962 | 46 | 21 × 17 × 9.5 in | Music Emporium dealer report; 17.125-inch height also appears in secondary sources. |

Feet and handle inclusion is unknown in these reports. Geometry is parameterized
in millimetres and uses the existing shared scene scale; physical texture pitch
is not stretched with the cabinet. Panel widths, wall thicknesses, rounded edges,
rear openings, speaker offsets and hardware dimensions are modeling estimates.
Timeline cameras retain the common physical scale: the Champ appears smaller.
The component inspector separately normalizes an object to fit its viewport.

## Photographs actually inspected in this build

The research branch `codex/amp-expansion-research` at `6d2b197` was read as a
starting point, not merged. Its photo readiness claims were not accepted without
inspection. This build inspected new dated galleries directly:

- [1959 Champ, RetroFret C-12147](https://retrofret.com/products/fender-champ-amp-5f1-tube-amplifier-1959-8054): front, rear, top and tube chart. One switched Volume, two inputs, fuse and jewel; small script tag; plain upper rear panel. Dealer reports replacement handle and power tube. The chart identifies three tubes. The speaker label is missing, so the model uses an unbranded eight-inch alnico construction study.
- [1955 Tremolux, RetroFret 0093](https://retrofret.com/products/fender-tremolux-model-5e9-tube-amplifier-1955-10792): front, rear, top, tube chart and exposed chassis. Five knobs, four inputs, two horizontal rear vents and a notched lower panel. The photo/chart show six tubes (three small, two power and rectifier), correcting the incomplete five-tube research list. One volume knob, pots, switch and output transformer were replaced. Model uses a shared P12Q construction proxy rather than copying those replacements.
- [1962 Deluxe, Music Emporium D02985](https://themusicemporium.com/products/fender-6g3-deluxe-1962): front, panel, handle, rear serial and tube chart. Normal left / Bright right; six brown barrel knobs, panel-printed numbers, wheat grille and **no grille badge**. The pictured tube chart specifies GZ34, but this does not authenticate every fitted part or settle other circuit questions.

No dealer photo pixels are shipped or committed. Local inspection copies are
ignored under `outputs/expansion-references/`. Source image URLs and inspected
views are recorded in `SMALL_AMPS_REFERENCES.json`. Their rights are not cleared
for public photo cards. Own browser renders below use the existing lights and
camera presets; they are not controlled photographic color comparisons.

## Shared implementation

`dist/library/small-amps.js` is one parameterized cabinet factory selected by
`createAmpModel` for the three new catalog assemblies. It supplies timeline,
detail and inspector views and GLB export. It reuses the existing speaker,
handle, screw, jack, jewel and knob builders. Top-facing control plates occupy
an actual recess; rear vents are geometry openings, not black painted marks.

`small-amp-profiles.js` provides the three panel layouts. New shared catalog
parts add a brown barrel knob, small tweed tag, brown covering, wheat cloth,
three panels and qualified speaker variants. Brown knob numbers belong on the
panel. The existing skirted knob and Twin/Deluxe Reverb builders are retained.
The inspector now supports an assembly with no grille badge and shows its
actual dimension basis rather than claiming every cabinet is a reissue proxy.

The original 5E3 remains its own assembly. It is not accidentally selected for
the new 1955 Tremolux. The existing educational hotspot profiles remain on the
Twin and Deluxe Reverb. These three new entries have story/specification/source
pages; detailed hotspots wait for the research/schematic pass.

## Remaining uncertainty and next work

1. Resolve the Tremolux envelope with a measured small-box example. Retain both
   dealer reports until then; do not average them.
2. Exact speaker motors/baskets, panel typefaces, number shapes, tweed wrap seams,
   cabinet taper and rear service hardware remain approximate. These models
   explain construction; they do not reproduce wear or an exact surviving amp.
3. Internal positions and transformer envelopes are explanatory. No new
   component-value or circuit mechanism claims are published in hotspots.
4. Have the research agent verify primary schematics and source-specific
   dimensions before adding the deeper explorer content. Do not block useful
   exterior work on unmeasured screws or fonts.

## Rendered review

| Champ | Tremolux | Brown Deluxe |
| --- | --- | --- |
| ![Champ front](images/champ-v1-front.jpg) | ![Tremolux front](images/tremolux-v1-front.jpg) | ![Brown Deluxe front](images/brown-deluxe-v1-front.jpg) |
| ![Champ rear](images/champ-v1-rear.jpg) | ![Tremolux rear](images/tremolux-v1-rear.jpg) | ![Brown Deluxe rear](images/brown-deluxe-v1-rear.jpg) |

## Validation during this task

- `npm test`: all five scripts pass, including 22 pinned catalog mappings,
  nominal loads, speaker side clearance, panel/control counts and existing
  skirted-knob, surfaces, identification and Blender-master checks.
- JavaScript syntax checks and `git diff --check` pass.
- Local browser review used desktop Chrome and the in-app browser. Front/rear
  presets and orbit views inspected; desktop review renders use 1440 × 1000
  with existing lighting. A fresh localhost port was used for final review to
  avoid stale cached HTML/modules. The interface and lighting were not redesigned.
- Inspector recognizes all six assemblies, including the brown Deluxe's absent
  grille badge and the new dimension-basis text. All three export actions reach
  “GLB exported with materials.” The downloaded Champ binary was additionally
  parsed: glTF 2.0, 4,633,400 bytes, 108 meshes, 12 images, metre metadata and one
  chicken-head knob; accessor bounds are finite. This binary check was on the
  first working cabinet iteration, before small tube-position changes; it is
  exporter/format evidence, not a final specimen-authenticity claim.
- Browser logs include existing Three.js environment-filter sample-limit warnings;
  no rendering error was observed in the reviewed models. Neither those warnings
  nor passing tests establish photographic fidelity.
- Review images use Git LFS. Third-party reference images remain excluded.
- Regression browser checks: existing Deluxe Reverb bright-cap card and Twin
  power-tube card still open with their correct profiles. New entries have no
  misleading empty hotspot menu. Closing the brown Deluxe restored a nonzero
  timeline offset exactly (1752 px) and returned focus to its card. The 390 × 844
  Tremolux layout had no horizontal page overflow; its long title fits.
- Automatic preview of `d0a8761` reached READY at
  `amplifier-observatory-36eqbne4h-grey-7947s-projects.vercel.app`; remote logs
  confirm all five checks, 22 mappings and hydrated LFS model validation.
