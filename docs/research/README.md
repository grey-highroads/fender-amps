# Amp research

All amp research for the site lives in this folder on `main`. Start from [AGENTS.md](../../AGENTS.md) at the repo root if you have not already.

**Before researching an amp, check here first.** Each amp has a brief in `amps/` with identity, dimensions, construction, photo references, proposed hotspots and open uncertainty. Add to a brief rather than starting a new study.

## Index

| Year | Amp | Type | Status | Brief |
| --- | --- | --- | --- | --- |
| 1947 | Dual Professional | new timeline amp | ready, with estimates (Q16) | [dual-professional-1947.md](amps/dual-professional-1947.md) |
| 1949 | Pro (TV front) | new timeline amp | ready, with estimates (Q19) | [pro-tv-front-1949.md](amps/pro-tv-front-1949.md) |
| 1952 | Bassman (5B6, 1x15) | new timeline amp | blocked (Q24, Q27) | [bassman-5b6-1952.md](amps/bassman-5b6-1952.md) |
| 1955 | Tremolux (5E9 / 5E9-A) | new timeline amp | on the live site | [tremolux-5e9-1955.md](amps/tremolux-5e9-1955.md) |
| 1957 | Deluxe (5E3) | explorer upgrade | ready, with estimates | [deluxe-5e3.md](amps/deluxe-5e3.md) |
| 1959 | Champ (5F1, 8-inch) | new timeline amp | on the live site | [champ-5f1-1958.md](amps/champ-5f1-1958.md) |
| 1959 | Bassman (5F6 / 5F6-A) | explorer upgrade | blocked (Q23) | [bassman-5f6a.md](amps/bassman-5f6a.md) |
| 1960 | Vibrasonic (6G13 / 6G13-A) | new timeline amp | ready, with estimates | [vibrasonic-5g13-1960.md](amps/vibrasonic-5g13-1960.md) |
| 1961 | Showman (blonde) | new timeline amp | ready, with estimates | [showman-blonde-1961.md](amps/showman-blonde-1961.md) |
| 1962 | Deluxe (6G3) | new timeline amp | on the live site | [deluxe-6g3-1962.md](amps/deluxe-6g3-1962.md) |
| 1963 | Vibroverb (6G16 brown) | explorer upgrade | blocked (Q21, Q23) | [vibroverb-6g16.md](amps/vibroverb-6g16.md) |
| 1965 | Princeton Reverb (black panel) | new timeline amp | on the live site (Q17) | [princeton-reverb-aa1164.md](amps/princeton-reverb-aa1164.md) |
| 1965 | Super Reverb (black panel) | explorer upgrade | ready, with estimates (Q17) | [super-reverb-ab763.md](amps/super-reverb-ab763.md) |
| 1965 | Bassman (black panel) | new timeline amp | ready, with estimates (Q22) | [bassman-blackface-ab165-1965.md](amps/bassman-blackface-ab165-1965.md) |
| 1972 | Super Six Reverb | new timeline amp | on the live site | [super-six-reverb-1972.md](amps/super-six-reverb-1972.md) |
| 1980 | Fender 75 | new timeline amp | blocked (Q20) | [fender-75-1980.md](amps/fender-75-1980.md) |
| 1988 | The Twin (red/black knob) | new timeline amp | ready, with estimates (Q15) | [the-twin-1987.md](amps/the-twin-1987.md) |
| 1993 | Vibro-King | new timeline amp | ready, with estimates | [vibro-king-1993.md](amps/vibro-king-1993.md) |
| 1995 | Blues Junior (I–II) | new timeline amp | on the live site | [blues-junior-1995.md](amps/blues-junior-1995.md) |
| 1996 | Prosonic | new timeline amp | on the live site | [prosonic-1996.md](amps/prosonic-1996.md) |
| 2024 | Jack White Pano Verb | new timeline amp | ready | [pano-verb-2024.md](amps/pano-verb-2024.md) |

## What else is here

- [QUESTIONS.md](QUESTIONS.md): every open and resolved research question. Check it before treating a figure as settled.
- [manifest.json](manifest.json): status per amp in machine-readable form (readiness, blockers, catalog row and its checksum).
- [packets/](packets/): modeling and hotspot packets that supersede parts of the briefs.
  - [princeton-reverb-modeling.md](packets/princeton-reverb-modeling.md): main specimen, cabinet, panel, rear and chassis for the Princeton model.
  - [deluxe-5e3-explorer.md](packets/deluxe-5e3-explorer.md): the nine 5E3 hotspot cards, rechecked against the Fender drawing.
  - [small-amp-checks.md](packets/small-amp-checks.md): checks on the published Champ, Tremolux and brown Deluxe.
