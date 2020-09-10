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
/*
	  if(player.x===end.x && player.y===end.y){
	    this.backing=1;
	    this.halfway=1;
	  }

 */
	}

	checkStageClear(player,level)
	{
		//return (player.x===level.startLocation[0]*64 && player.y===level.startLocation[1]*64 && gameState.halfway===1);
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


	initiateLevel(player, level)
	{

		setTimeout(areAllRequestsConnected, level.timeLimit);

		enemies = [];
	  	this.halfway = 0;
  		this.backing = 0;
		this.steps = [];
  		this.dead = false;


		Background.setMap(level.map);
		//this.spawnEnemies();
		this.spawnRequests();
		this.spawnGoals();
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
	spawnRequests()
	{

		if(level.getCurrentLevel().requests!==undefined){
			level.getCurrentLevel().requests.map(request => {

					let requestObject = new Request(cx);
					requestObject.y=request.location[0]*64;
					requestObject.x=request.location[1]*64;

					requestObject.start = [request.start[0], request.start[1]];
					requestObject.goal = [request.goal[0], request.goal[1]];
					requests.push(requestObject);


			});
		}
	}
	spawnGoals()
	{

		if(level.getCurrentLevel().goals!==undefined){
			level.getCurrentLevel().goals.map(goal => {

				let goalObject = new Goal(cx);
				goalObject.y=goal.location[0]*64;
				goalObject.x=goal.location[1]*64;
				goals.push(goalObject);


			});
		}
	}
}