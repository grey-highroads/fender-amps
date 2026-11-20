// Sample our own badge paths into portable contours; no photographic pixels.
const fs=require('fs'),crypto=require('crypto');const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const b=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})}),p=await b.newPage();await p.goto(process.env.REVIEW_ORIGIN||'http://127.0.0.1:4174/tools/blender/review.html');
const data=await p.evaluate(async()=>{
 const {SVGLoader}=await import('/tools/blender/vendor/loaders/SVGLoader.js'),{TAIL_BADGE:B}=await import('/dist/library/identification-profile.js');
 const sample=d=>new SVGLoader().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${d}"/></svg>`).paths[0].subPaths.map(s=>s.getPoints(18).filter((p,i,a)=>i===0||p.distanceTo(a[i-1])>.0001));
 const outline=sample(B.backing)[0].map(p=>[p.x,p.y]);
 const strokes=[];
 for(const {d,width}of B.strokes)for(const pts of sample(d)){
  const side=[];
  for(let i=0;i<pts.length;i++){const prev=pts[Math.max(0,i-1)],next=pts[Math.min(pts.length-1,i+1)],dx=next.x-prev.x,dy=next.y-prev.y,len=Math.hypot(dx,dy)||1;side.push([-dy/len*width/2,dx/len*width/2]);}
  const left=pts.map((p,i)=>[p.x+side[i][0],p.y+side[i][1]]),right=pts.map((p,i)=>[p.x-side[i][0],p.y-side[i][1]]).reverse();strokes.push([...left,...right]);
 }
 return {outline,strokes};});
const {TAIL_BADGE:B}=await import('../../dist/library/identification-profile.js');const signature=crypto.createHash('sha256').update(JSON.stringify({backing:B.backing,strokes:B.strokes})).digest('hex');
fs.writeFileSync('dist/library/tail-badge-contours.js','// Generated from our identification-profile.js path study.\nexport const TAIL_PROFILE_SIGNATURE='+JSON.stringify(signature)+';\nexport const TAIL_CONTOURS='+JSON.stringify(data)+';\n');await b.close();console.log('Prepared backing and '+data.strokes.length+' raised stroke contours.');})();
