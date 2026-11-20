import fs from 'node:fs';
import assert from 'node:assert/strict';
const base=new URL('../models/twin-1968/',import.meta.url);
const dimensions=JSON.parse(fs.readFileSync(new URL('dimensions.json',base)));
function readGLB(name){const b=fs.readFileSync(new URL(name,base));assert.equal(b.toString('utf8',0,4),'glTF');assert.equal(b.readUInt32LE(4),2);assert.equal(b.readUInt32LE(8),b.length);const n=b.readUInt32LE(12);return {b,json:JSON.parse(b.subarray(20,20+n)),binOffset:28+n};}
const {b,json:g,binOffset}=readGLB('twin-1968-master.glb');
assert.ok(g.meshes.length>0);
const root=g.nodes.find(n=>n.name==='Twin_1968_A13834');assert.equal(root.extras.units,'metres');assert.equal(root.extras.revision,dimensions.revision);
assert.equal(g.nodes.filter(n=>/^Knob \d+/.test(n.name)).length,11,'Expected eleven independently placed shared knobs');
assert.equal(g.nodes.filter(n=>n.name?.includes('motor cover')).length,2,'Expected specimen-specific speaker pair');
assert.ok(!g.cameras?.length&&!g.extensions?.KHR_lights_punctual,'Review studio must not enter asset export');
assert.ok(g.images.every(i=>i.bufferView!==undefined),'GLB textures must be embedded');
for(const a of g.accessors){if(a.componentType!==5126||a.bufferView===undefined)continue;const v=g.bufferViews[a.bufferView],size={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16}[a.type];assert.ok(size);const stride=v.byteStride||size*4;for(let i=0;i<a.count;i++)for(let c=0;c<size;c++)assert.ok(Number.isFinite(b.readFloatLE(binOffset+(v.byteOffset||0)+(a.byteOffset||0)+i*stride+c*4)),'Non-finite exported attribute');}
const knob=readGLB('source/knob-skirted-v04.glb').json;
assert.equal(knob.nodes.find(n=>n.name==='knob-skirted').extras.revision,'0.4');
console.log(`Validated Blender GLB: ${g.meshes.length} mesh definitions, 11 knobs, 2 speaker motors, embedded textures, finite attributes and metre metadata.`);
