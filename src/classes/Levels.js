class Levels {

    constructor(currentLevel) {
        this.currentLevel = currentLevel;

        this.levels = [
            {
                name: 'level1',
                playerLocation: [1, 4],
                startLocation: [1, 4],
                endLocation: [6, 3],
                enemies: [
                    {
                        type: 'straight',
                        direction: 'horizontal',
                        currentDirection: 'right',
                        location: [4, 4]
                    }
                ],
                map: [[0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 2, 2, 2, 2, 2, 2, 3],
                    [4, 5, 5, 5, 5, 5, 5, 6],
                    [4, 5, 5, 5, 5, 5, 5, 6],
                    [7, 8, 8, 8, 8, 8, 8, 9],
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

    getCurrentLevel() {
        return this.levels[this.currentLevel];
    }

    setNextLevel() {
        this.currentLevel++;
    }
}