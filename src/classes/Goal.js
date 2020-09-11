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
    }


    render() {
        this.context.drawImage(this.image, this.xFrame, this.yFrame, 64, 64, this.x, this.y, 64, 64);

    }

}