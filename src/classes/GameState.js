class GameState {

  constructor() {
  	this.halfway = 0;
  	this.backing = 0;
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


	checkHalfway(player,level)
	{
	  if(player.sprite.x==end.x && player.sprite.y==end.y){
	    this.backing=1;
	    this.halfway=1;
	  }
	}
	checkStageClear(player,level)
	{
		if(player.sprite.x==start.x && player.sprite.y==start.y && gameState.halfway==1){
		  alert('You win');
		  player.sprite.x=-100000
		  return true;
		}

		return false;
	}
}