# Architecture validation and publishing

## Start locally

The dedicated workspace is `~/Documents/ChatGPT/Fender Amps`, cloned from
`https://github.com/grey-highroads/fender-amps.git`. Treat that GitHub repository
as the canonical source. Older implementation and publishing checkouts exist in
the previous Codex workspace; avoid continuing ordinary development there.

```sh
npm start
npm test
```

`npm start` uses Python 3 to serve `dist/` on `http://127.0.0.1:4173`.
Node.js 20 or newer runs the checks. No npm installation or build is needed.
`package.json` being private prevents package publication; it does not describe
GitHub repository visibility.

Useful routes are `/`, `/components.html#knob-skirted`, and
`/components.html#amp/twin-reverb-early`.

## Code map

| File | Responsibility |
| --- | --- |
| `dist/index.html`, `collection.css`, `collection.js` | Timeline entries, shared-year groups, visible amp rendering, detail overlay and scroll/focus restoration |
| `dist/app.js` | Detail renderer, orbit/view controls, light and illustrative exploded-view behavior; also retains an older prototype base mesh |
| `dist/amp-models.js` | Amp construction; selects the three reference assemblies and falls back to representative studies for other entries |
| `dist/components.html`, `library/library.css`, `library/library.js` | Inspector, filters, shared assemblies, source notes, catalog/texture/GLB export and component deep links |
| `dist/library/catalog.js` | Sources, materials, parts, speaker records, assembly selection and component usage |
| `dist/library/parts.js` | Shared hardware, faceplate, badge and speaker factories; delegates the skirted knob to its dedicated builder |
| `dist/library/knob-profile.js` | Knob revision 0.2 profile, estimated dimensions, number layout/vector strokes and photographic provenance |
| `dist/library/knobs.js` | Knob body, ink surface, cap, insert and screw geometry/materials |
| `dist/library/materials.js` | Procedural color, normal and roughness maps and physical-scale UV projection |
| `dist/library/studio.js` | Shared generated reflection environment; changing it affects multiple materials and views |
| `dist/vendor/` | Vendored Three.js 0.181.0, orbit controls, GLTFExporter and its license |
| `checks/library.mjs`, `checks/knob.mjs` | Catalog, provenance, load/clearance and knob geometry integrity checks |

The common knob path is:

```text
Inspector: createComponent → createKnob → createSkirtedKnob
Amps: collection → createAmpModel → assemblyFor → createFaceplate
      → createKnob → createSkirtedKnob
```

The connected assemblies are the 1955-introduction Deluxe card using a 1957
reference, the black-panel Deluxe Reverb card using a 1965 reference, and the
1968 early silver-panel Twin. Do not assume every amp with a similar finish uses
these profiles. `assemblyFor()` is the actual selection logic.

## Geometry and resource conventions

- Parts use millimetres. Positive Z faces the viewer/front; speakers extend from
  their mounting plane toward negative Z.
- Amp scenes use 0.17 Three.js units per inch. `MM = .17 / 25.4` converts parts
  into that scene. GLB exports convert components and assemblies to metres.
- `createAmpModel` returns children in cabinet, face/baffle, chassis order.
  The detail animation addresses children 1 and 2 directly for exploded views.
  Preserve this contract or update its consumer together.
- Maintain the distinction between source-backed measurements, null/unknown
  dimensions and estimated speaker rendering envelopes under `build`.
- Canvas templates may be cached, but GPU textures/materials belong to model
  instances. Dispose replaced instances and their maps without invalidating
  objects still used by other scenes. Include normal and roughness maps.
- The timeline uses a shared scissored renderer, not one renderer per card.
  The detail view and component inspector have separate renderers.
- Local reference photographs are ignored under `outputs/`; they are not served
  as app textures. The GLB contains generated geometry/materials and provenance
  metadata, not a photograph or scan of an original part.

## Validation evidence

Runtime baseline `1e95925` passed `npm test`. The prior runtime task also checked
JavaScript syntax, desktop and 390-pixel mobile layouts, the knob's front/rear/
angled views, both reference amp detail views, exact timeline scroll restoration,
and browser error logs. The knob GLB export was inspected as glTF 2.0 with eight
meshes, revision 0.2 metadata and metre conversion. This is historical evidence,
not a substitute for running checks after a new change.

For another fidelity revision, run the applicable checks and inspect the same
component both isolated and mounted. Compare with the original references under
understandable lighting and camera angles. Check downloads when export-related
code changes. No active GitHub Actions workflow runs these checks automatically.
The optional template is `docs/github-actions/checks.yml`.

