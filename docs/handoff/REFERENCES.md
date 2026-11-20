# Photographic references and evidence limits

The user expects online, dated photographic references to guide construction.
A date attached to an amp is not enough to authenticate a replaceable knob or
speaker. Record which details are visible, who asserts originality and whether
measurements come from an original specimen or a modern replacement.

## Skirted knob revision 0.2

| Reference | Useful evidence | Limit |
| --- | --- | --- |
| [RetroFret 1968 Twin Reverb, A-13834](https://retrofret.com/products/fender-twin-reverb-ac-568-wfactory-jbls-large-combo-tube-amplifier-1968-13479) | Dealer dates the specimen by serial/component codes and explicitly states its knobs are original. Clear mounted control-panel photograph. Also useful for Tolex, cloth, trim, faceplate, jewel and hardware. | No knob caliper measurements; dealer attribution is not independent authentication. |
| [Folkway early 1965 Deluxe Reverb](https://folkwaymusic.com/vintage-instruments/item/id.5437) | Dealer describes it as almost entirely original and provides speaker/transformer dates. Cross-check of blackface mounted proportions. | Individual knob originality is not explicitly confirmed. This early example lacks a raised grille badge. |
| [Mystic Guitar original mid-1960s knobs](https://reverb.com/item/30438997-fender-original-1960s-blackface-amp-knobs-seven-snowman-8) | Seller attributes Showman take-off knobs to the mid-1960s, describing the snowman-shaped 8, screw at 10 and metal straight-shaft inserts. | Seller attribution. Its image CDN was not retrievable during the reference pass; do not claim its hidden details were visually verified. |
| [Fender Pure Vintage replacement specification](https://uk.fender.com/products/pure-vintage-black-silver-skirted-amplifier-knobs) | Modern manufacturer reference: black skirt, white 1–10 stamping, silver center, set screw, nominal 1/4-inch solid-shaft fit. | A modern replacement does not establish an original vintage mold or exterior measurement. |
| [Stars Music isolated replacement photographs](https://www.stars-music.fr/fender-pure-vintage-black-silver-skirted-amplifier-knobs_135741.html) | Front/angle, underside and group views were inspected. They clarify the narrow tapered grip, fine fluting, silver dish and side screw. | Secondary modern-part evidence. Cap depth, flute count and vintage underside geometry remain provisional. |

The direct image URLs and provenance are in [references.json](references.json).
Original third-party photos were kept as local review material under ignored
`outputs/references/knobs/` in the previous development checkout. They will not
arrive in a fresh clone. Reacquire them from the tracked source URLs when needed.
Do not use a generated image as historical evidence, or distribute reference
photography as textures without appropriate permission.

Our own prior rendered review images are committed under `images/`. The mounted
Twin image verifies integration; it does not establish that the rest of its
materials, dimensions or artwork are accurate.

![Knobs mounted on the reference Twin model](images/twin-knobs.jpg)

## Assembly and speaker references

| Reference | What it supports |
| --- | --- |
| [1957 Deluxe D-03176, Andy Baxter](https://www.andybaxterbass.com/products/1956-fender-deluxe) | Photographed P12R example and dated amp. The speaker was reconed and handle replaced; do not represent the whole example as untouched factory equipment. |
| [1965 Deluxe Reverb, Black Book Guitars](https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy) | Photographed Oxford 12K5-6, 465-512, original-cone claim and blue FMI label. Oxford dimensions remain unmeasured. |
| [1968 Twin Oxford take-out](https://reverb.com/item/78346379-1968-fender-oxford-12t-610-12-8-ohm-guitar-speaker) | Owner-reported provenance of a 12T6-family 8-ohm speaker removed from a 1968 Twin. Does not independently establish universal factory equipment or exact geometry/finish. |
| [Jensen P12R manufacturer drawing](https://www.jensentone.com/dimensions/p12r-dimensional-drawing) and [manufacturer sheet](https://www.fullcompass.com/common/files/29322-JensenLoudspeakersP12RSpecSheet.pdf) | Modern geometry proxy. Its modern 25 W rating must not be silently assigned to the vintage speaker. |
| [Fender Custom Deluxe](https://www.fender.com/products/57-custom-deluxe/), [Deluxe Reverb](https://www.fender.com/products/65-deluxe-reverb/) and [Twin Reverb](https://www.fender.com/products/65-twin-reverb/) | Current reissue cabinet dimensions and hardware families. These are not measurements of the selected vintage specimens. |

The catalog's per-component source records remain the operational evidence list.
Keep new evidence connected to stable component IDs and record differences
between factory options, model generations and later replacements.

## Revision 0.3 observations (November 20 continuation)

Reacquired and visually inspected the RetroFret control-panel photograph and
Folkway main photograph, plus the isolated Stars Music modern angled part.
The vintage photos support the broad skirt/compact grip relationship and small
ivory markings. The modern photo resolves the straight, distinct grooves,
continuous top lip and reflective shallow silver dish more clearly; those are
secondary evidence, not authentication of a vintage mold. The vintage isolated
Reverb image remained unavailable (empty/blocked CDN responses). No original
underside or screw-height detail was newly verified.

Compared with 0.2, the grooves were too thin and poorly sampled (six divisions
per flute), lettering too light, and the disc too uniformly dull under the same
studio. Revision 0.3 uses twenty divisions per flute, a broader 0.18 mm estimated
groove with a soft termination below the top lip, 2.20 mm estimated numeral
height and heavier strokes. The 1 is simplified; 8 uses two unequal touching
loops instead of a crossing waist. These are interpretive artwork corrections,
not traced vintage artwork. Estimated silver dish depth increases from 0.42 to
0.70 mm and its roughness decreases. Neither value is a specimen measurement.

Grip diameter/height/taper and skirt curvature/thickness/rolled edge remain
unchanged after review. Screw alignment at 10 and rear insert remain provisional
as before. Mounted models still differ substantially in panel geometry, scale
relationships, materials and artwork; do not use this knob revision as evidence
that those assemblies match their photographs.

Own rendered views: [front](images/knob-v03-front.png),
[rear](images/knob-v03-rear.png), [near side](images/knob-v03-side.png),
[angled](images/knob-v03-angle.png), [Twin](images/twin-v03.png),
[Deluxe Reverb](images/deluxe-v03.png). Third-party reference photos remain only
under ignored outputs/references/knobs and are not included in the public repo.

## Revision 0.4 correction

User review established that numeral bottoms must face the center. Revision 0.3
had the opposite orientation; its prior review did not catch this error. Revision
0.4 rotates each whole label 180 degrees in place and increases stroke weight by
about 10%, as requested. No new historical measurements or photographic claims
are introduced. Geometry and inspection setup are unchanged.

## Full amp master: 1968 Twin A-13834

The existing RetroFret source is now the specific first Blender master target.
Dealer-reported size: height 20 in, width 26¼ in, depth 10¼ in. Treat as specimen
reported dimensions, not independently measured or universal model dimensions.
Height accessory inclusion is unclear; using 508 mm for the body is provisional.
The dealer identifies original factory-option JBL D120F speakers; the earlier
Oxford study is a different configuration and is retained separately.

Newly inspected full front, rear, angled and exposed-chassis photographs (gallery
01,02,03,06). The rear image supports removable upper/lower panels, cast JBL
basket/motor arrangement and caster construction. It does not establish exact
subdimensions. The new master has only provisional rear/speaker geometry, not a
completed tube/circuit-board interior. All third-party photographs remain ignored
under outputs/references/twin-master. No photographic pixels enter the model.

Sources and estimates are recorded in models/twin-1968/dimensions.json; own browser
review images are images/twin-master-{front,angle,rear,side}.png. Generated surfaces
and approximate panel/badge artwork require further photographic review.

## Factory configuration correction: master 0.2

Primary evidence newly inspected: Fender's 1968 catalog, scan leaves
[32 / printed 30](https://www.vintageguitarandbass.com/fender/catalogues/1968_32.php)
and [33 / printed 31](https://www.vintageguitarandbass.com/fender/catalogues/1968_33.php).
The specification lists the JBL D120F upgrade at additional cost; the product
photograph depicts the Twin without casters. That supports a feet-equipped
baseline, not a sweeping claim that every production exception is known.
The [secondary historical compilation](https://www.tandj.net/cnjradio/fenderamps/twin_reverb_sf.html)
lists glides for 1968–71 and casters for 1972–82, which is corroboration only.

The catalog's listed envelope converts to 673.1 W × 520.7 H × 247.65 D mm.
It differs from the dealer's 666.75 W × 508 H × 260.35 D mm. Current geometry
retains the latter provisionally; neither source is an independently measured
construction drawing. The conflict and accessory inclusion must be resolved.

Revision 0.2 replaces casters with four estimated metal glides, retains the JBL
factory option explicitly and changes the configuration metadata accordingly.
Period scans are kept only under ignored outputs/references/fender-period; source
links, rather than copyrighted scan files, are committed. Own review images now
show the revised feet-equipped model. The old caster-equipped images in Git
history document an earlier, superseded interpretation.

## Surface study 0.1 / Blender master 0.3

Re-inspected RetroFret gallery 02 (rear covering), 03 (angled complete amp) and 05
(control/cloth close view). The modeled covering had much larger, straighter
polygonal boundaries; the photographs show fine, irregular, curved creases with
small highlights. The cloth model had an evenly bright open square grid; the
photo shows a denser layered weave, warm horizontal strands and cooler silver/
aqua details. These observations guide the new procedural surface model, not a
claim of exact factory dye/color, embossed mold, thread count or physical relief.

The reference is a vintage specimen photographed under unknown lighting, with
possible aging. No inferred wear, stains or photograph pixels are baked into the
new maps. Geometry and the unresolved cabinet dimensions are unchanged. The
factory JBL option/glide baseline is retained. Separate normal, roughness and
metallic channels control surface response without painting studio highlights.

Own matched browser evidence: images/surfaces-{before,after}-{angle,tolex,cloth}.png.
Browser camera/scale/environment/light/exposure stay fixed. Blender Cycles preview
exposure was separately reduced by 2 stops; do not combine that change with the
browser material benchmark or present it as a direct photographic match.
