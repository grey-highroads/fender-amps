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
    "title": "The Volume knob comes after the first triode.",
    "body": "Input 2 reduces the signal before the first gain stage. Turning down Volume happens later. Those moves can produce different distortion even when the eventual loudness is similar.",
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
        "Input → first triode → EQ / Volume → second triode"
      ]
    ],
    "listen": "A hot pickup or boost can overload the first triode before Volume attenuates the signal. Input 2 changes both the level and the load seen by a passive pickup; its lower impedance can damp the pickup/cable resonance. Restoring downstream volume does not restore that same input interaction.",
    "together": "The phase inverter and output stage respond to the signal that survives the preamp. A quieter input therefore changes where clipping begins; it does not independently change the 6L6 operating conditions. The guitar’s source impedance, EQ settings and available downstream gain matter.",
    "extraTitle": "The channel-jumper wrinkle",
    "extra": "In the AB763 drawing, the Vibrato channel has an additional dry-signal gain stage at the reverb mixer. The Normal and Vibrato dry paths consequently reach the common mix with opposite polarity. Bridging channels can yield frequency-dependent cancellation. The input-jack loading figures above assume only one socket in that channel is occupied.",
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
    "detail": "Impedances and attenuation are nominal circuit calculations, not measurements of the modeled specimen. AB763 is the stated baseline for the channel-polarity comparison."
  },
  {
    "id": "reverb",
    "label": "Reverb",
    "side": "front",
    "offset": [
      -15,
      -48
    ],
    "title": "Reverb on zero still leaves a different dry path.",
    "body": "The AB763 Vibrato channel routes its dry signal through a 3.3 MΩ / 10 pF network into an extra mixing stage. Setting Reverb to zero silences the wet return; it leaves that dry-path architecture in circuit.",
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
    "listen": "The small bypass capacitor gives high frequencies a route around the large dry-mix resistor. Its effect depends on the surrounding impedances. The Vibrato channel’s response and gain structure therefore deserve attention even when the springs are not audible.",
    "together": "The send is taken after the channel’s second gain stage. Channel drive and EQ shape what excites the tank; the Reverb pot changes the return level, not the driver’s gain. More tank excitation and more wet return are different variables.",
    "extraTitle": "The tank is an electrical match, too",
    "extra": "Drive and pickup impedance, decay, grounding and mounting orientation all matter when identifying a replacement tank. An apparently similar pan is not enough to establish the correct match. We have not authenticated this specimen’s tank code, so no specific model, decay rating or spring count is assigned.",
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
    "detail": "Circuit observations refer to the linked drawings. They do not establish the condition, identity or measured response of the specimen’s surviving tank."
  },
  {
    "id": "vibrato",
    "label": "Vibrato / tremolo",
    "side": "front",
    "offset": [
      30,
      -12
    ],
    "title": "The optical cell works on the mixed channel signal.",
    "body": "The optical tremolo acts downstream of the Vibrato channel’s dry/reverb mix. The wet return participates in the level modulation too—a different relationship from putting a separate reverb effect after a tremolo pedal.",
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
    "listen": "Listen to the spring tail inside the pulse. The optical cell’s response and the oscillator shape contribute to the envelope; a generic sine-wave volume effect does not establish the same feel. This is a circuit implication, not a measured waveform from this amp.",
    "together": "The light-dependent resistor loads the Vibrato channel signal through the Intensity network. The oscillator does not swing the 6L6 grid-bias supply as a bias-vary tremolo would. Similar “Vibrato” labels across Fender generations can therefore hide substantially different circuits.",
    "extraTitle": "The component is part of the waveform",
    "extra": "An optical assembly’s light response and dark resistance can influence depth and recovery. Age or a replacement cell can matter even if the panel and oscillator values are unchanged. No original optical cell or modulation measurement has been authenticated for this specimen.",
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
    "detail": "“Vibrato” follows Fender’s panel label; the discussion concerns amplitude modulation. Claims about the actual cell’s age, originality or measured speed range remain open."
  },
  {
    "id": "grille-cloth",
    "label": "Grille cloth",
    "side": "front",
    "cosmetic": true,
    "title": "A correct-looking weave can conceal a restoration.",
    "body": "The silver/aqua grille helps place this Twin visually in the early silver-panel family. Its weave is useful evidence; its apparent color alone is much weaker evidence after decades of fading, dirt and photography.",
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
    "listen": "Compare the weave structure and installation evidence, not just how blue the photograph looks. A period-style replacement can match the broad appearance while the original mounting and fabric history are lost.",
    "together": "Cloth, aluminum surround and panel graphics make a persuasive period ensemble. They are all serviceable or replaceable parts. Establishing originality requires evidence beyond the ensemble looking right.",
    "extraTitle": "Keep the acoustic claim proportional",
    "extra": "There is no measured transmission curve for this modeled cloth. Assigning a signature treble loss or an “open” sound to its rendered weave would be invention. The speaker, cabinet and room remain separate questions.",
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
    "detail": "Color, pitch and relief are modeling estimates. No inference about factory cloth originality is made from the dealer photographs alone."
  },
  {
    "id": "drip-edge",
    "label": "Drip edge",
    "side": "front",
    "cosmetic": true,
    "title": "The surround dates a look, not a circuit.",
    "body": "This trim is a useful early silver-panel cue, but a drip-edge Twin is not automatically an AB763 Twin. The photographic reference is dealer-identified as AC568—exactly why cosmetics and circuitry need separate records.",
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
    "listen": "A frame and cloth restoration can preserve the early appearance while the chassis has been modified. A “blackfaced” amp may retain the same surround and panel; that work is invisible in this exterior view.",
    "together": "The AC568 drawing documents output-stage and phase-inverter differences from AB763. Those electrical details are more useful to a tone comparison than the outline of the grille frame.",
    "extraTitle": "A transitional appearance needs a circuit check",
    "extra": "Component dates, circuit inspection and records can strengthen an identification. No exact transition date, untouched circuit or universal production rule is inferred from this surround. The model’s trim profile remains approximate.",
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
    "detail": "The trim is represented as aluminum. Its shape and dimensions are estimates, and the “drip edge” nickname does not establish its engineering purpose."
  }
];
