// Selected-year configurations. Dimensions and hardware coordinates are millimetres.
export const VINTAGE_SOURCES={
 "superDrawing": {
  "title": "Fender Super Reverb AB763 schematic C-FD",
  "url": "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Super-Reverb-AB763-Schematic.pdf",
  "kind": "Period Fender drawing, hosted scan",
  "note": "Rechecked research: nine tubes, four parallel speakers, 120 pF bright switches, Vibrato-only Middle. Interior positions remain estimates."
 },
 "superEnvelope": {
  "title": "Super Reverb field guide",
  "url": "https://mojotone.com/blogs/fender-field-guide/fender-blackface-super-reverb?page=3",
  "kind": "Secondary dimensional reference",
  "note": "24½ H × 25⅛ W × 10½ D inches; 19-inch legs. No measured vintage specimen; manufacturer of fitted tens varies."
 },
 "vibrasonicDrawing": {
  "title": "Fender Vibrasonic 5G13 schematic and layout A-FJ",
  "url": "https://www.thetubestore.com/lib/thetubestore/schematics/Fender/Fender-Vibrasonic-5G13-Schematic.pdf",
  "kind": "Period Fender drawings, hosted scan",
  "note": "Full-size November 21 reading: five 7025, two 6L6GC, six rectifier diodes; nine pots; no extension speaker jack. Front hardware order reverses the underside layout view."
 },
 "vibrasonicEnvelope": {
  "title": "Vibrasonic field guide",
  "url": "https://mojotone.com/blogs/fender-field-guide/fender-brownface-vibrasonic",
  "kind": "Secondary dimensional reference",
  "note": "Selected early 5G13: 25 W × 20 H × 10¼ D inches. Later Fender catalog says 26 W and eight tubes; not substituted for early circuit."
 },
 "vibrasonicPhoto": {
  "title": "Seller-dated 1960 Vibrasonic",
  "url": "https://reverb.com/item/85283168-1960-fender-vibrasonic-5g13-demo-video",
  "kind": "Selected-year specimen photograph",
  "note": "Front inspected full size November 21: pink-brown covering, dark striped cloth, brown knobs, flat badge. Cord and capacitors replaced; not authority for stock speaker."
 },
 "showmanDrawing": {
  "title": "Fender Showman 6G14-A schematic and layout K-FJ",
  "url": "https://el34world.com/charts/Schematics/files/fender/Fender_SHOWMAN_6G14A.pdf",
  "kind": "Period Fender drawings, hosted scan",
  "note": "Both pages read November 21: four 5881, four 7025, two 12AX7, six silicon diodes, nine pots and extension speaker jack. Hardware locations estimated from drawing order."
 },
 "blondeCatalog": {
  "title": "Fender 1962–63 catalog, professional amplifiers",
  "url": "https://guitar-compare.com/wp-content/uploads/2019/08/Fender-1962-1963-Catalog.pdf",
  "kind": "Period Fender catalog, later than selected 1960/61 years",
  "note": "PDF page 4: Showman 15 cabinet 36 W × 24½ H × 11½ D; head 26 W × 8 H × 11½ D, conflicts with field guide 9 D. Speaker described as 15-inch Lansing without suffix; Vibrasonic D-130. Later configurations do not establish all 1960/61 fitment."
 },
 "showmanEnvelope": {
  "title": "Blonde Showman field guide",
  "url": "https://mojotone.com/blogs/fender-field-guide/fender-blonde-showman?page=2",
  "kind": "Secondary dimensional reference",
  "note": "26 W × 8 H × 9 D head used as selected-year estimate. Later period catalog head depth 11½ conflicts. 36 W × 24½ H × 11½ D fifteen cabinet agrees."
 },
 "showmanPhoto": {
  "title": "Seller-dated 1961 Showman 6G14-A",
  "url": "https://reverb.com/item/84210985-1961-fender-showman-6g14-a",
  "kind": "Specimen cosmetics; twelve-inch cabinet",
  "note": "Full-size November 21 front: ivory barrel knobs, blonde/oxblood and flat script badge. K120 speaker, cabinet handle and head lugs replaced. Twelve cabinet not used for fifteen geometry."
 },
 "showman15Photo": {
  "title": "1961 Showman 15 serial 00529",
  "url": "https://gbase.com/gear/fender-showman-head-and-15-tone-ring-cabinet-1961",
  "kind": "Dealer-attributed specimen",
  "note": "Supports overall fifteen format; installed 1970s D140F is a replacement. Claimed original D130 is not independently authenticated; no stock D140F assigned."
 }
};
export const VINTAGE_PANELS={
 "faceplate-super-reverb": {
  "batch": true,
  "width": 589,
  "height": 51,
  "black": true,
  "ink": "#eee8da",
  "background": "#131716",
  "title": "SUPER REVERB-AMP",
  "titleX": 523,
  "titleWidth": 80,
  "knob": "knob-skirted",
  "knobs": [
   70,
   107,
   144,
   253,
   290,
   327,
   364,
   401,
   438,
   475
  ],
  "labels": [
   "VOLUME",
   "TREBLE",
   "BASS",
   "VOLUME",
   "TREBLE",
   "MIDDLE",
   "BASS",
   "REVERB",
   "SPEED",
   "INTENSITY"
  ],
  "jacks": [
   [
    13,
    0
   ],
   [
    35,
    0
   ],
   [
    195,
    0
   ],
   [
    217,
    0
   ]
  ],
  "pilot": 570,
  "toggles": [
   [
    51,
    10,
    "BRIGHT"
   ],
   [
    233,
    10,
    "BRIGHT"
   ]
  ],
  "channels": [
   [
    25,
    "NORMAL"
   ],
   [
    205,
    "VIBRATO"
   ]
  ],
  "numbers": false
 },
 "faceplate-vibrasonic": {
  "batch": true,
  "width": 585,
  "height": 48,
  "ink": "#eee2c7",
  "background": "#50362a",
  "title": "VIBRASONIC-AMP",
  "titleX": 503,
  "titleWidth": 87,
  "knob": "knob-brown",
  "knobs": [
   74,
   110,
   146,
   248,
   284,
   320,
   356,
   392,
   438
  ],
  "labels": [
   "BASS",
   "TREBLE",
   "VOLUME",
   "BASS",
   "TREBLE",
   "VOLUME",
   "SPEED",
   "INTENSITY",
   "PRESENCE"
  ],
  "jacks": [
   [
    17,
    0
   ],
   [
    39,
    0
   ],
   [
    191,
    0
   ],
   [
    213,
    0
   ]
  ],
  "pilot": 565,
  "channels": [
   [
    28,
    "NORMAL"
   ],
   [
    202,
    "VIBRATO"
   ]
  ],
  "numbers": 10
 },
 "faceplate-showman": {
  "batch": true,
  "width": 610,
  "height": 48,
  "ink": "#eee2c7",
  "background": "#493128",
  "title": "SHOWMAN-AMP",
  "titleX": 522,
  "titleWidth": 90,
  "knob": "knob-ivory",
  "knobs": [
   75,
   113,
   151,
   257,
   295,
   333,
   371,
   409,
   451
  ],
  "labels": [
   "VOLUME",
   "TREBLE",
   "BASS",
   "VOLUME",
   "TREBLE",
   "BASS",
   "SPEED",
   "INTENSITY",
   "PRESENCE"
  ],
  "jacks": [
   [
    17,
    0
   ],
   [
    39,
    0
   ],
   [
    198,
    0
   ],
   [
    220,
    0
   ]
  ],
  "pilot": 589,
  "channels": [
   [
    28,
    "NORMAL"
   ],
   [
    209,
    "VIBRATO"
   ]
  ],
  "numbers": 10
 }
};
export const VINTAGE_SPEAKERS=[
 {
  "id": "speaker-super-ten-study",
  "name": "Super Reverb ceramic ten study",
  "category": "Speakers",
  "brand": "Study",
  "model": "Super Reverb ceramic ten study",
  "nominalDiameterIn": 10,
  "impedanceOhm": 8,
  "powerW": null,
  "magnet": "Ceramic",
  "dimensions": {
   "outsideDiameterMm": null,
   "depthMm": null,
   "mountingCircleMm": null
  },
  "dimensionBasis": "Nominal diameter only; basket, motor, dome and mounting dimensions are modeling estimates.",
  "build": {
   "frameDiameter": 254,
   "depth": 110,
   "magnetDiameter": 95,
   "spokes": 6
  },
  "colors": {
   "basket": "#8d918a",
   "magnet": "#565953",
   "label": "#656963",
   "cone": "#282a27"
  },
  "status": "Educational construction study",
  "notes": "No factory originality, recone or vintage power rating authenticated. Fifteen uses a cast-basket/aluminum-dome format without an asserted D130F/D140F identity.",
  "sources": [
   "superEnvelope"
  ],
  "usedBy": []
 },
 {
  "id": "speaker-lansing-fifteen-study",
  "name": "Lansing-format fifteen study",
  "category": "Speakers",
  "brand": "Study",
  "model": "Lansing-format fifteen study",
  "nominalDiameterIn": 15,
  "impedanceOhm": 8,
  "powerW": null,
  "magnet": "Alnico",
  "dimensions": {
   "outsideDiameterMm": null,
   "depthMm": null,
   "mountingCircleMm": null
  },
  "dimensionBasis": "Nominal diameter only; basket, motor, dome and mounting dimensions are modeling estimates.",
  "build": {
   "frameDiameter": 384,
   "depth": 143,
   "magnetDiameter": 145,
   "spokes": 4,
   "castBasket": true,
   "aluminumDome": true
  },
  "colors": {
   "basket": "#8d918a",
   "magnet": "#565953",
   "label": "#656963",
   "cone": "#282a27"
  },
  "status": "Educational construction study",
  "notes": "No factory originality, recone or vintage power rating authenticated. Fifteen uses a cast-basket/aluminum-dome format without an asserted D130F/D140F identity.",
  "sources": [
   "vibrasonicEnvelope",
   "blondeCatalog"
  ],
  "usedBy": []
 }
];
export const VINTAGE_PARTS=[
 {
  "id": "faceplate-super-reverb",
  "name": "SUPER REVERB-AMP panel",
  "kind": "faceplate",
  "category": "Identification",
  "dimensions": {
   "widthMm": 589,
   "heightMm": 51
  },
  "status": "Original vector layout study",
  "notes": "Control order supported by circuit layout; spacing and block letterforms estimated, not a vintage tracing.",
  "sources": [
   "superDrawing"
  ],
  "usedBy": []
 },
 {
  "id": "faceplate-vibrasonic",
  "name": "VIBRASONIC-AMP panel",
  "kind": "faceplate",
  "category": "Identification",
  "dimensions": {
   "widthMm": 585,
   "heightMm": 48
  },
  "status": "Original vector layout study",
  "notes": "Control order supported by circuit layout; spacing and block letterforms estimated, not a vintage tracing.",
  "sources": [
   "vibrasonicDrawing"
  ],
  "usedBy": []
 },
 {
  "id": "faceplate-showman",
  "name": "SHOWMAN-AMP panel",
  "kind": "faceplate",
  "category": "Identification",
  "dimensions": {
   "widthMm": 610,
   "heightMm": 48
  },
  "status": "Original vector layout study",
  "notes": "Control order supported by circuit layout; spacing and block letterforms estimated, not a vintage tracing.",
  "sources": [
   "showmanDrawing"
  ],
  "usedBy": []
 },
 {
  "id": "knob-ivory",
  "name": "Ivory barrel knob study",
  "kind": "knob",
  "category": "Hardware",
  "dimensions": {
   "diameterMm": 19,
   "heightMm": 15
  },
  "status": "Photographic format / estimated dimensions",
  "notes": "Light barrel knob and dark pointer from 1961 front photograph. Shared brown-knob envelope; no photoreal acceptance.",
  "sources": [
   "showmanPhoto"
  ],
  "usedBy": [
   "showman-blonde-1961"
  ]
 },
 {
  "id": "badge-flat-script",
  "name": "Flat Fender script badge study",
  "kind": "badge",
  "category": "Identification",
  "dimensions": {
   "widthMm": 108,
   "heightMm": 44
  },
  "status": "Approximate flat silhouette",
  "notes": "Existing original vector silhouette on a flat plate; no raised tail molding assigned to blonde/brown amps.",
  "sources": [
   "showmanPhoto",
   "vibrasonicPhoto"
  ],
  "usedBy": [
   "showman-blonde-1961",
   "vibrasonic-5g13-1960"
  ]
 }
];
export const VINTAGE_ASSEMBLIES=[
 {
  "study": "combo-batch-v1",
  "handle": "handle-black",
  "jewel": "jewel-red",
  "badge": "badge-script",
  "speakerCount": 4,
  "speakerPositions": [
   [
    -139,
    107
   ],
   [
    139,
    107
   ],
   [
    -139,
    -152
   ],
   [
    139,
    -152
   ]
  ],
  "loadOhm": 2,
  "topRail": 76,
  "bottomRail": 24,
  "rearUpper": 130,
  "rearLower": 70,
  "vintage": true,
  "wiringTopology": "parallel",
  "id": "super-reverb-ab763",
  "name": "Super Reverb",
  "example": "1965-style / AB763 construction",
  "year": 1963,
  "finish": "black",
  "dimensionsMm": [
   638.175,
   622.3,
   266.7
  ],
  "dimensionsStatus": "Secondary field-guide envelope, not measured vintage: 25⅛ W × 24½ H × 10½ D inches; hardware/interior estimated",
  "sources": [
   "superDrawing",
   "superEnvelope"
  ],
  "speaker": "speaker-super-ten-study",
  "wiring": "Four nominal 8 Ω tens in parallel: 2 Ω",
  "watts": 40,
  "speakers": "4 × 10″",
  "width": 1.256,
  "height": 1.463,
  "circuit": "AB763",
  "cover": "tolex-black",
  "cloth": "cloth-black-silver",
  "knob": "knob-skirted",
  "knobCount": 10,
  "panel": "faceplate-super-reverb",
  "tubeTypes": [
   "GZ34",
   "6L6GC",
   "6L6GC",
   "12AT7",
   "12AX7",
   "7025",
   "12AT7",
   "7025",
   "7025"
  ],
  "rectifierBasis": "GZ34 on AB763 drawing; no later 5U4GB substituted",
  "reverb": true,
  "legLength": 482.6
 },
 {
  "study": "combo-batch-v1",
  "handle": "handle-leather",
  "jewel": "jewel-red",
  "badge": "badge-flat-script",
  "speakerCount": 1,
  "speakerPositions": [
   [
    0,
    -35
   ]
  ],
  "loadOhm": 8,
  "topRail": 70,
  "bottomRail": 24,
  "rearUpper": 130,
  "rearLower": 70,
  "vintage": true,
  "wiringTopology": "single",
  "id": "vibrasonic-5g13-1960",
  "name": "Vibrasonic",
  "example": "1960-style / early 5G13 construction",
  "year": 1959,
  "finish": "brown",
  "dimensionsMm": [
   635,
   508,
   260.35
  ],
  "dimensionsStatus": "Early-version secondary envelope: 25 W × 20 H × 10¼ D inches; later catalog says 26 W. Neither measured on a 1960 specimen",
  "sources": [
   "vibrasonicDrawing",
   "vibrasonicEnvelope",
   "vibrasonicPhoto",
   "blondeCatalog"
  ],
  "speaker": "speaker-lansing-fifteen-study",
  "wiring": "Single nominal 8 Ω fifteen; exact selected-year JBL suffix unresolved",
  "watts": 40,
  "speakers": "1 × 15″",
  "width": 1.25,
  "height": 1.194,
  "circuit": "5G13",
  "cover": "tolex-pink-brown",
  "cloth": "cloth-oxblood",
  "knob": "knob-brown",
  "knobCount": 9,
  "panel": "faceplate-vibrasonic",
  "tubeTypes": [
   "6L6GC",
   "6L6GC",
   "7025",
   "7025",
   "7025",
   "7025",
   "7025"
  ],
  "rectifierBasis": "Six silicon rectifier diodes on 5G13 drawing; no rectifier tube",
  "reverb": false
 },
 {
  "study": "combo-batch-v1",
  "handle": "handle-black",
  "jewel": "jewel-red",
  "badge": "badge-flat-script",
  "speakerCount": 1,
  "speakerPositions": [
   [
    0,
    0
   ]
  ],
  "loadOhm": 8,
  "topRail": 76,
  "bottomRail": 24,
  "rearUpper": 102,
  "rearLower": 22,
  "vintage": true,
  "wiringTopology": "single",
  "id": "showman-blonde-1961",
  "name": "Showman",
  "example": "1961-style / 6G14-A with fifteen-inch cabinet",
  "year": 1960,
  "finish": "blonde",
  "dimensionsMm": [
   914.4,
   837.5,
   292.1
  ],
  "headDimensionsMm": [
   660.4,
   203.2,
   228.6
  ],
  "cabinetDimensionsMm": [
   914.4,
   622.3,
   292.1
  ],
  "headGapMm": 12,
  "piggyback": true,
  "dimensionsStatus": "Fifteen cabinet: period 1962–63 Fender catalog, 36 W × 24½ H × 11½ D inches. Selected head uses secondary 26 W × 8 H × 9 D estimate; later catalog head depth 11½ conflicts. 12 mm gap estimated",
  "sources": [
   "showmanDrawing",
   "blondeCatalog",
   "showmanEnvelope",
   "showmanPhoto",
   "showman15Photo"
  ],
  "speaker": "speaker-lansing-fifteen-study",
  "wiring": "Single nominal 8 Ω Lansing-format fifteen; suffix and tone-ring dimensions unresolved",
  "watts": 85,
  "speakers": "1 × 15″",
  "width": 1.8,
  "height": 1.97,
  "circuit": "6G14-A",
  "cover": "tolex-blonde",
  "cloth": "cloth-oxblood",
  "knob": "knob-ivory",
  "knobCount": 9,
  "panel": "faceplate-showman",
  "tubeTypes": [
   "5881",
   "5881",
   "5881",
   "5881",
   "7025",
   "7025",
   "12AX7",
   "12AX7",
   "7025",
   "7025"
  ],
  "rectifierBasis": "Six silicon rectifier diodes on 6G14-A drawing; four 5881 output tubes",
  "reverb": false,
  "legLength": 482.6
 }
];
