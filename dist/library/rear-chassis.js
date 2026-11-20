import * as THREE from 'three';
import {createJack} from './parts.js';
import {REAR_PANELS} from './rear-profiles.js';
const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.5,...extra});
const metal=()=>material('#b5b8af',{metalness:.85,roughness:.3});
function cylinder(parent,r,length,x,y,z,m){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,length,24),m);o.rotation.x=Math.PI/2;o.position.set(x,y,z);parent.add(o);return o;}
export function createRearChassis(id){
 const p=REAR_PANELS[id],g=new THREE.Group(),W=p.width,H=p.height;g.name='rear-chassis-'+id;
 const slab=new THREE.Mesh(new THREE.BoxGeometry(W,H,2),metal());g.add(slab);
 const c=document.createElement('canvas');c.width=4096;c.height=400;const x=c.getContext('2d'),px=v=>v/W*c.width;
 x.fillStyle='#151816';x.fillRect(0,0,c.width,c.height);x.strokeStyle='#d6d6c6';x.lineWidth=4;x.strokeRect(6,6,c.width-12,c.height-12);x.fillStyle='#e1dfcb';x.textAlign='center';
 for(const [kind,k,label] of p.controls){
  if(!label)continue;x.font='bold 37px Arial';const words=label.split(' '),lines=label.length>10?words:[label];lines.forEach((word,i)=>x.fillText(word,px(k),285+i*37,px(kind==='fuse'?35:45)));
  if(kind==='fuse'){x.font='bold 30px Arial';x.fillText(p.fuse,px(k),365,px(60));}
 }
 x.font='bold 26px Arial';p.rating.forEach((line,i)=>x.fillText(line,px(90),105+i*33,px(25)));
 x.font='25px Arial';x.fillText('FENDER ELECTRIC INSTRUMENT CO.  Fullerton, California',px(p.companyX),34,px(p.companyWidth));
 if(p.inkEnd)x.clearRect(c.width*p.inkEnd,0,c.width*(1-p.inkEnd),c.height);
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
 const ink=new THREE.Mesh(new THREE.PlaneGeometry(W-1,H-1),material('#ffffff',{map:t,transparent:true}));ink.position.z=1.1;g.add(ink);
 for(const [kind,k] of p.controls){const X=k-W/2;
  if(['jack','speaker','rca'].includes(kind)){const jack=createJack();if(kind==='rca')jack.scale.setScalar(.7);jack.position.set(X,2,1.5);g.add(jack);if(kind==='speaker')cylinder(g,5,12,X,2,9,material('#bdaf88'));}
  else if(kind==='toggle'){cylinder(g,5.5,3,X,2,3,metal());const lever=cylinder(g,1.8,12,X,3,10,metal());lever.rotation.x=.85;}
  else if(kind==='fuse'){cylinder(g,5.5,13,X,3,8,material('#171918'));cylinder(g,6,2,X,3,15,material('#252722'));}
  else {cylinder(g,4,8,X,1,5,material('#171918'));const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(X,1,8),new THREE.Vector3(X-7,-14,21),new THREE.Vector3(X-23,-53,30)]);g.add(new THREE.Mesh(new THREE.TubeGeometry(curve,14,2.2,6,false),material('#171918')));}
 }
 g.userData={componentStudy:'Rear hardware and labels; estimated spacing',referenceId:id};return g;
}
