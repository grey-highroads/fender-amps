// Source-scoped hotspot content. No generated media in this batch.
export const TREMOLUX_FEATURES=[
  {
    "id": "revision",
    "label": "Early tremolo & circuit identity",
    "side": "top",
    "menuOnly": false,
    "title": "The tube chart doesn’t identify the circuit.",
    "body": "The early Tremolux has Depth and Speed on the top panel. Later Tremoluxes kept the name and even the chart stock while the circuit changed. So the chart alone is a poor guide to which tremolo circuit is in the amp.",
    "attributes": [
      [
        "Chart marking",
        "5E9"
      ],
      [
        "Panel",
        "Depth, Speed, Tone, Instrument and Microphone Volumes"
      ]
    ],
    "listen": "If you’re comparing or buying one, find out the actual circuit revision first. Don’t borrow a description of a later Tremolux’s tremolo or headroom.",
    "together": "The early amp’s tube chart is marked 5E9. We haven’t found a Fender drawing for the 5E9 itself. The one that’s available is the 5E9-A, and we don’t use it to fill the gap.",
    "extraTitle": "Where this comes from",
    "extra": "The panel layout and the chart marking are from photos of a June 1955 amp.",
    "detail": "The marker is on Depth. How the 5E9’s tremolo works isn’t established here.",
    "sources": [
      [
        "https://retrofret.com/products/fender-tremolux-model-5e9-tube-amplifier-1955-10792",
        "1955 serial 0093 · inspected chart and panel"
      ]
    ]
  },
  {
    "id": "input-tube",
    "label": "12AY7 input-tube specification",
    "side": "rear",
    "menuOnly": false,
    "title": "The chart puts a 12AY7 at the input.",
    "body": "The 1955 chart lists a 12AY7 along with two 12AX7s. Other tubes will fit that socket, and the amp won’t necessarily behave the same with them. So it’s worth noting what’s in there when you compare two of these.",
    "attributes": [
      [
        "Chart complement",
        "12AY7 · two 12AX7s"
      ],
      [
        "Rear chart order",
        "Rectifier, two 6V6GTs, two 12AX7s, 12AY7"
      ]
    ],
    "listen": "Before you give the speaker or the transformer all the credit for a difference in drive, check which input tube is fitted.",
    "together": "Tube type is only part of a stage’s gain and headroom. The circuit around it, the signal level and the loading decide how a swap reaches the rest of the amp.",
    "extraTitle": "Where this comes from",
    "extra": "Read from the tube chart of a 1955 amp.",
    "detail": "The marker is on the small tube at the right end, following the chart’s rear order. Spacing is illustrative. The circuit hasn’t been traced, so no gain figure or swap advice is implied.",
    "sources": [
      [
        "https://retrofret.com/products/fender-tremolux-model-5e9-tube-amplifier-1955-10792",
        "1955 serial 0093 · inspected chart and panel"
      ]
    ]
  },
  {
    "id": "rectifier",
    "label": "Hand-corrected rectifier chart",
    "side": "rear",
    "menuOnly": false,
    "title": "The chart says 5U4GA in print and 5Y3GT in ink.",
    "body": "The early Tremolux tube chart was printed with a 5U4GA rectifier. On a 1955 example it’s crossed out by hand and 5Y3GT is written in, and the power-consumption figure is corrected too. That’s better evidence than whatever rectifier is in a socket today.",
    "attributes": [
      [
        "Printed chart",
        "5U4GA · crossed out"
      ],
      [
        "Handwritten correction",
        "5Y3GT · modeled specification"
      ]
    ],
    "listen": "On a serviced early Tremolux, keep two records: what the chart says and what’s installed. Neither one settles what every first-run amp left the factory with.",
    "together": "We show a 5Y3GT. Rectifier drop, transformer resistance and load would all figure in any real comparison of how the supply responds.",
    "extraTitle": "Where this comes from",
    "extra": "The hand correction is visible in a photo of the chart. We don’t know who made it.",
    "detail": "The marker is on the rectifier. Nothing here is a claim about sag or a recommendation to swap.",
    "sources": [
      [
        "https://retrofret.com/products/fender-tremolux-model-5e9-tube-amplifier-1955-10792",
        "1955 serial 0093 · inspected chart and panel"
      ]
    ]
  },
  {
    "id": "speaker",
    "label": "Speaker & small cabinet",
    "side": "rear",
    "menuOnly": false,
    "title": "A Jensen twelve in a Deluxe-size box.",
    "body": "The early Tremolux has one 12-inch Jensen at 8 ohms, a P12R or P12Q, in a cabinet the size of a tweed Deluxe’s. The taller cabinet you usually see pictured under the Tremolux name came later.",
    "attributes": [
      [
        "Stock speaker",
        "One 12-inch Jensen P12R or P12Q · 8 Ω"
      ],
      [
        "Working cabinet",
        "20 × 16 × 9.5 in · W × H × D"
      ]
    ],
    "listen": "So an early Tremolux and a later one differ in the box as well as the circuit. If you’re comparing two, get the dates first.",
    "together": "Several June 1955 amps are described as being in the same size cabinet as the 5E3 Deluxe. Published dimensions for them don’t all agree.",
    "extraTitle": "Where this comes from",
    "extra": "The speaker models are from Mojotone’s Fender field guide. The small cabinet follows descriptions of early 1955 amps.",
    "detail": "The marker is on the back of the speaker. The speaker in the model stands in for a P12Q type. Basket, magnet and cabinet dimensions are estimates.",
    "sources": [
      [
        "https://retrofret.com/products/fender-tremolux-model-5e9-tube-amplifier-1955-10792",
        "1955 serial 0093 · inspected chart and panel"
      ],
      [
        "https://www.creamcitymusic.com/vintage-fender-tremolux-15w-1x12-tube-combo-amp-1955/",
        "Second small-box specimen · dealer dimensions"
      ],
      [
        "https://mojotone.com/blogs/fender-field-guide/fender-narrow-panel-tweed-tremolux",
        "Mojotone Fender field guide · narrow-panel Tremolux"
      ]
    ]
  }
];
export const SUPER_SIX_FEATURES=[
  {
    "id": "master",
    "label": "Master before the phase inverter",
    "side": "front",
    "menuOnly": false,
    "title": "This Master sits before the phase inverter.",
    "body": "On the 100-watt master-volume drawing, Master sits after the two channels meet and before the phase inverter. Turn it down and less signal reaches the inverter and the four output tubes.",
    "attributes": [
      [
        "Drawing",
        "010182 Rev C · no pull-boost"
      ],
      [
        "Position",
        "Channel mix → Master → phase inverter"
      ]
    ],
    "listen": "High channel Volume with a low Master pushes the earlier stages and keeps the output section cleaner. That isn’t the sound of the power section working hard, only quieter.",
    "together": "It’s one control for both channels, placed after the mixing resistors. It isn’t a speaker attenuator.",
    "extraTitle": "Where this comes from",
    "extra": "Fender drawing 010182 Rev C, the 100-watt family sheet with no pull boost. It includes the Super Six speaker hookup.",
    "detail": "The marker is on the Master knob. The drawing is a family sheet, not an audit of our reference amp’s chassis.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/Fender/Fender_twinreverb_sf_100_mv_noboost.pdf",
        "Fender 010182 Rev C · 100 W master-volume family"
      ]
    ]
  },
  {
    "id": "bright",
    "label": "Volume-dependent Bright bypass",
    "side": "front",
    "menuOnly": false,
    "title": "Bright does less as you turn the channel up.",
    "body": "The switch puts a small cap, 120 pF on the drawing, across part of the channel’s Volume control. That gives highs a way around the pot when it’s turned down, so how much you hear depends on where Volume is set.",
    "attributes": [
      [
        "Drawing bypass",
        "120 pF · switched per channel"
      ],
      [
        "Location",
        "Channel Volume, before common Master"
      ]
    ],
    "listen": "Try Bright at low channel Volume. Then raise the channel Volume and bring Master down to match. You can be about as loud with a different amount of added treble.",
    "together": "With the channel Volume all the way up, the part of the pot the cap bridges is effectively gone. Master comes later and doesn’t sit in that bright network.",
    "extraTitle": "Where this comes from",
    "extra": "The layout and the value are from drawing 010182 Rev C.",
    "detail": "The marker is on the Normal channel’s Bright switch. No frequency response was measured, and the cap in a surviving amp may differ.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/Fender/Fender_twinreverb_sf_100_mv_noboost.pdf",
        "Fender 010182 Rev C · 100 W master-volume family"
      ]
    ]
  },
  {
    "id": "reverb",
    "label": "Wet/dry mix before Master",
    "side": "front",
    "menuOnly": false,
    "title": "Master comes after the reverb mix.",
    "body": "The spring drive is taken from the Vibrato channel ahead of Master, and the return rejoins the dry signal ahead of Master too. So turning Master down isn’t the same as sending less signal into the tank.",
    "attributes": [
      [
        "Driver",
        "Transformer-coupled 12AT7"
      ],
      [
        "Master",
        "After wet/dry mixing"
      ]
    ],
    "listen": "Hold the channel Volume where it is and lower Master. What comes out gets quieter, but you haven’t turned down the tank’s input by the same amount.",
    "together": "The dry path uses a large mixing resistor with a small treble bypass. A transformer-coupled 12AT7 drives the tank. Spring drive, return level and Master are three separate things in the signal path.",
    "extraTitle": "Where this comes from",
    "extra": "Traced on the no-pull 100-watt family drawing.",
    "detail": "The marker is on the Reverb knob. The tank type, its decay and spring count, and our reference amp’s service history aren’t established.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/Fender/Fender_twinreverb_sf_100_mv_noboost.pdf",
        "Fender 010182 Rev C · 100 W master-volume family"
      ]
    ]
  },
  {
    "id": "tremolo",
    "label": "Optical tremolo after the mix",
    "side": "front",
    "menuOnly": false,
    "title": "The tremolo pulses the reverb tail too.",
    "body": "On the no-pull 100-watt drawing, the optical tremolo works on the signal after dry and reverb have been mixed, and before the common Master.",
    "attributes": [
      [
        "Method",
        "Oscillator and optical signal shunt"
      ],
      [
        "Sequence",
        "Wet/dry mix → tremolo → Master"
      ]
    ],
    "listen": "Let a long spring tail ring after you stop picking and you’ll hear the pulse carry on through it. That comes from where the tremolo sits in the circuit. The six speakers have nothing to do with it.",
    "together": "It’s an optical circuit that shunts the signal. That’s a different design from the bias tremolo in the brown Deluxe and the Princeton Reverb. The panel calls it Vibrato anyway.",
    "extraTitle": "Where this comes from",
    "extra": "The order of the stages is from the drawing.",
    "detail": "The marker is on Intensity. Depth and pulse shape weren’t measured.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/Fender/Fender_twinreverb_sf_100_mv_noboost.pdf",
        "Fender 010182 Rev C · 100 W master-volume family"
      ]
    ]
  },
  {
    "id": "speakers",
    "label": "Six drivers & unusual load",
    "side": "rear",
    "menuOnly": false,
    "title": "Six 8-ohm speakers come out at 5.33 ohms.",
    "body": "The Super Six hookup on Fender’s drawing wires the speakers as three pairs. Each pair is two 8-ohm speakers in series, which is 16 ohms, and the three pairs are in parallel. That works out to 16 divided by 3.",
    "attributes": [
      [
        "Declared wiring",
        "Three series pairs in parallel"
      ],
      [
        "Nominal calculation",
        "16/3 Ω ≈ 5.33 Ω"
      ]
    ],
    "listen": "You can’t tell the load from the speaker count. If the set has been replaced, you need the actual wiring and each speaker’s impedance, not six labels that look alike.",
    "together": "You’ll see 5.2 ohms published for this amp. That and the 5.33 from the arithmetic describe the same load. A speaker’s real impedance moves with frequency anyway.",
    "extraTitle": "Where this comes from",
    "extra": "The wiring is from Fender’s family drawing.",
    "detail": "The marker is on one middle-row speaker and stands for all six. The wires in the model are there to explain the hookup. We haven’t tested the reference amp’s wiring or identified its speakers.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/Fender/Fender_twinreverb_sf_100_mv_noboost.pdf",
        "Fender 010182 Rev C · 100 W master-volume family"
      ],
      [
        "https://www.hendrixguitars.com/Images/SuperSix2.jpg",
        "Period Fender sheet · six tens and 100 W"
      ]
    ]
  },
  {
    "id": "power",
    "label": "Four 6L6s & bias balance",
    "side": "rear",
    "menuOnly": false,
    "title": "The bias control on this drawing is a Balance control.",
    "body": "The family drawing labels its output-stage adjustment Balance. That’s worth keeping apart from a control meant to set the idle current of all four tubes together.",
    "attributes": [
      [
        "Output section",
        "Four 6L6GCs"
      ],
      [
        "Drawing control",
        "Balance in the grid-bias network"
      ]
    ],
    "listen": "When you read a service record, ask what was measured and what kind of bias circuit the amp has. A note that the bias was adjusted can mean different work on different Fender revisions.",
    "together": "The drawing shows negative grid bias, grounded cathodes and a long-tail inverter feeding the four 6L6GCs. A later conversion can change that network with the same four tubes still in place.",
    "extraTitle": "Where this comes from",
    "extra": "Drawing 010182 Rev C. The 100-watt rating is from period Fender documentation.",
    "detail": "The marker is on one 6L6. Socket positions are estimated, and the upper board may hide the marker. No idle-current target or service procedure is given.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/files/Fender/Fender_twinreverb_sf_100_mv_noboost.pdf",
        "Fender 010182 Rev C · 100 W master-volume family"
      ]
    ]
  }
];
export const JUNIOR_FEATURES=[
  {
    "id": "gain",
    "label": "Volume before Master",
    "side": "top",
    "menuOnly": false,
    "title": "Volume and Master turn you down at different points.",
    "body": "Volume comes early in the preamp. Master comes after more gain and the tone controls. So you can run the early stages hard and still turn down what reaches the output section.",
    "attributes": [
      [
        "Selected circuit",
        "Original PR 295 / 1995 family"
      ],
      [
        "Order",
        "Volume → gain and tone stages → Master"
      ]
    ],
    "listen": "Try low Volume with high Master, then the reverse, at about the same loudness. They won’t feel the same, because different stages are doing the work.",
    "together": "The 1995 service text lays out the order: first stage, Volume, more gain and the tone network, then Master. Turning Master down doesn’t reduce what your guitar sends into the first stage.",
    "extraTitle": "Where this comes from",
    "extra": "The original 1995 service text. Some manual downloads have later circuits appended, and those aren’t used here.",
    "detail": "The marker is on the Volume knob. We haven’t measured which stage clips first or what the output tubes do at low volume.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/Files/Fender/Fender_blues_junior_service_manual.pdf",
        "Fender PR 295 · November 1995 service text"
      ]
    ]
  },
  {
    "id": "fat",
    "label": "Fat changes the first stage",
    "side": "top",
    "menuOnly": false,
    "title": "Fat works on the first stage, before the tone controls.",
    "body": "The Fat switch adds a bypass cap at the cathode of the first gain stage. The extra drive happens ahead of the tone controls, so it isn’t the same as turning up Bass at the end.",
    "attributes": [
      [
        "Location",
        "First 12AX7 gain stage"
      ],
      [
        "Switching",
        "Bypass capacitor controlled through a JFET"
      ]
    ],
    "listen": "Try it with your guitar’s volume backed off, then with a hotter signal. The later stages get a different signal either way, so the drive can change along with the tone.",
    "together": "A cathode bypass changes that stage’s local feedback over part of the frequency range. The panel button and the optional footswitch work the same circuit, switched through a JFET.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s November 1995 theory-of-operation text.",
    "detail": "The marker is on the Fat button. The JFET and the cap are inside the chassis. No gain figure is given, and this isn’t a comparison with later Juniors.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/Files/Fender/Fender_blues_junior_service_manual.pdf",
        "Fender PR 295 · November 1995 service text"
      ]
    ]
  },
  {
    "id": "reverb",
    "label": "Solid-state spring circuit",
    "side": "top",
    "menuOnly": false,
    "title": "Real springs, no tube driver.",
    "body": "The original Junior drives and recovers a real spring tank with solid-state parts. It has three 12AX7s, but that doesn’t mean its reverb works like a Princeton Reverb’s tube circuit.",
    "attributes": [
      [
        "Reverb electronics",
        "U1A driver · U1B recovery"
      ],
      [
        "1995 routing",
        "Drive feed after Master"
      ]
    ],
    "listen": "The feed to the springs comes after Master, so changing Master can change how hard they’re driven. The Reverb knob then sets how much spring sound gets mixed back in.",
    "together": "In the 1995 routing, wet and dry are summed ahead of the phase inverter. The service text labels the reverb driver U1A and the recovery U1B.",
    "extraTitle": "Where this comes from",
    "extra": "The 1995 service text. Later revisions bundled in the same PDF aren’t treated as first-year evidence.",
    "detail": "The marker is on the Reverb knob. The tank is hidden or only partly visible. Noise and decay weren’t measured.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/Files/Fender/Fender_blues_junior_service_manual.pdf",
        "Fender PR 295 · November 1995 service text"
      ]
    ]
  },
  {
    "id": "power",
    "label": "EL84 pair with fixed bias",
    "side": "rear",
    "menuOnly": false,
    "title": "EL84s, but not cathode bias.",
    "body": "This pair runs fixed bias, from a negative grid supply. Having EL84s doesn’t make the Junior a cathode-biased British circuit in a black cabinet.",
    "attributes": [
      [
        "Output",
        "Two EL84 / 6BQ5 · push-pull"
      ],
      [
        "Bias",
        "Resistor-set negative grid-bias supply"
      ]
    ],
    "listen": "The tube type is only where a comparison starts. The inverter, the feedback, how the tubes are run, the speaker and the cabinet all belong in it too.",
    "together": "The service text takes the bias from a negative supply through a resistor divider. Compare that with the tweed 5E3, where the two output tubes share a cathode resistor.",
    "extraTitle": "Where this comes from",
    "extra": "The original 1995 service text.",
    "detail": "The marker is on one EL84 at the rear tube window. Tube shape and socket spacing are estimates. No operating class, idle current or tube-swap advice is implied.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/Files/Fender/Fender_blues_junior_service_manual.pdf",
        "Fender PR 295 · November 1995 service text"
      ]
    ]
  },
  {
    "id": "speaker",
    "label": "Stock speaker",
    "side": "rear",
    "menuOnly": false,
    "title": "The 1995 amp has an Eminence twelve.",
    "body": "The first-year manual calls for one 12-inch Eminence at 8 ohms. A later limited edition with a different speaker doesn’t change what a 1995 amp shipped with.",
    "attributes": [
      [
        "Stock speaker",
        "One 12-inch Eminence · 8 Ω"
      ],
      [
        "Source",
        "November 1995 owner’s manual"
      ]
    ],
    "listen": "If two Juniors sound different, write down which speaker each one has and whether its cone is original before you put it all down to green board versus later boards.",
    "together": "The manual’s wording for the exact speaker model is muddled, so we keep to what’s clear: the maker, the size and the load.",
    "extraTitle": "Where this comes from",
    "extra": "Fender’s November 1995 owner’s manual.",
    "detail": "The marker is on the speaker magnet. The speaker in the model is unbranded and its geometry is illustrative. No response or sensitivity figures are claimed, and no green-board tone rule.",
    "sources": [
      [
        "https://el34world.com/charts/Schematics/Files/Fender/Fender_blues_junior_service_manual.pdf",
        "Fender PR 295 · November 1995 service text"
      ]
    ]
  }
];
export const PROSONIC_FEATURES=[
  {
    "id": "gain",
    "label": "Two drive-gain controls",
    "side": "front",
    "menuOnly": false,
    "title": "Gain 2 isn’t a second volume knob.",
    "body": "Fender describes Gain 1 as conventional drive and Gain 2 as adding a compression-like sustain with less edge. So the drive channel gives you two different ways to shape the response before you set the level.",
    "attributes": [
      [
        "Channel",
        "Drive only"
      ],
      [
        "Factory description",
        "Gain 2: compression-like behavior"
      ]
    ],
    "listen": "Try more Gain 1 and less Gain 2, then swap them and match the level with Master. Listen to the attack and how the note decays, not how loud it is.",
    "together": "The combo drawing shows separate networks for the two gain controls inside the drive path. The compressor comparison is Fender describing the feel. It doesn’t mean there’s a separate compressor in there.",
    "extraTitle": "Where this comes from",
    "extra": "The behavior is from Fender’s owner’s manual. The combo drawing we have is Rev E, revised in 1997, so it doesn’t prove every part value in a 1996 amp.",
    "detail": "The marker is on Gain 1. Gain 2 is the next knob over.",
    "sources": [
      [
        "https://www.fmicassets.com/Damroot/Original/10001/OM_leg_gtramp_Prosonic.pdf",
        "Fender Prosonic · owner manual"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Prosonic-Schematic.pdf",
        "Fender combo D049951 Rev E · topology reference, revised 1997"
      ]
    ]
  },
  {
    "id": "master",
    "label": "Drive-only Master",
    "side": "front",
    "menuOnly": false,
    "title": "Master only works on the drive channel.",
    "body": "The Normal channel’s level is its Volume. The drive channel’s level is Master, after the two gains. If you treat Master as an overall volume, balancing the channels gets frustrating.",
    "attributes": [
      [
        "Normal level",
        "Volume"
      ],
      [
        "Drive level",
        "Gain 1 / Gain 2 into Master"
      ]
    ],
    "listen": "Balance the two channels with their own level controls before you judge a change in gain or rectifier mode. Matched loudness makes the difference in attack easier to hear.",
    "together": "Both channels share the tone controls and the output section. Separate level controls don’t make them two separate amps.",
    "extraTitle": "Where this comes from",
    "extra": "The channel assignments are straight from Fender’s owner’s manual.",
    "detail": "The marker is on the Master knob. The relay switching is inside the chassis. No gain or compression measurements were made.",
    "sources": [
      [
        "https://www.fmicassets.com/Damroot/Original/10001/OM_leg_gtramp_Prosonic.pdf",
        "Fender Prosonic · owner manual"
      ]
    ]
  },
  {
    "id": "reverb",
    "label": "Combo-only tube spring reverb",
    "side": "front",
    "menuOnly": false,
    "title": "The combo isn’t the head with speakers added.",
    "body": "The combo has tube-driven spring reverb on both channels. The head leaves it out and has a different set of tubes, so a head schematic is no reference for the combo, or the other way round.",
    "attributes": [
      [
        "Format",
        "Reverb on both combo channels"
      ],
      [
        "Driver",
        "Transformer-coupled 12AT7 in combo drawing"
      ]
    ],
    "listen": "When you’re comparing drive sounds, check where Reverb is set. It can stay in the sound when you switch channels.",
    "together": "Fender’s manual treats the combo and the head as separate things. The combo drawing shows a transformer-coupled 12AT7 driver, a recovery stage and the return control. The head drawing has none of that.",
    "extraTitle": "Where this comes from",
    "extra": "The owner’s manual and the later Rev E combo drawing.",
    "detail": "The marker is on the Reverb knob. The tank, its spring count and the part values in a 1996 amp haven’t been checked.",
    "sources": [
      [
        "https://www.fmicassets.com/Damroot/Original/10001/OM_leg_gtramp_Prosonic.pdf",
        "Fender Prosonic · owner manual"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Prosonic-Schematic.pdf",
        "Fender combo D049951 Rev E · topology reference, revised 1997"
      ]
    ]
  },
  {
    "id": "modes",
    "label": "Rectifier and bias selector",
    "side": "rear",
    "menuOnly": false,
    "title": "The rear switch changes rectifier and bias together.",
    "body": "The switch on the back changes how the amp is rectified and how the output tubes are biased. Two of the three positions use the tube rectifier, one with cathode bias and one with grid bias. So those two already differ before you get to solid-state.",
    "attributes": [
      [
        "Factory mode labels",
        "A / tube · AB / tube · AB / solid-state"
      ],
      [
        "Rated modes",
        "30 / 50 / 60 W"
      ]
    ],
    "listen": "Compare the two tube-rectifier positions first, so you don’t credit the rectifier for a change that’s partly bias. Then compare the two AB positions at about the same volume.",
    "together": "Fender labels the positions Class A with tube rectifier, AB with tube rectifier and AB with solid-state, rated 30, 50 and 60 watts. You get those three combinations and no others.",
    "extraTitle": "Where this comes from",
    "extra": "The three modes are from the owner’s manual. The combo drawing shows the multi-section switch.",
    "detail": "Class A and AB are Fender’s names for the modes. We haven’t measured operating class, output or sag. Switch labels and spacing in the model are estimates.",
    "sources": [
      [
        "https://www.fmicassets.com/Damroot/Original/10001/OM_leg_gtramp_Prosonic.pdf",
        "Fender Prosonic · owner manual"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Prosonic-Schematic.pdf",
        "Fender combo D049951 Rev E · topology reference, revised 1997"
      ],
      [
        "https://manuals.plus/m/92f37ff5c6fa47e902cc1d28a9d5dda7af888d82718621e282e7891828fc89b9",
        "Fender August 1996 service-manual transcription · mode ratings"
      ]
    ]
  },
  {
    "id": "loop",
    "label": "Series effects-loop return",
    "side": "rear",
    "menuOnly": false,
    "title": "Leave a plug in Return and the amp can go silent.",
    "body": "Fender says plugging into Return disconnects the preamp from the power amp. So a cable left in that jack with nothing on the other end can give you a dead amp with nothing wrong with the tubes.",
    "attributes": [
      [
        "Loop",
        "Series connection through switching Return"
      ],
      [
        "Send",
        "Also usable as a line-level output per manual"
      ]
    ],
    "listen": "A pedal in front and the same pedal in the loop see different signal levels and sit at different points in the gain path. Don’t expect them to behave the same.",
    "together": "With no plug in Return, a contact on the jack completes the connection inside the amp. The combo drawing shows a tube stage feeding Send. The manual says Send can also be used as a line-level output.",
    "extraTitle": "Where this comes from",
    "extra": "The owner’s manual and the later combo drawing.",
    "detail": "The marker is on the Return jack, not the Send next to it. Loop levels weren’t measured, so there’s no promise every pedal will suit it.",
    "sources": [
      [
        "https://www.fmicassets.com/Damroot/Original/10001/OM_leg_gtramp_Prosonic.pdf",
        "Fender Prosonic · owner manual"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Prosonic-Schematic.pdf",
        "Fender combo D049951 Rev E · topology reference, revised 1997"
      ]
    ]
  },
  {
    "id": "load",
    "label": "Combo extension jack & tap change",
    "side": "rear",
    "menuOnly": false,
    "title": "Plug in an extension cab and the amp switches taps.",
    "body": "The combo’s two 8-ohm tens are wired in series for 16 ohms. Plugging into the extension jack switches the amp to its 8-ohm output tap. The head has a manual 4/8/16 selector. The combo doesn’t.",
    "attributes": [
      [
        "Internal speakers",
        "Two nominal 8 Ω drivers in series → 16 Ω"
      ],
      [
        "Combo extension jack",
        "Selects 8 Ω amplifier tap"
      ]
    ],
    "listen": "When you compare setups, note which cabinets were connected and which tap was in use. Having the jack doesn’t mean any load is fine.",
    "together": "The matching works out when the extension cab is also 16 ohms: two 16-ohm loads in parallel make 8. A speaker’s real impedance still moves around with frequency.",
    "extraTitle": "Where this comes from",
    "extra": "The owner’s manual and the later combo drawing agree on the switched tap.",
    "detail": "The marker is on the extension jack. Speaker originality and measured impedance aren’t established.",
    "sources": [
      [
        "https://www.fmicassets.com/Damroot/Original/10001/OM_leg_gtramp_Prosonic.pdf",
        "Fender Prosonic · owner manual"
      ],
      [
        "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Prosonic-Schematic.pdf",
        "Fender combo D049951 Rev E · topology reference, revised 1997"
      ]
    ]
  }
];

export const ACTIVE_EXPLORATIONS={
 "tremolux-5e9":{name:"Tremolux",parts:TREMOLUX_FEATURES},
 "super-six-reverb-1972":{name:"Super Six Reverb",parts:SUPER_SIX_FEATURES},
 "blues-junior-1995":{name:"Blues Junior",parts:JUNIOR_FEATURES},
 "prosonic-1996":{name:"Prosonic",parts:PROSONIC_FEATURES}
};
