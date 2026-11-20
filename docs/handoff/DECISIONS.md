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
| Corrected workbook is the catalog authority (November 20, 2026) | Use the 208-entry workbook identified in `data/catalog/source.json`; it supersedes the previous sheet. Preserve all three tabs and evidence qualifications. Runtime mapping and exact-year configurations require explicit reconciliation; this does not authorize collection expansion. |

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

## Factory production accuracy governs the master

The user clarified that the model should represent what Fender produced. Prefer
contemporaneous Fender catalogs, manuals, drawings and parts lists for factory
configuration; distinguish documented options from standard fitment. Dealer
originality assertions and surviving-specimen photographs are supporting evidence,
not conclusive proof that replaceable hardware left the factory that way.

Master 0.2 removes the unverified 1968 caster fitment, uses estimated glides and
retains JBL D120F as an explicitly documented factory option. Do not assert that
the dealer specimen's casters are certainly aftermarket. Period catalog and dealer
cabinet dimensions differ; retain both with an unresolved status, rather than
silently substituting or averaging them. This supersedes the specimen-first
configuration choice in master 0.1.

## Educational construction replaces photorealism as the priority

The user judged the photographic changes marginal and, after discussing workload
for 200+ amps, authorized a different direction: use 3D to explain cabinet and
interior construction, with hotspots opening explanatory cards and photographs
inside the viewport. Start with the existing Twin, not a new collection or
framework. Preserve shared component factories and timeline/detail behavior.

Photorealism is deferred. Do not interpret this as permission to invent historical
construction: geometry/layout estimates still need labels and source distinctions.
Representative licensed photos can explain component anatomy; do not pass them
off as the selected Fender's original parts. Dealer photographs stay linked until
reuse permission is established. The separate Blender master is unchanged.

## Tone-led component storytelling and inside-view discovery

The user approved the educational direction and asked for Inside the amp to be
more discoverable. On the Twin, Cabinet / Inside are now primary controls above
the object, with the invitation “Explore the parts behind the tone.” Keep the
existing route, orbit controls and other amps' behavior.

Write for curious players: the relevant characteristics, headroom, breakup,
attack and component interactions come before generic component anatomy. Include
useful listening prompts and tradeoffs. Explanations of why Fender might choose
a configuration must be visibly labeled interpretation unless primary evidence
establishes the rationale. A tube label alone does not determine tone; do not
assign undocumented specifications or a universal voice to an Oxford take-out.

## Single assembled model supersedes Cabinet / Inside modes

The user requested one model with hotspots across the whole amp, including
inputs, reverb/vibrato controls and period-specific cosmetics. Remove the mode
switch and exploded-view controls. Keep the assembled cabinet and rear panels
intact; do not silently turn menu selection into a cutaway mode. Front/Rear
remain camera shortcuts. The first eight-topic implementation is the Twin.

Use anchored markers with geometry occlusion and an accessible feature menu
that can orient the camera. Close-up labels appear on hover/focus, reducing
clutter. Preserve shared geometry/source placement, timeline scroll/focus and
photo attribution. Cosmetic cards explain visual identity and dating limits
without inventing tonal properties of trim or unmeasured cloth.

## Experienced-player editorial standard

The user clarified that the target audience already understands amp controls.
Every hotspot should answer “what is interesting about this particular design,
and so what?” Lead with a concrete circuit, construction or collector insight.
Explain where loading, gain, mixing, bias or feedback changes the result; avoid
introductory knob instructions and generic component descriptions. Keep clear
prose without reducing the technical depth.

The cards now use “Why it matters” / “Follow the circuit,” or collector evidence
for cosmetics. Optional Fender design-rationale text remains supported, but
remove obligatory speculative filler. Unknown tank identity, original circuitry,
recone history and measured response belong in evidence notes rather than being
filled with plausible-sounding specifics. A schematic comparison is not a
specimen audit. The single-model UX and eight-topic scope remain unchanged.

## Scale by musical contrast; keep the musician's voice

The user authorized the blackface Deluxe Reverb next and asked which few amps
should follow. Expertise is the audience's starting point, not a license for
academic prose. Lead with an interesting observation a player can recognize;
explain the consequence plainly; move component values and longer reasoning
into deeper notes. Keep conversational clarity across existing and new cards.

The Deluxe now uses the shared single-model explorer with its own nine-topic
profile. Recommended next sequence (not yet implementation authorization for
all three): 5E3 tweed Deluxe, AA1164 Princeton Reverb, AB763 Super Reverb. The 5E3
already has a shared assembly and provides a strong feel/control contrast.
Princeton Reverb adds a useful small-amp/tremolo comparison but needs a proper
assembly and runtime entry; its corrected-catalog row is not a completed model.
Super Reverb provides a four-speaker comparison and already has a representative
timeline study, which still needs a source-backed interior. Do these as reviewed
small batches before scaling broadly or duplicating close variants.
