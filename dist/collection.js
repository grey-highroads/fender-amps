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
 "id": "super-reverb-ab763",
 "year": 1963,
 "name": "Super Reverb",
 "era": "Black-panel amplifiers",
 "years": "1963–1967 · shown as a 1965 AB763",
 "watts": 40,
 "speakers": "4 × 10″",
 "load": "2 Ω",
 "finish": "black",
 "width": 1.256,
 "height": 1.463,
 "circuit": "AB763",
 "voice": "Four tens wired for 2 ohms.",
 "story": "Four ten-inch speakers in a tall cabinet, driven by two 6L6GCs at about 40 watts. The four 8-ohm tens are wired in parallel, which makes a 2-ohm load. That’s about as low as Fender went, so pulling two speakers or adding a cabinet changes the load a lot. The Vibrato channel has reverb, tremolo and the amp’s only Middle knob, and both channels have a Bright switch. The rectifier is a GZ34. The Super Reverb dates from 1963. Ours is a 1965-style AB763.",
 "ratingNote": "Catalog row 60, 1963 introduction; selected 1965-style AB763, not every revision in the run. Cabinet dimensions come from a secondary field guide. Speaker maker, exact interior positions and detailed hardware dimensions remain estimates."
},
{
 "id": "vibrasonic-5g13-1960",
 "year": 1959,
 "name": "Vibrasonic",
 "era": "Brown-panel amplifiers",
 "years": "1959–1963 · shown as a 1960 5G13",
 "watts": 40,
 "speakers": "1 × 15″",
 "load": "8 Ω",
 "finish": "brown",
 "width": 1.25,
 "height": 1.194,
 "circuit": "5G13",
 "voice": "One fifteen, harmonic vibrato, and no rectifier tube.",
 "story": "A brown-panel combo with a single 15-inch speaker and two 6L6GCs, rated at 40 watts. Vintage Guitar calls it the first Fender with solid-state rectification and the first with a JBL speaker as standard. There’s no rectifier tube. Six silicon diodes do that job. The Vibrato channel has the brown era’s harmonic vibrato, which sweeps the tone as well as the volume, and one Presence knob works on both channels. When it was new, it was by far Fender’s most expensive amp per watt. Ours is the early 5G13 circuit, about 1960. The later 6G13-A changed the circuit and added an extension speaker jack.",
 "ratingNote": "Catalog row 38 groups 6G13 / 6G13-A; this explicitly selects earlier 5G13. Catalog 40 W retained against a secondary 50 W figure. Early cabinet envelope is a secondary estimate; later Fender catalog width and tube complement differ. Exact speaker suffix remains unresolved."
},
{
 "id": "showman-blonde-1961",
 "year": 1960,
 "name": "Showman",
 "era": "Blonde piggyback amplifiers",
 "years": "1960–1963 · shown as a 1961 6G14-A",
 "watts": 85,
 "speakers": "1 × 15″",
 "load": "8 Ω",
 "finish": "blonde",
 "width": 1.8,
 "height": 1.97,
 "circuit": "6G14-A",
 "voice": "Fender splits the amp into a head and a cabinet.",
 "story": "With the Showman, Fender put the chassis in a head and gave the speaker its own box. Getting the amp out of the speaker cabinet is a big part of how Fender built an amp this loud and clean in 1960. The 6G14-A head has four 5881 output tubes, a silicon-diode power supply, harmonic vibrato on the Vibrato channel and one Presence knob for both channels. The catalog rates it at 85 watts, and you’ll see 80 and 100 quoted too. Ours sits on the single-fifteen cabinet, a closed box with a JBL mounted on a tone ring inside. There was a single-twelve cabinet as well, and a two-fifteen version came later.",
 "ratingNote": "Catalog row 44, 85 W retained against secondary 80–100 W figures. Fifteen cabinet dimensions agree with a later period Fender catalog. Head depth uses a selected-year secondary 9-inch estimate; later catalog 11½-inch depth conflicts. Tone-ring geometry, speaker suffix and fastening details remain provisional."
},
{
 "id": "super-six-reverb-1972",
 "year": 1972,
 "name": "Super Six Reverb",
 "era": "The silver-panel years",
 "years": "1972–1979 · shown as a 1972 amp",
 "watts": 100,
 "speakers": "6 × 10″",
 "load": "5.33 Ω",
 "finish": "silver",
 "width": 1.325,
 "height": 2.418,
 "circuit": "1972-style master-volume family",
 "voice": "Six tens on a master-volume Twin-family chassis.",
 "story": "Six ten-inch speakers in three rows, on a master-volume chassis from the Twin family. The cabinet is more than forty inches tall before you put the casters on. Both channels have Volume, Treble, Middle and Bass, and the Vibrato channel adds spring reverb and tremolo. Ours is the early 100-watt version, so there’s no pull boost, line out or hum balance. The cabinet size and the removable casters come from Fender’s spec sheet for the period. Which speakers these shipped with, and exactly when the model first appeared, are less settled.",
 "ratingNote": "Catalog row 91 retains 1972 introduction and 1972–1979 production; sources suggest earlier examples. Six nominal 8 Ω speakers modeled as three series pairs in parallel give 16/3 Ω (5.33 Ω), commonly published as 5.2 Ω. Later 135 W versions are outside this assembly."
},
{
 "id": "blues-junior-1995",
 "year": 1995,
 "name": "Blues Junior",
 "era": "Modern compact combos",
 "years": "1995–2010 · shown as a 1995 amp",
 "watts": 15,
 "speakers": "1 × 12″",
 "load": "8 Ω",
 "finish": "black",
 "width": 0.9,
 "height": 0.955,
 "circuit": "PR 295 / original 1995 family",
 "voice": "Two EL84s, one twelve, and a Master after the gain.",
 "story": "Two EL84s and a twelve-inch speaker in a small black cabinet, rated at 15 watts. Volume sets how hard the preamp works and Master sets the level after it, so you can push the preamp without sending all of that on to the output section. The Fat switch changes the bypassing on the first stage. This is the original 1995 version. The dimensions, the rating and the 8-ohm Eminence come from Fender’s November 1995 manual. The look follows a seller-dated December 1995 US amp, with the chrome top panel, the rectangular Fender tag and the tube opening in the rear board.",
 "ratingNote": "Catalog row 131 groups generations I–II through 2010. This is the original 1995 PR 295 configuration, not a Blues Junior III/IV or an audit of a particular green circuit board. Speaker basket, rear opening and hardware spacing are estimates."
},
{
 "id": "prosonic-1996",
 "year": 1996,
 "name": "Prosonic",
 "era": "Modern Custom Amp Shop designs",
 "years": "1996–2002",
 "watts": 60,
 "speakers": "2 × 10″",
 "load": "16 Ω internal",
 "finish": "red",
 "width": 1.2,
 "height": 1.105,
 "circuit": "CSR 13 combo / 30–50–60 W modes",
 "voice": "Two gain knobs, two tens, and a three-way power-section switch.",
 "story": "The drive channel has two gain controls ahead of its own Master. The more unusual feature is on the back: a switch that changes the rectifier and the output-tube bias together. Fender’s manual gives 30 watts for Class A with the tube rectifier, 50 for AB with the tube rectifier and 60 for AB with solid-state rectification. Those are Fender’s names and ratings, and we haven’t measured them. This is the 2 × 10 combo with reverb, two 8-ohm tens wired in series. Red was one of the factory colors. Our black front panel and chicken-head knobs follow a seller-dated 1996 red-lizard amp, and the covering texture is an approximation.",
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
 if(a.id==='super-reverb-ab763')return 'Black panel';
 if(a.finish==='blonde')return 'Blonde';
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
decadeValues.forEach(d=>{const b=document.createElement('button');b.textContent=`${d}s`;b.dataset.decade=d;b.onclick=()=>{const i=amps.findIndex((a,i)=>!cards[i].hidden&&a.year>=d);if(i>=0)scrollToIndex(i)};$('collection-decades').append(b);});
function filterTimeline(all){
 const anchor=cards.findIndex(b=>!b.hidden&&cardLeft(b)+b.offsetWidth>scroll.scrollLeft);
 const year=amps[Math.max(0,anchor)].year;
 cards.forEach((b,i)=>b.hidden=!all&&!!amps[i].wip);
 for(const group of strip.querySelectorAll('.year-group')){
  const count=group.querySelectorAll('.amp-card:not([hidden])').length;
  group.hidden=count===0;
  group.classList.toggle('year-group-shared',count>1);
  group.setAttribute('aria-label',`Introduced in ${group.dataset.year}. ${count} ${count===1?'model':'models'}, ordered by wattage.`);
  group.querySelector('.year-marker').innerHTML=`<span>${group.dataset.year}</span>${count>1?`<small>${count} models</small>`:''}`;
  group.querySelector('.year-marker').style.left='';group.querySelector('.year-stem').style.left='';
 }
 $('show-active').setAttribute('aria-pressed',!all);$('show-all').setAttribute('aria-pressed',all);
 const count=cards.filter(b=>!b.hidden).length;
 document.querySelectorAll('#collection-decades button').forEach(b=>b.disabled=!amps.some((a,i)=>!cards[i].hidden&&Math.floor(a.year/10)*10===+b.dataset.decade));
 const next=amps.findIndex((a,i)=>!cards[i].hidden&&a.year>=year);
 const target=next>=0?next:cards.findLastIndex(b=>!b.hidden);
 scroll.scrollTo({left:cardLeft(cards[target]),behavior:'instant'});
 updatePosition();
}
$('show-active').onclick=()=>filterTimeline(false);
$('show-all').onclick=()=>filterTimeline(true);
filterTimeline(false);
function scrollToIndex(i){scroll.scrollTo({left:cardLeft(cards[Math.max(0,i)]),behavior:reduced?'instant':'smooth'});}
function positionSharedMarkers(){
 const viewport=scroll.getBoundingClientRect();
 for(const group of document.querySelectorAll('.year-group-shared')){
  const bounds=group.getBoundingClientRect();const start=Math.max(viewport.left,bounds.left),end=Math.min(viewport.right,bounds.right);
  if(end-start<90)continue;
  const half=group.querySelector('.amp-card:not([hidden])').getBoundingClientRect().width/2;
  const center=Math.max(half,Math.min(bounds.width-half,(start+end)/2-bounds.left));
  group.querySelector('.year-marker').style.left=`${center}px`;group.querySelector('.year-stem').style.left=`${center}px`;
 }
}
function updatePosition(){positionSharedMarkers();const left=scroll.scrollLeft;const visible=cards.map((b,i)=>({i,left:cardLeft(b),right:cardLeft(b)+b.offsetWidth})).filter(b=>!cards[b.i].hidden&&Math.min(b.right,left+scroll.clientWidth)-Math.max(b.left,left)>cards[b.i].offsetWidth*.5);const first=amps[visible[0]?.i||0];const last=amps[visible.at(-1)?.i||0];$('collection-position').textContent=`${first.year} — ${last.year}`;const max=scroll.scrollWidth-scroll.clientWidth;const progress=max?left/max:0;$('collection-progress').firstElementChild.style.transform=`translateX(${progress*200}%)`;$('collection-previous').disabled=left<2;$('collection-next').disabled=left>=max-2;document.querySelectorAll('#collection-decades button').forEach(b=>{const current=+b.dataset.decade===Math.floor(first.year/10)*10;b.classList.toggle('active',current);b.setAttribute('aria-pressed',current)});}
scroll.addEventListener('scroll',updatePosition,{passive:true});new ResizeObserver(updatePosition).observe(scroll);
scroll.addEventListener('wheel',e=>{if(e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;const max=scroll.scrollWidth-scroll.clientWidth;if(max<=0)return;if((e.deltaY>0&&scroll.scrollLeft<max-1)||(e.deltaY<0&&scroll.scrollLeft>1)){e.preventDefault();scroll.scrollLeft+=e.deltaY;}},{passive:false});
scroll.addEventListener('keydown',e=>{if(e.target!==scroll)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();scroll.scrollBy({left:(e.key==='ArrowRight'?1:-1)*cards.find(b=>!b.hidden).offsetWidth,behavior:reduced?'instant':'smooth'});}});
let drag=null;scroll.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;drag={x:e.clientX,left:scroll.scrollLeft,moved:false};});scroll.addEventListener('pointermove',e=>{if(!drag)return;if(Math.abs(e.clientX-drag.x)>6){drag.moved=true;scroll.classList.add('dragging');scroll.scrollLeft=drag.left-(e.clientX-drag.x);}});window.addEventListener('pointerup',()=>{setTimeout(()=>{drag=null;scroll.classList.remove('dragging')},0)});scroll.addEventListener('click',e=>{if(drag?.moved){e.preventDefault();e.stopImmediatePropagation()}},true);
$('collection-previous').onclick=()=>scroll.scrollBy({left:-scroll.clientWidth*.8,behavior:reduced?'instant':'smooth'});$('collection-next').onclick=()=>scroll.scrollBy({left:scroll.clientWidth*.8,behavior:reduced?'instant':'smooth'});
function updateMotion(){$('collection-motion').textContent=paused?'Resume motion':'Pause motion';$('collection-motion').setAttribute('aria-pressed',!paused);}$('collection-motion').onclick=()=>{paused=!paused;updateMotion()};updateMotion();

