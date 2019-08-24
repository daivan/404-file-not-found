class Enemy {

  constructor(kontra) {
    this.kontra = kontra;
    this.x = 0;
    this.y = 0;
    this.direction = 'horizontal';
    this.currentDirection = 'left';
    this.playerImage = new Image();
    this.playerImage.src = 'assets/imgs/enemy.png';


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
	    anchor:{x:0,y:0.3},
	    width:32,
	    height: 32,
      //image: this.playerImage,
      // required for an animation sprite
      animations: this.spriteSheet.animations
		});
    
  }
 

  Move(){
  	let map=level.maps[level.currentLevel].data;
  	if(this.direction=='vertical'){
      if(this.currentDirection=='up'){
        if(this.IsMovePossible('up',map)){            
          this.sprite.y-=32;
        }else{
          this.currentDirection='down';
          this.sprite.y+=32;
        }
      }else{
        if(this.IsMovePossible('down',map)){            
          this.sprite.y+=32;
        }else{
          this.currentDirection='up';
          this.sprite.y-=32;
        }
      }		
  	}else{ // horizontal

      if(this.currentDirection=='left'){
        if(this.IsMovePossible('left',map)){            
          this.sprite.x-=32;
        }else{
          this.currentDirection='right';
          this.sprite.x+=32;
        }
      }else{
        if(this.IsMovePossible('right',map)){            
          this.sprite.x+=32;
        }else{
          this.currentDirection='left';
          this.sprite.x-=32;
        }
      }
    }
  }

  location(){
	var x;
	var y;
  	if(this.sprite.x>0){
  		x=this.sprite.x/32;
  	}else{
		x=0;
  	}
  	if(this.sprite.y>0){
  		y=this.sprite.y/32;
  	}else{
		y=0;
  	}
  	y=y*10;
  	return [y,x];
  }

  IsMovePossible(direction,map)
  {
  	var sum=this.location()[0]+this.location()[1];
  	if(direction=='down'){
  		if(this.location()[0]==90){
  			return false;
  		}
  		if(map[sum+10]==0){
  			return false;
  		}
  		return true;
  	}else if(direction=='up'){
  		if(this.location()[0]==0){
  			return false;
  		}
		if(map[sum-10]==0){
  			return false;
  		}
  		return true;
  	}else if(direction=='left'){
  		if(this.location()[1]==0){
  			return false;
  		}
		if(map[sum-1]==0){
  			return false;
  		}
  		return true;
  	}else if(direction=='right'){
  		if(this.location()[1]==9){
  			return false;
  		}
		if(map[sum+1]==0){
  			return false;
  		}
  		return true;
  	}
  }
}