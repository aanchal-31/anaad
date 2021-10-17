var PLAY = 1;
var END = 0;
var gameState = PLAY;
var player, playerimg;
var player2, player2img;
var pic, picimg;
var pic2, pic2img;
var pic3, pic3img;
var end, endimg;
var ob1, ob1img;
var ob2, ob2img;
var ob3, ob3img;
var aimg;
var bimg;
var cimg;
var dimg;
var eimg;
var fimg;
var obstacleGroup;
var cactusGroup;
var gameOver;

function preload(){
  playerimg = loadAnimation("trex1.png","trex3.png","trex4.png");
  player2img = loadImage("p4.png");
  picimg = loadImage("bg1.jpg");
  pic2img = loadImage("bg2.jpg");
  pic3img = loadImage("bg3.jpg");
  endimg = loadImage("end image.jpg");
  ob1img = loadImage("ob1.jpg");
  ob2img = loadImage("ob2.jpg");
  ob3img = loadImage("ob3.jpg");
  aimg = loadImage("obstacle1.png");
  bimg = loadImage("obstacle2.png");
  cimg = loadImage("obstacle3.png");
  dimg = loadImage("obstacle4.png");
  eimg = loadImage("obstacle5.png");
  fimg = loadImage("obstacle6.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}


function setup() {
  createCanvas(700,500);
  pic = createSprite(300,250,500,800);
  pic.addImage(picimg);
  pic.scale = 2
  pic.velocityX = -4;
  
  player = createSprite(100,350,50,50);
  player.addAnimation("running", playerimg);
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  
  cactusGroup = new Group();
  obstacleGroup = new Group();
  
  
}

function draw() {

 background("white");
 
  
  if(keyWentDown("UP_ARROW")){
     player.velocityY = -1;
     }
  
   if(keyWentUp("UP_ARROW")){
     player.velocityY = 0;
     }
  
   if(keyWentDown("DOWN_ARROW")){
     player.velocityY = 1;
     }
  
   if(keyWentUp("DOWN_ARROW")){
     player.velocityY = 0;
     }
  
   //console.log(pic.y);
  if(pic.y > 506){
    pic.y = pic.height/2;
  }
  
  
  
  
  if (gameState===PLAY){
   
    if(keyDown("UP_ARROW") && player.y >= 159) {
      player.velocityY = -12;
    }
    
  if(keyDown("DOWN_ARROW") && player.y >= 159) {
      player.velocityY = -12;
    }
  
    if (pic.y < 0){
      pic.y = pic.height/2;
    }
  
    spawnObstacles();
  
    if(obstacleGroup.isTouching(player)){
        gameState = END;
    }
  }
  else if (gameState === END) {
    pic2 = createSprite(300,250,50,50);
    pic2.addImage(pic2img);
    player2 = createSprite(100,350,50,50);
    player2.addImage(player2img);
    player2.scale = 0.5;
     
    spawnCactus();
    
    
  }
  

  drawSprites();
}


function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,350,50,50);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand){
        case 1:obstacle.addImage(ob1img);
        break;
        case 2:obstacle.addImage(ob2img);
        break;
        case 3:obstacle.addImage(ob3img);
        break;
        default:
        break;
    }
   
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}


function spawnCactus(){
  if(World.frameCount % 60 === 0) {
    var cactus = createSprite(600,350,50,50);
    cactus.velocityX = -6;

    var rand1 = Math.round(random(1,6));
    switch(rand1){
    case 1: cactus.addImage(aimg);
           break;
    case 2: cactus.addImage(bimg);
          break;
    case 3: cactus.addImage(cimg);
          break;
    case 4: cactus.addImage(dimg);
          break;
    case 5: cactus.addImage(eimg);
          break;
    case 6: cactus.addImage(fimg);
          break;
    default: break;
          
        
      
    }
    
    cactus.scale = 0.5;
    cactus.lifetime = 100;
    cactusGroup.add(cactus);
    
 }
  
}


