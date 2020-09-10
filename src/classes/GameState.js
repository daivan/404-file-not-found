class GameState {

  constructor() {
  	this.state = 'start_menu';
  	this.dead = true;
  	this.stage = 0;
  }

	initiateLevel(level)
	{

		setTimeout(areAllRequestsConnected, level.timeLimit);


	  	this.halfway = 0;
  		this.backing = 0;
		this.steps = [];
  		this.dead = false;


		Background.setMap(level.map);

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