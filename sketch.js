
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(700,320,70,70);
    bob2 = new Bob(920,320,70,70);
    bob3 = new Bob(810, 350,70,70);
    bob4 = new Bob(810,260,300,76);
    bob5 = new Bob(700,240,70,70);
    roof = new Roof(920,240,70,70);
	rope = new Rope(500,500,100,100);
	//rope1 = new Rope(bob1.body,roof.body,-bobDiamter*2,0);
	//rope2 = new Rope(bob1.body,roof.body,-bobDiamter*2,0);
//	rope3 = new Rope(bob1.body,roof.body,-bobDiamter*2,0);
	//rope4 = new Rope(bob1.body,roof.body,-bobDiamter*2,0);
	//rope5 = new Rope(bob1.body,roof.body,-bobDiamter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope.display();

  drawSprites();
 
}



