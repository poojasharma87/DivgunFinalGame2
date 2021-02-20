class hand {
    constructor(x,y){
        this.image=loadImage("hand.PNG");
this.body=Bodies.rectangle(x,y,50,50);
World.add(world,this.body);

    }
  display(){
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

  }
}
