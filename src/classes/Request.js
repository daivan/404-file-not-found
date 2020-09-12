class Request {

    constructor(context) {
        let image = new Image();
        image.src = 'assets/images/collection.png';
        this.context = context;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.start = [0, 0];
        this.goal = [0, 0];
        this.xFrame = 0;
        this.yFrame = 192;
        this.name = '';
    }


    isConnected(Map){

        let start = this.start;
        let goal = this.goal;
        let path = this.navigate(Map, start, [start]);

        if(searchForArray(path, goal) === -1){
            return false;
        }else{
            return true;
        }
    }


    navigate(Map, currentPosition, path = []){

        let possibleMoves = this.possibleMovements(Map, currentPosition, path);
        // looping though all moves
        possibleMoves.forEach(move =>{
            path.push(move);
            this.navigate(Map, move, path);
        });

        return path;
    }
    possibleMovements(Map, Vector, path){

        let x = Vector[0];
        let y = Vector[1];
        let currentPieceNumber = Map[x][y];
        let east = this.isEastPossible(Map, x, y, currentPieceNumber);
        let west = this.isWestPossible(Map, x, y, currentPieceNumber);
        let south = this.isSouthPossible(Map, x, y, currentPieceNumber);
        let north = this.isNorthPossible(Map, x, y, currentPieceNumber);

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

    isNorthPossible(Map, x, y, currentPieceNumber){
        if (x === 0){
            return false;
        }
        // goal cant be north

        // 0 because of start position
        let workingCurrentPieces = [0,2,3,6,7,8,9];
        let workingMovingPieces = [2,3,4,5,6,9];

        if(workingCurrentPieces.includes(currentPieceNumber) === false){
            return false;
        }
        if(workingMovingPieces.includes(Map[x-1][y]) === false){
            return false;
        }

        if(Map[x-1][y] !== 0){
            return [x-1, y];
        }
        return false;
    }

    isEastPossible(Map, x, y, currentPieceNumber){
        if (y === 7){
            return false;
        }

        // no the east is goal?
        if(this.goal[0]===x && this.goal[1]===(y+1)){
            return [x, y+1];
        }

        // 0 because of start position
        let workingCurrentPieces = [0,1,3,4,6,7,9];
        let workingMovingPieces = [1,3,5,6,8,9];

        if(workingCurrentPieces.includes(currentPieceNumber) === false){
            return false;
        }
        if(workingMovingPieces.includes(Map[x][y+1]) === false){
            return false;
        }

        if(Map[x][y+1] !== 0){
            return [x, y+1];
        }
        return false;
    }
    isSouthPossible(Map, x, y, currentPieceNumber){
        if (x === 7){
            return false;
        }

        // no the east is goal?
        if(this.goal[0]===(x+1) && this.goal[1]===y){
            return [x+1, y];
        }

        // 0 because of start position
        let workingCurrentPieces = [0,2,3,4,5,6,9];
        let workingMovingPieces = [2,3,6,7,8,9];

        if(workingCurrentPieces.includes(currentPieceNumber) === false){
            return false;
        }
        if(workingMovingPieces.includes(Map[x+1][y]) === false){
            return false;
        }

        if(Map[x+1][y] !== 0){
            return [x+1, y];
        }
        return false;
    }
    isWestPossible(Map, x, y, currentPieceNumber){
        if (y === 0){
            return false;
        }

        // 0 because of start position
        let workingCurrentPieces = [0,1,3,5,6,8,9];
        let workingMovingPieces = [1,3,4,6,7,9];

        if(workingCurrentPieces.includes(currentPieceNumber) === false){
            return false;
        }
        if(workingMovingPieces.includes(Map[x][y-1]) === false){
            return false;
        }

        if(Map[x][y-1] !== 0){
            return [x, y-1];
        }
        return false;
    }

    render() {

        let croppedImage = [];
        if(this.start[0]===0){
            croppedImage = Background.calculate(22);
        }else{
            croppedImage = Background.calculate(21);
        }

        // background pipe
        this.context.drawImage(this.image, croppedImage[0], croppedImage[1], 64, 64, this.x, this.y, 64, 64);
        // Render image
        this.context.drawImage(this.image, this.xFrame, this.yFrame, 64, 64, this.x, this.y, 64, 64);

        // Render name
		cx.font = "12px Arial";
		cx.fillStyle = "#000";
		cx.fillText(this.name, this.x+5, this.y+62);

    }

}