class Game {

	update()
	{


		Background.render();

		requests.map(request => request.render());

		goals.map(goal => goal.render());



	}
}