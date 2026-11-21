# 5E3 Deluxe explorer packet

Prepared 2026-11-20 for the builder. Catalog row and assembly as in [deluxe-5e3.md](../amps/deluxe-5e3.md). This replaces the hotspot wording in that brief. The anchors are unchanged except where noted.

## What I checked

- **Fender drawing:** "Fender 'Deluxe' Schematic, Model 5E3" and "Fender 'Deluxe' Layout, Model 5E3", drawing F-EE, one sheet. I read both again in full on 2026-11-20. [fender-5e3](https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-5E3-Schematic.pdf)
- **Panel labels on a real amp:** RetroFret item 10964, serial D-04267, tube chart stamped GK (November 1957). I viewed the top panel photo at full size. From the jewel end it reads GROUND, FUSE, ON, jewel, TONE, INST. VOL, MIC. VOL, INST inputs, MIC inputs. Knobs are numbered 1 to 12. Panel photo: https://cdn.shopify.com/s/files/1/0672/8702/3756/files/05_b7dfa943-4776-4dc1-b873-42c87eb666a3.jpg from [the listing](https://retrofret.com/products/fender-deluxe-5e3-tube-amplifier-1957-10964). Dealer dimensions 16.25 H x 19.875 W x 9.5 D in. Original Jensen P12R, 220-740. Triad transformers 6452 and 50246. Electrolytics replaced.
- **Which channel is "bright":** on the layout the .0005 mica capacitor runs from the tone pot to the volume pot beside it. On the D-04267 panel the volume beside TONE is INST. VOL. So the Instrument channel carries the bright cap. The earlier brief called the channels Bright and Normal, which is how many writers describe them, but Fender's panel says Instrument and Microphone. The cards below use Fender's names.

## Correction to the previous brief

| Previous wording | Corrected | Change type |
| --- | --- | --- |
| "Bright" and "Normal" channels | Instrument and Microphone, as printed on the panel. Instrument has the bright cap. | Wording |
| Jumper from "Bright Lo to Normal Hi" | Jumper from an Instrument input to a Mic input | Wording |
| Commons chassis photo described as a Fender Deluxe with replaced caps | The uploader's Spanish caption says "ampli hecho a mano", a handmade amp. Treat it as a replica of the layout, not a Fender. | Wording and photo caption |
| "The two volume wipers meet at the next stage" (first version of this packet) | Signal enters each wiper; the pots' outer terminals join and feed the next stage. The published site card already has this right. | Wording |
| No value for the 6V6 coupling cap ratings | The schematic marks one .1 as 400 V and the other as 200 V. Trivia, but it is on the drawing. | Neither |

## Cards

Each card separates what is on the Fender drawing from what players and analysts say it does. "Interpretation" lines are allowed to be opinionated; they are marked so the builder can style them differently if wanted. Where an interpretation line names a source, the claim is that source's. Where it names none, it reports what owners commonly say, hedged as such. None of it is a measured result.

### 1. The volume you are not using

- **Anchor:** Top panel, INST. VOL and MIC. VOL
- **Circuit fact:** Each 12AY7 triode has its own 100k plate load and feeds its own 1 MEG volume pot through a .1 µF capacitor. The signal arrives at each pot's wiper. One outer terminal of each pot goes to ground, and the other outer terminals of the two pots join and feed the next stage. Confirmed on the schematic. Corrected 2026-11-20: the first version of this packet said the wipers joined, which is backwards.
- **What's distinctive:** The two channels are not isolated. Each volume pot is a load on the other channel's signal.
- **What changes in the response (interpretation):** Because the two pots are tied together at their outer ends, the unused channel's pot is part of the load on the channel you are playing through, and moving it changes that load. Rob Robinette describes the load as ranging from about 100k at full up to about 1M at zero, which changes gain and tone. [rr-5e3](https://robrobinette.com/How_The_5E3_Deluxe_Works.htm)
- **Why a player would care (interpretation):** Many owners treat the unused volume as an extra voicing control and set it by ear. How it changes the sound depends on the guitar and the other settings, so owners describe it in different ways. If a tweed Deluxe sounds different from last time with the same settings, the other volume is worth checking.

### 2. Tone knob, bright cap, and the Instrument volume

