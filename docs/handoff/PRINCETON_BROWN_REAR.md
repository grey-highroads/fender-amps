# Princeton construction 1.0 and brown Deluxe rear 1.1

November 20, 2026. User authorized the Princeton build and brown Deluxe rear
correction after review of research branch `7137042`. The research branch remains
separate; its packets were read through Git without merging its older runtime.

## Scope and result

- Timeline: 23 entries. New Princeton Reverb introduction is **1964**, production
  range 1964–1967; construction is **1965-style**, not a claim of a 1964 specimen.
- Catalog row **67**, Princeton Reverb (black panel), hash
  `3d0846ac0ac8d4b1e92f701ae6f3765982c89e46f5f6c5d0b741bf3cb3aa284b`,
  reconciled before publishing: 12 W, 1 × 10-inch, 8 Ω. No core catalog difference.
  Mapping records the narrower assembly scope and unresolved rectifier evidence.
- Seven reference assemblies / 36 components: adds a shared six-knob black panel
  and estimated Oxford-style ten. Existing skirted knob 0.4, badge, handle,
  Tolex and cloth are reused. One shared builder feeds timeline, detail and library.
- Princeton includes two inputs, six controls, raised tail logo, top chassis
  strips, upper trapezoid opening, flat lower back panel, rear switches/jacks,
  speaker lead, seven tubes and estimated transformer/filter-can/tank envelopes.
- Brown Deluxe now has the upper trapezoid opening, labeled rear chassis strip,
  ground/on switches, fuse, speaker/extension/tremolo jacks, speaker lead and flat
  lower panel. Tubes move upward behind the upper panel, matching the mounted
  relationship better. No separate vent slots were added to either brown panel.
- **This is a construction pass. Princeton hotspot cards are not implemented.**
  Existing Twin, black Deluxe Reverb and 5E3 explorers remain unchanged in behavior.

## Evidence inspected during this build

### Princeton

