
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pol1=new pol (0,0,0);
	ground1=new ground(500,300,250,20);
	ground3=new ground(600,height,1200,20);
	Engine.run(engine);
	slingshot1= new slingshot(pol1.body,{x:150,y:300});
	
	block1= new block(400,260,50,60);
	block2= new block(450,260,50,60);
	block3= new block(500,260,50,60);
	block4= new block(550,260,50,60);
	block5= new block(600,260,50,60);

	block6= new block(450,200,50,60);
	block7= new block(500,200,50,60);
	block8= new block(550,200,50,60);

	block9= new block(500,160,50,60);

    ground2= new ground(900,270,250,20);

	block10= new block(800,240,50,50);
	block11= new block(850,240,50,50);
	block12= new block(900,240,50,50);
	block13= new block(950,240,50,50);
	block14= new block(1000,240,50,50);

	block15= new block(850,190,50,50);
	block16= new block(900,190,50,50);
	block17= new block(950,190,50,50);

	block18= new block(900,150,50,50);
	

}


function draw() {
  rectMode(CENTER);
  background("cyan");
  



  drawSprites();


 pol1.display();
 ground1.display();
 slingshot1.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 ground2.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
ground3.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pol1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	slingshot1.fly();
}

function keyPressed(){
    if(keyCode === 32){
		slingshot1.attach(pol1.body);
		Matter.Body.setPosition(pol1.body, {x: 150 , y:300});
    }
}