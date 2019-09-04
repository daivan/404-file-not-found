class Instrument{
    constructor(audioContext){/*, wave, filterType,filterFreqValue,gainNodeProps){*/
        this.audioContext=audioContext;
        this.wave = "sine";
        this.filterType = "bandpass";
        this.filterFreqValue=500;
        this.gainNodeProps=[0,0,0.5];
        this.notes=null;
        this.counter=0
    }
    
    setMelody(notes){
        this.notes=notes;
    }

    playMelody(){
        if (this.counter > this.notes.length-1) this.counter = 0;
        this.playNote(this.notes[this.counter]);
    }
        
    
    playNote(note){
        //console.log(note)
        //if (this.counter >this.notes.length-1) this.counter = 0;
        let filter=this.audioContext.createBiquadFilter();
        let oscillator = this.audioContext.createOscillator();
        let gainNode = this.audioContext.createGain();
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        filter.type=this.filterType;
        filter.frequency.value=this.filterFreqValue;
        gainNode.gain.setValueAtTime(0.02,audioContext.currentTime);
        gainNode.gain.setTargetAtTime(this.gainNodeProps[0],this.audioContext.currentTime+this.gainNodeProps[1],this.gainNodeProps[2]);
        oscillator.type=this.wave;
        oscillator.frequency.setValueAtTime(note[0],this.audioContext.currentTime);
        oscillator.start();
        setTimeout(
            ()=> {
                oscillator.stop(this.audioContext.currentTime);
                this.counter++;
                console.log(this.notes[this.counter]);
                this.playMelody();
            }, note[1]*1000);
        

    }


}
