import assert from 'node:assert/strict';
import {SKIRTED_KNOB as K,KNOB_DIGITS,knobAngleForSetting} from '../dist/library/knob-profile.js';
import {createKnobBodyGeometry,createKnobCapGeometry,createKnobInkGeometry,createKnobInsertGeometry} from '../dist/library/knobs.js';
import {assetById,ASSEMBLIES} from '../dist/library/catalog.js';
const geometries={body:createKnobBodyGeometry(),cap:createKnobCapGeometry(),ink:createKnobInkGeometry(),insert:createKnobInsertGeometry()};
for(const [name,g] of Object.entries(geometries)){
 for(const field of ['position','normal','uv'])assert.ok([...g.attributes[field].array].every(Number.isFinite),`${name}: non-finite ${field}`);
 g.computeBoundingBox();assert.ok(g.index.count>0,`${name}: missing surface`);
}
const body=geometries.body.boundingBox,diameter=body.max.x-body.min.x;
assert.ok(Math.abs(diameter-assetById('knob-skirted').dimensions.diameterMm)<.001,'Rendered body and catalog diameter disagree');
assert.ok(Math.abs(body.max.z-K.heightMm)<.001,'Rendered height and profile disagree');
assert.ok(K.capRadiusMm*2/diameter<.45,'Silver disc must remain inside the narrow grip, not fill the skirt');
const bore=geometries.insert.attributes.position;
for(let i=0;i<bore.count;i++)assert.ok(Math.hypot(bore.getX(i),bore.getY(i))>=K.shaftDiameterMm/2-.001,'A face intrudes into the shaft socket');
const ink=geometries.ink.attributes.normal;assert.ok([...Array(ink.count).keys()].reduce((n,i)=>n+ink.getZ(i),0)>0,'Number surface faces away from viewer');
const innerInkRadius=Math.min(...K.inkProfile.map(p=>p[0]));assert.ok(K.numberRadiusMm-K.numberHeightMm/2>innerInkRadius,'Numerals collide with grip');
assert.ok(K.numberRadiusMm+K.numberHeightMm/2<K.outerDiameterMm/2,'Numerals extend beyond skirt');
assert.deepEqual(Object.keys(KNOB_DIGITS).sort(),['0','1','2','3','4','5','6','7','8','9']);
assert.ok(knobAngleForSetting(10)>knobAngleForSetting(1),'Control rotation must increase monotonically');
assert.deepEqual(ASSEMBLIES.filter(a=>a.knob==='knob-skirted').map(a=>a.id).sort(),['deluxe-reverb-black','princeton-reverb-aa1164','super-six-reverb-1972','twin-reverb-early'],'Princeton, Deluxe Reverb, Twin and Super Six must share the rebuilt knob');
Object.values(geometries).forEach(g=>g.dispose());
console.log('Validated knob surfaces, shaft opening, numeral clearance, physical catalog dimensions and shared assembly usage.');
