
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500)
  
  score = 0;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running) 
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,100000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
  ground.shapeColor = "orange";
  console.log(ground.x);

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}




function draw() {
  background("green")
  text("Score: "+ score, 500,50);
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  if(keyDown("space")&& monkey. y >= 310){
    monkey.velocityY = -15;
     }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
   ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
  
  spawnBanana();
  spawnObstacles();

  drawSprites();
}

function spawnBanana(){
  if(frameCount%80===0){
    
    banana = createSprite(600,165,10,40)
    banana.y = Math.round(200,200);
    banana.addImage(bananaImage)
    banana.velocityX = -8;
    banana.scale = 0.1;
    banana.Lifetime = 100;
    bananaGroup.add(banana);
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth+1
  }
}
function spawnObstacles()  {
  if(frameCount%80===0){
  obstacle = createSprite(600,330,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -7;
  obstacle.scale = 0.15;
  obstacle.Lifetime = 100;
  obstacleGroup.add(obstacle);  
  
  }
}






