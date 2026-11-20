# 1968 Twin Reverb master — first assembly pass

Target: a 1968 early silverface/drip-edge Twin in a documented factory JBL D120F
option configuration. RetroFret A-13834 remains a photographic reference.
This is **master 0.3**, an editable dimensional and
assembly foundation, not a finished high-fidelity replica.

- [Blender master](twin-1968-master.blend)
- [Browser export](twin-1968-master.glb)
- [Dimension/provenance record](dimensions.json)
- [Browser front review](../../docs/handoff/images/twin-master-front.png)
- [Browser angled review](../../docs/handoff/images/twin-master-angle.png)
- [Mounted knob round-trip review](../../docs/handoff/images/twin-master-knobs.png)
- [Browser rear review](../../docs/handoff/images/twin-master-rear.png)

## Factory configuration takes precedence

The user clarified that the goal is what Fender produced, rather than every
feature on one surviving amp. Revision 0.2 removes the casters and uses four
estimated metal glides. The [1968 Fender catalog specification scan](https://www.vintageguitarandbass.com/fender/catalogues/1968_32.php)
confirms JBL D120F speakers as an extra-cost option; its [adjacent product photo](https://www.vintageguitarandbass.com/fender/catalogues/1968_33.php)
shows a Twin without casters. A [secondary historical compilation](https://www.tandj.net/cnjradio/fenderamps/twin_reverb_sf.html)
corroborates glides for 1968–71. We do not claim the catalog proves every production
exception, or that the reference specimen's casters are definitively aftermarket.
The dealer's originality claim does not independently establish factory fitment.

JBL remains explicitly an option, not standard equipment. No unresolved supplier
variant is silently presented as the universal 1968 specification.

## Why this amp

The [dated RetroFret specimen](https://retrofret.com/products/fender-twin-reverb-ac-568-wfactory-jbls-large-combo-tube-amplifier-1968-13479)
has front, rear, angled and exposed-chassis photographs, stated dimensions and
explicit originality claims for knobs and speakers. Its hardware and construction
provide a useful starting family for other black-panel and silver-panel amps.
Actual compatibility must be checked part by part; cabinet, panel, speaker and
cosmetic variants must not be treated as interchangeable.

The existing Observatory Twin study uses Oxford speakers. This Blender master
instead represents the selected JBL-option specimen. It does not silently change
the app's assembly selection or generalize JBL equipment to all 1968 Twins.

## Scale and evidence

| Quantity | Basis |
| --- | --- |
| 666.75 W × 508 H × 260.35 D mm | Exact conversion of dealer-reported 26¼ × 20 × 10¼ inches; not independently measured |
| Cabinet envelope | Dealer-specimen proxy, now explicitly unresolved against differing period catalog dimensions |
| Four metal glides | Period photograph supports no casters; exact foot shape/size/position are estimates |
| Taper, wall thickness, openings, hardware positions | Modeling estimates from the photographed specimen |
| Knob 0.4 | Actual GLB export from shared builder; user accepted appearance for now; exterior measurements remain estimates |
| JBL frame/motor/cone | Provisional shape and envelope from rear photo; not manufacturer dimensional drawings |
| Covering, cloth, panel and badge maps | Our generated studies; no third-party photograph is embedded |

The 1968 catalog lists **673.1 W × 520.7 H × 247.65 D mm**, differing from the
current dealer-based envelope. Both values and their sources are retained in
dimensions.json. Do not call the current geometry's size a verified factory
measurement; reconcile the discrepancy before approving the dimensions. Catalog
specifications and imagery may span a model transition.

Blender uses metres internally, displays millimetres, and exports a metre-scale
GLB. X is width, -Y faces forward, Z is up in Blender. glTF converts this to X
width, Y up, +Z forward. Applied cabinet bounds in the browser are within 0.1 mm
of the declared envelope; this confirms scale transfer, not measurement accuracy.

## Editable organization and reuse

Named collections hold cabinet, front/grille, chassis/controls, JBL speakers,
hardware and a separate review studio. Objects and modifiers remain editable.
Repeated knobs link the same imported mesh/material data from the accepted shared
component, rather than re-modeling it in Blender. Its bridge file is
`source/knob-skirted-v04.glb`; regenerate from the inspector if the shared knob
changes. The Tolex and silver/aqua cloth now share their generator with the production
library. The new assembly geometry remains separate from production.

The GLB contains the amp only, excluding review lights, camera and floor. The
Blender file packs generated images and uses Blender's built-in font. Do not pack
or commit the dealer photographs. Reference photographs live in ignored
`outputs/references/twin-master/` and are for comparison only.

## Reproduce and review

The generator bootstraps this initial master. **Do not rerun it over subsequent
manual Blender edits** without saving a separate copy; it writes the master file.
From the repository root, with Blender available:

```
/Applications/Blender.app/Contents/MacOS/Blender --background --factory-startup --python tools/blender/build-twin-master.py
node checks/blender-master.mjs
```

The texture generator uses Playwright and an installed Chromium browser; configure
`PLAYWRIGHT_MODULE` and optionally `CHROME_PATH` for local paths. Generated maps
are already committed, so rebuilding the model does not require regenerating them.
The source knob bridge is already included.

For browser QA, serve the repository root (not only dist) on a local HTTP port and
open `/tools/blender/review.html`. It uses the app's Three.js r181 and studio
environment with a matching vendored GLTFLoader, with a separate gray review
background and camera. It is a development review page, not a production app view.

## Surface study 0.1

`dist/library/photographic-surfaces.js` generates the same physical surface model
for the browser and Blender. `surface-settings.json` records tile size and PBR
strengths. Browser maps use 512 px; the Blender source maps use 1024 px. Relief is
encoded into tangent normals, not geometric displacement. Fine curved Tolex grain
replaces coarse polygonal cracks. The cloth adds warm weft, silver warp, an aqua
tracer, smaller intervening strands, normal/roughness maps and selective metallic
response. The 24 mm tile, 3/2 mm major stripe pitches and relief remain estimates.
No source photograph pixels, scratches or aged stains are incorporated.

Use `node tools/blender/create-twin-textures.cjs --surfaces-only` with the documented
Playwright environment to regenerate only these maps and preserve panel/badge
artwork. `node checks/surfaces.mjs` checks source/Blender setting agreement and
map integrity. Browser before/after review images use identical camera/light/
exposure. Cycles preview exposure was separately lowered by 2 stops; Blender and
browser remain different inspection setups and are not a calibrated color match.
The Blender studio still gives stronger broad highlights on black vinyl than
the browser; that lighting needs separate calibration before judging material
color from a Cycles screenshot.

## Remaining work before production integration

1. Reconcile conflicting period catalog and specimen dimensions (including
   accessory inclusion) against original measurements before approving scale.
2. Refine covering grain/sheen, cloth thread structure and colors, panel lettering,
   raised Fender casting/backing, JBL emblem and mounting details.
3. Refine JBL motor/basket/label, rear ports, cable routes and hardware. Tube and
   circuit-board internals are not modeled in this first pass.
4. Optimize the exported geometry and establish a mobile detail level. This review
   mesh has roughly 812k rendered triangles, mostly repeated detailed knobs.
5. Adapt the browser loader and existing cabinet/face/chassis animation contract,
   then validate the library, timeline and detail views before publishing.

The model is deliberately reviewed separately while those steps are unfinished.
The existing private prototype remains on accepted knob revision 0.4.

Historical note: master 0.1 (commit e384248) copied the specimen's casters. That
was not sufficient evidence for factory fitment. Its screenshots in Git history
are superseded by the current feet-equipped review views.