- [images/](images/): photo lists for the composite tool. The image files are kept on the owner's Mac, never in the repo.

History: this research was done 2026-11-20 in four passes on branch `codex/amp-expansion-research` and moved here the same day. The sections below record each pass.

## How row IDs work here

The catalog has no ID column. This research uses the same scheme as `data/catalog/timeline-map.json`: the logical CSV row number (header is row 1), the exact catalog name, and the SHA-256 of the row. `manifest.json` carries all three; `catalogRowId` is written as `csv-row-N`.

## Ten proposed additions

Listed in timeline order. None duplicates an existing entry, and each fills a gap in era, format or circuit type.

| Timeline year | Amp | Catalog row | Selected year and circuit | Readiness | Why it earns a place |
| --- | --- | --- | --- | --- | --- |
| 1947 | [Dual Professional](amps/dual-professional-1947.md) | 5: Dual Professional | 1947, no designation | `ready-with-estimates` | First two-speaker Fender and the start of tweed, the chrome top panel and the finger-jointed cabinet. Fills the gap between the 1946 woodie and the 1949 Champion 600. |
| 1955 | [Tremolux (narrow-panel tweed)](amps/tremolux-5e9-1955.md) | 25: Tremolux (5E9 / 5E9-A) | 1955, 5E9 | `ready-with-estimates` | First Fender with a built-in effect. Tremolo arrives eight years before the reverb already shown on the 1963 Vibroverb. |
| 1958 | [Champ (narrow-panel tweed, 5F1)](amps/champ-5f1-1958.md) | 37: Champ (5F1, 8-inch) | 1959, 5F1 | `ready-with-estimates` | The small single-ended tweed everyone knows. Shows the opposite end of the scale from the Twin and Bassman. |
| 1960 | [Showman (blonde piggyback)](amps/showman-blonde-1961.md) | 44: Showman (blonde) | 1961, 6G14-A | `ready-with-estimates` | First piggyback and the blonde era, with JBLs and the tone-ring cabinet. The timeline has no head-and-cabinet amp and no blonde amp. |
| 1961 | [Deluxe (brown panel, 6G3)](amps/deluxe-6g3-1962.md) | 46: Deluxe (6G3) | 1962, 6G3 | `ready-with-estimates` | The bridge between tweed and blackface, and the first Deluxe with tremolo. Completes the Deluxe line already on the timeline. |
| 1972 | [Super Six Reverb](amps/super-six-reverb-1972.md) | 91: Super Six Reverb | 1972, no designation | `ready-with-estimates` | The oddest of the big silver-panel combos: six tens on a Twin chassis. Gives the 1970s something other than Twins. |
| 1987 | [The Twin (red knob)](amps/the-twin-1987.md) | 115: The Twin (red/black knob) | 1988, no designation | `ready-with-estimates` | Fender after CBS: channel switching, power switching and red knobs. Fills the empty stretch between 1982 and 1993. |
| 1993 | [Vibro-King](amps/vibro-king-1993.md) | 128: Vibro-King | 1993, no designation | `ready-with-estimates` | The first Custom Amp Shop original. A new design, not a reissue, with three tens and built-in tube reverb. |
| 1995 | [Blues Junior (original, green board)](amps/blues-junior-1995.md) | 131: Blues Junior (I–II) | 1995, PR 295 | `ready` | The small EL84 combo that became a standard. First EL84 amp on the timeline. |
| 2024 | [Jack White Pano Verb](amps/pano-verb-2024.md) | 206: Jack White Pano Verb | 2024, no designation | `ready` | The newest design in the catalog and unlike anything before it: two power amps and two different speakers. Extends the timeline past 2021. |

## Suggested modeling order

Ordered by how much existing work each one reuses, cheapest first.

