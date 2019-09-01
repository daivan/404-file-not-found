var vendors = ['webkit', 'moz'];
for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
        window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
}

let gameState = new GameState();
let level = new Levels(1);


let startImage = new Image();
startImage.src = 'assets/imgs/goal.png';

let goalImage = new Image();
goalImage.src = 'assets/imgs/goal.png';

let start = [0, 0];
let end = [3, 5];

var state = {
    pressedKeys: {
        left: false,
        right: false,
        up: false,
        down: false
    }
}

var keyMap = {
    68: 'right',
    65: 'left',
    87: 'up',
    83: 'down'
}

function keydown(event) {
    var key = keyMap[event.keyCode]
    state.pressedKeys[key] = true
}

function keyup(event) {
    var key = keyMap[event.keyCode]
    state.pressedKeys[key] = false
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false)

var canvas = document.getElementById('canvas'),
    cw = canvas.width,
    ch = canvas.height,
    cx = null,
    fps = 30,
    bX = 30,
    bY = 30,
    mX = 10,
    mY = 20,
    interval = 1000 / fps,
    lastTime = (new Date()).getTime(),
    currentTime = 0,
    delta = 0;
cx = canvas.getContext('2d');


var map = level.maps[0].data;
var Background = new TileSheet(cx, map);

var player = new Player(cx);
var music = new Music();

gameState.initiateLevel(player, start, end, level.getCurrentLevel());

function gameLoop() {
    window.requestAnimationFrame(gameLoop);


    currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime);

    if (delta > interval) {
        cx.clearRect(0, 0, cw, cw);

        if (gameState.backing !== 1) {


            if (state.pressedKeys.left) {
                if (player.move('left')) {
                    music.playMove();
                    gameState.steps.push('left');
                }
            } else if (state.pressedKeys.right) {
                if (player.move('right')) {
                    music.playMove();
                    gameState.steps.push('right');
                }
            } else if (state.pressedKeys.up) {
                if (player.move('up')) {
                    music.playMove();
                    gameState.steps.push('up');
                }
            } else if (state.pressedKeys.down) {
                if (player.move('down')) {
                    music.playMove();
                    gameState.steps.push('down');
                }
            }
        }

        // gameState.backing back process
        if (gameState.backing === 1 && player.isMoving===false) {
            console.log(gameState.steps);
            var move = gameState.steps.pop();
            if (move === undefined) {
                /*
                interface.gameState = 'dead';
                interface.hide = false;
                gameState.dead = true;
                gameState.backing = 0;
                */

            }

            //enemies.map(enemy => enemy.Move());

            if (move == 'up') {
                player.move('down');
                music.playMove();
            }
            if (move == 'left') {
                player.move('right');
                music.playMove();
            }
            if (move == 'right') {
                player.move('left');
                music.playMove();
            }
            if (move == 'down') {
                player.move('up');
                music.playMove();
            }
            //gameState.checkDead(player, enemies);
            //cooldown = 0;
        }

        Background.render();
        cx.drawImage(goalImage, 0, 0, 32, 32, level.getCurrentLevel().endLocation[0] * 64, level.getCurrentLevel().endLocation[1] * 64, 64, 64);
        cx.drawImage(startImage, 0, 0, 32, 32, level.getCurrentLevel().startLocation[0] * 64, level.getCurrentLevel().startLocation[1] * 64, 64, 64);
        player.render();

        gameState.checkHalfway(player);

        var result = gameState.checkStageClear(player, level.getCurrentLevel());
        if(result) {
            level.setNextLevel();
            if (level.currentLevel === 3) {
                gameState.stage = 'end'
            } else {
                gameState.initiateLevel(player, start, end, level.getCurrentLevel());
            }
        }

        lastTime = currentTime - (delta % interval);
    }
}


// get images
Promise.all([
    loadImage("assets/imgs/groundSimple.png"),
    loadImage("assets/imgs/robot2.png"),
    loadImage("assets/imgs/goal.png"),
])
    .then((images) => {
        // draw images to canvas

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