During the November 20 handoff task, `npm test` also passed in the fresh dedicated
workspace. Local Markdown links, committed image paths and the photographic
manifest’s source IDs were checked. No application code changed in that task.

## GitHub and private site deployment

GitHub pushes and Sites deployment are separate operations with different source
histories. The public repository is `grey-highroads/fender-amps`; the earlier
`greygarnerpro/Fender-Amps` destination was superseded.

The existing owner-private site is:

https://tweed-deluxe-observatory.breezy-lime-2897.chatgpt.site

The last verified runtime publication used Site source commit
`606043e9c6a6187ce39157cc32170bfb428d7248`, corresponding to GitHub runtime
`1e95925`. Its deployment was `appgdep_6affdd392ca48191ae66d258d3b91aa4` and
completed successfully. A ChatGPT sign-in screen is the expected access gate,
not evidence of a failed deployment. Local browser QA was completed; the gated
production UI was not inspected after authentication.

When publishing a runtime change:

1. Read the currently installed Sites skill and tool schemas. Reuse the exact
   project ID in `.openai/hosting.json`; do not create a replacement Site.
2. Read the current Site audience and obtain its short-lived source credential.
   Preserve owner-private access unless the user changes the audience.
3. Use a separate Sites publishing checkout. The older publisher checkout was
   named `amp-observatory`; a new ignored `.site-publish/` checkout is another
   option. Do not assume the GitHub and Sites histories can fast-forward together.
4. Open that checkout through the supported Sites source helper, then synchronize
   the checked runtime and required source/check files from the canonical repo.
   Preserve the Site manifest binding and never copy Git metadata between repos.
   Verify the synchronized files match the tested source.
5. Use the helper to check/package/commit/push its exact source and produce the
   deployment archive outside the checkout. Keep credentials in memory and pass
   them through stdin, never arguments, files or documentation.
6. Save/deploy the exact returned Site commit/archive, using the owner-private
   operation when that audience is confirmed. Verify terminal deployment status.
7. Record the GitHub and Site source revisions separately in this handoff.

GitHub previously rejected creation of an active workflow because the available
OAuth credential lacked `workflow` scope. The app was pushed successfully with
the workflow preserved as a documentation template. Do not block ordinary
component work on adding CI or silently enable a deployment workflow.

Documentation-only handoff updates do not require republishing the prototype.

## Revision 0.3 current-task validation

November 20 continuation: npm test, JavaScript syntax checks and git diff --check
passed. Browser review used installed Chrome, 1440 × 1000, unchanged inspector
camera/light/environment. Inspected front, rear, angled and near-side views;
both reference assemblies; both timeline/detail entries; and exact scroll
restoration after closing each detail. No page errors were recorded. The GLB
export parsed as glTF 2, eight meshes, revision 0.3, metres, 1,682,224 bytes.
These checks establish integration/export integrity, not historical accuracy.

A fresh browser document was loaded for each assembly: changing only the hash
in an already-open inspector does not rebuild its initial deep-linked asset.
No app navigation behavior was changed for this task.

GitHub runtime revision: `c969ce9` (revision 0.3).

Revision 0.3 publication completed successfully through the owner-private Sites
operation, preserving the existing project and audience. Site source:
`fbb726f9f6c9ff208b1dae1b00703ba6bd5f0c77`; deployment:
`appgdep_6b0045ec965081918b181323210fb34e` (`succeeded`). GitHub runtime remains
`c969ce9`; review/handoff commit `81ecd35`. Browser checks were local; production
publication was confirmed by the deployment service, not a signed-in UI review.

## Revision 0.4 current-task validation

npm test, knob JavaScript syntax and diff whitespace checks passed. Browser
review inspected the corrected numeral orientation and modest weight increase
in front/angle views, plus rear/near-side integrity and both mounted reference
assemblies. No page errors. Camera, scale and lighting are unchanged. The actual
browser GLB export parsed as glTF 2, revision 0.4, eight meshes, metres; 1,682,404
bytes. These checks do not establish historical authenticity.

Revision 0.4 runtime commit: `1d93ffd`. Site source commit:
`1072c53534b462b652084a5a8ccab1d73ac4c596`. Owner-private deployment
`appgdep_6b0047070b348191b111ad96e1c2f8ca` succeeded. Production confirmation
comes from the publishing service; visual review was local.

## First Blender master (November 20)

