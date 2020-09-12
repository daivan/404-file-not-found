const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext({ latencyHint: 'playback' });

var notes= {
    "a":440,
    "bs":440*Math.pow(2,1/12),
    "b":440*Math.pow(2,2/12),
    "c":440*Math.pow(2,3/12),
    "cs":440*Math.pow(2,4/12),
    "d":440*Math.pow(2,5/12),
    "ds":440*Math.pow(2,6/12),
    "e":440*Math.pow(2,7/12),
    "f":440*Math.pow(2,8/12),
    "fs":440*Math.pow(2,9/12),
    "g":440*Math.pow(2,10/12),
    "gs":440*Math.pow(2,11/12)
}

var isPlaying=false;

let tempo = 100.0;
let fourth = 60/tempo;
let half = fourth*2;
let whole = half*2;
let eigth = fourth/2;
let sixteenth = eigth/2;

let melody = newInstrument();

var notesToPlay=[    //Notes goes here
    ["d","","",""], //[kanal1,kanal2,kanal3,kanal4]
    ["","","",""],
    ["d","","",""],
    ["e","","",""],
    ["","","",""],
    ["","a","",""],
    ["f","","",""],
    ["","","",""]
];

function playMusic(){ // starts playing
    isPlaying=true;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    console.log(audioCtx.currentTime);
    scheduler();
}

const bpmControl = 100
let lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
let scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
let currentNote = 0;
let nextNoteTime = sixteenth; // when the next note is due.

function newInstrument(){
    return {'note':440,'length':half,'gain':0.1,'octave':1,'wave':'sine'};
}

function nextNote() {
    // Advance the beat number, wrap to zero
    if (currentNote === notesToPlay.length-1) {
        currentNote = 0;
    }else {
        currentNote++;
    }
    nextNoteTime += eigth; // Add beat length to last beat time
}

function stopPlaying(){
    isPlaying=false;
    notesToPlay=[];
    noteGrid=[];
    currentNote=0
    audioCtx.suspend()
    nextNoteTime=sixteenth;
}



function scheduler() {
    // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime && isPlaying) {
        //document.getElementById("scheduler").innerHTML=nextNoteTime + audioCtx.currentTime + scheduleAheadTime
        for (i=0;i<4;i++){
            melody.note=notesToPlay[currentNote][i];
            melody.length=notesToPlay[currentNote][i].length;
            if(i==3) melody.octave=-2;
            if(i==1) melody.octave=1
            else melody.octave=0;
            if (i==0) melody.wave='sine';
            else melody.wave='square';
            playNote(melody);
        }
        
        nextNote();
    }
    timerID = window.setTimeout(scheduler, lookahead);
}

function playNote(instrument) {
    if (instrument.note != ""){
        let osc = audioCtx.createOscillator();
        let filter = audioCtx.createBiquadFilter();
        filter.type="bandpass";
        filter.frequency=1500;
        osc.type=instrument.wave;
        osc.frequency.setValueAtTime(notes[instrument.note]*1/Math.pow(2,(1-instrument.octave)),audioCtx.currentTime);
        let amp = audioCtx.createGain();
        amp.gain.setValueAtTime(0.5, audioCtx.currentTime);
        amp.gain.setTargetAtTime(0,audioCtx.currentTime,0.2);
        filter.connect(amp);
        amp.connect(audioCtx.destination)
        osc.connect(filter);
        osc.start();
        osc.stop(audioCtx.currentTime + instrument.length);
    }
}