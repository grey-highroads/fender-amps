import {panelArtwork,drawArtwork} from './panel-lettering.js';
// Same original vector artwork supplies runtime, proofs and Blender maps.
export function drawTwinPanel(canvas,channel='color'){return drawArtwork(canvas,panelArtwork('faceplate-twin'),channel);}
let cachedMaps;
export function twinPanelMaps(){if(cachedMaps)return cachedMaps;const maps={},art=panelArtwork('faceplate-twin');for(const channel of ['color','metallic','rough']){const c=document.createElement('canvas');c.width=4096;c.height=Math.round(4096*art.height/art.width);maps[channel]=drawTwinPanel(c,channel);}return cachedMaps=maps;}
