let { getCanvas, getContext, init, initKeys, keyPressed , TileEngine, load,SpriteSheet  } = kontra;
let {  canvas, context } = init();

initKeys();

const player = new Player(kontra);

const interface = new UserInterface(kontra);
const level = new Levels(0);
const gameState = new GameState();


var ctx = canvas.getContext("2d");

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




let enemies = [];

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



let loop = kontra.GameLoop({

    update: function(dt) {



    // In the Start Menu and press <space>
    if(gameState.stage=='menu' && keyPressed('space')){
      gameState.stage='game';
      gameState.initiateLevel(player,start,end,level.getCurrentLevel());
    }

    // Start Game
    if(gameState.dead==true && keyPressed('space')){
       gameState.restartLevel(player,start,end,level.getCurrentLevel());
    }

  if(cooldown>15 && gameState.backing==0 && gameState.dead==false){


    if(keyPressed('up')){
      if(player.Move('up')){
        gameState.checkDead(player, enemies);
        steps.push('up');
        enemies.map(enemy => enemy.Move());
        gameState.checkDead(player, enemies);
        cooldown=0;  
      }
      
      
    }
    if(keyPressed('down')){
      if(player.Move('down')){
        gameState.checkDead(player, enemies);
        steps.push('down');
        enemies.map(enemy => enemy.Move());
        gameState.checkDead(player, enemies);
        cooldown=0;  
      }
      
 
    }
    if(keyPressed('left')){
      if(player.Move('left')){
        gameState.checkDead(player, enemies);
        steps.push('left');
        enemies.map(enemy => enemy.Move());
        gameState.checkDead(player, enemies);
        cooldown=0;  
      }
      
  
    }
    if(keyPressed('right')){
      if(player.Move('right')){
        gameState.checkDead(player, enemies);
        steps.push('right');
        enemies.map(enemy => enemy.Move());
        gameState.checkDead(player, enemies);
        cooldown=0;  
      }
    }
  }



// gameState.backing back process
  if(cooldown>15 && gameState.backing==1){
    var move = steps.pop();
    if(move===undefined){
      //interface.gameState='dead';
      //interface.hide=false;
      //gameState.dead=true;
    }
      enemies.map(enemy => enemy.Move());
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
      gameState.checkDead(player, enemies);
      cooldown=0;
  }
  cooldown++;






gameState.checkHalfway(player, level);

var result = gameState.checkStageClear(player, level.getCurrentLevel());
if(result){
  level.setNextLevel();
  gameState.initiateLevel(player,start,end,level.getCurrentLevel());
}
  // win


      player.sprite.update();
      enemies.map(enemy => enemy.sprite.update());
      start.update();
      end.update();
      background.update();
      interface.sprite.update(gameState);
    },

    render: function() {
      if(gameState.stage!='menu'){
        background.render();
        start.render(); 
        end.render(); 
        player.sprite.render();  
        enemies.map(enemy => enemy.sprite.render());
      }
      interface.Display();
    }
  });
  loop.start();

  });

  





  
