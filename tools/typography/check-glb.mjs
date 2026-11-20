import {readFileSync,writeFileSync} from 'node:fs';import assert from 'node:assert/strict';import {PANEL_IDS} from '../../dist/library/panel-lettering.js';
const report=[];
for(const id of PANEL_IDS){const b=readFileSync(`outputs/typography-${id}.glb`);assert.equal(b.toString('utf8',0,4),'glTF');assert.equal(b.readUInt32LE(4),2);const len=b.readUInt32LE(12),g=JSON.parse(b.toString('utf8',20,20+len)),start=20+len+8;assert.ok(g.nodes.some(n=>n.extras?.units==='metres'));assert.ok(g.accessors.every(a=>[...(a.min||[]),...(a.max||[])].every(Number.isFinite)));
 const sizes=g.images.map(im=>{const v=g.bufferViews[im.bufferView],s=start+(v.byteOffset||0);assert.equal(b.toString('ascii',s+1,s+4),'PNG');return [b.readUInt32BE(s+16),b.readUInt32BE(s+20)];});assert.ok(sizes.some(([w])=>w===4096),'Panel texture must retain full resolution');assert.ok(g.materials.some(m=>m.pbrMetallicRoughness?.baseColorTexture));report.push({id,bytes:b.length,meshes:g.meshes.length,images:sizes});
}
writeFileSync('outputs/typography-glb-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report.map(({id,bytes,meshes})=>({id,bytes,meshes})),null,2));
