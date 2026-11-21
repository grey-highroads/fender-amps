// Drawing facts, interpretation and specimen history remain separate in each card.
export const PRINCETON_FEATURES=[
  {
    "id": "tone",
    "label": "Treble, Bass & fixed mids",
    "side": "front",
    "menuOnly": false,
    "title": "No Middle knob, but Treble and Bass still move the mids.",
    "body": "Treble and Bass share one passive network, so each changes the balance around the midrange too. A number on one knob only means something next to the other.",
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
    "listen": "If the low strings get too full as you turn up, try less Bass before you add Treble. You’re changing what the later stages have to deal with.",
    "together": "The AA1164 drawing puts the tone network between the first stage and Volume. Where a bigger Fender might have a Middle control, the Princeton has a fixed resistor to ground.",
    "extraTitle": "Where this comes from",
    "extra": "The AA1164 drawing. The scan is too coarse to read that resistor’s value, so we don’t give one.",
    "detail": "The marker is on Treble. The network is behind the panel. Response wasn’t measured.",
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
    "title": "The Reverb knob sets the return, not the drive.",
    "body": "Volume sets how much signal goes into the spring circuit. Reverb sets how much of what comes back gets mixed with the dry sound. So you can change one, make up for it with the other, and get a different result.",
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
    "listen": "Try more Volume with less Reverb, then the other way round. The springs and the stages after them see different levels each way.",
    "together": "The drawing shows both halves of a 12AT7 driving the springs through a transformer, then a recovery stage and the wet and dry mixer. The dry signal goes through a 3.3 MΩ resistor with a 10 pF bypass, and it stays in that network even with Reverb at zero.",
    "extraTitle": "Where this comes from",
    "extra": "The signal paths are from the AA1164 drawing.",
    "detail": "The marker is on the Reverb knob. The tank’s outline in the model is estimated, and its decay, spring count and replacement code aren’t identified.",
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
    "title": "The tremolo works on the output tubes.",
    "body": "The Princeton’s tremolo varies the bias on the two 6V6s. That puts it in the output stage, after the dry signal and the reverb return have been mixed.",
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
    "listen": "Hold a chord and listen to how the pulse changes as the amp works harder. Depth depends on what the output tubes are doing as well as on the Intensity knob.",
    "together": "The oscillator feeds the Intensity control and the bias line. The blackface Deluxe Reverb does it another way, with an optical cell that shunts the signal. Neither is automatically the deeper one.",
    "extraTitle": "Where this comes from",
    "extra": "The topology is from the AA1164 drawing, which shows fixed bias with no adjustment pot.",
    "detail": "The marker is on Intensity. Depth wasn’t measured on our reference amp.",
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
    "title": "Half a 12AX7 splits the signal for the 6V6s.",
    "body": "One half of a tube gives the two 6V6s their opposite-polarity signals. The Deluxe Reverb uses a different inverter, so having the same output tubes doesn’t make the two amps respond alike.",
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
    "listen": "When a Princeton is turned up, the inverter and the output tubes both belong in the explanation of its attack and distortion. No one stage accounts for every cranked Princeton sound.",
    "together": "It’s a cathodyne, with 56 kΩ plate and cathode loads on the drawing. It splits the signal without the large gain of a normal gain stage. The other half of the same 12AX7 runs the tremolo oscillator.",
    "extraTitle": "Where this comes from",
    "extra": "The AA1164 drawing shows which tube half does which job.",
    "detail": "There’s no marker on the model for this one. The tube is partly hidden by the upper back panel, so it’s in the menu only. Socket spacing is estimated, and nothing was measured.",
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
    "title": "Two 6V6s, wired differently from a Deluxe Reverb’s.",
    "body": "On the AA1164 drawing the 6V6 screens connect straight to their supply, with no series screen resistors, and there are no grid-stopper resistors at the output tubes. That’s a real difference from the AB763 Deluxe Reverb.",
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
    "listen": "If two Princetons feel different, check tube condition, bias and service history along with the speaker. The tube brand doesn’t describe the circuit it’s sitting in.",
    "together": "The 6V6s are fixed bias. Feedback goes from the output secondary through a 2.7 kΩ resistor to the stage ahead of the inverter. How much it does depends on the amp and the speaker load together.",
    "extraTitle": "Where this comes from",
    "extra": "These are facts from the AA1164 drawing and what follows from them.",
    "detail": "The marker is on one output tube. Tube positions and shapes are illustrative. Nothing here is advice on substitutions.",
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
    "title": "The original rectifier is an open question.",
    "body": "The AA1164 drawing calls for a 5U4GB. Research also reports a GZ34 on an early chart marked AA764. Whatever tube is in a given amp today can’t settle what Fender put in originally.",
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
    "listen": "Rectifier type is one part of how the supply responds. Transformer resistance, filtering and current draw also shape what happens when you hit it hard.",
    "together": "The drawing shows four 20 µF filter sections joined by resistors, with no choke. That alone doesn’t tell you how far the supply drops or how the amp feels.",
    "extraTitle": "Where this comes from",
    "extra": "The scan of the drawing carries later revision marks. The chart conflict is still unresolved. The model shows the 5U4GB.",
    "detail": "The marker is on the rectifier. Filter-can shape and placement are estimates. Sag wasn’t measured.",
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
    "label": "Stock speaker",
    "side": "rear",
    "menuOnly": false,
    "title": "It shipped with a Jensen or an Oxford ten.",
    "body": "The Princeton Reverb has one 10-inch speaker at 8 ohms: a Jensen C10R or C10N, or an Oxford 10L5 or 10J4. So two original Princetons don’t necessarily have the same speaker.",
    "attributes": [
      [
        "Stock speakers",
        "Jensen C10R or C10N · Oxford 10L5 or 10J4"
      ],
      [
        "Load",
        "One 10-inch · 8 Ω"
      ]
    ],
    "listen": "The ten is a big part of what makes a Princeton a Princeton, and a 12-inch baffle is the classic owner mod. If you’re comparing two, check the speaker size first, then the model.",
    "together": "The AA1164 drawing shows one speaker and an extension jack, and it doesn’t name a model. We show the Oxford 10J4 type.",
    "extraTitle": "Where this comes from",
    "extra": "The speaker list is from Mojotone’s Fender field guide. Fender’s drawing doesn’t name a speaker.",
    "detail": "The marker is on the speaker. Basket, magnet and mounting dimensions are estimates. No power rating or response curve is claimed.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Princeton-Reverb-AA1164-Schematic.pdf",
        "Fender AA1164 · K-FD drawing"
      ],
      [
        "https://retrofret.com/products/fender-princeton-reverb-tube-amplifier-1965-9339",
        "Cabinet specimen A-03894 · replacement history"
      ],
      [
        "https://mojotone.com/blogs/fender-field-guide/fender-blackface-princeton-reverb",
        "Mojotone Fender field guide · blackface Princeton Reverb"
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
    "title": "The Bright channel has its own tone circuit.",
    "body": "Each channel has its own Volume and Tone, and the drawing gives the two tone networks different capacitor values. So Normal and Bright are voiced differently, not just labeled differently.",
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
    "listen": "Compare the channels with the same guitar at about the same level. Picking a channel is one more way to change the attack before you reach for a pedal.",
    "together": "The channels join through 220 kΩ mixing resistors ahead of a shared gain stage. It’s not the 5E3’s interactive volume network, though two channels that share a circuit are never perfectly isolated.",
    "extraTitle": "Where this comes from",
    "extra": "Channel order follows the 1962 panel we looked at: Normal, then Bright. We haven’t confirmed that layout for every earlier brown Deluxe.",
    "detail": "The marker is on the Normal Tone knob. The parts are behind the panel.",
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
    "title": "The tremolo works on both channels.",
    "body": "The 6G3’s oscillator varies the bias on the two 6V6s. Both channels have joined by that point, so the tremolo works on either one, not just Bright.",
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
    "listen": "You can use the Normal channel’s voicing and still have tremolo. Listen to it on a held note as well as a chord.",
    "together": "The Intensity control’s wiper connects to the bias feed for the output-tube grids. Whichever channel is supplying the signal, the output stage is where the tremolo happens.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s 6G3 drawing, sheet I-FA.",
    "detail": "The marker is on Intensity. The oscillator and bias parts are inside. How depth changes with playing level wasn’t measured.",
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
    "title": "A different phase inverter from the tweed Deluxe.",
    "body": "The brown Deluxe uses a long-tail phase inverter with two triodes. The tweed 5E3 uses a one-triode cathodyne. So going from tweed to brown changed the circuit, not just the covering.",
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
    "listen": "Listen to how a note goes from a clean attack into overdrive on each. The inverter is part of that difference, along with bias, feedback, supply and speaker.",
    "together": "The 6G3 drawing shows the two halves of a 12AX7 with a shared cathode tail and separate plate loads, each feeding one 6V6 grid.",
    "extraTitle": "Where this comes from",
    "extra": "The topology is from Fender’s drawing.",
    "detail": "There’s no marker on the model for this one. The tube sits behind the upper rear panel, so it’s in the menu only. Interior spacing is estimated.",
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
    "title": "Still 6V6s, now fixed bias with feedback.",
    "body": "The brown Deluxe biases its 6V6s from a negative grid supply and takes feedback from the output transformer. The 5E3’s pair is cathode biased, with no feedback loop from the speaker output.",
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
    "listen": "If a brown Deluxe feels firmer to you than a tweed one, those are two real circuit differences to look at. Fixed bias on its own doesn’t promise a particular amount of compression.",
    "together": "The drawing shows the bias set by fixed resistors, with no adjustment pot, and a 56 kΩ feedback resistor from the output secondary. The tremolo is fed into that same bias line.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s 6G3 drawing, sheet I-FA.",
    "detail": "The marker is on one of the two output tubes, and the upper panel can hide it. Voltages on the drawing are design figures, not readings from an amp.",
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
    "body": "A 5Y3 in a surviving amp doesn’t make it the factory spec for the 6G3. Fender’s drawing names a GZ34, and that’s what the model shows.",
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
    "listen": "If you’re comparing two serviced amps, note the rectifier as well as the output tubes. A different rectifier can change the operating conditions through the whole amp.",
    "together": "The drawing shows resistor filtering with 16 µF sections. How much the supply drops depends on the rectifier, the transformer’s resistance and the load, so the tube type alone doesn’t give you a number.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s 6G3 drawing.",
    "detail": "The marker is on the rectifier. Its position and size are estimates. The drawing gives the design spec. It can’t tell you whether an installed tube is original.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf",
        "Fender 6G3 · I-FA drawing"
      ]
    ]
  },
  {
    "id": "speaker",
    "label": "Stock speaker",
    "side": "rear",
    "menuOnly": false,
    "title": "The stock speaker is an Oxford 12K5-6.",
    "body": "The brown Deluxe has one 12-inch Oxford 12K5-6 at 8 ohms. It’s an Oxford where the tweed Deluxe had a Jensen.",
    "attributes": [
      [
        "Stock speaker",
        "One 12-inch Oxford 12K5-6"
      ],
      [
        "Load",
        "8 Ω"
      ]
    ],
    "listen": "Speakers get swapped and reconed over sixty years. If you’re judging a brown Deluxe by ear, find out whether the Oxford is still in it and whether the cone is original.",
    "together": "The rear panel has two jacks, Speaker and Ext. Spkr, so the amp can take an extension cabinet as well.",
    "extraTitle": "Where this comes from",
    "extra": "Mojotone’s Fender field guide and Guitar Player both list the 12K5-6 for the 6G3. We haven’t seen a Fender document that names it.",
    "detail": "The marker is on the speaker. The magnet and basket in the model are approximations of the Oxford. No response, sensitivity or power figures are claimed.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Deluxe-6G3-Schematic.pdf",
        "Fender 6G3 · I-FA drawing"
      ],
      [
        "https://themusicemporium.com/products/fender-6g3-deluxe-1962",
        "D02985 · dealer replacement account"
      ],
      [
        "https://mojotone.com/blogs/fender-field-guide/fender-brownface-deluxe",
        "Mojotone Fender field guide · brownface Deluxe"
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
    "title": "The one knob comes after the first tube stage.",
    "body": "Your signal hits the first half of the 12AX7 before it gets to Volume. Turning the knob down sends less to the second stage. It doesn’t undo anything that happened at the input.",
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
    "listen": "If a hot pickup or a boost sounds rough even with Volume low, turn down the guitar or the pedal and compare at about the same loudness.",
    "together": "The drawing shows two 12AX7 gain stages with the Volume pot between them and no Treble and Bass network. That doesn’t mean nothing shapes the tone. The coupling caps and cathode networks still do.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s 5F1 drawing, sheet K-EE.",
    "detail": "The marker is on the Volume knob. Panel dimensions and knob spacing are estimates. No clipping point was measured.",
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
    "title": "Single-ended, and it still has a feedback loop.",
    "body": "The 5F1 takes a sample from the speaker side of the output transformer back to the second gain stage. So the Champ isn’t just one little power tube with nothing reining it in.",
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
    "listen": "As long as the loop has headroom, it changes the gain and how the amp reacts to distortion and to the speaker. It doesn’t take the rest of the amp’s character away.",
    "together": "On the drawing, a 22 kΩ resistor carries the feedback to the cathode of the second triode. The value alone doesn’t tell you how much feedback there is at every load and frequency.",
    "extraTitle": "Where this comes from",
    "extra": "The loop is on Fender’s K-EE drawing. What it does to the sound is engineering reasoning, not a measurement.",
    "detail": "There’s no marker on the model for this one. The parts are inside the chassis behind the upper back panel, so it’s in the menu only.",
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
    "title": "One 6V6, so no phase inverter.",
    "body": "The 5F1 drives a single 6V6GT. There’s no push-pull pair to feed, so there’s no phase inverter between the preamp and the output tube.",
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
    "listen": "That small output stage is part of why people use a Champ when they want to work an amp hard at a lower volume than a big combo. How loud that ends up still depends on the speaker and the room.",
    "together": "The 6V6 is cathode biased, with a 470 Ω resistor and a 25 µF bypass. Its output transformer has to carry the tube’s standing current along with the signal, which is a different job from a transformer on a balanced push-pull pair.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s K-EE drawing. The tube chart we looked at gives the rear order as 5Y3GT, 6V6GT, 12AX7.",
    "detail": "The marker is on the output tube. Spacing is illustrative. No output or waveform was measured, and not all of a Champ’s distortion has to come from the 6V6.",
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
    "title": "A 5Y3 and no choke.",
    "body": "The 5F1 drawing has a 5Y3GT, with resistors between the filter stages and no choke. That’s one of the things that separates it from the earlier 5E1.",
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
    "listen": "Listen to light picking and hard sustained playing separately. Supply response, stage clipping and speaker compression can all be part of what you hear.",
    "together": "The filter caps are 16, 8 and 8 µF, joined by 10 kΩ and 22 kΩ resistors. That describes the circuit. It doesn’t tell you how soft the supply feels.",
    "extraTitle": "Where this comes from",
    "extra": "Values are from Fender’s K-EE drawing.",
    "detail": "The marker is on the rectifier. The supply parts are hidden. Sag and recovery weren’t measured on the reference amp.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Champ-5F1-Schematic.pdf",
        "Fender 5F1 · K-EE drawing"
      ]
    ]
  },
  {
    "id": "speaker",
    "label": "Eight-inch speaker",
    "side": "rear",
    "menuOnly": false,
    "title": "The eight-inch speaker sets this Champ apart.",
    "body": "This Champ has an 8-inch speaker: a Jensen P8T, an Oxford 8EV or a CTS alnico. The earlier 5E1 and the first 5F1s had a six, in a slightly smaller cabinet.",
    "attributes": [
      [
        "Stock speakers",
        "Jensen P8T · Oxford 8EV · CTS alnico"
      ],
      [
        "Load",
        "One 8-inch · listed 4 Ω, often marked 3.2 Ω"
      ]
    ],
    "listen": "The cabinet grew when the speaker went from six inches to eight, and that’s a good part of why the later Champs sound fuller. A different eight can still change the sensitivity and the balance a lot.",
    "together": "The load is listed as 4 ohms, and the vintage speakers are usually marked 3.2. Our catalog splits the Champ by speaker size, which is why this entry is dated 1958 even though the 5F1 circuit is usually dated from 1956.",
    "extraTitle": "Where this comes from",
    "extra": "The speaker models and the cabinet change are from Mojotone’s Fender field guide.",
    "detail": "The marker is on the speaker. The speaker in the model is unbranded, and its basket and magnet are estimates. Two 1959 cabinets we checked are given as 8 and 7.5 inches deep, and we haven’t resolved that.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Champ-5F1-Schematic.pdf",
        "Fender 5F1 · K-EE drawing"
      ],
      [
        "https://retrofret.com/products/fender-champ-amp-5f1-tube-amplifier-1959-8054",
        "C-12147 · cabinet and specimen account"
      ],
      [
        "https://mojotone.com/blogs/fender-field-guide/fender-narrow-panel-tweed-champ",
        "Mojotone Fender field guide · narrow-panel Champ"
      ]
    ]
  }
];
