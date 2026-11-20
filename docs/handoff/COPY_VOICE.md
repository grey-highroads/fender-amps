# Copy voice and copy-pass log

Owner-approved direction, November 20, 2026. Grey owns final copy; everything here is a draft for his edit.

## Voice

Who's talking: a friend who has owned, fixed and gigged these amps, talking to another player.

1. Start with what the player notices, then give the part and value behind it.
2. Use the real name of the thing: 47 pF, 12AY7, Input 2, 1957.
3. Contractions, "you", plain sentences that can be said out loud first try.
4. Say who says so. "The AB763 drawing shows" for circuit facts; "most owners hear" for lore. Don't blend them.
5. One caveat, said once, in the fine print. Don't hedge every paragraph.
6. No taglines, no slogan pairs, no closing zingers, no em dashes. Copy has to matter or it gets removed.
7. Don't add facts. Use what the repo, catalog and research briefs support. Flag doubtful facts; don't rewrite them.
8. Don't name famous players unless the repo sources the association.

## Batch 1: timeline stories and one-line descriptions

While this batch was in review, main moved to the full 208-entry catalog timeline (see FULL_TIMELINE.md). Seven amps keep authored copy; the other sixteen from the old timeline became gray catalog entries whose text is the spreadsheet description, checked verbatim.

Live on the site: rewritten `story` and `voice` strings for the Tweed Deluxe, Tweed Tremolux, Tweed Champ, Brown Deluxe, Deluxe Reverb, Princeton Reverb and 1968 Twin Reverb in `dist/collection.js`; the Tweed Deluxe story, deck and note in `dist/index.html`. The 201 catalog-only entries were not touched.

Checked in a headless browser at 1440 and 390 px wide. `npm test` passes except the Blender check, which needs Git LFS content not present in the copy lead's clone.

Flags:

- Removed the Neil Young sentence from the Tweed Deluxe story. No source for it in the repo.
- Removed "Warm. Raw. Beautifully unruly." from the Tweed Deluxe panel; it now shows the era like the other amps.
- The 1968 Twin Reverb story rests on a catalog row marked "Reviewed, not source-checked".
- Tremolux: the research README calls it the first Fender with a built-in effect. Not used; the brief does not source it, and the tremolo mechanism is unconfirmed.
- `ratingNote` fine print was not touched in this batch.

## Parked drafts for amps that are catalog-only for now

Written against the old 23-amp timeline. Use them when these amps get authored entries again. Each uses only repo, catalog and research-brief facts as of November 20, 2026; recheck before publishing. Catalog rows for the Woodie Deluxe, Champion 600, Wide-panel Deluxe, High-power Twin, black-panel Twin Reverb, Super Champ and Super-Sonic 60 were marked "Reviewed, not source-checked". The Vibroverb "first combo with reverb" line follows Wikipedia and Premier Guitar via the brief. The Bassman draft describes the 5F6-A; the catalog row is the combined 5F6 / 5F6-A group from 1957.

**Woodie Deluxe (1946)**

*The first amp to carry the Deluxe name.*

In 1946 the Deluxe is a wooden cabinet with two channels, about 12 watts and one ten-inch speaker. Fender called it the Model 26. The tweed Deluxes that follow keep roughly that power and move to a twelve. Take the numbers loosely, though. Surviving examples don't all match on speaker size or rating, so check the actual amp before you trust a spec sheet, including ours.

**Champion 600 (1949)**

*About 4 watts into a six-inch speaker.*

Fender built the Champion 600 as a practice amp for beginners: about 4 watts, a six-inch speaker and simple controls. The low output is a big part of the appeal now, for players who want a small amp's character. If you're shopping, make sure you're looking at the original and not the 2000s reissue with the same name.

**Wide-panel Deluxe (1953)**

*The Deluxe just before the 5E3.*

About 12 watts and one twelve, two years ahead of the narrow-panel Deluxe everybody knows. The name comes from the wide tweed panels around the grille. There are two circuits under that name, the 5C3 and the 5D3, so two wide-panel Deluxes aren't necessarily the same amp inside. If you're comparing one to a 5E3, find out which circuit it is first.

**High-power Twin (1957)**

*Four output tubes, two twelves, about 80 watts.*

It wears the same tweed as a Deluxe, but it has four output tubes, two twelves and more than six times the rated power. That buys a lot more clean headroom than the small combos have. There are two circuit versions, the 5F8 and the 5F8-A. We date it 1957. Some sources say 1958.

**Tweed Bassman (1958)**

*Built for bass, picked up by guitar players.*

