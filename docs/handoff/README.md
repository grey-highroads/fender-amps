# Fender Amps handoff

Updated November 20, 2026. This is the starting point for continuing the Amplifier
Observatory without relying on the chat history.

**Current priority: educational construction, supported by real photographs.**
The user redirected the project away from photoreal asset production after
reviewing the workload. The 1968 Twin, blackface Deluxe Reverb and tweed 5E3 Deluxe now share the single-model explorer.
Accurate proportions and meaningful construction relationships matter; the
models remain interpretive and exact interior placement is not established.

## Read next

- [Decisions and user priorities](DECISIONS.md)
- [Architecture, validation and publishing](TECHNICAL.md)
- [Vercel hosting and update workflow](VERCEL.md)
- [Photographic references and evidence limits](REFERENCES.md)
- [Machine-readable photographic reference manifest](references.json)
- [Authoritative corrected catalog and snapshot](../../data/catalog/README.md)
- [Catalog reconciliation and remaining work](CATALOG_RECONCILIATION.md)

## Current state

| Area | State |
| --- | --- |
| GitHub | [grey-highroads/fender-amps](https://github.com/grey-highroads/fender-amps), branch `main` |
| Runtime baseline | Faceplate lettering 1.0 across seven assemblies; Princeton construction 1.0 / brown Deluxe rear 1.1; knob 0.4 retained |
| Hosting | [Public site](https://fendertubeamps.com), GitHub auto-deployment connected; preview URLs protected; [existing private Sites prototype](https://tweed-deluxe-observatory.breezy-lime-2897.chatgpt.site) retained unchanged. GoDaddy DNS connected. |
| Timeline | 208 catalog entries: seven colored construction studies and 201 gray WIP placeholders; about six visible on desktop, two on a phone |
| Source collection | Corrected 208-entry workbook is authoritative; all three tabs are snapshotted in `data/catalog/`; 208 timeline entries are mapped with explicit differences; no live sync |
| Library | 36 components/materials and seven reference assemblies |
| Fidelity | Procedural photographic studies, not certified replicas or a photoreal asset pack |
| Blender master | [1968 Twin A-13834, badge/panel pass 0.4](../../models/twin-1968/README.md); separate from production |
| Backend | None. Static HTML, JavaScript and vendored Three.js; no build or dependency installation required |

The original three reference assemblies are a 1957-style 5E3 Deluxe, a 1965-style blackface
Deluxe Reverb, and a 1968 early silverface Twin. The timeline uses introduction
years, so its 1955 Deluxe and 1963 Deluxe Reverb cards use later photographed
examples as construction references. Keep introduction year, production range,
reference-specimen year, and modern reissue year distinct.

The other timeline entries remain representative studies. They are not all
connected to individually verified historical assemblies.

The [corrected source spreadsheet](https://docs.google.com/spreadsheets/d/18bzOLj0RdEdjSneLXf9USwPAM5Zs7IRoAFwKpWmkBJw/edit)
supersedes the earlier workbook by user instruction on November 20, 2026.
The [tracked snapshot](../../data/catalog/README.md) preserves 208 catalog entries,
58 change records and 36 scope/source records, including review and price
confidence fields. Pricing and rarity remain research estimates. This is a
point-in-time copy, not live synchronization or independent verification.
Selected-year configurations still require period evidence; see the
[reconciliation notes](CATALOG_RECONCILIATION.md) for the early Twin and Bassman.

## Full catalog timeline

All source rows now appear on the timeline. Gray generic amps open spreadsheet-only
notes; seven modeled amps retain their colored studies and explorers. See
[implementation, validation and evidence limits](FULL_TIMELINE.md).

## Faceplate lettering 1.0

Seven shared panels now use original vector artwork: connected Princeton and
Deluxe script, an upright block Twin title, era-specific labels, input numbers,
scales, dividers and small manufacturer text. Princeton / brown rear strips use
matching vector labels. The 5E3 photo also justified correcting its shared
left-side hardware/control positions, opening its top-board recess and correcting the rear-reading plate orientation; hotspot anchors follow automatically.
Knob 0.4 and existing explorer behavior remain intact.

Start with the [flat comparison](images/typography/flat-comparison.png),
[annotated visual reference sheet](../../tools/typography/reference-sheet.html),
and [sources, limits and validation](FACEPLATE_TYPOGRAPHY.md).
These are lettering studies, not authenticated vintage tracings. Fine curves,
registration and tiny legal marks remain approximate.

## Most recent fidelity work

The shared black/silver skirted 1–10 knob was rebuilt from dated vintage amp
photographs, with isolated modern replacement photographs as secondary evidence.
Revision 0.2 adds a continuous shallow skirt, narrower finely fluted grip,
individually drawn numerals on the curved skirt, recessed silver center, side
set screw and open rear shaft socket with a metal insert. The previous floating
number plane, chunky grip blocks and raised pointer bar were removed.

The same builder supplies both the Deluxe Reverb and early Twin in the library,
timeline and detail views. The tweed Deluxe uses the separate chicken-head knob,
which was not refined in this pass. The inspector uses a longer lens for the
small skirted knob; the shared studio reflection environment gained a fill card.

- [Inspect the knob](https://tweed-deluxe-observatory.breezy-lime-2897.chatgpt.site/components.html#knob-skirted)
- [Inspect the assembled Twin](https://tweed-deluxe-observatory.breezy-lime-2897.chatgpt.site/components.html#amp/twin-reverb-early)

| Previous study | Photographic revision 0.2 |
| --- | --- |
| ![Previous skirted knob](images/knob-before.jpg) | ![Rebuilt skirted knob](images/knob-after.jpg) |

These are rendered review images, not photographs. Inspection lighting and lens
also changed, so the pair is a qualitative comparison, not a controlled benchmark.

Revision 0.4 is published on the existing owner-private prototype; see
TECHNICAL.md for separate GitHub and Site source revisions.

## November 20 continuation: revision 0.3

The same shared builder now uses adequately sampled, broader flutes that fade
before the continuous top lip, slightly taller/heavier ivory numerals, a plain
stroke 1 and separated snowman-style 8 loops. The silver dish is deeper and less
rough, producing a clearer moving reflection. Overall diameter, height, taper,
skirt profile, screw position and rear construction were retained: the inspected
vintage photographs do not justify further dimensional claims.

| Matching setup: revision 0.2 | Revision 0.3 |
| --- | --- |
| ![Before](images/knob-v02-controlled.png) | ![After](images/knob-v03-angle.png) |

Camera, scale, environment, lights and exposure are unchanged in this pair.
The cap curvature and material changed; the studio did not. See REFERENCES.md
for the evidence limits and TECHNICAL.md for current-task validation.

## Revision 0.4: user-directed lettering correction

The user found revision 0.3 better, but correctly identified upside-down numerals.
Each complete number, including 10, is now rotated 180 degrees in place so its
bottom faces the knob center. Stroke weight increases slightly from .145 to .16
(about 10%). Shared geometry, positions, camera and lighting are unchanged.
This corrects the previous review's mistaken acceptance of print orientation.
Exact vintage glyph outlines remain provisional.

![Corrected inward-facing numeral bottoms](images/knob-v04-front.png)

## Current direction: one complete amp as the master

The user accepted knob 0.4 for now and asked to begin a complete Blender amp to
establish relative scale and harvest reusable components. The selected first amp
is a 1968 early silverface Twin with the period-documented JBL D120F factory
option. RetroFret A-13834 supplies photographic detail, not authority for standard
equipment. Revision 0.2 replaced the specimen casters with estimated metal glides.
The dealer-based cabinet envelope conflicts with Fender catalog dimensions and
is explicitly unresolved; detail dimensions and accessory inclusion remain estimates. See the [master record](../../models/twin-1968/README.md).

An editable `.blend`, metre-scale `.glb`, named reusable objects, generated maps,
dimension ledger and separate browser review now exist. This is master 0.4, an
assembly foundation, not a completed faithful replica. The production library
and private site retain knob 0.4 and now share the refined Tolex/grille material
source with Blender; the Oxford-equipped
production Twin is distinct from this JBL-option master.

## First photographic surface pass

Shared surface study 0.1 replaces the coarse polygonal Tolex with finer curved
grain and refines the silver/aqua cloth into layered strands with normal,
roughness and selective metallic response. One generator feeds the browser
library and exported Blender maps; black Tolex improves on both reference amps,
while the silver/aqua cloth applies to the Twin. Geometry and dimensions did not
change. No photo pixels or baked wear were added.

| Before | After (same browser setup) |
| --- | --- |
| ![Before surfaces](images/surfaces-before-angle.png) | ![Refined surfaces](images/surfaces-after-angle.png) |

Color, pitch, relief and material response remain estimates from uncalibrated
vintage photographs. The cloth is a surface-map study, not actual woven geometry.
Blender's Cycles preview exposure separately changed to -2 EV; the browser pair
keeps camera, scale, environment, lights and exposure unchanged.

## Raised badge and Twin panel pass

Badge study 0.1 replaces the flat wordmark with an inclined, tail-style painted
backing, raised silver strokes, rounded bevels and provisional mounting points.
The shared factory reaches both reference amps. The Blender master imports its
actual shared GLB export, rather than using a separate logo card.

Twin panel study 0.1 adds a condensed two-line TWIN REVERB / -AMP title, upper
channel headings, input numbers, bright labels and channel outlines. Its normalized
layout/artwork source supplies both the production component and Blender maps;
original dimensions, exact typefaces and registration remain unverified.

| Before | After (same browser setup) |
| --- | --- |
| ![Prior badge](images/identification-before-badge.png) | ![Raised tail badge](images/identification-after-badge.png) |

The silhouette and stroke geometry are our approximate vector study, guided by
the dated Twin and modern replacement construction photos. They are not an exact
vintage tracing. No reference-photo pixels were embedded. Camera and lights are
unchanged; badge placement and mounting depth intentionally changed.

## Single-model feature explorer

Open the [Twin explorer](https://tweed-deluxe-observatory.breezy-lime-2897.chatgpt.site/?amp=twin-1968).
The user approved simplifying to one assembled model: Cabinet / Inside modes and
the old exploded-view controls are removed. Rear panels remain in place. Rotate
or use Front/Rear camera shortcuts to find features. These are views of the same
model, not construction modes.

Eight model-attached hotspots cover inputs, reverb, vibrato/tremolo, grille cloth,
drip edge, speakers, power tubes and output transformer. Hover/focus reveals
marker names. A native “Explore a part” menu provides all topics and turns toward
the appropriate side. Markers on the far side or behind geometry disappear;
small leaders separate nearby control markers without changing their anchors.

Speaker and tube cards retain credited representative photographs, distinguished
from actual vintage parts. New cosmetic cards use period and specimen source
links; no dealer photography is redistributed. Tone hypotheses remain labeled.

![Single-model hotspots](images/hotspots-front.png)

## Specialist hotspot cards

The audience is experienced amp enthusiasts. Lead with a distinctive insight
and its consequence, not basic control operation. The eight cards now cover:
input-pad loading and first-stage clipping before Volume; the reverb channel’s
3.3 MΩ / 10 pF dry network and mixer; optical tremolo after the dry/wet mix;
AC568 cathode resistance alongside negative grid bias; shared transformer
designations across circuit revisions; JBL-option construction versus unknown
Oxford measurements; and cosmetic/restoration evidence limits.

Use “Why it matters” and expandable “Follow the circuit” notes. Cosmetics use
“The collector angle.” Mandatory speculative Fender-choice paragraphs were
removed. Representative photo credits and explicit circuit/specimen limits
remain available in sources. The AC568 and AB763 drawings were inspected in
this pass; the physical amp’s complete circuit and tank remain unauthenticated.

![Specialist input-stage card](images/geek-inputs.png)

## Blackface Deluxe Reverb treatment

[Explore the Deluxe Reverb](https://tweed-deluxe-observatory.breezy-lime-2897.chatgpt.site/?amp=deluxe-reverb-1965).
The 1963 introduction entry still uses a 1965-style reference assembly. Nine
topics cover inputs, the fixed bright capacitor, reverb, optical tremolo, cloth/
badge history, Oxford speaker evidence, 6V6 power section, GZ34 rectifier and
output transformer. Wording is musician-first, with values and caveats in deeper
notes. The existing Twin also gains lighter phrasing and “Dig a little deeper.”

One explorer mounts an amp-specific profile; cards/markers reset when switching
amps. The shared Deluxe assembly now separates two power tubes, six small tubes
and a rectifier, plus an estimated transformer marker. This is explanatory
placement, not a verified socket layout. The generic speaker photograph is
explicitly representative; the Twin's 6L6 photograph is not reused for 6V6s.
The model still combines multiple references and does not reproduce the early
Folkway specimen's badge-less front.

![Deluxe bright-cap card](images/deluxe-bright-cap.png)

## First expansion batch

The Champ (1959-style 5F1), early Tremolux (1955-style 5E9) and brown Deluxe
(1962-style 6G3) now share a parameterized construction factory across the timeline,
detail view and component inspector. The timeline uses introduction years 1958,
1955 and 1961 respectively. These are exterior/construction studies, with deeper
hotspots deferred to the parallel research pass. See [modeling evidence, dimensions,
validation and remaining uncertainty](SMALL_AMPS.md).

## Next useful work

1. Repository maintenance is complete: 19-entry catalog mapping, all five
   checks, and approved LFS migration. See [recovery and collaborator
   instructions](LFS_MIGRATION.md) before using an old working copy.
2. Next: Princeton Reverb AA1164 hotspot content on its new shared assembly,
   then review the Super Reverb AB763 treatment. The 5E3 explorer is published.
3. Establish source-backed interior positions and model-specific authorized
   photos as the profiles expand. Keep variants, measurements and specimen
   evidence distinct.

## Handoff maintenance

Keep this file as a concise current-state summary. Put durable rationale in
DECISIONS.md, operational details in TECHNICAL.md, and evidence in REFERENCES.md
and references.json. Update the runtime baseline and validation notes when the
implementation changes. Documentation-only commits do not change that baseline.

## Repository maintenance prerequisite

All 19 runtime entries are now mapped to the corrected CSV in
[data/catalog/TIMELINE_MAPPING.md](../../data/catalog/TIMELINE_MAPPING.md). Three
entries have explicit scope/date/rating differences. `npm test` runs all five
root check scripts and validates mapping coverage/source identity. Install Git
LFS and run `git lfs pull` before tests in a new clone.

Models (`*.blend`, `*.glb`) and `docs/handoff/images/**` now use LFS throughout
the migrated history. A fresh remote clone fetched all 66 historical objects and
passed all five checks. The working checkout is aligned; verified backups remain
under .maintenance/backups/. See [migration and recovery](LFS_MIGRATION.md) and
translate original handoff SHAs using [LFS_COMMIT_MAP.csv](LFS_COMMIT_MAP.csv).
Other old clones should be refreshed before work resumes.

No amp expansion, runtime values, interface or private-site publication changed
in this maintenance pass. The `dist/` structure remains in place.

## Tweed 5E3 explorer

Nine cards, top-panel camera navigation and five differentiated tubes are now in
the shared assembly. See [5E3 evidence, validation and limits](5E3_EXPLORER.md).
The catalog remains 22 entries; Princeton research is still separate.

## Princeton and brown Deluxe rear

The Princeton Reverb now has a 1964 timeline entry and shared 1965-style
construction assembly, mapped to catalog row 67. Its deeper explorer is next.
The brown Deluxe rear has the photographed upper opening and chassis hardware.
See [evidence, validation and limits](PRINCETON_BROWN_REAR.md).
