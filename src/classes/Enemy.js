class Enemy {

  constructor(context) {
    this.direction = 'horizontal';
    this.currentDirection = 'left';
    this.playerImage = new Image();
    this.playerImage.src = 'assets/imgs/enemy.png';
	this.context = context;
    this.x=0;
    this.y=0;
    this.currentAnimation='idle';

  }
	animateIdle() {
		this.context.drawImage(this.playerImage, 0, 0, 32, 32, this.x, this.y, 64, 64);
	}

	render() {
		if (this.currentAnimation === 'walkRight') {
			this.animateRight();
		} else if (this.currentAnimation === 'walkLeft') {
			this.animateLeft();
		} else if (this.currentAnimation === 'walkUp') {
			this.animateUp();
		} else if (this.currentAnimation === 'walkDown') {
			this.animateDown();
		} else if (this.currentAnimation === 'idle') {
			this.animateIdle();
		}
		if (this.isMoving) {
			this.movePlayer();
		}
	}

  Move(map){

  	if(this.direction==='vertical'){
      if(this.currentDirection==='up'){
        if(this.IsMovePossible('up',map)){            
          this.y-=64;
        }else{
          this.currentDirection='down';
          this.y+=64;
        }
      }else{
        if(this.IsMovePossible('down',map)){            
          this.y+=64;
        }else{
          this.currentDirection='up';
          this.y-=64;
        }
      }		
  	}else{ // horizontal

      if(this.currentDirection==='left'){
        if(this.IsMovePossible('left',map)){            
          this.x-=64;
        }else{
          this.currentDirection='right';
          this.x+=64;
        }
      }else{
        if(this.IsMovePossible('right',map)){            
          this.x+=64;
        }else{
          this.currentDirection='left';
          this.x-=64;
        }
      }
    }
  }

  location(){
	var x;
	var y;
  	if(this.x>0){
  		x=this.x/64;
  	}else{
		x=0;
  	}
  	if(this.y>0){
  		y=this.y/64;
  	}else{
		y=0;
  	}
  	return [y,x];
  }

  IsMovePossible(direction,map)
  {
  	if(direction==='down'){
  		if(this.location()[1]===6){
  			return false;
  		}
  		if(map[this.location()[0]+1][this.location()[1]]===0){
  			return false;
  		}
  		return true;
  	}else if(direction==='up'){
  		if(this.location()[0]===0){
  			return false;
  		}
		if(map[this.location()[0]-1][this.location()[1]]===0){
  			return false;
  		}
  		return true;
  	}else if(direction==='left'){
  		if(this.location()[1]===0){
  			return false;
  		}
		if(map[this.location()[0]][this.location()[1]-1]===0){
  			return false;
  		}
  		return true;
  	}else if(direction==='right'){
  		if(this.location()[1]===7){
  			return false;
  		}
		if(map[this.location()[0]][this.location()[1]+1]===0){
  			return false;
  		}
  		return true;
  	}
  }
}