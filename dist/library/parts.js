import * as THREE from 'three';
import {assetById} from './catalog.js';
import {createMaterial,physicalUV} from './materials.js';
import {createSkirtedKnob} from './knobs.js';
import {createRaisedTailBadge} from './tail-badge.js';
import {TWIN_PANEL as TP} from './identification-profile.js';
import {twinPanelMaps} from './twin-panel-art.js';
export const MM=.17/25.4;
const brandImage=new Image();const brandReady=new Promise(resolve=>{brandImage.onload=resolve;brandImage.onerror=resolve;});brandImage.src=new URL('../assets/fender-wordmark.svg',import.meta.url).href;
export async function readyForExport(){await brandReady;if(document.fonts)await document.fonts.ready;}
const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.65,...extra});
function mesh(p,g,m,x=0,y=0,z=0){const o=new THREE.Mesh(g,m);o.position.set(x,y,z);p.add(o);return o;}
function cylinder(p,r1,r2,d,m,z=0,x=0,y=0,segments=64){const o=mesh(p,new THREE.CylinderGeometry(r1,r2,d,segments),m,x,y,z);o.rotation.x=Math.PI/2;return o;}
function ring(p,inner,outer,m,z=0){return mesh(p,new THREE.RingGeometry(inner,outer,96),m,0,0,z);}
function torus(p,r,t,m,z=0){return mesh(p,new THREE.TorusGeometry(r,t,10,96),m,0,0,z);}
function labelMap(text,brand,color){const c=document.createElement('canvas');c.width=c.height=512;const x=c.getContext('2d');const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
 const draw=(image)=>{x.clearRect(0,0,512,512);x.fillStyle=color;x.beginPath();x.arc(256,256,247,0,Math.PI*2);x.fill();x.strokeStyle='#c4c2ac';x.lineWidth=5;x.beginPath();x.arc(256,256,230,0,Math.PI*2);x.stroke();x.fillStyle='#e2ddc4';x.textAlign='center';if(brand==='Jensen'){x.font='italic bold 80px Georgia';x.fillText('Jensen',256,168);}else if(image){const m=document.createElement('canvas');m.width=400;m.height=150;const q=m.getContext('2d');q.drawImage(image,0,0,400,150);q.globalCompositeOperation='source-in';q.fillStyle='#d1d1bf';q.fillRect(0,0,400,150);x.drawImage(m,56,65);}
 x.font='bold 27px Arial';x.fillText(brand==='Jensen'?'LOUDSPEAKERS':'MUSICAL INSTRUMENTS',256,350);x.font='23px Arial';x.fillText(text,256,394);t.needsUpdate=true;};draw();if(brand!=='Jensen'){if(brandImage.complete&&brandImage.naturalWidth)draw(brandImage);else brandReady.then(()=>draw(brandImage.naturalWidth?brandImage:null));}return t;}
