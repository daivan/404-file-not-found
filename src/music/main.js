const A4=440/Math.pow(2,2);
const Bs4=A4*Math.pow(2,1/12);
const B4=A4*Math.pow(2,2/12);
const C4=A4*Math.pow(2,-9/12);
const Cs4=A4*Math.pow(2,-8/12);
const D4=A4*Math.pow(2,-7/12);
const Ds4=A4*Math.pow(2,-6/12);
const E4=A4*Math.pow(2,-5/12);
const F4=A4*Math.pow(2,-4/12);
const Fs4=A4*Math.pow(2,-3/12);
const G4=A4*Math.pow(2,-2/12);
const Gs4=A4*Math.pow(2,-1/12);

const bpm = 120;
const bps = bpm/60;
let type="sine";
let notes = [
    [A4,3/bps],
    [A4,1/bps],
    [C4*2,2/bps],
    [G4*2,2/bps]
    
];
let notes2 = [
    [C4*2*2,3/bps],
    [B4*2*2,2/bps],
    [E4*2*2,1/bps],
    [B4*2*2,2/bps]
   
];
let audioContext = new AudioContext();

function startMusic(){
    play(notes);
    play(notes2);
}

function play(note){


        let instrument = new Instrument(audioContext,'square','bandpass',70,[0,0,0.5]);
        instrument.setMelody(note);
        instrument.playMelody();
            
}




