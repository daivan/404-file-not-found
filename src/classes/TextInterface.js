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

		cx.fillStyle = 'rgba(225,225,225,0.8)';
		cx.fillRect(0,0,768,512);


		let header = "Server Error";
		let title = "404 - File or directory not found.";
		let subtitle1 = "The resource you are looking for might have been removed...";
		let subtitle2 = "Or maybe the server is just bad at finding your file.";

		let start = "Press <space> to play  again";

		cx.font = "30px Arial Black";


		cx.fillStyle = 'rgba(82,84,82,1)';
		cx.fillRect(0,0,768,50);

		cx.fillStyle = 'rgba(255,255,255,1)';
		cx.fillRect(20,60,728,200);

		cx.beginPath();
		cx.rect(30, 70, 708, 180);
		cx.stroke();

		cx.font = "30px Arial";
		cx.fillStyle = "#FFF";  //<======= here
		cx.fillText(header, 10, 40);
		cx.fillStyle = "#FF0000";  //<======= here
		cx.fillText(title, 40, 105);
		cx.font = "18px Arial";
		cx.fillStyle = "#000";  //<======= here
		cx.fillText(subtitle1, 40, 145);
		cx.fillText(subtitle2, 40, 180);
		cx.fillText(start, 40, 230);

	}

	renderInfoPanel(){
		let currentLevel = level.currentLevel + 1;
		let movesLeft = gameState.movesLeft;
		let levelText = "Level: " + currentLevel.toString();
		let movesLeftText = "Moves left: " + movesLeft.toString();
		cx.font = "12px Arial";
		cx.fillStyle = "#000";  //<======= here
		cx.fillText(levelText, 530, 18);
		cx.fillText(movesLeftText, 530, 38);

	}
}