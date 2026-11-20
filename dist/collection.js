import {mountAmpImages} from './amp-images.js';
import {CATALOG_AMPS} from './catalog-timeline.js';
import * as THREE from 'three';
import {detailScene} from './app.js';
import {createAmpModel,modelReference} from './amp-models.js';
import {assemblyFor,assetById,SOURCES} from './library/catalog.js';
import {studioEnvironment} from './library/studio.js';

const $=id=>document.getElementById(id);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
// Selected chronological exhibits. Cabinet studies share geometry, not exact component layouts.
const amps=[
{
 "id": "super-six-reverb-1972",
 "year": 1972,
 "name": "Super Six Reverb",
 "era": "The silver-panel years",
 "years": "1972–1979; 1972-style study",
 "watts": 100,
 "speakers": "6 × 10″",
 "load": "5.33 Ω",
 "finish": "silver",
 "width": 1.325,
 "height": 2.418,
 "circuit": "1972-style master-volume family",
 "voice": "Twin-family power, spread across six tens.",
 "story": "Six tens in three rows, a master-volume Twin-family chassis, and a cabinet more than forty inches tall before the casters. The Super Six makes its point through speaker area and scale. Both channels have Volume, Treble, Middle and Bass; the Vibrato channel adds spring reverb and tremolo. This study represents the 100-watt early version, with no later pull boost, line out or hum-balance hardware. The period Fender specification sheet supports the cabinet envelope and removable casters. Surviving speaker brands and the exact introduction date remain less settled.",
 "ratingNote": "Catalog row 91 retains 1972 introduction and 1972–1979 production; sources suggest earlier examples. Six nominal 8 Ω speakers modeled as three series pairs in parallel give 16/3 Ω (5.33 Ω), commonly published as 5.2 Ω. Later 135 W versions are outside this assembly."
},
{
 "id": "blues-junior-1995",
 "year": 1995,
 "name": "Blues Junior",
 "era": "Modern compact combos",
 "years": "1995–2010, grouped I–II; 1995 study",
 "watts": 15,
 "speakers": "1 × 12″",
 "load": "8 Ω",
 "finish": "black",
 "width": 0.9,
 "height": 0.955,
 "circuit": "PR 295 / original 1995 family",
 "voice": "An EL84 pair, a single twelve, and gain before the Master.",
 "story": "The original Blues Junior puts two EL84s and a twelve-inch speaker into a compact black cabinet. Volume sets how hard the preamp works, while Master sets the level that follows it. The Fat switch changes the first stage’s bypassing; it is a switch beside six rotary controls. The November 1995 Fender manual supplies the cabinet dimensions, 15-watt rating and one 8-ohm Eminence speaker. Our exterior follows a seller-dated December 1995 US example, with its chrome top panel, rectangular Fender tag and distinctive tube opening in the rear board.",
 "ratingNote": "Catalog row 131 groups generations I–II through 2010. This is the original 1995 PR 295 configuration, not a Blues Junior III/IV or an audit of a particular green circuit board. Speaker basket, rear opening and hardware spacing are estimates."
},
{
 "id": "prosonic-1996",
 "year": 1996,
 "name": "Prosonic",
 "era": "Modern Custom Amp Shop designs",
 "years": "1996–2002, catalog range",
 "watts": 60,
 "speakers": "2 × 10″",
 "load": "16 Ω internal",
 "finish": "red",
 "width": 1.2,
 "height": 1.105,
 "circuit": "CSR 13 combo / 30–50–60 W modes",
 "voice": "Two gain controls, two tens, and three power-section settings.",
 "story": "The Prosonic gives its drive channel two gain controls before a separate Master. Its more unusual choice sits on the rear: the bias/rectifier selector. Fender specifies 30 watts for Class A/tube, 50 for AB/tube and 60 for AB/solid-state. Those are the factory mode names, not a measurement of this model. This is the 2×10 reverb combo, with two nominal 8-ohm Celestion-format speakers in series. Red is one of the manual’s factory color choices. The black front panel and chicken-head knobs follow an opened, seller-dated 1996 red-lizard example; the covering texture is an approximation.",
 "ratingNote": "Catalog row 137 groups combo and head. This study selects the CSR 13 combo: 16 Ω internal, switching the amplifier to 8 Ω when an extension is connected; the head’s 4/8/16 selector is omitted. Catalog ends 2002; secondary product guides end 2001. Internal layout and detailed speaker geometry are estimates."
},
 {
  "year": 1955,
  "name": "Tweed Deluxe",
  "era": "The tweed years",
  "years": "1955–1960",
  "watts": 12,
  "speakers": "1 × 12″",
  "load": "8 Ω",
  "finish": "tweed",
  "width": 1,
  "height": 1,
  "circuit": "5E3",
  "voice": "Two Volumes and one Tone, and they all interact.",
  "full": true,
  "story": "This is the 5E3, the narrow-panel Deluxe Fender built from 1955 to 1960. Two 6V6s, a 5Y3 rectifier, cathode bias, and no negative feedback loop on the drawing. Most owners will tell you there isn’t much clean headroom. It’s breaking up by the time it’s loud enough for a band, and plenty of people buy one for exactly that. The controls are the other thing players talk about. There are two Volumes and one Tone, and they all affect each other, including the Volume for the channel you’re not plugged into. It’s usually listed at 12 watts, and you’ll see 15 quoted too."
 },
 {
  "year": 1955,
  "name": "Tweed Tremolux",
  "era": "The tweed years",
  "years": "1955–1957, 5E9 / 5E9-A",
  "watts": 15,
  "speakers": "1 × 12″",
  "load": "8 Ω",
  "finish": "tweed",
  "width": 1,
  "height": 0.955,
  "circuit": "5E9",
  "voice": "A small tweed with tremolo built in.",
  "story": "Take a small two-channel tweed, add tremolo, and you’ve got the Tremolux. Speed and Depth sit on the top panel next to Tone and the two Volumes, so it’s five knobs where a Deluxe has three. Power is still a pair of 6V6s into one twelve, about 15 watts. The amp shown here is the early 1955 5E9 in the small Deluxe-size box. The later large-cabinet 5G9 and the blonde piggyback are different amps with the same name.",
  "ratingNote": "15 W follows the selected catalog row; later versions and published ratings vary. Cabinet dimensions remain provisional."
 },
 {
  "year": 1958,
  "name": "Tweed Champ",
  "era": "The tweed years",
  "years": "1958–1964, 8-inch version",
  "watts": 5,
  "speakers": "1 × 8″",
  "load": "4 Ω",
  "finish": "tweed",
  "width": 0.675,
  "height": 0.716,
  "circuit": "5F1",
  "voice": "One 6V6, one knob, no tone control.",
  "story": "It has one knob. That’s the Volume, and the power switch is built into it. Behind it there’s a 12AX7, a single 6V6 and a 5Y3, making about 5 watts into an eight-inch speaker. There’s no tone control, so you shape the sound with that knob and your guitar. This entry is the eight-inch version, which our catalog starts in 1958. The 5F1 circuit itself is usually dated from 1956. The cabinet here is modeled on a 1959 example.",
  "ratingNote": "Nominal load follows the catalog’s 4 Ω; vintage speakers may be marked 3.2 Ω."
 },
 {
  "year": 1961,
  "name": "Brown Deluxe",
  "era": "Brown & blonde",
  "years": "1961–1963",
  "watts": 20,
  "speakers": "1 × 12″",
  "load": "8 Ω",
  "finish": "brown",
  "width": 1.05,
  "height": 1.015,
  "circuit": "6G3",
  "voice": "Fixed bias and tremolo, still no reverb.",
  "story": "Each channel gets its own Volume and Tone, and there’s tremolo but no reverb. It’s a big step from the tweed Deluxe: the 6G3 drawing shows fixed bias, a negative feedback loop and a GZ34 rectifier. The tremolo works on the power-tube bias. Most sources rate it around 20 watts and some say 15. The cabinet is narrower than the later Deluxe Reverb. Ours is modeled on a 1962 amp with the Normal channel on the left, brown barrel knobs and no badge on the grille.",
  "ratingNote": "20 W follows the catalog’s approximate rating; some references quote 15 W. Speaker construction and internal placement are illustrative."
 },
 {
  "year": 1963,
  "name": "Deluxe Reverb",
  "era": "The black-panel years",
  "years": "1963–1967",
  "watts": 22,
  "speakers": "1 × 12″",
  "load": "8 Ω",
  "finish": "black",
  "width": 1.08,
  "height": 0.96,
  "circuit": "AB763",
  "voice": "Two 6V6s, one twelve, reverb and tremolo.",
  "story": "Two 6V6s, about 22 watts and one twelve, with reverb and tremolo on the Vibrato channel. A lot of players think of it as the club-size Fender. You can get to the point where the power section starts to push without needing a Twin’s worth of volume. The AB763 circuit is fixed bias with a GZ34 rectifier, and the tremolo is the optical kind, a different design from the bias tremolo on the Princeton Reverb. The model dates from 1963. Our explorer is based on 1965 examples."
 },
 {
  "year": 1964,
  "name": "Princeton Reverb",
  "era": "The black-panel years",
  "years": "1964–1967",
  "watts": 12,
  "speakers": "1 × 10″",
  "load": "8 Ω",
  "finish": "black",
  "width": 0.994,
  "height": 0.955,
  "circuit": "AA1164",
  "voice": "Its tremolo works on the power tubes.",
  "story": "Two 6V6s into a single ten, about 12 watts, one channel with reverb and tremolo. Two things set it apart from the bigger black-panel reverb amps. The tremolo works on the power-tube bias, not on the signal. And the phase inverter is half a 12AX7, where the bigger amps give that job a whole 12AT7. Analysts usually point to that inverter when they explain how a Princeton breaks up. Our model follows a 1965 raised-logo cabinet, with a period Oxford-style speaker in place of that amp’s replacement Weber.",
  "ratingNote": "12 W follows catalog row 67. Cabinet dimensions and internal spacing are estimates. AA1164 specifies 5U4GB; early GZ34 chart evidence remains unresolved."
 },
 {
  "year": 1968,
  "name": "Twin Reverb",
  "era": "The silver-panel years",
  "years": "1968–1976",
  "watts": 85,
  "speakers": "2 × 12″",
  "load": "4 Ω",
  "finish": "silver",
  "width": 1.25,
  "height": 1.02,
  "circuit": "Early silver-panel family",
  "ratingNote": "Early silver-panel Twins are commonly rated 85 watts. Later versions in this era increased to 100 watts; the 1977 ultralinear version is a separate exhibit.",
  "voice": "Early ones are 85 watts. Later ones are 100.",
  "story": "The same big clean combo, now with a silver panel: two twelves and about 85 watts on the early ones. The exact year matters in this era. Later amps in the run are rated 100 watts, and the circuit changed along the way, so a 1968 and a 1975 aren’t the same amp. Ours is a 1968. Open the explorer and you’ll find several cards that compare the AC568 drawing to the earlier AB763."
 }
];
amps.push(...CATALOG_AMPS);
amps.sort((a,b)=>a.year-b.year||(parseFloat(a.watts)||Infinity)-(parseFloat(b.watts)||Infinity)||a.name.localeCompare(b.name));
function panelLabel(a){
 if(a.wip)return a.era||'Catalog entry';
 if(a.id==='blues-junior-1995')return 'Original Blues Junior';
 if(a.id==='prosonic-1996')return 'Custom Amp Shop';
 if(a.era==='The black-panel years')return 'Black panel';
 if(a.era==='The silver-panel years'||a.era==='The headroom years')return 'Silver panel';
 if(a.finish==='wood')return 'Woodie';
 if(a.year===1949)return 'Two-tone';
 if(a.finish==='brown')return 'Brown panel';
 if(a.era==='The Rivera years')return 'Rivera era';
 if(a.year===2016)return 'Tweed reissue';
 if(a.year===2021)return 'Modern silver style';
 if(a.year===1993)return 'Modern tweed style';
 if(a.year===1996)return 'Hot Rod series';
 if(a.year===2006)return 'Modern tube';
 return 'Tweed';
}
function cardLeft(card){return card.getBoundingClientRect().left-scroll.getBoundingClientRect().left+scroll.scrollLeft;}
function variant(a){return createAmpModel(a);}

