# Decisions and rationale

## User requirements

| Decision | Rationale and consequence |
| --- | --- |
| Fender guitar tube amps only | This is not a catalog of digital/modeling, acoustic or bass amps. The prototype includes the guitar-relevant Bassman crossover; revisit classification explicitly when expanding the source sheet. |
| Keep the dark, space-like experience | Floating, slowly moving amps and restrained modern navigation establish the collection's visual direction. |
| Main timeline opens a separate detail view | Selecting an amp opens its 3D exhibit, story and specifications. Closing it restores the same horizontal position and keyboard focus. |
| Group shared introduction years | One year marker branches subtly to multiple models, ordered by lowest to highest wattage. |
| Distinguish model generations | Blackface, early silverface, later circuit changes and modern reissues need their own context. Cosmetic era and circuit revision are related but not interchangeable. |
| Prioritize three convincing amps before expansion | The 19-entry timeline is a starting selection from the roughly 200-entry sheet. More approximate entries do not solve the current fidelity problem. |
| Use a reusable component library | Tolex, tweed, cloth, knobs, jewels, faceplates, logos, hardware and speakers should improve consistently wherever they are used. Amp-specific dimensions, selection and placement stay in assembly definitions. |
| Treat speakers as major components | Capture diameter, frame, cone, dust cap, basket, motor, colors, labels, terminals, wiring and load. Distinguish selected factory examples, options and later replacements. |
| Use online photographic evidence actively | The user expects dated references to be researched, not supplied by them. Check part originality and source quality; a dated amp does not automatically authenticate every attached part. |
| Keep project context in the repository | Future agents should find current state, decisions, rationale, evidence and operational details without rereading the chat. |

## Implementation choices

**Keep the existing static app while improving assets.** The current fidelity
bottleneck is reference quality, shape/material construction and verification.
Migrating to a larger application framework would not by itself make a knob or
cabinet more realistic. No framework migration has been requested.

**Use one shared factory rather than separate presentation copies.** The inspector
and three connected amp assemblies call the same component builders. A component
improvement should propagate to its consuming amps. Do not refine an inspector
mockup while leaving the timeline on an older duplicate.

**Maintain physical scale and explicit confidence.** Parts use millimetres.
Materials have a physical tile scale. Geometry estimates are useful for rendering
but must not silently become documented vintage dimensions. The current cabinet
dimensions use modern reissues as proxies; they still need vintage measurements.

**Separate factory appearance from condition.** First establish the underlying
shape, markings and material. Patina, fading, scratches and damage can be later
variants; they should not conceal inaccurate geometry.

**Keep original and modern replacement evidence separate.** Modern isolated
parts help expose hidden construction, but do not prove a specific vintage mold.
The knob's 6.35 mm nominal shaft fit is supported by Fender replacement specs;
its exterior dimensions, flute count and exact vintage artwork remain estimates.

**Use tests for integrity and photographs for fidelity.** Electrical load checks,
geometry checks and a successful GLB export catch real defects. They do not
establish historical authenticity or photorealism. Do not call a part verified
because its code works.

**Preserve the current access model.** GitHub is public, while the existing Sites
prototype is owner-private. A repository push does not publish the site. Keep
reference-photo rights and credentials in mind when preparing public commits.

## Choices still open

- Production adoption of the first Blender master: an editable Twin master and
  reviewed GLB now exist, but the production loader and asset replacement have
  not yet been implemented.
- The final material sources, calibrated color process and acceptable fidelity
  standard for each component.
- Exact vintage speaker/knob variants to represent within transitional years.
- Backend, live spreadsheet synchronization, expanded catalog ingestion and
  automatic deployment. These are future possibilities, not existing features.

## November 20: full-amp Blender master first

The user approved a whole-amp-first approach after accepting knob 0.4 for now.
Choose the 1968 early silverface Twin A-13834 because the selected specimen has
stated dimensions and useful front/rear/chassis photos, with widely reusable
hardware. Keep parts separate and repeated parts linked. Use the specimen's
reported cabinet size rather than silently carrying reissue dimensions forward.
This does not authenticate all dimensions: maintain a ledger distinguishing
reported measurements, nominal part sizes and modeling estimates.

The dealer identifies factory-option JBL speakers; the Blender master follows
that specific example while the existing production Twin study remains Oxford.
The new master is a separate review artifact until shape/material review,
optimization and browser integration are complete. A GLB export is not itself
production integration or evidence of high fidelity.
