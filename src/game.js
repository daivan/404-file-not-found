let { getCanvas, getContext, init, initKeys, keyPressed } = kontra;
let { canvas, context } = init();

initKeys();
  


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
  if(keyPressed('space')){
      console.log(steps);
      reverting=1;

    }

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
  	console.log('You died');
  }
  sprite.update();
  enemy.update();
  start.update();
  end.update();
    },
    render: function() {
      
start.render(); 
end.render(); 
enemy.render(); 
      sprite.render();  
    }
  });
  loop.start();