const originalStory=$('story-content').innerHTML,originalSpecs=$('specs-content').innerHTML,originalSource=$('sources').onclick;
function openAmp(i,button){if(drag?.moved)return;const a=amps[i];if(a.wip){openCatalog(a);return;}selected=i;returnFocus=button;savedScroll=scroll.scrollLeft;savedY=window.scrollY;
 $('collection').inert=true;document.querySelector('.masthead').inert=true;document.querySelector('.site-footer').inert=true;
 detail.hidden=false;mountAmpImages(a);document.title=`${a.name} (${panelLabel(a)}) · Amp Archive`;$("viewport").setAttribute("aria-label",`Interactive 3D ${a.name} cabinet study. Drag to rotate, scroll to zoom.`);detail.querySelector(".exhibit").setAttribute("aria-label",`${a.name} interactive exhibit`);document.body.classList.add('detail-open');$('detail-index').textContent=`${a.year} / ${a.name.toUpperCase()} / ${panelLabel(a).toUpperCase()}`;detail.setAttribute('aria-label',`${a.name}, ${panelLabel(a)} amplifier detail`);
 detail.querySelector('.stage-top .eyebrow').innerHTML=`<i></i> ${a.era.toUpperCase()}`;detail.querySelector('.object-id').textContent=`FENDER / ${a.circuit.toUpperCase()} / ${a.year}`;
 detail.querySelector('.story-panel > .eyebrow').innerHTML=`${a.years} <span class="tag">${panelLabel(a).toUpperCase()}</span>`;const words=a.name.split(' ');detail.querySelector('h1').innerHTML=`${words.slice(0,-1).join(' ')}<br><em>${words.at(-1)}.</em>`;detail.querySelector('.deck').textContent=a.voice;
 $('story-content').innerHTML=a.full?originalStory:`<p>${a.story}</p><div class="quote-note"><span>THE ERA</span><strong>${a.era}</strong></div>`;
 $('specs-content').innerHTML=a.full?originalSpecs:`<dl class="details"><div><dt>Panel / era</dt><dd>${panelLabel(a)}</dd></div><div><dt>Circuit / version</dt><dd>${a.circuit}</dd></div><div><dt>Production</dt><dd>${a.years}</dd></div><div><dt>Format</dt><dd>${a.id==='showman-blonde-1961'?'Head and separate cabinet':'Tube combo'}</dd></div><div><dt>Speaker layout</dt><dd>${a.speakers}</dd></div></dl><p class="fine">Representative specifications. Cabinet profiles distinguish top and front controls, speaker layouts and finishes; internal components are illustrative. ${a.ratingNote||''}</p>`;
 const dds=detail.querySelectorAll('.spec-grid dd');dds[0].innerHTML=`${a.watts}<span> W</span>`;dds[1].textContent=a.speakers;dds[2].textContent=a.load;
 detail.querySelector('.panel-footer > span').textContent=a.circuit.toUpperCase();detail.querySelector('.model-note').textContent='3D MODEL · BUILT FROM DRAWINGS AND PHOTOS';
 $('sources').onclick=a.full?originalSource:()=>{const d=$('dialog');$('dialog-content').innerHTML=`<span class="eyebrow">NOTES AND SOURCES</span><h2>${a.name}</h2><p>${a.story}</p>${assemblyFor(a)?.study==='combo-batch-v1'?`<p>${a.ratingNote}</p><ul>${assemblyFor(a).sources.map(id=>`<li><a href="${SOURCES[id].url}" target="_blank" rel="noopener noreferrer">${SOURCES[id].title}</a> — ${SOURCES[id].note}</li>`).join('')}</ul>`:''}<p>The specs are typical catalog figures, and the power ratings are rounded. Fender changed amps during a production run, so individual amps vary. The 3D model is built from drawings and photos. It isn’t a scan, and parts inside may not sit exactly where they are on a real chassis.</p><p><a href="https://support.fender.com/hc/en-us/articles/47450512831259-Fender-Guitar-Amplifier-Owner-s-Manuals" target="_blank" rel="noopener noreferrer">Fender’s official owner manual archive</a></p>`;d.showModal()};
 const reference=modelReference(a);if(reference){const baseSource=$('sources').onclick;$('sources').onclick=()=>{baseSource();$('dialog-content').innerHTML+=`<p><a href="${reference.source}" target="_blank" rel="noopener noreferrer">Exterior reference: ${reference.name}</a></p><p>${reference.basis||'Cabinet dimensions use current reissue specifications as a family proxy, rather than a measured vintage cabinet.'} Badges, cloth and detail dimensions remain interpretive.</p>`;};$('specs-content').innerHTML+=`<dl class="details"><div><dt>${a.id==='showman-blonde-1961'?'Assembled W × H × D':'Cabinet W × H × D'}</dt><dd>${reference.dimensions}</dd></div></dl><p class="fine">${reference.basis||'Modern reissue dimension proxy; vintage measurements pending'}. Rear components are illustrative.</p>`;} const assembly=assemblyFor(a);if(assembly){$('specs-content').innerHTML+=`<dl class="details"><div><dt>Speaker reference</dt><dd>${assembly.speakerCount} × ${assetById(assembly.speaker).name}</dd></div><div><dt>Speaker wiring</dt><dd>${assembly.wiring}</dd></div><div><dt>Reference example</dt><dd>${assembly.example}</dd></div></dl><p class="fine">Speaker geometry and finishes remain under review. <a href="components.html">Inspect the shared component library</a>.</p>`;} $('story-tab').click();detail.scrollTop=0;detailScene?.showModel(variant(a));detailScene?.setVisible(true);$('close-detail').focus({preventScroll:true});
}
function closeAmp(){if(selected===null)return;if($('dialog').open){$('dialog').close();return;}if(document.fullscreenElement){document.exitFullscreen();}detailScene?.setVisible(false);detail.hidden=true;document.title="Amp Archive: classic Fender tube amps";document.body.classList.remove('detail-open');$('collection').inert=false;document.querySelector('.masthead').inert=false;document.querySelector('.site-footer').inert=false;scroll.scrollLeft=savedScroll;window.scrollTo({top:savedY,behavior:'instant'});returnFocus?.focus({preventScroll:true});selected=null;}
$('close-detail').onclick=closeAmp;
document.addEventListener('keydown',e=>{if(detail.hidden||$('dialog').open||document.querySelector('#study-viewer[open]'))return;if(e.key==='Escape'){e.preventDefault();closeAmp();return;}if(e.key==='Tab'){const focusable=[...detail.querySelectorAll('button,select,summary,[tabindex="0"],a')].filter(el=>!el.disabled&&el.getClientRects().length);const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function openCatalog(a){
 const fields=a.sourceFields;
 const labels=['Model / major version','Introduced (approx.)','Production end year','Production status','Output watts (approx.)','Cabinet / stock speakers','Nominal load (Ω)','Load type'];
 $('dialog-content').innerHTML=`<span class="eyebrow">WORK IN PROGRESS · SPREADSHEET ONLY</span><h2>${escapeText(a.name)}</h2><p class="fine">The gray amp is a generic placeholder. A construction model and explorer are still to come.</p><p>${escapeText(a.story||'No description recorded in the source spreadsheet.')}</p><dl class="details">${[...labels.map((label,i)=>[label,fields[i]]),['Era / series',fields[15]],['Era group',fields[16]],['Version and spec notes',fields[17]],['Review status',fields[20]],['Review note',fields[21]]].map(([label,value])=>`<div><dt>${label}</dt><dd>${escapeText(value||'Not recorded')}</dd></div>`).join('')}</dl><p class="fine">Catalog snapshot, November 20, 2026 · row ${a.catalogRow}. Approximate ratings and source review labels are retained; inclusion does not verify specifications.</p><p><a href="https://docs.google.com/spreadsheets/d/18bzOLj0RdEdjSneLXf9USwPAM5Zs7IRoAFwKpWmkBJw/edit" target="_blank" rel="noopener noreferrer">Source spreadsheet</a></p>`;
 if(/^https?:\/\//.test(fields[18])){const p=document.createElement('p'),link=document.createElement('a');link.href=fields[18];link.textContent='Specification reference listed in spreadsheet';link.target='_blank';link.rel='noopener noreferrer';p.append(link);$('dialog-content').append(p);}
 $('dialog').showModal();
}
$('about').onclick=()=>{$('dialog-content').innerHTML=`<span class="eyebrow">ABOUT</span><h2>About this site</h2><p>The timeline has all ${amps.length} amps from our Fender tube amp catalog, placed by roughly the year each one came out. The ${amps.filter(a=>!a.wip).length} in color are modeled: open one to turn it around in 3D and read about its parts. The gray ones are placeholders for now. Open one to see what the catalog says about it.</p><p>A catalog entry can cover several years and versions of an amp. Each model shows one version, built from Fender drawings and photos of period amps. It isn’t a scan.</p><p>This is an independent site, not affiliated with Fender Musical Instruments Corporation.</p>`;$('dialog').showModal()};

if(detailScene){const host=$('collection-render');try{const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x090c10,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.45;host.append(renderer.domElement);
 const collectionEnvironment=studioEnvironment(renderer);const scenes=amps.map((a,i)=>{if(a.wip)return null;const scene=new THREE.Scene();scene.environment=collectionEnvironment.texture;scene.environmentIntensity=.55;const model=variant(a);scene.add(model);scene.add(new THREE.HemisphereLight(0xc8dae6,0x4a3020,2.4));for(const [color,power,pos] of [[0xffdfab,4.2,[-4,6,5]],[0xabcce8,2.4,[5,3,-4]],[0xffffff,1,[0,2,7]]]){const light=new THREE.DirectionalLight(color,power);light.position.set(...pos);scene.add(light)}const camera=new THREE.PerspectiveCamera(42,1,.1,50);camera.position.set(4.5,2.8,13);camera.lookAt(0,.05,0);return{scene,model,camera,slot:cards[i].querySelector('.amp-slot')};});
 const resize=()=>renderer.setSize(host.clientWidth,host.clientHeight);new ResizeObserver(resize).observe(host);resize();let last=0;let phase=0;
 function frame(time){requestAnimationFrame(frame);if(document.hidden||selected!==null){last=time;return;}if(time-last<32)return;const dt=Math.min((time-last)/1000,.1);last=time;if(!paused)phase+=dt;const root=host.getBoundingClientRect();renderer.setScissorTest(false);renderer.clear();renderer.setScissorTest(true);for(let i=0;i<scenes.length;i++){const s=scenes[i];if(!s||cards[i].hidden)continue;const r=s.slot.getBoundingClientRect();if(r.right<=root.left||r.left>=root.right)continue;const x=r.left-root.left,y=root.bottom-r.bottom,w=r.width,h=r.height;renderer.setViewport(x,y,w,h);renderer.setScissor(Math.max(0,x),Math.max(0,y),Math.min(w,root.width-Math.max(0,x),r.right-root.left),Math.min(h,root.height-y));s.camera.aspect=w/h;s.camera.updateProjectionMatrix();s.model.rotation.y=-.35+Math.sin(phase*.17+i*.6)*.48;s.model.position.y=paused?0:Math.sin(phase*.6+i)*.055;renderer.render(s.scene,s.camera);}renderer.setScissorTest(false);}requestAnimationFrame(frame);
 }catch(error){console.error(error);host.innerHTML='<p class="render-error">3D rendering is unavailable in this browser. You can still select an amp to read its story.</p>';}}
updatePosition();

// Review link uses the same entry/close behavior as a timeline selection.
const exhibitQuery=new URLSearchParams(location.search);
const reviewAmps={"super-reverb-ab763":{"year": 1963, "name": "Super Reverb"},"vibrasonic-5g13-1960":{"year": 1959, "name": "Vibrasonic"},"showman-blonde-1961":{"year": 1960, "name": "Showman"},"super-six-reverb-1972":{"year": 1972, "name": "Super Six Reverb"},"blues-junior-1995":{"year": 1995, "name": "Blues Junior"},"prosonic-1996":{"year": 1996, "name": "Prosonic"},'princeton-reverb-1965':{year:1964,name:'Princeton Reverb'},'deluxe-1957':{year:1955,name:'Tweed Deluxe'},'twin-1968':{year:1968,name:'Twin Reverb'},'deluxe-reverb-1965':{year:1963,name:'Deluxe Reverb'},'champ-1959':{year:1958,name:'Tweed Champ'},'tremolux-1955':{year:1955,name:'Tweed Tremolux'},'deluxe-1962':{year:1961,name:'Brown Deluxe'}};
const reviewAmp=reviewAmps[exhibitQuery.get('amp')];
if(reviewAmp){const i=amps.findIndex(a=>a.year===reviewAmp.year&&a.name===reviewAmp.name);if(i>=0){openAmp(i,cards[i]);if(exhibitQuery.get('view')==='inside')$('rear').click();}}