| Order | Amp | Likely shared construction |
| --- | --- | --- |
| 1 | [Champ (narrow-panel tweed, 5F1)](amps/champ-5f1-1958.md) | The 5E3 assembly scaled down, with one knob and a new 8-inch speaker. |
| 2 | [Tremolux (narrow-panel tweed)](amps/tremolux-5e9-1955.md) | The 5E3 assembly with two extra knobs. A first-batch 1955 amp uses the same small box. |
| 3 | [Deluxe (brown panel, 6G3)](amps/deluxe-6g3-1962.md) | Brown Princeton materials on a Deluxe-sized box with a front panel. |
| 4 | [Super Six Reverb](amps/super-six-reverb-1972.md) | The 1968 Twin chassis and panel on a tall new cabinet with six tens. |
| 5 | [Blues Junior (original, green board)](amps/blues-junior-1995.md) | New small cabinet; top chrome panel and chicken-head knobs from the 5E3. |
| 6 | [Showman (blonde piggyback)](amps/showman-blonde-1961.md) | New piggyback form and blonde tolex; brown-era panel and knobs. |
| 7 | [Vibro-King](amps/vibro-king-1993.md) | New panel and knobs; tens shared with the Super Reverb; blonde tolex shared with the Showman. |
| 8 | [The Twin (red knob)](amps/the-twin-1987.md) | Twin cabinet proportions with a new dense panel and red knobs. |
| 9 | [Jack White Pano Verb](amps/pano-verb-2024.md) | Super Reverb proportions with a new 15-inch speaker and new trim. |
| 10 | [Dual Professional](amps/dual-professional-1947.md) | Entirely new V-front cabinet with tapered sides. Envelope now estimated from one specimen and the recreation. |

New shared parts this set would add to the library: an 8-inch speaker, a 10-inch speaker, a 15-inch speaker, blonde tolex, red knobs, ivory radio knobs, a piggyback head-and-cabinet form, and casters. The 10-inch speaker is also needed for the Princeton Reverb and Super Reverb explorers, so it is worth building first.

## Three explorer upgrades

| Amp | Catalog row | Selected year and circuit | Hotspots proposed | Readiness |
| --- | --- | --- | --- | --- |
| [Deluxe (narrow-panel tweed, 5E3)](amps/deluxe-5e3.md) | 24: Deluxe (5E3) | 1957, 5E3 | 9 | `ready-with-estimates` |
| [Princeton Reverb (black panel)](amps/princeton-reverb-aa1164.md) | 67: Princeton Reverb (black panel) | 1965, AA1164 | 8 | `ready-with-estimates` |
| [Super Reverb (black panel)](amps/super-reverb-ab763.md) | 60: Super Reverb (black panel) | 1965, AB763 | 9 | `ready-with-estimates` |

## Research protocol (from 2026-11-20)

**Source order.** Fender's own material first: history articles, catalogs, manuals, reissue pages, drawings and tube charts. Then independent references with nothing to sell. Then reproduction makers and analysis sites. Dealer listings last, and only for what a specific amp looks like, never for what Fender shipped.

**Photos for each amp.** Collecting photos is part of every amp's research. They feed a composite tool that generates a hero front and rear; they are not published.

- Six to ten photos per amp. Cover front, rear, both front three-quarters, a side, the top, and one or two details such as the panel or logo. Gaps can be filled generatively, so coverage beats quantity.
- Prefer dated amps from the selected year with the fewest known replacements. Use at least two amps where possible so one amp's wear or swapped parts does not dominate.
- Prefer consistent studio lighting. Openly licensed photos rank above dealer photos when quality is similar.
- Save the files to the owner's Mac under `Fender Study/Images/<Amp name>/`, with a manifest JSON beside them (angle, amp serial and date, known replacements, source page, image URL). Keep the manifest in `images/` here too. Never commit the image files.
- The Princeton Reverb set (38 photos) predates this rule and is larger than the standard.

## Third pass: six more additions and two more explorers

Researched 2026-11-20. Each brief was built from a Fender schematic and at least one dated specimen. The Princeton Reverb is now a timeline addition by the site owner's decision (Q6).

