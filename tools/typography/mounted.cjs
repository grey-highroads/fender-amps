const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('fs');
const sets=[['princeton','princeton-reverb-aa1164','faceplate-princeton'],['deluxe','deluxe-reverb-black','faceplate-deluxe'],['twin','twin-reverb-early','faceplate-twin'],['brown','deluxe-6g3','faceplate-brown-deluxe'],['5e3','deluxe-5e3','faceplate-5e3'],['tremolux','tremolux-5e9','faceplate-tremolux'],['champ','champ-5f1','faceplate-champ']];
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--no-sandbox']});const p=await b.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1,acceptDownloads:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
for(const [phase,base]of [['before','/outputs/typography-before/dist'],['after','/dist']])for(const [name,amp,plate]of sets){
 for(const [kind,id]of [['amp',`amp/${amp}`],['plate',plate]]){
 await p.goto('about:blank');await p.goto(`http://127.0.0.1:4178${base}/components.html#${id}`);await p.locator('#record-name').waitFor();await p.waitForTimeout(700);
 for(const view of ['front','angle']){await p.locator(`#view-${view}`).click();await p.waitForTimeout(350);await p.locator('#part-viewport').screenshot({path:`docs/handoff/images/typography/${name}-${kind}-${view}-${phase}.png`});}
 if(phase==='after'&&kind==='plate'){const dl=p.waitForEvent('download');await p.locator('#export-model').click();const file=await dl;await file.saveAs(`outputs/typography-${plate}.glb`);console.log('EXPORTED',plate);}
 }
 console.log(phase,name);
}
fs.writeFileSync('outputs/typography-browser-errors.json',JSON.stringify(errors));await b.close();})();
