class Goal {

    constructor(context) {
        let image = new Image();
        image.src = 'assets/images/file.png';
        this.context = context;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.destination = [0, 0];
        this.xFrame = 0;
        this.yFrame = 0;
    }


    render() {
        this.context.drawImage(this.image, this.xFrame, this.yFrame, 32, 32, this.x, this.y, 64, 64);

    }

}