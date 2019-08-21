class UserInterface {

  constructor(kontra) {
    this.kontra = kontra;
    this.x = 0;
    this.y = 0;
    this.sprite = this.kontra.Sprite({
	    x:this.x,
	    y:this.y,
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

  get location(){

  }

}