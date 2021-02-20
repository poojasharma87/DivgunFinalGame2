class tap {
    constructor(x,y,width,height){
      var options={
isStatic:true,
      }
        this.image=loadImage("tap.jpg");
this.body=Bodies.rectangle(x,y,50,50,options);
World.add(world,this.body);

    }
  display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,50,50);

  }
}
