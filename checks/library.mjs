import assert from 'node:assert/strict';
import {SMALL_PANELS} from '../dist/library/small-amp-profiles.js';
import {ASSETS,ASSEMBLIES,SOURCES,assetById} from '../dist/library/catalog.js';
assert.equal(new Set(ASSETS.map(a=>a.id)).size,ASSETS.length,'Component IDs must be unique');
for(const a of ASSETS){assert.ok(a.sources.length,`${a.id}: missing provenance`);for(const source of a.sources)assert.ok(SOURCES[source],`${a.id}: broken reference`);for(const id of a.usedBy)assert.ok(ASSEMBLIES.some(p=>p.id===id),`${a.id}: unknown assembly`);}
for(const a of ASSEMBLIES){for(const slot of ['speaker','cover','cloth','knob','panel','badge','handle','jewel'])assert.ok((slot==='badge'&&a[slot]===null)||assetById(a[slot]),`${a.id}: missing ${slot}`);const s=assetById(a.speaker);const nominal=a.wiringTopology==='independent-outputs'?null:a.wiringTopology==='series'?s.impedanceOhm*a.speakerCount:a.wiringTopology==='series-pairs-parallel'?s.impedanceOhm*2/(a.speakerCount/2):s.impedanceOhm/a.speakerCount;if(a.wiringTopology==='independent-outputs'){assert.equal(a.loadOhm,null,'Independent outputs have no combined load');assert.deepEqual(a.speakerIds.map(id=>assetById(id).impedanceOhm),a.outputLoadsOhm);}else assert.equal(nominal,a.loadOhm,`${a.id}: declared speaker load`);const [width,height,depth]=a.dimensionsMm;if(!a.speakerPositions)assert.ok(s.build.frameDiameter*a.speakerCount<width-30,`${a.id}: speaker frames intersect cabinet sides`);assert.ok(s.build.frameDiameter<height-80,`${a.id}: speaker overlaps chassis`);assert.ok(s.build.depth<depth-35,`${a.id}: motor protrudes outside cabinet`);assert.equal(s.powerW,null,'Do not substitute a modern speaker rating for an unknown vintage rating');}
assert.equal(ASSEMBLIES.find(a=>a.id==='deluxe-reverb-black').knobCount,9);
assert.equal(ASSEMBLIES.find(a=>a.id==='twin-reverb-early').knobCount,11);
assert.ok(!ASSETS.some(a=>a.id.includes('master')),'Early Twin must not inherit a later master-volume component');
for(const [id,knobs,tubes] of [['champ-5f1',1,3],['tremolux-5e9',5,6],['deluxe-6g3',6,6],['princeton-reverb-aa1164',6,7]]){
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
const {CATALOG_AMPS}=await import('../dist/catalog-timeline.js');
const timeline=JSON.parse(JSON.stringify(vm.runInNewContext(source.slice(start,end)+'\namps',{CATALOG_AMPS},{timeout:1000})));
assert.equal(timeline.length,rows.length-1,'All catalog rows must appear');
assert.equal(new Set(mapping.entries.map(e=>e.catalogCsvRow)).size,rows.length-1,'One entry per catalog row');
for(const a of CATALOG_AMPS)assert.deepEqual(a.sourceFields,rows[a.catalogRow-1], 'WIP fields must match snapshot verbatim');
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

const {TWEED_FEATURES}=await import('../dist/tweed-features.js');
assert.equal(TWEED_FEATURES.length,9);
assert.equal(new Set(TWEED_FEATURES.map(p=>p.id)).size,9);
assert.deepEqual(TWEED_FEATURES.filter(p=>p.side==='top').map(p=>p.id).sort(),['inputs','tone','volumes']);
for(const part of TWEED_FEATURES){
 assert.ok(['top','rear'].includes(part.side));
 for(const field of ['title','body','listen','together','extraTitle','extra','detail'])assert.ok(part[field]?.length>15,`${part.id}: incomplete explorer copy`);
 assert.ok(part.attributes.length>=2&&part.sources.every(([url,label])=>url.startsWith('https://')&&label));
 if(part.image){assert.ok(fs.existsSync(new URL('../dist/'+part.image,import.meta.url)));assert.ok(part.credit&&part.license&&part.caption.includes('not established'));}
}
console.log('Validated nine 5E3 cards, top/rear grouping and licensed photograph provenance.');

const {REAR_PANELS}=await import('../dist/library/rear-profiles.js');
for(const id of ['deluxe-6g3','princeton-reverb-aa1164']){
 const a=ASSEMBLIES.find(a=>a.id===id),r=REAR_PANELS[id],upper=a.dimensionsMm[1]*r.upperRatio;
 assert.ok(r.notchDepth>r.height&&r.notchDepth<upper-12,'Rear strip must fit in a real cutout with panel remaining below');
 assert.ok(r.notchOuter>r.notchInner&&r.notchOuter<.5,'Sloping opening must clear panel ends');
 assert.ok(r.controls.every(([,x])=>x>6&&x<r.width-6),'Rear controls must fit strip');
}
const princeton=ASSEMBLIES.find(a=>a.id==='princeton-reverb-aa1164');
assert.deepEqual(princeton.tubeTypes,['5U4GB','6V6GT','6V6GT','12AX7','12AX7','12AT7','7025']);
assert.ok(princeton.rectifierBasis.includes('unresolved'));
assert.equal(REAR_PANELS['deluxe-6g3'].controls.at(-1)[2],'TREMOLO PEDAL');
assert.equal(SMALL_PANELS['faceplate-princeton'].jacks.length,2);
console.log('Validated Princeton seven-tube specification and shared rear opening/control clearances.');

// New layouts must fit at physical scale, including each frame and its neighbours.
for(const [id,count,knobs,tubes,jacks] of [['super-six-reverb-1972',6,12,10,4],['blues-junior-1995',1,6,5,1],['prosonic-1996',2,8,9,2]]){
 const a=ASSEMBLIES.find(a=>a.id===id),s=assetById(a.speaker),p=SMALL_PANELS[a.panel],r=s.build.frameDiameter/2,[W,H]=a.dimensionsMm;
 assert.equal(a.speakerCount,count);assert.equal(a.speakerPositions.length,count);assert.equal(a.knobCount,knobs);assert.equal(p.knobs.length,knobs);assert.equal(p.jacks.length,jacks);assert.equal(a.tubeTypes.length,tubes);
 assert.ok(p.width<W-32);assert.ok(a.dimensionsStatus&&a.sources.length>=2);
 for(const [i,[x,y]]of a.speakerPositions.entries()){
  assert.ok(Math.abs(x)+r<W/2-16,id+' frame clears sides');assert.ok(y+r<H/2-a.topRail,id+' frame clears control rail');assert.ok(y-r>-H/2+a.bottomRail,id+' frame clears bottom rail');
  for(const [xx,yy]of a.speakerPositions.slice(i+1))assert.ok(Math.hypot(xx-x,yy-y)>r*2+3,id+' frames do not intersect');
 }
 for(const x of p.knobs)assert.ok(x>14&&x<p.width-14);
 for(const [i,x]of p.knobs.entries())for(const xx of p.knobs.slice(i+1))assert.ok(Math.abs(xx-x)>30,id+' rotary clearances');
 const e=mapping.entries.find(e=>e.runtimeKey===`${a.year}|${a.finish}|${a.name}`);assert.ok(e&&e.scopeNote.length>70);assert.ok(!CATALOG_AMPS.some(c=>c.catalogRow===e.catalogCsvRow),'Promoted amp must not retain duplicate WIP');
}
assert.equal(ASSEMBLIES.find(a=>a.id==='super-six-reverb-1972').wiringTopology,'series-pairs-parallel');
assert.equal(ASSEMBLIES.find(a=>a.id==='prosonic-1996').loadOhm,16);
assert.ok(SMALL_PANELS['faceplate-blues-junior'].pilotLed);
assert.equal(SMALL_PANELS['faceplate-prosonic'].pilotColor,'#188345');
console.log('Validated three new configurations, source mapping, speaker/rotary clearances and non-parallel wiring.');

// Selected-year vintage batch: the early seven-tube Vibrasonic must not acquire
// the later catalog complement, and the closed Showman retains its hidden driver.
for(const [id,count,knobs,tubes] of [['super-reverb-ab763',4,10,9],['vibrasonic-5g13-1960',1,9,7],['showman-blonde-1961',1,9,10]]){
 const a=ASSEMBLIES.find(a=>a.id===id),p=SMALL_PANELS[a.panel],s=assetById(a.speaker),r=s.build.frameDiameter/2;
 assert.equal(a.speakerPositions.length,count);assert.equal(a.speakerCount,count);assert.equal(p.knobs.length,knobs);assert.equal(a.tubeTypes.length,tubes);assert.equal(p.jacks.length,4);
 const [W,H]=a.headDimensionsMm||a.dimensionsMm;assert.ok(p.width<W-32);
 for(const [i,x]of p.knobs.entries()){assert.ok(x>14&&x<p.width-14);for(const xx of p.knobs.slice(i+1))assert.ok(Math.abs(x-xx)>30);}
 const [cw,ch]=a.cabinetDimensionsMm||a.dimensionsMm;
 for(const [i,[x,y]]of a.speakerPositions.entries()){
  assert.ok(Math.abs(x)+r<cw/2-16);
  assert.ok(y+r<ch/2-(a.piggyback?16:a.topRail));assert.ok(y-r>-ch/2+(a.piggyback?16:a.bottomRail));
  for(const [xx,yy]of a.speakerPositions.slice(i+1))assert.ok(Math.hypot(xx-x,yy-y)>r*2+3);
 }
 const row=mapping.entries.find(e=>e.runtimeKey===`${a.year}|${a.finish}|${a.name}`);assert.ok(row&&!CATALOG_AMPS.some(c=>c.catalogRow===row.catalogCsvRow));
}
const {COMBO_REAR_CONTROLS}=await import('../dist/library/combo-rear-profiles.js');
assert.equal(COMBO_REAR_CONTROLS['vibrasonic-5g13-1960'].filter(([kind])=>kind==='jack').length,2,'Early 5G13 has no later extension speaker jack');
assert.equal(ASSEMBLIES.find(a=>a.id==='vibrasonic-5g13-1960').tubeTypes.filter(t=>t==='7025').length,5);
const showman=ASSEMBLIES.find(a=>a.id==='showman-blonde-1961');
assert.equal(showman.dimensionsMm[1],showman.headDimensionsMm[1]+showman.headGapMm+showman.cabinetDimensionsMm[1]);
assert.equal(showman.tubeTypes.filter(t=>t==='5881').length,4);
assert.ok(showman.dimensionsStatus.includes('conflicts'));
console.log('Validated selected-year Super Reverb, early Vibrasonic and Showman layouts, source promotions, tube complements and split cabinet envelope.');

// Independent Pano outputs and selected Bassman layouts must survive promotion.
for(const [id,count,knobs,tubes,jacks]of [['bassman-5f6a',4,6,6,4],['bassman-blackface-ab165-1965',2,6,6,4],['pano-verb-2024',2,11,11,1]]){
 const a=ASSEMBLIES.find(a=>a.id===id),p=SMALL_PANELS[a.panel],[cw,ch]=a.cabinetDimensionsMm||a.dimensionsMm;
 assert.equal(a.speakerCount,count);assert.equal(a.speakerPositions.length,count);assert.equal(p.knobs.length,knobs);assert.equal(p.jacks.length,jacks);assert.equal(a.tubeTypes.length,tubes);assert.ok(p.width<(a.headDimensionsMm||a.dimensionsMm)[0]-32);
 const radii=a.speakerPositions.map((_,i)=>assetById(a.speakerIds?.[i]||a.speaker).build.frameDiameter/2);
 for(const [i,[x,y]]of a.speakerPositions.entries()){
  const radius=radii[i];assert.ok(Math.abs(x)+radius<cw/2-16,id+' frame clears side walls');assert.ok(y+radius<ch/2-(a.piggyback?16:a.topRail));assert.ok(y-radius>-ch/2+(a.piggyback?16:a.bottomRail));
  for(let j=i+1;j<radii.length;j++)assert.ok(Math.hypot(x-a.speakerPositions[j][0],y-a.speakerPositions[j][1])>radius+radii[j]+3,id+' different frames clear one another');
 }
 for(const [i,x]of p.knobs.entries()){assert.ok(x>14&&x<p.width-14);for(const xx of p.knobs.slice(i+1))assert.ok(Math.abs(x-xx)>30);}
 const e=mapping.entries.find(e=>e.runtimeKey===`${a.year}|${a.finish}|${a.name}`);assert.ok(e&&!CATALOG_AMPS.some(c=>c.catalogRow===e.catalogCsvRow));
}
const pano=ASSEMBLIES.find(a=>a.id==='pano-verb-2024'),bassman=ASSEMBLIES.find(a=>a.id==='bassman-blackface-ab165-1965');
assert.deepEqual(pano.outputLoadsOhm,[4,8]);assert.equal(pano.loadOhm,null);assert.equal(pano.wiringTopology,'independent-outputs');assert.equal(pano.speakerIds.length,2);assert.equal(SMALL_PANELS[pano.panel].slides.length,2);assert.equal(bassman.toneRing,false);
assert.ok(Math.abs(bassman.dimensionsMm[1]-bassman.headDimensionsMm[1]-bassman.headGapMm-bassman.cabinetDimensionsMm[1])<.001);
assert.deepEqual(ASSEMBLIES.find(a=>a.id==='bassman-5f6a').tubeTypes,['GZ34','5881','5881','12AX7','12AX7','12AY7']);
console.log('Validated both Bassman variants and Pano independent outputs, unequal frame clearances, selected-year complements and catalog promotions.');
