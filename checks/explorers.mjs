import assert from 'node:assert/strict';
import fs from 'node:fs';
import {ASSEMBLIES} from '../dist/library/catalog.js';
import {SMALL_PANELS} from '../dist/library/small-amp-profiles.js';
import {EXPLORER_ANCHORS} from '../dist/library/explorer-anchors.js';
import {PRINCETON_FEATURES,BROWN_FEATURES,CHAMP_FEATURES} from '../dist/small-amp-features.js';
import {AMP_IMAGE_STUDIES} from '../dist/amp-image-data.js';
const profiles={'princeton-reverb-aa1164':PRINCETON_FEATURES,'deluxe-6g3':BROWN_FEATURES,'champ-5f1':CHAMP_FEATURES};
for(const [id,parts] of Object.entries(profiles)){
 const assembly=ASSEMBLIES.find(a=>a.id===id),targets=EXPLORER_ANCHORS[id];
 assert.ok(assembly,'Explorer must use a catalog assembly');
 assert.equal(new Set(parts.map(p=>p.id)).size,parts.length,'Unique IDs per mounted profile');
 assert.deepEqual(Object.keys(targets).sort(),parts.map(p=>p.id).sort(),'Every card has one anchor, every anchor a card');
 for(const p of parts){
  const anchor=targets[p.id];assert.equal(p.side,anchor.side);assert.equal(p.menuOnly,!!anchor.menuOnly);
  assert.ok(['front','top','rear'].includes(p.side));
  for(const key of ['title','body','listen','together','extraTitle','extra','detail'])assert.ok(p[key]?.length,`${id}/${p.id}: missing ${key}`);
  assert.ok(p.attributes.length&&p.sources.length);for(const [url,label] of p.sources){assert.equal(new URL(url).protocol,'https:');assert.ok(label);}
  assert.equal([anchor.knob!==undefined,anchor.tube!==undefined,!!anchor.speaker,!!anchor.chassis].filter(Boolean).length,1);
  if(anchor.knob!==undefined)assert.ok(SMALL_PANELS[assembly.panel].knobs[anchor.knob]!==undefined);
  if(anchor.tube!==undefined)assert.ok(assembly.tubeKinds[anchor.tube]);
 }
 const media=AMP_IMAGE_STUDIES.filter(m=>m.assemblyId===id);assert.deepEqual(media.map(m=>m.view).sort(),['Front','Rear']);
}
const manifest=JSON.parse(fs.readFileSync(new URL('../dist/assets/studies/manifest.json',import.meta.url)));
assert.equal(new Set(manifest.map(m=>m.id)).size,manifest.length);
assert.equal(new Set(manifest.map(m=>m.path)).size,manifest.length);
for(const record of manifest){
 assert.ok(record.prompt&&record.referenceLinks.length&&record.generationDate&&record.knownInaccuracies&&record.provenance);
 assert.equal(record.label,'Generated illustration');assert.equal(record.kind,'whole-amp');
 assert.ok(!record.path.includes('..'));const bytes=fs.readFileSync(new URL('../dist/'+record.path,import.meta.url));assert.equal(bytes.readUInt16BE(0),0xffd8,'Media must be materialized JPEG');
 const runtime=AMP_IMAGE_STUDIES.find(m=>m.id===record.id);for(const [key,value] of Object.entries(runtime))assert.deepEqual(value,record[key]);
}
console.log('Validated 18 small-amp topics, shared hardware targets, menu-only disclosures and six generated media/provenance records.');
