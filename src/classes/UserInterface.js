class UserInterface {

  constructor(kontra) {
    this.kontra = kontra;
    this.hide = false;
    this.sprite = this.kontra.Sprite({
    index:100,
    x:20,
    y:20,
    score: 0,
    planes: 0,
    nextPlane: 1,
    color: 'brown',
      render: function () {
          // blue water
      let message = "Press Space to start the game"    
          
      ctx.font = "20px Arial";
      ctx.fillStyle = "#FFF";  //<======= here
      ctx.fillText(message, 25, 170);
          //ctx.fillText(message, 0, 0)
          
      }
  });
  }
 
  Display(){
    if(!this.hide){
      this.sprite.render();
    }
  }
  gameStarted(){
    this.hide=true;
  }
}