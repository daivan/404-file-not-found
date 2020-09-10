class Game {

	update()
	{

		Background.renderGamePanels();

		Background.render();

		requests.map(request => request.render());

		goals.map(goal => goal.render());

		textInterface.renderInfoPanel();

	}
}