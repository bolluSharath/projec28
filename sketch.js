
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var boyImage,boy;
var tree;

function preload()
{
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy=createSprite(-500,500,50,50)
	boy.addImage(boyImage)
	boy.scale=0.2

	stone=new Stone(-600,380,30)

	ground=new Ground(300,600,3000,100)
	
	tree=new Tree(400,-600,600,600)
	mango1=new Mango(300,100,30)
	mango2=new Mango(200,150,30)
	mango3=new Mango(150,250,30)
	mango4=new Mango(250,250,30)
	mango5=new Mango(350,200,30)
	mango6=new Mango(400,80,30)
	mango7=new Mango(460,200,30)
	mango8=new Mango(280,180,30)
	mango9=new Mango(530,250,30)
	mango10=new Mango(370,250,30)

	launchObject=new launcher(stone.body,{x:-600,y:380})
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	textSize(25);
	fill("purple")
	text("press Space for a second chance",60,40)
	


	ground.display();
	tree.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display()
	launchObject.display();

	detectollision(stone,mango1)
	detectollision(stone,mango2)
	detectollision(stone,mango3)
	detectollision(stone,mango4)
	detectollision(stone,mango5)
	detectollision(stone,mango6)
	detectollision(stone,mango7)
	detectollision(stone,mango8)
	detectollision(stone,mango9)
	detectollision(stone,mango10)

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launchObject.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:-600,y:380})
		launchObject.attach(stone.body)
	}

}

function detectollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}

}


