class GameState {

  constructor() {
  	this.state = 'start_menu';
  	this.halfway = 0;
  	this.steps = [];
  	this.backing = 0;
  	this.dead = true;
  	this.stage = 0;
  }
 


	get start(){
		return {
	    x:0,
	    y:0,
	    width:32,
	    height: 32,
	    color: 'yellow'
	}
	}

	get end(){
		return {
    x:320,
    y:320,
    width:32,
    height: 32,
    color: 'green'
}
	}


	checkHalfway(player)
	{

	  if(player.x===end.x && player.y===end.y){
	    this.backing=1;
	    this.halfway=1;
	  }
	}

	checkStageClear(player,level)
	{
		if(player.x===level.startLocation[0]*64 && player.y===level.startLocation[1]*64 && gameState.halfway===1){
		  return true;
		}
		return false;
	}

	checkDead(player,enemies)
	{
		enemies.map(enemy => this.checkPlayerAndEnemyCollision(player,enemy));
	}

	checkPlayerAndEnemyCollision(player, enemy)
	{

		if(player.sprite.x==enemy.sprite.x && player.sprite.y==enemy.sprite.y){
			this.dead=true;
			return true;
		}
		return false;
	}


	initiateLevel(player, start, end, level)
	{

		//enemies = [];
	  	this.halfway = 0;
  		this.backing = 0;
		this.steps = [];
  		this.dead = false;
		player.x=level.playerLocation[0]*64;
		player.y=level.playerLocation[1]*64;
		player.destination=[player.x,player.y];

		start.x=level.startLocation[0]*64;
		start.y=level.startLocation[1]*64;

		end.x=level.endLocation[0]*64;
		end.y=level.endLocation[1]*64;

		Background.setMap(level.map);
		//this.spawnEnemies();
	}

	spawnEnemies()
	{

		if(level.getCurrentLevel().enemies!==undefined){
			level.getCurrentLevel().enemies.map(enemy => {
				if(enemy.type==='straight'){
					let enemyObject = new Enemy(kontra);
					enemyObject.sprite.y=enemy.location[0]*32;
					enemyObject.sprite.x=enemy.location[1]*32;
					enemyObject.direction=enemy.direction;
					enemyObject.currentDirection=enemy.currentDirection;
					enemies.push(enemyObject);
				}

			});
		}
	}
}