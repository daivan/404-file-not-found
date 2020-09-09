class GameState {

  constructor() {
  	this.state = 'start_menu';
  	this.halfway = 0;
  	this.steps = [];
  	this.backing = 0;
  	this.dead = true;
  	this.stage = 0;
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
		return (player.x===level.startLocation[0]*64 && player.y===level.startLocation[1]*64 && gameState.halfway===1);
	}

	checkDead(player,enemies)
	{

		enemies.map(enemy => this.checkPlayerAndEnemyCollision(player,enemy));
	}

	checkPlayerAndEnemyCollision(player, enemy)
	{

		if(player.x===enemy.x && player.y===enemy.y){
			this.dead=true;
			this.state='dead';
			return true;
		}
		return false;
	}


	initiateLevel(player, start, end, level)
	{

		enemies = [];
	  	this.halfway = 0;
  		this.backing = 0;
		this.steps = [];
  		this.dead = false;

		start.x=level.startLocation[0]*64;
		start.y=level.startLocation[1]*64;

		end.x=level.endLocation[0]*64;
		end.y=level.endLocation[1]*64;

		Background.setMap(level.map);
		this.spawnEnemies();
	}

	spawnEnemies()
	{

		if(level.getCurrentLevel().enemies!==undefined){
			level.getCurrentLevel().enemies.map(enemy => {
				if(enemy.type==='straight'){
					let enemyObject = new Enemy(cx);
					enemyObject.y=enemy.location[0]*64;
					enemyObject.x=enemy.location[1]*64;
					enemyObject.direction=enemy.direction;
					enemyObject.currentDirection=enemy.currentDirection;
					enemies.push(enemyObject);
				}

			});
		}
	}
}