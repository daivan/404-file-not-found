class TestTile {

    constructor(context) {
        let image = new Image();
        image.src = 'assets/images/robot.png';
        this.context = context;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.destination = [0, 0];
        this.xFrame = 0;
        this.yFrame = 0;
    }


    nextFrame(){
        this.xFrame = 0;
        this.yFrame = 32;
    }

    render() {
        this.context.drawImage(this.image, this.xFrame, this.yFrame, 32, 32, this.x, this.y, 64, 64);

    }

}