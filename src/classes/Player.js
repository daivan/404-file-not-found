class Player {

  constructor(kontra) {
    this.kontra = kontra;
    this.sprite = this.kontra.Sprite({
	    x:0,
	    y:0,
	    width:64,
	    height: 64,
	    color: 'blue',
	    move: function(){

	    }
		});
  }
 

  Move(direction){
  	if(direction=='down'){
  		this.sprite.y+=64;
  
  	}
  	if(direction=='up'){
  		this.sprite.y-=64;
  	}
  	if(direction=='left'){
      this.sprite.x-=64;
  	}
  	if(direction=='right'){
  		this.sprite.x+=64;
  	}
  }


}