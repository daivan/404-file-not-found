class Game {

	update()
	{
		if (gameState.backing !== 1) {


			if (state.pressedKeys.left) {
				if (player.move('left',level.getCurrentLevel().map)) {
					music.playMove();
					gameState.steps.push('left');
				}
			} else if (state.pressedKeys.right) {
				if (player.move('right',level.getCurrentLevel().map)) {
					music.playMove();
					gameState.steps.push('right');
				}
			} else if (state.pressedKeys.up) {
				if (player.move('up',level.getCurrentLevel().map)) {
					music.playMove();
					gameState.steps.push('up');
				}
			} else if (state.pressedKeys.down) {
				if (player.move('down',level.getCurrentLevel().map)) {
					music.playMove();
					gameState.steps.push('down');
				}
			}
		}

		// gameState.backing back process
		if (gameState.backing === 1 && player.isMoving===false) {
			var move = gameState.steps.pop();
			if (move === undefined) {
				/*
                interface.gameState = 'dead';
                interface.hide = false;
                gameState.dead = true;
                gameState.backing = 0;
                */

			}

			//enemies.map(enemy => enemy.Move());

			if (move == 'up') {
				player.move('down',level.getCurrentLevel().map);
				music.playMove();
			}
			if (move == 'left') {
				player.move('right',level.getCurrentLevel().map);
				music.playMove();
			}
			if (move == 'right') {
				player.move('left',level.getCurrentLevel().map);
				music.playMove();
			}
			if (move == 'down') {
				player.move('up',level.getCurrentLevel().map);
				music.playMove();
			}
			//gameState.checkDead(player, enemies);
			//cooldown = 0;
		}

		Background.render();
		cx.drawImage(goalImage, 0, 0, 32, 32, level.getCurrentLevel().endLocation[0] * 64, level.getCurrentLevel().endLocation[1] * 64, 64, 64);
		cx.drawImage(startImage, 0, 0, 32, 32, level.getCurrentLevel().startLocation[0] * 64, level.getCurrentLevel().startLocation[1] * 64, 64, 64);
		player.render();
		enemies.map(enemy => enemy.render());
		gameState.checkHalfway(player);

		var result = gameState.checkStageClear(player, level.getCurrentLevel());
		if(result) {
			level.setNextLevel();
			if (level.currentLevel === 3) {
				gameState.state = 'end'
			} else {
				gameState.initiateLevel(player, start, end, level.getCurrentLevel());
			}
		}

	}
}