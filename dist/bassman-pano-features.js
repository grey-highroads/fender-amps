// Builder factual first drafts, scoped to factory circuit/manual evidence. No generated media.
export const BP_EXPLORATIONS={
 "bassman-5f6a": {
  "name": "Tweed Bassman",
  "parts": [
   {
    "id": "inputs",
    "label": "12AY7 and shared input cathode",
    "side": "top",
    "menuOnly": false,
    "title": "Both channels start in one 12AY7.",
    "body": "Normal and Bright use separate halves of the same 12AY7, with a shared cathode resistor and bypass capacitor. They have individual Volume controls before mixing.",
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
    "listen": "A shared cathode network gives the channels an electrical relationship even before their signals meet at the mixing resistors. It is one reason to compare their actual circuits rather than assume two fully independent preamps.",
    "together": "The I-EG drawing shows 68 kΩ input resistors and 1 MΩ input returns. Each input pair has switching contacts; the first tube differs from the 12AX7 input specified in many later Fender designs.",
    "extraTitle": "Circuit and construction",
    "extra": "The drawing establishes the factory tube type. The model does not measure gain or claim that every surviving amp still has that tube fitted.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "The Bright Volume has a 100 pF bypass.",
    "body": "A small capacitor bypasses part of the Bright channel’s Volume pot. The Normal Volume does not have that capacitor.",
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
    "listen": "The bypass is expected to preserve more high-frequency signal at lower Volume settings. Its effect diminishes as less pot resistance remains in the signal path; that is circuit inference.",
    "together": "The schematic prints .0001 µF; the layout marks 100 MMF on the Bright Volume. The channels mix through separate 270 kΩ resistors.",
    "extraTitle": "Circuit and construction",
    "extra": "This is an always-connected capacitor, not a later panel Bright switch. No measured response curve is implied.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "A cathode follower drives the tone controls.",
    "body": "After the channel mix, a 12AX7 gain stage directly drives another triode configured as a cathode follower. The tone stack takes its signal from that follower’s cathode.",
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
    "listen": "The follower provides a lower-impedance source for the passive tone stack than a typical plate-fed stage. Its operation also matters when analyzing the amp under overload.",
    "together": "The I-EG drawing shows the direct connection from the gain-stage plate to the follower grid. The low-impedance description is engineering interpretation of that topology.",
    "extraTitle": "Circuit and construction",
    "extra": "No numerical clipping threshold, distortion spectrum or subjective breakup result has been measured. The internal connection stays menu-only.",
    "detail": "Hidden circuit or enclosed component; available through the menu. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Middle is adjustable in this tweed circuit.",
    "body": "The 5F6-A has a three-control tone stack after the cathode follower. Middle uses a pot rather than a fixed resistance.",
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
    "listen": "These passive controls interact. Changing Middle alters the loading and tonal balance of the network rather than adding an independent active mid boost.",
    "together": "The drawing specifies a 250 pF treble capacitor and .02 µF capacitors in the tone network. Treble is 250 kΩ and Bass is 1 MΩ.",
    "extraTitle": "Circuit and construction",
    "extra": "The marker identifies the shared top-panel Middle control. Exact knob taper behavior and response are not simulated.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Presence works in the feedback return.",
    "body": "A sample from the speaker output returns to the phase-inverter network. Presence changes the frequency-dependent action of that feedback path.",
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
    "listen": "Presence acts after the channels have joined and at a different circuit location from Treble. Matching the two knob settings does not mean matching their effect.",
    "together": "The drawing shows the 27 kΩ feedback connection and the Presence pot with its capacitor. The topology supports a change in high-frequency feedback action.",
    "extraTitle": "Circuit and construction",
    "extra": "Descriptions of increased bite or altered attack are interpretations; no listening or frequency-response measurement is included here.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "The inverter uses two triodes.",
    "body": "The 5F6-A phase inverter is a long-tailed pair. Its two outputs feed the push-pull 5881 pair through separate coupling capacitors.",
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
    "listen": "The inverter has gain and can contribute to overload behavior. It is a different arrangement from the split-load inverter in the smaller tweed Deluxe.",
    "together": "The layout labels the inverter 12AX7. On the companion schematic its tube label appears to read 12AY7; the model follows the layout and records this source conflict as Q29.",
    "extraTitle": "Circuit and construction",
    "extra": "The long-tailed-pair topology is clear in both views. The label discrepancy prevents treating the entire drawing pair as an unambiguous tube specification.",
    "detail": "Hidden circuit or enclosed component; available through the menu. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Two 5881s drive the four tens.",
    "body": "The output stage uses two 5881s with a fixed negative-bias supply. The original network has no bias-adjustment pot.",
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
    "listen": "This output stage differs from the cathode-biased small tweeds. Its operating behavior depends on the supply, load and tubes together.",
    "together": "The drawing shows the fixed bias network and individual screen resistors. The catalog retains the approximate 45 W rating.",
    "extraTitle": "Circuit and construction",
    "extra": "The scanned bias-voltage annotation is hard to read. No exact measured bias setting, dissipation or clean-power result is assigned to this model.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "A GZ34 feeds the power supply.",
    "body": "The 5F6-A uses a GZ34 rectifier and a choke in its high-voltage filtering network. Its rectifier remains a separate bottle from the two output tubes.",
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
    "listen": "Rectifier voltage loss and filtering affect how the supply responds to demand. This construction model shows their relationship without assigning a measured amount of sag.",
    "together": "Drawing I-EG specifies power transformer 8087 and output transformer 45249. The factory rectifier is taken from the drawing rather than a replacement in a surviving amp.",
    "extraTitle": "Circuit and construction",
    "extra": "Transformer envelopes and mounting coordinates are estimates. Voltage markings on the drawing are service references, not current measurements.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Each ten has its own chassis connection.",
    "body": "Four nominal 8 Ω ten-inch speakers connect to four parallel speaker jacks under the chassis. Their combined nominal load is 2 Ω.",
    "attributes": [
     [
      "Speaker array",
      "4 × 10-inch alnico format"
     ],
     [
      "Nominal wiring",
      "8 Ω ÷ 4 = 2 Ω"
     ]
    ],
    "listen": "Removing a driver changes the load even though the remaining speakers still work. The four jacks are one output network, not four independent power amplifiers.",
    "together": "The layout shows four linked jacks and the schematic four parallel speakers. P10R/P10Q attribution comes from secondary format research; the generic speaker geometry authenticates neither an individual speaker nor a universal supplier date.",
    "extraTitle": "Circuit and construction",
    "extra": "Cabinet width remains a 23-inch working estimate. Frame spacing, wiring routes and original rear-board dimensions are not measured vintage geometry.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Deep changes the Bass channel’s tone network.",
    "body": "The Bass Instrument channel has a Deep switch in its tone circuit, while the Normal channel has a Bright switch at its Volume control.",
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
    "listen": "The two switches act at different points. Deep and Bright are not opposite labels on a single shared boost circuit.",
    "together": "The AB165 drawing places Deep in the Bass-channel tone network. The front order follows the factory layout, reversed from its underside view.",
    "extraTitle": "Circuit and construction",
    "extra": "The card is scoped to AB165. Earlier AA864 and AA165 circuits must be identified separately, regardless of a reused tube-chart label.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Normal has its own switched bright capacitor.",
    "body": "The Normal channel’s Bright switch connects a 120 pF capacitor around part of its Volume control. It does not switch the Bass channel’s tone network.",
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
    "listen": "A Volume bypass is expected to make a larger difference at lower settings. Its action depends on how much pot resistance remains to be bypassed.",
    "together": "The capacitor and switch are shown at the Normal Volume on drawing D-FE. The surrounding channel tone network remains in circuit.",
    "extraTitle": "Circuit and construction",
    "extra": "The expected setting dependence is circuit inference. No response curve or measured treble boost is claimed.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Both channels pass through another gain stage.",
    "body": "After their separate preamps, the channels join at a shared 7025 gain stage before the 12AT7 inverter. AB165 also returns output feedback to this stage.",
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
    "listen": "The post-mix gain stage makes the signal path different from a simple two-stage-per-channel comparison with other black-panel Fender amps.",
    "together": "The schematic shows both channel feeds entering the shared stage and a 47 kΩ feedback connection from the output. Additional 220 kΩ paths return output-tube plate signals toward the drive network.",
    "extraTitle": "Circuit and construction",
    "extra": "These connections identify AB165 topology. No amount of gain, stability margin or audible breakup change is derived from the model.",
    "detail": "Hidden circuit or enclosed component; available through the menu. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "The factory adjustment balances the output pair.",
    "body": "AB165 uses a balance adjustment in the output-tube bias network. Fender’s drawing instructs setting it for minimum hum when fitting new output tubes.",
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
    "listen": "Balance and overall bias level are different adjustments. A description of the earlier AA864 bias control should not be transferred to this circuit.",
    "together": "The 10 kΩ network and the service note appear on the AB165 schematic and layout.",
    "extraTitle": "Circuit and construction",
    "extra": "This is a description of the factory circuit, not a live servicing procedure. The hidden control is kept as a menu-only topic.",
    "detail": "Hidden circuit or enclosed component; available through the menu. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "The black-panel Bassman has no rectifier tube.",
    "body": "Two 6L6GCs form the output pair. Six silicon diodes supply the high-voltage DC; the smaller bottles are three 7025s and one 12AT7.",
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
    "listen": "The two-box format does not mean two amplifiers. One head drives the passive speaker cabinet through its output transformer.",
    "together": "Drawing D-FE identifies the diode network and output transformer 125A13A. The authoritative catalog keeps the approximate 50 W rating.",
    "extraTitle": "Circuit and construction",
    "extra": "Tube and transformer positions are explanatory estimates. No measured headroom or supply-stiffness comparison is attached to the geometry.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "The cabinet holds two twelves on one output.",
    "body": "Two nominal 8 Ω twelve-inch speakers in parallel give a nominal 4 Ω load. The head connects to the closed speaker cabinet through one speaker cable.",
    "attributes": [
     [
      "Speaker cabinet",
      "Horizontal 2 × 12-inch"
     ],
     [
      "Nominal load",
      "4 Ω"
     ]
    ],
    "listen": "This cabinet differs from the four-tens open-back tweed Bassman. Speaker count, enclosure and circuit revision all matter when making a comparison.",
    "together": "The AB165 schematic draws two parallel speakers. Speaker suppliers vary in the secondary record, so these are generic ceramic-format twelves.",
    "extraTitle": "Circuit and construction",
    "extra": "The cabinet remains closed in the model. Its 21-inch working height conflicts with a 20-inch reader correction (Q22); exact baffle and fastener coordinates remain estimates.",
    "detail": "Hidden circuit or enclosed component; available through the menu. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Drive can be removed from the signal path.",
    "body": "The Drive control adds gain ahead of the amp’s main Volume. At its fully counterclockwise off setting, Fender specifies that the boost is bypassed.",
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
    "listen": "The off detent provides a defined comparison with the added gain path removed, rather than simply assuming that a low Drive setting is identical.",
    "together": "Fender describes higher Drive settings as increasing level, distortion and compression. Those are manufacturer descriptions, not measurements of this model.",
    "extraTitle": "Circuit and construction",
    "extra": "Exact gain-stage circuitry and clipping thresholds are not established by the owner manual. No schematic-level implementation is invented.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Reverb can leave the fifteen dry.",
    "body": "Split sends the spring-reverb signal to the ten-inch speaker only. Full sends it to both speakers. Mix still controls the amount of wet signal.",
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
    "listen": "Split separates the wet signal from the fifteen’s output path. It is a routing choice beyond simply turning the overall reverb level up or down.",
    "together": "The reverb section has Mix, Dwell and separate Treble/Bass controls. Fender identifies one 12AT7 reverb tube.",
    "extraTitle": "Circuit and construction",
    "extra": "The card describes documented routing. Tank dimensions, internal wire routes and the precise signal-mixing circuit are not authenticated.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Stereo alternates the effect between the speakers.",
    "body": "The tremolo switch selects a shared mono presentation or a stereo presentation alternating between the two speakers.",
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
    "listen": "The two separate output paths let the effect move across the unequal speakers within one combo. This differs from a single-output amp simply feeding two parallel speakers.",
    "together": "Speed and Intensity set the effect; Fender specifies an off detent at Intensity zero. The manual calls the effect harmonic tremolo.",
    "extraTitle": "Circuit and construction",
    "extra": "No internal modulation schematic or measured pitch shift is established. The model does not turn the manufacturer’s effect name into an unverified circuit topology.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "The fifteen has the 50 W output path.",
    "body": "A 15-inch Jensen C15N connects to OUT 1, rated at 50 W with a 4 Ω minimum load in Fender’s manual.",
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
    "listen": "The fifteen is not in parallel with the ten. Its load belongs to its own amplifier output, so a single combined impedance would misdescribe the amp.",
    "together": "The manual confirms the speaker, output number and nominal load. Its tube list names both output-tube types without providing a socket-by-socket wiring diagram.",
    "extraTitle": "Circuit and construction",
    "extra": "The ceramic motor, basket and label are generic modeled geometry. Nominal amplifier output is not presented as the speaker’s power-handling rating.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "The ten has the separate 20 W path.",
    "body": "A 10-inch Jensen P10R connects to OUT 2, specified at 20 W with an 8 Ω minimum load.",
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
    "listen": "This is the speaker that receives reverb in Split mode. Its independent output path enables the documented effect-routing choices.",
    "together": "Fender’s specifications identify the P10R alnico format and distinguish its output from the fifteen’s 4 Ω path.",
    "extraTitle": "Circuit and construction",
    "extra": "The alnico envelope and speaker position are estimated from the factory rear photograph, not measured. No sonic ranking of tens versus fifteens is implied.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "The two speaker jacks are separate outputs.",
    "body": "OUT 1 and OUT 2 each drive their own speaker and carry different minimum-load labels. They are not a main/extension pair.",
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
    "listen": "The combined 70 W figure describes 50 W plus 20 W across two amplifier paths. It does not describe 70 W into one shared load.",
    "together": "The owner manual labels both rear sockets and assigns the speaker connection for each. The model routes a separate lead to each driver.",
    "extraTitle": "Circuit and construction",
    "extra": "Rear-panel spacing is estimated. The amp remains assembled; these jacks are identified without changing any electrical configuration.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
    "title": "Two different output pairs share the cabinet.",
    "body": "The Pano Verb contains two 6L6s and two 6V6s, alongside six 12AX7s and one 12AT7. Its power section serves two speaker outputs.",
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
    "listen": "The unequal power paths are part of the amp’s construction, not a speaker-size variation on a single shared output stage.",
    "together": "The manufacturer documents eleven tubes total. The owner manual does not provide a socket map or an internal power-supply schematic.",
    "extraTitle": "Circuit and construction",
    "extra": "Tube envelopes and socket locations are explanatory estimates. No undocumented rectifier bottle or internal rectifier circuit is added.",
    "detail": "Marker follows the shared modeled component. Positions and detailed geometry are estimates; the model is not a socket-by-socket service layout or an acoustic simulation.",
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
