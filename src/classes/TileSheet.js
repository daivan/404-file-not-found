class TileSheet
{

	constructor(context)
	{
		var img_background = new Image();
		img_background.src = 'assets/imgs/groundSimple.png';
		this.context=context;
		this.image=img_background;
		this.map=[];
	}

	setMap(map)
	{
		this.map=map;
	}

	render()
	{
		var row=0;
		if(this.map.length>0){
			this.map.map((x)=>{
				var column=0;
				x.map((y)=>{
					var croppedImage=this.calculate(y);
					if(y!==0){
						this.context.drawImage(this.image, croppedImage[0], croppedImage[1], 32, 32, column*64, row*64, 64, 64);
					}
					column++;
				});
				row++;
			});
		}
	}


	calculate(number)
	{
		if(number===1){
			return [0,0]
		}else if(number===2){
			return [32,0]
		}else if(number===3){
			return [64,0]
		}else if(number===4){
			return [0,32]
		}else if(number===5){
			return [32,32]
		}else if(number===6){
			return [64,32]
		}else if(number===7){
			return [0,64]
		}else if(number===8){
			return [32,64]
		}else if(number===9){
			return [64,64]
		}
	}
}
