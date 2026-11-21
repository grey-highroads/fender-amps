import {assemblyFor} from './library/catalog.js';
import {AMP_IMAGE_STUDIES} from './amp-image-data.js';
const host=document.getElementById('amp-images');
const exhibit=host.closest('.exhibit');
exhibit.querySelector('.stage').append(host);
let records=[],selected=0,returnFocus=null;
const viewer=document.createElement('dialog');
viewer.id='study-viewer';
viewer.innerHTML=`<div class="study-viewer-bar"><strong id="study-viewer-title"></strong><div><button id="study-previous" aria-label="Previous image">Previous</button><button id="study-next" aria-label="Next image">Next</button><button id="study-zoom" aria-pressed="false">Zoom in</button><button id="study-close" autofocus>Close</button></div></div><div class="study-image-scroll" tabindex="0" aria-label="Image. Scroll to inspect when zoomed."><img alt=""></div><p class="study-provenance"></p>`;
document.body.append(viewer);
const fullImage=viewer.querySelector('img');
function resetZoom(){viewer.classList.remove('zoomed');const zoom=viewer.querySelector('#study-zoom');zoom.textContent='Zoom in';zoom.setAttribute('aria-pressed','false');const area=viewer.querySelector('.study-image-scroll');area.scrollTop=0;area.scrollLeft=0;}
function select(index){
 selected=(index+records.length)%records.length;const record=records[selected];
 fullImage.src=record.path;fullImage.alt=`${record.amp}, ${record.view.toLowerCase()}. Generated illustration.`;
 viewer.setAttribute('aria-label',`${record.amp} generated illustration viewer`);
 viewer.querySelector('#study-viewer-title').textContent=`${record.amp} / ${record.view} / Generated illustration`;
 viewer.querySelector('.study-provenance').textContent=`Generated illustration. Neither a historical photograph nor a render exported from our model. ${record.configuration}. ${record.knownInaccuracies}`;
 resetZoom();
}
viewer.querySelector('#study-close').onclick=()=>viewer.close();
viewer.querySelector('#study-previous').onclick=()=>select(selected-1);
viewer.querySelector('#study-next').onclick=()=>select(selected+1);
viewer.querySelector('#study-zoom').onclick=event=>{const zoomed=viewer.classList.toggle('zoomed');event.currentTarget.textContent=zoomed?'Fit image':'Zoom in';event.currentTarget.setAttribute('aria-pressed',String(zoomed));};
viewer.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();select(selected+(event.key==='ArrowLeft'?-1:1));}event.stopPropagation();});
viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close();});
viewer.addEventListener('close',()=>{if(returnFocus?.isConnected&&returnFocus.getClientRects().length)returnFocus.focus({preventScroll:true});returnFocus=null;});
export function mountAmpImages(amp){
 if(viewer.open){returnFocus=null;viewer.close();}
 const assembly=assemblyFor(amp);records=AMP_IMAGE_STUDIES.filter(record=>record.assemblyId===assembly?.id);
 const enabled=records.length>0;host.hidden=!enabled;exhibit.classList.toggle('has-image-studies',enabled);
 host.replaceChildren();if(!enabled)return;
 host.innerHTML=`<span class="study-rail-label">ILLUSTRATIONS</span>${records.map((record,i)=>`<button class="study-thumbnail" data-study-view="${i}" aria-label="Enlarge ${record.amp} ${record.view.toLowerCase()} generated illustration"><img src="${record.path}" alt=""><span>${record.view}<b aria-hidden="true">⤢</b></span></button>`).join('')}<span class="study-rail-note">Generated illustration</span>`;
 host.querySelectorAll('[data-study-view]').forEach((button,i)=>button.onclick=()=>{returnFocus=button;select(i);viewer.showModal();});
 select(0);
}