Fender designed it for the electric bass, and guitarists picked it up too. This is the late version, the 5F6-A: about 45 watts into four ten-inch Jensens at 2 ohms. It has four inputs across Bright and Normal channels, a Volume for each, plus Treble, Bass, Middle and Presence. That's a lot more tone control than a tweed Deluxe gives you. The earlier 5F6 is a different circuit, so check which one you're looking at.

**Brown Princeton (1961)**

*Two 6V6s and bias tremolo in a small box.*

Two 6V6s, a ten-inch speaker and about 12 watts. The tremolo is the bias kind, so it works on the power tubes. In the Princeton line it sits between the small tweed Princeton and the Princeton Reverb. Don't date one by color alone. Some late 6G2s have black cosmetics.

**Brown Vibroverb (1963)**

*The first Fender combo with reverb built in.*

This is the amp where Fender put spring reverb inside the combo. Before it, reverb came in a separate box. The brown version dates from 1963 only, with two 6L6s and two tens. Its tremolo works on the power-tube bias, so it affects both channels and not just the one with the reverb. We list it at 35 watts, and you'll see higher numbers quoted. The Vibroverb name then moved to a different black-panel amp, and there's a 1990s reissue, so be clear about which one somebody means.

**Super Reverb (1963)**

*Four tens wired for 2 ohms.*

Four ten-inch speakers in a tall cabinet, driven by two 6L6s at about 40 watts. The four 8-ohm tens are wired in parallel, which makes a 2-ohm load. That's about as low as Fender went, so pulling two speakers or adding a cabinet changes the load a lot. The Vibrato channel has reverb, tremolo and a Middle control. If you see 45 watts quoted, that's the reissue.

**Twin Reverb (1963)**

*Four 6L6s, two twelves, about 85 watts.*

Four 6L6s and two twelves, about 85 watts, with reverb and tremolo. This is the amp people usually mean when they talk about Fender clean headroom. It's still clean at volumes where the smaller amps are already breaking up. The Twin Reverb name carries on into the silver-panel years, but those amps have their own circuits and ratings, so they get their own entries.

**Ultralinear Twin (1977)**

*135 watts with an ultralinear output stage.*

In 1977 Fender took the Twin Reverb to 135 watts with an ultralinear output stage. It keeps the two-twelve format, has even more clean headroom, and it's a heavy amp. It's far enough from the earlier silver-panel Twins that it gets its own entry.

**Super Champ (1982)**

*18 watts, a ten, reverb and a lead voice.*

A small 1980s Fender that does a lot: all tube, about 18 watts into a ten, with reverb and a switchable lead voice. It comes from the Rivera years at Fender. Don't mix it up with the later Super Champ XD and X2. Those have digital preamps and aren't on this site.

**Blues Deluxe (1993)**

*A 1993 design in tweed covering.*

It's covered in tweed, but it isn't a tweed-era circuit and it isn't a reissue of the 5E3. The Blues Deluxe is a 1993 design: 40 watts, one twelve, clean and drive sounds, and spring reverb. The Hot Rod line grew out of it. This entry is the original 1993 to 1996 run, not the 2005 reissue.

**Hot Rod Deluxe (1996)**

*40 watts with drive and more-drive modes.*

40 watts, one twelve, a loud clean channel, and drive and more-drive modes on top of it. This entry covers the first two generations, 1996 to 2010. Fender kept revising it after that, and the job stayed the same: a tube combo you can take to a gig.

**Super-Sonic 60 (2006)**

*Fender cleans plus a high-gain channel.*

Vintage-style Fender clean voicings on one channel and a modern high-gain channel on the other, at 60 watts. We show the 1 × 12 combo. It also came as a head, and the line later added other power levels and cabinets.

**'57 Custom Deluxe (2016)**

*A current hand-wired amp based on the 5E3.*

Fender's current hand-wired amp based on the 5E3: 12 watts, one twelve, a pine cabinet. It's a 2016 amp and we date it that way, whatever the name says. We haven't compared its circuit or parts to a vintage 5E3, so don't read our 5E3 cards as a description of this one.

**Custom Pro Reverb (2021)**

*One channel, one twelve, 40 watts.*

The vintage Pro Reverb was a two-channel 2 × 12, and this is a different amp. The '68 Custom Pro Reverb is a 2021 design with one channel and one twelve, at 40 watts. The speaker is a lightweight Neo Creamback, which helps keep the weight down. It has the silver-panel look, but it's a modern amp.

## Still to do

Hotspot cards (Deluxe Reverb, Twin, 5E3), then interface text: home page intro, masthead, decade blurbs and history entries in `dist/app.js`, era dialog, explorer prompts, object captions ("OUTSIZED INFLUENCE.").
