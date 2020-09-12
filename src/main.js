let vendors = ['webkit', 'moz'];
for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
        window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
}

let requests = [];
let goals = [];

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

let Background = new TileSheet(cx);
let textInterface = new TextInterface();
let music = new Music();


let state = {
    pressedKeys: {
        space: false,
        left: false,
        right: false,
        up: false,
        down: false
    }
};

let keyMap = {
    'Enter': 'we tryin',
    'ArrowRight': 'right',
    'ArrowLeft': 'left',
    'ArrowUp': 'up',
    'ArrowDown': 'down',
    'Space': 'space'
};

function keydown(event) {
    let key = keyMap[event.code];
    state.pressedKeys[key] = true;
}

function keyup(event) {
    let key = keyMap[event.code];
    state.pressedKeys[key] = false
}

function onClick(event) {
    game.makeMove(event);
}

window.addEventListener("keydown", keydown, false);
window.addEventListener("keyup", keyup, false);

// mouse click
window.addEventListener("click", onClick, false);


function searchForArray(haystack, needle){
    var i, j, current;
    for(i = 0; i < haystack.length; ++i){
        if(needle.length === haystack[i].length){
            current = haystack[i];
            for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if(j === needle.length)
                return i;
        }
    }
    return -1;
}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);

    // Press Space in main menu
    if(state.pressedKeys.space && gameState.state==='start_menu'){
        gameState.initiateLevel(level.getCurrentLevel());
        gameState.state='inGame';
    }

    // Press Space if dead
    if(state.pressedKeys.space && gameState.state==='dead'){
        gameState.initiateLevel(level.getCurrentLevel());
        gameState.state='inGame';
    }

    currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime);

    if (delta > interval) {

        cx.clearRect(0, 0, cw, ch);

        // Stage
        if(gameState.state==='start_menu'){
            textInterface.renderStart();
        }else if(gameState.state==='end'){
            textInterface.renderEnd();
        }else if(gameState.state==='dead'){
            game.update();
            textInterface.renderDead();
        }else{
            game.update();

        }

        lastTime = currentTime - (delta % interval);
    }
}


// get images
Promise.all([
    loadImage("assets/images/file.png"),
    loadImage("assets/images/request.png"),
    loadImage("assets/images/wires.png"),
    loadImage("assets/images/collection.png"),
    loadImage("assets/images/game_background.png"),
    loadImage("assets/images/intro_background.png"),
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