const strip=$('amp-strip'),scroll=$('collection-scroll'),detail=$('amp-detail');let selected=null,returnFocus=null,savedScroll=0,savedY=0,paused=reduced;
const groups=new Map();
for(const a of amps){if(!groups.has(a.year))groups.set(a.year,[]);groups.get(a.year).push(a);}
const cards=[];
for(const [year,models] of groups){
 const group=document.createElement('div');group.className='year-group'+(models.length>1?' year-group-shared':'');group.dataset.year=year;group.setAttribute('role','group');group.setAttribute('aria-label',`Introduced in ${year}. ${models.length} ${models.length===1?'model':'models'}, ordered by wattage.`);
 const row=document.createElement('div');row.className='year-amps';group.append(row);
 for(const a of models){const i=amps.indexOf(a),b=document.createElement('button');b.className='amp-card'+(a.wip?' amp-card-wip':'');b.dataset.watts=a.watts;b.dataset.panel=panelLabel(a);b.setAttribute('aria-label',`${a.year} ${a.name}, ${panelLabel(a)}, ${a.watts} watts. ${a.wip?'Work in progress. Open catalog notes':'Open amplifier detail'}`);b.innerHTML=`<span class="amp-slot" aria-hidden="true">${a.wip?'<span class="generic-amp"><i></i></span>':''}</span><span class="amp-tether" aria-hidden="true"></span><strong>${a.name}</strong><span class="amp-card-meta">${a.watts} W <i> / </i> ${a.speakers}</span><span class="amp-era" data-finish="${a.finish}">${panelLabel(a)}</span><span class="amp-open">${a.wip?'WIP · Catalog notes':'Explore the amp'}</span>`;b.onclick=()=>openAmp(i,b);row.append(b);cards.push(b);}
 const branch=document.createElement('span');branch.className='year-branches';branch.setAttribute('aria-hidden','true');group.append(branch);
 const stem=document.createElement('span');stem.className='year-stem';stem.setAttribute('aria-hidden','true');group.append(stem);
 const marker=document.createElement('div');marker.className='year-marker';marker.innerHTML=`<span>${year}</span>${models.length>1?`<small>${models.length} models</small>`:''}`;group.append(marker);strip.append(group);
}
document.querySelector('.collection-note').innerHTML=`${amps.length} catalog entries · ${amps.filter(a=>!a.wip).length} modeled studies in color · Gray entries are WIP. <a href="components.html">Explore the component library</a>. <button id="era-guide">Panel eras explained</button>`;
$('era-guide').onclick=()=>{const d=$('dialog');$('dialog-content').innerHTML='<span class="eyebrow">READING THE COLLECTION</span><h2>One name. Different generations.</h2><p>Black panel and silver panel describe the amplifier’s control panel, not the grille cloth or cabinet covering. Blackface and silverface are the familiar historical terms for these eras.</p><p>A model that spans both eras appears as separate entries. Circuit changes did not always coincide with a cosmetic change, so early silver-panel amps can retain earlier circuitry. Major revisions, such as the 135-watt ultralinear Twin, receive their own entry.</p><p>Modern amplifiers styled after an earlier era are labeled as modern designs or reissues. Their timeline year is their own introduction, not the vintage year in their product name.</p><p>Years mark approximate introductions, rather than the build date of a photographed example. Surviving transitional examples can overlap.</p><p><a href="https://www.fender.com/articles/parts-and-accessories/tweed-tolex-two-tone-a-guide-to-amp-coverings" target="_blank" rel="noopener noreferrer">Fender’s guide to amplifier coverings and panel eras</a></p>' ;d.showModal();};
const decadeValues=[1940,1950,1960,1970,1980,1990,2000,2010,2020];
decadeValues.forEach(d=>{const b=document.createElement('button');b.textContent=`${d}s`;b.dataset.decade=d;b.onclick=()=>{const i=amps.findIndex(a=>a.year>=d);scrollToIndex(i<0?amps.length-1:i)};$('collection-decades').append(b);});
function scrollToIndex(i){scroll.scrollTo({left:cardLeft(cards[Math.max(0,i)]),behavior:reduced?'instant':'smooth'});}
function positionSharedMarkers(){
 const viewport=scroll.getBoundingClientRect();
 for(const group of document.querySelectorAll('.year-group-shared')){
  const bounds=group.getBoundingClientRect();const start=Math.max(viewport.left,bounds.left),end=Math.min(viewport.right,bounds.right);
  if(end-start<90)continue;
  const half=group.querySelector('.amp-card').getBoundingClientRect().width/2;
  const center=Math.max(half,Math.min(bounds.width-half,(start+end)/2-bounds.left));
  group.querySelector('.year-marker').style.left=`${center}px`;group.querySelector('.year-stem').style.left=`${center}px`;
 }
}
function updatePosition(){positionSharedMarkers();const left=scroll.scrollLeft;const visible=cards.map((b,i)=>({i,left:cardLeft(b),right:cardLeft(b)+b.offsetWidth})).filter(b=>Math.min(b.right,left+scroll.clientWidth)-Math.max(b.left,left)>cards[b.i].offsetWidth*.5);const first=amps[visible[0]?.i||0];const last=amps[visible.at(-1)?.i||0];$('collection-position').textContent=`${first.year} — ${last.year}`;const max=scroll.scrollWidth-scroll.clientWidth;const progress=max?left/max:0;$('collection-progress').firstElementChild.style.transform=`translateX(${progress*200}%)`;$('collection-previous').disabled=left<2;$('collection-next').disabled=left>=max-2;document.querySelectorAll('#collection-decades button').forEach(b=>{const current=+b.dataset.decade===Math.floor(first.year/10)*10;b.classList.toggle('active',current);b.setAttribute('aria-pressed',current)});}
scroll.addEventListener('scroll',updatePosition,{passive:true});new ResizeObserver(updatePosition).observe(scroll);
scroll.addEventListener('wheel',e=>{if(e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;const max=scroll.scrollWidth-scroll.clientWidth;if(max<=0)return;if((e.deltaY>0&&scroll.scrollLeft<max-1)||(e.deltaY<0&&scroll.scrollLeft>1)){e.preventDefault();scroll.scrollLeft+=e.deltaY;}},{passive:false});
scroll.addEventListener('keydown',e=>{if(e.target!==scroll)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();scroll.scrollBy({left:(e.key==='ArrowRight'?1:-1)*cards[0].offsetWidth,behavior:reduced?'instant':'smooth'});}});
let drag=null;scroll.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;drag={x:e.clientX,left:scroll.scrollLeft,moved:false};});scroll.addEventListener('pointermove',e=>{if(!drag)return;if(Math.abs(e.clientX-drag.x)>6){drag.moved=true;scroll.classList.add('dragging');scroll.scrollLeft=drag.left-(e.clientX-drag.x);}});window.addEventListener('pointerup',()=>{setTimeout(()=>{drag=null;scroll.classList.remove('dragging')},0)});scroll.addEventListener('click',e=>{if(drag?.moved){e.preventDefault();e.stopImmediatePropagation()}},true);
$('collection-previous').onclick=()=>scroll.scrollBy({left:-scroll.clientWidth*.8,behavior:reduced?'instant':'smooth'});$('collection-next').onclick=()=>scroll.scrollBy({left:scroll.clientWidth*.8,behavior:reduced?'instant':'smooth'});
function updateMotion(){$('collection-motion').textContent=paused?'Resume motion':'Pause motion';$('collection-motion').setAttribute('aria-pressed',!paused);}$('collection-motion').onclick=()=>{paused=!paused;updateMotion()};updateMotion();

