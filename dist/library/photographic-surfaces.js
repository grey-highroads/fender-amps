// Own procedural surface studies. No reference-photo pixels are embedded.
// Physical pitches/relief are photographic estimates, not vintage measurements.
export const SURFACE_STUDIES={
 'tolex-black':{revision:'0.1',tileMm:32,normalScale:.75,metalness:0},
 'cloth-silver-blue':{revision:'0.1',tileMm:24,normalScale:.75,metalness:1}
};
const fract=x=>x-Math.floor(x);
const mix=(a,b,t)=>a+(b-a)*t;
const smooth=(a,b,x)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t);};
const hash=(x,y)=>{let n=Math.imul(x+29,374761393)^Math.imul(y+101,668265263);n=Math.imul(n^(n>>>13),1274126177);return ((n^(n>>>16))>>>0)/4294967295;};
const wrap=(x,n)=>(x%n+n)%n;
function noise(x,y,n){const ix=Math.floor(x),iy=Math.floor(y),u=smooth(0,1,fract(x)),v=smooth(0,1,fract(y));return mix(mix(hash(wrap(ix,n),wrap(iy,n)),hash(wrap(ix+1,n),wrap(iy,n)),u),mix(hash(wrap(ix,n),wrap(iy+1,n)),hash(wrap(ix+1,n),wrap(iy+1,n)),u),v);}
const distance=(x,period)=>Math.abs((fract(x/period+.5)-.5)*period);
const roundThread=(d,r)=>Math.sqrt(Math.max(0,1-(d/r)**2));
export function generateSurfaceData(id,size=512){
 const spec=SURFACE_STUDIES[id];if(!spec)throw new Error(`No photographic surface study: ${id}`);
 const color=new Uint8ClampedArray(size*size*4),rough=new Uint8ClampedArray(size*size*4),normal=new Uint8ClampedArray(size*size*4),height=new Uint8ClampedArray(size*size*4),metallic=new Uint8ClampedArray(size*size*4),relief=new Float32Array(size*size);
 const tile=spec.tileMm;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const u=x/size,v=y/size,mx=u*tile,my=v*tile,i=(y*size+x)*4;let rgb,h,r,metal=0;
  if(id==='tolex-black'){
   // Curved, elongated grain cells rather than a network of straight cracks.
   const px=u*44+.40*Math.sin(v*Math.PI*16)+.26*Math.sin((u+v)*Math.PI*12),py=v*28+.36*Math.sin(u*Math.PI*12)+.20*Math.sin((v-u)*Math.PI*8);
   const ix=Math.floor(px),iy=Math.floor(py);let a=10,b=10;
   for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
    const cx=ix+dx,cy=iy+dy,fx=cx+.12+.76*hash(wrap(cx,44),wrap(cy,28)),fy=cy+.12+.76*hash(wrap(cx+97,44),wrap(cy,28));
    const d=Math.hypot(px-fx,py-fy);if(d<a){b=a;a=d}else if(d<b)b=d;
   }
   const ridge=smooth(.015,.20,b-a),micro=noise(u*128,v*128,128),soft=noise(u*16,v*16,16);
   h=.042*ridge+.005*(micro-.5)+.003*soft;
   const value=19+ridge*4+(micro-.5)*2+soft*2;rgb=[value,value+.5,value+.5];r=.46+.09*(1-ridge)+.035*micro;
  }else{
   // Warm horizontal weft, silver warp and restrained aqua tracer. Curved strand
   // cross sections and an over/under cadence avoid a flat, uniformly bright grid.
   const wi=Math.round(mx/3),hi=Math.round(my/2),wx=mx+.025*Math.sin(my*Math.PI*2),wy=my+.035*Math.sin(mx*Math.PI*2);
   const warp=roundThread(distance(wx,3),.13),weft=roundThread(distance(wy,2),.24);
   const tracer=roundThread(distance(wx-.70,3),.065);
   const grain=noise(u*128,v*128,128),fiber=.5+.5*Math.sin(mx*Math.PI*16+my*Math.PI*2);
   const fineWeft=roundThread(distance(wy,.4),.09),fineWarp=roundThread(distance(wx,.5),.065);
   const over=((wi+hi)%2===0),vertical=warp>0&&(weft===0||over),strand=vertical?warp:weft;
   rgb=[33,36,29];h=.004;r=.86;
   if(fineWeft>0){rgb=[67,62,46].map(c=>c*(.70+.30*fineWeft));h=.014*fineWeft;r=.80;}
   if(fineWarp>0&&fineWeft<.6){rgb=[61,66,53].map(c=>c*(.70+.30*fineWarp));h=Math.max(h,.015*fineWarp);r=.78;}
   if(strand>0){const shade=.62+.38*strand;rgb=(vertical?[164,170,154]:[157,145,115]).map(c=>c*shade);h=.025+.065*strand+(vertical&&weft>0?.025:0);metal=vertical?.48:.25;r=.55+.13*(1-strand);}
   if(tracer>0&&!(weft>.6&&!over)){rgb=[43+tracer*16,83+tracer*22,78+tracer*17];h=Math.max(h,.045*tracer);r=.69;metal=.05;}
   const glint=vertical?Math.sin(my*Math.PI*16):fiber*2-1;rgb=rgb.map(c=>c+(grain-.5)*8+glint*5);
  }
  relief[y*size+x]=h;
  for(let k=0;k<3;k++){color[i+k]=rgb[k];rough[i+k]=r*255;height[i+k]=h/.13*255;metallic[i+k]=metal*255;}
  color[i+3]=rough[i+3]=height[i+3]=metallic[i+3]=255;
 }
 // Tangent-space OpenGL normals from physical millimetre relief. The +V gradient
 // follows the image's upward UV axis (opposite canvas row order).
 const step=tile/size;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const dx=(relief[y*size+(x+1)%size]-relief[y*size+(x+size-1)%size])/(2*step),dy=(relief[((y+1)%size)*size+x]-relief[((y+size-1)%size)*size+x])/(2*step),length=Math.hypot(dx,dy,1),i=(y*size+x)*4;
  normal[i]=(-dx/length*.5+.5)*255;normal[i+1]=(dy/length*.5+.5)*255;normal[i+2]=(1/length*.5+.5)*255;normal[i+3]=255;
 }
 return {size,tileMm:tile,color,rough,normal,height,metallic};
}
