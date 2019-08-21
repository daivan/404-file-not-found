let { getCanvas, getContext, init, initKeys, keyPressed , TileEngine, load  } = kontra;
let {  canvas, context } = init();

var ctx = canvas.getContext("2d");

var levels = [{
  level: 1,
name:'Level 1',
start:[16,16],
goal:[100,100]
}
,
{
  level: 2,
name:'Level 2',
start:[24,24],
goal:[200,200],
}]

var currentLevel=0;


initKeys();

var uiSprite

var ui = {
	index:100,
	x:20,
	y:20,
  score: 0,
  planes: 0,
  nextPlane: 1,
  color: 'brown',
    render: function () {
        // blue water
    let message = levels[currentLevel].name    
        
        ctx.font = "30px Arial";
		ctx.fillText(message, 100, 50);
        //ctx.fillText(message, 0, 0)
        
    }
}

uiSprite = kontra.Sprite(ui);
   

let player = kontra.Sprite({
    x:0,
    y:0,
    width:64,
    height: 64,
    color: 'blue',
    move: function(){}
});

let sprite = kontra.Sprite({
    x:0,
    y:0,
    width:64,
    height: 64,
    color: 'blue',
    move: function(){}
});

let enemy = kontra.Sprite({
    x:128,
    y:128,
    width:64,
    height: 64,
    color: 'red',
    direction: 'left'
});

let start = kontra.Sprite({
    x:0,
    y:0,
    width:64,
    height: 64,
    color: 'yellow'
});


let end = kontra.Sprite({
    x:320,
    y:320,
    width:64,
    height: 64,
    color: 'green'
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


    if(keyPressed('up')){
    
      //tileEngine.setTileAtLayer('level1', {row: 4, col:4}, 10);
      sprite.y-=64;
      cooldown=0;
      steps.push('up');
      if(enemy.direction=='left'){
        enemy.x-=64;
      }else{
        enemy.x+=64;
      }
      
    }
    if(keyPressed('down')){
      sprite.y+=64;
      cooldown=0;
      steps.push('down');
      if(enemy.direction=='left'){
        enemy.x-=64;
      }else{
        enemy.x+=64;
      }
    }
    if(keyPressed('left')){
      sprite.x-=64;
      cooldown=0;
      steps.push('left');
      if(enemy.direction=='left'){
        enemy.x-=64;
      }else{
        enemy.x+=64;
      }
    }
    if(keyPressed('right')){
      sprite.x+=64;
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
  if(sprite.x==end.x && sprite.y==end.y){
    reverting=1;
    halfway=1;
    //tileEngine.setTileAtLayer('level1', {row: 2, col: 1}, 10);
  }


// reverting back process
  if(cooldown>15 && reverting==1){
    var move = steps.pop();
console.log(move)
      if(move=='up'){
        sprite.y+=64;
      }
      if(move=='left'){
        sprite.x+=64;
      }
      if(move=='right'){
        sprite.x-=64;
      }
      if(move=='down'){
        sprite.y-=64;
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
if(sprite.x==enemy.x && sprite.y==enemy.y){

    alert('You died');
  sprite.x=-100000
  }

  // win
if(sprite.x==start.x && sprite.y==start.y && halfway==1){
  alert('You win');
  currentLevel++;
  sprite.x=-100000
}
  sprite.update();
  enemy.update();
  start.update();
  end.update();
  uiSprite.update();
  tileEngine.update();
  


    },
    render: function() {

tileEngine.render();
start.render(); 
end.render(); 
enemy.render(); 
      sprite.render();  
      uiSprite.render();  
    }
  });
  loop.start();

  });

  





  
