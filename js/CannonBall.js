class CannonBall{
  constructor(x,y)
{
  var options = {
    isStatic:true
  }
  this.r=30
  this.body=Bodies.circle(x,y,this.r,options)
  this.image=loadImage("assets/cannonball.png")
  World.add(world,this.body)
}
shoot(){
  Matter.Body.setStatic(this.body,false)
  Matter.Body.setVelocity(this.body,{x:30,y:-20})
}
display(){
  var pos=this.body.position
  push()
  imageMode(CENTER)
  image(this.image,pos.x,pos.y,this.r,this.r)
  pop()
}

}