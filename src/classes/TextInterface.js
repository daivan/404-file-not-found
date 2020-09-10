class TextInterface {

	constructor() {
	}


	renderStart() {
		let title = "404";
		let subtitle = "File not found";
		let start = "Press <Space> to play";
		let credits = "Created by: Daivan Trinh & Håkan Einarsson for js13kGames.com 2020";
		cx.font = "50px Arial Black";
		cx.fillStyle = "#FFF";  //<======= here
		cx.fillText(title, 200, 170);
		cx.font = "20px Arial Black";
		cx.fillText(subtitle, 175, 220);

		cx.fillText(start, 135, 350);

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

	renderDead(){
		let title = "404 Files not found";

		let start = "Press <space> to try again";

		cx.font = "30px Arial Black";
		cx.fillStyle = "#FF0000";  //<======= here
		cx.fillText(title, 140, 170);
		cx.font = "20px Arial Black";
		cx.fillText(start, 115, 350);

	}
}