export function createScrew(){const g=new THREE.Group(),metal=material('#afb5b3',{metalness:.95,roughness:.25});const dome=mesh(g,new THREE.SphereGeometry(3,16,8,0,Math.PI*2,0,Math.PI/2),metal,0,0,1);dome.rotation.x=Math.PI/2;mesh(g,new THREE.BoxGeometry(4.5,.55,.2),material('#343536'),0,0,3.85);return g;}
export function createKnob(id='knob-skirted',options={}){
 if(id==='knob-skirted')return createSkirtedKnob(options);
 const g=new THREE.Group(),black=material('#151617',{roughness:.32}),white=material('#eee8d4');
  const shape=new THREE.Shape();shape.moveTo(-5,-8);shape.bezierCurveTo(-8,-6,-7,8,-3,11);shape.quadraticCurveTo(0,17,3,11);shape.bezierCurveTo(7,8,8,-6,5,-8);shape.quadraticCurveTo(0,-12,-5,-8);const geo=new THREE.ExtrudeGeometry(shape,{depth:9,bevelEnabled:true,bevelSize:1.3,bevelThickness:1.3,bevelSegments:3,steps:1});mesh(g,geo,black,0,0,2);mesh(g,new THREE.BoxGeometry(.8,12,.3),white,0,5,12.6);
 g.name=id;g.userData.componentId=id;return g;
}
export function createJack(){const g=new THREE.Group(),chrome=material('#c0c6c5',{metalness:.95,roughness:.22}),dark=material('#101213');cylinder(g,6,6,1,chrome,.5);cylinder(g,4.8,4.8,2.5,chrome,2,0,0,6);cylinder(g,3.175,3.175,3,dark,3.35);ring(g,3.2,4.2,chrome,5);return g;}
export function createJewel(color='#9c0a12',lit=true){const g=new THREE.Group(),chrome=material('#c5c9c3',{metalness:.95,roughness:.17});cylinder(g,8.5,8.5,3,chrome,1.5);cylinder(g,7.4,7.7,3,chrome,3.5,0,0,12);const lens=mesh(g,new THREE.SphereGeometry(6.1,12,5),new THREE.MeshPhysicalMaterial({color,metalness:0,roughness:.17,clearcoat:1,emissive:color,emissiveIntensity:lit?1.3:0}),0,0,5.7);lens.scale.z=.6;lens.material.name='pilot-jewel';g.name='jewel-red';return g;}
export function createHandle(id){const p=assetById(id),g=new THREE.Group(),span=p.dimensions.mountSpanMm,wide=p.dimensions.widthMm;const leather=id==='handle-leather';const strap=leather?createMaterial('leather-brown'):material('#181b1c',{roughness:.52});
 const points=[new THREE.Vector3(-span/2,0,0),new THREE.Vector3(-span*.34,0,17),new THREE.Vector3(0,0,23),new THREE.Vector3(span*.34,0,17),new THREE.Vector3(span/2,0,0)];const path=new THREE.CatmullRomCurve3(points);const vertices=[],indices=[];
 for(let i=0;i<=48;i++){const v=path.getPoint(i/48);for(const zSide of [-1,1])for(const side of [-1,1])vertices.push(v.x,side*wide/2,v.z+zSide*1.3);if(i<48){const k=i*4;indices.push(k,k+4,k+1,k+1,k+4,k+5,k+2,k+3,k+6,k+3,k+7,k+6,k,k+2,k+4,k+2,k+6,k+4,k+1,k+5,k+3,k+3,k+5,k+7);}}
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();const sm=mesh(g,geo,strap);if(leather)physicalUV(sm);else strap.side=THREE.DoubleSide;
 const chrome=material('#b5bdbb',{metalness:.9,roughness:.25});for(const side of [-1,1]){mesh(g,new THREE.BoxGeometry(24,wide+5,3),chrome,side*span/2,0,1);const screw=createScrew();screw.position.set(side*span/2,0,3);g.add(screw);}g.name=id;return g;
}
export function createSpeaker(id){
 const spec=assetById(id),g=new THREE.Group(),{frameDiameter,depth,magnetDiameter,spokes}=spec.build,R=frameDiameter/2,magR=magnetDiameter/2,alnico=spec.magnet==='Alnico';
 const paint=material(spec.colors.basket,{metalness:.42,roughness:.55}),paper=material(spec.colors.cone,{roughness:.97,side:THREE.DoubleSide}),metal=material('#9c9e92',{metalness:.8,roughness:.4}),magnet=material(spec.colors.magnet,{roughness:.78});
 ring(g,R-10,R,paint,0);ring(g,R-10,R,paint,-3);torus(g,R-5,2.4,paint,-3);
 // Corrugated paper cone: a curved radial profile, open basket and exposed motor.
 const profile=[];for(let i=0;i<=64;i++){const radius=25+(R-38)*i/64,fr=i/64;const ridge=fr>.37&&fr<.94?Math.sin(fr*120)*.55:0;profile.push(new THREE.Vector2(radius,-53+fr*48+ridge));}const cone=mesh(g,new THREE.LatheGeometry(profile,96),paper);cone.rotation.x=Math.PI/2;
 for(let i=0;i<4;i++)torus(g,R-14-i*2.2,.7,paper,-2-i*.6);
 const cap=mesh(g,new THREE.SphereGeometry(27,48,20),paper,0,0,-52);cap.scale.z=.32;
 // Pressed basket shell with three rows of open stamped windows per sector.
 const vertices=[],indices=[],radial=96,angular=288,inner=magR*.70;
 for(let row=0;row<=radial;row++){const t=row/radial,r=inner+(R-5-inner)*t,z=-78*Math.pow(1-t,.85);for(let col=0;col<=angular;col++){const angle=col/angular*Math.PI*2;vertices.push(Math.sin(angle)*r,Math.cos(angle)*r,z);}}
 for(let row=0;row<radial;row++)for(let col=0;col<angular;col++){const t=(row+.5)/radial,sector=((col+.5)/angular*spokes)%1;const windowRow=(t>.16&&t<.32)||(t>.42&&t<.58)||(t>.68&&t<.84);const corner=Math.min(Math.abs(t-.16),Math.abs(t-.32),Math.abs(t-.42),Math.abs(t-.58),Math.abs(t-.68),Math.abs(t-.84));const margin=.14+.06*(1-Math.min(1,corner/.025));if(windowRow&&sector>margin&&sector<1-margin)continue;const k=row*(angular+1)+col;indices.push(k,k+angular+1,k+1,k+1,k+angular+1,k+angular+2);}
 const basketGeo=new THREE.BufferGeometry();basketGeo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));basketGeo.setIndex(indices);basketGeo.computeVertexNormals();paint.side=THREE.DoubleSide;mesh(g,basketGeo,paint).name='pressed-basket';torus(g,R-6,1.8,paint,-2);
 if(alnico){cylinder(g,magR*.76,magR*.83,depth-80,paint,-80-(depth-80)/2);cylinder(g,magR*.86,magR*.86,7,paint,-depth+3);}
 else{cylinder(g,magR,magR,25,magnet,-depth+15);cylinder(g,magR+3,magR+3,3,paint,-depth+29);cylinder(g,magR+2,magR+2,3,paint,-depth+1.5);}
 const label=labelMap(spec.model,spec.brand,spec.colors.label);const disk=mesh(g,new THREE.CircleGeometry(alnico?magR*.73:magR*.84,64),material('#ffffff',{map:label,roughness:.73}),0,0,-depth-1);disk.rotation.y=Math.PI;disk.name='speaker-label';
 if(!alnico){cylinder(g,7,7,3,metal,-depth-2);cylinder(g,3,3,3,magnet,-depth-4);}
 const gasket=material('#b3a17b',{roughness:1});ring(g,R-8,R,gasket,1.2);
 for(let i=0;i<8;i++){const a=i*Math.PI/4;const mountingRadius=spec.dimensions.mountingCircleMm?spec.dimensions.mountingCircleMm/2:R-5;const bolt=createScrew();bolt.position.set(Math.sin(a)*mountingRadius,Math.cos(a)*mountingRadius,-4);bolt.rotation.y=Math.PI;g.add(bolt);}
 // Terminal board, solder tabs and two separate leads.
 mesh(g,new THREE.BoxGeometry(28,13,3),material('#a28c63'),R*.68,-R*.5,-18);for(const sign of [-1,1]){mesh(g,new THREE.BoxGeometry(6,4,5),metal,R*.68+sign*8,-R*.5,-23);const c=new THREE.CatmullRomCurve3([new THREE.Vector3(R*.68+sign*8,-R*.5,-24),new THREE.Vector3(R*.35+sign*10,-R*.62,-45),new THREE.Vector3(sign*12,-R*.38,-67)]);mesh(g,new THREE.TubeGeometry(c,18,1,6,false),material(sign<0?'#242524':'#c6b27b'));}
 g.name=id;g.userData={componentId:id,dimensionsBasis:spec.dimensionBasis,estimatedEnvelopeMm:spec.build};return g;
}
export function createFaceplate(id){
 const def=assetById(id),g=new THREE.Group(),tweed=id==='faceplate-5e3',twin=id==='faceplate-twin',W=def.dimensions.widthMm,H=def.dimensions.heightMm;
 const chrome=material('#b8c0bd',{metalness:.85,roughness:.3});mesh(g,new THREE.BoxGeometry(W,H,2),chrome);
 const c=document.createElement('canvas');c.width=3072;c.height=320;const x=c.getContext('2d');x.fillStyle=tweed?'#bdc3bc':twin?'#b0bab6':'#090c0d';x.fillRect(0,0,c.width,c.height);x.strokeStyle=twin?'#315a65':'#d5d4c6';x.lineWidth=3;x.strokeRect(10,10,3052,300);x.fillStyle=twin?'#214f60':tweed?'#1e2522':'#eee9d6';x.textAlign='center';
 const toX=mm=>mm/W*3072;const labels=tweed?['TONE','INST. VOL.','MIC. VOL.']:twin?['VOLUME','TREBLE','MIDDLE','BASS','VOLUME','TREBLE','MIDDLE','BASS','REVERB','SPEED','INTENSITY']:['VOLUME','TREBLE','BASS','VOLUME','TREBLE','BASS','REVERB','SPEED','INTENSITY'];
 const knobs=tweed?[65,115,165]:twin?TP.knobs.map(v=>v/TP.widthMm*W):[71,110,149,246,284,322,360,398,436];
 x.font='bold 30px Arial';labels.forEach((label,i)=>x.fillText(label,toX(knobs[i]),285));
 if(!tweed){x.font='bold 29px Arial';x.fillText('NORMAL',toX(29),285);x.fillText('VIBRATO',toX(twin?227:202),285);x.font=twin?'42px Arial':'italic 49px Georgia';x.fillText(twin?'TWIN REVERB-AMP':'Deluxe Reverb-Amp',toX(twin?550:494),100,twin?410:390);x.font='17px Arial';x.fillText('FENDER MUSICAL INSTRUMENTS',toX(twin?550:494),140,360);}
 else{x.font='bold 28px Arial';x.fillText('INSTRUMENT',toX(270),285);x.fillText('MICROPHONE',toX(320),285);}
 let artwork=c,extra={metalness:tweed?.6:0,roughness:.5};
 if(twin){const maps=twinPanelMaps();artwork=maps.color;extra={metalness:1,roughness:1,metalnessMap:new THREE.CanvasTexture(maps.metallic),roughnessMap:new THREE.CanvasTexture(maps.rough)};}
 const t=new THREE.CanvasTexture(artwork);t.colorSpace=THREE.SRGBColorSpace;mesh(g,new THREE.PlaneGeometry(W-1,H-1),material('#ffffff',{map:t,...extra}),0,0,1.1);
 for(const [i,k] of knobs.entries()){const settings=twin?[3,5.5,5,4.5,3.5,5,5.5,4,2.5,3,4]:[3,5,4,3.5,5.5,4.5,2.5,3,4];const knob=createKnob(tweed?'knob-chicken':'knob-skirted',{setting:settings[i]});knob.position.set(k-W/2,0,1.5);g.add(knob);}
 const jacks=tweed?[[270,-9],[270,9],[320,-9],[320,9]]:(twin?TP.jacks.map(v=>v/TP.widthMm*W):[17,40,190,213]).map(v=>[v,0]);for(const [j,y] of jacks){const jack=createJack();jack.position.set(j-W/2,y,1.5);g.add(jack);}
 if(twin)for(const x of TP.bright){const k=x/TP.widthMm*W;mesh(g,new THREE.BoxGeometry(5,10,2),material('#131716'),k-W/2,3,2);mesh(g,new THREE.BoxGeometry(3,5,2.8),material('#131716'),k-W/2,4,3.5);}
 const jewel=createJewel();jewel.position.set((tweed?24:twin?TP.pilot/TP.widthMm*W:557)-W/2,0,2);g.add(jewel);g.name=id;return g;
}
export function createBadge(id){
 if(id==='badge-script')return createRaisedTailBadge();
 const def=assetById(id),g=new THREE.Group(),W=def.dimensions.widthMm,H=def.dimensions.heightMm,tweed=id==='badge-tweed';
 const c=document.createElement('canvas');c.width=1024;c.height=320;const x=c.getContext('2d');const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
 const draw=(image)=>{x.clearRect(0,0,1024,320);if(tweed){x.fillStyle='#4d362a';x.fillRect(0,0,1024,320);x.strokeStyle='#bdb293';x.lineWidth=12;x.strokeRect(8,8,1008,304);}if(image){const m=document.createElement('canvas');m.width=1024;m.height=320;const q=m.getContext('2d');q.drawImage(image,0,0,1024,320);q.globalCompositeOperation='source-in';q.fillStyle='#d1d0be';q.fillRect(0,0,1024,320);x.drawImage(m,tweed?35:0,tweed?24:0,tweed?510:1024,tweed?220:320);}if(tweed){x.fillStyle='#d1c2a0';x.font='italic 99px Georgia';x.fillText('Deluxe',560,199);}t.needsUpdate=true;};draw();
 if(brandImage.complete&&brandImage.naturalWidth)draw(brandImage);else brandReady.then(()=>draw(brandImage.naturalWidth?brandImage:null));
 mesh(g,new THREE.PlaneGeometry(W,H),material('#d7dbd5',{map:t,transparent:true,roughness:.34,metalness:.75,side:THREE.DoubleSide}),0,0,1);
 if(tweed)for(const sx of [-1,1])for(const sy of [-1,1]){const screw=createScrew();screw.scale.setScalar(.45);screw.position.set(sx*(W/2-3),sy*(H/2-3),1);g.add(screw);}g.name=id;return g;
}
export function createComponent(id){const a=assetById(id);if(!a)throw new Error(`Unknown component ${id}`);let g;
 if(a.category==='Speakers')return createSpeaker(id);
 if(a.category==='Materials'){g=new THREE.Group();const m=createMaterial(id);const tile=mesh(g,new THREE.BoxGeometry(180,180,8,1,1,1),m);physicalUV(tile);return g;}
 if(a.kind==='faceplate')return createFaceplate(id);if(a.kind==='badge')return createBadge(id);
 if(id.startsWith('knob-'))return createKnob(id);if(id==='jewel-red')return createJewel();if(id==='jack-quarter')return createJack();if(id.startsWith('handle-'))return createHandle(id);if(id==='screw-slot')return createScrew();
 g=new THREE.Group();if(id==='trim-drip-edge'){const m=createMaterial('metal-nickel');mesh(g,new THREE.BoxGeometry(180,6,4),m);mesh(g,new THREE.BoxGeometry(6,100,4),m,-87,-47,0);return g;}
 // Plate artwork is generated from the same layout records used by assemblies.
 const plate=new THREE.Mesh(new THREE.BoxGeometry(a.dimensions.widthMm,a.dimensions.heightMm,1.5),material(id.includes('twin')?'#abb5b3':id.includes('5e3')?'#b8bfbc':'#141719',{metalness:.65,roughness:.35}));g.add(plate);const c=document.createElement('canvas');c.width=2048;c.height=256;const x=c.getContext('2d');x.textAlign='center';x.fillStyle=id.includes('twin')?'#245b6d':'#e4dfcd';x.font='italic 100px Georgia';x.fillText(a.name.replace(' faceplate','').replace(' nameplate',''),1024,110);x.font='28px Arial';x.fillText('FENDER   •   REFERENCE ARTWORK STUDY',1024,200);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;mesh(g,new THREE.PlaneGeometry(a.dimensions.widthMm*.96,a.dimensions.heightMm*.9),material('#ffffff',{map:t,transparent:true}),0,0,1);g.name=id;return g;
}
export function disposeObject(root){const textures=new Set(),materials=new Set(),geometries=new Set();root.traverse(o=>{if(!o.isMesh)return;geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){materials.add(m);for(const key of ['map','normalMap','roughnessMap','metalnessMap','bumpMap','alphaMap'])if(m[key])textures.add(m[key]);}});textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());}
