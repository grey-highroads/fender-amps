// A circuit drawing describes a design, not the condition of a surviving specimen.
export const TWIN_TONE={
  "speakers": {
    "title": "The JBL option changes the final filter.",
    "body": "A JBL-equipped Twin and an Oxford-equipped Twin can share an amplifier circuit while delivering different attack and upper-frequency character. The optional speaker is a major configuration choice, not simply a different badge on the same sound.",
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
    "listen": "For matched nominal drivers, parallel wiring shares amplifier power between the pair. Sensitivity determines acoustic level for that electrical input; frequency response determines where it is emphasized. A higher power-capacity label alone proves neither greater sensitivity nor a particular breakup sound.",
    "together": "JBL’s 1970 literature specifies a 4-inch edgewound coil and an aluminum center dome, and promotes strong high-frequency definition. That is a documented design emphasis. The modeled Oxford’s exact response and sensitivity remain unmeasured, so an honest Oxford/JBL comparison still needs identified drivers and matched listening conditions.",
    "extraTitle": "A recone can change the comparison",
    "extra": "A vintage frame label can survive replacement of the cone and other moving parts. Reconing, coil details and condition matter to the sound attributed to a model name. The generic Nubert photograph illustrates construction only; it supplies no evidence about either vintage option’s tone.",
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
    "detail": "Oxford identity is owner-attributed and its geometry remains estimated. No power rating, response curve or sensitivity is invented for it."
  },
  "power-tubes": {
    "title": "AC568 adds cathode resistance to the bias story.",
    "body": "The AC568 drawing retains a negative grid-bias supply and also puts substantial resistance in the output-tube cathode returns. “Four 6L6GCs” therefore misses a consequential distinction from the AB763 arrangement.",
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
    "listen": "Cathode voltage can make the effective grid-to-cathode bias respond to output current. That makes operating point and drive behavior worth comparing before attributing a difference to tube brand. The exact audible result still requires a known circuit, healthy tubes and measurements.",
    "together": "The phase inverter, grid-bias network, cathode returns, supply and feedback work together. A “blackface conversion” can change that system while leaving the same quartet installed. Tube type alone cannot tell you which version you are hearing.",
    "extraTitle": "Why the 1968 label is insufficient",
    "extra": "The reference dealer calls this specimen AC568. That attribution is useful, but the model has not reproduced or audited its entire chassis. The linked AB763/AC568 drawings establish a circuit comparison; they do not certify that this surviving amp is unmodified.",
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
    "detail": "This corrects the earlier generic fixed-bias summary: the AC568 cathode network deserves explicit treatment. Tube positions and envelopes in the model remain illustrative."
  },
  "output-transformer": {
    "title": "The same transformer number can span different circuits.",
    "body": "Both linked AB763 and AC568 drawings identify output transformer TR3 as 125A29A. A matching transformer identifier therefore cannot, by itself, prove that a silver-panel Twin retains the black-panel circuit.",
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
    "listen": "The turns ratio reflects the speaker load into the output stage. The feedback loop then samples the secondary signal, placing transformer behavior inside the amplifier’s correction loop. Core, windings, loading and available loop gain belong in the same explanation.",
    "together": "A speaker change can alter the acoustic result while preserving nominal impedance. A load change also alters the electrical operating conditions seen through the transformer. Those are different comparisons; “same iron” does not hold the rest of the system constant.",
    "extraTitle": "What the number does not tell us",
    "extra": "The drawing designation does not establish this specimen’s installed unit, winding condition or measured bandwidth. We have not measured saturation or independently confirmed its transformer codes. No claim of a special vintage alloy or a universal “big iron” tone is warranted.",
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
    "detail": "The transformer block is an estimated spatial marker. Part-number comparison is schematic evidence, not authentication of the installed specimen."
  }
};
