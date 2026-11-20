import {createExploration} from './explore.js';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {studioEnvironment} from './library/studio.js';
import {disposeObject} from './library/parts.js';

const $=id=>document.getElementById(id);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const dialog=$('dialog');
function openDialog(html){$('dialog-content').innerHTML=html;dialog.showModal();}
$('close-dialog').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
$('about').onclick=()=>openDialog(`<span class="eyebrow">THE AMPLIFIER OBSERVATORY</span><h2>Instruments with a history.</h2><p>An independent, interactive collection about the amplifiers that helped shape electric music. Start with one small tweed cabinet. Follow its story. Look a little closer.</p><p>This first exhibit is a representative 1957 Deluxe, built as an interpretive 3D model. Timeline entries introduce future exhibits; only the Deluxe is modeled in this prototype.</p><p>Not affiliated with or endorsed by Fender Musical Instruments Corporation.</p>`);
$('sources').onclick=()=>openDialog(`<span class="eyebrow">EXHIBIT RESEARCH</span><h2>The details behind the Deluxe.</h2><p>The narrow-panel 5E3 is usually cataloged as 1955–1960, with some histories extending into 1961. Vintage output is commonly described as approximately 12–15 watts. This exhibit uses 12 watts and a representative 1 × 12-inch, 8-ohm configuration.</p><ul><li><a href="https://www.guitarworld.com/features/classic-gear-fender-tweed-deluxe" target="_blank" rel="noopener noreferrer">Guitar World: the history of the tweed Deluxe</a> — origins, circuit and notable players.</li><li><a href="https://www.fender.com/products/57-custom-deluxe" target="_blank" rel="noopener noreferrer">Fender: ’57 Custom Deluxe</a> — modern hand-wired interpretation and specifications.</li></ul><p>The model’s dimensions and construction details are approximate. It is a visual study, not a scan of a particular surviving amplifier.</p>`);
for(const name of ['story','specs'])$(name+'-tab').onclick=()=>{for(const key of ['story','specs']){$(key+'-tab').setAttribute('aria-selected',key===name);$(key+'-content').hidden=key!==name;}};
const eras=[
 ['1940s','The first Fender amplifiers arrive in wooden cabinets.'],['1950s','Tweed cabinets. Simple circuits. The beginnings of a new sound.'],['1960s','Brown and blonde give way to black panels, reverb and greater headroom.'],['1970s','Silver panels, larger stages and ever more clean power.'],['1980s','Channel switching brings a new generation of tube designs.'],['1990s','Vintage reissues meet new designs for working players.'],['2000s','Classic circuits return alongside modern high-gain voices.'],['2010s','Hand-wired recreations and new tube platforms revisit the past.'],['2020s','Small tube combos and renewed interest in Fender’s overlooked eras.']
];
const milestones=[
 [1946,'The first woodies','Where the story begins','Fender’s earliest amplifiers paired straightforward circuits with wooden cabinets. The Deluxe’s story begins here, before tweed became its signature.'],
 [1952,'The Bassman arrives','A bass amp with a second life','Designed for the electric bass, the Bassman would also become a defining guitar amplifier. Its evolution into a four-10 combo made it a landmark in amplifier design.'],
 [1955,'The tweed Deluxe','5E3 · THE CURRENT EXHIBIT','The narrow-panel 5E3 brings the Deluxe into its best-known tweed form. This is the amp you can explore in the current exhibit.'],
 [1963,'Reverb enters the picture','A new dimension in sound','The Vibroverb brought built-in spring reverb to a Fender combo. Reverb would soon become central to some of the company’s most enduring amplifiers.'],
 [1968,'The silver-panel era','A familiar voice, a new face','Silver panels changed the look of the Fender lineup. Circuit changes varied by model; the smaller Champs and Princetons remained close to earlier designs.'],
 [1977,'Room for more headroom','The ultralinear years','Late-1970s versions of several larger Fender combos increased their power and clean headroom. The 135-watt Twin Reverb represents the scale of that shift.'],
 [1982,'The Super Champ','Small gets ambitious','The Rivera-era Super Champ paired a compact 18-watt tube design with reverb and a lead voice. It offered a different answer to the small-amp question.'],
 [1993,'The Deluxe returns','An enduring reference','The ’65 Deluxe Reverb reissue brought a black-panel classic back to a new generation. The same period also introduced new Fender tube platforms.'],
 [2006,'A modern voice','Super-Sonic','The Super-Sonic combined vintage-inspired clean voices with a higher-gain channel. Fender’s tube story continued beyond recreating its past.'],
 [2016,'Back to the workbench','The ’57 Custom series','The ’57 Custom series revisited hand-wired tweed designs, including the Deluxe. More than half a century later, the simple circuit still had something to say.'],
 [2021,'The small-amp revival','Vibro Champ Reverb','The ’68 Custom Vibro Champ Reverb combined a single-ended tube platform with a larger speaker and digital reverb. Familiar ideas found new settings.']
];
const track=$('track');milestones.forEach(([year,title,sub,text],i)=>{const b=document.createElement('button');b.className='milestone'+(year===1955?' selected':'');b.innerHTML=`<time>${year}</time><strong>${title}</strong><span>${sub}</span>`;b.setAttribute('aria-label',`${year}: ${title}${year===1955?', current exhibit':', history preview'}`);b.onclick=()=>{if(year===1955){setEra(1);$('stage').scrollIntoView({behavior:reduced?'instant':'smooth',block:'start'});return;}openDialog(`<span class="eyebrow">${year} · TIMELINE PREVIEW</span><h2>${title}</h2><p>${text}</p><p class="fine">This milestone introduces a future exhibit. The tweed Deluxe is the interactive model in this prototype.</p><button class="dialog-cta" id="back-to-deluxe">Return to the Deluxe</button>`);$('back-to-deluxe').onclick=()=>{dialog.close();setEra(1)}};track.append(b);});
let era=1;eras.forEach(([label],i)=>{const b=document.createElement('button');b.textContent=label;b.onclick=()=>setEra(i);$('decades')?.append(b)||document.querySelector('.decades').append(b);});
function setEra(i){era=Math.max(0,Math.min(8,i));document.querySelectorAll('.decades button').forEach((b,j)=>{b.classList.toggle('active',j===era);b.setAttribute('aria-pressed',j===era)});$('era-label').textContent=eras[era][0];$('era-description').textContent=`${eras[era][0]} — ${eras[era][1]}`;$('previous').disabled=era===0;$('next').disabled=era===8;const year=1940+era*10;let idx=milestones.findIndex(m=>m[0]>=year);if(idx<0)idx=milestones.length-1;$('timeline').scrollTo({left:Math.max(0,idx*266-50),behavior:reduced?'instant':'smooth'});}
$('previous').onclick=()=>setEra(era-1);$('next').onclick=()=>setEra(era+1);setEra(1);
const timeline=$('timeline');timeline.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)&&!e.ctrlKey&&timeline.scrollWidth>timeline.clientWidth){const max=timeline.scrollWidth-timeline.clientWidth;if((e.deltaY>0&&timeline.scrollLeft<max-2)||(e.deltaY<0&&timeline.scrollLeft>2)){e.preventDefault();timeline.scrollLeft+=e.deltaY;}}},{passive:false});