`models/twin-1968/` holds the editable master, GLB, shared knob 0.4 bridge,
packed/generated texture sources and dimension ledger. `tools/blender/` holds
the initial generator, portable browser review page and saved-file checker.
The installed live MCP connection was not available; installed Blender 5.2.2 LTS
was run as a separate background process, without touching an interactive scene.

Internal units are metres, displayed in millimetres. Blender X/-Y/Z maps to glTF
X/+Z/Y. The initial geometry includes a continuous tapered open shell, separate
rear panels, real baffle apertures, shared knob instances, JBL-option speaker
studies and named hardware. Review floor/cameras/lights are excluded from GLB.
The script bootstraps this baseline; do not overwrite future manual Blender edits
by regenerating without first saving a separate copy.

Current task: npm test passed; generator/texture-source syntax checked; GLB check
`node checks/blender-master.mjs` passed. Actual browser GLTFLoader review covered
front/angle/rear/side, with no page errors. Browser cabinet bounds agree within
0.1 mm with the ledger. Saved-file checks verify metre units, 11 linked knob
bodies and packed image availability. Roughly 818k rendered triangles / 6 MB GLB
requires optimization before mobile/production integration. This is scale and
transfer evidence, not historical or photoreal acceptance.

The separate review uses existing studio environment plus its own gray background,
lights and camera; Blender uses its own Cycles photographic studio. They are not
matched lighting comparisons. The Blender studio currently makes the black
covering appear too gray; browser finish also remains a study. No production
runtime changed and no Site publication is needed for these source/review assets.

Mounted knob close-up also reviewed after the Blender round trip: numeral
orientation and shared 0.4 profile retained. See images/twin-master-knobs.png.

## Master 0.2: factory-configuration correction

The user clarified that Fender production configuration governs the model.
The generator, `.blend` and `.glb` now use four estimated metal glides and exclude
casters. Root metadata identifies the factory JBL option, instead of presenting
the full dealer specimen configuration as a factory baseline. JBL option status
is supported by a newly inspected period Fender catalog. Unresolved catalog/dealer
dimensions are both retained in the ledger; the geometry still uses the explicitly
provisional dealer envelope. This task did not silently rescale the cabinet.

Current validation: npm test and GLB integrity checks passed; saved-file checks
confirm four glides, no caster objects, metre units, linked knob bodies and packed
images. Actual Chrome GLB review inspected front, angle, rear, side and mounted
knob close-up with no page errors. Export: 158 mesh definitions, 237 rendered
mesh instances, 812,428 triangles, 5,766,604 bytes. Review images supersede the
caster-equipped master 0.1 captures. Inspection cameras and browser lighting are
unchanged; the Blender studio floor was raised to the new foot level. Geometry,
lighting and screenshot checks do not constitute full factory accuracy.

Production app and private Site remain unchanged on knob revision 0.4. Only
separate master/review/source assets changed, so no Site republishing is needed.

## Shared photographic surface pass (runtime 60e2e95)

`dist/library/photographic-surfaces.js` is a DOM-free source for Tolex and silver/
aqua cloth map data and physical tile/PBR settings. `materials.js` converts it to
cached canvas templates, then instance-owned GPU textures. The Blender texture
helper imports the same generator, writes 1024 px maps and surface-settings.json;
the master consumes those settings/maps. New metalness maps are disposed in both
library and detail cleanup paths. Other material families retain their existing
builder. The production Twin remains Oxford-equipped; shared surfaces do not
replace it with the separate JBL master.

Current checks: npm test, surface settings/map/normal checks and GLB integrity
passed. Browser QA covered both material close-ups, both reference assemblies,
timeline/detail views and scroll restoration, and 390 px layout, without page
errors. Exported cloth GLB is glTF 2, 631,888 bytes, with embedded normal and packed
metallic/roughness textures. Saved Blender master retains metre units, four glides,
11 linked knobs and no missing image files; its GLB remains 237 mesh instances /
812,428 rendered triangles. Texture resolution raises master GLB size to about
10 MB; optimize before production integration of the full assembly.

The matched browser before/after views keep all camera and illumination settings.
The Cycles-only preview exposure change to -2 EV is separately documented. Runtime
studio environment and inspector lighting are unchanged. The source generator
produces estimates, not measured vintage textures or certified photoreal assets.

