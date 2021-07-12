const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;

var arr1 = [1,2,3,4];

arr1.push(5)
arr1.pop();
var arr2 = [1,"karan",false];

var arr3 = [[1,2],[3,4],[4,5]];

//array for storing all the cannon bals
balls = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  //cannonBall = new CannonBall(cannon.x, cannon.y);
  console.log(arr1);
  console.log(arr1[0]);
  console.log(arr2);
  console.log(arr2[1])
  console.log(arr3);
  console.log(arr3[1][1]);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  for(var i = 0 ;i < balls.length;i = i + 1){
    console.log("ddisp")
    showCannonBalls(balls[i],i);
  }
  //cannonBall.display()
 
}


function showCannonBalls(ball,index)
{
   ball.display();
   if(ball.body.position.x >= width || ball.body.position.y >=height -50){
     //remove the current ball from the world
     Matter.World.remove(world,ball.body);
     //remove the ball from array as well
     balls.splice(index,1);
   }

}



function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);
    console.log(balls.length);
    balls[balls.length-1].shoot();
  }
}
