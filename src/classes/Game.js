class Game {


	makeMove(event)
	{
	    let mouseX = event.pageX;
	    let mouseY = event.pageY;

	    if(gameState.state === 'inGame' && this.clickWithinArea(mouseX, mouseY)){
            gameState.movesLeft -= 1;
            gameState.checkGameOver();
            game.changeTile(mouseX, mouseY);
		}
	}
	clickWithinArea(mouseX, mouseY)
    {
        if(mouseX > 8 && mouseY > 8 && mouseX < 520 && mouseY < 520){
            return true;
        }
        return false;
    }

	   selectedTile(mouseX, mouseY){
	    // - 8 is because of the canvas margin
        let x = (mouseX-8) / 64;
        let y = (mouseY-8) / 64;
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