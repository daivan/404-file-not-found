class Game {

	update()
	{

		if (gameState.backing !== 1 && gameState.dead===false) {

			if (state.pressedKeys.left) {
				if (player.move('left',level.getCurrentLevel().map)) {
					music.playMove();
					gameState.steps.push('left');
					enemies.map(enemy => enemy.Move(level.getCurrentLevel().map));
				}
			} else if (state.pressedKeys.right) {
				if (player.move('right',level.getCurrentLevel().map)) {
					music.playMove();
					gameState.steps.push('right');
					enemies.map(enemy => enemy.Move(level.getCurrentLevel().map));
				}
			} else if (state.pressedKeys.up) {
				if (player.move('up',level.getCurrentLevel().map)) {
					music.playMove();
					gameState.steps.push('up');
					enemies.map(enemy => enemy.Move(level.getCurrentLevel().map));
				}
			} else if (state.pressedKeys.down) {
				if (player.move('down',level.getCurrentLevel().map)) {
					music.playMove();
					gameState.steps.push('down');
					enemies.map(enemy => enemy.Move(level.getCurrentLevel().map));
				}
			}
		}

		// gameState.backing back process
		if (gameState.backing === 1 && player.isMoving===false && gameState.dead===false) {
			let move = gameState.steps.pop();
			if (move === undefined) {

                gameState.dead = true;
                gameState.backing = 0;
				gameState.state='dead';

			}

			enemies.map(enemy => enemy.Move(level.getCurrentLevel().map));

			if (move === 'up') {
				player.move('down',level.getCurrentLevel().map);
				music.playMove();
			}
			if (move === 'left') {
				player.move('right',level.getCurrentLevel().map);
				music.playMove();
			}
			if (move === 'right') {
				player.move('left',level.getCurrentLevel().map);
				music.playMove();
			}
			if (move === 'down') {
				player.move('up',level.getCurrentLevel().map);
				music.playMove();
			}


		}
		gameState.checkDead(player, enemies);
		Background.render();
		cx.drawImage(goalImage, 0, 0, 32, 32, level.getCurrentLevel().endLocation[0] * 64, level.getCurrentLevel().endLocation[1] * 64, 64, 64);
		cx.drawImage(startImage, 0, 32, 32, 32, level.getCurrentLevel().startLocation[0] * 64, level.getCurrentLevel().startLocation[1] * 64, 64, 64);
		//player.render();
		//testTile.render();
		//requestTile.render();
		enemies.map(enemy => enemy.render());
		gameState.checkHalfway(player);

		let result = gameState.checkStageClear(player, level.getCurrentLevel());
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