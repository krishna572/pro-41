class Drop{
    constructor(x,y){
        var options = {
            
        }
      this.image = loadImage("drop.png");
    }
  
    display() {
        this.x = random(0,400);
        this.y = random(0,100);
      }
  }