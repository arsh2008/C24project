
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;
	
    var options = {
    
		isStatic:true ,
		restitution:0.3 ,
		friction:0.5 ,
		density:1.2
		
		}
	ball = 	Matter.Bodies.circle(200,200,50,options);

	

    box1 = new Trash(260,280,100,15);
	box2 = new Trash(203,253,15,70);
	box3 = new Trash(316,253,15,70);

    ground = new Ground(200,300,400,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  box1.display();
  box2.display();
  box3.display();

  ground.display();

  drawSprites();
 
}

function keypressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.Body.position,{x:85,y:-85});
}
}

