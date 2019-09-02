class StartMenu {

	constructor() {
	}


	render() {

		let title = "PALINDROME";
		let subtitle = "We go forward then back";
		let start = "Press Space to play game";
		let credits = "Created by: Daivan Trinh & Hakan Einarsson for js13kGames.com";
		cx.font = "50px Arial Black";
		cx.fillStyle = "#FFF";  //<======= here
		cx.fillText(title, 60, 170);
		cx.font = "20px Arial Black";
		cx.fillText(subtitle, 100, 220);

		cx.fillText(start, 100, 350);

		cx.font = "8px Arial";
		cx.fillText(credits, 10, 500);
		/*
		if (this.currentAnimation === 'walkRight') {
			this.animateRight();
		} else if (this.currentAnimation === 'walkLeft') {
			this.animateLeft();
		} else if (this.currentAnimation === 'walkUp') {
			this.animateUp();
		} else if (this.currentAnimation === 'walkDown') {
			this.animateDown();
		} else if (this.currentAnimation === 'idle') {
			this.animateIdle();
		}
		if (this.isMoving) {
			this.movePlayer();
		}
*/
	}

}