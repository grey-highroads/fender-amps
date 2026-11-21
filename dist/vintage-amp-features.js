// Card copy: copy pass November 21, 2026. Facts are scoped to the selected circuit.
export const VINTAGE_EXPLORATIONS={
 "super-reverb-ab763": {
  "name": "Super Reverb",
  "parts": [
   {
    "id": "middle",
    "label": "Vibrato-channel Middle",
    "side": "front",
    "menuOnly": false,
    "title": "Only the Vibrato channel gets a Middle knob.",
    "body": "The Vibrato channel has Treble, Middle and Bass. The Normal channel has Treble and Bass, with a fixed resistor where the Middle pot would be, so its mids are set for you.",
    "attributes": [
     [
      "Vibrato",
      "10 kΩ Middle pot"
     ],
     [
      "Normal",
      "6.8 kΩ fixed resistor"
     ]
    ],
    "listen": "Middle is part of the passive tone stack, so turning it up doesn’t add a boost. It changes how much midrange the stack lets through, and it changes how Treble and Bass behave as well.",
    "together": "On the AB763 drawing the Vibrato channel’s Middle is a 10 kΩ pot, and the Normal channel has a 6.8 kΩ resistor in its place. Both channels use .022 µF mid caps.",
    "extraTitle": "Where this comes from",
    "extra": "The AB763 Super Reverb drawing.",
    "detail": "The marker is on the Vibrato channel’s Middle knob. The tone stack is behind the panel.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
      "Fender AB763 schematic, tone stacks"
     ]
    ]
   },
   {
    "id": "bright",
    "label": "Switched 120 pF bright caps",
    "side": "front",
    "menuOnly": false,
    "title": "Both channels have a Bright switch.",
    "body": "Each channel has a switch that puts a 120 pF cap across part of its Volume pot. Switch it on and treble gets around the pot, so you hear more top end at the same setting.",
    "attributes": [
     [
      "Capacitor",
      "120 pF per channel"
     ],
     [
      "Control",
      "Separate Bright switches"
     ]
    ],
    "listen": "It does the most at low Volume settings and less as you turn up, because near full Volume there’s very little pot left for the cap to get around. If Bright sounds sharp at home and hardly there at a loud gig, that’s why.",
    "together": "The Deluxe Reverb has a fixed bright cap on its Vibrato channel only. The Super has one on each channel, and you can switch either one off.",
    "extraTitle": "Where this comes from",
    "extra": "The AB763 Super Reverb drawing.",
    "detail": "The marker is on a Bright switch. The change in response depends on the Volume setting, and we haven’t measured it.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
      "Fender AB763 schematic, channel inputs and volumes"
     ]
    ]
   },
   {
    "id": "reverb",
    "label": "Reverb mix and extra gain stage",
    "side": "front",
    "menuOnly": false,
    "title": "Reverb at zero still leaves an extra gain stage.",
    "body": "On the Vibrato channel the dry signal and the spring return are mixed, then go through another 7025 gain stage. The Normal channel skips that stage. So even with Reverb all the way down, the two channels aren’t the same clean path.",
    "attributes": [
     [
      "Dry mix",
      "3.3 MΩ with 10 pF bypass"
     ],
     [
      "Driver",
      "12AT7 and reverb transformer"
     ]
    ],
    "listen": "Channel Volume sets how hard the springs get driven. The Reverb knob sets how much of the return you hear. Turning one up and the other down doesn’t give you the same result as just turning Reverb up.",
    "together": "On the AB763 drawing a 12AT7 drives the tank through a transformer. The dry signal reaches the mixer through 3.3 MΩ with a 10 pF bypass, and the other half of the mixing 7025 recovers the spring return.",
    "extraTitle": "Where this comes from",
    "extra": "The AB763 Super Reverb drawing.",
    "detail": "The marker is on the Reverb knob. The tank in the model is an estimated outline. Its spring length and decay aren’t identified.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
      "Fender AB763 schematic, reverb circuit"
     ]
    ]
   },
   {
    "id": "tremolo",
    "label": "Optical tremolo",
    "side": "front",
    "menuOnly": false,
    "title": "The tremolo pulses the reverb tail too.",
    "body": "The optical tremolo works on the Vibrato channel after the reverb mix, so the spring tail gets pulsed along with the note.",
    "attributes": [
     [
      "Oscillator",
      "12AX7"
     ],
     [
      "Coupling",
      "Lamp and light-sensitive resistance"
     ]
    ],
    "listen": "This is a volume tremolo. The brown Vibrasonic and the blonde Showman have harmonic vibrato, which moves the tone around as well, so they’re worth hearing side by side.",
    "together": "A 12AX7 oscillator flashes a lamp, and a light-sensitive resistor near the channel output pulls the signal down in time with it. Speed sets the rate and Intensity sets how hard the cell pulls.",
    "extraTitle": "Where this comes from",
    "extra": "The AB763 Super Reverb drawing.",
    "detail": "The marker is on the tremolo controls. The optical cell is inside the chassis. We haven’t measured the pulse shape or depth.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
      "Fender AB763 schematic, optical tremolo"
     ]
    ]
   },
   {
    "id": "speakers",
    "label": "Four tens and the 2 Ω load",
    "side": "rear",
    "menuOnly": false,
    "title": "Four 8-ohm tens wired for 2 ohms.",
    "body": "The four tens are wired in parallel, so the amp sees 2 ohms. AB763 Supers have CTS or Oxford 10L6 tens. Earlier ones had Jensen C10Rs.",
    "attributes": [
     [
      "Array",
      "4 × 10-inch"
     ],
     [
      "Wiring",
      "8 Ω ÷ 4 = 2 Ω"
     ]
    ],
    "listen": "Two ohms is about as low as Fender went. Pull two speakers and the load goes up to 4 ohms. Add an extension cab and it drops below 2. Either way the output stage is working into a different load from the one it was built for, which changes the feel and the stress on the amp.",
    "together": "Fender’s drawing shows the four speakers in parallel across the output transformer, plus an extension speaker jack. It doesn’t print an impedance. The 2 ohms comes from four nominal 8-ohm speakers.",
    "extraTitle": "Where this comes from",
    "extra": "Speaker models are from Fender Guru and Mojotone’s Fender field guide. The wiring is from the AB763 drawing.",
    "detail": "The marker is on the speakers. The tens in the model are generic. A speaker’s real impedance moves with frequency.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
      "Fender AB763 schematic, four parallel speakers"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-blackface-super-reverb?page=3",
      "Super Reverb field guide, speaker formats"
     ]
    ]
   },
   {
    "id": "supply",
    "label": "GZ34 rectifier",
    "side": "rear",
    "menuOnly": false,
    "title": "AB763 Supers have a GZ34 rectifier.",
    "body": "The AB763 Super Reverb rectifies with a GZ34 tube. The Vibrasonic and Showman in this set use silicon diodes instead.",
    "attributes": [
     [
      "Rectifier",
      "GZ34"
     ],
     [
      "Output pair",
      "2 × 6L6GC"
     ]
    ],
    "listen": "A tube rectifier drops more voltage when the amp is working hard, and players feel that as some give under the pick. How much depends on the whole supply. Rob Robinette notes the Super uses the same power transformer as the blackface Bassman, a size up from the other 40-watt blackface amps.",
    "together": "Later Super Reverb revisions aren’t covered here. The AB763 drawing calls for a GZ34.",
    "extraTitle": "Where this comes from",
    "extra": "The rectifier is from the AB763 drawing. The power transformer comparison is Robinette’s analysis.",
    "detail": "The marker is on the rectifier. Sag wasn’t measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
      "Fender AB763 schematic, power supply"
     ]
    ]
   },
   {
    "id": "power",
    "label": "6L6GC pair and fixed bias",
    "side": "rear",
    "menuOnly": false,
    "title": "Two 6L6GCs and an output transformer wound for 2 ohms.",
    "body": "The Super runs two 6L6GCs in fixed bias, with a 10 kΩ bias pot. Four speakers don’t mean four power tubes. It’s a two-tube output stage like the other 40-watt blackface amps, driving more speaker.",
    "attributes": [
     [
      "Output stage",
      "2 × 6L6GC"
     ],
     [
      "Catalog rating",
      "40 W into nominal 2 Ω"
     ]
    ],
    "listen": "Rob Robinette’s analysis puts the output transformer at 4.2k to 2 ohms, where the Vibrolux and Pro use 4k to 8 ohms. It’s a big transformer for a 40-watt amp, and it gets the credit for the tight low end that sets a Super apart from the smaller combos.",
    "together": "The drawing calls the output transformer 125A9A and marks about −52 V at the output-tube grids. Those voltages are service references, not readings from an amp.",
    "extraTitle": "Where this comes from",
    "extra": "Part numbers and bias are from the AB763 drawing. The transformer ratio and the low-end credit are Robinette’s.",
    "detail": "The marker is on one output tube. Tube positions in the model are illustrative.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
      "Fender AB763 schematic, output stage"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-blackface-super-reverb?page=3",
      "Super Reverb field guide, rating"
     ]
    ]
   },
   {
    "id": "feedback",
    "label": "Output feedback network",
    "side": "rear",
    "menuOnly": true,
    "title": "Less feedback than its blackface siblings.",
    "body": "The feedback loop takes its signal from the speaker output, and on the Super that output is 2 ohms. It uses the same 820 Ω and 100 Ω divider as the other multi-speaker blackface amps, so less feedback voltage gets back to the phase inverter.",
    "attributes": [
     [
      "Feedback resistor",
      "820 Ω"
     ],
     [
      "Return resistor",
      "100 Ω"
     ]
    ],
    "listen": "Less feedback usually means a rawer edge and earlier breakup for an amp this size. Rob Robinette puts the reduction at about 41 percent.",
    "together": "The AB763 drawing shows an 820 Ω resistor from the speaker output to a 100 Ω resistor at the inverter. It doesn’t give a percentage. That figure is Robinette’s.",
    "extraTitle": "Where this comes from",
    "extra": "The divider is on the AB763 drawing. The comparison is Robinette’s analysis.",
    "detail": "There’s no marker on the model for this one because the network is inside the chassis. The breakup point wasn’t measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
      "Fender AB763 schematic, feedback and phase inverter"
     ]
    ]
   },
   {
    "id": "legs",
    "label": "Tilt-back legs",
    "side": "rear",
    "menuOnly": false,
    "title": "Tilt it back and the tens point at your ears.",
    "body": "The Super has long legs on the sides so the cabinet can lean back. Flat on the floor, the four tens point at about knee height.",
    "attributes": [
     [
      "Legs",
      "19-inch, side-mounted"
     ],
     [
      "Use",
      "Tilts the four tens back"
     ]
    ],
    "listen": "Treble is directional, so tilting the cabinet changes how much top end you hear from where you stand. Nothing in the circuit changes.",
    "together": "The legs are listed at 19 inches.",
    "extraTitle": "Where this comes from",
    "extra": "Leg length is from Mojotone’s Fender field guide.",
    "detail": "The model shows the legs folded. Pivot and stop dimensions are estimates.",
    "sources": [
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-blackface-super-reverb?page=3",
      "Super Reverb field guide, tilt-back hardware"
     ]
    ]
   }
  ]
 },
 "vibrasonic-5g13-1960": {
  "name": "Vibrasonic",
  "parts": [
   {
    "id": "tone",
    "label": "Early 5G13 tone circuit",
    "side": "front",
    "menuOnly": false,
    "title": "The early Vibrasonic’s tone stack isn’t the blackface one.",
    "body": "Each channel has Bass, Treble and Volume, but the 5G13 tone network is different from the one in the later blackface amps. The same knob settings on a Vibrasonic and a Deluxe Reverb won’t give you the same sound.",
    "attributes": [
     [
      "Channels",
      "Normal and Vibrato"
     ],
     [
      "Revision",
      "5G13, selected 1960 configuration"
     ]
    ],
    "listen": "If you know blackface amps, don’t set this one from memory. Set it by ear.",
    "together": "On the 5G13 drawing, Treble and Bass are both 250 kΩ pots in each channel. The later 6G13-A isn’t covered here.",
    "extraTitle": "Knob order",
    "extra": "On the panel, each channel reads Bass, Treble, Volume.",
    "detail": "The marker is on a Treble knob. Response wasn’t measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Vibrasonic-5G13-Schematic.pdf",
      "Fender 5G13 schematic and layout"
     ]
    ]
   },
   {
    "id": "harmonic",
    "label": "Harmonic vibrato",
    "side": "front",
    "menuOnly": false,
    "title": "Harmonic vibrato moves the tone, not just the volume.",
    "body": "The Vibrato channel splits the signal into a high band and a low band and pulses them in opposite directions. As one comes up the other goes down, so the tone sweeps back and forth with the pulse. It’s the brown-era design, not the optical tremolo of the later blackface amps.",
    "attributes": [
     [
      "Modulation",
      "Frequency-selective audio paths"
     ],
     [
      "Small tubes",
      "Five 7025 in the complete 5G13 amp"
     ]
    ],
    "listen": "Hold a chord and listen to the balance between bass and treble move, not just the level. A tremolo pedal in front of the amp won’t do that, because it only turns the whole signal up and down.",
    "together": "On the 5G13 drawing, an oscillator drives a modulation stage that works on the two filtered branches before the phase inverter. Speed sets the rate and Intensity sets the depth.",
    "extraTitle": "Five 7025s in all",
    "extra": "The whole amp has five 7025 dual triodes. Mojotone puts two of them in the vibrato circuit. Later catalogs list eight tubes, but that’s the later circuit.",
    "detail": "The marker is on Intensity. The model doesn’t simulate the effect.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Vibrasonic-5G13-Schematic.pdf",
      "Fender 5G13 harmonic vibrato circuit"
     ]
    ]
   },
   {
    "id": "presence",
    "label": "Presence in the feedback loop",
    "side": "front",
    "menuOnly": false,
    "title": "Presence works on both channels.",
    "body": "There’s one Presence knob, and it sits in the feedback loop after the two channels join. So it changes the top end of both channels, at a different point in the circuit from either channel’s Treble.",
    "attributes": [
     [
      "Location",
      "Output feedback / phase inverter"
     ],
     [
      "Control",
      "5 kΩ Presence"
     ]
    ],
    "listen": "Set each channel’s Treble for its own sound, then use Presence for the overall top end.",
    "together": "On the 5G13 drawing, feedback runs from the output transformer to the phase inverter, and the 5 kΩ Presence pot and its cap sit in that path.",
    "extraTitle": "Where this comes from",
    "extra": "The 5G13 drawing.",
    "detail": "The marker is on Presence. No response curve was measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Vibrasonic-5G13-Schematic.pdf",
      "Fender 5G13 feedback and Presence circuit"
     ]
    ]
   },
   {
    "id": "speaker",
    "label": "Single fifteen and aluminum dome",
    "side": "rear",
    "menuOnly": false,
    "title": "One fifteen, and a JBL as standard.",
    "body": "The Vibrasonic has a single 15-inch speaker in an open-back cabinet. Fender’s 1962–63 catalog lists it as a Lansing D-130, and Mojotone gives the D-130F at 8 ohms. Vintage Guitar calls it the first Fender with a JBL as standard.",
    "attributes": [
     [
      "Format",
      "1 × 15-inch"
     ],
     [
      "Nominal load",
      "8 Ω in the field guide"
     ]
    ],
    "listen": "Don’t assume a fifteen means a bassier amp. Cone, magnet, dome and cabinet all count, and so does whether it’s still the original speaker.",
    "together": "The big aluminum dust dome is the easiest way to spot the JBL. A lot of these have been reconed or replaced over the years, and a later D140F isn’t what they shipped with.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s 1962–63 catalog, which is later than this circuit, plus Mojotone’s Fender field guide and Vintage Guitar.",
    "detail": "The marker is on the speaker. The basket, magnet and dome in the model are generic estimates.",
    "sources": [
     [
      "https://guitar-compare.com/wp-content/uploads/2019/08/Fender-1962-1963-Catalog.pdf",
      "Fender 1962–63 catalog, Vibrasonic speaker"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-brownface-vibrasonic",
      "Vibrasonic field guide, early configuration"
     ]
    ]
   },
   {
    "id": "power",
    "label": "Two 6L6GC output tubes",
    "side": "rear",
    "menuOnly": false,
    "title": "Two 6L6GCs, fixed bias, no bias pot.",
    "body": "The 5G13 drawing has two 6L6GCs in fixed bias, with no bias adjustment anywhere on the amp. The catalog rates it at 40 watts. Mojotone says 50.",
    "attributes": [
     [
      "Output tubes",
      "2 × 6L6GC"
     ],
     [
      "Catalog rating",
      "40 W retained"
     ]
    ],
    "listen": "Two output tubes into one fifteen makes it a very different amp from the four-tube Showman, even though both have harmonic vibrato.",
    "together": "Later catalogs list 5881s and a different set of small tubes. That’s the later circuit, not the 5G13.",
    "extraTitle": "Expensive per watt",
    "extra": "Vintage Guitar notes that when it was new it was by far Fender’s most expensive amp per watt.",
    "detail": "The marker is on one output tube. No output test was run.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Vibrasonic-5G13-Schematic.pdf",
      "Fender 5G13 output and bias circuits"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-brownface-vibrasonic",
      "Vibrasonic field guide, rating conflict"
     ]
    ]
   },
   {
    "id": "rectifier",
    "label": "Silicon rectifier supply",
    "side": "rear",
    "menuOnly": true,
    "title": "No rectifier tube. Six diodes do the job.",
    "body": "The 5G13 rectifies with six silicon diodes, so all seven tubes are doing audio work: five 7025s and two 6L6GCs. Vintage Guitar calls it the first Fender with solid-state rectification.",
    "attributes": [
     [
      "Rectification",
      "Six silicon diodes"
     ],
     [
      "Tube complement",
      "Seven bottles total"
     ]
    ],
    "listen": "A diode supply doesn’t have a tube rectifier’s voltage drop under load. How stiff the amp feels still depends on the transformer, the filtering and how hard you’re playing.",
    "together": "The early drawing has a speaker jack and a vibrato pedal jack, and no extension speaker jack. Mojotone notes the 6G13-A added one.",
    "extraTitle": "Where this comes from",
    "extra": "The 5G13 schematic and layout. The first-diode claim is Vintage Guitar’s.",
    "detail": "There’s no marker on the model for this one because the diodes are inside the chassis.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Vibrasonic-5G13-Schematic.pdf",
      "Fender 5G13 power supply and layout"
     ]
    ]
   }
  ]
 },
 "showman-blonde-1961": {
  "name": "Showman",
  "parts": [
   {
    "id": "harmonic",
    "label": "Harmonic vibrato",
    "side": "front",
    "menuOnly": false,
    "title": "Harmonic vibrato, like the brown amps.",
    "body": "The Vibrato channel splits the signal into filtered branches and pulses them against each other, so the tone moves along with the volume. The Normal channel skips the whole network.",
    "attributes": [
     [
      "Revision",
      "6G14-A"
     ],
     [
      "Modulation tubes",
      "Two 12AX7s in the circuit"
     ]
    ],
    "listen": "Compare it with the Super Reverb’s optical tremolo, which only moves the volume. On a held chord, listen for the balance between highs and lows shifting.",
    "together": "Drawing K-FJ shows the oscillator, the modulation stages and the branches recombining before the phase inverter. Two 12AX7s handle the modulation.",
    "extraTitle": "Where this comes from",
    "extra": "The 6G14-A drawing, K-FJ.",
    "detail": "The marker is on Intensity. The model doesn’t simulate the effect.",
    "sources": [
     [
      "https://el34world.com/charts/Schematics/files/fender/Fender_SHOWMAN_6G14A.pdf",
      "Fender 6G14-A schematic and layout"
     ]
    ]
   },
   {
    "id": "presence",
    "label": "Shared Presence control",
    "side": "front",
    "menuOnly": false,
    "title": "One Presence knob for both channels.",
    "body": "Each channel has its own Bass and Treble. Presence sits in the feedback return at the phase inverter, after the channels join, so it shapes the top end of both.",
    "attributes": [
     [
      "Circuit position",
      "Feedback / phase inverter"
     ],
     [
      "Control",
      "25 kΩ Presence on the layout"
     ]
    ],
    "listen": "It isn’t a third Treble knob. Set each channel’s Treble first, then use Presence for the overall edge.",
    "together": "The layout shows a 25 kΩ Presence pot.",
    "extraTitle": "Where this comes from",
    "extra": "The 6G14-A drawing, K-FJ.",
    "detail": "The marker is on Presence. The ivory barrel knobs in the model are estimates. No response curve was measured.",
    "sources": [
     [
      "https://el34world.com/charts/Schematics/files/fender/Fender_SHOWMAN_6G14A.pdf",
      "Fender 6G14-A feedback and Presence circuit"
     ]
    ]
   },
   {
    "id": "power",
    "label": "Four 5881 output tubes",
    "side": "rear",
    "menuOnly": false,
    "title": "Four 5881s in the head.",
    "body": "The output stage is four 5881s in push-pull. The cabinet has no amplifier in it, just the speaker, fed by a lead from the head.",
    "attributes": [
     [
      "Output tubes",
      "4 × 5881"
     ],
     [
      "Catalog rating",
      "85 W retained"
     ]
    ],
    "listen": "Four output tubes give it a lot of clean headroom. Vintage Guitar describes the 1961 Showman chassis as nearly identical to the blonde Twin’s, apart from an 8-ohm output transformer.",
    "together": "With two 12AX7s and four 7025s, that’s ten tubes in all and no rectifier tube.",
    "extraTitle": "The rating",
    "extra": "The catalog says 85 watts. You’ll also see 80 and 100 quoted. We use the catalog figure.",
    "detail": "The marker is on one output tube. Output wasn’t measured.",
    "sources": [
     [
      "https://el34world.com/charts/Schematics/files/fender/Fender_SHOWMAN_6G14A.pdf",
      "Fender 6G14-A output stage"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-blonde-showman?page=2",
      "Blonde Showman field guide"
     ]
    ]
   },
   {
    "id": "rectifier",
    "label": "Silicon power supply",
    "side": "rear",
    "menuOnly": true,
    "title": "Six diodes and no rectifier tube.",
    "body": "The 6G14-A uses six silicon diodes, in two strings of three, for its high-voltage supply. All ten tubes are in the audio and vibrato circuits.",
    "attributes": [
     [
      "Rectifier",
      "Six silicon diodes"
     ],
     [
      "Glass bottles",
      "4 × 5881, 4 × 7025, 2 × 12AX7"
     ]
    ],
    "listen": "Rectifier type alone doesn’t tell you how stiff an amp feels. The transformer, the filtering and the load all play a part.",
    "together": "Bias has its own separate supply on the drawing.",
    "extraTitle": "Where this comes from",
    "extra": "The 6G14-A drawing, K-FJ.",
    "detail": "There’s no marker on the model for this one because the diodes are inside the chassis.",
    "sources": [
     [
      "https://el34world.com/charts/Schematics/files/fender/Fender_SHOWMAN_6G14A.pdf",
      "Fender 6G14-A power supply"
     ]
    ]
   },
   {
    "id": "cabinet",
    "label": "Piggyback and tone-ring cabinet",
    "side": "front",
    "menuOnly": false,
    "title": "The speaker hangs on a tone ring in a closed box.",
    "body": "The Showman cabinet is closed at the back, and the speaker doesn’t bolt to the front baffle. It mounts on a ring inside, set back from the baffle opening.",
    "attributes": [
     [
      "Selected format",
      "One fifteen-inch cabinet"
     ],
     [
      "Back",
      "Closed removable rear panel"
     ]
    ],
    "listen": "The usual explanation is that the closed back and tone ring tighten the low end compared with an open-back combo. Splitting the head from the cabinet also means you can stack it on top or put it somewhere else.",
    "together": "Fender’s 1962–63 catalog describes the separate Lansing speaker enclosure and shows the head mounted on top. It lists the 15-inch cabinet at 36 × 24½ × 11½ inches.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s 1962–63 catalog.",
    "detail": "The ring, supports and fasteners in the model are estimates. The low-end explanation comes from dealer write-ups, not a measurement.",
    "sources": [
     [
      "https://guitar-compare.com/wp-content/uploads/2019/08/Fender-1962-1963-Catalog.pdf",
      "Fender 1962–63 catalog, Showman 15"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-blonde-showman?page=2",
      "Blonde Showman field guide, tone-ring format"
     ]
    ]
   },
   {
    "id": "speaker",
    "label": "Enclosed single fifteen",
    "side": "rear",
    "menuOnly": true,
    "title": "A 15-inch JBL, model not settled.",
    "body": "The single-fifteen Showman has one 15-inch JBL at 8 ohms. Fender’s catalog calls it a 15-inch Lansing without a model number. Mojotone lists the D140F, and the D130 also turns up, so which one was stock in 1961 isn’t settled.",
    "attributes": [
     [
      "Speaker",
      "One 15-inch JBL · 8 Ω"
     ],
     [
      "Mounting",
      "Tone ring, closed back"
     ]
    ],
    "listen": "It shipped with a JBL, not a Jensen or an Oxford. That’s a big part of the hard, clear attack people associate with these amps.",
    "together": "There was also a single-twelve cabinet, and a two-fifteen version came later. This card covers the fifteen.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s 1962–63 catalog and Mojotone’s Fender field guide.",
    "detail": "There’s no marker on the model for this one because the speaker sits behind the closed back. The speaker in the model is generic.",
    "sources": [
     [
      "https://guitar-compare.com/wp-content/uploads/2019/08/Fender-1962-1963-Catalog.pdf",
      "Fender 1962–63 catalog, Showman speaker"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-blonde-showman?page=2",
      "Blonde Showman field guide"
     ]
    ]
   },
   {
    "id": "legs",
    "label": "Legs and head restraints",
    "side": "rear",
    "menuOnly": false,
    "title": "Legs to tilt the cabinet, hardware to hold the head.",
    "body": "The cabinet has tilt-back legs, and there’s hardware to hold the head on top. They’re still two separate boxes when they’re stacked.",
    "attributes": [
     [
      "Construction",
      "Separate head and cabinet"
     ],
     [
      "Hardware",
      "Tilt-back legs, head hold-downs"
     ]
    ],
    "listen": "Tilting points the fifteen up toward your ears, which changes how much top end you hear from where you stand. The hold-downs keep the head in place when the cabinet leans back.",
    "together": "Fender’s catalog describes the tilt-back legs and the head mounting on top.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s 1962–63 catalog.",
    "detail": "The model shows the legs folded. Leg length, pivots and hold-down sizes are estimates.",
    "sources": [
     [
      "https://guitar-compare.com/wp-content/uploads/2019/08/Fender-1962-1963-Catalog.pdf",
      "Fender 1962–63 catalog, Showman mounting and legs"
     ]
    ]
   }
  ]
 }
};
