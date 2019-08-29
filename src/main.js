var vendors = ['webkit', 'moz'];
for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
  window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
  window.cancelAnimationFrame =
      window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
}

var canvas = document.getElementById('canvas'),
    cw = canvas.width,
    ch = canvas.height,
    cx = null,
    fps = 30,
    bX = 30,
    bY = 30,
    mX = 10,
    mY = 20,
    interval     =    1000/fps,
    lastTime     =    (new Date()).getTime(),
    currentTime  =    0,
    delta = 0;
    cx = canvas.getContext('2d');



var map=[[1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0]];
var Background = new TileSheet(cx, map);

var player = new Player(cx);

function gameLoop() {
  window.requestAnimationFrame(gameLoop);

  currentTime = (new Date()).getTime();
  delta = (currentTime-lastTime);

  if(delta > interval) {

    Background.render();

    player.render();

    lastTime = currentTime - (delta % interval);
  }
}





// get images
Promise.all([
  loadImage("assets/imgs/groundSimple.png"),
  loadImage("assets/imgs/robot.png"),
])
    .then((images) => {
      // draw images to canvas
      //context.drawImage(images[0], 0, 180, canvas.width, canvas.height);
      //context.drawImage(images[1], 0, 0, canvas.width, 180);

      //window.requestAnimationFrame(gameLoop);

      gameLoop();
    });

// function to retrieve an image
function loadImage(url) {
  return new Promise((fulfill, reject) => {
    let imageObj = new Image();
    imageObj.onload = () => fulfill(imageObj);
    imageObj.src = url;
  });
}