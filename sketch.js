const Engine = Matter.Engine; //all the laws of Physics
const World = Matter.World; //applies laws of physics on the bodies in the world
const Bodies = Matter.Bodies; //individual properties

var engine,world;
var box,ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world  = engine.world;
var box_options = {
                    restitution:1
                  }
  box = Bodies.rectangle(200,100,50,50,box_options);
  World.add(world,box);

  var ground_options = {isStatic:true}
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);
  console.log(ground);

  var ball_options = {
                      restitution:100,density:10000
                    
                     }
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background(220,255,255);  

  Engine.update(engine);

  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50);

  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);


  
}