class Levels {

    constructor(currentLevel) {
        this.currentLevel = currentLevel;

        this.levels = [
            {
                name: 'level1',
                startLocation: [1, 4],
                endLocation: [6, 3],
                map: [[0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]]
            },
            {
                name: 'level2',
                playerLocation: [2, 2],
                startLocation: [2, 2],
                endLocation: [6, 5],
                enemies: [
                    {
                        type: 'straight',
                        direction: 'vertical',
                        currentDirection: 'up',
                        location: [4, 4]
                    },
                    {
                        type: 'straight',
                        direction: 'horizontal',
                        currentDirection: 'left',
                        location: [4, 4]
                    },
                ],
                map: [[0, 0, 1, 2, 2, 3, 0, 0],
                    [0, 1, 5, 5, 5, 6, 0, 0],
                    [0, 4, 5, 5, 5, 5, 3, 0],
                    [0, 4, 5, 5, 5, 5, 5, 3],
                    [0, 4, 5, 5, 5, 5, 5, 6],
                    [0, 7, 8, 8, 5, 5, 5, 6],
                    [0, 0, 0, 0, 7, 8, 8, 9],
                    [0, 0, 0, 0, 0, 0, 0, 0]]
            },
            {
                name: 'level3',
                playerLocation: [6, 1],
                startLocation: [1, 1],
                endLocation: [6, 6],
                enemies: [
                    {
                        type: 'straight',
                        direction: 'horizontal',
                        currentDirection: 'left',
                        location: [5, 4]
                    },
                    {
                        type: 'straight',
                        direction: 'horizontal',
                        currentDirection: 'right',
                        location: [6, 3]
                    },
                    {
                        type: 'straight',
                        direction: 'horizontal',
                        currentDirection: 'left',
                        location: [1, 4]
                    },
                    {
                        type: 'straight',
                        direction: 'horizontal',
                        currentDirection: 'right',
                        location: [2, 3]
                    },
                ],
                map: [[1, 2, 3, 0, 0, 1, 2, 3],
                    [4, 5, 5, 2, 2, 5, 5, 6],
                    [4, 5, 5, 8, 8, 5, 5, 6],
                    [4, 5, 6, 0, 0, 4, 5, 6],
                    [4, 5, 6, 0, 0, 4, 5, 6],
                    [4, 5, 5, 2, 2, 5, 5, 6],
                    [4, 5, 5, 8, 8, 5, 5, 6],
                    [7, 8, 9, 0, 0, 7, 8, 9]]
            },
        ];
    }

    selectedTile(mouseX, mouseY){
        let x;
        let y;
        if (mouseX > 0 && mouseX < 520) {
            x = mouseX / 64;
        } else if(mouseX > 519) {
            x = 7;
        } else {
            x = 0;
        }
        if (mouseY > 0 && mouseY < 520) {
            y = mouseY / 64;
        } else if(mouseY > 519){
            y = 7;
        } else {
            y = 0;
        }
        return [Math.floor(y), Math.floor(x)];
    }

    changeTile(mouseX, mouseY){
        let selectedTiles = this.selectedTile(mouseX, mouseY);
        console.log(selectedTiles);
        if( this.levels[0].map[selectedTiles[0]][selectedTiles[1]] > 8){
            this.levels[0].map[selectedTiles[0]][selectedTiles[1]] = 0;
        }else{
            this.levels[0].map[selectedTiles[0]][selectedTiles[1]] += 1;
        }

    }
    getCurrentLevel() {
        return this.levels[this.currentLevel];
    }

    setNextLevel() {
        this.currentLevel++;
    }
}