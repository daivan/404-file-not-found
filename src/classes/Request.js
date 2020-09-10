class Request {

    constructor(context) {
        let image = new Image();
        image.src = 'assets/images/request.png';
        this.context = context;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.start = [0, 0];
        this.goal = [0, 0];
        this.xFrame = 0;
        this.yFrame = 0;
    }


    isConnected(Map){

        let start = this.start;
        let goal = this.goal;
        let path = this.navigate(Map, start, [start]);
        console.log("start:",start);
        console.log("goal:",goal);
        if(searchForArray(path, goal) === -1){
            console.log('You didnt reach your goal :(');
        }else{
            console.log('reach your goal :)');
        }
        console.log("result from navigate: ", path);
    }


    navigate(tempMap, currentPosition, path = []){


        let possibleMoves  = this.possibleMovements(tempMap, currentPosition, path);

        // looping though all moves
        possibleMoves.forEach(move =>{
            path.push(move);
            this.navigate(tempMap, move, path);
        });

        return path;
    }
    possibleMovements(Map, Vector, path){
        let x = Vector[0];
        let y = Vector[1];
        let north = this.isNorthPossible(Map, x, y);
        let east = this.isEastPossible(Map, x, y);
        let south = this.isSouthPossible(Map, x, y);
        let west = this.isWestPossible(Map, x, y);

        let moves = [];
        if (north !== false){
            moves.push(north);
        }
        if (east !== false){
            moves.push(east);
        }
        if (south !== false){
            moves.push(south);
        }
        if (west !== false){
            moves.push(west);
        }
        // subtract moves from path
        let realMoves = [];
        moves.forEach(move =>{
           if(searchForArray(path, move)===-1){
               realMoves.push(move);
           }
        });
        return realMoves;
    }

    isNorthPossible(Map, x, y){
        if (x === 0){
            return false;
        }
        if(Map[x-1][y] !== 0){
            return [x-1, y];
        }
        return false;
    }

    isEastPossible(Map, x, y){
        if (y === 7){
            return false;
        }
        if(Map[x][y+1] !== 0){
            return [x, y+1];
        }
        return false;
    }
    isSouthPossible(Map, x, y){
        if (x === 7){
            return false;
        }
        if(Map[x+1][y] !== 0){
            return [x+1, y];
        }
        return false;
    }
    isWestPossible(Map, x, y){
        if (y === 0){
            return false;
        }
        if(Map[x][y-1] !== 0){
            return [x, y-1];
        }
        return false;
    }

    connected(map, start, stop){
        return true;
    }

    render() {
        this.context.drawImage(this.image, this.xFrame, this.yFrame, 32, 32, this.x, this.y, 64, 64);

    }

}