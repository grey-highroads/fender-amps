const host=document.getElementById('amp-images');
const exhibit=host.closest('.exhibit');
exhibit.querySelector('.stage').append(host);
const views=['Front','Rear'];
const path=index=>`assets/studies/princeton/${views[index].toLowerCase()}.jpg`;
let selected=0;
const viewer=document.createElement('dialog');
viewer.id='study-viewer';
viewer.setAttribute('aria-label','Enlarged Princeton Reverb image study');
viewer.innerHTML=`<div class="study-viewer-bar"><strong id="study-viewer-title"></strong><div><button id="study-previous" aria-label="Previous image">Previous</button><button id="study-next" aria-label="Next image">Next</button><button id="study-zoom" aria-pressed="false">Zoom in</button><button id="study-close" autofocus>Close</button></div></div><div class="study-image-scroll" tabindex="0" aria-label="Image. Scroll to inspect when zoomed."><img alt=""></div><p>AI-generated photorealistic study · Reference specimen: November 1965, A-05948</p>`;
document.body.append(viewer);
const fullImage=viewer.querySelector('img');
function resetZoom(){viewer.classList.remove('zoomed');viewer.querySelector('#study-zoom').textContent='Zoom in';viewer.querySelector('#study-zoom').setAttribute('aria-pressed','false');const area=viewer.querySelector('.study-image-scroll');area.scrollTop=0;area.scrollLeft=0;}
function select(index){
 selected=(index+views.length)%views.length;
 const label=`Princeton Reverb — ${views[selected].toLowerCase()} photorealistic study`;
 fullImage.src=path(selected);fullImage.alt=label;
 viewer.querySelector('#study-viewer-title').textContent=`Princeton Reverb / ${views[selected]}`;
 resetZoom();
}
viewer.querySelector('#study-close').onclick=()=>viewer.close();
viewer.querySelector('#study-previous').onclick=()=>select(selected-1);
viewer.querySelector('#study-next').onclick=()=>select(selected+1);
viewer.querySelector('#study-zoom').onclick=event=>{const zoomed=viewer.classList.toggle('zoomed');event.currentTarget.textContent=zoomed?'Fit image':'Zoom in';event.currentTarget.setAttribute('aria-pressed',String(zoomed));};
viewer.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();select(selected+(event.key==='ArrowLeft'?-1:1));}event.stopPropagation();});
viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close();});
export function mountAmpImages(amp){
 const enabled=amp.name==='Princeton Reverb'&&amp.circuit==='AA1164';
 if(viewer.open)viewer.close();
 host.hidden=!enabled;exhibit.classList.toggle('has-image-studies',enabled);
 if(!enabled)return;
 host.innerHTML=`<span class="study-rail-label">IMAGE STUDIES</span>${views.map((view,i)=>`<button class="study-thumbnail" data-study-view="${i}" aria-label="Enlarge Princeton Reverb ${view.toLowerCase()} image study"><img src="${path(i)}" alt=""><span>${view}<b aria-hidden="true">⤢</b></span></button>`).join('')}<span class="study-rail-note">AI-generated</span>`;
 host.querySelectorAll('[data-study-view]').forEach((button,i)=>button.onclick=()=>{select(i);viewer.showModal();});
 select(0);
}
