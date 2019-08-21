let { getCanvas, getContext, init, initKeys, keyPressed , TileEngine, load  } = kontra;
let {  canvas, context } = init();

initKeys();

const levelLoader = new LevelLoader(1,2);
const player = new Player(kontra);
const interface = new UserInterface(kontra);

var ctx = canvas.getContext("2d");

var gameStarted=false;
   

let start = kontra.Sprite(levelLoader.start);
let end = kontra.Sprite(levelLoader.end);


let enemy = kontra.Sprite({
    x:128,
    y:128,
    width:64,
    height: 64,
    color: 'red',
    direction: 'left'
});

  
let reverting=0;
let cooldown=0;
let halfway=0;
let steps=[];


load('assets/imgs/mapPack_tilesheet.png')
  .then(function() {

  let img = new Image();
img.src = 'assets/imgs/mapPack_tilesheet.png';

  let tileEngine = TileEngine({
    // tile size
    tilewidth: 64,
    tileheight: 64,

    // map size in tiles
    width: 10,
    height: 10,

    // tileset object
    tilesets: [{
      firstgid: 1,
      image: img
    }],

    // layer object
    layers: [{
      name: 'level1',
      data: [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  6,  7,  7,  8,  0,  0,  0,  0,
              0,  6,  27, 24, 24, 25, 0,  0,  0,  0,
              0,  23, 24, 24, 24, 26, 8,  0,  0,  0,
              0,  23, 24, 24, 24, 24, 26, 8,  0,  7,
              0,  23, 24, 24, 24, 24, 24, 25, 0,  0,
              0,  40, 41, 41, 10, 24, 24, 25, 0,  0,
              0,  0,  0,  0,  40, 41, 41, 42, 0,  42,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0  ]
    },
    {
      name: 'level2',
      data: [ 0,  0,  0,  7,  0,  0,  0,  0,  0,  0,
              0,  0,  6,  7,  7,  8,  0,  0,  0,  0,
              0,  6,  27, 24, 24, 25, 0,  0,  0,  0,
              0,  23, 24, 24, 24, 26, 8,  0,  0,  0,
              0,  23, 24, 24, 24, 24, 26, 8,  0,  7,
              0,  23, 24, 24, 24, 24, 24, 25, 0,  0,
              0,  40, 41, 41, 10, 24, 24, 25, 0,  0,
              0,  0,  0,  0,  40, 41, 41, 42, 0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
              0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ]
    }
    ],
    update: function(){
      
  },
  render: function(){
      if(reverting==1){
        tileEngine.renderLayer('level1');        
      }else{
        tileEngine.renderLayer('level2');
      }
  }

  });

let loop = kontra.GameLoop({

    update: function() {

if(enemy.x==0){
  enemy.direction='right'
}

if(enemy.x==240){
  enemy.direction='left'
}

  if(cooldown>15 && reverting==0){


    if(gameStarted==false && keyPressed('space')){
      // Start Game
      gameStarted=true;
      interface.gameStarted();
      
    }



    if(keyPressed('up')){
      player.Move('up');
      
      cooldown=0;
      steps.push('up');
      if(enemy.direction=='left'){
        enemy.x-=64;
      }else{
        enemy.x+=64;
      }
      
    }
    if(keyPressed('down')){
      player.Move('down');
      cooldown=0;
      steps.push('down');
      if(enemy.direction=='left'){
        enemy.x-=64;
      }else{
        enemy.x+=64;
      }
    }
    if(keyPressed('left')){
      player.Move('left');
      cooldown=0;
      steps.push('left');
      if(enemy.direction=='left'){
        enemy.x-=64;
      }else{
        enemy.x+=64;
      }
    }
    if(keyPressed('right')){
      player.Move('right');
      
      cooldown=0;
      steps.push('right');
      if(enemy.direction=='left'){
        enemy.x-=64;
      }else{
        enemy.x+=64;
      }
    }

  }
  /*
  if(keyPressed('space')){
      console.log(steps);
      reverting=1;

    }
  */

// if you touch the end, start reverting back
  if(player.sprite.x==end.x && player.sprite.y==end.y){
    reverting=1;
    halfway=1;
    //tileEngine.setTileAtLayer('level1', {row: 2, col: 1}, 10);
  }


// reverting back process
  if(cooldown>15 && reverting==1){
    var move = steps.pop();

      if(move=='up'){
        player.sprite.y+=64;
      }
      if(move=='left'){
        player.sprite.x+=64;
      }
      if(move=='right'){
        player.sprite.x-=64;
      }
      if(move=='down'){
        player.sprite.y-=64;
      }


      if(enemy.direction=='left'){
        enemy.x-=64;
      }else{
        enemy.x+=64;
      }
      cooldown=0;
  }
  cooldown++;

  // Dead
if(player.sprite.x==enemy.x && player.sprite.y==enemy.y){

    alert('You died');
  player.sprite.x=-100000
  }

  // win
if(player.sprite.x==start.x && player.sprite.y==start.y && halfway==1){
  alert('You win');
  player.sprite.x=-100000
}

      player.sprite.update();
      enemy.update();
      start.update();
      end.update();
      tileEngine.update();
    },

    render: function() {
      if(gameStarted==true){
        tileEngine.render();
        start.render(); 
        end.render(); 
        enemy.render(); 
        player.sprite.render();  
      }
      interface.Display();
    }
  });
  loop.start();

  });

  





  
