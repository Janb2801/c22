class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
   this.Cannonimage=loadImage("assets/canon.png")
   this.Cannonbase=loadImage("assets/cannonBase.png")
  }
  display(){
  push()
 imageMode(CENTER) 
 image(this.Cannonimage,this.x,this.y,this.width,this.height)

  pop()
  image(this.Cannonbase,70,20,200,200)
  }
}
