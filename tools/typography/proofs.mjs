import {writeFileSync,mkdirSync} from 'node:fs';
import {PANEL_IDS,panelArtwork,rearArtwork,artworkSVG} from '../../dist/library/panel-lettering.js';
mkdirSync('dist/assets/panels',{recursive:true});
for(const id of PANEL_IDS)writeFileSync(`dist/assets/panels/${id}.svg`,artworkSVG(panelArtwork(id))+'\n');
for(const id of ['princeton-reverb-aa1164','deluxe-6g3'])writeFileSync(`dist/assets/panels/rear-${id}.svg`,artworkSVG(rearArtwork(id))+'\n');
