var trash, trash2, trash3;
var paperBall;

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
	//trash = new Dustbin.js(600,650,20,100);
	//trash2 = new Dustbin.js(650,)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
       Matter.Body.applyForce(paper.body,paper.body.position,{x:85.,y:-85});
	}
}

