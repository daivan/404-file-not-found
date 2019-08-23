let { getCanvas, getContext, init, initKeys, keyPressed , TileEngine, load,SpriteSheet  } = kontra;
let {  canvas, context } = init();

initKeys();

const player = new Player(kontra);
const interface = new UserInterface(kontra);
const level = new Levels(0);
const gameState = new GameState();


var ctx = canvas.getContext("2d");

var gameStarted=false;
   

let start = kontra.Sprite({
      width:32,
      height: 32,
      color: 'yellow'
    });

let end = kontra.Sprite({
    width:32,
    height: 32,
    color: 'green'
});

  
let cooldown=0;

let steps=[];


load('assets/imgs/groundSimple.png','assets/imgs/robot.png')
  .then(function() {


  let img = new Image();
img.src = 'assets/imgs/groundSimple.png';

  let background = TileEngine({
    // tile size
    tilewidth: 32,
    tileheight: 32,

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

      background.renderLayer(level.getCurrentLevel().name);        
  }

  });

gameState.initiateLevel(player,start,end,level.getCurrentLevel());

let loop = kontra.GameLoop({

    update: function(dt) {


    // Start Game
    if(gameStarted==false && keyPressed('space')){
      gameStarted=true;
      interface.gameStarted();  
    }

  if(cooldown>15 && gameState.backing==0){


    if(keyPressed('up')){
      if(player.Move('up')){
        steps.push('up');
        cooldown=0;  
      }
      
      
    }
    if(keyPressed('down')){
      if(player.Move('down')){
        steps.push('down');
        cooldown=0;  
      }
      
 
    }
    if(keyPressed('left')){
      if(player.Move('left')){
        steps.push('left');
        cooldown=0;  
      }
      
  
    }
    if(keyPressed('right')){
      if(player.Move('right')){
        steps.push('right');
        cooldown=0;  
      }
    }
  }



// gameState.backing back process
  if(cooldown>15 && gameState.backing==1){
    var move = steps.pop();

      if(move=='up'){
        player.sprite.y+=32;
      }
      if(move=='left'){
        player.sprite.x+=32;
      }
      if(move=='right'){
        player.sprite.x-=32;
      }
      if(move=='down'){
        player.sprite.y-=32;
      }

      cooldown=0;
  }
  cooldown++;

/*
  // Dead
if(player.sprite.x==enemy.x && player.sprite.y==enemy.y){

    alert('You died');
  player.sprite.x=-100000
  }
*/


gameState.checkHalfway(player, level);

var result = gameState.checkStageClear(player, level.getCurrentLevel());
if(result){
  level.setNextLevel();
  gameState.initiateLevel(player,start,end,level.getCurrentLevel());
}
  // win


      player.sprite.update();
    
      start.update();
      end.update();
      background.update();
    },

    render: function() {
      if(gameStarted==true){
        background.render();
        start.render(); 
        end.render(); 
        player.sprite.render();  
      }
      interface.Display();
    }
  });
  loop.start();

  });

  





  
