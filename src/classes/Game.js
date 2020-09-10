class Game {


	makeMove()
	{
		gameState.movesLeft -= 1;
		gameState.checkGameOver();
	}

	   selectedTile(mouseX, mouseY){
        let x;
        let y;
        if (mouseX > 0 && mouseX < 520) {
            x = mouseX / 64;
        } else if(mouseX > 519) {
            x = 7;
        } else {
            x = 0;
        }
        if (mouseY > 0 && mouseY < 520) {
            y = mouseY / 64;
        } else if(mouseY > 519){
            y = 7;
        } else {
            y = 0;
        }
        return [Math.floor(y), Math.floor(x)];
    }

    changeTile(mouseX, mouseY){
        let selectedTiles = this.selectedTile(mouseX, mouseY);

        if( gameState.map[selectedTiles[0]][selectedTiles[1]] > 8){
            gameState.map[selectedTiles[0]][selectedTiles[1]] = 0;
        }else{
            gameState.map[selectedTiles[0]][selectedTiles[1]] += 1;
        }

        gameState.checkLevelComplete();
    }

	update()
	{

		Background.renderGamePanels();

		Background.render();

		requests.map(request => request.render());

		goals.map(goal => goal.render());

		textInterface.renderInfoPanel();

	}
}