# Fender Amps handoff

Updated November 20, 2026. This is the starting point for continuing the Amplifier
Observatory without relying on the chat history.

**Current priority: improve the photographic fidelity of the shared component
library, then judge those improvements on the actual amps.** The interaction
prototype and reusable structure are established. Visual accuracy remains work
in progress; a functioning component is not necessarily an accurate component.

## Read next

- [Decisions and user priorities](DECISIONS.md)
- [Architecture, validation and publishing](TECHNICAL.md)
- [Photographic references and evidence limits](REFERENCES.md)
- [Machine-readable photographic reference manifest](references.json)

## Current state

| Area | State |
| --- | --- |
| GitHub | [grey-highroads/fender-amps](https://github.com/grey-highroads/fender-amps), branch `main` |
| Runtime baseline | Commit `1d93ffd`, skirted knob photographic revision 0.4 |
| Hosting | [Existing private prototype](https://tweed-deluxe-observatory.breezy-lime-2897.chatgpt.site); ChatGPT sign-in is expected |
| Timeline | 19 selected Fender guitar tube-amp model/generation entries; about six visible on desktop, two on a phone |
| Source collection | User reports roughly 200 spreadsheet entries; the full sheet is not imported or connected live |
| Library | 24 components/materials and three reference assemblies |
| Fidelity | Procedural photographic studies, not certified replicas or a photoreal asset pack |
| Backend | None. Static HTML, JavaScript and vendored Three.js; no build or dependency installation required |

The three reference assemblies are a 1957-style 5E3 Deluxe, a 1965-style blackface
Deluxe Reverb, and a 1968 early silverface Twin. The timeline uses introduction
years, so its 1955 Deluxe and 1963 Deluxe Reverb cards use later photographed
examples as construction references. Keep introduction year, production range,
reference-specimen year, and modern reissue year distinct.

The other timeline entries remain representative studies. They are not all
connected to individually verified historical assemblies.

The [original source spreadsheet](https://docs.google.com/spreadsheets/d/1eio-o-dsTWp1NE5zKDGU5zGP_2VG-o-ZC2yPGPKakto/edit)
was linked in the project conversation. The initial catalog request included
years, wattage, cabinet, impedance, USD price ranges, rarity and descriptions.
Treat pricing and rarity estimates as research data requiring verification, not
as established historical or current-market facts. Access uses the user’s Google
account; the sheet is separate from this repository.

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

## Next useful work

1. Compare knob revision 0.4 with the linked original-part and dated amp references
   from front, side and rear, then mounted on both reference faceplates. The user
   has seen the revision but has not declared it accurate or photorealistic.
2. Resolve the remaining knob details: exact vintage numeral outlines and print
   registration, original exterior dimensions, cap depth, flute count and underside
   mold/insert. Preserve uncertainty when a photograph cannot establish a fact.
3. Improve one component at a time to an agreed visual standard. After the knob
   review, use the documented 1968 Twin as a common reference for Tolex, grille
   cloth, faceplate, jewel, logo and hardware. Do not interpret that as a request
   to expand the catalog or undertake an unrelated interface redesign.

The user is not a technical specialist and asks clarifying questions. Explain
what changed and what evidence supports it in plain language. Show the visual
result; do not substitute implementation detail or passing tests for fidelity.

## Handoff maintenance

Keep this file as a concise current-state summary. Put durable rationale in
DECISIONS.md, operational details in TECHNICAL.md, and evidence in REFERENCES.md
and references.json. Update the runtime baseline and validation notes when the
implementation changes. Documentation-only commits do not change that baseline.
