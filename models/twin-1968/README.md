# 1968 Twin Reverb master — first assembly pass

Target: RetroFret specimen A-13834, early silverface/drip edge, dealer-attributed
factory JBL D120F speakers. This is **master 0.1**, an editable dimensional and
assembly foundation, not a finished high-fidelity replica.

- [Blender master](twin-1968-master.blend)
- [Browser export](twin-1968-master.glb)
- [Dimension/provenance record](dimensions.json)
- [Browser front review](../../docs/handoff/images/twin-master-front.png)
- [Browser angled review](../../docs/handoff/images/twin-master-angle.png)
- [Mounted knob round-trip review](../../docs/handoff/images/twin-master-knobs.png)
- [Browser rear review](../../docs/handoff/images/twin-master-rear.png)

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
| Height excludes casters/handle in this first model | Photographic interpretation; dealer does not specify inclusion |
| Taper, wall thickness, openings, hardware positions | Modeling estimates from the photographed specimen |
| Knob 0.4 | Actual GLB export from shared builder; user accepted appearance for now; exterior measurements remain estimates |
| JBL frame/motor/cone | Provisional shape and envelope from rear photo; not manufacturer dimensional drawings |
| Covering, cloth, panel and badge maps | Our generated studies; no third-party photograph is embedded |

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
changes. Other new parts have not yet replaced the production shared library.

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

## Remaining work before production integration

1. Compare orthographic silhouettes/openings to the references and resolve whether
   stated height includes accessories. Seek original panel/cabinet measurements.
2. Refine covering grain/sheen, cloth thread structure and colors, panel lettering,
   raised Fender casting/backing, JBL emblem and mounting details.
3. Refine JBL motor/basket/label, rear ports, cable routes and hardware. Tube and
   circuit-board internals are not modeled in this first pass.
4. Optimize the exported geometry and establish a mobile detail level. This review
   mesh has roughly 818k rendered triangles, mostly repeated detailed knobs.
5. Adapt the browser loader and existing cabinet/face/chassis animation contract,
   then validate the library, timeline and detail views before publishing.

The model is deliberately reviewed separately while those steps are unfinished.
The existing private prototype remains on accepted knob revision 0.4.
