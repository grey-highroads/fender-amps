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
