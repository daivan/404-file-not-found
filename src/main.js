let vendors = ['webkit', 'moz'];
for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
        window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
}
let enemies = [];
let textInterface = new TextInterface();
let game = new Game();
let gameState = new GameState();
let level = new Levels(0);
let canvas = document.getElementById('canvas'),
    cw = canvas.width,
    ch = canvas.height,
    fps = 30,
    interval = 1000 / fps,
    lastTime = (new Date()).getTime(),
    currentTime = 0,
    delta = 0;
cx = canvas.getContext('2d');

var Background = new TileSheet(cx);
var player = new Player(cx);
var music = new Music();

let startImage = new Image();
startImage.src = 'assets/imgs/goal.png';

let goalImage = new Image();
goalImage.src = 'assets/imgs/goal.png';

let start = [0, 0];
let end = [3, 5];

var state = {
    pressedKeys: {
        space: false,
        left: false,
        right: false,
        up: false,
        down: false
    }
}

var keyMap = {
    'ArrowRight': 'right',
    'ArrowLeft': 'left',
    'ArrowUp': 'up',
    'ArrowDown': 'down',
    'Space': 'space'
}

function keydown(event) {
    var key = keyMap[event.code];
    state.pressedKeys[key] = true
}

function keyup(event) {
    var key = keyMap[event.code];
    state.pressedKeys[key] = false
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false)





function gameLoop() {
    window.requestAnimationFrame(gameLoop);

    // Press Space in main menu
    if(state.pressedKeys.space && gameState.state==='start_menu'){
        gameState.initiateLevel(player, start, end, level.getCurrentLevel());
        gameState.state='level1';
    }

    currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime);

    if (delta > interval) {

        cx.clearRect(0, 0, cw, ch);

        // Stage
        if(gameState.state==='start_menu'){
            cx.clearRect(0, 0, cw, cw);
            textInterface.renderStart();
        }else if(gameState.state==='end'){
            cx.clearRect(0, 0, cw, cw);
            textInterface.renderEnd();
        }else{
            game.update();

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
    .then(() => {
        // draw images to canvas

        gameLoop();

    });


// function to retrieve an image
function loadImage(url) {
    return new Promise((fulfill) => {
        let imageObj = new Image();
        imageObj.onload = () => fulfill(imageObj);
        imageObj.src = url;
    });
}