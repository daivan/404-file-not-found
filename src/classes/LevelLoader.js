class LevelLoader {

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
 


	get start(){
		return {
	    x:0,
	    y:0,
	    width:64,
	    height: 64,
	    color: 'yellow'
	}
	}

	get end(){
		return {
    x:320,
    y:320,
    width:64,
    height: 64,
    color: 'green'
}
	}
}