Main cabinet reference: [RetroFret A-03894, item 9339](https://retrofret.com/products/fender-princeton-reverb-tube-amplifier-1965-9339).
Full-resolution front, rear and chassis-top photographs were downloaded to ignored
`outputs/princeton-review/` and visually inspected. Panel order, raised logo,
top strap and strips, rear opening/connection order, two large output tubes and
four small-tube shields inform construction. These dealer photos are not committed
or embedded. The dealer-reported replacements include Weber speaker, tank, tubes
and filter can. Their appearance does not establish Fender factory fitment.

Working envelope W × H × D: **504.825 × 406.4 × 241.3 mm** (19.875 × 16 × 9.5 in).
It is a [modern vintage-pattern cabinet proxy](https://mojotone.com/products/fender-blackface-princeton-reverb-1x10-combo-guitar-amp-cabinet),
consistent with the research's reissue dimensions; the dealer reports 20 × 16 ×
9.25 in. No measuring convention is assumed to resolve that depth difference.

The rendered speaker is a period **Oxford-style 10J4 study**, attributed by the
research to the [second early-1965 example](https://reverb.com/item/101149580-fender-princeton-reverb-1965-no-logo-black-panel).
It does not reproduce the main specimen's replacement Weber. The second specimen's
speaker/chart details were reported by the researcher, not independently read in
this build. Frame, motor, magnet construction and label artwork remain estimates;
no original speaker rating, response or cone authenticity is assigned.

The [Fender AA1164 K-FD scan](https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf)
was rendered locally and visually inspected. It specifies **5U4GB**, two 6V6GT,
two 12AX7, 12AT7 and 7025. That is the modeled lineup. This copy has a later
revision block, so it does not prove which rectifier every early amp left with.
Research reports a GZ34 on an early AA764-marked chart; the main specimen has a
replacement GZ34-size bottle. This build intentionally does **not** promote that
replacement into factory evidence. The drawing/chart conflict stays visible in
the details, library record and export metadata. This differs from the research
packet's recommendation to copy a GZ34-size bottle.

The assembly is explicitly a family construction study combining cabinet evidence,
a period speaker selection and drawing-based tube specification; not a scan or an
exact reconstruction of A-03894. Tank position and dimensions remain provisional.

### Brown Deluxe

[Music Emporium D02985](https://themusicemporium.com/products/fender-6g3-deluxe-1962),
photos `AMP26002-12.jpg` (rear) and `AMP26002-11.jpg` (detail) downloaded for review;
rear photograph visually inspected at full size. The upper panel's sloping cut,
flat lower panel, dark rear label strip with bare chassis at its right, and
speaker/extension/tremolo connection order guided this pass. Replacement tubes,
service capacitors and grounded cord do not establish factory equipment. Cabinet,
speaker and front-panel geometry remain as in the previous exterior study.

## Implementation

`rear-profiles.js` contains estimated per-amp cutout proportions and rear control
orders. `rear-chassis.js` builds the shared strip, labels, switches, fuse and
connectors. `small-amps.js` constructs actual panel geometry with the top cut,
not a dark rectangle painted over a solid panel. It reuses the existing shared
factories; the Princeton is not a scaled copy of a larger Deluxe Reverb mesh.

Panel dimensions, lettering, knob spacing, rear hardware spacing, tube envelopes,
transformer sizes, glides and all interior positions remain estimates. No circuit
simulation, new audio or measured tone response was added. Source references and
qualifications appear in the runtime library and detail notes.

## Visual review

| Prior brown rear | Corrected brown rear |
| --- | --- |
| ![Before](images/princeton-brown-rear/brown-before.jpg) | ![After](images/princeton-brown-rear/brown-after.jpg) |

Same rear camera preset, lighting and desktop review layout; unchanged cabinet
size. Rear hardware/lead additions can affect the fitted bounding box slightly.
These are construction comparisons, not photorealism benchmarks. The prior build
was served from an isolated ignored archive of main `239d41c`; no old code was
restored over the working tree. Review images use Git LFS.

| Princeton front | Princeton rear |
| --- | --- |
| ![Front](images/princeton-brown-rear/princeton-front.jpg) | ![Rear](images/princeton-brown-rear/princeton-rear.jpg) |

## Validation

- All five `npm test` scripts pass. 23 catalog mappings and all seven assemblies
  validate. Shared-knob check now includes Princeton alongside Deluxe Reverb and
  Twin. New checks cover seven tube types, six controls/two inputs, opening/strip
  clearance, sloping sides and rear-control positions.
- Syntax checks and `git diff --check` pass.
- Local browser: Princeton front/rear/angled views, brown rear before/after, shared
  library assembly/records and existing view controls checked. No Princeton
  browser rendering errors captured.
- Phone 390 × 844: Princeton model and tabs readable; document width and scroll
  width both 390 px. No empty explorer menu. Timeline shows 23 models; opening
  and closing the 1964 Princeton preserves horizontal offset exactly (2327 px)
  and returns focus to its card.
- Both changed assemblies reach “GLB exported with materials.” The actual
  downloaded Princeton GLB was parsed: **16,785,956 bytes, 224 meshes**, six shared
  skirted-knob groups, two rear panels, seven named tubes with the intended
  lineup, rear strip/lead/tank/filter/transformer objects, metre metadata and
  finite accessor min/max. The generated GLB remains a local QA download and is
  not committed. Brown export status was checked; its binary was not separately
  parsed in this pass.

Tests establish structural consistency, not historical or photographic accuracy.
Next: add the Princeton explorer after narrowing the hotspot sound claims; later
replace estimated dimensions with measured original cabinet/chassis evidence.
- Regression browser checks: 5E3 interacting-volume card, black Deluxe Reverb
  bright-cap card and Twin AC568 power-tube card opened their correct profiles.
  No console errors were captured in that regression tab.
