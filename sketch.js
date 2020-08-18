
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1;
var ground1;
var stone1;
var boy, boyp;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var elastic1;

function preload()
{

   boyp = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    tree1 = new Tree(width/2+350, height/2, 600, 800);

	ground1 = new Ground(width/2, height/2+390, 1500, 20);

	stone1 = new Stone(width/2-580, height/2+120, 70, 70);

	//boy = createSprite(width/2-500, height/2+290, 50, 50);
	//boy.addImage("boypng", boyp);
	//boy.scale = 0.15;
	

	mango1 = new Mango(width/2+200, height/2-100, 90);
	mango2 = new Mango(width/2+500, height/2-150, 90);
	mango3 = new Mango(width/2+400, height/2-300, 90);
	mango4 = new Mango(width/2+350, height/2-200, 90);
	mango5 = new Mango(width/2+300, height/2-350, 90);
	mango6 = new Mango(width/2+200, height/2-300, 90);
	mango7 = new Mango(width/2+500, height/2-280, 90);
	mango8 = new Mango(width/2+200, height/2-200, 90);

	//elastic1 = new SlingShot(stone1.body, {x: 235, y: 420});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  image(boyp,200,560,200,300);
  tree1.display();

  ground1.display();

  stone1.display();
  
  //drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  //elastic1.display();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}
function mouseReleased()
{
	elastic1.fly();
}
