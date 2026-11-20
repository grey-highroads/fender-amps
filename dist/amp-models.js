import * as THREE from 'three';
import {createSmallAmp} from './library/small-amps.js';
import {TWEED_PANEL,TWIN_PANEL,DELUXE_PANEL} from './library/identification-profile.js';
import {assemblyFor,assetById,SOURCES} from './library/catalog.js';
import {createMaterial,physicalUV} from './library/materials.js';
import {MM,createSpeaker,createFaceplate,createBadge,createHandle,disposeObject} from './library/parts.js';

// Cabinet studies share an inch scale, rather than stretching one Deluxe mesh.
const IN=.17;
const logoImage=new Image();logoImage.src='./assets/fender-wordmark.svg';
const logoMaps=[];logoImage.onload=()=>logoMaps.forEach(p=>p());
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.75,...extra});
function canvasMap(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}
function surface(kind){return canvasMap(512,512,(x,w,h)=>{
 let seed=17;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
 x.fillStyle=kind==='tweed'?'#b48c48':kind==='wheat'?'#42301e':kind==='silver'?'#555a56':'#17191a';x.fillRect(0,0,w,h);
 if(kind==='tweed'){
  for(let y=-512;y<1024;y+=12){x.strokeStyle=Math.round((y+512)/12)%2?'#d9b875':'#6d4e29';x.lineWidth=5;x.beginPath();x.moveTo(0,y);x.lineTo(512,y-512);x.stroke();}
  for(let y=0;y<h;y+=3){x.fillStyle='rgba(243,213,150,.18)';x.fillRect(0,y,w,1);}
 }else if(kind==='silver'||kind==='wheat'){
  for(let y=0;y<h;y+=8){x.fillStyle=kind==='silver'?'#bec2b3':'#9b7950';x.fillRect(0,y,w,2);x.fillStyle=kind==='silver'?'#252b29':'#2c2119';x.fillRect(0,y+3,w,2);}
  for(let col=0;col<w;col+=5){x.fillStyle=kind==='silver'?'#8d9388':'#b0905a';x.fillRect(col,0,1,h);for(let y=col%8;y<h;y+=16){x.fillStyle=kind==='silver'?'#ded8bc':'#c7a575';x.fillRect(col,y,2,3);}}
 }else{for(let i=0;i<45000;i++){const v=18+Math.floor(random()*30);x.fillStyle=`rgb(${v},${v},${v})`;x.fillRect(random()*512,random()*512,1+random()*3,1);}}
 });}
