class Levels {

   constructor(currentLevel) {
    this.currentLevel = currentLevel;

    this.levels=[
    {
      name: 'level1',
      playerLocation: [1, 4],
      startLocation: [1, 4],
      endLocation: [6, 3],
      enemies: [
      {
        type:'straight',
        direction: 'vertical',
        currentDirection: 'down',
        location: [6, 4]
      }
      ]
    },
    {
      name: 'level2',
      playerLocation: [3, 2],
      startLocation: [3, 2],
      endLocation: [6, 6],
      enemies: [
      {
        type:'straight',
        direction: 'vertical',
        currentDirection: 'down',
        location: [4, 4]
      },
      {
        type:'straight',
        direction: 'horizontal',
        currentDirection: 'left',
        location: [6, 4]
      },
      ]
    },
    {
      name: 'level3',
      playerLocation: [8, 1],
      startLocation: [1, 1],
      endLocation: [8, 8],
      enemies: [
      {
        type:'straight',
        direction: 'horizontal',
        currentDirection: 'left',
        location: [6, 5]
      },
      {
        type:'straight',
        direction: 'horizontal',
        currentDirection: 'right',
        location: [7, 4]
      },
      {
        type:'straight',
        direction: 'horizontal',
        currentDirection: 'left',
        location: [2, 5]
      },
      {
        type:'straight',
        direction: 'horizontal',
        currentDirection: 'right',
        location: [3, 4]
      },      
      ]
    },
    ]

    this.maps=[{
      name: 'level1',
      data: [ [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0],
              [1,  2,  2,  2,  2,  2,  2,  3],
              [4,  5,  5,  5,  5,  5,  5,  6],
              [4,  5,  5,  5,  5,  5,  5,  6],
              [7,  8,  8,  8,  8,  8,  8,  9],
              [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0]]
    },
    {
      name: 'level2',
      data: [ [0,  0,  1,  2,  2,  3,  0,  0],
              [0,  1,  5,  5,  5,  6,  0,  0],
              [0,  4,  5,  5,  5,  5,  3,  0],
              [0,  4,  5,  5,  5,  5,  5,  3],
              [0,  4,  5,  5,  5,  5,  5,  6],
              [0,  7,  8,  8,  5,  5,  5,  6],
              [0,  0,  0,  0,  7,  8,  8,  9],
              [0,  0,  0,  0,  0,  0,  0,  0]  ]
    },
    {
      name: 'level3',
      data: [ [1,  2,  3,  0,  0,  1,  2,  3],
              [4,  5,  5,  2,  2,  5,  5,  6],
              [4,  5,  5,  8,  8,  5,  5,  6],
              [4,  5,  6,  0,  0,  4,  5,  6],
              [4,  5,  6,  0,  0,  4,  5,  6],
              [4,  5,  5,  2,  2,  5,  5,  6],
              [4,  5,  5,  8,  8,  5,  5,  6],
              [7,  8,  9,  0,  0,  7,  8,  9]]
    },
        {
      name: 'end',
      data: [ [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0],
              [0,  0,  0,  0,  0,  0,  0,  0]]
    }
    ];
  }

  getCurrentLevel()
  {
   return this.levels[this.currentLevel]; 
  }

  setNextLevel()
  {
   this.currentLevel++; 
  }
}