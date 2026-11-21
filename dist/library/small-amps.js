import * as THREE from 'three';
import {assetById} from './catalog.js';
import {EXPLORER_ANCHORS} from './explorer-anchors.js';
import {SMALL_PANELS} from './small-amp-profiles.js';
import {REAR_PANELS} from './rear-profiles.js';
import {createRearChassis} from './rear-chassis.js';
import {MM,createSpeaker,createFaceplate,createBadge,createHandle,createScrew} from './parts.js';
import {createMaterial,physicalUV} from './materials.js';
// Shared cabinet factory for the small-amp studies. Dimensions are mm;
// decorative offsets, hardware locations and internal envelopes remain estimates.
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.65,...extra});
function box(parent,w,h,d,x,y,z,material){
 const r=Math.min(4,w/4,h/4,d/4),s=new THREE.Shape(),left=-w/2,bottom=-h/2;
 s.moveTo(left+r,bottom);s.lineTo(left+w-r,bottom);s.quadraticCurveTo(left+w,bottom,left+w,bottom+r);s.lineTo(left+w,bottom+h-r);s.quadraticCurveTo(left+w,bottom+h,left+w-r,bottom+h);s.lineTo(left+r,bottom+h);s.quadraticCurveTo(left,bottom+h,left,bottom+h-r);s.lineTo(left,bottom+r);s.quadraticCurveTo(left,bottom,left+r,bottom);
 const g=new THREE.ExtrudeGeometry(s,{depth:d-2*r,bevelEnabled:true,bevelSize:r,bevelThickness:r,bevelSegments:3,curveSegments:5});g.translate(0,0,-d/2+r);
 const o=new THREE.Mesh(g,material);o.position.set(x,y,z);parent.add(o);if(material.userData.tileMm)physicalUV(o);return o;
}
function cylinder(parent,r,h,x,y,z,material){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,32),material);o.position.set(x,y,z);parent.add(o);return o;}
function slot(path,x,y,w,h){const r=h/2;path.moveTo(x+r,y);path.lineTo(x+w-r,y);path.absarc(x+w-r,y+r,r,-Math.PI/2,Math.PI/2,false);path.lineTo(x+r,y+h);path.absarc(x+r,y+r,r,Math.PI/2,Math.PI*1.5,false);path.closePath();}
function rearPanel(parent,W,H,z,bottom,cover,vents=false,notch=false,cut=null){
 const s=new THREE.Shape();s.moveTo(-W/2,bottom);s.lineTo(W/2,bottom);s.lineTo(W/2,bottom+H);
 if(cut){s.lineTo(W*cut.notchOuter,bottom+H);s.lineTo(W*cut.notchInner,bottom+H-cut.notchDepth);s.lineTo(-W*cut.notchInner,bottom+H-cut.notchDepth);s.lineTo(-W*cut.notchOuter,bottom+H);}
 else if(notch){s.lineTo(W*.33,bottom+H);s.lineTo(W*.27,bottom+H-27);s.lineTo(-W*.27,bottom+H-27);s.lineTo(-W*.33,bottom+H);}
 s.lineTo(-W/2,bottom+H);s.closePath();
 if(vents)for(const sign of [-1,1]){const hole=new THREE.Path();slot(hole,sign<0?-W*.39:W*.075,bottom+19,W*.315,25);s.holes.push(hole);}
 const geo=new THREE.ExtrudeGeometry(s,{depth:9,bevelEnabled:true,bevelSize:1.5,bevelThickness:1,bevelSegments:2,curveSegments:16});const panel=new THREE.Mesh(geo,cover);panel.position.z=z;physicalUV(panel);panel.userData.rearPanel=true;parent.add(panel);
 for(const x of [-W/2+12,W/2-12])for(const y of [bottom+12,bottom+H-12]){const screw=createScrew();screw.rotation.y=Math.PI;screw.position.set(x,y,z-2);parent.add(screw);}
}
export function createSmallAmp(profile){
 const amp=new THREE.Group(),body=new THREE.Group();amp.add(body);body.scale.setScalar(MM);amp.rotation.y=-.2;
 const [W,H,D]=profile.dimensionsMm,t=16,tweed=profile.finish==='tweed',champ=profile.id==='champ-5f1',trem=profile.id==='tremolux-5e9',princeton=profile.id==='princeton-reverb-aa1164',rear=REAR_PANELS[profile.id];
 const cover=createMaterial(profile.cover),cloth=createMaterial(profile.cloth),wood=mat('#715030'),metal=mat('#acb0a7',{metalness:.82,roughness:.31}),black=mat('#171816');
 // Side walls and bottom; the top-facing panels sit in a real rear recess.
 for(const side of [-1,1])box(body,t,H,D,side*(W-t)/2,0,0,cover);
 box(body,W-2*t,t,D,0,-(H-t)/2,0,cover);
 if(tweed){
  box(body,W-2*t,t,D*.58,0,(H-t)/2,D*.21,cover);
  box(body,W-2*t,t,D*.08,0,(H-t)/2,-D*.46,cover);
  const panelWidth=champ?210:408,wing=(W-2*t-panelWidth)/2;
  for(const side of [-1,1])box(body,wing,t,D*.34,side*(panelWidth+wing)/2,(H-t)/2,-D*.25,cover);
 }else box(body,W-2*t,t,D,0,(H-t)/2,0,cover);
 const topRail=tweed?(champ?43:37):69,bottomRail=tweed?34:20,grilleH=H-topRail-bottomRail,grilleY=(bottomRail-topRail)/2;
 box(body,W-2*t,grilleH,9,0,grilleY,D/2-21,wood);
 const grille=box(body,W-2*t-6,grilleH-5,2,0,grilleY,D/2-14,cloth);grille.name='grille-cloth';
 if(tweed){box(body,W-2*t,topRail,14,0,(H-topRail)/2,D/2-7,cover);box(body,W-2*t,bottomRail,14,0,-(H-bottomRail)/2,D/2-7,cover);}
 else{
  for(const sx of [-1,1])box(body,2,grilleH+3,2,sx*(W/2-t-2),grilleY,D/2-10,mat('#ccb990'));
 }
 if(profile.badge){const badge=createBadge(profile.badge);badge.position.set(tweed?0:-W/2+91,tweed?H/2-topRail/2:H/2-topRail-42,D/2+1);body.add(badge);}
 const plate=createFaceplate(profile.panel);
 if(tweed){plate.rotation.set(-Math.PI/2,0,Math.PI);plate.position.set(0,H/2-7,-D*.28);}
 else{plate.position.set(0,H/2-41,D/2-10);plate.rotation.x=-.10;}
 body.add(plate);
 // A continuous rear opening, with amp-specific removable panels.
 const innerW=W-2*t-5,upper=rear?H*rear.upperRatio:champ?H*.43:trem?H*.43:H*.27;
 rearPanel(body,innerW,upper,-D/2+2,H/2-upper-t,cover,trem,false,rear);
 rearPanel(body,innerW,rear?H*rear.lowerRatio:champ?H*.16:H*.24,-D/2+2,-H/2+t,cover,false,!champ&&!rear);
 if(rear){
  const strip=createRearChassis(profile.id);strip.rotation.y=Math.PI;strip.position.set(0,H/2-38,-D/2+4);body.add(strip);
  const jackX=rear.width/2-rear.controls.find(([kind])=>kind==='speaker')[1];
  for(const sign of [-1,1]){
   const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(jackX+sign*1.1,H/2-36,-D/2-8),new THREE.Vector3(jackX+sign*1.1,H/2-76,-D/2-16),new THREE.Vector3(jackX+18+sign*1.1,10,-D*.22),new THREE.Vector3(profile.speakerOffset[0]*W+70+sign*1.1,profile.speakerOffset[1]*H-55,D/2-62)]);
   const lead=new THREE.Mesh(new THREE.TubeGeometry(curve,30,1,6,false),mat(sign<0?'#242624':'#c5b384'));lead.name='speaker-lead-estimate';body.add(lead);
  }
 }

 const speaker=createSpeaker(profile.speaker);speaker.position.set(profile.speakerOffset[0]*W,profile.speakerOffset[1]*H,D/2-27);body.add(speaker);
 // Tube counts follow visible tube chart / chassis evidence. Positions are explanatory.
 const tubes=[];
 const tubeX=princeton?[-W*.34,-W*.23,-W*.12,W*.04,W*.14,W*.26,W*.37]:champ?[-W*.30,-W*.11,W*.25]:[-W*.34,-W*.21,-W*.08,W*.13,W*.25,W*.36];
 box(body,W-2*t-12,40,55,0,H/2-57,-D*.23,metal);
 for(const [i,kind] of profile.tubeKinds.entries()){
  const large=kind!=='preamp',length=princeton?(i===0?82:large?68:46):large?72:48,x=-tubeX[i],drop=trem?150:princeton?58:rear?60:105,y=H/2-drop-length/2;
  const tube=new THREE.Group();tubes.push(tube);tube.name=profile.tubeTypes?.[i]||kind;tube.userData.anchorMm=[x,y-length*.32,-D*.24-12];body.add(tube);
  cylinder(tube,large?12:9,7,x,H/2-drop,-D*.24,black);
  const glass=mat(large?'#a39c87':'#b4b6aa',large?{transparent:true,opacity:.52,roughness:.2}:{metalness:.75,roughness:.32});
  cylinder(tube,large?11:8,length,x,y,-D*.24,glass);
  if(large)cylinder(tube,2,length*.6,x,y,-D*.24,mat('#77736a'));
 }
 // Unlabelled transformer envelope; not a measured or authenticated part number.
 box(body,champ?40:61,46,50,(tweed||princeton?1:-1)*W*.28,H/2-95,D*.02,black);
 if(princeton){
  const filter=cylinder(body,14,53,W*.16,H/2-103,D*.01,metal);filter.name='filter-can-estimate';
  const output=box(body,39,38,40,W*.06,H/2-100,D*.07,mat('#9a8b56',{metalness:.7}));output.name='output-transformer-estimate';
  const reverb=box(body,25,31,28,-W*.20,H/2-94,-D*.11,metal);reverb.name='reverb-transformer-estimate';
  const tank=box(body,310,23,88,0,-H/2+32,-D*.06,black);tank.name='reverb-tank-envelope-estimate';
  // Hardware placement and floor tank envelope are not measured from a factory drawing.
  for(const x of [-W*.40,W*.40]){box(body,11,2,D*.72,x,H/2+1,0,metal);for(const z of [-D*.29,D*.29]){const screw=createScrew();screw.rotation.x=-Math.PI/2;screw.position.set(x,H/2+3,z);body.add(screw);}}
 }

 const handle=createHandle(profile.handle);handle.rotation.x=-Math.PI/2;handle.scale.x=profile.handleSpan/185;handle.position.set(0,H/2+2,D*.12);body.add(handle);
 for(const x of [-W*.39,W*.39])for(const z of [-D*.33,D*.33])cylinder(body,9,8,x,-H/2-4,z,tweed?black:metal);
 amp.userData={assemblyId:profile.id,modelProfile:profile.example,dimensionsBasis:profile.dimensionsStatus,dimensionsMm:profile.dimensionsMm,construction:'Exterior study; interior envelopes and placements estimated',revision:rear?'1.1':'1.0',rectifierBasis:profile.rectifierBasis||null};
 const topics=EXPLORER_ANCHORS[profile.id];
 if(topics){
  const layout=SMALL_PANELS[profile.panel];
  for(const [id,target] of Object.entries(topics)){
   if(target.knob!==undefined){const anchor=new THREE.Object3D();anchor.name=`explore-${id}`;anchor.position.set(layout.knobs[target.knob]-layout.width/2,0,18);anchor.userData={explorePart:id,explorePoint:true,placement:'Shared hardware center; panel spacing estimated'};plate.add(anchor);}
   else {const object=target.speaker?speaker:target.tube!==undefined?tubes[target.tube]:body;const anchor=new THREE.Object3D();anchor.name=`explore-${id}`;anchor.userData={explorePart:id,explorePoint:true,placement:'Estimated construction location',menuOnly:!!target.menuOnly};if(target.speaker)anchor.position.set(0,0,-assetById(profile.speaker).build.depth-9);else if(target.tube!==undefined){anchor.position.fromArray(object.userData.anchorMm);}else anchor.position.set(0,H/2-60,-D*.24);object.add(anchor);}
  }
  amp.userData.exploration='small-hotspots-v1';amp.userData.controlPanelY=H/2*MM;
 }
 return amp;
}
