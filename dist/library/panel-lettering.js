// Original vector lettering studies, authored for this project. No font files or
// photo pixels. Dimensions and outlines are estimates, not authenticated tracings.
// Shared commands drive synchronous canvas textures and editable SVG proofs.
export const LETTERING_REVISION='1.0';
const G={
 '&':'M .66 .96 L .12 .3 C -.18 -.16 .66 -.12 .42 .25 L .07 .63 C -.2 1.2 .6 1.17 .68 .48',
 A:'M .02 1 L .34 0 L .66 1 M .14 .66 L .54 .66',B:'M .06 1 V 0 H .36 C .76 0 .76 .48 .36 .48 H .06 M .36 .48 C .8 .48 .8 1 .36 1 H .06',C:'M .65 .12 C .48 -.12 .02 -.04 .02 .5 S .48 1.12 .65 .88',D:'M .06 1 V 0 H .28 C .86 0 .86 1 .28 1 Z',E:'M .65 0 H .06 V 1 H .65 M .06 .48 H .55',F:'M .65 0 H .06 V 1 M .06 .48 H .55',G:'M .65 .14 C .43 -.14 .02 -.02 .02 .5 S .5 1.13 .65 .85 V .54 H .37',H:'M .06 0 V 1 M .65 0 V 1 M .06 .48 H .65',I:'M .08 0 H .42 M .25 0 V 1 M .08 1 H .42',J:'M .6 0 V .72 C .6 1.1 .06 1.1 .02 .77',K:'M .06 0 V 1 M .66 0 L .06 .58 M .29 .36 L .69 1',L:'M .06 0 V 1 H .63',M:'M .04 1 V 0 L .42 .66 L .8 0 V 1',N:'M .06 1 V 0 L .66 1 V 0',O:'M .34 0 C -.1 0 -.1 1 .34 1 C .8 1 .8 0 .34 0 Z',P:'M .06 1 V 0 H .36 C .8 0 .8 .52 .36 .52 H .06',Q:'M .34 0 C -.1 0 -.1 1 .34 1 C .8 1 .8 0 .34 0 Z M .4 .72 L .75 1.08',R:'M .06 1 V 0 H .36 C .8 0 .8 .51 .36 .51 H .06 M .34 .51 L .71 1',S:'M .63 .12 C .31 -.18 -.14 .08 .08 .37 C .17 .5 .56 .48 .64 .68 C .83 1.12 .16 1.1 .02 .86',T:'M 0 0 H .7 M .35 0 V 1',U:'M .05 0 V .69 C .05 1.1 .65 1.1 .65 .69 V 0',V:'M 0 0 L .35 1 L .7 0',W:'M 0 0 L .21 1 L .46 .35 L .71 1 L .92 0',X:'M 0 0 L .7 1 M .7 0 L 0 1',Y:'M 0 0 L .35 .5 L .7 0 M .35 .5 V 1',Z:'M 0 0 H .68 L 0 1 H .68',
 '0':'M .31 0 C -.08 0 -.08 1 .31 1 C .7 1 .7 0 .31 0 Z','1':'M .08 .2 L .3 0 V 1','2':'M .02 .2 C .02 -.1 .62 -.1 .62 .22 C .62 .42 .03 .7 .02 1 H .65','3':'M .02 .1 C .65 -.2 .87 .5 .26 .48 C .9 .4 .77 1.27 .02 .91','4':'M .48 1 V 0 L 0 .68 H .68','5':'M .62 0 H .08 L .04 .48 C .83 .2 .88 1.28 .02 .92','6':'M .6 .05 C -.08 -.17 -.17 1.1 .32 1 C .85 .97 .7 .24 .05 .5','7':'M 0 0 H .66 L .16 1','8':'M .32 .47 C -.17 .43 -.06 -.06 .32 0 C .75 -.03 .81 .43 .32 .47 C -.19 .48 -.13 1 .32 1 C .82 1 .85 .48 .32 .47 Z','9':'M .04 .95 C .72 1.17 .81 -.1 .32 0 C -.21 .03 -.06 .76 .59 .5',
 '-':'M .06 .52 H .5','.':'M .12 .93 V 1','/':'M 0 1 L .5 0',',':'M .18 .9 L .08 1.15',' ':'',
};
// Connected brush-script skeletons; key capitals have their own broad downstroke.
// Common letters are reused only within the related brown/black-panel script study.
const S={
 P:[23,'M 0 -21 C 8 -28 30 -33 27 -20 C 25 -11 13 -10 7 -12 M 13 -27 L 2 0 M 0 0 Q 6 -2 12 -8','M 12 -26 L 3 -2'],
 D:[27,'M -1 -22 C 10 -31 32 -33 30 -18 C 28 -6 10 3 6 0 C 3 -3 11 -23 12 -25','M 12 -25 L 6 -2'],
 R:[24,'M -1 -22 C 9 -32 30 -32 27 -21 C 25 -14 12 -13 8 -14 M 13 -27 L 2 0 M 13 -14 C 16 -9 16 -1 22 -1 L 27 -5','M 12 -26 L 3 -2'],
 A:[25,'M -3 0 C 6 -10 16 -27 24 -30 L 15 0 M 1 -9 L 24 -12','M 23 -28 L 16 -1'],
 r:[14,'M -2 -3 L 5 -16 Q 2 -20 0 -15 Q 0 -11 9 -13 Q 16 -17 14 -11 L 10 -2 Q 10 2 17 -4'],
 i:[9,'M -2 -3 L 4 -13 L 0 -2 Q 0 2 10 -4 M 7 -20 L 8 -22'],
 n:[19,'M -2 -3 L 5 -15 L 0 0 C 7 -13 17 -20 17 -12 L 12 -2 Q 12 2 21 -4'],
 c:[16,'M 13 -13 C 13 -20 3 -14 0 -6 C -3 3 7 2 17 -5'],
 e:[16,'M -2 -5 C 18 -10 15 -19 7 -14 C -5 -6 -1 8 18 -5'],
 t:[12,'M -2 -3 C 8 -15 11 -22 13 -25 M 10 -22 L 3 -3 Q 2 3 14 -4 M 0 -14 L 15 -16'],
 o:[17,'M 13 -13 C 4 -20 -5 1 4 0 C 11 0 19 -19 13 -15 C 10 -11 17 -9 20 -13'],
 l:[12,'M -2 -3 C 17 -19 20 -39 12 -29 C 5 -19 -2 7 14 -4'],
 u:[19,'M 3 -14 C -8 6 5 4 16 -14 L 11 -2 Q 11 2 21 -4'],
 x:[17,'M 0 -14 C 10 -19 8 3 17 -2 M 16 -16 Q 9 -7 -1 1'],
 v:[17,'M 1 -14 C -2 1 3 5 12 -5 Q 22 -18 16 -16 Q 13 -14 20 -11'],
 b:[18,'M -2 -3 C 15 -19 21 -39 12 -28 L 2 -2 C 10 6 22 -15 15 -15 Q 12 -14 20 -10'],
 m:[28,'M -2 -3 L 4 -15 L 0 0 C 9 -17 17 -20 12 -6 L 10 0 C 20 -17 27 -20 25 -12 L 21 -2 Q 21 2 30 -4'],
 p:[19,'M -2 -3 L 5 -14 L -5 13 M 3 -8 C 18 -26 24 -10 12 -2 Q 8 1 5 -3 Q 8 3 21 -4'],
 '-':[12,'M 1 -9 L 10 -11'],
};
function path(a,d,matrix,width=.1){a.push({d,matrix,width});}
export function label(a,text,cx,top,h,{width=Infinity,weight=.15,tracking=.22,slant=0}={}){
 const advances=[...text].map(c=>c===' '?.44:c==='I'?.5:c==='W'?1.02:.78),total=advances.reduce((n,v)=>n+v,0)+Math.max(0,text.length-1)*(tracking-.12),sx=Math.min(h,width/total);let left=cx-total*sx/2;
 for(const [i,c]of [...text].entries()){if(!Object.hasOwn(G,c))throw Error(`Missing panel glyph: ${c}`);if(G[c])path(a,G[c],[sx,0,-slant*h,h,left+slant*h,top],weight);left+=(advances[i]+tracking-.12)*sx;}
}
function script(a,text,left,baseline,width,height){const total=[...text].reduce((v,c)=>v+S[c][0],0),sx=width/total,sy=height/32;let cursor=0;
 for(const c of text){const [advance,d,heavy]=S[c];const m=[sx,-.045*sx,-.16*sy,sy,left+cursor*sx,baseline-cursor*sx*.045];path(a,d,m,2.65);if(heavy)path(a,heavy,m,4.0);cursor+=advance;}
}
function rule(a,x,y,w,h){path(a,`M ${x} ${y} h ${w} v ${h} h ${-w} Z`,[1,0,0,1,0,0],.38);}
import {SMALL_PANELS} from './small-amp-profiles.js';
import {TWIN_PANEL,DELUXE_PANEL,TWEED_PANEL} from './identification-profile.js';
import {REAR_PANELS} from './rear-profiles.js';
export const PANEL_IDS=['faceplate-bassman-tweed','faceplate-bassman-black','faceplate-pano','faceplate-super-reverb','faceplate-vibrasonic','faceplate-showman','faceplate-super-six','faceplate-blues-junior','faceplate-prosonic','faceplate-princeton','faceplate-deluxe','faceplate-twin','faceplate-brown-deluxe','faceplate-5e3','faceplate-tremolux','faceplate-champ'];
export function panelArtwork(id){
 if(SMALL_PANELS[id]?.batch)return comboArtwork(id);
 const a=[],small=SMALL_PANELS[id],twin=id==='faceplate-twin',deluxe=id==='faceplate-deluxe',tweed=id==='faceplate-5e3',top=tweed||small?.top;
 const W=small?.width||(twin?632:deluxe?578:365),H=small?.height||51,ink=twin?'#087e8c':top?'#f1ead8':'#e8e0cc',background=twin?'#bdc2bf':top?'#a6aaa2':small?.black||deluxe?'#090c0d':'#35251e';
 const p=small||(twin?{knobs:TWIN_PANEL.knobs.map(v=>v/622*W),labels:TWIN_PANEL.labels,jacks:TWIN_PANEL.jacks.map(v=>[v/622*W,0])}:deluxe?{knobs:DELUXE_PANEL.knobs,labels:['VOLUME','TREBLE','BASS','VOLUME','TREBLE','BASS','REVERB','SPEED','INTENSITY'],jacks:DELUXE_PANEL.jacks.map(v=>[v,0])}:{knobs:TWEED_PANEL.knobs,labels:['TONE','INST. VOL.','MIC. VOL.'],jacks:TWEED_PANEL.jacks});
 const controlBottom=H-5;
 if(!top){if(!twin)rule(a,1.8,1.8,W-3.6,H-3.6);if(deluxe||id==='faceplate-brown-deluxe'){for(const k of deluxe?[174]:[138,345])path(a,`M ${k} 1.8 V ${H-1.8}`,[1,0,0,1,0,0],.38);}}
 else path(a,`M 1 ${H-1.8} H ${W-1}`,[1,0,0,1,0,0],.3);
 for(const [i,k]of p.knobs.entries()){
  label(a,p.labels[i],k,controlBottom,top?3:2.65,{width:top?43:34,weight:top?.135:twin?.13:.23,tracking:top?.21:.19});
  if(top||id==='faceplate-brown-deluxe')for(let n=1;n<=(top?12:10);n++){const angle=-2.45+(n-1)/((top?12:10)-1)*4.9;label(a,String(n),k+Math.sin(angle)*14,H/2-Math.cos(angle)*15-1.15,2.65,{weight:.14,tracking:.12});}
  if(!top&&!twin&&id!=='faceplate-brown-deluxe')path(a,`M ${k} 2 V 6`,[1,0,0,1,0,0],.45);
 }
 // Stacked tweed sockets are numbered by row; each channel starts again at 1.
 for(const [i,[k,y]]of p.jacks.entries()){const n=id==='faceplate-champ'?i+1:top?(y>0?2:1):i%2+1;label(a,String(n),top?(id==='faceplate-champ'?k:k+(tweed?-18:-10)):k,top?(id==='faceplate-champ'?5:H/2-y-1.5):twin?34:5,3.2,{weight:.09});}
 if(top){
  if(tweed){label(a,'GROUND',TWEED_PANEL.ground,controlBottom,3,{weight:.115});label(a,'ON',TWEED_PANEL.power,controlBottom,3,{weight:.115});label(a,'INST.',TWEED_PANEL.jacks[0][0],controlBottom,3.1,{weight:.115});label(a,'MIC.',TWEED_PANEL.jacks[2][0],controlBottom,3.1,{weight:.115});}
  else{label(a,'INSTRUMENTS',id==='faceplate-champ'?167:357,controlBottom,2.8,{weight:.115,width:id==='faceplate-champ'?62:48});label(a,id==='faceplate-champ'?'2 AMP':'FUSE',p.fuse,controlBottom,2.8,{weight:.115});if(p.toggle)label(a,'OFF',p.toggle,4,2.8,{weight:.115});}
 }else if(twin){
  for(const [left,right]of [[3,206],[210,503]]){const l=left/622*W,r=right/622*W;path(a,`M ${l+2} 2 H ${r-2} Q ${r} 2 ${r} 4 V ${H-4} Q ${r} ${H-2} ${r-2} ${H-2} H ${l+2} Q ${l} ${H-2} ${l} ${H-4} V 4 Q ${l} 2 ${l+2} 2 Z`,[1,0,0,1,0,0],.28);}
  // Early silverface uses narrow, heavy, upright block capitals, not script.
  label(a,'NORMAL',38/622*W,4,3.2,{weight:.09,tracking:.27});label(a,'VIBRATO',237/622*W,4,3.2,{weight:.09,tracking:.27});
  for(const b of TWIN_PANEL.bright)label(a,'BRIGHT',b/622*W,9,1.9,{weight:.115});
  label(a,'TWIN REVERB',543/622*W,5,14,{width:78,weight:.19,tracking:.12,slant:0});label(a,'-AMP',565/622*W,23,13,{width:34,weight:.19,tracking:.12,slant:0});
  label(a,'FENDER MUSICAL INSTRUMENTS',556/622*W,43,1.4,{weight:.09,width:86});
 }else{
  const princeton=id==='faceplate-princeton',brown=id==='faceplate-brown-deluxe',left=princeton?321:brown?357:461,titleW=princeton?81:brown?70:75;
  script(a,princeton?'Princeton':'Deluxe',left,21,titleW,13);
  script(a,brown?'-Amp':'Reverb-Amp',left+(brown?24:9),H-10,brown?54:princeton?85:80,12);
  label(a,brown?'FENDER ELECT. INST. CO.':princeton?'FENDER ELECT. INSTR. CO.':'FENDER MUSICAL INSTRUMENTS',left+titleW*.58,H-4.2,1.7,{weight:.13,width:princeton?91:brown?87:91,tracking:.16});
  for(const [k,s]of p.channels||(deluxe?[[29,'NORMAL'],[202,'VIBRATO']]:[]))label(a,s,k,H-8.3,4.1,{weight:.14,tracking:.17,width:princeton?57:48});
  const pilot=small?.pilot||557;label(a,'DESIGN & CIRCUITS',pilot,H-6.5,1.25,{weight:.115,width:30});label(a,'PATENTED',pilot,H-3.9,1.25,{weight:.115,width:23});
 }
 return {id,width:W,height:H,ink,background,paths:a,revision:LETTERING_REVISION};
}
export function rearArtwork(id){const p=REAR_PANELS[id],a=[],W=p.width,H=p.height;
 rule(a,1,1,W*(p.inkEnd||1)-2,H-2);
 for(const [kind,k,text]of p.controls){if(!text||text==='ON')continue;const lines=text.length>10?text.split(' '):[text];lines.forEach((s,i)=>label(a,s,k,27+i*3.2,2.45,{width:kind==='fuse'?29:38,weight:.11,tracking:.14}));if(kind==='fuse')label(a,p.fuse,k,H-4,2.2,{width:54,weight:.1});}
 // ON is above the switch in both selected rear photographs.
 const on=p.controls.find(v=>v[2]==='ON');if(on)label(a,'ON',on[1],4.6,2.4,{weight:.11});
 p.rating.forEach((s,i)=>label(a,s,90,9+i*3.2,2.1,{width:25,weight:.1}));
 label(a,'FENDER ELECTRIC INSTRUMENT CO.',p.companyX,id==='deluxe-6g3'?18:2.5,id==='deluxe-6g3'?1.6:2,{width:p.companyWidth,weight:.09,tracking:.17});
 label(a,'FULLERTON, CALIFORNIA',p.companyX,id==='deluxe-6g3'?21.5:5.6,1.45,{width:p.companyWidth*.7,weight:.115});
 return {id,width:W,height:H,ink:'#e1dfcb',background:'#151816',paths:a,inkEnd:p.inkEnd,revision:LETTERING_REVISION};
}
export function drawArtwork(canvas,art,channel='color'){
 const x=canvas.getContext('2d');x.clearRect(0,0,canvas.width,canvas.height);x.save();x.scale(canvas.width/art.width,canvas.height/art.height);x.fillStyle=channel==='metallic'?'#eeeeee':channel==='rough'?'#888888':art.background;x.fillRect(0,0,art.width*(art.inkEnd||1),art.height);x.strokeStyle=x.fillStyle=channel==='metallic'?'#000000':channel==='rough'?'#b9b9b9':art.ink;
 for(const p of art.paths){x.save();x.transform(...p.matrix);x.lineWidth=p.width;x.lineCap='round';x.lineJoin='round';x.stroke(new Path2D(p.d));x.restore();}x.restore();return canvas;
}
export function artworkSVG(art){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${art.width} ${art.height}" width="${art.width}mm" height="${art.height}mm"><title>${art.id} — lettering study ${art.revision}</title><rect width="${art.width*(art.inkEnd||1)}" height="${art.height}" fill="${art.background}"/><g fill="none" stroke="${art.ink}" stroke-linecap="round" stroke-linejoin="round">${art.paths.map(p=>`<path d="${p.d}" transform="matrix(${p.matrix.join(' ')})" stroke-width="${p.width}"/>`).join('')}</g></svg>`;}
const panelTemplates=new Map();
export function panelCanvas(id){if(panelTemplates.has(id))return panelTemplates.get(id);const art=panelArtwork(id),c=document.createElement('canvas');c.width=4096;c.height=Math.round(4096*art.height/art.width);drawArtwork(c,art);panelTemplates.set(id,c);return c;}

// New batch layouts use the established vector alphabet, leaving accepted panels intact.
function comboArtwork(id){
 const p=SMALL_PANELS[id],a=[],W=p.width,H=p.height;
 for(const [i,k] of p.knobs.entries()){
  label(a,p.labels[i],k,H-5,2.65,{width:34,weight:.16});
  if(p.numbers)for(let n=1;n<=p.numbers;n++){const angle=-2.45+(n-1)/(p.numbers-1)*4.9;label(a,String(n),k+Math.sin(angle)*14,H/2-Math.cos(angle)*15-1,2.5,{weight:.12});}
 }
 for(const [i,[k,y]] of p.jacks.entries())label(a,String(i%2+1),id==='faceplate-bassman-tweed'?k+11:k,id==='faceplate-bassman-tweed'?H/2-y:5,3,{weight:.12});
 for(const [k,text] of p.channels||[])label(a,text,k,H-5,2.8,{weight:.12,width:49});
 for(const [k,y,text] of [...p.toggles||[],...p.buttons||[]])label(a,text,k,y?7:H-5,2.4,{weight:.12,width:32});
 for(const [x,y,up,down]of p.slides||[]){label(a,up,x,6,2,{width:26,weight:.12});label(a,down,x,H-6,2,{width:26,weight:.12});}
 if(p.title){label(a,p.title,p.titleX,6,9,{width:p.titleWidth,weight:.18});label(a,'FENDER MUSICAL INSTRUMENTS',p.titleX,H-5,1.5,{width:p.titleWidth,weight:.1});}
 if(id==='faceplate-blues-junior')label(a,'INPUT',395,H-5,2.5,{weight:.13});
 return {id,width:W,height:H,ink:p.ink,background:p.background,paths:a,revision:LETTERING_REVISION};
}
