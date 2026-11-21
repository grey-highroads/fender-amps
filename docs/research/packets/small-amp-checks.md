# Checks on the three published small amps

Prepared 2026-11-20 after reading `docs/handoff/SMALL_AMPS.md` and `SMALL_AMPS_REFERENCES.json` on main (`b6d1c2f`). Each finding gives the decision, the evidence, what I inspected, what is still uncertain, and whether it needs a model change.

## Champ 5F1: 8 in or 7.5 in deep

**Decision:** Leave the published model at 8 in. The 7.5 in figure is better supported by a photograph, but the half-inch gap is not explained by any measuring convention, so neither number should simply replace the other. If the builder wants the depth that photographic evidence supports, 7.5 to 7.75 in is the range.

**Evidence**

| Specimen | Dealer figure (H x W x D) | Dating | Source |
| --- | --- | --- | --- |
| C-12147 | 12 x 13.5 x 8 in | 1959 per dealer; no tube chart date given | [RetroFret 8054](https://retrofret.com/products/fender-champ-amp-5f1-tube-amplifier-1959-8054) |
| C-10063 | 12 x 13.5 x 7.5 in | Tube chart "ID", April 1959 | [RetroFret on Reverb 104065160](https://reverb.com/item/104065160-fender-champ-5f1-tube-amplifier-1959-ser-c-10063) |

Both figures come from the same dealer, in the same "Height, width, deep" format, so a difference in house convention is unlikely.

**What I inspected**

- All five C-12147 photos, including the top view from the rear. It has no side or underside view, so its depth cannot be checked from a photograph.
- All 14 C-10063 photos. The last one is a near-square view of the underside showing all four glides: https://rvb-img.reverb.com/i/s--4FHIzbX1--/quality=medium-low,height=800,width=800,fit=contain/05f6428c-1d2f-4783-ad02-42096bab1a1a.jpg (listing photo 14, 800 x 533). On that image the cabinet bottom measures about 490 px wide by 278 px deep, a ratio of 0.57. At 13.5 in wide that is about 7.7 in deep. Lens and angle error on a hand count of edges is roughly plus or minus 0.2 in.

**Conventions considered and ruled out**

- Handle: it is on the top, so it adds height, not depth.
- Glides: on the bottom, so they add height, not depth.
- Back panel: in the rear photos of both amps, read at contact-sheet size, the back panel appears set inside the cabinet walls, so it should not add depth.
- Rounding: the two figures are half an inch apart, more than rounding to the nearest quarter.

**Remaining uncertainty:** Whether 5F1 cabinets really varied by half an inch, or one figure is a tape error. A third measured 8-inch 5F1, ideally with an underside photo, would settle it.

**Change needed:** Neither, unless the builder chooses the photo-supported depth. Wording: SMALL_AMPS.md can say the C-10063 underside photo supports about 7.7 in.

## Tremolux 5E9: cabinet size

**Decision:** Keep the small box, 20 W x 16 H x 9.5 D in. The RetroFret figure for serial 0093 (20 H x 22 W x 10.5 D) does not match the amp in its own photographs. Keep both dealer figures documented; the small-box depth still rests on one measurement.

**Evidence**

- RetroFret's own text for 0093 says the first Tremolux "was housed in the same size cabinet as the 5E3 Deluxe", then gives 20 x 22 x 10.5 in "at deepest point". [RetroFret 10792](https://retrofret.com/products/fender-tremolux-model-5e9-tube-amplifier-1955-10792)
- The same dealer measures a 1957 5E3 Deluxe at 16.25 H x 19.875 W x 9.5 D. [RetroFret 10964](https://retrofret.com/products/fender-deluxe-5e3-tube-amplifier-1957-10964)
- Cream City's June 1955 5E9, serial 00207, is listed at 20 x 16 x 9.5 in and 28 lb. [Cream City](https://www.creamcitymusic.com/vintage-fender-tremolux-15w-1x12-tube-combo-amp-1955/), also on [Reverb 98397047](https://reverb.com/item/98397047-vintage-fender-tremolux-15w-1x12-tube-combo-amp-1955)
- The second research pass found a 1959 large-box Tremolux at 20 H x 22 W x 10.5 D (Q9). The 0093 figure matches that later box exactly.

**What I inspected:** RetroFret 0093 front photo at full size (1333 x 2000). Cabinet width to height, measured without the handle, is about 1.25 to 1. A 20 x 16 box gives 1.25; a 22 x 20 box gives 1.10. The photo fits the small box.

**Remaining uncertainty:** The most likely explanation is that the dealer used a figure for the later large box, but that is my inference. Depth of the small box (9.5 in) rests on Cream City alone plus the Deluxe it is said to share.

**Change needed:** Neither for the model. Wording in SMALL_AMPS.md: record why the 0093 figure does not fit the photographs, and keep the conflict listed.

## Tremolux 5E9: tube complement

**Decision:** Six tubes, as the builder modeled: rectifier, two 6V6GT, two 12AX7 and one 12AY7. The rectifier type is supported as 5Y3GT for serial 0093 and on the 5E9-A drawing, but the hand correction on one chart does not prove every early 5E9 shipped the same way.

**Evidence**

- **Tube chart, serial 0093 (June 1955):** I read it at full size, rotated. It reads "Model 5E9", serial 0093, "Tube locations left to right at rear": printed **5U4GA**, crossed through by hand and replaced in ink with **5Y3GT**; then 6V6GT, 6V6GT, 12AX7, 12AX7, 12AY7. The printed power consumption (110 W) is also crossed out and replaced by hand with 85. Photo: https://cdn.shopify.com/s/files/1/0672/8702/3756/files/04_c49a1c67-67d9-4d8d-9c24-023a9ab7993a.jpg
- **Fender drawing:** no 5E9 drawing was found. Mojotone's field guide lists one but does not link it, and the schematic retailer has only the 5E9-A. The **5E9-A schematic, drawing D-EE**, which I read on 2026-11-20, shows 12AY7, a 12AX7 paraphase inverter, a 12AX7 tremolo oscillator, two 6V6GT and a **5Y3GT**. [Tremolux 5E9-A schematic](https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Tremolux-5E9A-Schematic.pdf)
- Mojotone gives 5Y3GT for the 5E9 and 5U4GA for the 5E9-A. The 5E9-A drawing I read says 5Y3GT, so Mojotone's 5E9-A rectifier is not supported by that drawing. [mojo-tremolux](https://mojotone.com/blogs/fender-field-guide/fender-narrow-panel-tweed-tremolux)
- Cream City lists 00207 as "5U4, 6V6 (2), 12AX7, 12AY7", five tubes. That omits a tube that both the 0093 chart and the 5E9-A drawing show, and its 5U4 may be what was fitted, not what was specified.

**Remaining uncertainty:** The original 5E9 drawing has not been read. The chart's hand correction shows Fender changed the rectifier after the charts were printed; it does not show which rectifier the very first amps left with.

**Change needed:** Neither required. If the rectifier is called out anywhere, say 5Y3GT on the evidence above, with that caveat. Q18 is closed for the tube count.

## Brown Deluxe 6G3: rear chassis and openings

**Decision:** Model the rear strip and openings as below. Treat the tubes, filter capacitors and cord as replacements, and the transformers, the Oxford speaker and the circuit as original per the dealer.

**What I inspected:** All 12 photos of [Music Emporium D02985](https://themusicemporium.com/products/fender-6g3-deluxe-1962), with photos 8, 11 and 12 at full size (1065 x 823): https://themusicemporium.com/cdn/shop/files/AMP26002-8.jpg, AMP26002-11.jpg and AMP26002-12.jpg. The builder's reference list includes photo 8 only.

**Rear view, left to right (photo 12, with detail from 11 and 8)**

1. Upper back panel, brown tolex, held by two screws at each end. Its top edge is cut away in a shallow trapezoid that exposes the chassis strip, with the cut sloping down at each end.
2. Chassis strip, dark with white lettering: **GROUND** (toggle in a round bezel), **FUSE 2 AMP.** (black fuse cap), **"1.1 AMP. 117 VOLTS 60 CYCLES"**, **ON** toggle, **SPEAKER** jack (fitted with a light tan speaker plug), **EXT. SPKR.** jack, "FENDER ELECTRIC INSTRUMENT CO. Fullerton, California", then **TREMOLO PEDAL** jack at the far right end.
3. Bare steel chassis end to the right of the strip, stamped **D 02985**.
4. Below the strip, the bottoms of the power and preamp tubes are visible in the slot.
5. A large open gap between the upper and lower back panels, showing the speaker.
6. Lower back panel, brown tolex, two screws at each end.

There are no separate vent slots in the back panels of this amp; the airflow openings are the trapezoid cut and the gap.

**Original or replaced**

| Part | Status | Basis |
| --- | --- | --- |
| Transformers | Original | Dealer |
| Circuit | Unmodified apart from service | Dealer |
| Oxford 12K5 speaker | Original, but removed from service; sold with the amp | Dealer. It is the speaker in photos 10 and 12. |
| Mojotone Anthem speaker | Fitted replacement | Dealer. Not shown in the photos. |
| Electrolytic capacitors | Replaced | Dealer ("recap") |
| Tubes | Replaced | Dealer ("fresh tubes"); the 6V6 labels visible in photo 11 look modern |
| Power cord | Replaced with three-prong | Dealer |
| Switches, fuse holder, jacks, speaker plug | Not stated | Nothing in the listing; I can see no sign either way |

**Remaining uncertainty:** Strip and panel dimensions, screw spacing and the depth of the trapezoid cut are estimates. The tan speaker plug may not be factory.

**Change needed:** Model, if the published rear lacks the strip labels, the tremolo pedal jack position or the trapezoid cut. SMALL_AMPS.md describes "rear vents" for the shared factory; for this amp they should be the trapezoid cut and the panel gap only.
