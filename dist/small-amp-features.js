// Drawing facts, interpretation and specimen history remain separate in each card.
export const PRINCETON_FEATURES=[
  {
    "id": "tone",
    "label": "Treble, Bass & fixed mids",
    "side": "front",
    "menuOnly": false,
    "title": "Two tone knobs still shape the mids.",
    "body": "There’s no Middle knob, but Treble and Bass still change the balance around the midrange. They share a passive network, so a number on one knob only makes sense alongside the other.",
    "attributes": [
      [
        "Panel",
        "Treble and Bass · no bright switch"
      ],
      [
        "Circuit",
        "Passive tone network before Volume"
      ]
    ],
    "listen": "If the low strings feel too full as you turn up, try less Bass before adding more Treble. You’re changing what the following stages have to handle.",
    "together": "The AA1164 drawing puts the tone network between the first input stage and Volume. A fixed resistor completes the ground leg where a larger Fender may have a Middle control.",
    "extraTitle": "What the evidence tells us",
    "extra": "No fixed-mid value is printed here: the available scan is coarse at that marking. The relationship is visible without assigning a doubtful number.",
    "detail": "The marker is on Treble; the network is hidden behind the panel. Control centers follow the shared hardware layout. Response has not been measured.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf",
        "Fender AA1164 · K-FD drawing"
      ]
    ]
  },
  {
    "id": "reverb",
    "label": "Spring reverb & dry mix",
    "side": "front",
    "menuOnly": false,
    "title": "Turning up Reverb adds return, not tank drive.",
    "body": "Volume changes the signal feeding the spring circuit. Reverb sets how much of the recovered spring signal joins the dry sound. You can get a different result by changing one and compensating with the other.",
    "attributes": [
      [
        "Driver",
        "Both halves of a 12AT7"
      ],
      [
        "Dry mix",
        "3.3 MΩ with 10 pF bypass"
      ]
    ],
    "listen": "Try a louder Volume setting with less Reverb, then the reverse at a suitable listening level. The springs and the following stages see different signal levels.",
    "together": "The drawing shows a transformer-coupled driver, spring unit, recovery stage and wet/dry mixing network. The dry path remains part of that network even with the spring return turned down.",
    "extraTitle": "What the evidence tells us",
    "extra": "The drawing establishes the signal paths. It doesn’t identify the installed tank’s decay, spring count or a modern replacement code.",
    "detail": "The marker identifies the Reverb control, not a visible tank or internal mixer. The floor tank envelope in the model is estimated.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf",
        "Fender AA1164 · K-FD drawing"
      ]
    ]
  },
  {
    "id": "tremolo",
    "label": "Bias tremolo",
    "side": "front",
    "menuOnly": false,
    "title": "The pulse reaches the output tubes.",
    "body": "The Princeton’s tremolo varies the bias on the two 6V6s. That puts the movement in the output stage, after the dry sound and spring return have come together.",
    "attributes": [
      [
        "Method",
        "Output-grid bias modulation"
      ],
      [
        "Factory drawing",
        "Fixed bias · no adjustment pot"
      ]
    ],
    "listen": "A held chord lets you hear how the pulse changes as the amp works harder. Depth depends on the output tubes’ operating conditions as well as Intensity.",
    "together": "The oscillator feeds the Intensity control and bias line. This differs from the optical signal shunt in the blackface Deluxe Reverb; it is not a claim that one method is always deeper.",
    "extraTitle": "What the evidence tells us",
    "extra": "Topology follows AA1164. Tremolo depth and bias interaction are engineering interpretation, not measurements of our reference amp.",
    "detail": "The marker is on Intensity. No optical tremolo device is modeled or implied.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf",
        "Fender AA1164 · K-FD drawing"
      ]
    ]
  },
  {
    "id": "inverter",
    "label": "Hidden: cathodyne inverter",
    "side": "rear",
    "menuOnly": true,
    "title": "Half a 12AX7 splits the drive.",
    "body": "The Princeton gives the two 6V6s opposite-polarity signals from one tube half. A Deluxe Reverb uses a different inverter circuit, so matching the output-tube names doesn’t make the two amps respond alike.",
    "attributes": [
      [
        "Topology",
        "Split-load / cathodyne"
      ],
      [
        "Drawing loads",
        "56 kΩ plate and cathode arms"
      ]
    ],
    "listen": "At high drive, the inverter and the output tubes belong in the same explanation of attack and distortion. There’s no single stage responsible for every cranked Princeton sound.",
    "together": "The other half of this 12AX7 runs the tremolo oscillator. The cathodyne splits phase without the large voltage gain of another conventional gain stage.",
    "extraTitle": "What the evidence tells us",
    "extra": "The AA1164 drawing establishes the stage assignment. No clipping threshold, waveform or gain measurement was made.",
    "detail": "Menu-only topic: this tube and its circuitry are partly hidden by the upper back panel. The selected rear view identifies the assembly area; socket spacing is estimated.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf",
        "Fender AA1164 · K-FD drawing"
      ]
    ]
  },
  {
    "id": "power",
    "label": "6V6 pair & feedback",
    "side": "rear",
    "menuOnly": false,
    "title": "Two 6V6s, with a different surrounding circuit.",
    "body": "The AA1164 drawing connects the screens directly to their supply node and shows no series screen resistors or control-grid stoppers at the output tubes. That’s a useful distinction from the AB763 Deluxe Reverb.",
    "attributes": [
      [
        "Output",
        "Two fixed-biased 6V6GTs"
      ],
      [
        "Feedback",
        "2.7 kΩ return from output secondary"
      ]
    ],
    "listen": "When two Princetons feel different, tube condition, bias and service changes are worth checking alongside the speaker. The tube brand alone doesn’t describe the operating circuit.",
    "together": "Output feedback returns to the stage ahead of the cathodyne. Its action depends on the amplifier and speaker load together; the resistor value alone is not a measurement of feedback strength.",
    "extraTitle": "What the evidence tells us",
    "extra": "These are drawing facts and circuit implications. They do not establish a safe substitution, measured output or the condition of a surviving amp.",
    "detail": "The marker identifies one output-tube envelope. Tube locations and glass shapes are illustrative, not a service layout.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf",
        "Fender AA1164 · K-FD drawing"
      ]
    ]
  },
  {
    "id": "supply",
    "label": "Rectifier & supply evidence",
    "side": "rear",
    "menuOnly": false,
    "title": "The rectifier story has a loose end.",
    "body": "The AA1164 drawing specifies a 5U4GB. Research also reports GZ34 on an early AA764-marked chart. A replacement bottle in a dealer’s amp can’t settle what Fender originally fitted.",
    "attributes": [
      [
        "Modeled specification",
        "5U4GB · AA1164 drawing"
      ],
      [
        "Open question",
        "Early chart reportedly specifies GZ34"
      ]
    ],
    "listen": "Rectifier type is one part of supply response. Transformer resistance, filter storage and current demand also affect what happens under a hard attack.",
    "together": "AA1164 draws four 20 µF supply sections with resistor filtering and no choke. That topology alone doesn’t tell us how much the supply drops or how the amp feels.",
    "extraTitle": "What the evidence tells us",
    "extra": "The scanned drawing carries later revision markings. The chart conflict remains unresolved, and no replacement recommendation follows from this card.",
    "detail": "The marker identifies the drawing-based rectifier envelope. Filter-can geometry and internal supply placement are estimates.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf",
        "Fender AA1164 · K-FD drawing"
      ],
      [
        "https://reverb.com/item/101149580-fender-princeton-reverb-1965-no-logo-black-panel",
        "Early chart evidence · researcher-reported"
      ]
    ]
  },
  {
    "id": "speaker",
    "label": "One ten & specimen history",
    "side": "rear",
    "menuOnly": false,
    "title": "A ten-inch speaker isn’t one particular sound.",
    "body": "The model uses an Oxford-style ten. Our main cabinet reference has a replacement Weber, while the generated illustrations use a generic ceramic speaker. Those are different evidence records.",
    "attributes": [
      [
        "Factory format represented",
        "One nominal 8 Ω ten"
      ],
      [
        "Model",
        "Oxford 10J4-style construction study"
      ]
    ],
    "listen": "Cone condition, motor, sensitivity and frequency response matter when you compare speakers. Diameter alone doesn’t establish bass response, headroom or breakup.",
    "together": "The Oxford-style selection follows the separately reported early-1965 example. It does not reproduce the main cabinet specimen’s replacement driver.",
    "extraTitle": "What the evidence tells us",
    "extra": "The speaker identity is specimen attribution, not a universal factory supplier rule. No original cone, power rating or response curve has been authenticated.",
    "detail": "The marker attaches to the actual shared speaker mesh. Basket, magnet and mounting dimensions remain estimated.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf",
        "Fender AA1164 · K-FD drawing"
      ],
      [
        "https://retrofret.com/products/fender-princeton-reverb-tube-amplifier-1965-9339",
        "Cabinet specimen A-03894 · replacement history"
      ]
    ]
  }
];
export const BROWN_FEATURES=[
  {
    "id": "channels",
    "label": "Normal & Bright tone networks",
    "side": "front",
    "menuOnly": false,
    "title": "Bright has its own tone circuit.",
    "body": "Each channel has its own Volume and Tone, and the drawing gives the two tone networks different capacitor values. This is more than two labels feeding a single tone control.",
    "attributes": [
      [
        "Controls",
        "Separate Volume and Tone per channel"
      ],
      [
        "Mixing",
        "220 kΩ resistors into the shared stage"
      ]
    ],
    "listen": "Compare the channels with the same guitar and similar level. The different networks give you another way to balance attack before you reach for a pedal.",
    "together": "The channels join through mixing resistors before a shared gain stage. Their controls are not the 5E3’s volume network, although no two paths sharing a circuit are perfectly isolated.",
    "extraTitle": "What the evidence tells us",
    "extra": "Channel order follows the inspected 1962 panel: Normal then Bright. We have not established the layout of every earlier brown Deluxe.",
    "detail": "The marker identifies Normal Tone. Components are hidden behind the panel; coordinates come from the shared six-knob profile.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf",
        "Fender 6G3 · I-FA drawing"
      ]
    ]
  },
  {
    "id": "tremolo",
    "label": "Bias tremolo on both channels",
    "side": "front",
    "menuOnly": false,
    "title": "Either channel goes through the pulse.",
    "body": "The 6G3 oscillator varies the output pair’s bias. Both channels have joined the signal path by then, so the tremolo belongs to both, despite a dealer description tying it to Bright.",
    "attributes": [
      [
        "Method",
        "6V6 grid-bias modulation"
      ],
      [
        "Controls",
        "Speed and Intensity"
      ]
    ],
    "listen": "You can choose the Normal channel’s balance and keep the tremolo. Listen to the pulse on a sustained note as well as a chord.",
    "together": "The Intensity wiper connects to the common output-grid bias feed. The output stage acts on whichever channel supplies the audio.",
    "extraTitle": "What the evidence tells us",
    "extra": "The Fender I-FA drawing supports this routing. Depth versus playing level is a circuit interaction, not a measured listening result here.",
    "detail": "The marker is on Intensity. The oscillator and bias network are internal.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf",
        "Fender 6G3 · I-FA drawing"
      ]
    ]
  },
  {
    "id": "inverter",
    "label": "Hidden: long-tail inverter",
    "side": "rear",
    "menuOnly": true,
    "title": "This Deluxe changes the way it drives the pair.",
    "body": "The brown Deluxe uses a two-triode long-tail phase inverter. The tweed 5E3 uses a one-triode cathodyne, so the change to brown covering came with a real circuit change.",
    "attributes": [
      [
        "Inverter",
        "12AX7 · long-tail pair"
      ],
      [
        "Comparison",
        "5E3 · split-load inverter"
      ]
    ],
    "listen": "Compare the way a note moves from clean attack into overdrive. The inverter, bias, feedback, supply and speaker all contribute to the difference.",
    "together": "The 6G3 drawing shows two inverter triodes with a common cathode/tail network and separate plate loads feeding the 6V6 grids.",
    "extraTitle": "What the evidence tells us",
    "extra": "The topology is a drawing fact. No one-stage explanation of the amp’s overdrive or resemblance to another brand is implied.",
    "detail": "Menu-only topic: the inverter tube and circuit sit behind the upper rear panel. The rear view identifies the chassis area; interior spacing is estimated.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf",
        "Fender 6G3 · I-FA drawing"
      ]
    ]
  },
  {
    "id": "power",
    "label": "Fixed bias & output feedback",
    "side": "rear",
    "menuOnly": false,
    "title": "The 6V6s keep their name and change their working conditions.",
    "body": "The brown Deluxe uses negative grid bias and feedback from the output transformer. The 5E3’s pair uses cathode bias and has no global speaker-output feedback loop.",
    "attributes": [
      [
        "Output",
        "Two 6V6GTs · fixed bias"
      ],
      [
        "Drawing feedback",
        "56 kΩ from output secondary"
      ]
    ],
    "listen": "That gives you concrete circuit differences to investigate when a brown Deluxe feels firmer than a tweed one. It doesn’t turn a bias label into a promise about compression.",
    "together": "The I-FA drawing shows a resistor-set bias supply without an adjustment pot. Tremolo is added to that same output-grid bias feed.",
    "extraTitle": "What the evidence tells us",
    "extra": "The marked voltages are drawing conditions, not readings from the modeled specimen. Bias and feedback effects here are engineering interpretation.",
    "detail": "The marker identifies one of the paired output tubes. The upper panel can obscure it at some angles; the menu always retains access.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf",
        "Fender 6G3 · I-FA drawing"
      ]
    ]
  },
  {
    "id": "rectifier",
    "label": "GZ34 supply",
    "side": "rear",
    "menuOnly": false,
    "title": "The drawing calls for a GZ34.",
    "body": "A 5Y3 fitted in a surviving amp doesn’t make it the 6G3 factory specification. Fender’s drawing names GZ34, and that is the tube represented in this construction study.",
    "attributes": [
      [
        "Rectifier",
        "GZ34"
      ],
      [
        "Drawing supply",
        "Resistor filtering · 16 µF sections"
      ]
    ],
    "listen": "If you compare two serviced amps, record the rectifier as well as the output tubes. A supply change can alter operating conditions throughout the amp.",
    "together": "Voltage drop depends on rectifier behavior, transformer resistance and load. Tube type alone does not quantify sag or recovery time.",
    "extraTitle": "What the evidence tells us",
    "extra": "The drawing settles the design specification, not the originality of an installed bottle. No tube substitution is recommended here.",
    "detail": "The marker attaches to the rectifier envelope. Its position and dimensions are estimates.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf",
        "Fender 6G3 · I-FA drawing"
      ]
    ]
  },
  {
    "id": "speaker",
    "label": "Oxford & replacement history",
    "side": "rear",
    "menuOnly": false,
    "title": "The sale included two speakers, not two factory options.",
    "body": "The 1962 reference listing includes an Oxford 12K5 and says a modern Mojotone was fitted for use. Its photographs and sale description need to be read separately.",
    "attributes": [
      [
        "Represented format",
        "One 12-inch · nominal 8 Ω"
      ],
      [
        "Model",
        "Estimated Oxford-family ceramic study"
      ]
    ],
    "listen": "Before crediting a vintage speaker name for a sound, establish which driver was actually installed and whether its cone survives.",
    "together": "The dealer attributes the included Oxford as original. That is a specimen claim, not independent proof of factory fitment or cone originality.",
    "extraTitle": "What the evidence tells us",
    "extra": "The opened rear photograph shows the pale Oxford basket. It does not establish measured response, sensitivity or power capacity.",
    "detail": "The marker attaches to the speaker mesh. The modeled motor and basket are approximations, and no dealer photo is embedded.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf",
        "Fender 6G3 · I-FA drawing"
      ],
      [
        "https://themusicemporium.com/products/fender-6g3-deluxe-1962",
        "D02985 · dealer replacement account"
      ]
    ]
  }
];
export const CHAMP_FEATURES=[
  {
    "id": "volume",
    "label": "One Volume, no tone stack",
    "side": "top",
    "menuOnly": false,
    "title": "The one knob comes after a tube stage.",
    "body": "A boost reaches the first half of the 12AX7 before it reaches Volume. Turning the knob down reduces the feed to the second stage; it doesn’t undo what happened at the input.",
    "attributes": [
      [
        "Signal path",
        "First triode → Volume → second triode"
      ],
      [
        "Panel",
        "No separate tone control"
      ]
    ],
    "listen": "If a hot input gets rough even with Volume low, reduce the signal coming from the guitar or pedal and compare at a similar listening level.",
    "together": "The K-EE drawing shows two 12AX7 gain stages with the volume pot between them and no passive Treble/Bass stack. The coupling and cathode networks still shape frequency response.",
    "extraTitle": "What the evidence tells us",
    "extra": "This is circuit interpretation from the drawing. No clipping point has been measured, and one knob does not mean an electrically unfiltered signal.",
    "detail": "The top marker follows the actual shared Volume knob. Panel dimensions and knob spacing are estimates.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Champ-5F1-Schematic.pdf",
        "Fender 5F1 · K-EE drawing"
      ]
    ]
  },
  {
    "id": "feedback",
    "label": "Hidden: output feedback",
    "side": "rear",
    "menuOnly": true,
    "title": "Single-ended doesn’t mean no feedback.",
    "body": "The 5F1 returns a sample from the speaker side of its transformer to the second gain stage. That’s a useful correction to the idea of the Champ as nothing but an unchecked little power tube.",
    "attributes": [
      [
        "Drawing return",
        "22 kΩ feedback resistor"
      ],
      [
        "Destination",
        "Second 12AX7 cathode network"
      ]
    ],
    "listen": "While the loop has headroom, it changes gain and how the amplifier responds to distortion and speaker loading. It doesn’t remove the rest of the amp’s character.",
    "together": "The drawing’s feedback connection reaches the second triode cathode. The resistor value by itself does not tell us the amount of feedback under every load and frequency.",
    "extraTitle": "What the evidence tells us",
    "extra": "The loop is a drawing fact; its audible contribution is engineering interpretation. No feedback modification or measured response is presented.",
    "detail": "Menu-only topic: the network is inside the chassis behind the upper back panel. The rear view identifies that assembly, not a visible resistor.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Champ-5F1-Schematic.pdf",
        "Fender 5F1 · K-EE drawing"
      ]
    ]
  },
  {
    "id": "power",
    "label": "Single-ended 6V6",
    "side": "rear",
    "menuOnly": false,
    "title": "One output tube needs no phase inverter.",
    "body": "The 5F1 drives one 6V6GT, rather than splitting the signal for a push-pull pair. There is no phase-inverter stage between the preamp and that output tube.",
    "attributes": [
      [
        "Output",
        "One cathode-biased 6V6GT"
      ],
      [
        "Cathode network",
        "470 Ω · 25 µF bypass"
      ]
    ],
    "listen": "The small output stage is part of why this amp is useful when you want to work it hard at a lower level than a large combo. The speaker and room still decide how loud that feels.",
    "together": "The output transformer carries the single tube’s standing current as well as the changing signal. That is a different design requirement from a balanced push-pull pair.",
    "extraTitle": "What the evidence tells us",
    "extra": "Single-ended topology does not establish an exact harmonic spectrum or make all the distortion come from the 6V6. No waveform or output measurement was made.",
    "detail": "The marker is on the output-tube envelope. The inspected chart gives rear order 5Y3GT, 6V6GT, 12AX7; all spacing remains illustrative.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Champ-5F1-Schematic.pdf",
        "Fender 5F1 · K-EE drawing"
      ]
    ]
  },
  {
    "id": "rectifier",
    "label": "5Y3 & resistor filtering",
    "side": "rear",
    "menuOnly": false,
    "title": "The supply has fewer parts than a 5E1’s.",
    "body": "The 5F1 drawing uses a 5Y3GT and resistor filtering, with no choke. That distinguishes this design from the earlier 5E1 without telling us how much either supply sags.",
    "attributes": [
      [
        "Rectifier",
        "5Y3GT"
      ],
      [
        "Filter sections",
        "16 µF · 8 µF · 8 µF"
      ]
    ],
    "listen": "Listen to light picking and sustained hard playing separately. Supply response, stage clipping and speaker compression can all affect the result.",
    "together": "The drawing joins the supply sections through 10 kΩ and 22 kΩ resistors. A resistor-filtered supply is a circuit description, not a measurement of softness.",
    "extraTitle": "What the evidence tells us",
    "extra": "Values follow K-EE. Transformer resistance, current demand and recovery behavior have not been measured on the reference amp.",
    "detail": "The marker follows the rectifier envelope. Supply components are hidden; no internal wiring is reconstructed.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Champ-5F1-Schematic.pdf",
        "Fender 5F1 · K-EE drawing"
      ]
    ]
  },
  {
    "id": "speaker",
    "label": "Eight-inch cabinet & speaker",
    "side": "rear",
    "menuOnly": false,
    "title": "This is the eight-inch Champ entry.",
    "body": "The catalog separates this Champ by speaker size. Its 1958 timeline date is not a claim that the 5F1 circuit first appeared that year; the construction study represents a 1959-style eight-inch combo.",
    "attributes": [
      [
        "Format",
        "One eight-inch · nominal 4 Ω"
      ],
      [
        "Study envelope",
        "13.5 × 12 × 8 in · W × H × D"
      ]
    ],
    "listen": "A different eight can change sensitivity and tonal balance substantially. Don’t infer a particular breakup point just from the cone diameter.",
    "together": "The cabinet reference C-12147 is dealer-measured at eight inches deep. A second 1959 example is listed at 7.5 inches; that discrepancy remains open.",
    "extraTitle": "What the evidence tells us",
    "extra": "The rendered speaker is deliberately unbranded. The reference’s missing label and dealer originality claim do not establish a particular factory speaker model.",
    "detail": "The marker attaches to the speaker mesh. Basket, motor and all detailed dimensions are estimated.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Champ-5F1-Schematic.pdf",
        "Fender 5F1 · K-EE drawing"
      ],
      [
        "https://retrofret.com/products/fender-champ-amp-5f1-tube-amplifier-1959-8054",
        "C-12147 · cabinet and specimen account"
      ]
    ]
  }
];
