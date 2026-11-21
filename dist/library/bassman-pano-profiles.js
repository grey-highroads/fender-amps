// Owner-authorized selected configurations; coordinates in mm, detailed geometry estimated.
export const BP_SOURCES={
 "bassmanTweedDrawing": {
  "title": "Fender Bassman 5F6-A drawing I-EG",
  "url": "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-5F6A-Schematic.pdf",
  "kind": "Period Fender schematic and layout, hosted scan",
  "note": "Both pages re-read November 21: 12AY7 input, two 12AX7 on layout, two 5881, GZ34; six knobs, four parallel speaker jacks. Schematic inverter label appears 12AY7, conflicting with layout 12AX7; model follows layout and records Q29."
 },
 "bassmanTweedSize": {
  "title": "Narrow-panel Bassman field guide",
  "url": "https://mojotone.com/blogs/fender-field-guide/fender-narrow-panel-tweed-bassman",
  "kind": "Secondary format and dimensional reference",
  "note": "23 W × 22½ H × 10½ D inch working envelope; specimen widths vary 22½–23¾. Four ten-inch alnico format; no universal dated speaker originality claim."
 },
 "bassmanTweedPhoto": {
  "title": "1959 Bassman BM01454 photographs",
  "url": "https://reverb.com/item/101373465-fender-5f6-a-bassman-2-channel-40-watt-4x10-guitar-combo-amp-w-road-case-1959",
  "kind": "Dealer-attributed selected-year specimen",
  "note": "Front and top panel inspected at 800 px November 21. Replaced rear boards and fitted 5R4 are not copied as factory equipment. Top panel order and rectangular Bassman nameplate used; exact geometry estimated."
 },
 "bassmanBlackDrawing": {
  "title": "Fender Bassman AB165 drawing D-FE",
  "url": "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Bassman-AB165-Schematic.pdf",
  "kind": "Period Fender schematic and layout, hosted scan",
  "note": "Both pages re-read November 21: three 7025, 12AT7, two 6L6GC; six diodes; balance pot; Bass Deep and Normal Bright; feedback to shared gain stage and output-tube plate feedback."
 },
 "bassmanBlackSize": {
  "title": "Black-panel Bassman field guide",
  "url": "https://mojotone.com/blogs/fender-field-guide/fender-blackface-bassman",
  "kind": "Secondary dimensions and cabinet format",
  "note": "Head 22¼ W × 8 H × 9 D inches; horizontal 2x12 cabinet 32 W × 21 H × 11½ D. Reader correction 20 H / 11 D remains unresolved Q22. Speaker supplier varies; generic ceramic twelves used."
 },
 "bassmanBlackPhoto": {
  "title": "August 1965 Bassman AB165 head",
  "url": "https://reverb.com/item/94505028-fender-bassman-ab165-1965-vintage-tube-guitar-amp-head-rare-serviced",
  "kind": "Dealer-attributed specimen photograph",
  "note": "Front inspected at 800 px November 21: tailed badge, six skirted knobs, Deep/Bright switches. Serviced electrolytics and cord; no cabinet measurement or factory speaker proof."
 },
 "panoManual": {
  "title": "Fender Pano Verb owner manual PR 6273",
  "url": "https://www.fmicassets.com/Damroot/Original/10063/OM_8151900000_Pano-Verb-Amp_USplus5.pdf",
  "kind": "Fender manufacturer manual",
  "note": "English pages 1–2 visually read November 21: OUT1 50 W / 4 Ω C15N fifteen; OUT2 20 W / 8 Ω P10R ten; 11 pots, 2 slide switches; six 12AX7, one 12AT7, two 6L6, two 6V6. Exact tube positions not specified."
 },
 "panoFactory": {
  "title": "Fender Pano Verb factory product gallery",
  "url": "https://uk.fender.com/products/jack-white-pano-verb",
  "kind": "Manufacturer product photographs",
  "note": "Rear photograph inspected full size November 21. Rear-reading: ten upper left, fifteen lower right; substantial upper board and lower board. Front-reading positions mirrored. Yellow flat script badge, radio knobs and piping. Photo not redistributed."
 }
};
export const BP_PANELS={
 "faceplate-bassman-tweed": {
  "batch": true,
  "width": 500,
  "height": 51,
  "top": true,
  "ink": "#eee2c7",
  "background": "#898c83",
  "title": "",
  "knob": "knob-chicken",
  "knobs": [
   175,
   215,
   255,
   295,
   335,
   375
  ],
  "labels": [
   "PRESENCE",
   "MIDDLE",
   "BASS",
   "TREBLE",
   "VOL BRIGHT",
   "VOL NORMAL"
  ],
  "jacks": [
   [
    433,
    10
   ],
   [
    433,
    -10
   ],
   [
    470,
    10
   ],
   [
    470,
    -10
   ]
  ],
  "pilot": 125,
  "fuse": 42,
  "toggles": [
   [
    15,
    0,
    "GROUND"
   ],
   [
    69,
    0,
    "POWER"
   ],
   [
    96,
    0,
    "STANDBY"
   ]
  ],
  "channels": [
   [
    434,
    "BRIGHT"
   ],
   [
    470,
    "NORMAL"
   ]
  ],
  "numbers": 10
 },
 "faceplate-bassman-black": {
  "batch": true,
  "width": 518,
  "height": 51,
  "black": true,
  "ink": "#eee8da",
  "background": "#131716",
  "title": "BASSMAN-AMP",
  "titleX": 437,
  "titleWidth": 91,
  "knob": "knob-skirted",
  "knobs": [
   82,
   122,
   162,
   282,
   322,
   362
  ],
  "labels": [
   "VOLUME",
   "TREBLE",
   "BASS",
   "VOLUME",
   "TREBLE",
   "BASS"
  ],
  "jacks": [
   [
    14,
    0
   ],
   [
    36,
    0
   ],
   [
    214,
    0
   ],
   [
    236,
    0
   ]
  ],
  "pilot": 498,
  "toggles": [
   [
    57,
    10,
    "DEEP"
   ],
   [
    257,
    10,
    "BRIGHT"
   ]
  ],
  "channels": [
   [
    25,
    "BASS"
   ],
   [
    225,
    "NORMAL"
   ]
  ],
  "numbers": false
 },
 "faceplate-pano": {
  "batch": true,
  "width": 625,
  "height": 51,
  "black": true,
  "ink": "#e9bd12",
  "background": "#151818",
  "title": "PANO VERB-AMP",
  "titleX": 553,
  "titleWidth": 92,
  "knob": "knob-radio-metal",
  "knobs": [
   51,
   88,
   125,
   162,
   199,
   245,
   282,
   319,
   356,
   433,
   470
  ],
  "labels": [
   "DRIVE",
   "VOLUME",
   "TREBLE",
   "MIDDLE",
   "BASS",
   "MIX",
   "DWELL",
   "TREBLE",
   "BASS",
   "INTENSITY",
   "SPEED"
  ],
  "jacks": [
   [
    16,
    0
   ]
  ],
  "pilot": 607,
  "pilotColor": "#d2ac16",
  "slides": [
   [
    392,
    0,
    "SPLIT",
    "FULL"
   ],
   [
    506,
    0,
    "MONO",
    "STEREO"
   ]
  ],
  "channels": [],
  "numbers": 10,
  "border": "#e9bd12"
 }
};
export const BP_SPEAKERS=[
 {
  "id": "speaker-bassman-ten-study",
  "name": "Tweed Bassman alnico ten study",
  "category": "Speakers",
  "brand": "Study",
  "model": "Tweed Bassman alnico ten study",
  "nominalDiameterIn": 10,
  "impedanceOhm": 8,
  "powerW": null,
  "magnet": "Alnico",
  "dimensions": {
   "outsideDiameterMm": null,
   "depthMm": null,
   "mountingCircleMm": null
  },
  "dimensionBasis": "Nominal format supported; detailed frame, motor, mounting and label geometry estimated.",
  "build": {
   "frameDiameter": 254,
   "depth": 128,
   "magnetDiameter": 78,
   "spokes": 6
  },
  "colors": {
   "basket": "#6d726c",
   "magnet": "#3a403b",
   "label": "#c2ae70",
   "cone": "#252825"
  },
  "status": "Construction study; detailed dimensions estimated",
  "notes": "Format and nominal load follow the cited source. Generic geometry and label; no original specimen, recone, measured tone or undocumented vintage power rating implied.",
  "sources": [
   "bassmanTweedSize"
  ],
  "usedBy": []
 },
 {
  "id": "speaker-bassman-twelve-study",
  "name": "Bassman ceramic twelve study",
  "category": "Speakers",
  "brand": "Study",
  "model": "Bassman ceramic twelve study",
  "nominalDiameterIn": 12,
  "impedanceOhm": 8,
  "powerW": null,
  "magnet": "Ceramic",
  "dimensions": {
   "outsideDiameterMm": null,
   "depthMm": null,
   "mountingCircleMm": null
  },
  "dimensionBasis": "Nominal format supported; detailed frame, motor, mounting and label geometry estimated.",
  "build": {
   "frameDiameter": 307,
   "depth": 117,
   "magnetDiameter": 120,
   "spokes": 6
  },
  "colors": {
   "basket": "#6d726c",
   "magnet": "#3a403b",
   "label": "#c2ae70",
   "cone": "#252825"
  },
  "status": "Construction study; detailed dimensions estimated",
  "notes": "Format and nominal load follow the cited source. Generic geometry and label; no original specimen, recone, measured tone or undocumented vintage power rating implied.",
  "sources": [
   "bassmanBlackSize"
  ],
  "usedBy": []
 },
 {
  "id": "speaker-pano-c15n-study",
  "name": "Pano C15N-format fifteen study",
  "category": "Speakers",
  "brand": "Study",
  "model": "Pano C15N-format fifteen study",
  "nominalDiameterIn": 15,
  "impedanceOhm": 4,
  "powerW": null,
  "magnet": "Ceramic",
  "dimensions": {
   "outsideDiameterMm": null,
   "depthMm": null,
   "mountingCircleMm": null
  },
  "dimensionBasis": "Nominal format supported; detailed frame, motor, mounting and label geometry estimated.",
  "build": {
   "frameDiameter": 384,
   "depth": 143,
   "magnetDiameter": 170,
   "spokes": 4
  },
  "colors": {
   "basket": "#225b59",
   "magnet": "#3a403b",
   "label": "#c2ae70",
   "cone": "#252825"
  },
  "status": "Construction study; detailed dimensions estimated",
  "notes": "Format and nominal load follow the cited source. Generic geometry and label; no original specimen, recone, measured tone or undocumented vintage power rating implied.",
  "sources": [
   "panoManual"
  ],
  "usedBy": []
 },
 {
  "id": "speaker-pano-p10r-study",
  "name": "Pano P10R-format ten study",
  "category": "Speakers",
  "brand": "Study",
  "model": "Pano P10R-format ten study",
  "nominalDiameterIn": 10,
  "impedanceOhm": 8,
  "powerW": null,
  "magnet": "Alnico",
  "dimensions": {
   "outsideDiameterMm": null,
   "depthMm": null,
   "mountingCircleMm": null
  },
  "dimensionBasis": "Nominal format supported; detailed frame, motor, mounting and label geometry estimated.",
  "build": {
   "frameDiameter": 254,
   "depth": 128,
   "magnetDiameter": 78,
   "spokes": 6
  },
  "colors": {
   "basket": "#225b59",
   "magnet": "#3a403b",
   "label": "#c2ae70",
   "cone": "#252825"
  },
  "status": "Construction study; detailed dimensions estimated",
  "notes": "Format and nominal load follow the cited source. Generic geometry and label; no original specimen, recone, measured tone or undocumented vintage power rating implied.",
  "sources": [
   "panoManual"
  ],
  "usedBy": []
 }
];
export const BP_PARTS=[
 {
  "id": "faceplate-bassman-tweed",
  "name": "Tweed Bassman top panel",
  "kind": "faceplate",
  "category": "Identification",
  "dimensions": {
   "widthMm": 500,
   "heightMm": 51
  },
  "status": "Original vector layout study",
  "notes": "Control order supported by drawing/manual; spacing and block lettering estimated. No reference-photo pixels.",
  "sources": [
   "bassmanTweedDrawing"
  ],
  "usedBy": []
 },
 {
  "id": "faceplate-bassman-black",
  "name": "BASSMAN-AMP",
  "kind": "faceplate",
  "category": "Identification",
  "dimensions": {
   "widthMm": 518,
   "heightMm": 51
  },
  "status": "Original vector layout study",
  "notes": "Control order supported by drawing/manual; spacing and block lettering estimated. No reference-photo pixels.",
  "sources": [
   "bassmanBlackDrawing"
  ],
  "usedBy": []
 },
 {
  "id": "faceplate-pano",
  "name": "PANO VERB-AMP",
  "kind": "faceplate",
  "category": "Identification",
  "dimensions": {
   "widthMm": 625,
   "heightMm": 51
  },
  "status": "Original vector layout study",
  "notes": "Control order supported by drawing/manual; spacing and block lettering estimated. No reference-photo pixels.",
  "sources": [
   "panoManual"
  ],
  "usedBy": []
 },
 {
  "id": "knob-radio-metal",
  "name": "Brushed-metal radio knob study",
  "kind": "knob",
  "category": "Hardware",
  "dimensions": {
   "diameterMm": 20,
   "heightMm": 15
  },
  "status": "Educational construction study",
  "notes": "Round metal radio knob with pointer, shallow dish and fine ribs; dimensions estimated.",
  "sources": [
   "panoManual"
  ],
  "usedBy": []
 },
 {
  "id": "jewel-yellow",
  "name": "Yellow pilot jewel study",
  "kind": "jewel",
  "category": "Hardware",
  "dimensions": {
   "bezelDiameterMm": 17,
   "depthMm": 10
  },
  "status": "Educational construction study",
  "notes": "Yellow lens uses existing shared faceted jewel geometry.",
  "sources": [
   "panoManual"
  ],
  "usedBy": []
 },
 {
  "id": "badge-pano-yellow",
  "name": "Flat yellow Fender badge study",
  "kind": "badge",
  "category": "Identification",
  "dimensions": {
   "widthMm": 108,
   "heightMm": 44
  },
  "status": "Educational construction study",
  "notes": "Existing flat silhouette recolored yellow, not exact period tracing.",
  "sources": [
   "panoManual"
  ],
  "usedBy": []
 },
 {
  "id": "badge-bassman-tweed",
  "name": "Tweed Bassman rectangular nameplate",
  "kind": "badge",
  "category": "Identification",
  "dimensions": {
   "widthMm": 112,
   "heightMm": 22
  },
  "status": "Educational construction study",
  "notes": "Approximate rectangular Fender Bassman tag, estimated lettering and dimensions.",
  "sources": [
   "bassmanTweedPhoto"
  ],
  "usedBy": []
 }
];
export const BP_ASSEMBLIES=[
 {
  "study": "combo-batch-v1",
  "handle": "handle-leather",
  "jewel": "jewel-red",
  "knob": "knob-chicken",
  "badge": "badge-bassman-tweed",
  "cover": "tweed-lacquered",
  "cloth": "cloth-brown-gold",
  "reverb": false,
  "topRail": 28,
  "bottomRail": 20,
  "rearUpper": 145,
  "rearLower": 115,
  "id": "bassman-5f6a",
  "name": "Tweed Bassman",
  "year": 1957,
  "example": "1959-style / 5F6-A construction",
  "finish": "tweed",
  "dimensionsMm": [
   584.2,
   571.5,
   266.7
  ],
  "dimensionsStatus": "Working 23 W × 22½ H × 10½ D inch secondary/specimen envelope. Width reports vary 22½–23¾; hardware and interior coordinates estimated",
  "sources": [
   "bassmanTweedDrawing",
   "bassmanTweedSize",
   "bassmanTweedPhoto"
  ],
  "speaker": "speaker-bassman-ten-study",
  "speakerCount": 4,
  "speakerPositions": [
   [
    -132,
    129
   ],
   [
    132,
    129
   ],
   [
    -132,
    -130
   ],
   [
    132,
    -130
   ]
  ],
  "loadOhm": 2,
  "wiringTopology": "parallel",
  "wiring": "Four nominal 8 Ω tens, each on a separate parallel chassis jack: 2 Ω",
  "watts": 45,
  "speakers": "4 × 10″",
  "width": 1.15,
  "height": 1.343,
  "circuit": "5F6-A",
  "knobCount": 6,
  "panel": "faceplate-bassman-tweed",
  "tubeTypes": [
   "GZ34",
   "5881",
   "5881",
   "12AX7",
   "12AX7",
   "12AY7"
  ],
  "rectifierBasis": "GZ34 from I-EG; layout specifies 12AX7 inverter while schematic label appears 12AY7 (Q29)",
  "topPanel": true,
  "tweedPanel": true,
  "vintage": true
 },
 {
  "study": "combo-batch-v1",
  "handle": "handle-black",
  "jewel": "jewel-red",
  "knob": "knob-skirted",
  "badge": "badge-script",
  "cover": "tolex-black",
  "cloth": "cloth-black-silver",
  "reverb": false,
  "topRail": 76,
  "bottomRail": 24,
  "rearUpper": 102,
  "rearLower": 22,
  "id": "bassman-blackface-ab165-1965",
  "name": "Bassman",
  "year": 1964,
  "example": "1965-style / AB165 horizontal 2x12 piggyback",
  "finish": "black",
  "headDimensionsMm": [
   565.15,
   203.2,
   228.6
  ],
  "cabinetDimensionsMm": [
   812.8,
   533.4,
   292.1
  ],
  "headGapMm": 12,
  "dimensionsMm": [
   812.8,
   748.6,
   292.1
  ],
  "dimensionsStatus": "Secondary head 22¼ W × 8 H × 9 D; cabinet 32 W × 21 H × 11½ D inches. Reader correction 20 H / 11 D unresolved Q22; 12 mm head gap estimated",
  "sources": [
   "bassmanBlackDrawing",
   "bassmanBlackSize",
   "bassmanBlackPhoto"
  ],
  "speaker": "speaker-bassman-twelve-study",
  "speakerCount": 2,
  "speakerPositions": [
   [
    -178,
    0
   ],
   [
    178,
    0
   ]
  ],
  "loadOhm": 4,
  "wiringTopology": "parallel",
  "wiring": "Two nominal 8 Ω twelves in parallel inside the closed cabinet: 4 Ω",
  "watts": 50,
  "speakers": "2 × 12″",
  "width": 1.6,
  "height": 1.76,
  "circuit": "AB165",
  "knobCount": 6,
  "panel": "faceplate-bassman-black",
  "tubeTypes": [
   "6L6GC",
   "6L6GC",
   "12AT7",
   "7025",
   "7025",
   "7025"
  ],
  "rectifierBasis": "Six silicon diodes; no rectifier tube. AB165 balance network differs from AA864 bias adjustment",
  "piggyback": true,
  "toneRing": false,
  "vintage": true,
  "legLength": 406.4
 },
 {
  "study": "combo-batch-v1",
  "handle": "handle-black",
  "jewel": "jewel-yellow",
  "knob": "knob-radio-metal",
  "badge": "badge-pano-yellow",
  "cover": "tolex-black",
  "cloth": "cloth-black-silver",
  "reverb": true,
  "topRail": 76,
  "bottomRail": 24,
  "rearUpper": 165,
  "rearLower": 84,
  "id": "pano-verb-2024",
  "name": "Pano Verb",
  "year": 2024,
  "example": "2024 / PR 6273 dual-output construction",
  "finish": "black",
  "dimensionsMm": [
   675.64,
   683.26,
   271.78
  ],
  "dimensionsStatus": "Fender owner manual PR 6273: 26.6 W × 26.9 H × 10.7 D inches; handle/feet convention unspecified. Interior positions estimated from factory rear photo",
  "sources": [
   "panoManual",
   "panoFactory"
  ],
  "speaker": "speaker-pano-c15n-study",
  "speakerIds": [
   "speaker-pano-c15n-study",
   "speaker-pano-p10r-study"
  ],
  "speakerCount": 2,
  "speakerPositions": [
   [
    -115,
    -48
   ],
   [
    151,
    137
   ]
  ],
  "loadOhm": null,
  "outputLoadsOhm": [
   4,
   8
  ],
  "wiringTopology": "independent-outputs",
  "wiring": "Independent outputs: OUT1 50 W / 4 Ω to C15N fifteen; OUT2 20 W / 8 Ω to P10R ten. No combined speaker load",
  "watts": 70,
  "speakers": "15″ + 10″",
  "width": 1.33,
  "height": 1.606,
  "circuit": "PR 6273 / dual output",
  "knobCount": 11,
  "panel": "faceplate-pano",
  "tubeTypes": [
   "6L6",
   "6L6",
   "6V6",
   "6V6",
   "12AX7",
   "12AX7",
   "12AX7",
   "12AX7",
   "12AX7",
   "12AX7",
   "12AT7"
  ],
  "rectifierBasis": "Owner manual lists eleven audio/effects tubes and no rectifier bottle; internal rectifier implementation not established by a schematic",
  "legLength": 482.6,
  "vintage": true
 }
];
