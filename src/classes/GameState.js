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
		if(player.sprite.x==level.startLocation[0]*64 && player.sprite.y==level.startLocation[1]*64 && gameState.halfway==1){
		  alert('You win');
		  return true;
		}

		return false;
	}

	initiateLevel(player, start, end, level)
	{
	  	this.halfway = 0;
  		this.backing = 0;
		player.sprite.x=level.playerLocation[0]*64;
		player.sprite.y=level.playerLocation[1]*64;

		start.x=level.startLocation[0]*64;
		start.y=level.startLocation[1]*64;

		end.x=level.endLocation[0]*64;
		end.y=level.endLocation[1]*64;		
	}
}