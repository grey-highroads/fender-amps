// A circuit drawing describes a design, not the condition of a surviving specimen.
export const TWIN_TONE={
  "speakers": {
    "title": "JBLs or Oxfords: same circuit, different attack and top end.",
    "body": "A Twin with JBLs and a Twin with Oxfords can have the same circuit and still differ in attack and upper-frequency character. The speaker option is a real configuration choice.",
    "attributes": [
      [
        "Modeled configuration",
        "Oxford-family · two nominal 8 Ω drivers"
      ],
      [
        "Factory option",
        "JBL D120F · documented in 1968 catalog"
      ],
      [
        "Comparison variables",
        "Response · efficiency · compression · cone condition"
      ]
    ],
    "listen": "Two matched speakers in parallel split the amp’s power between them. Sensitivity decides how loud that power gets, and frequency response decides where it’s emphasized. A higher power rating on the label doesn’t tell you a speaker is louder, or how it breaks up.",
    "together": "JBL’s 1970 literature lists a 4-inch edgewound voice coil and an aluminum center dome for the D120F, and promotes its high-frequency definition. That’s JBL describing its own design. The 1968 Fender catalog documents the D120F as a factory option.",
    "extraTitle": "A recone changes the comparison",
    "extra": "A vintage frame label can outlive the cone and the other moving parts. Ask whether a speaker has been reconed before you credit the model name for what you hear.",
    "sources": [
      [
        "https://www.vintageguitarandbass.com/fender/catalogues/1968_32.php",
        "1968 Fender catalog · JBL option"
      ],
      [
        "https://www.cieri.net/Documenti/JBL/Documenti%20tecnici/Cataloghi/JBL%20-%20Musical%20Instrument%20Loudspeakers%20-%20D110F%2C%20D120F%2C%20D130F%2C%20D140F%20-%20Brochure%20%281970%29%20%28English%29.pdf",
        "JBL 1970 brochure · D120F construction"
      ]
    ],
    "detail": "Our model shows Oxford-family speakers, an owner attribution, with estimated geometry. We have no measured response or sensitivity for them, so a fair Oxford and JBL comparison still needs identified speakers at matched volume. The photo is a generic Nubert speaker."
  },
  "power-tubes": {
    "title": "The AC568 adds cathode resistors to the output tubes.",
    "body": "The AC568 drawing keeps the negative grid-bias supply and also puts substantial resistance in the output-tube cathode returns. On the AB763 those cathodes go to ground. So calling both of them four 6L6GCs skips a real difference.",
    "attributes": [
      [
        "AC568 drawing",
        "Cathode resistors plus negative grid bias"
      ],
      [
        "AB763 comparison",
        "Output cathodes grounded"
      ],
      [
        "Also changed",
        "Phase-inverter component values"
      ]
    ],
    "listen": "As current rises, the voltage at the cathodes can shift the bias the tubes are running at. If a silver-panel Twin feels different from a black-panel one, check the circuit before you credit the tube brand.",
    "together": "Phase-inverter values changed on the AC568 too. Inverter, bias network, cathode returns, supply and feedback all work as one system, and a blackface conversion can change that system with the same four tubes still in their sockets.",
    "extraTitle": "About this particular amp",
    "extra": "The dealer calls our reference amp an AC568. That’s useful, but we haven’t audited its whole chassis, and the drawings can’t tell you whether a surviving amp has been modified.",
    "sources": [
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Twin-Reverb-AC568-Schematic.pdf",
        "Fender AC568 · output stage and phase inverter"
      ],
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_TWIN_REVERB_AB763.pdf",
        "Fender AB763 · comparison"
      ]
    ],
    "detail": "The comparison is between the linked AB763 and AC568 drawings. What you’d hear from the difference hasn’t been measured here. Tube positions and shapes in the model are illustrative."
  },
  "output-transformer": {
    "title": "Same transformer number, different circuit.",
    "body": "Both the AB763 and AC568 drawings call the output transformer TR3, part 125A29A. So a matching transformer number can’t tell you a silver-panel Twin still has the black-panel circuit.",
    "attributes": [
      [
        "Drawing identifier",
        "TR3 · 125A29A"
      ],
      [
        "Nominal speaker load",
        "4 Ω"
      ],
      [
        "System connection",
        "Output secondary feeds the feedback network"
      ]
    ],
    "listen": "The transformer makes the speaker load part of what the power tubes work into. The feedback loop takes its sample from the transformer’s secondary, so the transformer’s behavior is inside the loop too.",
    "together": "Swap speakers at the same nominal impedance and you change the sound. Change the load and you also change the conditions the output stage runs under. Those are separate comparisons, and having the same transformer doesn’t hold everything else constant.",
    "extraTitle": "What the number doesn’t tell you",
    "extra": "It doesn’t tell you which unit is in this amp, what shape its windings are in, or its bandwidth. We haven’t confirmed the codes or measured anything, and we’re not claiming a special vintage alloy or a big-iron tone.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/fender/Fender_TWIN_REVERB_AB763.pdf",
        "Fender AB763 · TR3 and feedback"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Twin-Reverb-AC568-Schematic.pdf",
        "Fender AC568 · TR3 and feedback"
      ]
    ],
    "detail": "The block in the model marks an estimated location. The part number comes from the drawings, not from the amp."
  }
};
