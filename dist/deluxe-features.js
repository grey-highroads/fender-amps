// Musician-first notes. Original drawing facts and specimen records stay distinct.
export const DELUXE_FEATURES=[
  {
    "id": "inputs",
    "label": "Inputs",
    "side": "front",
    "title": "Turning down Volume may leave the first stage driven.",
    "body": "A boost pedal meets the first gain stage before the Volume control. Input 2 turns the signal down earlier, so it can clean up that first stage in a way the Volume knob cannot.",
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
    "listen": "With a hot pickup or boost, try input 2 and bring the amp’s volume back up. You may get a cleaner attack, but passive pickups can also lose some of their resonant edge because input 2 loads them more heavily.",
    "together": "The AB763 drawing gives roughly 1 MΩ at input 1 and 136 kΩ at input 2 when only one input in that channel is used. What happens later depends on the EQ, gain stages, phase inverter and power section. The input choice does not separately rebias the 6V6s.",
    "extraTitle": "The channels have another wrinkle",
    "extra": "The Vibrato channel adds a dry-signal mixing stage around the reverb circuit. Its dry signal and the Normal channel’s reach the common mix with opposite polarity, so bridging them can cancel some frequencies. They are not two interchangeable copies of one channel.",
    "detail": "Values are nominal circuit calculations, not measurements of a surviving amp. Both-input use changes the switching network.",
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
    "title": "The extra bite changes as you turn up.",
    "body": "The Vibrato channel has a small bright capacitor across its Volume control. It lets some treble get around the control at lower settings. As you turn up, that shortcut makes less difference.",
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
    "listen": "A pedal that sounds sharp into the Vibrato channel at home may behave differently with the amp turned up. The Normal channel is a useful comparison, though its different gain path means this is not a perfectly isolated bright-cap test.",
    "together": "This is a fixed capacitor, not the Twin’s Bright switch. At full volume the two ends of the bypass path are effectively together, so the capacitor no longer has the same treble-lifting job.",
    "extraTitle": "The whole rig still matters",
    "extra": "Pickup output, cable, pedal EQ and the speaker all affect how that extra edge lands. The drawing explains a useful cause to investigate; it does not guarantee that every Deluxe Reverb sounds harsh or that a surviving amp still has the original capacitor.",
    "detail": "The marker sits on Vibrato Volume. The capacitor itself is behind the panel, not a visible extra control.",
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
    "title": "Reverb at zero still leaves a different channel.",
    "body": "The Vibrato channel keeps its extra dry-signal mixing stage even with Reverb turned down. That is one reason comparing the two channels tells you more than just “with effects” versus “without.”",
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
    "listen": "Channel volume changes how hard the spring circuit is driven; the Reverb knob changes how much of its return you hear. Hitting the tank harder and adding more return are different ways to change the result.",
    "together": "The dry signal reaches the mixer through a 3.3 MΩ resistor with a 10 pF treble bypass. The spring return joins it there after recovery amplification. The extra stage changes the dry path’s gain and polarity as well as making the wet mix possible.",
    "extraTitle": "A useful detail on the surviving pan",
    "extra": "Black Book’s 1965 example lists a pan marked RA 3265. That is a dealer-recorded marking, not proof of a particular modern replacement code, decay rating or spring count. Drive/pickup impedance, mounting and grounding also matter when identifying a tank.",
    "detail": "The model combines reference evidence; it is not a scan of the Black Book or Folkway amp. No exact tank specification is assigned.",
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
    "title": "The spring tail goes through the pulse, too.",
    "body": "The Deluxe Reverb’s optical tremolo works after the Vibrato channel’s dry and reverb signals have been mixed. That puts the spring tail inside the volume movement, rather than leaving an untouched reverb tail after it.",
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
    "listen": "That order is part of the feel when reverb and tremolo are used together. It gives a different relationship from putting a reverb pedal after a tremolo pedal.",
    "together": "A neon lamp and light-sensitive resistor form the optical cell often nicknamed the “roach.” The oscillator flashes the lamp; the resistor changes how much signal is pulled down. It is a different approach from tremolo that varies the output tubes’ bias.",
    "extraTitle": "An old cell can change the feel",
    "extra": "The cell’s response and dark resistance can affect the pulse and depth. A replacement may behave differently even when the faceplate is unchanged. We have not measured the optical cell in either reference specimen.",
    "detail": "The description follows the AB763 drawing; exact pulse shape and speed range are not measured here.",
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
    "title": "A familiar front can hide a lot of history.",
    "body": "Silver cloth and a black panel give a convincing period look, but both are replaceable. The early-1965 Folkway example even lacks the raised Fender badge that appears on later examples.",
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
    "listen": "For a collector, the weave, mounting evidence, chassis dates and speaker codes are more useful together than the cloth’s color in one photograph.",
    "together": "Our shared assembly includes a raised badge and uses more than one 1965 reference. Treat it as a family study, not a reconstruction of the badge-less Folkway specimen.",
    "extraTitle": "Keep the sound claim honest",
    "extra": "We have no acoustic transmission measurement for this cloth. A claim that this rendered weave produces a particular amount of sparkle or treble loss would go beyond the evidence.",
    "detail": "Cloth scale and color remain estimates. Dealer photos are linked, not republished.",
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
    "title": "The speaker can change where the grit comes from.",
    "body": "The single 12-inch speaker handles the amp’s whole output. How much it compresses or breaks up can change the feel of a pushed Deluxe Reverb, even when the circuit and volume setting stay the same.",
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
    "listen": "Before calling a recording “6V6 breakup,” ask which speaker was in the amp and whether it was reconed. Speaker compression and amp distortion can arrive together, and a frame label does not prove the moving parts are original.",
    "together": "Black Book identifies an Oxford 12K5-6 dated to the twelfth week of 1965. Folkway describes another original Oxford dated late 1964. Those are useful specimen records, not a promise that every blackface Deluxe Reverb shipped with the same speaker.",
    "extraTitle": "Compare at the same listening level",
    "extra": "A more efficient speaker can sound louder with the same electrical input. Comparing at the same knob setting can therefore confuse loudness with tonal character. No matched listening test or response measurement is claimed here.",
    "detail": "The photograph is a generic Nubert speaker, not the Oxford. Basket and motor dimensions remain estimated.",
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
    "title": "You can reach the power section sooner than on a Twin.",
    "body": "Two 6V6s and the Deluxe Reverb’s lower output give you a different clean-volume ceiling from a four-6L6 Twin. That is the useful comparison: where your picking starts to push the whole amp, not a magic sound attached to one tube name.",
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
    "listen": "At a level where the Twin can stay clean, the Deluxe may already be adding compression or grit. How soon that happens depends on the guitar, settings, bias, speaker and condition—not a universal Volume number.",
    "together": "The AB763 Deluxe uses a fixed-bias output pair, feedback and a tube rectifier. The tweed 5E3 uses its 6V6s in a different circuit, so swapping the model name while keeping “two 6V6s” does not preserve the feel.",
    "extraTitle": "Compare the whole setup",
    "extra": "A worn pair, different bias or a more efficient speaker can move the apparent sweet spot. The circuit drawing describes the design; it does not tell us the health or settings of a surviving amp.",
    "detail": "Two large output tubes are shown beside six small tubes and one separate GZ34 rectifier. Positions are illustrative.",
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
    "title": "The power supply can join in when you dig in.",
    "body": "The GZ34 helps supply the amp’s high-voltage power. Under a hard load, supply voltage can fall and recover, adding to the give under your pick. The whole supply determines how much—not the “tube rectifier” label alone.",
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
    "listen": "This matters most when the amp is working hard. At quiet settings, the bright capacitor, speaker and preamp may explain more of what you notice than supply sag.",
    "together": "Rectifier voltage drop, transformer resistance and filter storage all affect the supply’s response. A GZ34 does not make every amp equally soft, and its presence does not explain every kind of compression you hear.",
    "extraTitle": "A contrast worth exploring",
    "extra": "The Twin’s diode-rectified supply is a useful comparison, but the two amps also differ in power, output tubes, speakers and other circuit details. It would not be an isolated rectifier comparison.",
    "detail": "The drawing specifies GZ34. No supply-voltage recording, sag measurement or original rectifier authentication was performed.",
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
    "title": "The speaker load is part of what the tubes see.",
    "body": "The output transformer connects the 6V6 pair to the speaker and feeds the amp’s feedback loop. A speaker swap can change the sound while keeping 8 Ω; changing the load also changes the electrical conditions seen by the power stage.",
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
    "listen": "Those are two different comparisons: the speaker’s voice, and the load it presents to the amp. Keeping the nominal load the same helps keep one variable steady, though a speaker’s impedance still changes with frequency.",
    "together": "Feedback returns a sample of the output to an earlier stage to reduce error while the amp has room to correct it. Transformer, speaker load and available gain work as a system; one part number cannot describe the whole response.",
    "extraTitle": "The actual transformer still needs checking",
    "extra": "Black Book lists the installed transformer code separately. We have not independently read its stamp, measured its bandwidth or reconstructed its windings. The block in this model is a location estimate.",
    "detail": "125A1A is the drawing’s designation, not authentication of either specimen’s installed transformer.",
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