| Timeline year | Amp | Catalog row | Selected year and circuit | Readiness | Why it earns a place |
| --- | --- | --- | --- | --- | --- |
| 1948 | [Pro (TV front)](amps/pro-tv-front-1949.md) | 9: Pro (TV front) | 1949, 5A5 by dealer attribution | `ready-with-estimates` | The TV-front cabinet sits between the 1947 V-front and the 1952 wide panel. |
| 1952 | [Bassman (TV front, 5B6)](amps/bassman-5b6-1952.md) | 13: Bassman (5B6, 1x15) | 1952, 5B6 | `blocked` | Fender's first bass amp, with a floor-mounted chassis and a ported closed back. |
| 1959 | [Vibrasonic](amps/vibrasonic-5g13-1960.md) | 38: Vibrasonic (6G13 / 6G13-A) | 1960, 5G13 | `ready-with-estimates` | First Fender with a diode rectifier and a JBL as standard. |
| 1964 | [Bassman (black panel head)](amps/bassman-blackface-ab165-1965.md) | 70: Bassman (black panel) | 1965, AB165 | `ready-with-estimates` | The timeline has no black-panel piggyback. |
| 1980 | [Fender 75](amps/fender-75-1980.md) | 103: Fender 75 | 1980, 1x15 combo | `blocked` | Fills 1977 to 1982 with a high/low power, lead-channel design. |
| 1996 | [Prosonic](amps/prosonic-1996.md) | 137: Prosonic | 1996, CSR 13 combo | `ready` | Custom Amp Shop design with switchable rectifier and class. |
| 1964 | [Princeton Reverb (black panel)](amps/princeton-reverb-aa1164.md) | 67 | 1965, AA1164 | `ready-with-estimates` | Moved from explorer upgrade to timeline addition by the site owner. |

| Amp | Catalog row | Selected year and circuit | Hotspots proposed | Readiness |
| --- | --- | --- | --- | --- |
| [Bassman (5F6-A)](amps/bassman-5f6a.md) | 35: Bassman (5F6 / 5F6-A) | 1959, 5F6-A | 9 | `blocked` |
| [Vibroverb (6G16 brown)](amps/vibroverb-6g16.md) | 56: Vibroverb (6G16 brown) | 1963, 6G16 | 8 | `blocked` |

Both explorer amps are already on the timeline. Main has six assemblies (5E3, Deluxe Reverb, 1968 Twin, Champ, early Tremolux, brown Deluxe); neither of these amps has one yet (Q23).

New shared parts this set would add: a 15-inch speaker (Pro, Bassman 5B6, Vibrasonic, Fender 75, and the Pano Verb from the first set), a TV-front cabinet shared by the Pro and Bassman 5B6, a ported closed back, and a tailless logo.

## Fourth pass: modeling packets and checks (2026-11-20)

Requested by the builder after the small-amp release on main (`b6d1c2f`: 22 timeline entries, six assemblies). No new amp briefs.

| Deliverable | File | Outcome |
| --- | --- | --- |
| Princeton Reverb modeling packet | [packets/princeton-reverb-modeling.md](packets/princeton-reverb-modeling.md) | Main specimen RetroFret A-03894 (1965), 15 photos inspected. Ready for the exterior; cabinet size is a working estimate. Model the grille logo (Q26). Factory rectifier unresolved; the bottle is a placeholder (Q7). |
| 5E3 explorer packet | [packets/deluxe-5e3-explorer.md](packets/deluxe-5e3-explorer.md) | Nine cards rechecked against drawing F-EE and rewritten. Volume-pot wiring sentence corrected and sound claims hedged after builder review. Channels renamed Instrument and Microphone from a 1957 panel. No free licence for a genuine dated 5E3 photo. |
| Checks on the published Champ, Tremolux and brown Deluxe | [packets/small-amp-checks.md](packets/small-amp-checks.md) | Champ depth unresolved (Q25). Tremolux small box supported, conflict kept; six tubes (Q18 closed), rectifier evidence is one chart plus the 5E9-A drawing. Brown Deluxe rear strip read in full. |

### How readiness is now set

A question blocks an amp only when its status in QUESTIONS.md says "Blocks". Readiness is `blocked` when that blocker stops modeling or the explorer (Q20, Q23, Q24). Other blockers are listed in the manifest but leave readiness unchanged. The Bassman 5B6, Fender 75, Bassman 5F6-A and Vibroverb are now `blocked`.

### Wording changed for supportability

- Princeton hotspot 8 said "a ten breaks up sooner and sounds tighter than a twelve". It now cites one owner's Altec 12-inch swap as one comparison, not a rule.
- Princeton hotspot 4 tied the amp's "focused voice" to the single ten; it now says only what the fixed mid resistor means for a player.
- Super Reverb hotspot 8 said the speaker brand changes the sound "more than any knob". It now says which brands appear and that no source measures the difference.

## Conflicts with the catalog

These are recorded, not corrected. The catalog was not edited.

