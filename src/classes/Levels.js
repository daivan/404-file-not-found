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
              6,  7,  7,  7,  7,  7,  7,  7,  7,  8,
              23, 24, 24, 24, 24, 24, 24, 24, 24, 25,
              23, 24, 24, 24, 24, 24, 24, 24, 24, 25,
              40, 41, 41, 41, 41, 41, 41, 41, 41, 42,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0  ]
    },
    {
      name: 'level2',
      data: [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  6,  7,  7,  8,  0,  0,  0,  0,
              0,  6,  27, 24, 24, 25, 0,  0,  0,  0,
              0,  23, 24, 24, 24, 26, 8,  0,  0,  0,
              0,  23, 24, 24, 24, 24, 26, 8,  0,  0,
              0,  23, 24, 24, 24, 24, 24, 25, 0,  0,
              0,  40, 41, 41, 10, 24, 24, 25, 0,  0,
              0,  0,  0,  0,  40, 41, 41, 42, 0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0  ]
    },
    {
      name: 'level3',
      data: [ 6,  7,  7,  8,  0,  0,  6,  7,  7,  8,
              23, 24, 24, 25, 0,  0,  23, 24, 24, 25,
              23, 24, 24, 26, 7,  7,  27, 24, 24, 25,
              23, 24, 24, 9, 41, 41, 10, 24, 24, 25,
              23, 24, 24, 25, 0, 0, 23, 24, 24, 25,
              23, 24, 24, 25, 0, 0, 23, 24, 24, 25,
              23, 24, 24, 26, 7, 7, 27, 24, 24, 25,
              23, 24, 24, 9, 41, 41, 10, 24, 24, 25,
              23, 24, 24, 25, 0, 0, 23, 24, 24, 25,
              40, 41, 41, 42, 0, 0, 40, 41, 41, 42 ]
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
 
}