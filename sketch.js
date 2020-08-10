var box1,box2;

function setup() {
  createCanvas(600,600);
 box1 =  createSprite(550, 550, 50, 50);
 box2 = createSprite(50,50,50,50);
 box1.shapeColor = "pink";
 box2.shapeColor = "purple";
 box1.velocityX = -2;
 box1.velocityY = -2;
 box2.velocityX = 2;
 box2.velocityY = 2;
}

function draw() {
  background(255,255,255);
  
  if(box1.x - box2.x < box1.width/2 + box2.width/2
    && box2.x - box1.x < box1.width/2 + box2.width/2
    && box1.y - box2.y < box1.height/2 + box2.height/2
    && box2.y - box1.y < box1.height/2 + box2.height/2 ){
      box1.shapeColor = "blue";
      box2.shapeColor = "blue";
  } 
  else {
    box1.shapeColor = "pink";
    box2.shapeColor = "purple";
  } 
  if(box1.x - box2.x < box1.width/2 + box2.width/2
    && box2.x - box1.x < box1.width/2 + box2.width/2){
      box1.velocityX *= -1;
      box2.velocityX *= -1;
    }
    if( box1.y - box2.y < box1.height/2 + box2.height/2
    && box2.y - box1.y < box1.height/2 + box2.height/2){
      box1.velocityY *= -1;
      box2.velocityY *= -1; 
    }
  drawSprites();
}