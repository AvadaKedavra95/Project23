var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg
var COMING=1
var PLAY=2
var GOING=3
var STATE=COMING
var i;
var press,pressImg;
var box1,box2,box3;
function preload()
{
	helicopterIMG=loadAnimation("helicopter1.png","helicopter2.png");
	packageIMG=loadImage("package.png");
	bg=loadImage("bg.jpg");
	pressImg=loadImage("press.png");
}

function setup() {
	createCanvas(1000, 550);
	rectMode(CENTER);
	i=createSprite(300,height/2,3,height);
	i.visible=false;

	helicopterSprite=createSprite(1100, 100, 10,10);
	helicopterSprite.addAnimation("helicopter",helicopterIMG)
	helicopterSprite.scale=0.6
	

	packageSprite=createSprite(500, helicopterSprite.y, 50,50);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.4
    packageSprite.visible=false;
	helicopterSprite.depth=packageSprite.depth;
	helicopterSprite.depth+=1;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    groundSprite.visible=false;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 84 ,84, {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	


	Engine.run(engine);
  
	press=createSprite(500,260,10,10);
	press.addImage("press",pressImg);
	press.visible=false;

	box1=new Box(500,500,200,20);
	box2=new Box(410,415,20,150);
	box3=new Box(590,415,20,150);
}


function draw() {
	background(bg)
  rectMode(CENTER);
  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(STATE===COMING){
	  helicopterSprite.velocityX=-7;
	 if(helicopterSprite.isTouching(i)){
		 STATE=PLAY;
	 }
  }

  if(STATE===PLAY){
  press.visible=true;
  helicopterSprite.velocityX=0;
  if (keyCode === DOWN_ARROW||keyDown("space")) {
	packageSprite.visible=true;
	Matter.Body.setStatic(packageBody,false);
    STATE=GOING
 }

  
  }

  if(STATE===GOING){
	  press.visible=false;
	  helicopterSprite.velocityX=-7;
	  if(helicopterSprite.x<0){
		  helicopterSprite.destroy();
	  }
  }

  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  
}




