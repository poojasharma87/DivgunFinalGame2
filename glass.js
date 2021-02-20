class glass
{
  constructor(){
  // set default properties
  this.xpos = 400;
  this.ypos = 350;
 // this.speed = 2;
  this.image = loadImage("glass.png");
 // this.image1 = loadImage("FG.png");
  
  
}

display()
{
  if(this.image!=null){
  
  imageMode(CENTER);
  
 if(keyCode === RIGHT_ARROW)
  {
    this.xpos=this.xpos+5;
    image(this.image,this.xpos+1,this.ypos,70,70);
  }
  else if(keyCode === LEFT_ARROW)
  {
    this.xpos=this.xpos-5;
    image(this.image,this.xpos-1,this.ypos,70,70);    
  }
  else {
    image(this.image,this.xpos,this.ypos,70,70);
  }
    if(this.xpos > 800)
  {
    this.xpos = 0;
  }
  if(this.xpos < 0)
  {
    this.xpos = width;
  }
  }
  
}
}