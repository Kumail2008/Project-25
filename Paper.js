class Paper {
  constructor(x, y, r) {
 

  this.x= x;
  this.y = y;
  this.r =r;

  var options = {
    isStatic : false,
    restitution: 0.3,
     friction: 1,
     density : 3,
    }
  this.body= Bodies.circle(x, y, r/2, options);
  this.image = loadImage("kumail24correction-master/paperimg25.png");
  World.add(world, this.body);
}

display(){
  var pos =this.body.position;
  push();
  translate(pos.x, pos.y);
  imageMode(CENTER);
  stroke("brown");
  strokeWeight(4);
  fill(255);
  image(this.image,pos.x,pos.y,this.r);
  pop();
}
};