| Amp | Catalog says | Sources say |
| --- | --- | --- |
| Dual Professional | 1947 to 1948, 18 W, 4 ohms | Introduced 1946, late 1946 or 1947; 16 W in Blue Book; 26 W and two 8-ohm speakers on separate output transformers in Mojotone |
| Tremolux (5E9 / 5E9-A) | 15 W | 18 W in the Mojotone field guide; 15 W on a June 1955 specimen listing |
| Champ (5F1, 8-inch) | Starts 1958 | 5F1 circuit dated from 1956; the catalog row is split by speaker size |
| Showman (blonde) | 85 W, typically 1x15 | 80 to 100 W; first offered with a 1x12 or a 1x15 |
| Deluxe (6G3) | 20 W | 15 W in the Mojotone field guide; 20 W elsewhere |
| Super Six Reverb | 1972, 5.33 ohms | 1970 or 1971 in some sources; published load 5.2 ohms |
| The Twin | 4/8/16 selectable | Owner's manual confirms a 4, 8 or 16 ohm selector, so no conflict on load; internal speakers are wired for 16 ohms; Fender's tube table says introduced 1985 |
| Vibro-King | 2 ohms nominal | 2 ohms in the owner's manual; 2.6 on one spec sheet |
| Deluxe (5E3) | 12 W | 15 W in the Mojotone field guide |
| Super Reverb (black panel) | Starts 1963 | Fenderguru starts 1964 |
| Bassman (5B6, 1x15) | Introduced 1952 | Some dealers list TV-front Bassmans as 1951; Fender's history says 1952 |
| Vibrasonic (6G13 / 6G13-A) | 40 W | 50 W in the Mojotone field guide |
| Fender 75 | 4/8/16 selectable | 8 ohms in the Mojotone field guide; the schematic has notes on reconnecting for 8-ohm outputs; owner's manual not found |
| Prosonic | Ends 2002 | Reverb's product guide says 1996 to 2001; one dealer dates a combo 1995 |
| Vibroverb (6G16 brown) | 35 W | About 45 W on one dealer listing; Wikipedia agrees with 35 W |

The Princeton Reverb was not among the original 19 runtime entries; the site owner has since decided to add it (Q6). Main now has 22 entries after the Champ, early Tremolux and brown Deluxe were published.

## Evidence limits in this pass

After the second pass:

- **Photographs were opened, mostly as contact sheets.** Every gallery listed in a brief was viewed unless its row says otherwise. Views, caveats and direct image URLs are recorded. Fine detail was checked at full size only where a row says so. See Q2.
- **Three Fender schematics and one layout were read.** 5E3 schematic and layout, AA1164 schematic, AB763 Super Reverb schematic, plus the 6G3 schematic at low zoom. Hotspot values in the three explorer briefs are marked confirmed, corrected or not found. The copies are a parts retailer's scans. See Q12.
- **Seven licensed images are recorded.** All are representative. None shows the exact year and circuit being modelled. See Q14.
- **Dimensions are better but still thin.** New specimen or manufacturer figures for the Dual Professional, Tremolux, Champ and Vibro-King. The rest still rest on one field guide.
- **Dealer and seller claims stay labelled as such.** Dating, originality and "original speaker" statements are theirs.
- **Pages that would not open** are named in the briefs: one WorthPoint archive page, one dealer page that is gone, and two layout PDFs that did not load.
- **Readiness** follows the brief: `ready` means enough evidence for the proposed treatment, not verified in every detail.

## Files

- `amps/<stable-amp-id>.md`: one brief per amp, twenty-one in total after the third pass.
- `manifest.json`: structured index, with catalog row pins and open questions.
- `QUESTIONS.md`: unresolved issues ranked by what they block.

## November 21: three more assemblies published

Super Reverb AB763, early Vibrasonic 5G13 and blonde Showman 6G14-A/single
fifteen now use shared construction and 22 factual hotspot drafts. See
[builder record](../handoff/VINTAGE_TRIO.md) and the appended checks in each
existing brief. Readiness still means ready with estimates: Q17 and new Q28
remain open. No new generated illustrations or reference-photo redistribution.

## November 21: two Bassmans and Pano Verb published

The owner-authorized construction/hotspot batch adds 5F6-A, AB165 and Pano Verb
with 22 factual drafts, no generated images. See [builder release record](../handoff/BASSMAN_PANO.md).
5F6-A's missing-assembly blocker Q23 is resolved; Vibroverb still needs its own
model. Q22's cabinet dimensions and new Q29's I-EG tube-label conflict remain.
Pano's manufacturer manual resolves the OUT1 4 Ω / OUT2 8 Ω assignment.