export let detailScene;
try{detailScene=initScene();}catch(error){console.error(error);$('loading').textContent='The 3D view needs WebGL. Try a browser with hardware acceleration enabled.';$('viewport').setAttribute('aria-label','3D view unavailable. Amp story and details are available alongside.');}
function initScene(){
 const host=$('viewport'),scene=new THREE.Scene();
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0x090c10,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.45;host.append(renderer.domElement);
 const environment=studioEnvironment(renderer);scene.environment=environment.texture;scene.environmentIntensity=.55;
 let activeAmp,visible=false;
 const camera=new THREE.PerspectiveCamera(36,1,.1,100);camera.position.set(5,3.1,8.6);
 const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,.1,0);controls.enableDamping=true;controls.dampingFactor=.065;controls.enablePan=false;controls.minDistance=5;controls.maxDistance=14;controls.minPolarAngle=.3;controls.maxPolarAngle=Math.PI*.78;controls.autoRotate=!reduced;controls.autoRotateSpeed=.32;
 scene.add(new THREE.HemisphereLight(0xc8dae6,0x4a3020,2.4));
 const area=(color,intensity,x,y,z)=>{const l=new THREE.DirectionalLight(color,intensity);l.position.set(x,y,z);scene.add(l);return l};area(0xffdfab,4.2,-4,6,5);area(0xabcce8,2.4,5,3,-4);area(0xffffff,1,0,2,7);
 function texture(type){const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');let seed=73;const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646};
 if(type==='tweed'){ctx.fillStyle='#b99455';ctx.fillRect(0,0,512,512);for(let y=0;y<512;y+=4){for(let x=0;x<512;x+=4){const n=random();ctx.fillStyle=n>.5?'#c9ad77':'#856a3e';ctx.globalAlpha=.3+random()*.3;ctx.fillRect(x,y,3,2);}}ctx.globalAlpha=1;for(let i=-512;i<1024;i+=16){ctx.strokeStyle='#765c344f';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i+512,512);ctx.stroke();ctx.strokeStyle='#e0c28b88';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(i+4,0);ctx.lineTo(i+516,512);ctx.stroke();}for(let i=0;i<512;i+=4){ctx.fillStyle='#38271118';ctx.fillRect(i,0,1,512);ctx.fillRect(0,i,512,1)}}
 else if(type==='grill'){ctx.fillStyle='#38291d';ctx.fillRect(0,0,512,512);for(let i=0;i<512;i+=5){ctx.fillStyle=i%10===0?'#aa8a59':'#6e5233';ctx.fillRect(i,0,2,512);ctx.fillStyle='#b9a07a';ctx.globalAlpha=.4;ctx.fillRect(0,i,512,1);ctx.globalAlpha=1;}for(let i=0;i<10000;i++){ctx.fillStyle=random()>.5?'#c4a16b33':'#08070544';ctx.fillRect(random()*512,random()*512,1,2);}}
 const tex=new THREE.CanvasTexture(c);tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=renderer.capabilities.getMaxAnisotropy();tex.repeat.set(type==='tweed'?.55:1,type==='tweed'?.55:1);return tex;}
 const tweedTex=texture('tweed'),grillTex=texture('grill');
 const tweed=new THREE.MeshStandardMaterial({map:tweedTex,bumpMap:tweedTex,bumpScale:.025,roughness:1,color:0xd1c4a5});
 const cloth=new THREE.MeshStandardMaterial({map:grillTex,bumpMap:grillTex,bumpScale:.012,roughness:1,color:0xba9c70});
 tweed.name='cabinet-surface';cloth.name='grille-surface';
 const wood=new THREE.MeshStandardMaterial({color:0x6f492b,roughness:.94}),black=new THREE.MeshStandardMaterial({color:0x15120f,roughness:.8}),chrome=new THREE.MeshStandardMaterial({color:0xb7b9b4,metalness:.88,roughness:.27}),darkMetal=new THREE.MeshStandardMaterial({color:0x30322e,metalness:.75,roughness:.5}),leather=new THREE.MeshStandardMaterial({color:0x3f2819,roughness:.8});
 const amp=new THREE.Group();scene.add(amp);amp.rotation.y=-.12;activeAmp=amp;
 const cabinet=new THREE.Group(),baffle=new THREE.Group(),chassis=new THREE.Group();amp.add(cabinet,baffle,chassis);
 function rounded(w,h,d,r=.06){const s=new THREE.Shape(),x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);const g=new THREE.ExtrudeGeometry(s,{depth:Math.max(.005,d-.06),bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.03,bevelThickness:.03,curveSegments:8});g.translate(0,0,-d/2+.03);return g;}
 function box(parent,w,h,d,x,y,z,mat,r=.04){const m=new THREE.Mesh(rounded(w,h,d,r),mat);m.position.set(x,y,z);parent.add(m);return m;}
 function cylinder(parent,r1,r2,h,x,y,z,mat,rotation=0){const m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,32),mat);m.position.set(x,y,z);m.rotation.x=rotation;parent.add(m);return m;}
 // Hollow pine cabinet: four outer panels and two removable back rails.
 box(cabinet,.18,2.65,1.55,-1.67,0,0,tweed);box(cabinet,.18,2.65,1.55,1.67,0,0,tweed);
 box(cabinet,3.36,.18,1.55,0,1.26,0,tweed);box(cabinet,3.36,.18,1.55,0,-1.26,0,tweed);
 box(cabinet,3.22,.1,1.36,0,-1.13,-.01,wood);box(cabinet,3.18,.52,.13,0,1,-.74,tweed);box(cabinet,3.18,.42,.13,0,-1.04,-.74,tweed);
 // Front grille and narrow tweed frame.
 box(baffle,3.18,2.27,.10,0,0,.66,black);box(baffle,3.08,2.15,.055,0,-.005,.735,cloth);
 box(baffle,3.24,.19,.13,0,1.08,.77,tweed);box(baffle,3.24,.18,.13,0,-1.09,.77,tweed);
 box(baffle,.12,2.14,.12,-1.56,0,.77,tweed);box(baffle,.12,2.14,.12,1.56,0,.77,tweed);
 // Grille piping and badge, drawn as artwork on the actual 3D face.
 for(const x of [-1.485,1.485])box(baffle,.013,1.96,.015,x,0,.779,leather,.003);
 const badgeCanvas=document.createElement('canvas');badgeCanvas.width=600;badgeCanvas.height=170;const bc=badgeCanvas.getContext('2d');bc.fillStyle='#28221a';bc.fillRect(0,0,600,170);bc.strokeStyle='#b8a17a';bc.lineWidth=6;bc.strokeRect(6,6,588,158);bc.fillStyle='#d7c8a5';bc.font='italic bold 88px Georgia';bc.fillText('Deluxe',30,105);bc.font='24px Arial';bc.letterSpacing='5px';bc.fillText('FENDER ELECTRIC INST. CO.',38,146);const badgeMap=new THREE.CanvasTexture(badgeCanvas);badgeMap.colorSpace=THREE.SRGBColorSpace;
 const badge=new THREE.Mesh(new THREE.PlaneGeometry(.78,.22),new THREE.MeshStandardMaterial({map:badgeMap,roughness:.7}));badge.name='amp-badge';badge.position.set(.94,.79,.797);baffle.add(badge);
 // Back: speaker cone, basket spokes and magnet.
 const speaker=new THREE.Group();speaker.position.set(0,-.15,.34);speaker.rotation.x=-Math.PI/2;cabinet.add(speaker);
 cylinder(speaker,1.03,1.03,.07,0,0,0,darkMetal);cylinder(speaker,.92,.44,.3,0,.16,0,black);
 for(let a=0;a<Math.PI*2;a+=Math.PI/4){const spoke=box(speaker,.065,.35,1.15,Math.sin(a)*.45,.28,Math.cos(a)*.45,darkMetal,.01);spoke.rotation.y=a;}
 cylinder(speaker,.37,.37,.27,0,.48,0,darkMetal);cylinder(speaker,.28,.28,.02,0,.625,0,new THREE.MeshStandardMaterial({color:0xc0a97e,roughness:.8}));
 // Rear-facing chassis and hanging valves.
 box(chassis,2.88,.30,.55,0,.94,-.20,chrome);
 const glass=new THREE.MeshPhysicalMaterial({color:0xc8b18c,metalness:.1,roughness:.15,transparent:true,opacity:.42,transmission:.1});
 const filamentMat=new THREE.MeshStandardMaterial({color:0xffaa3c,emissive:0xff6b16,emissiveIntensity:2.8});
 filamentMat.name="tube-filament";const filaments=[];
 [-.94,-.58,-.12,.38,.9].forEach((x,i)=>{const size=i<2?.06:.095;cylinder(chassis,size,size,.08,x,.72,-.3,darkMetal);cylinder(chassis,size,size*.8,i<2?.27:.39,x,i<2?.57:.51,-.3,glass);const f=cylinder(chassis,.015,.015,.16,x,.5,-.3,filamentMat);filaments.push(f);});
 // Recessed chrome top panel at the rear edge, real knobs and input jacks.
 box(cabinet,2.6,.045,.40,0,1.36,-.35,chrome,.025);
 for(let i=0;i<3;i++){const x=-.97+i*.43;cylinder(cabinet,.085,.11,.10,x,1.43,-.34,black);const pointer=box(cabinet,.04,.018,.17,x,1.49,-.33,new THREE.MeshStandardMaterial({color:0xe0c992}),.01);pointer.rotation.y=-.6+i*.4;}
 for(const x of [.46,.72])for(const z of [-.25,-.46]){cylinder(cabinet,.049,.049,.024,x,1.398,z,chrome);cylinder(cabinet,.026,.026,.026,x,1.414,z,black);}
 const jewelMat=new THREE.MeshStandardMaterial({color:0xe49a33,emissive:0xff6b0c,emissiveIntensity:3,roughness:.15});jewelMat.name="pilot-jewel";cylinder(cabinet,.055,.055,.04,1.03,1.407,-.32,jewelMat);const pilot=new THREE.PointLight(0xffa039,.7,1);pilot.position.set(1.03,1.6,-.3);amp.add(pilot);
 // Leather strap handle with curved arch, end brackets and mounting screws.
 const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(-.62,1.4,.17),new THREE.Vector3(-.45,1.59,.17),new THREE.Vector3(0,1.64,.17),new THREE.Vector3(.45,1.59,.17),new THREE.Vector3(.62,1.4,.17)]);
 const handle=new THREE.Mesh(new THREE.TubeGeometry(curve,32,.065,8,false),leather);handle.scale.z=1.5;cabinet.add(handle);
 for(const x of [-.64,.64]){box(cabinet,.24,.035,.23,x,1.38,.22,chrome,.02);cylinder(cabinet,.026,.026,.014,x,1.41,.22,chrome);}
 for(const x of [-1.35,1.35])for(const z of [-.5,.5])cylinder(cabinet,.09,.11,.12,x,-1.39,z,black);
 for(const x of [-1.51,1.51])for(const y of [-1.06,1.02]){const screw=cylinder(cabinet,.026,.026,.014,x,y,-.827,chrome,Math.PI/2);}
 // A faint orbit under the floating amplifier anchors the object without a floor.
 const ring=new THREE.Mesh(new THREE.RingGeometry(1.95,1.958,128),new THREE.MeshBasicMaterial({color:0x7a6542,transparent:true,opacity:.2,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=-1.86;scene.add(ring);
 const ring2=ring.clone();ring2.scale.setScalar(1.27);ring2.material=ring.material.clone();ring2.material.opacity=.07;scene.add(ring2);
 let light=true,auto=!reduced,last=0;let viewTransition=null;
 const exploration=createExploration({host,stage:$('stage'),camera,stopMotion(){auto=false;updateRotate();},focusPart(side){if(side==='top'){view(2.8,7.2,-7.8);return;}const local=activeAmp.worldToLocal(camera.position.clone());if((side==='front'&&local.z<0)||(side==='rear'&&(local.z>0||local.y>3.5)))view(side==='front'?3.5:-3.5,side==='front'?1.8:.65,side==='front'?8.5:-8.5);}});
 function updateRotate(){controls.autoRotate=auto;$('rotate').innerHTML=auto?'Ⅱ <span>Pause rotation</span>':'▷ <span>Resume rotation</span>';$('rotate').setAttribute('aria-pressed',String(auto));$('rotate').title=auto?'Pause rotation':'Resume rotation';$('rotate').setAttribute('aria-label',auto?'Pause automatic rotation':'Resume automatic rotation');}updateRotate();
 $('rotate').onclick=()=>{auto=!auto;updateRotate()};
 controls.addEventListener('start',()=>{auto=false;updateRotate();viewTransition=null});
 function view(x,y,z){auto=false;updateRotate();viewTransition={from:camera.position.clone(),to:new THREE.Vector3(x,y,z),t:0};}
 $('front').onclick=()=>view(0,1.7,9.8);$('rear').onclick=()=>view(-.4,2.3,-9.8);$('reset').onclick=()=>{exploration.clear();view(5,3.1,8.6);};
 host.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-','='].includes(e.key)){e.preventDefault();auto=false;updateRotate();viewTransition=null;const p=camera.position.clone().sub(controls.target);if(e.key==='ArrowLeft'||e.key==='ArrowRight')p.applyAxisAngle(new THREE.Vector3(0,1,0),e.key==='ArrowLeft'?.15:-.15);else if(e.key==='+'||e.key==='=')p.multiplyScalar(.9);else if(e.key==='-')p.multiplyScalar(1.1);else p.y+=e.key==='ArrowUp'?.25:-.25;p.clampLength(5,14);camera.position.copy(p.add(controls.target));}});
 $('power').onclick=()=>{light=!light;$('power').setAttribute('aria-pressed',light);$('power').innerHTML=`<span></span> PILOT LIGHT ${light?'ON':'OFF'}`;jewelMat.emissiveIntensity=light?3:0;filamentMat.emissiveIntensity=light?2.8:0;pilot.intensity=light?.7:0;activeAmp.traverse(o=>{if(o.isMesh&&o.material.name==="pilot-jewel")o.material.emissiveIntensity=light?3:0;if(o.isMesh&&o.material.name==="tube-filament")o.material.emissiveIntensity=light?2.8:0;});};
 $('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('stage').requestFullscreen()}catch{$('fullscreen').textContent='Fullscreen unavailable';}};
 const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.zoom=activeAmp?.userData.exploration?Math.min(1,camera.aspect/.95):1;camera.updateProjectionMatrix();};new ResizeObserver(resize).observe(host);resize();$('loading').hidden=true;
 function frame(ms){requestAnimationFrame(frame);if(!visible||document.hidden){last=ms;return;}const dt=Math.min((ms-last)/1000,.05);last=ms;const t=ms*.001;if(!reduced)activeAmp.position.y=Math.sin(t*.55)*.045;if(viewTransition){viewTransition.t=Math.min(1,viewTransition.t+dt*1.5);const p=viewTransition.t;camera.position.lerpVectors(viewTransition.from,viewTransition.to,p*p*(3-2*p));if(p===1)viewTransition=null;}controls.update(dt);exploration.update();renderer.render(scene,camera);}requestAnimationFrame(frame);
 document.addEventListener('visibilitychange',()=>{last=performance.now()});
 return {base:amp, setVisible(value){visible=value;if(value)resize();}, showModel(model){
   if(activeAmp!==amp){scene.remove(activeAmp);disposeObject(activeAmp);}
   amp.visible=!model;activeAmp=model||amp;if(model)scene.add(model);exploration.attach(activeAmp);camera.position.set(5,3.1,8.6);controls.target.set(0,.1,0);viewTransition=null;auto=!reduced;updateRotate();controls.update();
 }};
}
