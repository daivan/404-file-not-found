let { getCanvas, getContext, init, initKeys, keyPressed } = kontra;
let {  canvas, context } = init();

var ctx = canvas.getContext("2d");

initKeys();

var uiSprite

  
var ui = {
	index:100,
	x:10,
	y:20,
    score: 0,
    planes: 0,
    nextPlane: 1,
    color: 'brown',
    render: function () {
        // blue water
        
        let message = "Score:"
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 10, 50);
        
    }
}
uiSprite = kontra.Sprite(ui)
   

let sprite = kontra.Sprite({
    x:16,
    y:16,
    width:16,
    height: 16,
    color: 'blue'
});

let enemy = kontra.Sprite({
    x:80,
    y:80,
    width:16,
    height: 16,
    color: 'red',
    direction: 'left'
});

let start = kontra.Sprite({
    x:16,
    y:16,
    width:16,
    height: 16,
    color: 'yellow'
});


let end = kontra.Sprite({
    x:160,
    y:160,
    width:16,
    height: 16,
    color: 'green'
});



  
let reverting=0;
let cooldown=0;
let halfway=0;
let steps=[];
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
      sprite.y-=16;
      cooldown=0;
      steps.push('up');
      if(enemy.direction=='left'){
        enemy.x-=16;
      }else{
        enemy.x+=16;
      }
      
    }
    if(keyPressed('down')){
      sprite.y+=16;
      cooldown=0;
      steps.push('down');
      if(enemy.direction=='left'){
        enemy.x-=16;
      }else{
        enemy.x+=16;
      }
    }
    if(keyPressed('left')){
      sprite.x-=16;
      cooldown=0;
      steps.push('left');
      if(enemy.direction=='left'){
        enemy.x-=16;
      }else{
        enemy.x+=16;
      }
    }
    if(keyPressed('right')){
      sprite.x+=16;
      cooldown=0;
      steps.push('right');
      if(enemy.direction=='left'){
        enemy.x-=16;
      }else{
        enemy.x+=16;
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
	}


// reverting back process
  if(cooldown>15 && reverting==1){
    var move = steps.pop();
console.log(move)
      if(move=='up'){
        sprite.y+=16;
      }
      if(move=='left'){
        sprite.x+=16;
      }
      if(move=='right'){
        sprite.x-=16;
      }
      if(move=='down'){
        sprite.y-=16;
      }


      if(enemy.direction=='left'){
        enemy.x-=16;
      }else{
        enemy.x+=16;
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
	sprite.x=-100000
}
  sprite.update();
  enemy.update();
  start.update();
  end.update();
  uiSprite.update();


    },
    render: function() {
      
start.render(); 
end.render(); 
enemy.render(); 
      sprite.render();  
      uiSprite.render();  

    }
  });
  loop.start();