
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(50,50,50,400,350);
	box1 = new Box(200,50,400,100);
	box2 = new Box(50,200,200,);
	box3 = new Box(50,200);
	ground1 = new Ground(800,20,400,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.dsiplay();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();

  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})};


}

