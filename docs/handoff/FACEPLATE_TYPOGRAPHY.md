# Faceplate lettering study 1.0

November 20, 2026. Scope: the seven existing shared reference assemblies and the
Princeton / brown Deluxe rear strips. Baseline main `0f0e901` was checked against
origin/main before editing. The separate research branch was not used as runtime.

## Owner review

[Flat before / after sheet](images/typography/flat-comparison.png) shows artwork
without hardware, lighting or perspective. Each pair uses the same display width;
revised texture aspect ratios now follow physical panel dimensions. Earlier maps
had arbitrary canvas ratios but were stretched onto those same physical plates.

Start with the [Princeton mounted before](images/typography/princeton-amp-front-before.png)
and [after](images/typography/princeton-amp-front-after.png), then the
[isolated plate](images/typography/princeton-plate-front-after.png).
[Annotated reference sheet](../../tools/typography/reference-sheet.html) connects
specific observations to linked vintage photographs without republishing them.

The strongest changes are the connected two-line Princeton and Deluxe titles,
the early Twin's heavier narrow upright block title, and the brown Deluxe's
channel divisions and restarted input numbering. Tweed controls gain the correct
1–12 scales; stacked inputs are numbered by row. Champ keeps a plain control
plate: the inspected panel does **not** say CHAMP-AMP. Tremolux likewise has no
invented model name. 5E3 uses INST. / MIC. below the socket pairs.

These remain hand-drawn studies. Stroke modulation, precise curves, lettering
registration and microscopic legal text are approximate. This is a substantial
replacement for generic italic type, not a claim of exact historical artwork.

## What was actually inspected

Full-resolution local review copies were opened during this task. They remain
ignored under outputs; only source links and our own renders are retained.
Dates/serials below are dealer attribution, not independent authentication.