function box(p,w,h,d,x,y,z,m,r=.035){const s=new THREE.Shape();const a=-w/2,b=-h/2;r=Math.min(r,w/3,h/3,d/3);s.moveTo(a+r,b);s.lineTo(a+w-r,b);s.quadraticCurveTo(a+w,b,a+w,b+r);s.lineTo(a+w,b+h-r);s.quadraticCurveTo(a+w,b+h,a+w-r,b+h);s.lineTo(a+r,b+h);s.quadraticCurveTo(a,b+h,a,b+h-r);s.lineTo(a,b+r);s.quadraticCurveTo(a,b,a+r,b);const g=new THREE.ExtrudeGeometry(s,{depth:d-2*r,steps:1,bevelEnabled:true,bevelSize:r,bevelThickness:r,bevelSegments:2,curveSegments:5});g.translate(0,0,-d/2+r);const mesh=new THREE.Mesh(g,m);mesh.position.set(x,y,z);p.add(mesh);if(m.userData.tileMm)physicalUV(mesh,MM);return mesh;}
function cyl(p,r,d,x,y,z,m,front=false){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d,24),m);if(front)mesh.rotation.x=Math.PI/2;mesh.position.set(x,y,z);p.add(mesh);return mesh;}
function plane(p,w,h,x,y,z,map){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat(0xffffff,{map,transparent:true,roughness:.55,metalness:.2,depthWrite:false}));mesh.position.set(x,y,z);mesh.userData.ownedTexture=true;p.add(mesh);return mesh;}
export function modelReference(a){const study=assemblyFor(a);if(study?.study)return {dimensions:study.dimensionsMm.map(v=>Number((v/25.4).toFixed(2))).join(' × ')+' in',source:SOURCES[study.sources[0]].url,name:study.example,basis:study.dimensionsStatus};if((a.year===1955||a.year===2016)&&a.finish==='tweed')return {dimensions:'20 × 16.75 × 9.5 in',source:'https://www.fender.com/products/57-custom-deluxe/',name:'5E3 / ’57 Custom Deluxe'};if(a.name==='Deluxe Reverb')return {dimensions:'24.5 × 17.5 × 9.5 in',source:'https://www.fender.com/products/65-deluxe-reverb/',name:'Deluxe Reverb cabinet'};if(a.name==='Twin Reverb'||a.name==='Ultralinear Twin')return {dimensions:'26.5 × 19.87 × 10.375 in',source:'https://www.fender.com/products/65-twin-reverb/',name:'Twin Reverb cabinet family'};return null;}
export function createAmpModel(a){
 const profile=assemblyFor(a);
 if(profile?.study)return createSmallAmp(profile);
 const tweed=a.finish==='tweed',silver=a.finish==='silver',front=['black','silver','brown'].includes(a.finish);
 const twin=a.name.includes('Twin'),deluxe=a.name==='Deluxe Reverb';
 const ref=modelReference(a);let dims=ref?(twin?[26.5,19.87,10.375]:deluxe?[24.5,17.5,9.5]:[20,16.75,9.5]):[20*a.width,16.75*a.height,9.5];
 if(a.name==='Super Reverb')dims=[25.125,24.875,10.5];
 if(profile)dims=profile.dimensionsMm.map(v=>v/25.4);
 const [w,h,d]=dims.map(v=>v*IN),t=.14,z=d/2;
 const amp=new THREE.Group(),cab=new THREE.Group(),face=new THREE.Group(),chassis=new THREE.Group();amp.add(cab,face,chassis);amp.rotation.y=-.2;amp.userData.modelProfile=ref?.name||'Representative cabinet';
 const coverMap=surface(tweed?'tweed':'tolex');coverMap.wrapS=coverMap.wrapT=THREE.RepeatWrapping;coverMap.repeat.set(.65,.65);
 const covering=profile?createMaterial(profile.cover):mat(tweed?0xc6a36c:a.finish==='brown'?0x754f38:a.finish==='cream'?0xe0cda8:a.finish==='wood'?0x956139:0xffffff,{map:coverMap,bumpMap:coverMap,bumpScale:tweed?.012:.018});
 const black=mat(0x101112),chrome=mat(0xc2c7c5,{metalness:.85,roughness:.26}),pine=mat(0x9c7548),leather=mat(tweed?0x4c2915:0x161819),dark=mat(0x292b2c,{metalness:.55});
 for(const side of [-1,1])box(cab,t,h,d,side*(w-t)/2,0,0,covering,.055);
 for(const side of [-1,1]){if(side===1&&profile?.id==='deluxe-5e3')continue;box(cab,w-t*2,t,d,0,side*(h-t)/2,0,covering,.05);}
 // A real recess keeps the 5E3 plate above the chassis, rather than buried in
 // the top board. Opening envelope is estimated around the shared plate.
 if(profile?.id==='deluxe-5e3'){
  const pw=assetById(profile.panel).dimensions.widthMm*MM+4*MM,pd=assetById(profile.panel).dimensions.heightMm*MM+4*MM,cz=-d*.28,wing=(w-t*2-pw)/2;
  for(const sign of [-1,1])box(cab,wing,t,pd,sign*(pw+wing)/2,(h-t)/2,cz,covering,.01);
  for(const [near,far]of [[-d/2,cz-pd/2],[cz+pd/2,d/2]])box(cab,w-t*2,t,far-near,0,(h-t)/2,(near+far)/2,covering,.01);
 }
 const rearPanels=[box(cab,w-t*2,.5,.12,0,h/2-.35,-z+.06,covering),box(cab,w-t*2,.38,.12,0,-h/2+.27,-z+.06,covering)];rearPanels.forEach(o=>o.userData.rearPanel=true);
 const ph=front?.37:0,fh=h-(tweed?.63:.32)-ph,fy=tweed?-.045:-ph/2;
 if(tweed){box(face,w-.22,.36,.12,0,h/2-.18,z-.025,covering);box(face,w-.22,.25,.12,0,-h/2+.125,z-.025,covering);for(const [railY,railH] of [[h/2-.18,.34],[-h/2+.125,.23]]){const rail=new THREE.Mesh(new THREE.PlaneGeometry(w-.24,railH),covering);rail.position.set(0,railY,z+.037);face.add(rail);if(profile)physicalUV(rail,MM);}}
 box(face,w-.25,fh+.03,.08,0,fy,z-.1,black);
 const grilleMap=surface(tweed?'wheat':a.finish==='brown'?'wheat':'silver');if(silver&&a.year===1968){const gx=grilleMap.image.getContext('2d');gx.fillStyle='#597d83';for(let x=3;x<512;x+=32)gx.fillRect(x,0,1,512);grilleMap.needsUpdate=true;}grilleMap.wrapS=grilleMap.wrapT=THREE.RepeatWrapping;grilleMap.repeat.set(w/2.3,fh/2.3);
 box(face,w-.32,fh,.035,0,fy,z-.04,profile?createMaterial(profile.cloth):mat(tweed?0x79664f:0xb9bdb9,{map:grilleMap,bumpMap:grilleMap,bumpScale:.008}));
 const piping=silver&&a.year===1968?chrome:mat(tweed?0x775336:0xc0b9a3);
 for(const side of [-1,1]){box(face,.022,fh+.035,.035,side*(w-.30)/2,fy,z-.012,piping,.005);box(face,w-.29,.022,.035,0,fy+side*(fh+.02)/2,z-.012,piping,.005);}
 // Badge is separate from the cloth; the wordmark uses actual vector artwork.
 const badgeMap=canvasMap(1024,256,(x,W,H)=>{x.fillStyle='#29251e';if(tweed){x.fillRect(0,0,W,H);x.strokeStyle='#ad9567';x.lineWidth=10;x.strokeRect(8,8,W-16,H-16);x.fillStyle='#decfa7';x.font='italic bold 155px Georgia';x.fillText('Fender',20,166);x.font='italic 88px Georgia';x.fillText('Deluxe',565,165);}});
 const drawLogo=()=>{const x=badgeMap.image.getContext('2d');x.clearRect(0,0,1024,256);if(tweed){x.fillStyle='#2b251c';x.fillRect(0,0,1024,256);x.strokeStyle='#ae966b';x.lineWidth=9;x.strokeRect(8,8,1008,240);}if(logoImage.complete&&logoImage.naturalWidth){const mask=document.createElement('canvas');mask.width=1024;mask.height=256;const m=mask.getContext('2d');m.drawImage(logoImage,0,0,1024,256);m.globalCompositeOperation='source-in';m.fillStyle=tweed?'#d5bf93':'#d9dcd6';m.fillRect(0,0,1024,256);x.drawImage(mask,tweed?25:0,tweed?22:0,tweed?525:1024,tweed?170:256);}if(tweed){x.fillStyle='#d6c29b';x.font='italic 88px Georgia';x.fillText('Deluxe',565,165);}badgeMap.needsUpdate=true;};if(!logoImage.complete)logoMaps.push(drawLogo);drawLogo();
 const bw=tweed?.89:.84,bh=tweed?.23:.29;const badge=plane(face,bw,bh,tweed?0:-w/2+.68,tweed?h/2-.18:front?h/2-ph-.40:h/2-.40,z+(tweed?.05:.009),badgeMap);badge.name='amp-badge';if(profile){face.remove(badge);disposeObject(badge);const actual=createBadge(profile.badge);actual.scale.setScalar(MM);actual.position.set(profile.finish==='tweed'?0:-w/2+.72,profile.finish==='tweed'?h/2-.18:h/2-ph-.43,z+(tweed?.052:-.021));face.add(actual);}
 if(front){
  const panelW=w-.28,panelY=h/2-.14-ph/2;box(chassis,panelW,ph,.08,0,panelY,z-.035,silver?chrome:black);
  const labels=twin?['VOLUME','TREBLE','MIDDLE','BASS','VOLUME','TREBLE','MIDDLE','BASS','REVERB','SPEED','INTENSITY']:['VOLUME','TREBLE','BASS','VOLUME','TREBLE','BASS','REVERB','SPEED','INTENSITY'];
  if(a.year===1977)labels.push('MASTER');
  const xs=[];const jackXs=(twin?[-.47,-.43,-.115,-.075]:[-.47,-.43,-.15,-.11]).map(v=>v*panelW);let cursor=-.36;labels.forEach((label,i)=>{if(i===(twin?4:3))cursor=twin?-.015:-.04;xs.push(cursor*panelW);cursor+=twin?(a.year===1977?.051:.058):.072;});
  const panelMap=canvasMap(2048,192,(x,W,H)=>{x.fillStyle=silver?'#b6bbba':'#080909';x.fillRect(0,0,W,H);x.strokeStyle=silver?'#1b5966':'#e2dfcf';x.lineWidth=2;x.strokeRect(8,8,W-16,H-16);x.fillStyle=silver?'#174c5c':'#e8e5d6';x.textAlign='center';x.font='bold 17px Arial';labels.forEach((l,i)=>x.fillText(l,(xs[i]/panelW+.5)*W,170));x.font='bold 19px Arial';x.fillText('NORMAL',.05*W,171);x.fillText('VIBRATO',(twin?.405:.37)*W,171);x.font=silver?'26px Arial':'italic 30px Georgia';x.fillText(twin?'TWIN REVERB-AMP':'DELUXE REVERB-AMP',.87*W,60);x.font='12px Arial';x.fillText('FENDER MUSICAL INSTRUMENTS',.87*W,92);});
  plane(chassis,panelW,ph,0,panelY,z+.009,panelMap);
  for(const x of jackXs){cyl(chassis,.048,.025,x,panelY,z+.045,chrome,true);cyl(chassis,.027,.03,x,panelY,z+.063,black,true);}
  if(twin)for(const x of [-panelW*.405,panelW*-.05])box(chassis,.025,.057,.025,x,panelY+.105,z+.037,black,.003);
  for(const [i,x] of xs.entries()){
   cyl(chassis,.095,.045,x,panelY,z+.07,black,true);cyl(chassis,.057,.06,x,panelY,z+.103,black,true);cyl(chassis,.034,.004,x,panelY,z+.137,chrome,true);
   const marks=canvasMap(128,128,(c,W,H)=>{c.fillStyle='#e0ddd0';c.textAlign='center';c.font='15px Arial';for(let n=1;n<=10;n++){const angle=(n/11)*Math.PI*1.5+Math.PI*.25;c.fillText(n,64+Math.sin(angle)*49,69+Math.cos(angle)*49);}c.fillRect(61,13,5,29);});plane(chassis,.19,.19,x,panelY,z+.142,marks);
  }
  const jewel=mat(0xa00b12,{emissive:0xe82512,emissiveIntensity:2,roughness:.15});jewel.name='pilot-jewel';cyl(chassis,.055,.025,panelW*.46,panelY,z+.05,chrome,true);cyl(chassis,.038,.03,panelW*.46,panelY,z+.071,jewel,true);
  if(twin)for(const side of [-1,1]){box(cab,.045,h*.67,.07,side*(w/2+.025),-.08,-.14,chrome,.01);cyl(cab,.045,.025,side*(w/2+.05),h*.26,-.14,chrome,true);}
 }else{
  box(chassis,w*.78,.05,.39,0,h/2+.015,-d*.28,chrome);
  const topMap=canvasMap(1200,210,(x,W,H)=>{x.fillStyle='#c3c5bc';x.fillRect(0,0,W,H);x.fillStyle='#171917';x.font='bold 23px Arial';x.textAlign='center';['TONE','INST. VOL.','MIC. VOL.','INSTRUMENT','MIC'].forEach((l,i)=>x.fillText(l,130+i*205,190));});const top=plane(chassis,w*.78,.39,0,h/2+.046,-d*.28,topMap);top.rotation.x=-Math.PI/2;
  for(let i=0;i<3;i++){const x=-w*.29+i*w*.135;cyl(chassis,.08,.075,x,h/2+.09,-d*.28,black);const k=box(chassis,.055,.035,.20,x,h/2+.14,-d*.28,black,.016);k.rotation.y=-.65+i*.3;box(chassis,.012,.008,.13,x,h/2+.162,-d*.28,mat(0xddd4b5),.002);}
  for(const x of [w*.13,w*.25])for(const zz of [-d*.20,-d*.35]){cyl(chassis,.045,.02,x,h/2+.06,zz,chrome);cyl(chassis,.025,.025,x,h/2+.074,zz,black);}
  const jewel=mat(0xac1512,{emissive:0xd92b15,emissiveIntensity:2});jewel.name='pilot-jewel';cyl(chassis,.04,.04,w*.34,h/2+.07,-d*.28,jewel);
 }
 // The selected reference assemblies use the same parts as the component library.
 if(profile){
  for(const child of [...chassis.children]){chassis.remove(child);disposeObject(child);}
  const plate=createFaceplate(profile.panel);plate.scale.setScalar(MM);
  if(tweed){plate.rotation.set(-Math.PI/2,0,Math.PI);plate.position.set(0,h/2+.02,-d*.28);}
  else plate.position.set(0,h/2-.14-ph/2,z+.012);
  chassis.add(plate);
  if(profile.id==='deluxe-5e3'){
   amp.userData.exploration='tweed-hotspots-v1';amp.userData.controlPanelY=h/2;
   for(const [id,x] of [['tone',TWEED_PANEL.knobs[0]],['volumes',(TWEED_PANEL.knobs[1]+TWEED_PANEL.knobs[2])/2],['inputs',(TWEED_PANEL.jacks[0][0]+TWEED_PANEL.jacks[2][0])/2]]){
    const point=new THREE.Object3D();point.position.set(x-assetById(profile.panel).dimensions.widthMm/2,0,25);point.userData={explorePart:id,explorePoint:true};point.name='hotspot-'+id;plate.add(point);
   }
  }
  for(let i=0;i<profile.speakerCount;i++){const speaker=createSpeaker(profile.speaker);speaker.scale.setScalar(MM);speaker.position.set(profile.speakerCount===2?(i?1:-1)*w*.235:0,-.23,z-.17);speaker.userData.explorePart='speakers';cab.add(speaker);}
  if(profile.speakerCount===2){const wireMat=mat(0xc5b486);for(const side of [-1,1]){const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(side*w*.235+.20,-.77,z-.42),new THREE.Vector3(side*w*.18,-h*.30,z-.62),new THREE.Vector3(0,-h*.28,-d*.25)]);cab.add(new THREE.Mesh(new THREE.TubeGeometry(curve,20,.009,5,false),wireMat));}}
  amp.userData.assemblyId=profile.id;
 }else{
 // Open-back speaker baskets, appropriate one- or two-speaker layout.
 const speakerCount=a.speakers.startsWith('2')?2:a.speakers.startsWith('4')?4:1;
 for(let i=0;i<speakerCount;i++){const sx=speakerCount>1?(i%2?1:-1)*w*.235:0,sy=speakerCount===4?(i<2?-.3:h*.22):-.22;const radius=speakerCount===4?w*.205:Math.min(h*.36,w/(speakerCount===2?4.4:2.6));
  cyl(cab,radius,.05,sx,sy,z-.27,dark,true);const cone=new THREE.Mesh(new THREE.CylinderGeometry(radius*.35,radius*.94,.30,32,1,true),black);cone.rotation.x=Math.PI/2;cone.position.set(sx,sy,z-.44);cab.add(cone);cyl(cab,radius*.34,.22,sx,sy,z-.65,dark,true);
  for(let n=0;n<6;n++){const angle=n*Math.PI/3;const spoke=box(cab,.05,radius*.80,.06,sx+Math.sin(angle)*radius*.56,sy+Math.cos(angle)*radius*.56,z-.56,dark,.008);spoke.rotation.z=-angle;}
 }
 }
 if(front)for(const x of [-w*.43,w*.43]){box(cab,.10,.018,d*.75,x,h/2+.016,0,chrome,.006);for(const zz of [-d*.30,d*.30])cyl(cab,.018,.012,x,h/2+.033,zz,chrome);}
 box(chassis,w*.82,.22,.44,0,h/2-.35,-d*.20,chrome);
 const educationalTweed=profile?.id==='deluxe-5e3';
 const educationalTwin=profile?.id==='twin-reverb-early',educationalDeluxe=profile?.id==='deluxe-reverb-black',explorable=educationalTwin||educationalDeluxe;
 const tubes=tweed?5:twin?10:9,powerGroup=new THREE.Group(),rectifierGroup=new THREE.Group();chassis.add(powerGroup);if(!educationalTweed)powerGroup.userData.explorePart='power-tubes';powerGroup.userData.exploreOffset=[0,-.18,-.06];
 if(educationalDeluxe){chassis.add(rectifierGroup);rectifierGroup.userData.explorePart='rectifier';rectifierGroup.userData.exploreOffset=[0,-.18,-.06];}
 for(let i=0;i<(educationalTweed?0:tubes);i++){
  const power=explorable&&i>=6&&(!educationalDeluxe||i<8),rectifier=educationalDeluxe&&i===8;
  const parent=power?powerGroup:rectifier?rectifierGroup:chassis;
  const x=explorable?(i<6?-w*.34+i*w*.067:rectifier?w*.34:w*.10+(i-6)*w*.075):(i-(tubes-1)/2)*w*.07;
  const y=h/2-(power||rectifier?.72:.62),glass=mat(0x9d9280,{transparent:true,opacity:.46,metalness:.25,roughness:.2});
  cyl(parent,power||rectifier?.075:.05,power||rectifier?.45:explorable?.23:i<3?.23:.32,x,y,-d*.25,glass);
  if(power||rectifier)cyl(parent,.079,.065,x,h/2-.46,-d*.25,black);
  const glow=mat(0xe19743,{emissive:0xdc5515,emissiveIntensity:1.3});glow.name='tube-filament';cyl(parent,.009,.14,x,y,-d*.25,glow);
 }
 if(educationalTweed){
  // Rear socket order follows Fender's layout; spacing/envelopes remain estimates.
  for(const [kind,x,id] of [['5Y3GT',.31,'rectifier'],['6V6GT',.15,'power-tubes'],['6V6GT',0,null],['12AX7',-.22,'phase-inverter'],['12AY7',-.34,'preamp']]){
   const large=!kind.startsWith('12'),g=new THREE.Group();g.name=kind;if(id)g.userData.explorePart=id;
   g.position.set(w*x,h/2-(large?.80:.73),-d*.25);chassis.add(g);
   cyl(g,large?.077:.05,large?.43:.25,0,0,0,mat(0x9d9280,{transparent:true,opacity:.46,roughness:.2,metalness:.25}));
   cyl(g,large?.08:.055,.055,0,large?.23:.14,0,black);
   const glow=mat(0xe19743,{emissive:0xdc5515,emissiveIntensity:1.3});glow.name='tube-filament';cyl(g,.009,.12,0,0,0,glow);
  }
  // Conceptual output-transformer marker: no claim of measured specimen position.
  const transformer=new THREE.Group();transformer.name='5E3-output-transformer-estimate';transformer.userData.explorePart='output-transformer';chassis.add(transformer);
  box(transformer,.32,.26,.32,w*.25,h*.12,d*.06,dark,.02);
  for(let i=0;i<7;i++)box(transformer,.33,.012,.33,w*.25,h*.12-.10+i*.032,d*.06,chrome,.002);
 }
 if(explorable){
  // Provisional teaching envelopes, not an audited chassis layout.
  const transformer=new THREE.Group();transformer.userData.explorePart='output-transformer';transformer.userData.exploreOffset=[0,-.16,-.25];chassis.add(transformer);
  const tw=educationalTwin?.57:.45;
  box(transformer,tw,.38,.50,-w*.12,h/2-.67,d*.08,dark,.02);
  for(const side of [-1,1])box(transformer,.10,.40,.53,-w*.12+side*(tw/2-.025),h/2-.67,d*.08,black,.03);
  for(let i=0;i<8;i++)box(transformer,tw-.20,.012,.51,-w*.12,h/2-.83+i*.044,d*.08,chrome,.002);
  amp.userData.exploration=educationalTwin?'twin-hotspots-v2':'deluxe-hotspots-v1';
  const anchor=(id,x,y,zz)=>{const o=new THREE.Object3D();o.name='hotspot-'+id;o.position.set(x,y,zz);o.userData.explorePart=id;o.userData.explorePoint=true;amp.add(o);};
  const panel=educationalTwin?TWIN_PANEL:DELUXE_PANEL,panelWidth=assetById(profile.panel).dimensions.widthMm;
  const controlX=x=>(x/panel.widthMm-.5)*panelWidth*MM,panelY=h/2-.14-ph/2;
  anchor('inputs',controlX((panel.jacks[0]+panel.jacks[1])/2),panelY,z+.075);
  anchor('reverb',controlX(panel.knobs[educationalTwin?8:6]),panelY,z+.15);
  anchor('vibrato',controlX((panel.knobs[educationalTwin?9:7]+panel.knobs[educationalTwin?10:8])/2),panelY,z+.15);
  anchor('grille-cloth',-w*.22,-h*.12,z-.015);
  if(educationalTwin)anchor('drip-edge',(w-.30)/2,-h*.10,z+.025);
  else anchor('bright-cap',controlX(panel.knobs[3]),panelY,z+.15);
 }
 if(profile){const handle=createHandle(profile.handle);handle.scale.setScalar(MM);handle.rotation.x=-Math.PI/2;handle.position.set(0,h/2+.025,.10);cab.add(handle);}else{
 const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(-.6,h/2+.07,.12),new THREE.Vector3(-.4,h/2+.19,.12),new THREE.Vector3(.4,h/2+.19,.12),new THREE.Vector3(.6,h/2+.07,.12)]);const handle=new THREE.Mesh(new THREE.TubeGeometry(curve,24,.055,8,false),leather);handle.scale.z=1.6;cab.add(handle);
 for(const x of [-.63,.63]){box(cab,.22,.04,.22,x,h/2+.04,.12,chrome);cyl(cab,.023,.012,x,h/2+.07,.12,chrome);}
 }
 for(const x of [-w*.40,w*.40])for(const zz of [-d*.32,d*.32])cyl(cab,.075,.09,x,-h/2-.045,zz,black);
 return amp;
}
