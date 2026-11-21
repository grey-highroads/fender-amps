// Specialist editorial cards; circuit claims are scoped to the linked drawings.
export const TWIN_FEATURES=[
  {
    "id": "inputs",
    "label": "Inputs",
    "side": "front",
    "offset": [
      0,
      -25
    ],
    "title": "Input 2 and Volume turn you down at different points.",
    "body": "Input 2 cuts the signal by about 6 dB before the first gain stage. The Volume control comes later. So the two can give you different distortion at about the same loudness.",
    "attributes": [
      [
        "Single occupied input",
        "1: ≈1 MΩ · 2: ≈136 kΩ"
      ],
      [
        "Input 2 pad",
        "Approximately −6 dB"
      ],
      [
        "Path",
        "Input → first gain stage → EQ / Volume → second triode"
      ]
    ],
    "listen": "A hot pickup or a boost can push the first stage before Volume gets a say. Input 2 drops the level and also loads a passive pickup harder, which can take some edge off its resonant peak. Turning the Volume back up afterward doesn’t undo that.",
    "together": "With one jack in use, Input 1 is about 1 MΩ and Input 2 about 136 kΩ. A quieter input changes where clipping starts. It doesn’t change how the 6L6s are running. Your guitar, the EQ settings and the gain after the preamp all figure in.",
    "extraTitle": "Jumpering the channels",
    "extra": "On the AB763 drawing the Vibrato channel has an extra dry-signal gain stage at the reverb mixer. That puts the Normal and Vibrato dry signals in opposite polarity where they meet, so bridging the channels can cancel some frequencies.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_TWIN_REVERB_AB763.pdf",
        "Fender AB763 · input and channel paths"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Twin-Reverb-AC568-Schematic.pdf",
        "Fender AC568 · comparison drawing"
      ]
    ],
    "detail": "Impedance and pad figures are calculated from the drawings, not measured on this amp, and assume one jack in use per channel. The channel-polarity point is from the AB763 drawing."
  },
  {
    "id": "reverb",
    "label": "Reverb",
    "side": "front",
    "offset": [
      -15,
      -48
    ],
    "title": "Reverb at zero still leaves a different dry path.",
    "body": "On the AB763 drawing, the Vibrato channel sends its dry signal through a 3.3 MΩ resistor with a 10 pF bypass into an extra mixing stage. Turn Reverb to zero and the springs go quiet, but that dry path is still in the circuit.",
    "attributes": [
      [
        "Driver",
        "Parallel 12AT7 triodes · transformer coupled"
      ],
      [
        "Dry-path detail",
        "3.3 MΩ with 10 pF bypass"
      ],
      [
        "Return",
        "Recovery triode → Reverb pot → mixer"
      ]
    ],
    "listen": "The little bypass cap gives highs a way around the big resistor. So the Vibrato channel has its own response and gain structure, and it’s worth a listen on those terms even when you’re not using the reverb.",
    "together": "The send comes off after the channel’s second gain stage, so channel drive and EQ shape what hits the tank. Two 12AT7 triodes in parallel drive it through a transformer. The Reverb pot only sets how much return you hear. It doesn’t change how hard the tank is driven.",
    "extraTitle": "Replacing a tank",
    "extra": "Drive and pickup impedance, decay, grounding and mounting orientation all have to match. A pan that looks the same isn’t necessarily the right one.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_TWIN_REVERB_AB763.pdf",
        "Fender AB763 · dry/wet mixer and driver"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Twin-Reverb-AC568-Schematic.pdf",
        "Fender AC568 · reverb path"
      ]
    ],
    "detail": "From the linked AB763 and AC568 drawings. We haven’t identified this amp’s tank, so no model, decay or spring count is given."
  },
  {
    "id": "vibrato",
    "label": "Vibrato / tremolo",
    "side": "front",
    "offset": [
      30,
      -12
    ],
    "title": "The tremolo pulses the reverb tail too.",
    "body": "The optical tremolo sits after the Vibrato channel’s dry and reverb mix. The spring tail gets pulsed along with the note, which feels different from a reverb pedal after a tremolo pedal.",
    "attributes": [
      [
        "Topology",
        "Oscillator → neon / light-dependent resistor"
      ],
      [
        "Signal location",
        "After dry/wet mix · before common output stages"
      ],
      [
        "Output-tube bias",
        "Not the modulation point"
      ]
    ],
    "listen": "Listen for the tail inside the pulse. The optical cell and the oscillator both shape that pulse, so don’t expect it to feel like a plain sine-wave volume effect.",
    "together": "A light-dependent resistor loads the Vibrato channel signal through the Intensity control. The oscillator doesn’t touch the 6L6 bias the way a bias tremolo would. Fender put the word Vibrato on a lot of panels over the years, and the circuits behind it aren’t all the same.",
    "extraTitle": "Old cells drift",
    "extra": "The cell’s light response and dark resistance affect depth and recovery. An aged or replaced cell can change the feel even when the panel and the oscillator parts are untouched.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_TWIN_REVERB_AB763.pdf",
        "Fender AB763 · optical tremolo and mix"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Twin-Reverb-AC568-Schematic.pdf",
        "Fender AC568 · optical circuit"
      ]
    ],
    "detail": "Vibrato is Fender’s panel label. The effect is tremolo, a change in volume. We haven’t measured the waveform or speed range, or checked whether this amp’s cell is original."
  },
  {
    "id": "grille-cloth",
    "label": "Grille cloth",
    "side": "front",
    "cosmetic": true,
    "title": "The right-looking cloth isn’t proof of original cloth.",
    "body": "The silver and aqua grille puts this Twin in the early silver-panel family at a glance. The weave is decent evidence. The color is much weaker, after decades of fading, dirt and whatever the camera did.",
    "attributes": [
      [
        "Collector detail",
        "Weave, thread colors and installation"
      ],
      [
        "This study",
        "Silver / aqua appearance · estimated scale"
      ],
      [
        "Circuit inference",
        "None from cloth alone"
      ]
    ],
    "listen": "Look at the weave and how the cloth is installed, not how blue it looks in the photo. A period-style replacement can get the look right while the original mounting and fabric are long gone.",
    "together": "Cloth, aluminum trim and panel graphics add up to a convincing period front. Every one of those parts can be replaced, so the look alone doesn’t establish originality.",
    "extraTitle": "Does the cloth change the sound?",
    "extra": "We don’t have a measurement for this cloth, so we’re not making a claim either way.",
    "sources": [
      [
        "https://www.vintageguitarandbass.com/fender/catalogues/1968_33.php",
        "1968 Fender catalog · styling"
      ],
      [
        "https://retrofret.com/products/fender-twin-reverb-ac-568-wfactory-jbls-large-combo-tube-amplifier-1968-13479",
        "1968 specimen · photographic comparison"
      ]
    ],
    "detail": "Color, thread pitch and relief in the model are estimates. We’re not judging factory originality from the dealer photos."
  },
  {
    "id": "drip-edge",
    "label": "Drip edge",
    "side": "front",
    "cosmetic": true,
    "title": "The drip edge dates the look, not the circuit.",
    "body": "The aluminum trim is a good early silver-panel cue. It doesn’t tell you the circuit. A drip-edge Twin can be an AC568 and not an AB763, so check cosmetics and circuit separately.",
    "attributes": [
      [
        "Visible cue",
        "Aluminum grille surround"
      ],
      [
        "Reference attribution",
        "1968 · dealer identifies AC568"
      ],
      [
        "Useful cross-check",
        "Chassis evidence against the circuit drawing"
      ]
    ],
    "listen": "A restored frame and cloth can keep the early look on a chassis that’s been modified. It works the other way too: a blackfaced amp keeps the same trim and panel, and you can’t see that work from the front.",
    "together": "The AC568 drawing shows output-stage and phase-inverter differences from the AB763. If you’re comparing tone, those matter more than the outline of the grille frame.",
    "extraTitle": "How to check what you’ve got",
    "extra": "Component dates, a look at the circuit and any paperwork all help pin down what an amp is. The trim alone doesn’t give you a transition date or tell you the circuit is untouched.",
    "sources": [
      [
        "https://www.vintageguitarandbass.com/fender/catalogues/1968_33.php",
        "1968 Fender catalog · appearance"
      ],
      [
        "https://retrofret.com/products/fender-twin-reverb-ac-568-wfactory-jbls-large-combo-tube-amplifier-1968-13479",
        "Dealer AC568 specimen attribution"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Twin-Reverb-AC568-Schematic.pdf",
        "Fender AC568 · circuit reference"
      ]
    ],
    "detail": "The trim is modeled as aluminum, with estimated shape and dimensions. Drip edge is a nickname, and it doesn’t tell you what the trim was for."
  }
];
