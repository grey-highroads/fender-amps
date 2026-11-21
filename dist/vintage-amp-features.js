// Builder factual first drafts. Wording awaits the copy role; facts are scoped to the selected circuit.
export const VINTAGE_EXPLORATIONS={
 "super-reverb-ab763": {
  "name": "Super Reverb",
  "parts": [
   {
    "id": "middle",
    "label": "Vibrato-channel Middle",
    "side": "front",
    "menuOnly": false,
    "title": "The Middle control belongs to the reverb channel.",
    "body": "The Super Reverb gives the Vibrato channel a Middle control while the Normal channel keeps a fixed mid resistance. The channels therefore offer different tone-shaping choices before the effects are considered.",
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
    "listen": "Middle changes the tone-stack loading as well as the midrange balance. It is a useful difference when comparing this amp with the Deluxe Reverb.",
    "together": "The AB763 drawing shows .022 µF mid capacitors in both channels. Those values are specific to this drawing; no AA763 change history is asserted here.",
    "extraTitle": "Circuit and construction",
    "extra": "The control is part of a passive tone stack. Turning it up does not add an independent active boost.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "Each channel can bypass highs around its Volume control.",
    "body": "Both channels have a switched 120 pF capacitor across part of the Volume pot. The switch changes the high-frequency path before the later stages.",
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
    "listen": "The bypass is expected to matter more at lower Volume settings, where more of the pot resistance remains in the signal path. This is circuit inference, not a measured response curve.",
    "together": "The capacitors and switches are shown on the AB763 Super Reverb drawing. This is different from an always-connected bright capacitor.",
    "extraTitle": "Circuit and construction",
    "extra": "At full Volume, the resistance being bypassed is small, so the switch has less work to do.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The reverb channel has another gain stage in the dry path.",
    "body": "The Vibrato channel mixes the recovered spring signal with the dry signal and then passes through another 7025 triode. The Normal channel reaches the channel mix without that extra stage.",
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
    "listen": "Even with Reverb turned down, the Vibrato channel retains its extra stage and dry mixing network. The two channels are not identical clean paths.",
    "together": "The AB763 drawing shows two input-channel stages followed by the dry/wet mixing stage; the spring recovery uses the other half of that 7025.",
    "extraTitle": "Circuit and construction",
    "extra": "The reverb tank and transformer envelopes are shown as estimates. Spring length, tank identity and decay are not measured by the model.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The pulse comes after the reverb mix.",
    "body": "The AB763 tremolo uses an oscillator and an optical coupling element to vary signal level in the Vibrato channel after the reverb mixing stage.",
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
    "listen": "The effect changes level rather than deliberately shifting pitch. It has a different circuit mechanism from the harmonic vibrato in the brown Vibrasonic and blonde Showman.",
    "together": "The optical element loads the signal near the channel output. Speed controls the oscillator rate and Intensity sets the coupling to the audio path.",
    "extraTitle": "Circuit and construction",
    "extra": "No pulse waveform or tremolo depth has been measured here; the model shows the control, not the hidden optical unit.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "Four 8 Ω tens share one output.",
    "body": "The four speakers are connected in parallel. With four nominal 8 Ω drivers, the combined nominal load is 2 Ω.",
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
    "listen": "Changing the speaker count changes the load. Disconnecting two of the four equal drivers gives 4 Ω; this is a wiring calculation, not a recommendation for operating the amp.",
    "together": "The Fender drawing shows four parallel speakers. Nominal driver and load values come from the model research; impedance varies with frequency.",
    "extraTitle": "Circuit and construction",
    "extra": "The generic ceramic frames do not establish one stock supplier for every 1965 amp. Jensen, CTS and Oxford references must remain distinguished from individual fitted speakers.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "AB763 keeps a tube rectifier.",
    "body": "The Super Reverb AB763 uses a GZ34 to supply its high-voltage DC. Its two 6L6GC output tubes and tube rectifier distinguish this power section from the four-output-tube, diode-rectified Showman.",
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
    "listen": "A tube rectifier has voltage loss that varies with current. How much supply movement reaches the player depends on the whole power supply and operating level; no amount of sag is measured here.",
    "together": "The drawing specifies GZ34. It does not justify substituting the rectifier specification of a later Super Reverb revision.",
    "extraTitle": "Circuit and construction",
    "extra": "The rectifier position and bottle envelope are estimated. The card concerns the AB763 specification, not the installed tube in a particular surviving amp.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "Two 6L6GCs drive the four tens.",
    "body": "The AB763 output stage uses two 6L6GCs with adjustable fixed bias and a transformer feeding the speaker array.",
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
    "listen": "Four speakers do not mean four power tubes. The Super pairs a two-tube output stage with more cone area than the smaller one- and two-speaker combos.",
    "together": "The drawing identifies output transformer 125A9A and a 10 kΩ bias adjustment. Its voltage annotations are service references, not current measurements.",
    "extraTitle": "Circuit and construction",
    "extra": "The transformer impedance figures and claims about unusually tight bass come from secondary analysis, not the part-number box alone.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "Speaker output also returns to the phase inverter.",
    "body": "An 820 Ω resistor feeds a sample of the output signal back to the inverter network, where the drawing shows a 100 Ω return resistance.",
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
    "listen": "Feedback changes gain and output-stage behavior. Comparing the feel with another amp requires the output tap and whole loop, not just matching these two resistor values.",
    "together": "The AB763 drawing establishes the connection and values. A percentage comparison with other Fender models requires analysis beyond that drawing.",
    "extraTitle": "Circuit and construction",
    "extra": "No numerical feedback reduction, distortion result or breakup threshold is assigned to this model.",
    "detail": "The circuit is hidden; this topic is available through the menu. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The cabinet can aim the four tens upward.",
    "body": "Long side-mounted legs allow the tall cabinet to rest at an angle. This changes where the speaker array points without changing its wiring.",
    "attributes": [
     [
      "Hardware",
      "19-inch legs in the field guide"
     ],
     [
      "Model pose",
      "Upright, legs stowed"
     ]
    ],
    "listen": "Tilting changes the listening angle at the player’s ears. A directional measurement would be needed to quantify the difference in treble at a particular position.",
    "together": "The leg length follows the field guide. Pivot, stop and cross-section dimensions remain estimates.",
    "extraTitle": "Circuit and construction",
    "extra": "The shared model keeps the legs attached in the same upright assembly; it does not simulate a deployed, load-bearing stand.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The early Vibrasonic has its own tone-control circuit.",
    "body": "Each channel has Bass, Treble and Volume. The 5G13 drawing uses a different tone network from the later black-panel AB763 family.",
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
    "listen": "Matching knob positions between a Vibrasonic and a black-panel Fender does not establish matching response. The circuit around those controls matters.",
    "together": "The early drawing shows a 250 kΩ Treble control and 250 kΩ Bass control in each channel. Later 6G13-A values are outside this card.",
    "extraTitle": "Circuit and construction",
    "extra": "The front order is read by reversing the underside layout view: Bass, Treble, Volume within each channel.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The motion involves frequency bands, not just level.",
    "body": "The 5G13 Vibrato channel routes audio through a multi-triode modulation network before the phase inverter. It is the brown-era harmonic arrangement rather than the later optical tremolo circuit.",
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
    "listen": "Opposed modulation of the filtered paths changes the tonal balance over the cycle. That description follows circuit operation; the model does not synthesize or measure the effect.",
    "together": "The Fender drawing shows the oscillator and the two signal branches feeding the modulation stage, controlled by Speed and Intensity.",
    "extraTitle": "Circuit and construction",
    "extra": "Five 7025 means five dual-triode bottles in the whole amp, not five tubes devoted only to vibrato. The later eight-tube catalog configuration is not used here.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "Presence acts beyond the channel tone controls.",
    "body": "The 5G13 Presence control is part of the output-feedback network. It changes that network’s frequency-dependent action after the two channels have joined.",
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
    "listen": "Presence can change high-frequency behavior in both channels. It works at a different point from the individual Treble controls.",
    "together": "The drawing connects feedback from the output transformer secondary to the inverter network and shows the Presence pot and capacitor there.",
    "extraTitle": "Circuit and construction",
    "extra": "Describing a change in attack is an engineering interpretation. No response curve or player comparison is measured in this model.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The Vibrasonic puts one fifteen in an open-back combo.",
    "body": "The early Vibrasonic combines a single 15-inch Lansing-format speaker with its two-6L6GC amplifier. The large aluminum dust dome is a distinctive part of the speaker construction.",
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
    "listen": "Diameter alone does not predict the sound. Cone, motor, dome, cabinet and condition all matter when comparing a fifteen with a group of tens.",
    "together": "The later Fender catalog explicitly names a Lansing D-130. It supports the speaker family but does not settle every suffix or factory detail of the selected 1960 5G13.",
    "extraTitle": "Circuit and construction",
    "extra": "The cast basket, motor dimensions and dome are generic construction estimates. No later D140F replacement is presented as original equipment.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The early circuit uses a 6L6GC pair.",
    "body": "The 5G13 drawing specifies two 6L6GC output tubes with fixed grid bias. There is no user bias control on the front or rear panel.",
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
    "listen": "This is a two-output-tube combo. Its single fifteen and power supply do not make it the same amplifier as the four-5881 Showman.",
    "together": "The early drawing shows the pair and its bias supply. Later catalog literature lists 5881s and a different small-tube complement; those are not silently carried onto 5G13.",
    "extraTitle": "Circuit and construction",
    "extra": "Secondary references quote 50 W. The catalog’s 40 W remains the displayed rating; no output-power test was performed.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "There is no rectifier tube in the 5G13.",
    "body": "Six rectifier diodes supply the high-voltage DC. The seven glass bottles in this early circuit are five 7025s and two 6L6GCs.",
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
    "listen": "This removes a tube rectifier’s particular voltage-drop behavior. The amount of supply movement still depends on the transformer, filtering and load.",
    "together": "Both the schematic and layout A-FJ show the diode network. The early circuit has a speaker jack and a vibrato-pedal jack, with no later extension-speaker jack.",
    "extraTitle": "Circuit and construction",
    "extra": "The diodes are inside the chassis and are available as a menu topic. No first-ever claim is made from this drawing alone.",
    "detail": "The circuit is hidden; this topic is available through the menu. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The blonde Showman keeps the harmonic effect.",
    "body": "The 6G14-A Vibrato channel uses filtered signal branches and a multi-triode modulation circuit. The Normal channel bypasses that effect network.",
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
    "listen": "The changing balance of filtered audio gives a different kind of motion from the optical tremolo of a Super Reverb. This is a circuit comparison, not an audio demonstration.",
    "together": "Drawing K-FJ shows the oscillator, modulation stages and recombination before the inverter. The complete amp also uses four 7025s.",
    "extraTitle": "Circuit and construction",
    "extra": "The marker identifies Intensity on the shared front panel. The hidden oscillator and frequency-selective components are not placed as visible exterior parts.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "Presence changes feedback after the channels join.",
    "body": "The 6G14-A has one Presence control for the amplifier, alongside separate Bass and Treble controls for each channel.",
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
    "listen": "Presence works on a shared part of the circuit, so it can affect the Normal channel as well as the Vibrato channel.",
    "together": "The Fender drawing places the Presence network in the feedback return at the inverter. It is not another preamp Treble control.",
    "extraTitle": "Circuit and construction",
    "extra": "The brown faceplate uses estimated ivory barrel knobs from selected-year photographs. Exact pointer shape and lettering remain studies.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The head has four output tubes.",
    "body": "Four 5881s form the 6G14-A push-pull output stage. The amplifier sits in the head, connected by a speaker lead to the separate cabinet.",
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
    "listen": "The separate cabinet does not contain a second power amplifier. Its speaker receives the output from the head’s transformer.",
    "together": "The Fender schematic and layout identify all four 5881 sockets. Two 12AX7s and four 7025s complete the ten-tube complement.",
    "extraTitle": "Circuit and construction",
    "extra": "Published ratings range from about 80 to 100 W. The authoritative catalog retains 85 W; no measured power or universal clean-headroom threshold is asserted.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "All ten tubes have jobs beyond rectification.",
    "body": "The Showman 6G14-A uses six silicon rectifier diodes. Its ten glass bottles serve the audio and modulation circuits.",
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
    "listen": "A diode supply differs from the Super Reverb’s GZ34 supply. Rectifier type alone does not predict the complete amp’s stiffness or feel.",
    "together": "The drawing shows two three-diode strings feeding the high-voltage supply, with separate bias circuitry.",
    "extraTitle": "Circuit and construction",
    "extra": "The rectifier network is inside the chassis and stays a menu-only topic. No fictitious rectifier bottle is added to the model.",
    "detail": "The circuit is hidden; this topic is available through the menu. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The speaker has its own enclosure.",
    "body": "The Showman separates the chassis and speaker into two boxes. In the tone-ring format, an inner mounting ring supports the speaker behind the outer baffle aperture.",
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
    "listen": "Separating the boxes changes the construction and placement options. The cabinet’s tone-ring path also makes a simple open-back-combo comparison incomplete.",
    "together": "The period catalog describes separate Lansing speaker enclosures and shows the head mounted above the cabinet. The modeled annular path follows the tone-ring construction references.",
    "extraTitle": "Circuit and construction",
    "extra": "The ring, supports, port spacing and fasteners are estimates. The model does not calculate acoustic tuning or promise a particular bass response.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "The fifteen is inside the closed cabinet.",
    "body": "The selected Showman format uses a single nominal 8 Ω, 15-inch Lansing-format driver. The cabinet rear stays in place in this assembled view.",
    "attributes": [
     [
      "Speaker",
      "One fifteen-inch driver"
     ],
     [
      "Visibility",
      "Hidden behind the closed rear panel"
     ]
    ],
    "listen": "A single driver must be considered together with its power handling and the amplifier output. No unknown vintage speaker rating is inferred from this model.",
    "together": "The period Fender catalog identifies a fifteen-inch Lansing speaker but does not print a model suffix. That supports the format without resolving D130 versus later F-series fitment for 1961.",
    "extraTitle": "Circuit and construction",
    "extra": "The internal cast-frame study is shared with the Vibrasonic. It does not authenticate the D140F replacements found in surviving Showman cabinets.",
    "detail": "The circuit is hidden; this topic is available through the menu. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
    "title": "Tilting the cabinet also requires securing the head.",
    "body": "The piggyback format combines cabinet tilt-back legs with head-securing hardware. The head and cabinet remain separate structures even when mounted together.",
    "attributes": [
     [
      "Construction",
      "Separate head and cabinet"
     ],
     [
      "Displayed pose",
      "Upright with legs stowed"
     ]
    ],
    "listen": "The hardware lets the speaker enclosure point upward while retaining the head on top. This model shows the relationship without simulating deployed hardware.",
    "together": "Period Fender catalog text describes tilt-back legs and top mounting for the Showman chassis unit.",
    "extraTitle": "Circuit and construction",
    "extra": "Leg length, pivot locations and hold-down dimensions are estimates. Replaced lugs in specimen photographs are not taken as proof of factory geometry.",
    "detail": "Marker follows the shared component coordinates. Geometry and interior placement are educational estimates, not a measured vintage assembly.",
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
