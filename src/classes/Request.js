class Request {

    constructor(context) {
        let image = new Image();
        image.src = 'assets/images/request.png';
        this.context = context;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.destination = [0, 0];
        this.xFrame = 0;
        this.yFrame = 0;
    }


    isConnected(Map){

        console.log('false not connected');
        console.log(Map);
        // A * STAR Example needed for isConnected
        let graph = new Graph([
            [1,1,1,1],
            [0,0,0,0],
            [0,0,1,1]
        ]);
        let start = graph.grid[0][0];
        let end = graph.grid[2][2];
        let result = this.connected(graph, start, end);
        console.log(result);


    }

    connected(map, start, stopp){
        return true;
    }

    render() {
        this.context.drawImage(this.image, this.xFrame, this.yFrame, 32, 32, this.x, this.y, 64, 64);

    }

}