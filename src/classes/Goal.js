class Goal {

    constructor(context) {
        let image = new Image();
        image.src = 'assets/images/collection.png';
        this.context = context;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.destination = [0, 0];
        this.xFrame = 64;
        this.yFrame = 192;
        this.name = '';
    }


    render() {
        this.context.drawImage(this.image, this.xFrame, this.yFrame, 64, 64, this.x, this.y, 64, 64);

        // Render name
		cx.font = "12px Arial";
		cx.fillStyle = "#000";
		cx.fillText(this.name, this.x, this.y+62);
    }

}