import * as THREE from 'three';
import {createJack} from './parts.js';
import {REAR_PANELS} from './rear-profiles.js';
import {drawArtwork,rearArtwork,LETTERING_REVISION} from './panel-lettering.js';
const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.5,...extra});
const metal=()=>material('#b5b8af',{metalness:.85,roughness:.3});
function cylinder(parent,r,length,x,y,z,m){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,length,24),m);o.rotation.x=Math.PI/2;o.position.set(x,y,z);parent.add(o);return o;}
export function createRearChassis(id){
 const p=REAR_PANELS[id],g=new THREE.Group(),W=p.width,H=p.height;g.name='rear-chassis-'+id;
 const slab=new THREE.Mesh(new THREE.BoxGeometry(W,H,2),metal());g.add(slab);
 const c=document.createElement('canvas');c.width=4096;c.height=Math.round(4096*H/W);drawArtwork(c,rearArtwork(id));
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;
 const ink=new THREE.Mesh(new THREE.PlaneGeometry(W-1,H-1),material('#ffffff',{map:t,transparent:true}));ink.position.z=1.1;g.add(ink);
 for(const [kind,k] of p.controls){const X=k-W/2;
  if(['jack','speaker','rca'].includes(kind)){const jack=createJack();if(kind==='rca')jack.scale.setScalar(.7);jack.position.set(X,2,1.5);g.add(jack);if(kind==='speaker')cylinder(g,5,12,X,2,9,material('#bdaf88'));}
  else if(kind==='toggle'){cylinder(g,5.5,3,X,2,3,metal());const lever=cylinder(g,1.8,12,X,3,10,metal());lever.rotation.x=.85;}
  else if(kind==='fuse'){cylinder(g,5.5,13,X,3,8,material('#171918'));cylinder(g,6,2,X,3,15,material('#252722'));}
  else {cylinder(g,4,8,X,1,5,material('#171918'));const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(X,1,8),new THREE.Vector3(X-7,-14,21),new THREE.Vector3(X-23,-53,30)]);g.add(new THREE.Mesh(new THREE.TubeGeometry(curve,14,2.2,6,false),material('#171918')));}
 }
 g.userData={componentStudy:'Rear hardware and labels; estimated spacing',referenceId:id,letteringRevision:LETTERING_REVISION};return g;
}
