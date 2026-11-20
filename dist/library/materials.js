import * as THREE from 'three';
import {assetById} from './catalog.js';
const tiles=new Map();
function mapsFor(id){
 if(tiles.has(id))return tiles.get(id);
 const item=assetById(id),size=512,tile=item.tileMm||24;
 const color=document.createElement('canvas'),height=document.createElement('canvas'),rough=document.createElement('canvas'),normal=document.createElement('canvas');
 for(const c of [color,height,rough,normal])c.width=c.height=size;
 const ci=color.getContext('2d').createImageData(size,size),hi=height.getContext('2d').createImageData(size,size),ri=rough.getContext('2d').createImageData(size,size),ni=normal.getContext('2d').createImageData(size,size),heights=new Float32Array(size*size);
 const hash=(x,y)=>{let n=Math.imul(x+29,374761393)^Math.imul(y+101,668265263);n=Math.imul(n^(n>>>13),1274126177);return ((n^(n>>>16))>>>0)/4294967295;};
 const cloth=item.family.startsWith('cloth');
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const mmX=x*tile/size,mmY=y*tile/size,noise=hash(x,y);let rgb,h=.5,r=.8;
  if(item.family==='tweed'){
   const period=tile/24,u=mmX/period,v=mmY/period,ix=Math.floor(u),iy=Math.floor(v),over=((ix-iy)%4+4)%4<2;
   const warp=Math.pow(Math.sin(Math.PI*(u-Math.floor(u))),.5),weft=Math.pow(Math.sin(Math.PI*(v-Math.floor(v))),.5);h=.15+.65*(over?warp:weft);const dark=over?1:.72;rgb=[167*dark+30*h,127*dark+24*h,66*dark+21*h];r=.73+noise*.12;
  }else if(cloth){
   const pitch=tile/(item.family==='cloth-blue'?18:20),u=(mmX/pitch)%1,v=(mmY/(tile/24))%1,vertical=u<.25,horizontal=v<.23;h=vertical?.7:horizontal?.57:.1;const gold=id==='cloth-brown-gold';rgb=gold?(vertical?[111,82,46]:horizontal?[155,118,65]:[35,29,23]):(vertical?[102,110,105]:horizontal?[176,179,165]:[26,32,30]);if(item.family==='cloth-blue'&&Math.floor(mmX/pitch)%9===0&&vertical)rgb=[65,102,121];r=.87;
  }else if(item.family==='tolex'||item.family==='leather'){
   const sx=Math.floor(mmX/.85),sy=Math.floor(mmY/.85);let min=3;
   for(let oy=-1;oy<=1;oy++)for(let ox=-1;ox<=1;ox++){const cx=sx+ox,cy=sy+oy;const px=(cx+.15+.7*hash(cx,cy))*.85,py=(cy+.15+.7*hash(cx+97,cy))*.85;min=Math.min(min,Math.hypot(mmX-px,mmY-py));}
   h=Math.min(1,min/.42);const leather=item.family==='leather';rgb=leather?[64+h*14,36+h*9,21+h*4]:[18+h*9,20+h*9,21+h*9];r=leather?.67:.74+noise*.1;
  }else{h=.45+noise*.1;rgb=item.family==='aluminum'?[171+noise*9,175+noise*9,173+noise*9]:[190,193,187];r=item.family==='aluminum'?.35+hash(0,y)*.18:.2+noise*.05;}
  const i=(y*size+x)*4;for(let k=0;k<3;k++){ci.data[i+k]=Math.max(0,Math.min(255,rgb[k]+(noise-.5)*6));hi.data[i+k]=h*255;ri.data[i+k]=r*255;}ci.data[i+3]=hi.data[i+3]=ri.data[i+3]=255;heights[y*size+x]=h;
 }
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4,dx=heights[y*size+(x+1)%size]-heights[y*size+(x+size-1)%size],dy=heights[((y+1)%size)*size+x]-heights[((y+size-1)%size)*size+x];const v=new THREE.Vector3(-dx*.6,dy*.6,1).normalize();ni.data[i]=(v.x*.5+.5)*255;ni.data[i+1]=(v.y*.5+.5)*255;ni.data[i+2]=(v.z*.5+.5)*255;ni.data[i+3]=255;}
 for(const [c,img] of [[color,ci],[height,hi],[rough,ri],[normal,ni]])c.getContext('2d').putImageData(img,0,0);
 const maps={color,height,rough,normal,tileMm:tile};tiles.set(id,maps);return maps;
}
export function materialMaps(id){return mapsFor(id);}
export function createMaterial(id){const item=assetById(id),m=mapsFor(id);const tex=(canvas,color=false)=>{const t=new THREE.CanvasTexture(canvas);if(color)t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=8;return t;};const metal=['nickel','aluminum'].includes(item.family);const out=new THREE.MeshStandardMaterial({color:0xffffff,map:tex(m.color,true),normalMap:tex(m.normal),normalScale:new THREE.Vector2(.45,.45),roughnessMap:tex(m.rough),roughness:1,metalness:metal?.9:0,side:THREE.DoubleSide});out.name=id;out.userData.tileMm=m.tileMm;return out;}
// Project from physical dimensions, not normalized UVs: no stretching when a cabinet changes size.
export function physicalUV(mesh,unitsPerMm=1,rotation=0){const geom=mesh.geometry,p=geom.attributes.position,n=geom.attributes.normal;const uv=new Float32Array(p.count*2),tile=(mesh.material.userData.tileMm||24)*unitsPerMm,c=Math.cos(rotation),s=Math.sin(rotation);for(let i=0;i<p.count;i++){const nx=Math.abs(n.getX(i)),ny=Math.abs(n.getY(i)),nz=Math.abs(n.getZ(i));let u,v;if(nz>=nx&&nz>=ny){u=p.getX(i);v=p.getY(i);}else if(nx>=ny){u=p.getZ(i);v=p.getY(i);}else{u=p.getX(i);v=p.getZ(i);}uv[i*2]=(u*c-v*s)/tile;uv[i*2+1]=(u*s+v*c)/tile;}geom.setAttribute('uv',new THREE.BufferAttribute(uv,2));return mesh;}
