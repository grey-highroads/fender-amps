import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {TAIL_PROFILE_SIGNATURE} from '../dist/library/tail-badge-contours.js';
import * as THREE from '../dist/vendor/three.module.js';
import {createRaisedTailBadge} from '../dist/library/tail-badge.js';
import {TWIN_PANEL as P,TAIL_BADGE as B} from '../dist/library/identification-profile.js';
import {assetById} from '../dist/library/catalog.js';
assert.equal(TAIL_PROFILE_SIGNATURE,createHash('sha256').update(JSON.stringify({backing:B.backing,strokes:B.strokes})).digest('hex'),'Regenerate the badge contours after editing its path study');
const badge=createRaisedTailBadge(),bounds=new THREE.Box3().setFromObject(badge).getSize(new THREE.Vector3());
const record=assetById('badge-script');assert.ok(Math.abs(bounds.x-record.dimensions.widthMm)<.1);assert.ok(Math.abs(bounds.y-record.dimensions.heightMm)<.1);
let raised=0;
const backing=badge.children.find(m=>m.name.includes('backing'));
assert.equal(backing.geometry.parameters.shapes.holes.length,3,'Backing must contain actual mounting openings');
for(const o of badge.children){assert.ok(o.isMesh);for(const field of ['position','normal'])assert.ok([...o.geometry.attributes[field].array].every(Number.isFinite),'Non-finite badge geometry');assert.ok(!(Array.isArray(o.material)?o.material:[o.material]).some(m=>m.map),'Raised badge must not regress to a textured billboard');if(o.name.includes('raised-chrome')){raised++;o.geometry.computeBoundingBox();assert.ok(o.position.z+o.geometry.boundingBox.max.z>B.baseDepthMm+.5,'Lettering must project above the backing');}}
assert.ok(raised>0);assert.equal(P.knobs.length,11);assert.equal(P.labels.length,11);assert.equal(P.jacks.length,4);assert.equal(P.bright.length,2);
assert.ok(P.knobs.every((x,i)=>x>0&&x<P.widthMm&&(i===0||x>P.knobs[i-1])));assert.ok(P.pilot>P.knobs.at(-1));
console.log('Validated raised badge geometry, backing openings, modeled envelope and Twin layout integrity.');
