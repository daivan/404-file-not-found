class Levels {


   constructor(currentLevel) {
    this.currentLevel = currentLevel;

    // Description
    // 1 Start Location
    // 2 End Location
    // 3 Walls

    this.levels=[
    {
      name: 'level1',
      playerLocation: [1, 4],
      startLocation: [1, 4],
      endLocation: [8, 4]
    },
    {
      name: 'level2',
      playerLocation: [3, 2],
      startLocation: [3, 2],
      endLocation: [6, 6]
    },
    {
      name: 'level3',
      playerLocation: [8, 1],
      startLocation: [1, 1],
      endLocation: [8, 8]
    },
    ]

    this.maps=[{
      name: 'level1',
      data: [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              1,  2,  2,  2,  2,  2,  2,  2,  2,  3,
              4,  5,  5,  5,  5,  5,  5,  5,  5,  6,
              4,  5,  5,  5,  5,  5,  5,  5,  5,  6,
              7,  8,  8,  8,  8,  8,  8,  8,  8,  9,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0  ]
    },
    {
      name: 'level2',
      data: [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  1,  2,  2,  3,  0,  0,  0,  0,
              0,  1,  5,  5,  5,  6,  0,  0,  0,  0,
              0,  4,  5,  5,  5,  5,  3,  0,  0,  0,
              0,  4,  5,  5,  5,  5,  5,  3,  0,  0,
              0,  4,  5,  5,  5,  5,  5,  6,  0,  0,
              0,  7,  8,  8,  5,  5,  5,  6,  0,  0,
              0,  0,  0,  0,  7,  8,  8,  9,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0  ]
    },
    {
      name: 'level3',
      data: [ 1,  2,  2,  3,  0,  0,  1,  2,  2,  3,
              4,  5,  5,  6,  0,  0,  4,  5,  5,  6,
              4,  5,  5,  5,  2,  2,  5,  5,  5,  6,
              4,  5,  5,  5,  8,  8,  5,  5,  5,  6,
              4,  5,  5,  6,  0,  0,  4,  5,  5,  6,
              4,  5,  5,  6,  0,  0,  4,  5,  5,  6,
              4,  5,  5,  5,  2,  2,  5,  5,  5,  6,
              4,  5,  5,  5,  8,  8,  5,  5,  5,  6,
              4,  5,  5,  6,  0,  0,  4,  5,  5,  6,
              7,  8,  8,  9,  0,  0,  7,  8,  8,  9 ]
    }
    ];
  }

  getCurrentLevel()
  {
   return this.levels[this.currentLevel]; 
  }

  setCurrentLevel(newLevel)
  {
    this.currentLevel=newLevel;
  }
 
  setNextLevel()
  {
   this.currentLevel++; 
  }
}