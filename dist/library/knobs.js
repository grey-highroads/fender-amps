import * as THREE from '../vendor/three.module.js';
import {SKIRTED_KNOB as K,KNOB_DIGITS,knobAngleForSetting} from './knob-profile.js';

function lathe(profile,segments=240){const geometry=new THREE.LatheGeometry(profile.map(([r,z])=>new THREE.Vector2(r,z)),segments);geometry.rotateX(Math.PI/2);return geometry;}
export function createKnobBodyGeometry(){
 const geometry=lathe(K.profile,K.flutes*20),positions=geometry.attributes.position;
 for(let i=0;i<positions.count;i++){
  const x=positions.getX(i),y=positions.getY(i),z=positions.getZ(i),radius=Math.hypot(x,y);
  if(z<3.77||z>13.94||radius<5.7)continue;
  const angle=Math.atan2(y,x),edge=Math.min(1,(z-3.77)/.4,(13.94-z)/.6);
  const groove=Math.pow((1+Math.cos(angle*K.flutes))/2,3)*K.fluteDepthMm*Math.max(0,edge);
  const scale=(radius-groove)/radius;positions.setXY(i,x*scale,y*scale);
 }
 positions.needsUpdate=true;geometry.computeVertexNormals();return geometry;
}
export function createKnobInkGeometry(){const geometry=lathe(K.inkProfile);const p=geometry.attributes.position,uv=new Float32Array(p.count*2);for(let i=0;i<p.count;i++){uv[i*2]=.5+p.getX(i)/K.outerDiameterMm;uv[i*2+1]=.5+p.getY(i)/K.outerDiameterMm;}geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));return geometry;}
export function createKnobCapGeometry(){const profile=[];for(let i=0;i<=40;i++){const r=K.capRadiusMm*(1-i/40);profile.push([r,13.28+.70*Math.pow(r/K.capRadiusMm,2)]);}return lathe(profile,160);}
export function createKnobInsertGeometry(){return lathe([[3.175,.28],[3.175,9.6],[4.6,9.6],[4.6,.28],[3.175,.28]],96);}
function texture(canvas,color=false){const t=new THREE.CanvasTexture(canvas);if(color)t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;return t;}
function numberMap(){
 const c=document.createElement('canvas');c.width=c.height=1024;const x=c.getContext('2d'),scale=1024/K.outerDiameterMm;
 x.strokeStyle='#eee9d9';x.lineCap='round';x.lineJoin='round';
 for(let number=1;number<=10;number++){
  const angle=knobAngleForSetting(number),text=String(number),digitWidth=1.30*scale,digitGap=.17*scale,height=K.numberHeightMm*scale,total=text.length*digitWidth+(text.length-1)*digitGap;
  x.save();x.translate(512+Math.sin(angle)*K.numberRadiusMm*scale,512-Math.cos(angle)*K.numberRadiusMm*scale);x.rotate(angle+Math.PI);
  for(let i=0;i<text.length;i++){x.save();x.translate(-total/2+i*(digitWidth+digitGap),-height/2);x.scale(digitWidth,height);x.lineWidth=.145;x.stroke(new Path2D(KNOB_DIGITS[text[i]]));x.restore();}x.restore();
 }
 return texture(c,true);
}
function surfaceMaps(){
 const size=256,rough=document.createElement('canvas'),normal=document.createElement('canvas');rough.width=rough.height=normal.width=normal.height=size;
 const r=rough.getContext('2d').createImageData(size,size),n=normal.getContext('2d').createImageData(size,size);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4,dx=(x-size/2)/(size/2),dy=(y-size/2)/(size/2),rad=Math.hypot(dx,dy),grain=Math.sin(rad*2800)*.5+Math.sin(rad*710)*.25;const value=174+grain*8;r.data[i]=r.data[i+1]=r.data[i+2]=value;r.data[i+3]=255;n.data[i]=128+dx*grain*2;n.data[i+1]=128-dy*grain*2;n.data[i+2]=255;n.data[i+3]=255;}
 rough.getContext('2d').putImageData(r,0,0);normal.getContext('2d').putImageData(n,0,0);return {rough:texture(rough),normal:texture(normal)};
}
function projectCap(geometry){const p=geometry.attributes.position,uv=new Float32Array(p.count*2);for(let i=0;i<p.count;i++){uv[i*2]=.5+p.getX(i)/(K.capRadiusMm*2);uv[i*2+1]=.5+p.getY(i)/(K.capRadiusMm*2);}geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));return geometry;}
function add(parent,geometry,material,name){const m=new THREE.Mesh(geometry,material);m.name=name;parent.add(m);return m;}
export function createSkirtedKnob({setting=5}={}){
 const knob=new THREE.Group(),plastic=new THREE.MeshPhysicalMaterial({color:'#090b0c',metalness:0,roughness:.29,clearcoat:.7,clearcoatRoughness:.25,ior:1.49});
 add(knob,createKnobBodyGeometry(),plastic,'knob-molded-body');
 const ink=new THREE.MeshStandardMaterial({color:'#ffffff',map:numberMap(),transparent:true,alphaTest:.1,depthWrite:false,roughness:.66,polygonOffset:true,polygonOffsetFactor:-1});add(knob,createKnobInkGeometry(),ink,'knob-stamped-numbers');
 const maps=surfaceMaps(),metal=new THREE.MeshStandardMaterial({color:'#d0d2ce',metalness:1,roughness:.23,roughnessMap:maps.rough,normalMap:maps.normal,normalScale:new THREE.Vector2(.12,.12)});
 add(knob,projectCap(createKnobCapGeometry()),metal,'knob-recessed-silver-cap');
 // The insert is annular, so the 1/4-inch socket is a real opening in rear view.
 const insert=createKnobInsertGeometry();
 add(knob,insert,new THREE.MeshStandardMaterial({color:'#81704e',metalness:.7,roughness:.47,side:THREE.DoubleSide}),'knob-shaft-insert');
 const blind=new THREE.Mesh(new THREE.CircleGeometry(3.17,64),new THREE.MeshStandardMaterial({color:'#080a0a',roughness:.95}));blind.rotation.y=Math.PI;blind.position.z=9.65;blind.name='knob-bore-end';knob.add(blind);
 // Small, flush slotted set screw; the position at 10 follows the vintage-part seller's description.
 const screw=new THREE.Group(),angle=knobAngleForSetting(10),out=new THREE.Vector3(Math.sin(angle),Math.cos(angle),0);
 const washer=add(screw,new THREE.CircleGeometry(1.55,48),new THREE.MeshStandardMaterial({color:'#080909',roughness:.6}),'knob-screw-recess');washer.position.z=-.04;
 const head=add(screw,new THREE.CylinderGeometry(1.22,1.22,.3,48),new THREE.MeshStandardMaterial({color:'#a6adaa',metalness:.92,roughness:.3}),'knob-set-screw');head.rotation.x=Math.PI/2;head.position.z=.10;
 const slot=add(screw,new THREE.BoxGeometry(1.9,.24,.025),new THREE.MeshStandardMaterial({color:'#222724',roughness:.8}),'knob-set-screw-slot');slot.position.z=.264;slot.rotation.z=.35;
 screw.position.set(out.x*6.96,out.y*6.96,5.45);screw.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),out);knob.add(screw);
 knob.rotation.z=knobAngleForSetting(setting);knob.name='knob-skirted';knob.userData={componentId:'knob-skirted',revision:K.version,setting,dimensionsBasis:'Photographic proportions; exterior measurements provisional. 6.35 mm nominal shaft interface.',referenceIds:K.references.map(r=>r.id)};return knob;
}
