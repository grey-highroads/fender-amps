// Photographic reconstruction of the mid-1960s Fender skirted knob family.
// Millimetres. Exterior dimensions are estimates, NOT measured vintage dimensions.
export const SKIRTED_KNOB = {
 version: '0.3',
 outerDiameterMm: 25.2,
 heightMm: 14.2,
 capRadiusMm: 5.05,
 shaftDiameterMm: 6.35,
 flutes: 40,
 fluteDepthMm: .18,
 numberRadiusMm: 10.1,
 numberHeightMm: 2.20,
 numberStartDeg: 35,
 numberSweepDeg: 290,
 // [radius, distance from mounting plane]. Continuous rolled skirt and tapered grip.
 profile: [
  [12.35,.12],[12.52,.23],[12.60,.43],[12.60,.63],
  [12.52,.84],[12.30,1.04],[11.70,1.22],[10.80,1.56],
  [9.80,1.99],[8.80,2.48],[7.85,3.01],[7.25,3.42],
  [7.02,3.77],[6.98,4.18],[6.90,5.4],[6.76,7.4],
  [6.60,9.7],[6.45,12.2],[6.39,13.35],[6.27,13.94],
  [6.10,14.16],[5.70,14.20],[5.35,14.20],[5.15,14.03],
  [5.10,13.72],[5.10,11.55],[4.8,11.10],[4.8,.36],
  [6.85,.36],[8.2,.25],[10.2,.14],[12.35,.12]
 ],
 inkProfile: [[12.3,1.065],[11.7,1.245],[10.8,1.585],[9.8,2.015],[8.8,2.505],[7.85,3.035],[7.25,3.445]],
 references: [
  {id:'retrofret1968',url:'https://retrofret.com/products/fender-twin-reverb-ac-568-wfactory-jbls-large-combo-tube-amplifier-1968-13479',basis:'Dated 1968 specimen; dealer explicitly identifies its knobs as original. Mounted silhouette, cap ratio and number placement.'},
  {id:'folkway1965',url:'https://folkwaymusic.com/vintage-instruments/item/id.5437',basis:'Early-1965 specimen, dealer-described as almost entirely original. Cross-check of blackface mounted appearance.'},
  {id:'mysticKnobs',url:'https://reverb.com/item/30438997-fender-original-1960s-blackface-amp-knobs-seven-snowman-8',basis:'Seller-attributed mid-1960s Showman knobs. Reports snowman 8, set screw at 10, metal straight-shaft insert. Individual photographs were not retrievable; hidden geometry remains provisional.'},
  {id:'fenderKnobs',url:'https://uk.fender.com/products/pure-vintage-black-silver-skirted-amplifier-knobs',basis:'Modern Fender replacement, secondary reference only. White-stamped numbers, silver center, set screw and 1/4-inch solid-shaft fit.'},
  {id:'isolatedKnobs',url:'https://www.stars-music.fr/fender-pure-vintage-black-silver-skirted-amplifier-knobs_135741.html',basis:'Isolated modern replacement photos: underside recess, fine fluting, tapered grip, silver dish and screw. Not proof of a particular vintage mold.'}
 ],
 pending: ['Caliper measurements of an original knob','Vintage cap depth and exact flute count','Original underside mold/insert details','Exact vintage numeral outlines and print registration']
};

// Hand-drawn centerline numerals informed by the photos, not a substitute system font.
// They remain a lettering study until an original part can be traced at macro scale.
export const KNOB_DIGITS = {
 '0':'M .5 .05 C .10 .05 .10 .95 .5 .95 C .90 .95 .90 .05 .5 .05',
 '1':'M .51 .05 L .51 .95',
 '2':'M .15 .22 C .18 -.01 .77 -.04 .82 .22 C .91 .49 .31 .62 .15 .95 L .85 .95',
 '3':'M .16 .13 C .40 -.04 .82 .01 .81 .27 C .81 .43 .65 .49 .43 .49 C .68 .48 .88 .60 .84 .79 C .79 1.02 .35 1.02 .13 .86',
 '4':'M .65 .95 L .65 .05 L .10 .66 L .90 .66',
 '5':'M .82 .06 L .24 .06 L .18 .47 C .44 .32 .83 .43 .83 .69 C .85 1.00 .42 1.06 .13 .86',
 '6':'M .79 .12 C .43 -.13 .11 .36 .15 .68 C .17 1.08 .86 1.04 .85 .71 C .85 .38 .31 .34 .15 .64',
 '7':'M .11 .06 L .87 .06 L .30 .96',
 '8':'M .5 .45 C .10 .45 .10 .04 .5 .04 C .90 .04 .90 .45 .5 .45 M .5 .45 C .02 .45 .02 .96 .5 .96 C .98 .96 .98 .45 .5 .45',
 '9':'M .19 .87 C .62 1.13 .91 .59 .85 .29 C .78 -.06 .16 -.04 .15 .29 C .14 .62 .70 .68 .85 .36'
};
export function knobAngleForSetting(value){return (SKIRTED_KNOB.numberStartDeg+(Math.max(1,Math.min(10,value))-1)*SKIRTED_KNOB.numberSweepDeg/9)*Math.PI/180;}
