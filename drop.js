class drop
{  
    constructor(){
  // set default properties
  this.xpos = random(0, 600);
  this.ypos = 0;
  this.speed = random(1, 4);
}

display()
{
  ellipseMode(CENTER);
  fill("blue");
  noStroke();
  ellipse(this.xpos, this.ypos, 20, 20);
  this.ypos = this.ypos + this.speed;
}
}