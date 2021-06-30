var edges;
var trex ,trex_running;
var ground;
var groundimg;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg = loadImage("ground1.png");
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
 trex.addAnimation("Running",trex_running);
 edges = createEdgeSprites();
 trex.scale = 0.5;
 ground = createSprite(200,200,400,20);
 ground.addImage("ground",groundimg);
 ground.x = ground.width/2;
}

function draw(){
  //set background color to white
  background("white")
  //to make trex jump
  if(keyDown("space")){
    trex.velocityY = -10;
    
  }
  console.log(trex.y);
  //to add gravity
  trex.velocityY = trex.velocityY+0.5;
  //to make collide with bottom edge
  trex.collide(ground);
  ground.velocityX = -4;
  if(ground.x <0){
    ground.x = ground.width/2;
  }

  

  
  drawSprites();

}
