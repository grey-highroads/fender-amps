import * as THREE from 'three';
import {MM,createSpeaker,createFaceplate,createBadge,createHandle,createScrew,createJack,createCaster} from './parts.js';
import {createMaterial,physicalUV} from './materials.js';
import {COMBO_PANELS} from './combo-profiles.js';
import {label,drawArtwork} from './panel-lettering.js';
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.65,...extra});
function box(p,w,h,d,x,y,z,m,name=''){
 const r=Math.min(4,w/4,h/4,d/4),s=new THREE.Shape();w-=2*r;h-=2*r;
 s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
 const g=new THREE.ExtrudeGeometry(s,{depth:d-2*r,bevelEnabled:true,bevelSize:r,bevelThickness:r,bevelSegments:3,curveSegments:5});g.translate(0,0,-d/2+r);
 const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.name=name;p.add(o);if(m.userData.tileMm)physicalUV(o);return o;
}
function cylinder(p,r,h,x,y,z,m){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,28),m);o.position.set(x,y,z);p.add(o);return o;}
function plate(p,w,h,d,x,y,z,m,holes=[],name=''){
 const s=new THREE.Shape();s.moveTo(-w/2,-h/2);s.lineTo(w/2,-h/2);s.lineTo(w/2,h/2);s.lineTo(-w/2,h/2);s.closePath();
 for(const hole of holes)s.holes.push(hole);
 const o=new THREE.Mesh(new THREE.ExtrudeGeometry(s,{depth:d,bevelEnabled:false,curveSegments:48}),m);o.position.set(x,y,z);o.name=name;p.add(o);if(m.userData.tileMm)physicalUV(o);return o;
}
function capsule(x,y,w,h){const p=new THREE.Path(),r=h/2;p.moveTo(x-w/2+r,y-r);p.lineTo(x+w/2-r,y-r);p.absarc(x+w/2-r,y,r,-Math.PI/2,Math.PI/2,false);p.lineTo(x-w/2+r,y+r);p.absarc(x-w/2+r,y,r,Math.PI/2,Math.PI*1.5,false);p.closePath();return p;}
function rearBoard(p,w,h,y,z,m,holes=[]){
 const o=plate(p,w,h,9,0,y,z,m,holes,'removable-rear-board');o.userData.rearPanel=true;
 for(const x of [-w/2+12,w/2-12])for(const yy of [y-h/2+12,y+h/2-12]){const s=createScrew();s.rotation.y=Math.PI;s.position.set(x,yy,z-1);p.add(s);}return o;
}
const rearControls={
 'super-six-reverb-1972':[['outlet',24,'AC'],['toggle',69,'GROUND'],['fuse',108,'FUSE'],['toggle',153,'POWER'],['toggle',194,'STANDBY'],['jack',258,'SPEAKER'],['jack',299,'EXT SPKR'],['jack',377,'VIBRATO'],['jack',419,'REVERB'],['rca',475,'REV OUT'],['rca',515,'REV IN']],
 'prosonic-1996':[['cord',17,''],['toggle',54,'POWER'],['fuse',94,'FUSE'],['toggle',137,'STANDBY'],['rotary',190,'BIAS/RECTIFIER'],['jack',253,'SPEAKER'],['jack',294,'EXT SPKR'],['jack',353,'FOOTSWITCH'],['jack',410,'RETURN'],['jack',455,'SEND']]
};
function rearStrip(p,id,W,H,D,metal){
 const controls=rearControls[id],w=W-76,h=48,g=new THREE.Group();g.name='rear-controls-'+id;g.rotation.y=Math.PI;g.position.set(0,H/2-42,-D/2+3);p.add(g);
 box(g,w,h,2,0,0,0,metal);
 const paths=[];for(const [kind,x,text]of controls)if(text)label(paths,text,x,h-4,2.5,{width:kind==='rotary'?64:39,weight:.12});
 if(id==='prosonic-1996'){label(paths,'A/TUBE - AB/TUBE - AB/SS',190,5,1.8,{width:95,weight:.1});label(paths,'PROSONIC',w-28,6,3,{width:51});}
 const c=document.createElement('canvas');c.width=4096;c.height=Math.round(4096*h/w);drawArtwork(c,{width:w,height:h,background:'#151918',ink:'#e2dfcc',paths});const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
 const ink=new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat('#fff',{map}));ink.position.z=1.2;g.add(ink);
 for(const [kind,x,text]of controls){const X=x-w/2;
  if(kind==='jack'||kind==='rca'){const j=createJack();if(kind==='rca')j.scale.setScalar(.7);j.position.set(X,0,2);g.add(j);}
  else if(kind==='outlet')box(g,23,16,4,X,0,4,mat('#252725'));
  else if(kind==='cord'){const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(X,0,3),new THREE.Vector3(X-7,-35,20),new THREE.Vector3(X-20,-80,24)]);g.add(new THREE.Mesh(new THREE.TubeGeometry(curve,20,2.3,6,false),mat('#171b1a')));}
  else{const cap=cylinder(g,kind==='rotary'?9:5.5,kind==='toggle'?10:12,X,0,7,kind==='toggle'?metal:mat('#212624'));cap.rotation.x=Math.PI/2;cap.name=text;}
 }
}
function wire(p,points,color='#b6af8b',name='speaker-lead-estimate'){const c=new THREE.CatmullRomCurve3(points.map(v=>new THREE.Vector3(...v)));const m=new THREE.Mesh(new THREE.TubeGeometry(c,28,1.1,6,false),mat(color));m.name=name;p.add(m);}
export function createComboAmp(a){
 const amp=new THREE.Group(),b=new THREE.Group();b.scale.setScalar(MM);amp.add(b);amp.rotation.y=-.2;
 const [W,H,D]=a.dimensionsMm,t=16,junior=a.topPanel,six=a.caster,cover=createMaterial(a.cover),cloth=createMaterial(a.cloth),metal=mat('#b7b9af',{metalness:.83,roughness:.32}),dark=mat('#202725'),wood=mat('#6d5338');
 // Separate walls; each cabinet is generated at its documented physical envelope.
 for(const x of [-(W-t)/2,(W-t)/2])box(b,t,H,D,x,0,0,cover,'cabinet-side');
 box(b,W-2*t,t,D,0,-(H-t)/2,0,cover,'cabinet-floor');
 if(junior){
  const pw=COMBO_PANELS[a.panel].width,pd=65,cz=-D*.30;
  for(const [near,far]of [[-D/2,cz-pd/2],[cz+pd/2,D/2]])box(b,W-2*t,t,far-near,0,(H-t)/2,(far+near)/2,cover);
  const wing=(W-2*t-pw)/2;for(const sign of [-1,1])box(b,wing,t,pd,sign*(pw+wing)/2,(H-t)/2,cz,cover);
 }else box(b,W-2*t,t,D,0,(H-t)/2,0,cover,'cabinet-roof');
 const gh=H-a.topRail-a.bottomRail,gy=(a.bottomRail-a.topRail)/2;
 const holes=a.speakerPositions.map(([x,y])=>{const p=new THREE.Path();p.absarc(x,y-gy,a.speakerCount===1?143:119,0,Math.PI*2,true);return p;});
 plate(b,W-2*t,gh,9,0,gy,D/2-28,wood,holes,'speaker-baffle-with-openings');
 const grille=box(b,W-2*t-5,gh-4,2,0,gy,D/2-15,cloth,'grille-cloth');
 for(const side of [-1,1]){
  box(b,2,gh,2,side*(W/2-t-1),gy,D/2-12,metal);
  box(b,W-2*t,2,2,0,gy+side*gh/2,D/2-12,metal);
 }
 box(b,W-2*t,a.topRail-10,16,0,H/2-(a.topRail-10)/2,D/2-(junior?10:24),cover,'upper-front-rail');
 box(b,W-2*t,a.bottomRail,16,0,-H/2+a.bottomRail/2,D/2-8,cover,'lower-front-rail');
 if(junior)for(const x of [-W*.39,W*.39])for(const y of [H/2-24,-H/2+16]){const screw=createScrew();screw.position.set(x,y,D/2+1);b.add(screw);}
 const panel=createFaceplate(a.panel);
 if(junior){panel.rotation.set(-Math.PI/2,0,Math.PI);panel.position.set(0,H/2-6,-D*.30);}
 else panel.position.set(0,H/2-39,D/2-8);
 b.add(panel);
 const badge=createBadge(a.badge);badge.position.set(junior?0:-W/2+99,junior?H/2-22:H/2-a.topRail-45,D/2+1);b.add(badge);
 for(const [i,[x,y]]of a.speakerPositions.entries()){
  const speaker=createSpeaker(a.speaker);speaker.position.set(x,y,D/2-29);speaker.name='speaker-'+(i+1);speaker.userData.speakerIndex=i;b.add(speaker);
 }
 // Back boards differ materially: capsule tube window vs sloping service cutout.
 if(junior){rearBoard(b,W-2*t-4,a.rearUpper,H/2-t-a.rearUpper/2,-D/2+1,cover,[capsule(-49,-72,209,39)]);}
 else{
  const h=a.rearUpper,w=W-2*t-4,y=H/2-t-h/2,shape=new THREE.Shape();
  shape.moveTo(-w/2,-h/2);shape.lineTo(w/2,-h/2);shape.lineTo(w/2,h/2);shape.lineTo(w*.46,h/2);shape.lineTo(w*.38,h/2-61);shape.lineTo(-w*.38,h/2-61);shape.lineTo(-w*.46,h/2);shape.lineTo(-w/2,h/2);shape.closePath();
  const back=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:9,bevelEnabled:false}),cover);back.position.set(0,y,-D/2+1);back.name='upper-sloped-rear-board';back.userData.rearPanel=true;physicalUV(back);b.add(back);
  rearStrip(b,a.id,W,H,D,metal);
 }
 rearBoard(b,W-2*t-4,a.rearLower,-H/2+t+a.rearLower/2,-D/2+1,cover);
 // Metal chassis and tubes. Exact tube/socket positions are explanatory estimates.
 box(b,W-67,junior?180:45,junior?22:67,0,H/2-(junior?112:62),-D/2+(junior?30:52),metal,'chassis-envelope-estimate');
 const n=a.tubeTypes.length;
 for(const [i,type]of a.tubeTypes.entries()){
  const large=!type.startsWith('12')&&type!=='7025',r=type==='EL84'?9:large?12:8,length=type==='EL84'?66:large?78:44;
  const x=junior?48-i*36:-W*.36+i*(W*.72/(n-1)),socketY=junior?H/2-205:H/2-83,z=-D/2+45;
  const tube=new THREE.Group();tube.name=type;tube.userData.tubeType=type;b.add(tube);
  cylinder(tube,r+1,7,x,socketY,z,dark);cylinder(tube,r,length,x,socketY-length/2,z,mat('#9c9e8e',{transparent:true,opacity:.32,roughness:.2}));cylinder(tube,r*.65,length*.76,x,socketY-length/2,z,dark);
 }
 const tank=box(b,Math.min(W-75,390),23,85,0,-H/2+32,-7,dark,'reverb-tank-envelope-estimate');
 box(b,67,57,58,W*.29,H/2-(junior?260:108),-D*.08,dark,'power-transformer-envelope-estimate');
 box(b,44,42,43,-W*.17,H/2-(junior?230:102),-D*.01,metal,'output-transformer-envelope-estimate');
 const zp=D/2-75;
 if(six){
  // Three series pairs in parallel. Wires follow the declared educational topology.
  for(let row=0;row<3;row++){const y=a.speakerPositions[row*2][1];wire(b,[[-130,y-65,zp],[0,y-100,zp-20],[180,y-65,zp]]);}
  for(const [x,color]of [[-130,'#282d2a'],[180,'#c4bb98']])wire(b,[[x,230,zp],[x,0,zp-18],[x,-380,zp],[x+30,-405,zp-24],[0,H/2-95,-D/2+30]],color);
 }else if(a.speakerCount===2){wire(b,[[-120,-100,zp],[0,-145,zp-20],[170,-100,zp]]);for(const x of [-120,170])wire(b,[[x,-100,zp],[x,-155,0],[0,H/2-90,-D/2+30]]);}
 else for(const [x,color]of [[45,'#282d2a'],[49,'#c4bb98']])wire(b,[[x,-90,zp],[x+30,-140,0],[W*.2,H/2-190,-D/2+40]],color);
 if(six){for(const sign of [-1,1]){const handle=createHandle(a.handle);handle.rotation.y=sign*Math.PI/2;handle.rotation.z=Math.PI/2;handle.position.set(sign*(W/2+2),H*.12,0);b.add(handle);}}
 else {const handle=createHandle(a.handle);handle.rotation.x=-Math.PI/2;handle.position.set(0,H/2+2,D*.12);b.add(handle);}
 if(!junior)for(const x of [-W*.41,W*.41]){box(b,11,2,D*.72,x,H/2+1,0,metal);for(const z of [-D*.29,D*.29]){const screw=createScrew();screw.rotation.x=-Math.PI/2;screw.position.set(x,H/2+3,z);b.add(screw);}}
 for(const x of [-W*.39,W*.39])for(const z of [-D*.32,D*.32]){if(six){const caster=createCaster();caster.position.set(x,-H/2,z);b.add(caster);}else cylinder(b,9,8,x,-H/2-4,z,dark);}
 // Small separate corner-protector surfaces, rather than molding them into covering.
 if(!junior)for(const sx of [-1,1])for(const sy of [-1,1])for(const sz of [-1,1]){box(b,24,24,2,sx*(W/2-13),sy*(H/2-13),sz*(D/2+1),metal,'corner-protector');box(b,2,24,24,sx*(W/2+1),sy*(H/2-13),sz*(D/2-13),metal);}
 if(junior){
  const paths=[];label(paths,'BLUES JUNIOR',70,10,8,{width:120});label(paths,'TYPE PR 295',70,35,3,{width:105});label(paths,'FENDER - MADE IN USA',70,47,2.4,{width:120});const c=document.createElement('canvas');c.width=1024;c.height=440;drawArtwork(c,{width:140,height:60,background:'#a7aaa1',ink:'#232826',paths});const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;const tag=new THREE.Mesh(new THREE.PlaneGeometry(140,60),mat('#fff',{map}));tag.rotation.y=Math.PI;tag.position.set(75,H/2-77,-D/2);tag.name='rear-identification-study';b.add(tag);
 }
 amp.userData={assemblyId:a.id,modelProfile:a.example,dimensionsBasis:a.dimensionsStatus,dimensionsMm:a.dimensionsMm,construction:'Educational construction; hardware and interior placement estimated',batchFit:six?.65:1,revision:'1.0',rectifierBasis:a.rectifierBasis};return amp;
}
