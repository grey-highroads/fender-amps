import assert from 'node:assert/strict';
import {SMALL_PANELS} from '../dist/library/small-amp-profiles.js';
import {ASSETS,ASSEMBLIES,SOURCES,assetById} from '../dist/library/catalog.js';
assert.equal(new Set(ASSETS.map(a=>a.id)).size,ASSETS.length,'Component IDs must be unique');
for(const a of ASSETS){assert.ok(a.sources.length,`${a.id}: missing provenance`);for(const source of a.sources)assert.ok(SOURCES[source],`${a.id}: broken reference`);for(const id of a.usedBy)assert.ok(ASSEMBLIES.some(p=>p.id===id),`${a.id}: unknown assembly`);}
for(const a of ASSEMBLIES){for(const slot of ['speaker','cover','cloth','knob','panel','badge','handle','jewel'])assert.ok((slot==='badge'&&a[slot]===null)||assetById(a[slot]),`${a.id}: missing ${slot}`);const s=assetById(a.speaker);assert.equal(s.impedanceOhm/a.speakerCount,a.loadOhm,`${a.id}: parallel speaker load`);const [width,height,depth]=a.dimensionsMm;assert.ok(s.build.frameDiameter*a.speakerCount<width-30,`${a.id}: speaker frames intersect cabinet sides`);assert.ok(s.build.frameDiameter<height-80,`${a.id}: speaker overlaps chassis`);assert.ok(s.build.depth<depth-35,`${a.id}: motor protrudes outside cabinet`);assert.equal(s.powerW,null,'Do not substitute a modern speaker rating for an unknown vintage rating');}
assert.equal(ASSEMBLIES.find(a=>a.id==='deluxe-reverb-black').knobCount,9);
assert.equal(ASSEMBLIES.find(a=>a.id==='twin-reverb-early').knobCount,11);
assert.ok(!ASSETS.some(a=>a.id.includes('master')),'Early Twin must not inherit a later master-volume component');
for(const [id,knobs,tubes] of [['champ-5f1',1,3],['tremolux-5e9',5,6],['deluxe-6g3',6,6]]){
 const a=ASSEMBLIES.find(a=>a.id===id);assert.equal(a.knobCount,knobs);assert.equal(a.tubeKinds.length,tubes);
 const speaker=assetById(a.speaker);assert.ok(Math.abs(a.speakerOffset[0]*a.dimensionsMm[0])+speaker.build.frameDiameter/2<a.dimensionsMm[0]/2-16,`${id}: offset speaker clips side wall`);
 assert.ok(a.dimensionsStatus&&a.study,'New studies need explicit dimension basis');
 const panel=SMALL_PANELS[a.panel];assert.equal(panel.knobs.length,knobs);assert.ok(panel.width<a.dimensionsMm[0]-30,'Panel must fit between cabinet sides');for(const x of panel.knobs)assert.ok(x>14&&x<panel.width-14,'Knob clears panel ends');
}
assert.equal(ASSEMBLIES.find(a=>a.id==='deluxe-6g3').badge,null,'1962 reference has no grille badge');
console.log(`Validated ${ASSETS.length} components, ${ASSEMBLIES.length} assemblies, provenance links, speaker clearance and nominal loads.`);

// A new exhibit must be reconciled to the authoritative snapshot before expansion.
const fs=await import('node:fs');
const vm=await import('node:vm');
const {createHash}=await import('node:crypto');
const read=path=>fs.readFileSync(new URL('../'+path,import.meta.url),'utf8');
const sha=value=>createHash('sha256').update(value).digest('hex');
function csvRecords(text){
 const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
  else if(c===','&&!quoted){row.push(cell);cell='';}
  else if(c==='\n'&&!quoted){row.push(cell);rows.push(row);row=[];cell='';}
  else if(c!=='\r'||quoted)cell+=c;
 }
 assert.ok(!quoted,'Unclosed catalog CSV field');
 if(cell||row.length){row.push(cell);rows.push(row);}return rows;
}
const mapping=JSON.parse(read('data/catalog/timeline-map.json'));
const csv=read(mapping.catalogSource),rows=csvRecords(csv);
assert.equal(sha(csv),mapping.catalogSha256,'Catalog changed: reconcile timeline mappings');
const source=read(mapping.runtimeSource),start=source.indexOf('const amps=['),end=source.indexOf('function panelLabel');
assert.ok(start>=0&&end>start,'Timeline data boundary changed: update mapping validation');
const timeline=JSON.parse(JSON.stringify(vm.runInNewContext(source.slice(start,end)+'\namps',{},{timeout:1000})));
assert.equal(mapping.entries.length,timeline.length,'Every timeline entry needs a catalog mapping');
const keys=mapping.entries.map(e=>e.runtimeKey);assert.equal(new Set(keys).size,keys.length,'Duplicate timeline mapping');
for(const amp of timeline){
 const key=`${amp.year}|${amp.finish}|${amp.name}`,entry=mapping.entries.find(e=>e.runtimeKey===key);
 assert.ok(entry,`${key}: missing catalog mapping`);
 const actual=Object.fromEntries(Object.keys(entry.runtime).map(k=>[k,amp[k]]));
 assert.deepEqual(actual,entry.runtime,`${key}: runtime changed without reconciliation`);
 const row=rows[entry.catalogCsvRow-1];assert.ok(row,`${key}: missing catalog row`);
 assert.equal(row[0],entry.catalogName,`${key}: catalog row identity changed`);
 assert.equal(sha(JSON.stringify(row)),entry.catalogRowSha256,`${key}: catalog row values changed`);
 assert.ok(entry.scopeNote&&Array.isArray(entry.differences),`${key}: missing reconciliation notes`);
 for(const d of entry.differences)assert.ok(d.field&&d.status&&d.decision,`${key}: incomplete difference decision`);
}
console.log(`Validated ${timeline.length} timeline/catalog mappings and pinned source rows; historical confidence is unchanged.`);
