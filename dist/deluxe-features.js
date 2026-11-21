// Musician-first notes. Original drawing facts and specimen records stay distinct.
export const DELUXE_FEATURES=[
  {
    "id": "inputs",
    "label": "Inputs",
    "side": "front",
    "title": "Input 2 turns down the signal before the first tube.",
    "body": "A hot pickup or a boost pedal hits the first gain stage before the Volume control ever sees it. Input 2 knocks the signal down about 6 dB ahead of that stage, so it can clean things up in a way turning down Volume won’t.",
    "attributes": [
      [
        "Input 2",
        "About 6 dB lower · one input in use"
      ],
      [
        "Pickup loading",
        "Lower input resistance on input 2"
      ],
      [
        "Signal path",
        "First stage → tone controls / Volume → next stage"
      ]
    ],
    "listen": "With a hot pickup or a boost, try Input 2 and bring the Volume back up. You may get a cleaner attack. The trade is that Input 2 loads passive pickups harder, so they can lose some of their top-end edge.",
    "together": "On the AB763 drawing, Input 1 is roughly 1 MΩ and Input 2 roughly 136 kΩ when only one jack in the channel is in use. Plug into both and the switching network changes. Picking an input doesn’t rebias the 6V6s. What happens after the first stage still depends on the EQ, the later gain stages, the phase inverter and the power section.",
    "extraTitle": "Jumpering the channels can cancel things out",
    "extra": "The Vibrato channel has an extra dry-signal mixing stage around the reverb circuit, and that flips its polarity relative to the Normal channel. Bridge the two and some frequencies can cancel. They aren’t two copies of the same channel.",
    "detail": "Impedance and pad figures are calculated from the AB763 drawing, not measured on a surviving amp.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_DELUXE_REVERB_AB763.pdf",
        "Fender AB763 Deluxe Reverb · original drawing"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "1965 Black Book example · dealer record"
      ]
    ],
    "offset": [
      0,
      -25
    ]
  },
  {
    "id": "bright-cap",
    "label": "Bright capacitor",
    "side": "front",
    "title": "The bright cap does most of its work at low volume.",
    "body": "There’s a 47 pF cap across the Vibrato channel’s Volume pot, and it lets treble get around the control. You hear it most at low settings. As you turn up it matters less, and near full volume it’s effectively out of the picture.",
    "attributes": [
      [
        "AB763 drawing",
        "47 pF across Vibrato Volume"
      ],
      [
        "Strongest contrast",
        "Lower volume settings"
      ],
      [
        "Normal channel",
        "No matching bright capacitor shown"
      ]
    ],
    "listen": "If a pedal sounds sharp at home and fine at the gig, this is a good suspect. Try the same thing in the Normal channel, where the AB763 drawing shows no bright cap. It isn’t a perfect A/B, because the two channels differ in other ways too.",
    "together": "This is a fixed cap, not a switch like the Twin’s Bright switch, so you can’t turn it off from the panel. At full volume both ends of the bypass path are effectively tied together, and the cap has nothing left to do.",
    "extraTitle": "It’s not the only thing making it bright",
    "extra": "Pickup output, cable, pedal EQ and the speaker all change how that extra edge comes across. And on a surviving amp, the original cap may not still be there.",
    "detail": "The marker sits on the Vibrato Volume knob. The cap itself is behind the panel. The 47 pF value is from the AB763 drawing.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_DELUXE_REVERB_AB763.pdf",
        "Fender AB763 Deluxe Reverb · original drawing"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "1965 Black Book example · dealer record"
      ]
    ],
    "offset": [
      0,
      -58
    ]
  },
  {
    "id": "reverb",
    "label": "Reverb",
    "side": "front",
    "title": "Turn Reverb to zero and it’s still a different channel.",
    "body": "The Vibrato channel keeps its extra dry-signal mixing stage even with Reverb all the way down. So comparing the two channels isn’t just effects versus no effects.",
    "attributes": [
      [
        "Dry path",
        "Extra stage at the reverb mixer"
      ],
      [
        "Driver",
        "Two halves of a 12AT7 working together"
      ],
      [
        "Return level",
        "Set after the tank and recovery stage"
      ]
    ],
    "listen": "Channel Volume sets how hard the springs get driven. The Reverb knob sets how much of the return you hear. Hitting the tank harder and turning up the return are two different moves, and they give you different results.",
    "together": "On the AB763 drawing the dry signal reaches the mixer through a 3.3 MΩ resistor with a 10 pF treble bypass. The spring return joins it there after the recovery stage. That extra stage changes the dry signal’s gain and polarity too. Two halves of a 12AT7 work together as the reverb driver.",
    "extraTitle": "About the tank",
    "extra": "The 1965 Black Book amp is listed with a pan marked RA 3265. That’s the dealer’s reading of the marking. It doesn’t tell you the decay, the spring count or which modern replacement matches. If you’re identifying a tank, drive and pickup impedance, mounting and grounding all matter.",
    "detail": "Our model draws on more than one reference amp. We haven’t assigned it a specific tank.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_DELUXE_REVERB_AB763.pdf",
        "Fender AB763 Deluxe Reverb · original drawing"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "1965 Black Book example · dealer record"
      ]
    ],
    "offset": [
      -12,
      -38
    ]
  },
  {
    "id": "vibrato",
    "label": "Vibrato / tremolo",
    "side": "front",
    "title": "The tremolo pulses the reverb tail too.",
    "body": "The Deluxe Reverb’s optical tremolo comes after the Vibrato channel’s dry and reverb signals are mixed. So the spring tail gets pulsed along with the note.",
    "attributes": [
      [
        "Location",
        "After the channel’s dry / wet mix"
      ],
      [
        "Mechanism",
        "Light controls a signal-loading resistor"
      ],
      [
        "6V6 bias",
        "Not the point being modulated"
      ]
    ],
    "listen": "That order is part of how the two effects feel together. It’s not what you get from a reverb pedal after a tremolo pedal, where the tail rings on untouched.",
    "together": "A neon lamp and a light-sensitive resistor make up the optical cell, the part people call the roach. The oscillator flashes the lamp and the resistor pulls the signal down in time with it. It’s a different design from bias tremolo, which works on the output tubes. Here the 6V6 bias isn’t what’s moving.",
    "extraTitle": "Old cells drift",
    "extra": "The cell’s response and its dark resistance affect the shape and depth of the pulse. A replacement can feel different even though nothing on the panel has changed.",
    "detail": "Follows the AB763 drawing. We haven’t measured the pulse shape, the speed range or the cell in either reference amp.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_DELUXE_REVERB_AB763.pdf",
        "Fender AB763 Deluxe Reverb · original drawing"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "1965 Black Book example · dealer record"
      ]
    ],
    "offset": [
      30,
      -5
    ]
  },
  {
    "id": "grille-cloth",
    "label": "Grille cloth",
    "side": "front",
    "title": "The front of the amp is the easiest part to replace.",
    "body": "Silver cloth and a black panel look right for the period, but both can be swapped. The look wasn’t fixed anyway: Folkway’s early-1965 amp has no raised Fender badge, where later examples do.",
    "attributes": [
      [
        "Appearance",
        "Black panel · silver grille study"
      ],
      [
        "Early reference",
        "Folkway’s early 1965 example has no raised badge"
      ],
      [
        "Originality",
        "Needs more than a front-view match"
      ]
    ],
    "listen": "If you’re judging originality, look at the weave, how the cloth is mounted, the chassis dates and the speaker codes together. The color of the cloth in one photo tells you very little.",
    "together": "Our model has the raised badge and draws on more than one 1965 amp. Treat it as a picture of the family, not a copy of the badge-less Folkway amp.",
    "extraTitle": "Does the cloth change the sound?",
    "extra": "We don’t have a measurement for this cloth, so we’re not making a claim either way.",
    "detail": "Cloth scale and color are estimates. Dealer photos are linked, not republished.",
    "sources": [
      [
        "https://folkwaymusic.com/vintage-instruments/item/id.5437",
        "Early 1965 Folkway example · badge and dates"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "Later 1965 Black Book example · specimen record"
      ]
    ],
    "cosmetic": true
  },
  {
    "id": "speakers",
    "label": "Speaker",
    "side": "rear",
    "title": "Some of the grit is the speaker.",
    "body": "One 12-inch speaker takes everything this amp puts out. How much it compresses and breaks up changes how a pushed Deluxe Reverb feels, with the same circuit and the same knob settings.",
    "attributes": [
      [
        "Modeled reference",
        "Oxford 12K5-6 · nominal 8 Ω"
      ],
      [
        "Dealer record",
        "465-512 · original-cone claim"
      ],
      [
        "Unknown here",
        "Measured sensitivity, response and power capacity"
      ]
    ],
    "listen": "Before you call a recording 6V6 breakup, ask what speaker was in the amp and whether it had been reconed. Speaker compression and amp distortion show up together, and a label on the frame doesn’t prove the cone is original.",
    "together": "Black Book lists an Oxford 12K5-6 dated to the twelfth week of 1965. Folkway describes another original Oxford dated late 1964. Those are records of two amps. They don’t mean every blackface Deluxe Reverb shipped with that speaker.",
    "extraTitle": "Match the volume before you compare",
    "extra": "A more efficient speaker is louder at the same knob setting, and louder is easy to mistake for a change in tone. Compare speakers at the same listening level.",
    "detail": "The photo is a generic Nubert speaker, not the Oxford. We have no measured sensitivity, response or power rating for the Oxford, and the basket and magnet dimensions are estimated.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_DELUXE_REVERB_AB763.pdf",
        "Fender AB763 Deluxe Reverb · original drawing"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "1965 Black Book example · dealer record"
      ],
      [
        "https://folkwaymusic.com/vintage-instruments/item/id.5437",
        "Folkway · second Oxford-equipped example"
      ]
    ],
    "image": "./assets/explore/speaker-nubert.jpg",
    "alt": "Rear of a representative Nubert speaker, showing basket and magnet.",
    "caption": "Representative construction only. This Nubert driver is not an Oxford or a Fender part.",
    "credit": "Günther Nubert / Wikimedia Commons · public domain",
    "photoSource": "https://commons.wikimedia.org/wiki/File:12zollhinten.jpg"
  },
  {
    "id": "power-tubes",
    "label": "Power tubes",
    "side": "rear",
    "title": "You hit the power section sooner than on a Twin.",
    "body": "Two 6V6s and about 22 watts put the clean ceiling a lot lower than a four-6L6 Twin’s. That’s the comparison that matters: where your picking starts to push the whole amp. It isn’t about a magic sound that comes with a tube type.",
    "attributes": [
      [
        "Output stage",
        "Two 6V6GTs · fixed bias"
      ],
      [
        "Phase inverter",
        "12AT7 · splits the drive to the pair"
      ],
      [
        "Assembly rating",
        "22 W · single 8 Ω speaker"
      ]
    ],
    "listen": "At a volume where a Twin is still clean, the Deluxe may already be adding compression or grit. Where that starts depends on the guitar, the settings, the bias, the speaker and the condition of the amp, so there’s no universal number on the Volume knob.",
    "together": "The AB763 Deluxe runs its 6V6s in fixed bias, with negative feedback and a tube rectifier, and a 12AT7 phase inverter driving the pair. The tweed 5E3 also has two 6V6s, in a different circuit. Having two 6V6s in common doesn’t make the two amps feel alike.",
    "extraTitle": "The sweet spot moves",
    "extra": "A tired pair of tubes, a different bias setting or a more efficient speaker will all shift where the sweet spot seems to be. The drawing describes the design, not the health or settings of the amp in front of you.",
    "detail": "Tube positions in the model are illustrative: two output tubes, six small tubes and a separate GZ34.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_DELUXE_REVERB_AB763.pdf",
        "Fender AB763 Deluxe Reverb · original drawing"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "1965 Black Book example · dealer record"
      ]
    ]
  },
  {
    "id": "rectifier",
    "label": "GZ34 rectifier",
    "side": "rear",
    "title": "Dig in hard and the power supply gives a little.",
    "body": "The GZ34 is part of the high-voltage supply. Under a hard load the supply voltage can drop and recover, and you feel that as some give under the pick. How much depends on the whole supply, not just on having a tube rectifier.",
    "attributes": [
      [
        "AB763 drawing",
        "GZ34 tube rectifier"
      ],
      [
        "Player question",
        "How the attack and recovery feel under load"
      ],
      [
        "Also involved",
        "Power transformer, filtering and current demand"
      ]
    ],
    "listen": "This shows up when the amp is working hard. At quiet settings, the bright cap, the speaker and the preamp probably explain more of what you’re hearing than sag does.",
    "together": "The rectifier’s voltage drop, the transformer’s resistance and the filter caps all shape how the supply responds. A GZ34 doesn’t make every amp equally soft, and it isn’t behind every kind of compression you hear.",
    "extraTitle": "Comparing it to the Twin",
    "extra": "The Twin’s supply uses diodes, so it’s a tempting comparison. But the two amps also differ in power, output tubes, speakers and other circuit details, so you can’t pin the difference on the rectifier.",
    "detail": "The AB763 drawing specifies a GZ34. We haven’t measured sag or supply voltage, or checked that either reference amp’s rectifier is original.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_DELUXE_REVERB_AB763.pdf",
        "Fender AB763 Deluxe Reverb · original drawing"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "1965 Black Book example · dealer record"
      ]
    ]
  },
  {
    "id": "output-transformer",
    "label": "Output transformer",
    "side": "rear",
    "title": "The power tubes work into the speaker load.",
    "body": "The output transformer connects the 6V6 pair to the speaker and feeds the feedback loop. You can swap speakers and stay at 8 ohms, and the sound changes. Change the load itself and you’ve also changed the conditions the power stage runs under.",
    "attributes": [
      [
        "AB763 drawing",
        "TR3 · 125A1A"
      ],
      [
        "Modeled speaker load",
        "8 Ω"
      ],
      [
        "Connection",
        "Output also feeds the feedback network"
      ]
    ],
    "listen": "Those are two separate comparisons: the voice of the speaker, and the load it puts on the amp. Keeping the nominal load the same holds one of them steady, though a speaker’s real impedance still moves around with frequency.",
    "together": "The AB763 drawing calls the output transformer TR3, part 125A1A. The feedback loop takes a sample of the output back to an earlier stage, which reduces error as long as the amp has room to correct. Transformer, speaker load and gain all work together, so one part number doesn’t describe the response.",
    "extraTitle": "What’s actually in the amp",
    "extra": "Black Book lists the transformer code on its amp separately from the drawing’s number. We haven’t read the stamp ourselves or measured anything about it.",
    "detail": "125A1A is the drawing’s designation, not proof of what’s installed in either reference amp. The block in the model marks an estimated location.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_DELUXE_REVERB_AB763.pdf",
        "Fender AB763 Deluxe Reverb · original drawing"
      ],
      [
        "https://www.blackbookguitars.com/products/1966-fender-deluxe-reverb-nickel-copy",
        "1965 Black Book example · dealer record"
      ]
    ]
  }
];
