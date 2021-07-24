
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;

function preload()
{
	backgroundImg = loadImage("images/Background.png");
}

function setup() {
	createCanvas(1400, 1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    spider = new Spider(150,100);
	player1 = new Player1(1000,200);
	player2 = new Player2(500,700);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

background = createSprite(600,300,500,100);
background.addImage(backgroundImg);
background.scale = 1.9;

  spider.display();
  player1.display();
  player2.display();

  drawSprites();
 
}



