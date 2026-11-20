// Own generated artwork; no reference photographs are incorporated.
const fs=require('fs'),path=require('path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const root=path.resolve(__dirname,'../..'),out=path.join(root,'models/twin-1968/textures');
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 const page=await browser.newPage();
 const svg=fs.readFileSync(path.join(root,'dist/assets/fender-wordmark.svg'),'utf8');
 const maps=await page.evaluate(async(svg)=>{
  const results={};
  const canvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c};
  const save=(name,c)=>results[name]=c.toDataURL('image/png').split(',')[1];
  let seed=1948;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
  // A 32 mm tile of leather-like irregular cells; generated normal/roughness maps.
  const N=512,c=canvas(N,N),ctx=c.getContext('2d'),im=ctx.createImageData(N,N),normal=canvas(N,N),rough=canvas(N,N);
  const pts=Array.from({length:280},()=>[rand()*N,rand()*N]);const field=new Float32Array(N*N);
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){let d1=1e9,d2=1e9;for(const [px,py]of pts){const dx=Math.min(Math.abs(px-x),N-Math.abs(px-x)),dy=Math.min(Math.abs(py-y),N-Math.abs(py-y)),d=dx*dx+dy*dy;if(d<d1){d2=d1;d1=d}else if(d<d2)d2=d;}field[y*N+x]=Math.min(1,(Math.sqrt(d2)-Math.sqrt(d1))/3.2)*.7+rand()*.12;}
  const ni=ctx.createImageData(N,N),ri=ctx.createImageData(N,N);
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){const i=(y*N+x)*4,h=field[y*N+x],dx=field[y*N+(x+1)%N]-field[y*N+(x+N-1)%N],dy=field[((y+1)%N)*N+x]-field[((y+N-1)%N)*N+x];im.data.set([18+h*9,19+h*9,20+h*9,255],i);ni.data.set([128-dx*115,128+dy*115,245,255],i);ri.data.set([150+h*45,150+h*45,150+h*45,255],i)}
  ctx.putImageData(im,0,0);normal.getContext('2d').putImageData(ni,0,0);rough.getContext('2d').putImageData(ri,0,0);save('tolex-color',c);save('tolex-normal',normal);save('tolex-roughness',rough);
  // A 12.8 mm tile; thin silver/aqua warps over warm dark weft.
  const cloth=canvas(512,512),g=cloth.getContext('2d');g.fillStyle='#393a31';g.fillRect(0,0,512,512);
  for(let y=0;y<512;y+=16){g.fillStyle='#a59a75';g.fillRect(0,y,512,5);g.fillStyle='#ded6b7';g.fillRect(0,y,512,1);g.fillStyle='#242824';g.fillRect(0,y+8,512,3)}
  for(let x=0;x<512;x+=16){g.fillStyle='#8d9282';g.fillRect(x,0,4,512);g.fillStyle='#d1d6cb';g.fillRect(x,0,1,512);g.fillStyle='#4e8179';g.fillRect(x+8,0,2,512);for(let y=0;y<512;y+=32){g.fillStyle='#e3dfc9';g.fillRect(x,y+(x%32),4,5)}}save('grille-color',cloth);
  const panel=canvas(4096,272),p=panel.getContext('2d');p.fillStyle='#bfc3c0';p.fillRect(0,0,4096,272);for(let y=0;y<272;y++){p.fillStyle=`rgba(255,255,255,${rand()*.09})`;p.fillRect(0,y,4096,1)}
  p.strokeStyle='#007e8d';p.fillStyle='#007e8d';p.lineWidth=3;p.strokeRect(16,12,4064,248);
  const sx=v=>v/622*4096;p.textAlign='center';p.font='bold 38px "Arial Narrow",Arial';
  const centers=[88,119,151,183,287,319,350,382,413,445,477],labels=['VOLUME','TREBLE','MIDDLE','BASS','VOLUME','TREBLE','MIDDLE','BASS','REVERB','SPEED','INTENSITY'];
  centers.forEach((v,i)=>p.fillText(labels[i],sx(v),246));p.font='bold 44px "Arial Narrow",Arial';p.fillText('NORMAL',sx(39),51);p.fillText('VIBRATO',sx(238),51);
  p.font='bold 34px Arial';[24,47,219,244].forEach((x,i)=>p.fillText(i%2+1,sx(x),218));p.font='25px Arial';[65,263].forEach(x=>p.fillText('BRIGHT',sx(x),67));
  p.font='bold 69px "Arial Narrow",Arial';p.fillText('TWIN REVERB',sx(546),99);p.fillText('-AMP',sx(568),179);p.font='20px Arial';p.fillText('FENDER MUSICAL INSTRUMENTS',sx(548),234);save('panel-color',panel);
  const logo=canvas(1024,384),lg=logo.getContext('2d'),img=new Image();img.src='data:image/svg+xml;base64,'+btoa(svg);await img.decode();lg.drawImage(img,0,0,1024,384);lg.globalCompositeOperation='source-in';lg.fillStyle='#d1d4cc';lg.fillRect(0,0,1024,384);save('fender-badge',logo);
  const jbl=canvas(512,384),j=jbl.getContext('2d');j.fillStyle='#111617';j.fillRect(0,0,512,384);j.strokeStyle='#bfc2bd';j.lineWidth=14;j.strokeRect(10,10,492,364);j.fillStyle='#e0dbca';j.textAlign='center';j.font='bold 230px Georgia';j.fillText('JBL',256,275);save('jbl-badge',jbl);
  return results;
 },svg);
 for(const [name,data]of Object.entries(maps))fs.writeFileSync(path.join(out,name+'.png'),Buffer.from(data,'base64'));
 await browser.close();console.log('Generated '+Object.keys(maps).length+' original texture/artwork files.');
})();
