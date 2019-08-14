let { getCanvas, getContext, init, initKeys, keyPressed } = kontra;
let { canvas, context } = init();

initKeys();
  
  let midX = canvas.width / 2;
  let midY = canvas.height / 2;
  let fields = [
    kontra.Sprite({
      x: midX - 75,
      y: midY + 20,
      width: 3,
      height: 3,
      color: 'green',
      mass: 900,
      size: 3
    }),
    kontra.Sprite({
      x: midX + 25,
      y: midY + 10,
      width: 3,
      height: 3,
      color: 'red',
      mass: -50,
      size: 3
    })
  ];
  let pool = kontra.Pool({
    create: kontra.Sprite,
    maxSize: 5000,
    fill: true
  });

let sprite = kontra.Sprite({
    x:16,
    y:16,
    width:16,
    height: 16,
    color: 'green'
});

let enemy = kontra.Sprite({
    x:80,
    y:80,
    width:16,
    height: 16,
    color: 'red',
    direction: 'left'
});

  context.fillStyle = 'white';

  // redefine sprite render to not change context fillStyle every time
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

  if(cooldown>15){


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
    }
  cooldown++;
  sprite.update();
  enemy.update();
    },
    render: function() {
      pool.render();
      sprite.render();  
enemy.render(); 
    }
  });
  loop.start();