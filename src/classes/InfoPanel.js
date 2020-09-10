class InfoPanel {

	render()
	{


		let title = "404 Files not found";

		let start = "Press <space> to try again";

		cx.font = "30px Arial Black";
		cx.fillStyle = "#FF0000";  //<======= here
		cx.fillText(title, 140, 170);
		cx.font = "20px Arial Black";
		cx.fillText(start, 115, 350);


	}
}