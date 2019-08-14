kontra.init();

var sprite = kontra.sprite({
		x:16,
		y:16,
		width:16,
		height: 16,
		color: 'green'
});

var enemy = kontra.sprite({
		x:80,
		y:80,
		width:16,
		height: 16,
		color: 'red'
});

var cooldown=0;
var steps=[];
var loop = kontra.gameLoop({
update: function(){

	if(cooldown>15){


		if(kontra.keys.pressed('up')){
			sprite.y-=16;
			cooldown=0;
			steps.push('up');
		}
		if(kontra.keys.pressed('down')){
			sprite.y+=16;
			cooldown=0;
			steps.push('down');
		}
		if(kontra.keys.pressed('left')){
			sprite.x-=16;
			cooldown=0;
			steps.push('left');
		}
		if(kontra.keys.pressed('right')){
			sprite.x+=16;
			cooldown=0;
			steps.push('right');
		}

	}
	if(kontra.keys.pressed('space')){
			console.log(steps);
		}
	cooldown++;
	sprite.update();
	enemy.update();

},
render: function(){
sprite.render();	
enemy.render();	
}
});

loop.start();