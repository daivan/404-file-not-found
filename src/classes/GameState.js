class GameState {

  constructor() {
  	this.state = 'start_menu';
  	this.dead = true;
  	this.stage = 0;
  	this.movesLeft = 0;
  	this.map = [];
  }

  checkGameOver()
  {
  	if(this.movesLeft < 1){
  		this.state = 'dead';
	}
  }

  checkLevelComplete()
  {

    let completed = true;
    requests.forEach(request => {
        if(request.isConnected(gameState.map) === false){
            completed = false;
        }
    });

    if(completed){
		this.loadNextLevel();
    }

  }

  loadNextLevel()
  {
        level.setNextLevel();
        if(level.currentLevel === 1){
            gameState.state = 'end';
        }else{
            gameState.initiateLevel(level.getCurrentLevel());
        }
  }

	initiateLevel(level)
	{
		cx.clearRect(0, 0, cw, ch);
		//setTimeout(areAllRequestsConnected, level.timeLimit);
		this.movesLeft = level.movesLeft;
  		this.dead = false;
		this.map = [[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 1],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 2, 0, 0, 0]];

		Background.setMap(this.map);

		this.spawnRequests();
		this.spawnGoals();
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