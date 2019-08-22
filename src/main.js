let { getCanvas, getContext, init, initKeys, keyPressed , TileEngine, load,SpriteSheet  } = kontra;
let {  canvas, context } = init();

initKeys();

const levelLoader = new LevelLoader(1,2);
const player = new Player(kontra);
const interface = new UserInterface(kontra);
const level = new Levels(0);
const gameState = new GameState();

console.log(level.levels);

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

  
let cooldown=0;

let steps=[];


load('assets/imgs/mapPack_tilesheet.png','assets/imgs/robot.png')
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
    layers: level.maps,
    update: function(){
      
  },
  render: function(){
      if(gameState.backing==1){
        tileEngine.renderLayer('level1');        
      }else{
        tileEngine.renderLayer('level2');
      }
  }

  });

let loop = kontra.GameLoop({

    update: function(dt) {

if(enemy.x==0){
  enemy.direction='right'
}

if(enemy.x==240){
  enemy.direction='left'
}

    // Start Game
    if(gameStarted==false && keyPressed('space')){
      gameStarted=true;
      interface.gameStarted();  
    }

  if(cooldown>15 && gameState.backing==0){


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



// gameState.backing back process
  if(cooldown>15 && gameState.backing==1){
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

gameState.checkHalfway(player,level);

gameState.checkStageClear(player,level);
  // win


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

  





  
