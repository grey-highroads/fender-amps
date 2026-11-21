// Card copy: copy pass November 21, 2026. Facts scoped to factory circuit and manual evidence. No generated media.
export const BP_EXPLORATIONS={
 "bassman-5f6a": {
  "name": "Tweed Bassman",
  "parts": [
   {
    "id": "inputs",
    "label": "12AY7 and shared input cathode",
    "side": "top",
    "menuOnly": false,
    "title": "It starts with a 12AY7, not a 12AX7.",
    "body": "Both channels start in the same 12AY7, one half each. A 12AY7 has less gain than the 12AX7 that a lot of later Fenders put in the first socket, so the first stage has less gain to work with.",
    "attributes": [
     [
      "Input bottle",
      "12AY7"
     ],
     [
      "Shared cathode",
      "820 Ω / 250 µF"
     ]
    ],
    "listen": "Don’t treat Normal and Bright as two separate preamps. The two halves share a cathode resistor and bypass cap, and the channels meet again at the mixing resistors after their Volumes.",
    "together": "On the drawing the inputs have 68 kΩ resistors and 1 MΩ returns, and the shared cathode is 820 Ω with a 250 µF bypass.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing I-EG.",
    "detail": "The marker is on the first tube. Socket positions are estimates. Gain wasn’t measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender 5F6-A input circuit and layout"
     ]
    ]
   },
   {
    "id": "bright",
    "label": "Bright-channel bypass capacitor",
    "side": "top",
    "menuOnly": false,
    "title": "The Bright Volume has a cap you can’t switch off.",
    "body": "A 100 pF cap bridges part of the Bright channel’s Volume pot. The Normal channel doesn’t have one. It’s always in the circuit, not a switch like the Bright switches on later Fenders.",
    "attributes": [
     [
      "Bright bypass",
      "100 pF"
     ],
     [
      "Volumes",
      "1 MΩ audio taper"
     ]
    ],
    "listen": "It does the most at low Volume settings and less as you turn up, because there’s less pot left for the cap to get around. If the Bright channel sounds much sharper turned down than turned up, that’s the cap.",
    "together": "The schematic prints .0001 µF and the layout marks 100 MMF, which is the same value. The two channels mix through separate 270 kΩ resistors.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing I-EG.",
    "detail": "The marker is on the Bright Volume. No response curve was measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender 5F6-A volumes and mixing resistors"
     ]
    ]
   },
   {
    "id": "follower",
    "label": "Cathode follower before the tone stack",
    "side": "rear",
    "menuOnly": true,
    "title": "A cathode follower drives the tone stack.",
    "body": "After the channels mix, a 12AX7 gain stage feeds straight into another triode set up as a cathode follower, and the tone stack takes its signal from the follower.",
    "attributes": [
     [
      "Tube",
      "12AX7"
     ],
     [
      "Follower cathode load",
      "100 kΩ"
     ]
    ],
    "listen": "The follower feeds the passive tone controls from a low-impedance source, so the tone stack loads the signal less than it would hanging off a plate. When you push the amp, the follower and the stage before it are part of how it breaks up.",
    "together": "The drawing shows the gain stage’s plate wired straight to the follower’s grid, with a 100 kΩ load on the follower’s cathode. Calling it low-impedance is a reading of that circuit, not a measurement.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing I-EG.",
    "detail": "There’s no marker on the model for this one because the stage is inside the chassis. No clipping point was measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender 5F6-A gain stage, follower and tone stack"
     ]
    ]
   },
   {
    "id": "tone",
    "label": "Treble, Bass and Middle network",
    "side": "top",
    "menuOnly": false,
    "title": "A Middle knob on a tweed.",
    "body": "The 5F6-A has Treble, Bass and Middle, after the cathode follower. Fender added the Middle control on the 5F6, and the 5F6-A kept it.",
    "attributes": [
     [
      "Middle pot",
      "25 kΩ linear"
     ],
     [
      "Slope resistor",
      "56 kΩ"
     ]
    ],
    "listen": "These are passive controls, so they interact. Middle doesn’t boost anything. Turning it down takes mids out, and it changes how Treble and Bass behave too.",
    "together": "On the drawing, Treble is 250 kΩ, Bass 1 MΩ and Middle a 25 kΩ linear pot, with a 250 pF treble cap, .02 µF caps and a 56 kΩ slope resistor.",
    "extraTitle": "Where this comes from",
    "extra": "Values from Fender drawing I-EG. The history is from Fender’s own Bassman history.",
    "detail": "The marker is on the Middle knob. Response wasn’t measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender 5F6-A tone network"
     ]
    ]
   },
   {
    "id": "presence",
    "label": "Presence and output feedback",
    "side": "top",
    "menuOnly": false,
    "title": "Presence works in the feedback loop.",
    "body": "A sample of the speaker output goes back to the phase inverter as negative feedback. Presence changes how much treble that feedback takes away, so turning it up brings the top end up after both channels have joined.",
    "attributes": [
     [
      "Presence",
      "5 kΩ pot"
     ],
     [
      "Output feedback",
      "27 kΩ resistor"
     ]
    ],
    "listen": "It’s not a second Treble knob. Treble works in the tone stack ahead of the power section. Presence works in the loop around it, so the same setting on each doesn’t do the same thing.",
    "together": "The drawing shows a 27 kΩ feedback resistor and a 5 kΩ Presence pot with its capacitor.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing I-EG.",
    "detail": "The marker is on Presence. No frequency response was measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender 5F6-A Presence and feedback circuit"
     ]
    ]
   },
   {
    "id": "inverter",
    "label": "Long-tailed-pair phase inverter",
    "side": "rear",
    "menuOnly": true,
    "title": "A long-tail phase inverter.",
    "body": "The 5F6-A’s phase inverter is a long-tailed pair, two triodes working together, feeding the two 5881s. The tweed Deluxe uses a one-triode cathodyne instead.",
    "attributes": [
     [
      "Plate loads",
      "82 kΩ and 100 kΩ"
     ],
     [
      "Layout tube label",
      "12AX7"
     ]
    ],
    "listen": "A long-tail inverter has gain of its own, so it can be part of the breakup when you push the amp. It’s one of the circuit differences between a Bassman and a tweed Deluxe.",
    "together": "The plate loads are 82 kΩ and 100 kΩ. The layout labels this tube a 12AX7, but the label on the schematic looks like 12AY7, so the two Fender sheets disagree. We follow the layout.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing I-EG, schematic and layout.",
    "detail": "There’s no marker on the model for this one because the stage is inside the chassis. The tube label conflict is unresolved.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender I-EG schematic and layout, inverter-label discrepancy"
     ]
    ]
   },
   {
    "id": "power",
    "label": "5881 pair and fixed bias",
    "side": "rear",
    "menuOnly": false,
    "title": "Two 5881s, fixed bias, no bias pot.",
    "body": "The output stage is a pair of 5881s with fixed negative bias, and there’s no adjustment pot. Each screen gets its own 470 Ω resistor. The catalog rates it at about 45 watts.",
    "attributes": [
     [
      "Output tubes",
      "2 × 5881"
     ],
     [
      "Screen resistors",
      "470 Ω / 1 W each"
     ]
    ],
    "listen": "That’s a different output stage from the cathode-biased small tweeds, with more power and four speakers to drive.",
    "together": "Mojotone’s field guide says the 5F6 and 5F6-A used a selenium rectifier in the bias supply. The bias voltage on the drawing is hard to read on the scan.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing I-EG and Mojotone’s Fender field guide.",
    "detail": "The marker is on one output tube. No bias setting or output was measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender 5F6-A output stage"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-narrow-panel-tweed-bassman",
      "Narrow-panel Bassman field guide"
     ]
    ]
   },
   {
    "id": "supply",
    "label": "GZ34 and choke-filtered supply",
    "side": "rear",
    "menuOnly": false,
    "title": "A GZ34 and a choke.",
    "body": "The 5F6-A rectifies with a GZ34 and filters the high voltage through a choke. The rectifier is its own bottle next to the two 5881s.",
    "attributes": [
     [
      "Rectifier",
      "GZ34"
     ],
     [
      "Choke designation",
      "14684"
     ]
    ],
    "listen": "A tube rectifier drops some voltage when the amp works hard, and players feel that as some give under the pick. How much depends on the transformer, the choke and the filtering too.",
    "together": "The drawing lists power transformer 8087, choke 14684 and output transformer 45249.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing I-EG.",
    "detail": "The marker is on the rectifier. Voltages on the drawing are service references. Sag wasn’t measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender 5F6-A power supply and parts box"
     ]
    ]
   },
   {
    "id": "speakers",
    "label": "Four tens and four parallel jacks",
    "side": "rear",
    "menuOnly": false,
    "title": "Four tens, four jacks, 2 ohms.",
    "body": "Each of the four 8-ohm tens plugs into its own jack under the chassis, and the jacks are wired in parallel. Together that’s a 2-ohm load. The stock speakers are Jensen P10Rs or P10Qs.",
    "attributes": [
     [
      "Stock speakers",
      "4 × 10-inch Jensen P10R or P10Q"
     ],
     [
      "Load",
      "8 Ω ÷ 4 = 2 Ω"
     ]
    ],
    "listen": "Unplug one speaker and the others keep working, but the load goes up and the amp isn’t running into what it was built for. The four jacks are one output, not four.",
    "together": "The layout shows the four linked jacks, and the schematic shows four speakers in parallel.",
    "extraTitle": "Where this comes from",
    "extra": "Wiring from Fender drawing I-EG. Speaker models from Mojotone’s Fender field guide.",
    "detail": "The marker is on the speakers, which are generic in the model. Cabinet width is an estimate, and published figures vary by about an inch.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
      "Fender 5F6-A parallel output and jack layout"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-narrow-panel-tweed-bassman",
      "Narrow-panel Bassman speaker format"
     ]
    ]
   }
  ]
 },
 "bassman-blackface-ab165-1965": {
  "name": "Bassman AB165",
  "parts": [
   {
    "id": "deep",
    "label": "Bass-channel Deep switch",
    "side": "front",
    "menuOnly": false,
    "title": "The Bass channel has Deep, the Normal channel has Bright.",
    "body": "The Bass Instrument channel’s Deep switch works in its tone circuit. The Normal channel’s Bright switch works at its Volume. They’re two switches in two different places, not opposite settings of one control.",
    "attributes": [
     [
      "Channels",
      "Bass Instrument and Normal"
     ],
     [
      "Revision",
      "AB165"
     ]
    ],
    "listen": "Each channel also has its own Volume, Treble and Bass, so the two can be set up for different jobs.",
    "together": "Fender made three black-panel Bassman circuits: the AA864, AA165 and AB165. The tube-chart labels were reused, so check the circuit on the board, not the chart. These cards cover the AB165.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing D-FE and Mojotone’s Fender field guide.",
    "detail": "The marker is on the Deep switch. No response was measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-AB165-Schematic.pdf",
      "Fender AB165 Bass-channel tone network and layout"
     ]
    ]
   },
   {
    "id": "bright",
    "label": "Normal-channel Bright bypass",
    "side": "front",
    "menuOnly": false,
    "title": "The Normal channel’s Bright switch.",
    "body": "Bright puts a 120 pF cap across part of the Normal channel’s Volume pot, so treble gets around the pot. It doesn’t touch the Bass channel.",
    "attributes": [
     [
      "Bright capacitor",
      "120 pF"
     ],
     [
      "Location",
      "Normal-channel Volume"
     ]
    ],
    "listen": "It does the most at low Volume settings and less as you turn up, because there’s less pot left for the cap to get around.",
    "together": "The cap and switch sit on the Normal Volume on the drawing. The tone controls stay in the circuit either way.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing D-FE, the AB165 schematic and layout.",
    "detail": "The marker is on the Bright switch. No response curve was measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-AB165-Schematic.pdf",
      "Fender AB165 Normal-channel circuit"
     ]
    ]
   },
   {
    "id": "gain",
    "label": "Shared gain stage and feedback",
    "side": "rear",
    "menuOnly": true,
    "title": "Both channels go through one more gain stage.",
    "body": "After their own preamps, the two channels join at a shared 7025 gain stage before the 12AT7 phase inverter. The feedback loop comes back to that stage too.",
    "attributes": [
     [
      "Shared stage",
      "7025 triode"
     ],
     [
      "Feedback return",
      "From output network"
     ]
    ],
    "listen": "That’s one more stage than you’d expect from comparing it with other black-panel Fenders, and you’re hearing it whichever channel you use.",
    "together": "The schematic shows both channels feeding the shared stage, a 47 kΩ feedback connection from the output, and 220 kΩ paths from the output-tube plates back toward the drive network.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing D-FE, the AB165 schematic and layout.",
    "detail": "There’s no marker on the model for this one because the stage is inside the chassis. Gain wasn’t measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-AB165-Schematic.pdf",
      "Fender AB165 shared stage and feedback paths"
     ]
    ]
   },
   {
    "id": "balance",
    "label": "Output-tube bias balance",
    "side": "rear",
    "menuOnly": true,
    "title": "The bias control is a hum balance.",
    "body": "The AB165’s adjustment sets the balance between the two 6L6GCs, not the overall bias level. Fender’s drawing says to set it for minimum hum after fitting new output tubes.",
    "attributes": [
     [
      "Output tubes",
      "2 × 6L6GC"
     ],
     [
      "Adjustment",
      "10 kΩ balance pot"
     ]
    ],
    "listen": "If you’re reading a service record or a forum post, check which circuit it’s about. The earlier AA864 had a bias adjust pot, which is a different control.",
    "together": "It’s a 10 kΩ network on the AB165 schematic and layout, with Fender’s note printed beside it.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing D-FE. The AA864 detail is from Mojotone’s Fender field guide.",
    "detail": "There’s no marker on the model for this one because the control is inside the chassis. This describes the factory circuit, not a service procedure.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-AB165-Schematic.pdf",
      "Fender AB165 bias network and service annotation"
     ]
    ]
   },
   {
    "id": "power",
    "label": "6L6GC pair and silicon supply",
    "side": "rear",
    "menuOnly": false,
    "title": "No rectifier tube. Six diodes do it.",
    "body": "Two 6L6GCs make about 50 watts, and six silicon diodes handle the high voltage, so there’s no rectifier bottle. The other tubes are three 7025s and a 12AT7.",
    "attributes": [
     [
      "Power stage",
      "2 × 6L6GC"
     ],
     [
      "Complete complement",
      "Six tubes"
     ]
    ],
    "listen": "A diode supply doesn’t drop voltage under load the way the tweed Bassman’s GZ34 does. That’s one of several differences between the two, along with the speakers, the cabinet and the circuit.",
    "together": "The drawing shows the diode network and output transformer 125A13A. It also carries the CBS-era line “a division of Columbia Records Distribution Corp.”",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing D-FE, the AB165 schematic and layout.",
    "detail": "The marker is on the output tubes. Positions are estimates. Headroom wasn’t measured.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-AB165-Schematic.pdf",
      "Fender AB165 output and supply"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-blackface-bassman",
      "Black-panel Bassman rating and format"
     ]
    ]
   },
   {
    "id": "speakers",
    "label": "Closed 2x12 and parallel wiring",
    "side": "rear",
    "menuOnly": true,
    "title": "Two twelves in a closed cabinet.",
    "body": "The separate cabinet holds two 8-ohm twelves in parallel, a 4-ohm load, on one speaker cable from the head. Stock speakers were Jensen C12Ns, Oxford 12T6s or Utahs.",
    "attributes": [
     [
      "Cabinet",
      "Closed 2 × 12-inch"
     ],
     [
      "Stock speakers",
      "Jensen C12N · Oxford 12T6 · Utah"
     ],
     [
      "Load",
      "4 Ω"
     ]
    ],
    "listen": "Closed back, two twelves and a separate head make it a very different amp from the open-back, four-ten tweed Bassman. Speaker count, cabinet and circuit all count in that comparison.",
    "together": "The head has a speaker jack and an extension speaker jack. Which speaker brand went in during which year isn’t settled.",
    "extraTitle": "Where this comes from",
    "extra": "Wiring from Fender drawing D-FE. Speaker models and rear panel from Mojotone’s Fender field guide.",
    "detail": "There’s no marker on the model for this one because the speakers are behind the closed back. The twelves in the model are generic. Cabinet height is 21 inches published and 20 in a reader correction.",
    "sources": [
     [
      "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-AB165-Schematic.pdf",
      "Fender AB165 parallel speaker output"
     ],
     [
      "https://mojotone.com/blogs/fender-field-guide/fender-blackface-bassman",
      "Bassman cabinet dimensions and speaker formats"
     ]
    ]
   }
  ]
 },
 "pano-verb-2024": {
  "name": "Pano Verb",
  "parts": [
   {
    "id": "drive",
    "label": "Drive with an off detent",
    "side": "front",
    "menuOnly": false,
    "title": "Drive clicks off and takes its boost out.",
    "body": "Drive adds gain ahead of the main Volume, up to 26 dB by Fender’s spec. Turn it all the way down and it clicks off, which bypasses the boost completely.",
    "attributes": [
     [
      "Drive range",
      "Up to +26 dB, manufacturer specification"
     ],
     [
      "Off position",
      "Boost bypassed"
     ]
    ],
    "listen": "Off and barely on aren’t the same thing. If you want the amp without the Drive circuit, click it off.",
    "together": "Fender says higher Drive settings add level, distortion and compression.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s PR 6273 owner’s manual.",
    "detail": "The marker is on Drive. The manual doesn’t show the circuit.",
    "sources": [
     [
      "https://www.fmicassets.com/Damroot/Original/10063/OM_8151900000_Pano-Verb-Amp_USplus5.pdf",
      "Fender Pano Verb manual, Drive"
     ]
    ]
   },
   {
    "id": "reverb",
    "label": "Split / Full spring reverb",
    "side": "front",
    "menuOnly": false,
    "title": "Split leaves the fifteen dry.",
    "body": "In Split, the spring reverb goes only to the ten. In Full it goes to both speakers. Mix still sets how much reverb you hear.",
    "attributes": [
     [
      "Split",
      "Reverb to the ten only"
     ],
     [
      "Full",
      "Reverb to both speakers"
     ]
    ],
    "listen": "Split keeps the fifteen dry under the reverb on the ten, so the low end stays solid while the ten carries the reverb.",
    "together": "The reverb has its own Mix, Dwell, Treble and Bass controls, and Fender lists one 12AT7 for it.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s PR 6273 owner’s manual.",
    "detail": "The marker is on the Split/Full switch. Tank size and the mixing circuit aren’t documented.",
    "sources": [
     [
      "https://www.fmicassets.com/Damroot/Original/10063/OM_8151900000_Pano-Verb-Amp_USplus5.pdf",
      "Fender Pano Verb manual, reverb controls and routing"
     ]
    ]
   },
   {
    "id": "tremolo",
    "label": "Mono / Stereo harmonic tremolo",
    "side": "front",
    "menuOnly": false,
    "title": "Stereo tremolo bounces between the two speakers.",
    "body": "The tremolo is harmonic, and a switch picks Mono or Stereo. In Stereo the effect alternates between the fifteen and the ten, from one combo.",
    "attributes": [
     [
      "Mono",
      "Effect through both speakers"
     ],
     [
      "Stereo",
      "Alternating between speakers"
     ]
    ],
    "listen": "That only works because the two speakers have separate outputs. An amp with two speakers wired in parallel can’t do it.",
    "together": "Speed and Intensity set the effect, and Intensity clicks off at zero. Fender calls it harmonic tremolo, and the manual doesn’t show how it’s built.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s PR 6273 owner’s manual.",
    "detail": "The marker is on the Mono/Stereo switch. The model doesn’t simulate the effect.",
    "sources": [
     [
      "https://www.fmicassets.com/Damroot/Original/10063/OM_8151900000_Pano-Verb-Amp_USplus5.pdf",
      "Fender Pano Verb manual, tremolo routing"
     ]
    ]
   },
   {
    "id": "fifteen",
    "label": "Fifteen-inch C15N output",
    "side": "rear",
    "menuOnly": false,
    "title": "The fifteen is on the 50-watt output.",
    "body": "A 15-inch Jensen C15N runs off OUT 1, rated at 50 watts with a 4-ohm minimum load.",
    "attributes": [
     [
      "OUT 1",
      "50 W / 4 Ω minimum"
     ],
     [
      "Speaker",
      "15-inch Jensen C15N format"
     ]
    ],
    "listen": "The fifteen isn’t wired in parallel with the ten. It has its own output, so there’s no single impedance for the amp.",
    "together": "Fender’s manual confirms the speaker, the output and the load.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s PR 6273 owner’s manual.",
    "detail": "The marker is on the fifteen. Its basket and magnet are generic in the model. 50 watts is the amp’s output, not the speaker’s rating.",
    "sources": [
     [
      "https://www.fmicassets.com/Damroot/Original/10063/OM_8151900000_Pano-Verb-Amp_USplus5.pdf",
      "Fender Pano Verb manual, OUT 1 specifications"
     ],
     [
      "https://uk.fender.com/products/jack-white-pano-verb",
      "Fender factory product description and photographs"
     ]
    ]
   },
   {
    "id": "ten",
    "label": "Ten-inch P10R output",
    "side": "rear",
    "menuOnly": false,
    "title": "The ten is on the 20-watt output.",
    "body": "A 10-inch Jensen P10R alnico runs off OUT 2, rated at 20 watts with an 8-ohm minimum load. It’s the speaker that gets the reverb in Split.",
    "attributes": [
     [
      "OUT 2",
      "20 W / 8 Ω minimum"
     ],
     [
      "Speaker",
      "10-inch Jensen P10R format"
     ]
    ],
    "listen": "With its own output, the ten can carry reverb or tremolo that the fifteen doesn’t. That’s what makes Split reverb and Stereo tremolo possible.",
    "together": "Fender’s specs give the P10R and the 8-ohm output.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s PR 6273 owner’s manual.",
    "detail": "The marker is on the ten. Its position follows Fender’s rear photo and is an estimate.",
    "sources": [
     [
      "https://www.fmicassets.com/Damroot/Original/10063/OM_8151900000_Pano-Verb-Amp_USplus5.pdf",
      "Fender Pano Verb manual, OUT 2 and Split routing"
     ],
     [
      "https://uk.fender.com/products/jack-white-pano-verb",
      "Fender factory speaker format and rear photograph"
     ]
    ]
   },
   {
    "id": "outputs",
    "label": "Two output jacks, two loads",
    "side": "rear",
    "menuOnly": false,
    "title": "Two speaker jacks, two separate outputs.",
    "body": "OUT 1 and OUT 2 each drive one speaker and have different minimum loads. They’re not a main jack and an extension jack.",
    "attributes": [
     [
      "OUT 1",
      "4 Ω minimum / fifteen"
     ],
     [
      "OUT 2",
      "8 Ω minimum / ten"
     ]
    ],
    "listen": "The 70-watt rating is 50 plus 20 across two outputs. It isn’t 70 watts into one load.",
    "together": "Fender’s manual labels both jacks and says which speaker each one feeds.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s PR 6273 owner’s manual.",
    "detail": "The marker is on the output jacks. Their spacing is estimated.",
    "sources": [
     [
      "https://www.fmicassets.com/Damroot/Original/10063/OM_8151900000_Pano-Verb-Amp_USplus5.pdf",
      "Fender Pano Verb manual, rear panel and specifications"
     ]
    ]
   },
   {
    "id": "power",
    "label": "6L6 and 6V6 output pairs",
    "side": "rear",
    "menuOnly": false,
    "title": "A 6L6 pair and a 6V6 pair in one box.",
    "body": "The Pano Verb has two 6L6s, two 6V6s, six 12AX7s and a 12AT7. It’s two power amps in one cabinet: the 6L6 pair on the 50-watt fifteen side and the 6V6 pair on the 20-watt ten side.",
    "attributes": [
     [
      "Power tubes",
      "2 × 6L6 + 2 × 6V6"
     ],
     [
      "Audio/effects tubes",
      "6 × 12AX7 + 1 × 12AT7"
     ]
    ],
    "listen": "The two sides aren’t the same amp at two volumes. They have different output tubes and different speakers, and the reverb and tremolo switches let you use that.",
    "together": "Fender lists eleven tubes. The manual doesn’t include a socket map or a power-supply schematic, and no rectifier tube is listed.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s specifications. Which tube pair goes with which output is from our catalog and Fender’s product page, not a schematic.",
    "detail": "The marker is on the output tubes. Socket positions are estimates.",
    "sources": [
     [
      "https://www.fmicassets.com/Damroot/Original/10063/OM_8151900000_Pano-Verb-Amp_USplus5.pdf",
      "Fender Pano Verb manual, tube complement"
     ],
     [
      "https://uk.fender.com/products/jack-white-pano-verb",
      "Fender factory design description"
     ]
    ]
   }
  ]
 }
};
