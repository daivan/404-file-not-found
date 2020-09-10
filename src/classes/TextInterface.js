class TextInterface {

	constructor() {
	}


	renderStart() {
		let title = "404 - File not found";
		let subtitle = "";
		let story1 = "You are a file server to a special site.";
		let story2 = "Your job is to make sure that the requests get their files.";
		let story3 = "Never give a request a 404! That is your one purpose in life!";
		let start = "Press <Space> to play";
		let credits = "Created by: Daivan Trinh & Hakan Einarsson for js13kGames.com 2020";
		cx.font = "50px Arial Black";
		cx.fillStyle = "#000";  //<======= here
		cx.fillText(title, 20, 270);
		cx.font = "20px Arial Black";
		cx.fillText(subtitle, 20, 320);

		cx.fillText(story1, 20, 340);
		cx.fillText(story2, 20, 365);
		cx.fillText(story3, 20, 390);
		cx.fillText(start, 20, 450);

		cx.font = "12px Arial";
		cx.fillText(credits, 20, 500);
	}

	
	renderEnd() {
		let title = "The End";
		let subtitle = "Thank you for playing our game";
		let credits = "Created by Daivan Trinh & Hakan Einarsson";
		cx.font = "50px Arial Black";
		cx.fillStyle = "#000";  //<======= here
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

	renderInfoPanel(){
		let currentLevel = level.currentLevel + 1;
		let seconds = level.getCurrentLevel().timeLimit / 1000;
		let levelText = "Level: " + currentLevel.toString();
		let timeLimitText = "Time to complete: " + seconds.toString() + " s";
		cx.font = "12px Arial Black";
		cx.fillStyle = "#000";  //<======= here
		cx.fillText(levelText, 530, 18);
		cx.fillText(timeLimitText, 530, 38);

	}
}