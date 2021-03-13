var bananaImage;
var obstacleImage; 
var obstacleGroup; 
var backImage;
var score;
var ground;
var player;
var foodGroup;

function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
  obstacleGroup = createGroup();
  backGround = createSprite(400,400,0,0);
  backGround.addImage(backImage);
  backGround.velocityX = -4;
  backGround.x = backGround.width/2;
  ground = createSprite(375,395,800,10);
  ground.velocityX  = -4;
  ground.x = ground.width/2; 
  ground.shapeColor = "white";
  player = createSprite(50,340,10,10);
  foodGroup = createGroup();
  
  
  player.addAnimation("monkey",player_running);
  player.scale = 0.15;
  
  score = 0;
 
}

function draw() {
  background(255);           
  
  if(backGround.x < 0){
    backGround.x = backGround.width/2
  }
  
  if(keyDown("space")){
    player.velocityY = -5;
  }
  
  player.velocityY = player.velocityY + 0.8;
  player.collide(ground); 
  
  
  
  if(player.isTouching(foodGroup)){
    score = score + 2;
    foodGroup.destroyEach();
  }
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  switch(score){
    case 10 : player.scale = 0.12;
      break;
    case 20 : player.scale = 0.14;
      break;
    case 30 : player.scale = 0.16;
      break;
    case 40 : player.scale = 0.18;
      break;
      default : break;
  }
  
  if(obstacleGroup.isTouching(player)){
    player.scale = 0.2;
  }
  
   
  
  
  banana();
  obstacles();
  drawSprites();
  stroke("black");
  textSize(20);
  fill("White");
  text("Score: "+ score, 300,50)
}

function banana(){
  if(World.frameCount % 150 === 0){
    var banana = createSprite(400,250,10,10)
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    banana.lifetime = 210;
    foodGroup.add(banana);
    banana.velocityX = -2;
    banana.velocityY = 0;  
  }
}

function obstacles(){
  if(World.frameCount % 100 === 0){
    var obstacle = createSprite(400,380,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 170;
    obstacleGroup.add(obstacle);
    obstacle.velocityX = -4; 
    obstacle.velocityY = 0;
  }
}