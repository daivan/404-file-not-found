class Levels {

    constructor(currentLevel) {
        this.currentLevel = currentLevel;

        this.levels = [
            {
                name: 'level1',
                timeLimit: 10000,
                movesLeft: 50,
                requests: [
                    {
                        location: [0, 4],
                        start: [0, 4],
                        goal: [7, 4]
                    },
                    {
                        location: [4, 0],
                        start: [4, 0],
                        goal:[4, 7]
                    },
                ],
                goals: [
                    {
                        location: [7, 4]
                    },
                    {
                        location: [4, 7]
                    },
                ],
            },
            {
                name: 'level2',
                timeLimit: 10000,
                movesLeft: 20,
                requests: [
                    {
                        location: [0, 4],
                        start: [0, 4],
                        goal: [7, 4]
                    },
                    {
                        location: [4, 0],
                        start: [4, 0],
                        goal:[4, 7]
                    },
                    {
                        location: [3, 0],
                        start: [3, 0],
                        goal:[4, 7]
                    },
                ],
                goals: [
                    {
                        location: [7, 4]
                    },
                    {
                        location: [4, 7]
                    },
                    {
                        location: [3, 7]
                    },
                ],
            },
            {
                name: 'level3',
                timeLimit: 10000,
                movesLeft: 30,
                requests: [
                    {
                        location: [0, 4],
                        start: [0, 4],
                        goal: [7, 4]
                    },
                    {
                        location: [4, 0],
                        start: [4, 0],
                        goal:[4, 7]
                    },
                    {
                        location: [3, 0],
                        start: [3, 0],
                        goal:[4, 7]
                    },
                    {
                        location: [3, 7],
                        start: [3, 7],
                        goal:[4, 7]
                    },
                ],
                goals: [
                    {
                        location: [7, 4]
                    },
                    {
                        location: [4, 7]
                    },
                    {
                        location: [3, 7]
                    },
                    {
                        location: [2, 7]
                    },
                    {
                        location: [1, 7]
                    },
                ],
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