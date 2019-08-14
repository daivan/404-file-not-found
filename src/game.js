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
		color: 'red',
		direction: 'left'
});



var cooldown=0;
var steps=[];
var loop = kontra.gameLoop({
update: function(){

if(enemy.x==0){
	enemy.direction='right'
}

if(enemy.x==240){
	enemy.direction='left'
}

	if(cooldown>15){


		if(kontra.keys.pressed('up')){
			sprite.y-=16;
			cooldown=0;
			steps.push('up');
			if(enemy.direction=='left'){
				enemy.x-=16;
			}else{
				enemy.x+=16;
			}
			
		}
		if(kontra.keys.pressed('down')){
			sprite.y+=16;
			cooldown=0;
			steps.push('down');
			if(enemy.direction=='left'){
				enemy.x-=16;
			}else{
				enemy.x+=16;
			}
		}
		if(kontra.keys.pressed('left')){
			sprite.x-=16;
			cooldown=0;
			steps.push('left');
			if(enemy.direction=='left'){
				enemy.x-=16;
			}else{
				enemy.x+=16;
			}
		}
		if(kontra.keys.pressed('right')){
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