Surface publication succeeded while retaining owner-only access. GitHub runtime
`60e2e95`, model/evidence `f30908e`; Site source
`189c886dabd26f2a2b21587320650239f1403e95`; deployment
`appgdep_6b0052380c288191bfcf765e2f544601` (`succeeded`). The full Blender assembly
remains a separate review artifact; the production library/timeline/detail use
its shared surface source on their existing assemblies. Production status was
confirmed by Sites; visual QA was local, not a signed-in production UI review.

## Shared badge and Twin panel study (runtime 452a94d)

New source: identification-profile.js, twin-panel-art.js, tail-badge-contours.js
and tail-badge.js. Contours are generated from our own path study through the
matching vendored SVGLoader in tools/blender; a signature check detects stale
contours. The synchronous shared badge builder adds real extruded backing/holes,
raised beveled strokes and provisional screw heads. Painted faces and chrome
edges use multiple materials. Detail cleanup now uses shared disposeObject;
its former single-material path failed on this layered mesh and was corrected.
Actual amp switching was repeated with no errors after that fix.

The Twin factory uses common normalized positions/artwork, with instance-owned
textures from cached canvas templates. Color, metallic mask and roughness are
exported for Blender. Its master imports the actual badge GLB and shared panel
maps. Other panel families and accepted knob geometry/art remain unchanged. The
full master remains separate from the production Oxford-equipped assembly.

Current task: npm test, identification geometry/layout/source checks, GLB checks,
JavaScript syntax and diff checks passed. Browser inspection covered badge front,
rear, angle; faceplate front/angle; both reference assemblies and timeline/detail
switching/scroll restoration; and 390 px layout. No page errors remained. Badge
export: glTF 2, metres, 17 mesh definitions, 2 materials, 2,207,572 bytes. Complete
Twin panel export: glTF 2, metres, 113 meshes, 18,740,476 bytes. Saved master checks
passed; master GLB: 254 rendered mesh instances / 835,282 triangles. These counts
are integrity evidence, not historical or photoreal approval. Further geometry/
texture optimization remains necessary before full-master mobile integration.

Matched browser before/after: angle, badge, panel and title. No lighting, camera,
scale or exposure change in this task. Badge placement and distance from cloth
intentionally changed; no cabinet dimensions changed. Own reference/review images
are committed; third-party reference photographs are not.

Publication completed 2026-11-20: GitHub runtime `452a94d` and master/evidence
`c652f8b` pushed to main. The existing owner-private Site was published successfully
from source `00e283686076715eaa5363973c74fd9f1a24243d`, deployment
`appgdep_6b006ba028a08191b176f84b0e877779`. Site ID and audience were preserved.
The shared runtime badge/panel refinements are live; the complete Blender master
remains a separate review asset. `npm test` was repeated successfully after saving.

## Construction explorer pilot / November 20

`dist/explore.js` owns the Twin's explanatory content, projected DOM hotspot
buttons, keyboard-equivalent component navigation and in-viewport cards. Anchors
are tagged on actual shared amp groups in `amp-models.js`; Twin geometry reaches
the library, timeline and detail. DOM cards only activate on this assembly.
Inside removes the two tagged rear panels and selects a rear camera, retaining
physical component relationships rather than exploding the Twin. Cabinet restores
panels and clears the card. Existing explosion behavior remains on other amps.

The shared Twin now has four larger output-tube envelopes and six small tubes,
plus an explicitly estimated output-transformer marker. This is educational
geometry, not a source-verified socket/transformer layout. The Blender master,
cabinet dimensions, knobs and materials were not revised. A narrower camera fit
is applied only to this Twin to make room for the card. Mobile uses small
projected plus markers and equivalent named buttons; the card scrolls internally.

Review entry: `/?amp=twin-1968&view=inside`, using ordinary timeline open/close
behavior. Tests: npm test, changed-module syntax, whitespace checks. Actual Chrome
review at 1500×1100 and 390×844: three projected hotspots, direct hotspot click,
all three cards, loaded photos, Escape/close, Cabinet reset, different-amp reset,
review deep link and exact timeline scroll restoration. No page errors; no mobile
horizontal overflow. Library rear view inspected and real Twin GLB exported:
glTF 2, metres, 27,188,436 bytes, speaker/power-tube/transformer anchor metadata
retained. Export includes the cabinet configuration, not transient hidden panels
or DOM cards. Own captures: `images/construction-{inside,tubes}.png`.

Photos are unmodified licensed files with source/license records under
`dist/assets/explore/README.md` and in references.json. Actual specimen photos
remain external links. The transformer has no embedded approved close-up yet.