| Selected production example / source | Photograph opened | Visible wording and arrangement | Supported design decisions | Still approximate / unreadable |
| --- | --- | --- | --- | --- |
| [1965 Princeton Reverb A-03894, RetroFret 9339](https://retrofret.com/products/fender-princeton-reverb-tube-amplifier-1965-9339) | `outputs/princeton-review/front.jpg` (2000 px tall), `rear.jpg` | Princeton / Reverb-Amp; INSTRUMENTS; inputs 1, 2; VOLUME, TREBLE, BASS, REVERB, SPEED, INTENSITY; FENDER ELECT. INSTR. CO.; DESIGN & CIRCUITS / PATENTED | Rising connected script, open P bowl, looped ascenders; two-line title; small lower labels; top control ticks and thin perimeter | Patent number not reliably read and omitted. Exact paths, ink thickness and dimensions estimated. Raised-logo cabinet informs exterior; its replacement Weber/tank/tubes/filter can do not establish factory specifications. The second early-1965 specimen and AA1164 drawing remain separate evidence for speaker/tube decisions and did not supply title artwork. |
| [Early 1965 Deluxe Reverb, Folkway 5437](https://folkwaymusic.com/vintage-instruments/item/id.5437) | `outputs/references/knobs/deluxe.jpg`, 1200 × 1800 main photograph | Deluxe / Reverb-Amp; NORMAL / VIBRATO; inputs 1, 2 per channel; VOLUME TREBLE BASS / VOLUME TREBLE BASS REVERB SPEED INTENSITY; FENDER MUSICAL INSTRUMENTS | Two lines replace a generic single-line title; channel divider; narrow labels and small title footer | Individual curves/label weights inferred from mounted view, not a macro. The specimen lacks the modeled raised badge; this task does not change the assembly's established mixed-reference status. Tiny patent digits omitted. |
| [1968 Twin A-13834, RetroFret 13479](https://retrofret.com/products/fender-twin-reverb-ac-568-wfactory-jbls-large-combo-tube-amplifier-1968-13479) | `outputs/references/twin-master/03.jpg`, 1333 × 2000 angled front, cross-check `outputs/references/knobs/twin.jpg` | TWIN REVERB / -AMP; NORMAL / VIBRATO; BRIGHT; VOLUME TREBLE MIDDLE BASS / VOLUME TREBLE MIDDLE BASS REVERB SPEED INTENSITY | Narrow, heavy, upright block title, turquoise ink; two rounded channel enclosures, upper headings and input numbers below the sockets | Tiny manufacturer text and exact strokes estimated from angled photograph. Production Oxford assembly remains distinct from specimen/master JBL option. |
| [1962 brown Deluxe D02985, Music Emporium](https://themusicemporium.com/products/fender-6g3-deluxe-1962) | `outputs/expansion-references/brown-03.jpg` title, `brown-04.jpg` channels; `outputs/princeton-review/brown-rear.jpg` | Deluxe / -Amp; FENDER ELECT. INST. CO.; NORMAL / BRIGHT; 1, 2 repeated; VOLUME TONE / VOLUME TONE / SPEED INTENSITY | Script D with broad top sweep and descending stroke; separate -Amp; three panel fields; panel numbers 1–10; rear ON above switch | Paths and registration estimates. Service parts / cord not adopted as factory evidence. Tiny patent digits omitted. |
| [1957 5E3 Deluxe D-03176, Andy Baxter](https://www.andybaxterbass.com/products/1956-fender-deluxe) | `outputs/5e3-review/baxter-10.jpg` panel, `baxter-07.jpg`, `baxter-11.jpg` | GROUND; ON; TONE; INST. VOL.; MIC. VOL.; INST.; MIC.; 1–12 scales; 2 above 1 between socket columns | Fine ivory chrome-panel printing, socket-column names, row numbering, no faceplate model title | Inherited hardware error corrected: Tone/Instrument/Mic move right to 170/218/266 mm, socket columns to 316/351 mm, pilot to 124 mm. Ground switch (22), fuse (60) and power switch (92) now precede it. These are proportional photographic estimates, not measured dimensions. Damaged/worn fuse wording not reconstructed. |
| [1955 early Tremolux 5E9, RetroFret 10792](https://retrofret.com/products/fender-tremolux-model-5e9-tube-amplifier-1955-10792) | `outputs/expansion-references/tremolux-05.jpg`, 1000 × 667 top panel | OFF; DEPTH; SPEED; TONE; INST. VOL.; MIC. VOL.; 1–12; input row numbers | No model title on control plate; light narrow labels; stacked numbering | Lower socket headings and fuse text partly obscured / worn: INSTRUMENTS and FUSE remain estimates. No exact lettering claim. |
| [1959 Champ 5F1, RetroFret 8054](https://retrofret.com/products/fender-champ-amp-5f1-tube-amplifier-1959-8054) | `outputs/expansion-references/champ-05.jpg`, 1100 × 1650 top view | 2 AMP; OFF VOLUME ON; INSTRUMENTS; inputs 1, 2 above sockets; 1–12 scale | Delicate simple sans, single bottom rule, open space around pilot/fuse; no added model title | Thin strokes and scale positions estimated; stamped serial not copied into family study. |

Direct image links for Champ/Tremolux/brown are retained in
[SMALL_AMPS_REFERENCES.json](SMALL_AMPS_REFERENCES.json); Twin/Deluxe in
[references.json](references.json). Princeton front:
https://retrofret.com/cdn/shop/files/01_1c64f8d5-ccb9-4631-966d-57ed88104498.jpg?v=1774336169&width=1946
5E3 panel:
https://cdn.shopify.com/s/files/1/0002/7882/2974/products/IMG_4077.jpg?v=1573837764

No modern reissue/replacement panel supplied letter shapes in this task.
Modern cabinet dimension proxies remain as documented before this pass.

## Reusable source and licensing

`dist/library/panel-lettering.js` contains original script skeletons, broad
capital downstrokes, a compact sans alphabet, separate per-panel composition and
rear-strip composition. Canvas and SVG consume the **same** commands.
`dist/assets/panels/*.svg` are editable flat vector proofs; regenerate with
`node tools/typography/proofs.mjs`. No system or web font is needed, so there is
no font-loading race, font license dependency or platform substitution.
These original artwork sources and their generated SVGs are dedicated under
CC0-1.0; see `dist/assets/panels/LICENSE.txt`. This grant covers our drawings,
not Fender trademarks or third-party reference photographs.

`parts.js` uses these sources for all seven factories. `twin-panel-art.js`
retains its API for Blender texture generation. `rear-chassis.js` uses the same
small-letter system. Knob geometry, knob numerals/settings, jack/jewel geometry,
cabinet envelopes are unchanged. The 5E3 hardware layout is corrected from IMG_4077: ground/fuse/power/pilot precede Tone/Instrument/Mic, and its shared hotspot anchors follow the revised coordinates. Other hardware centers are unchanged. Rear ON labels move above
their switches; manufacturer text is separated into two lines. Rear wording and
case remain a readable approximation, not a tracing of every factory mark.

All front textures are 4096 pixels wide with proportional heights and mipmaps;
anisotropy is 8. GLB export limit is raised from 1024 to 4096 so the panel retains
that resolution. Text stays in an embedded material map, with hardware as
separate geometry. Vector sources remain available for higher-resolution use.
The exporter retains other source texture sizes; it does not upscale them.

## Current-task validation

- All five `npm test` scripts pass; identification checks now exercise every
  artwork source and compare the generated SVGs byte-for-byte. Missing glyphs
  and stale proofs fail. 23 catalog mappings and seven assemblies remain.
- Chrome 1440 × 1000: all seven plates flat, mounted front/angle and isolated
  front/angle; component close views; all seven ordinary detail routes; timeline;
  both rear strips. Before/after inspector pairs retain the same camera, fitting,
  lighting and exposure. GLB re-import views use their own larger review canvas
  and are not presented as matched before/after comparisons.
- Fresh documents were loaded between inspector hashes; changing only a hash
  does not rebuild this inspector. Page-error logs were empty in final runs.
- All seven actual panel downloads parsed as glTF 2, embedded 4096-wide PNG
  artwork, metre metadata, finite accessor bounds and material textures. All
  seven were reloaded through GLTFLoader and visually inspected. Export sizes
  range from 306,380 bytes (Champ) to approximately 18.8 MB (Twin); accepted
  skirted-knob geometry still dominates those large exports.
- Complete Princeton and brown Deluxe downloads retain rear lettering revision
  1.0: 16,878,432 bytes / 224 meshes and 6,010,416 bytes / 437 meshes respectively.
  These assembly binaries were parsed for rear metadata; panel binaries were
  additionally re-imported visually.
- 5E3 volume hotspot opens “The unused volume is still in the conversation.”
  after the hardware shift. Princeton opening/closing restores timeline offset
  exactly, 2477 px. Phone Princeton: viewport and document width both 390 px.
- `git diff --check` and JavaScript syntax checks pass. Review PNGs use LFS;
  no reference photos or downloaded GLBs are committed.

Passing checks establishes integration integrity, not historical fidelity or
owner visual acceptance. Next useful work is owner review of the script curves
against the linked photos, then measured artwork/registration where available.
The separate Blender master remains unchanged; its next intentional texture
refresh will consume the revised shared Twin source.
