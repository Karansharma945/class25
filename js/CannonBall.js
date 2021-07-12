class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);

    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
    this.path = []
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    console.log("in dispa");
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

    //store the path in the array
    if(this.body.velocity.x > 0){
      var position = [this.body.position.x,this.body.position.y];
      this.path.push(position);
    }
    //draw the dots on those postions
    for(var i = 0 ; i < this.path.length; i = i + 1){
      image(this.image,this.path[i][0],this.path[i][1],5,5);
    }

    }
  }

