// Own generated artwork; no reference photographs are incorporated.
const fs=require('fs'),path=require('path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const root=path.resolve(__dirname,'../..'),out=path.join(root,'models/twin-1968/textures');
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 const page=await browser.newPage();
 if(process.argv.includes('--identification-only')){
  await page.goto(process.env.REVIEW_ORIGIN||'http://127.0.0.1:4174/tools/blender/review.html');
  const images=await page.evaluate(async()=>{const {twinPanelMaps}=await import('/dist/library/twin-panel-art.js');const m=twinPanelMaps();return Object.fromEntries(Object.entries(m).map(([k,c])=>[k,c.toDataURL('image/png').split(',')[1]]));});
  for(const [key,data]of Object.entries(images))fs.writeFileSync(path.join(out,'panel-'+({color:'color',metallic:'metallic',rough:'roughness'}[key])+'.png'),Buffer.from(data,'base64'));
  await browser.close();console.log('Generated shared Twin panel maps.');return;
 }
 const surfaceSource=fs.readFileSync(path.join(root,'dist/library/photographic-surfaces.js'),'utf8');
 await page.addScriptTag({content:surfaceSource.replace(/\bexport /g,'')+';window.generateSurfaceData=generateSurfaceData;window.surfaceStudies=SURFACE_STUDIES;'});
 const svg=fs.readFileSync(path.join(root,'dist/assets/fender-wordmark.svg'),'utf8');
 const maps=await page.evaluate(async(svg)=>{
  const results={};
  const canvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c};
  const save=(name,c)=>results[name]=c.toDataURL('image/png').split(',')[1];
  let seed=1948;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
  for(const [id,prefix] of [['tolex-black','tolex'],['cloth-silver-blue','grille']]){
   const data=window.generateSurfaceData(id,1024);
   for(const [key,suffix]of [['color','color'],['normal','normal'],['rough','roughness'],['metallic','metallic'],['height','height']]){
    const c=canvas(data.size,data.size);c.getContext('2d').putImageData(new ImageData(data[key],data.size,data.size),0,0);save(prefix+'-'+suffix,c);
   }
  }
  const panel=canvas(4096,272),p=panel.getContext('2d');p.fillStyle='#bfc3c0';p.fillRect(0,0,4096,272);for(let y=0;y<272;y++){p.fillStyle=`rgba(255,255,255,${rand()*.09})`;p.fillRect(0,y,4096,1)}
  p.strokeStyle='#007e8d';p.fillStyle='#007e8d';p.lineWidth=3;p.strokeRect(16,12,4064,248);
  const sx=v=>v/622*4096;p.textAlign='center';p.font='bold 38px "Arial Narrow",Arial';
  const centers=[88,119,151,183,287,319,350,382,413,445,477],labels=['VOLUME','TREBLE','MIDDLE','BASS','VOLUME','TREBLE','MIDDLE','BASS','REVERB','SPEED','INTENSITY'];
  centers.forEach((v,i)=>p.fillText(labels[i],sx(v),246));p.font='bold 44px "Arial Narrow",Arial';p.fillText('NORMAL',sx(39),51);p.fillText('VIBRATO',sx(238),51);
  p.font='bold 34px Arial';[24,47,219,244].forEach((x,i)=>p.fillText(i%2+1,sx(x),218));p.font='25px Arial';[65,263].forEach(x=>p.fillText('BRIGHT',sx(x),67));
  p.font='bold 69px "Arial Narrow",Arial';p.fillText('TWIN REVERB',sx(546),99);p.fillText('-AMP',sx(568),179);p.font='20px Arial';p.fillText('FENDER MUSICAL INSTRUMENTS',sx(548),234);save('panel-color',panel);
  const logo=canvas(1024,384),lg=logo.getContext('2d'),img=new Image();img.src='data:image/svg+xml;base64,'+btoa(svg);await img.decode();lg.drawImage(img,0,0,1024,384);lg.globalCompositeOperation='source-in';lg.fillStyle='#d1d4cc';lg.fillRect(0,0,1024,384);save('fender-badge',logo);
  const jbl=canvas(512,384),j=jbl.getContext('2d');j.fillStyle='#111617';j.fillRect(0,0,512,384);j.strokeStyle='#bfc2bd';j.lineWidth=14;j.strokeRect(10,10,492,364);j.fillStyle='#e0dbca';j.textAlign='center';j.font='bold 230px Georgia';j.fillText('JBL',256,275);save('jbl-badge',jbl);
  return {images:results,settings:window.surfaceStudies};
 },svg);
 for(const [name,data]of Object.entries(maps.images)){if(process.argv.includes('--surfaces-only')&&!/^(tolex|grille)-/.test(name))continue;fs.writeFileSync(path.join(out,name+'.png'),Buffer.from(data,'base64'));}
 fs.writeFileSync(path.join(root,'models/twin-1968/surface-settings.json'),JSON.stringify(maps.settings,null,2)+'\n');
 await browser.close();console.log('Generated '+Object.keys(maps.images).length+' original texture/artwork files.');
})();
