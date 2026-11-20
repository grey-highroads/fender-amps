import {COMBO_PANELS} from './combo-profiles.js';
// Layouts estimated from inspected vintage photographs; millimetres, not tracings.
export const SMALL_PANELS={
 ...COMBO_PANELS,
 'faceplate-princeton':{width:457,height:43,top:false,black:true,title:'Princeton Reverb-Amp',knob:'knob-skirted',knobs:[84,127,170,213,256,299],labels:['VOLUME','TREBLE','BASS','REVERB','SPEED','INTENSITY'],jacks:[[21,0],[42,0]],pilot:427,channels:[[31,'INSTRUMENTS']]},
 'faceplate-champ':{width:210,height:48,top:true,title:'CHAMP-AMP',knob:'knob-chicken',knobs:[102],labels:['OFF  VOLUME  ON'],jacks:[[153,0],[181,0]],pilot:57,fuse:22},
 'faceplate-tremolux':{width:408,height:49,top:true,title:'',knob:'knob-chicken',knobs:[112,155,198,241,284],labels:['DEPTH','SPEED','TONE','INST. VOL.','MIC. VOL.'],jacks:[[338,-11],[338,11],[376,-11],[376,11]],pilot:69,fuse:16,toggle:42},
 'faceplate-brown-deluxe':{width:490,height:47,top:false,title:'Deluxe-Amp',knob:'knob-brown',knobs:[76,112,214,250,288,324],labels:['VOLUME','TONE','VOLUME','TONE','SPEED','INTENSITY'],jacks:[[17,2],[40,2],[155,2],[178,2]],pilot:465,channels:[[28,'NORMAL'],[167,'BRIGHT']]}
};
