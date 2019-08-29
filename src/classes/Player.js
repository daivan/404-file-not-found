class Player {

  constructor(context) {
	  var image = new Image();
	  image.src = 'assets/imgs/robot.png';
	  this.context=context;
	  this.image=image;

  }
 

  render()
  {
	  this.context.drawImage(this.image, 0, 0, 32, 32, 0, 0, 64, 64);
  }
  Move(direction){
  	let map=level.maps[level.currentLevel].data;
  	if(direction=='down'){
  		if(this.IsMovePossible('down',map)){
			this.sprite.y+=32;
			return true;
  		}
  		return false;
  		
  	}
  	if(direction=='up'){
  		if(this.IsMovePossible('up',map)){
			this.sprite.y-=32;
			return true;
  		}
  		return false;
  	}
  	if(direction=='left'){
  		if(this.IsMovePossible('left',map)){
			this.sprite.x-=32;
			return true;
  		}
  		return false;
  	}
  	if(direction=='right'){
  		if(this.IsMovePossible('right',map)){
			this.sprite.x+=32;
			return true;
  		}
  		return false;
  		
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