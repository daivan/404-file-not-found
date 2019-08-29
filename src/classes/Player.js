class Player {

  constructor(context) {
	  var image = new Image();
	  image.src = 'assets/imgs/robot.png';
	  this.context=context;
	  this.image=image;
	  this.x=0;
	  this.y=0;
	  this.moving=false;
  }
 

  render()
  {
	  this.context.drawImage(this.image, 0, 0, 32, 32, this.x, this.y, 64, 64);
  }

  move(direction){
  	if(direction=='down'){
  		if(this.IsMovePossible('down',map)){
			this.y+=64;
			return true;
  		}
  		return false;

  	}
  	if(direction=='up'){
  		if(this.IsMovePossible('up',map)){
			this.y-=64;
			return true;
  		}
  		return false;
  	}
  	if(direction==='left'){
  		if(this.IsMovePossible('left',map)){
			this.x-=64;
			//return true;
  		}
  		return false;
  	}
  	if(direction=='right'){
  		if(this.IsMovePossible('right',map)){
			this.x+=64;
			return true;
  		}
  		return false;

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
  	if(direction=='down'){
  		if(this.location()[0]===7){
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