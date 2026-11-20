import {TWIN_PANEL as P} from './identification-profile.js';
// Condensed upright display lettering drawn as vectors. This remains an outline
// study; it is not identified as an exact historical typeface.
const CAPS={T:'M .03 .05 L .97 .05 M .5 .05 L .5 .95',W:'M .03 .05 L .24 .95 L .5 .40 L .76 .95 L .97 .05',I:'M .25 .05 L .75 .05 M .5 .05 L .5 .95 M .25 .95 L .75 .95',N:'M .08 .95 L .08 .05 L .92 .95 L .92 .05',R:'M .08 .95 L .08 .05 L .58 .05 C 1.08 .05 1.08 .52 .58 .52 L .08 .52 M .53 .52 L .95 .95',E:'M .94 .05 L .08 .05 L .08 .95 L .94 .95 M .08 .5 L .80 .5',V:'M .03 .05 L .5 .95 L .97 .05',B:'M .08 .95 L .08 .05 L .57 .05 C 1.06 .05 1.06 .48 .57 .48 L .08 .48 M .57 .48 C 1.08 .48 1.08 .95 .57 .95 L .08 .95',A:'M .02 .95 L .5 .05 L .98 .95 M .21 .61 L .79 .61',M:'M .06 .95 L .06 .05 L .5 .55 L .94 .05 L .94 .95',P:'M .08 .95 L .08 .05 L .58 .05 C 1.08 .05 1.08 .55 .58 .55 L .08 .55','-':'M .05 .52 L .8 .52'};
function title(x,text,left,top,width,height){const units=[...text].reduce((n,c)=>n+(c===' '?.65:1.18),-.18),w=width/units;x.lineWidth=1.1;x.lineCap='butt';x.lineJoin='bevel';let cursor=left;for(const c of text){if(c===' '){cursor+=w*.65;continue;}const p=new Path2D();p.addPath(new Path2D(CAPS[c]),new DOMMatrix([w,0,0,height,cursor,top]));x.stroke(p);cursor+=w*1.18;}}
function fit(x,text,cx,y,height,width,weight='normal'){x.save();x.font=`${weight} ${height}px Arial`;x.translate(cx,y);x.scale(Math.min(1,width/x.measureText(text).width),1);x.fillText(text,0,0);x.restore();}
export function drawTwinPanel(canvas,channel='color'){
 const x=canvas.getContext('2d'),W=P.widthMm,H=P.heightMm;
 x.clearRect(0,0,canvas.width,canvas.height);x.save();x.scale(canvas.width/W,canvas.height/H);
 const bg=channel==='metallic'?'#eeeeee':channel==='rough'?'#888888':'#bdc2bf',ink=channel==='metallic'?'#000000':channel==='rough'?'#b9b9b9':'#087e8c';
 x.fillStyle=bg;x.fillRect(0,0,W,H);
 if(channel==='color'){for(let y=0;y<H;y+=.14){x.fillStyle=`rgba(235,240,236,${.025+.015*Math.sin(y*41)})`;x.fillRect(0,y,W,.04);}}
 x.strokeStyle=ink;x.fillStyle=ink;x.lineWidth=.25;x.textAlign='center';
 for(const [left,right]of [[3,206],[210,503]]){x.beginPath();x.roundRect(left,1,right-left,H-2,1.7);x.stroke();}
 fit(x,'NORMAL',38,5.3,3.1,28);fit(x,'VIBRATO',237,5.3,3.1,30);
 P.labels.forEach((s,i)=>fit(x,s,P.knobs[i],H-2.2,2.25,25));
 P.jacks.forEach((v,i)=>fit(x,String(i%2+1),v,31.3,2.6,5));
 P.bright.forEach(v=>fit(x,'BRIGHT',v,8.7,1.8,16));
 title(x,'TWIN REVERB',504,2.6,82,13.2);title(x,'-AMP',550,17.8,36,12.2);
 fit(x,'FENDER MUSICAL INSTRUMENTS',550,H-3,1.15,88);
 x.restore();return canvas;
}
let cachedMaps;
export function twinPanelMaps(){if(cachedMaps)return cachedMaps;const maps={};for(const channel of ['color','metallic','rough']){const c=document.createElement('canvas');c.width=4096;c.height=270;maps[channel]=drawTwinPanel(c,channel);}return cachedMaps=maps;}
