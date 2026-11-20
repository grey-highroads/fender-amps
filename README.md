# The Amplifier Observatory

An interactive Fender guitar tube amplifier timeline and reusable 3D component
library. This repository contains only the Amplifier Observatory project.

For project context and continuation, start with [the handoff](docs/handoff/README.md).

## Run locally

Requires Node.js 20 or newer and Python 3. No dependency installation is needed;
Three.js 0.181.0 and the browser controls are included in `dist/vendor/`.

```sh
git clone https://github.com/grey-highroads/fender-amps.git
cd fender-amps
npm start
```

Open http://127.0.0.1:4173 for the timeline or
http://127.0.0.1:4173/components.html for the component library. Stop the server
with Ctrl+C. Google Fonts is optional; system fonts are the fallback.

Run `npm test` to check component references, speaker clearances and impedance
loads. An optional GitHub Actions template is included at
`docs/github-actions/checks.yml`. To enable it later, copy it to
`.github/workflows/checks.yml` using GitHub credentials with workflow permission.
Automated checks and deployment are not configured yet.

## Hosting

The app currently serves static files directly from `dist/`; there is no build
step or backend. `.openai/hosting.json` retains the existing private Sites project
binding. Pushing to GitHub does not change that site's audience or deploy it.
Other static hosting can serve the same `dist/` directory.

## Collection

The timeline remains a selection of 19 Fender guitar tube amp model/generation
entries from the corrected 208-entry catalog. The user-designated
[authoritative workbook](https://docs.google.com/spreadsheets/d/18bzOLj0RdEdjSneLXf9USwPAM5Zs7IRoAFwKpWmkBJw/edit)
and [tracked three-tab snapshot](data/catalog/README.md) supersede the earlier
sheet. The runtime selection is not yet fully reconciled with the corrected data;
there is no live sheet connection. Shared introduction years branch
to individual amps ordered by wattage. Opening and closing the detail overlay
preserves scroll and keyboard focus. Front/rear views, orbit, zoom, pilot light,
rotation, story/specification tabs and illustrative exploded views are supported.

## Component library v0.1

Open `components.html`, also linked from the collection. It contains 24 reusable
components and three assembly records:

- 1957-style 5E3 Deluxe: Jensen P12R reference, one 8 Ω speaker.
- 1965-style black-panel Deluxe Reverb: Oxford 12K5-6 reference, one 8 Ω speaker.
- 1968 early silver-panel Twin: Oxford 12T6-family reference, two 8 Ω speakers in
  parallel for a 4 Ω load. This is a selected configuration, not a universal
  assertion about every early Twin.

The reference assemblies use the same factories as the component inspector.
The rest of the timeline retains representative cabinet studies. No additional
amp generations were added in this pass.

### Source organization

- `dist/library/catalog.js`: stable component IDs, source provenance, confidence,
  physical units, known/unknown dimensions, rendering estimates, assembly recipes.
- `dist/library/materials.js`: color, normal and roughness maps; physical-scale UV
  projection. Texture templates are cached; each rendered model owns its GPU maps.
- `dist/library/parts.js`: reusable speaker, knob, jack, faceted jewel, handle,
  screw, badge, trim and faceplate factories. Geometry uses millimetres; positive
  Z is the visible/front direction. Speakers mount at Z=0 and extend toward -Z.
- `dist/library/studio.js`: generated studio reflection environment.
- `dist/amp-models.js`: cabinet assembly and prototype fallback models.
- `checks/library.mjs`: provenance integrity, speaker clearances and electrical
  load checks. Run `node checks/library.mjs`.

The inspector supports category/search/amp filtering, front and rear views,
rotation, complete-amp inspection, component usage links, source notes, PNG map
exports, a JSON catalog download and GLB model exports. GLB geometry is converted
to metres and carries the component ID, version and accuracy notes in its metadata.
It can be imported into a modeling application for further fidelity work. All three reference assemblies use the
shared parts on the timeline and in the detail view.

### Accuracy policy and remaining work

This is an inspectable foundation, not a photoreal or dimensionally certified
asset pack. Materials are procedural approximations, not measured scans. Colors
are visual estimates rather than calibrated samples. Artworks and typefaces are
interpretive and are not exact tracings of vintage faceplates or cast badges.

`dimensions` contains known source measurements or null. Speaker `build` values
are explicitly separate rendering envelopes, not asserted original measurements.
The Jensen P12R envelope uses a **modern** manufacturer drawing as a proxy; its
modern 25 W rating is intentionally not assigned to the vintage speaker. Oxford
outside diameters, motor depths and mounting patterns remain unmeasured. Their
vintage power ratings are unknown rather than invented.

Cabinet exterior dimensions still use Fender modern reissue specifications.
These need replacement by measured vintage examples. Component positions, basket
window contours, exact speaker labels, grille thread pitch, wrapping seams,
badge castings and original hardware measurements remain review items. Rear
chassis and tube layouts are illustrative. The 1957 reference has a reconed P12R
and replacement handle; the 1968 speaker provenance is an owner's report. Neither
is silently treated as an untouched factory specimen.

Firsthand specimen photographs and manufacturer references are linked per
component in the catalog. Reference photographs are not redistributed as textures.
The existing Fender wordmark SVG is a public-domain text-logo silhouette from
Wikimedia Commons; Fender trademark remains with its owner. The site is independent
and not endorsed by Fender.

## Next fidelity review

Use measured front/side/rear photographs of one specimen per amp. Confirm vintage
cabinet dimensions, speaker basket/motor geometry and label variants, then match
materials under neutral lighting. Keep factory appearance separate from wear.
Approve one component against references before promoting it from study to
verified. No component in v0.1 is labeled verified.

## Skirted knob photographic revision 0.2

The black/silver 1–10 knob now has a continuous rolled-skirt profile, a narrower
finely fluted grip, a shallow silver dish, slotted side set screw and annular
metal shaft insert. The printed numerals are individual vector strokes projected
onto a curved skirt surface, rather than text on a floating plane. The previous
raised pointer and separate chunky grip blocks were removed.

`dist/library/knob-profile.js` holds the millimetre-based profile, number layout,
revision and provenance. `dist/library/knobs.js` builds the common part used by
the inspector and the Deluxe Reverb / early Twin faceplates. The shape is informed
by the dated 1968 RetroFret Twin and early-1965 Folkway Deluxe Reverb photographs;
isolated **modern replacement** photographs provide secondary views of the grip
and underside. Reference photos remain local review material and are not shipped
as model textures. Original and replacement references remain separately labeled.

Open `components.html#knob-skirted` to inspect the part, or
`components.html#amp/twin-reverb-early` for the assembled Twin. The inspector uses
a longer lens for this small component to reduce close-up perspective distortion.
The studio reflection rig includes a broad fill card so the plastic and silver
center can be judged by their different reflections.

This is a photographic reconstruction, not a measured replica. The 25.2 mm outside
diameter, 14.2 mm height, flute count, cap depth, exact lettering and underside
mold remain provisional. Fender's modern replacement specifies a nominal 1/4-inch
solid-shaft interface. The modern part's dimensions are not represented as an
original-vintage measurement. `checks/knob.mjs` checks actual surface geometry,
open shaft clearance, finite normals/UVs, printed-number placement and the shared
assembly connection; visual fidelity is evaluated separately in the browser.
