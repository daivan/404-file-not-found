class TextInterface {

	constructor() {
	}


	renderStart() {
		let title = "404 - File not found";
		let subtitle = "";
		let story1 = "You are a file server to a special site.";
		let story2 = "Your job is to make sure that the requests get their files.";
		let story3 = "Never give a request 404 - File not found.";
		let start = "Press <Space> to play";
		let credits = "Created by: Daivan Trinh & Hakan Einarsson for js13kGames.com 2020";
		cx.font = "50px Arial";
		cx.fillStyle = "#000";  //<======= here
		cx.fillText(title, 20, 270);
		cx.font = "20px Arial";
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

		let story1 = "Thank you for playing our game!";
		let story2 = "We love what you are doing at js13kGames.";
		let story3 = "Keep up the great work!";

		let credits = "Created by: Daivan Trinh & Hakan Einarsson for js13kGames.com 2020";
		cx.font = "50px Arial";
		cx.fillStyle = "#000";  //<======= here
		cx.fillText(title, 20, 270);
		cx.font = "20px Arial";

		cx.fillText(story1, 20, 340);
		cx.fillText(story2, 20, 365);
		cx.fillText(story3, 20, 390);

		cx.font = "12px Arial";
		cx.fillText(credits, 20, 500);

	}

	renderDead(){

		cx.fillStyle = 'rgba(225,225,225,0.8)';
		cx.fillRect(0,0,768,512);


		let header = "Server Error";
		let title = "404 - File or directory not found.";
		let subtitle1 = "The resource you are looking for might have been removed...";
		let subtitle2 = "Or maybe the server is just bad at finding your file.";

		let start = "Press <space> to play again";

		cx.font = "30px Arial";


		cx.fillStyle = 'rgba(82,84,82,1)';
		cx.fillRect(0,0,768,50);

		cx.fillStyle = 'rgba(255,255,255,1)';
		cx.fillRect(20,60,728,200);

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
		let nextTileText = "Next Tile: ";
		cx.font = "12px Arial";
		cx.fillStyle = "#000";  //<======= here
		cx.fillText(levelText, 530, 18);
		cx.fillText(movesLeftText, 530, 38);
		cx.fillText(nextTileText, 530, 58);

	    let image = new Image();
        image.src = 'assets/images/wires.png';
		let croppedImage = Background.calculate(game.nextTile);
		cx.drawImage(image, croppedImage[0], croppedImage[1], 32, 32, 530, 68, 64, 64);
	}
}