- **Anchor:** Top panel, TONE beside INST. VOL
- **Circuit fact:** A .0005 µF (500 pF) mica capacitor joins the tone pot to the Instrument volume. The tone pot is 1 MEG with a .005 µF to ground. Confirmed on the schematic and the layout ("MICA").
- **What's distinctive:** There is one tone control for both channels, and it is a treble bleed rather than a tone stack.
- **What changes in the response (interpretation):** With the Instrument volume at zero, the bright cap ties the top of the tone circuit toward ground, so the tone knob loses its brightest settings. Robinette works through this case. [rr-5e3](https://robrobinette.com/How_The_5E3_Deluxe_Works.htm)
- **Why a player would care (interpretation):** The tone knob behaves differently depending on which channel you use and where the other volume sits. Players who know this use it on purpose; players who do not can find the tone knob inconsistent.

### 3. Jumping the channels

- **Anchor:** Top panel, the four inputs
- **Circuit fact:** Four inputs, two per channel, each with 68k series resistors and a 1 MEG to ground. Confirmed on the schematic. A patch cable between channels is a player habit, not something on the drawing.
- **What's distinctive:** Patching a short cable from the unused Instrument input to a Mic input runs both halves of the 12AY7 at once.
- **What changes in the response (interpretation):** Both volumes become active at once and can be set against each other. Robinette covers the jumpered setup. Descriptions of what each channel adds vary between owners. [rr-5e3](https://robrobinette.com/How_The_5E3_Deluxe_Works.htm)
- **Why a player would care (interpretation):** Jumpering is a well-known tweed habit. There is no agreed best setting; owners report different balances between the two volumes.

### 4. A 12AY7 in the first socket

- **Anchor:** Chassis, first preamp tube (12AY7, at the input end)
- **Circuit fact:** 12AY7 with both cathodes on one 820 Ω resistor bypassed by 25 µF, 25 V. Confirmed on the schematic and layout.
- **What's distinctive:** The 12AY7 has much less gain than the 12AX7 that later Fenders use in the same job. Mojotone and Robinette both note the 12AY7. [mojo-5e3](https://mojotone.com/blogs/fender-field-guide/fender-narrow-panel-tweed-deluxe) [rr-5e3](https://robrobinette.com/How_The_5E3_Deluxe_Works.htm)
- **What changes in the response (interpretation):** With less gain in the first stage, more of the overdrive tends to come from later stages and the power tubes than it would with a 12AX7 there.
- **Why a player would care (interpretation):** Owners do try a 12AX7 in this socket. Because a 12AX7 has more gain, it can make the amp break up earlier; whether that is better is a matter of taste, and reports differ.

### 5. The cathodyne inverter

- **Anchor:** Chassis, the 12AX7 (second tube from the input end)
- **Circuit fact:** First half: 1500 Ω cathode with 25 µF bypass, 100k plate load. Second half: cathodyne inverter with 56k plate load, 56k cathode load, 1500 Ω bias resistor and 1 MEG grid resistor. The coupling cap between them is unlabelled on the schematic; the layout shows a .02 µF 600 V part there. Confirmed.
- **What's distinctive:** One half of one tube drives both power tubes and adds almost no gain doing it. Robinette gives the gain as just under 2. [rr-5e3](https://robrobinette.com/How_The_5E3_Deluxe_Works.htm)
- **What changes in the response (interpretation):** When this stage is driven hard it can add distortion of its own alongside the power tubes. How much depends on the settings and the tubes.
- **Why a player would care (interpretation):** Some analysts and owners credit part of the tweed Deluxe's rough edge to this stage as well as the 6V6s. It is one possible reason for the difference players hear between a tweed and a blackface Deluxe; other circuit differences also contribute.

### 6. Two 6V6s, one cathode resistor, no feedback

- **Anchor:** Chassis, the two 6V6GT power tubes
- **Circuit fact:** Shared 250 Ω, 5 W cathode resistor bypassed by 25 µF, 25 V. 1500 Ω grid stoppers and 220k grid leaks on each 6V6. No negative feedback loop is drawn. Confirmed on schematic and layout.
- **What's distinctive:** Cathode bias with no feedback. Wikipedia notes the Deluxe shares that combination with the Vox AC30 and the 18-watt Marshall. [wiki-deluxe](https://en.wikipedia.org/wiki/Fender_Deluxe)
- **What changes in the response (interpretation):** Without a feedback loop, the output stage has nothing reducing its distortion, so breakup tends to arrive at lower settings and build gradually.
- **Why a player would care (interpretation):** Players often describe limited clean headroom at band volume. Many value that for recording and small rooms; others find it limiting on a loud stage.

### 7. The 5Y3 rectifier

- **Anchor:** Chassis, rectifier (the tube nearest the power transformer)
- **Circuit fact:** 5Y3GT rectifier. Supply of three 16 µF, 450 V capacitors with a 5000 Ω and a 22k dropping resistor. 2 A fuse. Confirmed. The layout says voltages are read to ground within 20%, but no voltages are printed on this copy.
- **What's distinctive:** The 5Y3 is one of the softer rectifiers Fender used.
- **What changes in the response (interpretation):** The supply voltage can dip on hard notes and recover. Players often describe this as sag or a swell after the attack. Robinette's analysis gives about 370 V, 295 V and 250 V at the three filter nodes; those are his figures, not Fender's.
- **Why a player would care (interpretation):** Owners sometimes try other rectifiers. A GZ34 has a lower voltage drop than a 5Y3, so it raises the supply voltage; owners describe the result in different ways, and only one rectifier is factory here.

### 8. Output transformer and big coupling caps

- **Anchor:** Chassis, output transformer
- **Circuit fact:** .1 µF coupling caps after the first stage and to each 6V6 grid (one marked 400 V, one 200 V). The schematic does not give the output transformer's primary impedance. Confirmed for the caps; transformer rating not found.
- **What's distinctive:** Big coupling caps let a lot of low end through to stages that cannot handle it cleanly at volume.
- **What changes in the response (interpretation):** At high settings, owners often describe the low end loosening and the sound compressing. Robinette attributes part of that to the transformer saturating; the transformer's rating is not on the Fender drawing, so treat that as his analysis.
- **Why a player would care (interpretation):** Players use the Tone control, the choice of channel and the guitar's controls to manage the low end at high settings. Knowing that several stages contribute helps explain why.

### 9. The speaker jacks on the chassis

- **Anchor:** Chassis underside, speaker and extension jacks
- **Circuit fact:** The speaker jack has a shorting contact; a second jack is marked "EXTRA 8 Ω SPKR". The layout places both below the board. Confirmed.
- **What's distinctive:** Plugging in an 8 Ω extension cab puts it in parallel with the internal speaker.
- **What changes in the response (interpretation):** The 8 Ω output sees about 4 Ω (arithmetic), which changes how the power tubes load up. The difference players hear depends on the extension cabinet and speaker.
- **Why a player would care (interpretation):** An extension cabinet changes the load and adds a second speaker. Some owners use one to spread the sound in a room.

## Photographs

### For the public site (licence checked 2026-11-20)

| File page | Original image URL | Licence | Credit | Actual or representative | Notes |
| --- | --- | --- | --- | --- | --- |
| [Flickr 6091447789](https://www.flickr.com/photos/15983401@N00/6091447789) | https://live.staticflickr.com/6198/6091447789_a7930b4894_b.jpg (1024 px; larger sizes on the Flickr page) | CC BY-NC 2.0 | blackjetts | Representative. Real narrow-panel tweed Deluxe, owner titles it 1955. Circuit not stated. | **Non-commercial only.** Usable only if the site is non-commercial. Owner decision needed. |
| [Tweed deluxe.jpg](https://commons.wikimedia.org/wiki/File:Tweed_deluxe.jpg) | https://upload.wikimedia.org/wikipedia/commons/8/8d/Tweed_deluxe.jpg | CC BY-SA 4.0 | Nimasu | Representative of the layout only. A handmade replica chassis, with modern capacitors and parts. | Share-alike applies to the image. Tube order (5Y3, 6V6, 6V6, then the two preamp tubes) matches the Fender layout. |
| [Ceriatone 5E3 and Ceriatone 36W RP.jpg](https://commons.wikimedia.org/wiki/File:Ceriatone_5E3_and_Ceriatone_36W_RP.jpg) | https://upload.wikimedia.org/wikipedia/commons/f/f0/Ceriatone_5E3_and_Ceriatone_36W_RP.jpg | CC BY 2.0 | Gavin Tapp | Representative. A Ceriatone kit built as a head, not a Fender combo. | Shows the TONE, INST VOL, MIC VOL, INST, MIC panel wording, but it adds a STANDBY switch the original lacks. Not recommended unless nothing else will do. |

No freely licensed photograph of a genuine, dated 5E3 Fender was found on Wikimedia Commons or through Openverse. Search terms and results are in the appendix below.

### For modeling reference only (links, not for display)

| Source | View | Notes |
| --- | --- | --- |
| [RetroFret 10964, D-04267, November 1957](https://retrofret.com/products/fender-deluxe-5e3-tube-amplifier-1957-10964) | 15 photos: front, rear, three-quarter, tube chart, top panel, speaker code, chassis underside, transformer codes, pots, chassis top | Panel labels read here. Original speaker and transformers; electrolytics replaced. |

## Appendix: image search

- Wikimedia Commons file search for "tweed deluxe fender", "Fender Deluxe" amplifier, 5E3, "tweed amplifier Fender", "Fender Deluxe 1956/1957/1958", "narrow panel tweed", "Fender tweed" and related phrases. Only the three files above relate to a 5E3; `Fender1953Deluxe.jpg` is a wide-panel amp.
- Openverse search "fender tweed deluxe": the blackjetts image above, a second blackjetts image ("clean deluxe", which is a wide-panel amp with a plain grille, so not a 5E3), and a set titled "Tweed Deluxe 5E3" by Ferny71 under CC BY-NC-ND 2.0, which forbids adaptations and appears to be a build.
