class Player {

  constructor(kontra) {
    this.kontra = kontra;
    this.x = 0;
    this.y = 0;
    this.playerImage = new Image();
    this.playerImage.src = 'assets/imgs/robot.png';


    this.spriteSheet = SpriteSheet({
    image: this.playerImage,
    frameWidth: 32,
    frameHeight: 32,
    animations: {
      // create a named animation: walk
      walk: {
        frames: [0,9],  // frames 0 through 9
        frameRate: 30
      }
    }
  });

    this.sprite = this.kontra.Sprite({
	    x:this.x,
	    y:this.y,
	    anchor:{x:0,y:0.4},
	    width:64,
	    height: 64,
      //image: this.playerImage,
      // required for an animation sprite
      animations: this.spriteSheet.animations
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