import assert from 'node:assert/strict';
import fs from 'node:fs';
import {SURFACE_STUDIES,generateSurfaceData} from '../dist/library/photographic-surfaces.js';
const settings=JSON.parse(fs.readFileSync(new URL('../models/twin-1968/surface-settings.json',import.meta.url)));
assert.deepEqual(settings,SURFACE_STUDIES,'Blender surface settings diverge from browser source');
for(const id of Object.keys(SURFACE_STUDIES)){
 const s=generateSurfaceData(id,128);
 assert.equal(s.tileMm,SURFACE_STUDIES[id].tileMm);
 for(const key of ['color','height','rough','normal','metallic']){assert.equal(s[key].length,128*128*4);for(let i=3;i<s[key].length;i+=4)assert.equal(s[key][i],255);}
 for(let i=0;i<s.normal.length;i+=4){const n=[0,1,2].map(k=>s.normal[i+k]/255*2-1);assert.ok(Math.abs(Math.hypot(...n)-1)<.015,'Surface normals must remain normalized');assert.ok(n[2]>0);}
 assert.ok(s.color.some((value,i)=>i%4<3&&value!==s.color[i%4]),'Surface color map is constant');
}
console.log('Validated shared surface settings, map channels and tangent normals.');
