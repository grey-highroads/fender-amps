import * as THREE from '../vendor/three.module.js';
import {TAIL_BADGE as B} from './identification-profile.js';
import {TAIL_CONTOURS as C} from './tail-badge-contours.js';
const scale=B.flatWidthMm/160,angle=B.angleDeg*Math.PI/180;
function point([x,y]){x=(x-80)*scale;y=(30-y)*scale;return new THREE.Vector2(x*Math.cos(angle)-y*Math.sin(angle),x*Math.sin(angle)+y*Math.cos(angle));}
function shape(points){return new THREE.Shape(points.map(point));}
export function createRaisedTailBadge(){
 const group=new THREE.Group(),black=new THREE.MeshStandardMaterial({color:'#080b0c',roughness:.40,metalness:.02}),chrome=new THREE.MeshStandardMaterial({color:'#d5d9d6',roughness:.21,metalness:.98});
 const base=shape(C.outline);
 for(const [x,y,r]of B.holes){const p=point([x,y]),hole=new THREE.Path();hole.absellipse(p.x,p.y,r*scale,r*scale,0,Math.PI*2,true);base.holes.push(hole);}
 const backing=new THREE.Mesh(new THREE.ExtrudeGeometry(base,{depth:B.baseDepthMm,bevelEnabled:true,bevelSize:B.bevelMm,bevelThickness:B.bevelMm,bevelSegments:3,steps:1,curveSegments:12}),[black,chrome]);backing.name='badge-painted-backing-with-mounting-holes';group.add(backing);
 for(const [i,outline]of C.strokes.entries()){
  const raised=new THREE.Mesh(new THREE.ExtrudeGeometry(shape(outline),{depth:B.raiseDepthMm,bevelEnabled:true,bevelSize:.28,bevelThickness:.25,bevelSegments:4,steps:1,curveSegments:10}),chrome);
  raised.position.z=B.baseDepthMm+.03;raised.name=`badge-raised-chrome-stroke-${i+1}`;group.add(raised);
 }
 for(const [x,y]of B.holes){const p=point([x,y]),head=new THREE.Mesh(new THREE.SphereGeometry(.95,16,8),black);head.scale.z=.24;head.position.set(p.x,p.y,B.baseDepthMm+.12);head.name='badge-dark-mounting-screw';group.add(head);}
 const center=new THREE.Box3().setFromObject(group).getCenter(new THREE.Vector3());for(const child of group.children){child.position.x-=center.x;child.position.y-=center.y;}
 group.name='badge-script';group.userData={componentId:'badge-script',revision:B.revision,basis:B.basis,construction:'Painted backing, raised chrome strokes and three provisional mounting positions. Own vector study, not a scan.'};return group;
}