const originalStory=$('story-content').innerHTML,originalSpecs=$('specs-content').innerHTML,originalSource=$('sources').onclick;
function openAmp(i,button){if(drag?.moved)return;const a=amps[i];if(a.wip){openCatalog(a);return;}selected=i;returnFocus=button;savedScroll=scroll.scrollLeft;savedY=window.scrollY;
 $('collection').inert=true;document.querySelector('.masthead').inert=true;document.querySelector('.site-footer').inert=true;
 detail.hidden=false;mountAmpImages(a);document.title=`${a.name} (${panelLabel(a)}) — The Amplifier Observatory`;$("viewport").setAttribute("aria-label",`Interactive 3D ${a.name} cabinet study. Drag to rotate, scroll to zoom.`);detail.querySelector(".exhibit").setAttribute("aria-label",`${a.name} interactive exhibit`);document.body.classList.add('detail-open');$('detail-index').textContent=`${a.year} / ${a.name.toUpperCase()} / ${panelLabel(a).toUpperCase()}`;detail.setAttribute('aria-label',`${a.name}, ${panelLabel(a)} amplifier detail`);
 detail.querySelector('.stage-top .eyebrow').innerHTML=`<i></i> ${a.era.toUpperCase()}`;detail.querySelector('.object-id').textContent=`FENDER / ${a.circuit.toUpperCase()} / ${a.year}`;
 detail.querySelector('.story-panel > .eyebrow').innerHTML=`${a.years} <span class="tag">${panelLabel(a).toUpperCase()}</span>`;const words=a.name.split(' ');detail.querySelector('h1').innerHTML=`${words.slice(0,-1).join(' ')}<br><em>${words.at(-1)}.</em>`;detail.querySelector('.deck').textContent=a.voice;
 $('story-content').innerHTML=a.full?originalStory:`<p>${a.story}</p><div class="quote-note"><span>THE ERA</span><strong>${a.era}</strong></div>`;
 $('specs-content').innerHTML=a.full?originalSpecs:`<dl class="details"><div><dt>Panel / era</dt><dd>${panelLabel(a)}</dd></div><div><dt>Circuit / version</dt><dd>${a.circuit}</dd></div><div><dt>Production</dt><dd>${a.years}</dd></div><div><dt>Format</dt><dd>Tube combo</dd></div><div><dt>Speaker layout</dt><dd>${a.speakers}</dd></div></dl><p class="fine">Representative specifications. Cabinet profiles distinguish top and front controls, speaker layouts and finishes; internal components are illustrative. ${a.ratingNote||''}</p>`;
 const dds=detail.querySelectorAll('.spec-grid dd');dds[0].innerHTML=`${a.watts}<span> W</span>`;dds[1].textContent=a.speakers;dds[2].textContent=a.load;
 detail.querySelector('.panel-footer > span').textContent=a.circuit.toUpperCase();detail.querySelector('.model-note').textContent=a.full?'INTERPRETIVE 3D RECREATION':'REPRESENTATIVE CABINET STUDY';detail.querySelector('.object-caption strong').textContent=a.full?'OUTSIZED INFLUENCE.':a.era.toUpperCase();detail.querySelector('.object-caption span:last-child').firstChild.textContent=a.full?'SMALL CABINET.':'FENDER TUBE AMPLIFIERS.';
 $('sources').onclick=a.full?originalSource:()=>{const d=$('dialog');$('dialog-content').innerHTML=`<span class="eyebrow">EXHIBIT NOTES</span><h2>${a.name}</h2><p>${a.story}</p>${assemblyFor(a)?.study==='combo-batch-v1'?`<p>${a.ratingNote}</p><ul>${assemblyFor(a).sources.map(id=>`<li><a href="${SOURCES[id].url}" target="_blank" rel="noopener noreferrer">${SOURCES[id].title}</a> — ${SOURCES[id].note}</li>`).join('')}</ul>`:''}<p>These are representative catalog specifications, with rounded output ratings. Production transitions and surviving examples vary. The 3D cabinet is an interpretive study, not a scan or an exact component layout.</p><p><a href="https://support.fender.com/hc/en-us/articles/47450512831259-Fender-Guitar-Amplifier-Owner-s-Manuals" target="_blank" rel="noopener noreferrer">Fender’s official owner manual archive</a></p>`;d.showModal()};
 const reference=modelReference(a);if(reference){const baseSource=$('sources').onclick;$('sources').onclick=()=>{baseSource();$('dialog-content').innerHTML+=`<p><a href="${reference.source}" target="_blank" rel="noopener noreferrer">Exterior reference: ${reference.name}</a></p><p>${reference.basis||'Cabinet dimensions use current reissue specifications as a family proxy, rather than a measured vintage cabinet.'} Badges, cloth and detail dimensions remain interpretive.</p>`;};$('specs-content').innerHTML+=`<dl class="details"><div><dt>Cabinet W × H × D</dt><dd>${reference.dimensions}</dd></div></dl><p class="fine">${reference.basis||'Modern reissue dimension proxy; vintage measurements pending'}. Rear components are illustrative.</p>`;detail.querySelector('.model-note').textContent='REFINED CABINET STUDY';} const assembly=assemblyFor(a);if(assembly){$('specs-content').innerHTML+=`<dl class="details"><div><dt>Speaker reference</dt><dd>${assembly.speakerCount} × ${assetById(assembly.speaker).name}</dd></div><div><dt>Speaker wiring</dt><dd>${assembly.wiring}</dd></div><div><dt>Reference example</dt><dd>${assembly.example}</dd></div></dl><p class="fine">Speaker geometry and finishes remain under review. <a href="components.html">Inspect the shared component library</a>.</p>`;detail.querySelector('.model-note').textContent='COMPONENT LIBRARY / REFERENCE ASSEMBLY';} $('story-tab').click();detail.scrollTop=0;detailScene?.showModel(variant(a));detailScene?.setVisible(true);$('close-detail').focus({preventScroll:true});
}
function closeAmp(){if(selected===null)return;if($('dialog').open){$('dialog').close();return;}if(document.fullscreenElement){document.exitFullscreen();}detailScene?.setVisible(false);detail.hidden=true;document.title="The Amplifier Observatory — The collection";document.body.classList.remove('detail-open');$('collection').inert=false;document.querySelector('.masthead').inert=false;document.querySelector('.site-footer').inert=false;scroll.scrollLeft=savedScroll;window.scrollTo({top:savedY,behavior:'instant'});returnFocus?.focus({preventScroll:true});selected=null;}
$('close-detail').onclick=closeAmp;
document.addEventListener('keydown',e=>{if(detail.hidden||$('dialog').open||document.querySelector('#study-viewer[open]'))return;if(e.key==='Escape'){e.preventDefault();closeAmp();return;}if(e.key==='Tab'){const focusable=[...detail.querySelectorAll('button,[tabindex="0"],a')].filter(el=>!el.disabled&&el.getClientRects().length);const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function openCatalog(a){
 const fields=a.sourceFields;
 const labels=['Model / major version','Introduced (approx.)','Production end year','Production status','Output watts (approx.)','Cabinet / stock speakers','Nominal load (Ω)','Load type'];
 $('dialog-content').innerHTML=`<span class="eyebrow">WORK IN PROGRESS · SPREADSHEET ONLY</span><h2>${escapeText(a.name)}</h2><p class="fine">The gray amp is a generic placeholder. A construction model and explorer are still to come.</p><p>${escapeText(a.story||'No description recorded in the source spreadsheet.')}</p><dl class="details">${[...labels.map((label,i)=>[label,fields[i]]),['Era / series',fields[15]],['Era group',fields[16]],['Version and spec notes',fields[17]],['Review status',fields[20]],['Review note',fields[21]]].map(([label,value])=>`<div><dt>${label}</dt><dd>${escapeText(value||'Not recorded')}</dd></div>`).join('')}</dl><p class="fine">Catalog snapshot, November 20, 2026 · row ${a.catalogRow}. Approximate ratings and source review labels are retained; inclusion does not verify specifications.</p><p><a href="https://docs.google.com/spreadsheets/d/18bzOLj0RdEdjSneLXf9USwPAM5Zs7IRoAFwKpWmkBJw/edit" target="_blank" rel="noopener noreferrer">Source spreadsheet</a></p>`;
 if(/^https?:\/\//.test(fields[18])){const p=document.createElement('p'),link=document.createElement('a');link.href=fields[18];link.textContent='Specification reference listed in spreadsheet';link.target='_blank';link.rel='noopener noreferrer';p.append(link);$('dialog-content').append(p);}
 $('dialog').showModal();
}
$('about').onclick=()=>{$('dialog-content').innerHTML=`<span class="eyebrow">THE AMPLIFIER OBSERVATORY</span><h2>A collection to move through.</h2><p>All ${amps.length} entries from our source spreadsheet appear by approximate introduction year. Ten shared construction studies appear in color. Gray amps are generic WIP placeholders: select one for the spreadsheet’s description, specifications and review notes.</p><p>Catalog rows group major versions; they do not document every selected-year configuration. Models remain interpretive construction studies. Closing an exhibit returns you to your place in the timeline.</p><p>An independent study, not affiliated with Fender Musical Instruments Corporation.</p>`;$('dialog').showModal()};

if(detailScene){const host=$('collection-render');try{const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x090c10,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.45;host.append(renderer.domElement);
 const collectionEnvironment=studioEnvironment(renderer);const scenes=amps.map((a,i)=>{if(a.wip)return null;const scene=new THREE.Scene();scene.environment=collectionEnvironment.texture;scene.environmentIntensity=.55;const model=variant(a);scene.add(model);scene.add(new THREE.HemisphereLight(0xc8dae6,0x4a3020,2.4));for(const [color,power,pos] of [[0xffdfab,4.2,[-4,6,5]],[0xabcce8,2.4,[5,3,-4]],[0xffffff,1,[0,2,7]]]){const light=new THREE.DirectionalLight(color,power);light.position.set(...pos);scene.add(light)}const camera=new THREE.PerspectiveCamera(42,1,.1,50);camera.position.set(4.5,2.8,13);camera.lookAt(0,.05,0);return{scene,model,camera,slot:cards[i].querySelector('.amp-slot')};});
 const resize=()=>renderer.setSize(host.clientWidth,host.clientHeight);new ResizeObserver(resize).observe(host);resize();let last=0;let phase=0;
 function frame(time){requestAnimationFrame(frame);if(document.hidden||selected!==null){last=time;return;}if(time-last<32)return;const dt=Math.min((time-last)/1000,.1);last=time;if(!paused)phase+=dt;const root=host.getBoundingClientRect();renderer.setScissorTest(false);renderer.clear();renderer.setScissorTest(true);for(let i=0;i<scenes.length;i++){const s=scenes[i];if(!s)continue;const r=s.slot.getBoundingClientRect();if(r.right<=root.left||r.left>=root.right)continue;const x=r.left-root.left,y=root.bottom-r.bottom,w=r.width,h=r.height;renderer.setViewport(x,y,w,h);renderer.setScissor(Math.max(0,x),Math.max(0,y),Math.min(w,root.width-Math.max(0,x),r.right-root.left),Math.min(h,root.height-y));s.camera.aspect=w/h;s.camera.updateProjectionMatrix();s.model.rotation.y=-.35+Math.sin(phase*.17+i*.6)*.48;s.model.position.y=paused?0:Math.sin(phase*.6+i)*.055;renderer.render(s.scene,s.camera);}renderer.setScissorTest(false);}requestAnimationFrame(frame);
 }catch(error){console.error(error);host.innerHTML='<p class="render-error">3D rendering is unavailable in this browser. You can still select an amp to read its story.</p>';}}
updatePosition();

// Review link uses the same entry/close behavior as a timeline selection.
const exhibitQuery=new URLSearchParams(location.search);
const reviewAmps={"super-six-reverb-1972":{"year": 1972, "name": "Super Six Reverb"},"blues-junior-1995":{"year": 1995, "name": "Blues Junior"},"prosonic-1996":{"year": 1996, "name": "Prosonic"},'princeton-reverb-1965':{year:1964,name:'Princeton Reverb'},'deluxe-1957':{year:1955,name:'Tweed Deluxe'},'twin-1968':{year:1968,name:'Twin Reverb'},'deluxe-reverb-1965':{year:1963,name:'Deluxe Reverb'},'champ-1959':{year:1958,name:'Tweed Champ'},'tremolux-1955':{year:1955,name:'Tweed Tremolux'},'deluxe-1962':{year:1961,name:'Brown Deluxe'}};
const reviewAmp=reviewAmps[exhibitQuery.get('amp')];
if(reviewAmp){const i=amps.findIndex(a=>a.year===reviewAmp.year&&a.name===reviewAmp.name);if(i>=0){openAmp(i,cards[i]);if(exhibitQuery.get('view')==='inside')$('rear').click();}}
