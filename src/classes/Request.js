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
        let tempMap = [
            [0, 1, 1, 0, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]];
        let start = [0,0];
        let goal = [0,7];
        let path = this.navigate(tempMap, start, [start]);
        if(searchForArray(path, goal) === -1){
            console.log('You didnt reach your goal :(');
        }else{
            console.log('reach your goal :)');
        }
        console.log("result from navigate: ", result);
    }

    vectorsAreTheSame(vector1, vector2){
        if(vector1[0]===vector2[0] && vector1[1] === vector2[1]){
            return true;
        }
        return false;
    }

    navigate(tempMap, currentPosition, path = []){

        /*
        // reached the goal
        if (this.vectorsAreTheSame(currentPosition, goal)){
            console.log('we reached the goal');
            console.log(path);
            return path;
        }
*/

        let possibleMoves  = this.possibleMovements(tempMap, currentPosition, path);

        // looping though all moves
        possibleMoves.forEach(move =>{
            path.push(move);
            this.navigate(tempMap, move, path);
        });


        /*
        // no more moves check if we can go back
        if(path.length>1){
            let back = path.pop();
            this.navigate(tempMap, back, goal, path);
        }
*/
        /*
        if(path.length<10){
            path.push([1,1])
            return this.navigate(tempMap,start, goal, path);
        }
         */
        return path;
       //return path;
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
        if(Map[x-1][y] === 1){
            return [x-1, y];
        }
        return false;
    }

    isEastPossible(Map, x, y){
        if (y === 7){
            return false;
        }
        if(Map[x][y+1] === 1){
            return [x, y+1];
        }
        return false;
    }
    isSouthPossible(Map, x, y){
        if (x === 7){
            return false;
        }
        if(Map[x+1][y] === 1){
            return [x+1, y];
        }
        return false;
    }
    isWestPossible(Map, x, y){
        if (y === 0){
            return false;
        }
        if(Map[x][y-1] === 1){
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