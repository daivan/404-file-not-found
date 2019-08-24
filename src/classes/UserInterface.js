class UserInterface {

  constructor(kontra) {
    this.kontra = kontra;
    this.state = 'menu';
    this.hide = false;
    this.sprite = this.kontra.Sprite({
    index:100,
    x:20,
    y:20,
    score: 0,
    planes: 0,
    nextPlane: 1,
    color: 'brown',
      render: ()=> {
          // blue water
      let message = this.headerText();
          
      ctx.font = "20px Arial";
      ctx.fillStyle = "#FFF";  //<======= here
      ctx.fillText(message, 25, 170);
          //ctx.fillText(message, 0, 0)
          
      },
      update: (gameState)=> {
        if(gameState.stage=='menu'){
          this.state='menu';
          this.hide=false;
        }else if(gameState.stage=='game'){
          if(gameState.dead){
            this.state='dead';
            this.hide=false;
          }else{
            this.state='';
            this.hide=true;  
          }
        }else if(gameState.stage=='end'){
          this.state='end';
          this.hide=false;
        }
      }
  });
  }
  
  Display(){

    if(!this.hide){
      this.sprite.render();
    }

  }

  headerText()
  {
  
    if(this.state=='menu'){
      return "Press <Space> to start the game";
    }else if(this.state=='dead'){
      return "You Died, <Space> to try again";
    }else if(this.state=='end'){
      return "You did it, great job!";
    }else{
      return ""
    }
  }
}