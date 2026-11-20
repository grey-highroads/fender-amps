import assert from 'node:assert/strict';
import {ASSETS,ASSEMBLIES,SOURCES,assetById} from '../dist/library/catalog.js';
assert.equal(new Set(ASSETS.map(a=>a.id)).size,ASSETS.length,'Component IDs must be unique');
for(const a of ASSETS){assert.ok(a.sources.length,`${a.id}: missing provenance`);for(const source of a.sources)assert.ok(SOURCES[source],`${a.id}: broken reference`);for(const id of a.usedBy)assert.ok(ASSEMBLIES.some(p=>p.id===id),`${a.id}: unknown assembly`);}
for(const a of ASSEMBLIES){for(const slot of ['speaker','cover','cloth','knob','panel','badge','handle','jewel'])assert.ok(assetById(a[slot]),`${a.id}: missing ${slot}`);const s=assetById(a.speaker);assert.equal(s.impedanceOhm/a.speakerCount,a.loadOhm,`${a.id}: parallel speaker load`);const [width,height,depth]=a.dimensionsMm;assert.ok(s.build.frameDiameter*a.speakerCount<width-30,`${a.id}: speaker frames intersect cabinet sides`);assert.ok(s.build.frameDiameter<height-80,`${a.id}: speaker overlaps chassis`);assert.ok(s.build.depth<depth-35,`${a.id}: motor protrudes outside cabinet`);assert.equal(s.powerW,null,'Do not substitute a modern speaker rating for an unknown vintage rating');}
assert.equal(ASSEMBLIES.find(a=>a.id==='deluxe-reverb-black').knobCount,9);
assert.equal(ASSEMBLIES.find(a=>a.id==='twin-reverb-early').knobCount,11);
assert.ok(!ASSETS.some(a=>a.id.includes('master')),'Early Twin must not inherit a later master-volume component');
console.log(`Validated ${ASSETS.length} components, 3 assemblies, provenance links, speaker clearance and 8/8/4 Ω loads.`);
