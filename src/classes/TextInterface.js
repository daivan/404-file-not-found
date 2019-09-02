class TextInterface {

	constructor() {
	}


	renderStart() {
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
	}

	renderEnd() {
		let title = "The End";
		let subtitle = "Thank you for playing our game";
		let credits = "Created by Daivan Trinh & Hakan Einarsson";
		cx.font = "50px Arial Black";
		cx.fillStyle = "#FFF";  //<======= here
		cx.fillText(title, 145, 170);
		cx.font = "20px Arial Black";
		cx.fillText(subtitle, 85, 220);
		cx.font = "15px Arial Black";
		cx.fillText(credits, 75, 350);

	}
}