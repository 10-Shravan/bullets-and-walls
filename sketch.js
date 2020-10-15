var b1 ,  b2, wall;
var speed , speed2,weight,thickness,wall2;


function setup() {
  
  
  createCanvas(1600,400);
 b1=createSprite(200, 150, 50, 50);
 speed=random(0,150);
 speed2=random(0,150);
 wall=createSprite(1595,90,thickness,150);
 wall2=createSprite(1595,300,thickness,150);
 wall2.shapeColor=("gray")
 wall.shapeColor=("gray")
 weight=random(400,1500);
 thickness=random(0,50);
 b1.velocityX=speed;
 b1.shapeColor=("white");
 b2=createSprite(200,300,50,50);
 b2.velocityX=speed2;
 b2.shapeColor=("white");
}

function draw() {
  background(0);
  if(hascollided(b1,wall)){
    b1.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  if(hascollided(b2,wall2)){
    b2.velocityX=0;
    var damage=0.5*weight*speed2*speed2/(thickness*thickness*thickness);
    if(damage>10){
      wall2.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall2.shapeColor=color(0,255,0);
    }
  }
drawSprites();
 }
 function hascollided(b1,wall){
   b1RightEdge=b1.x+b1.width;
   wallLeftEdge=wall.x;
   if(b1RightEdge>wallLeftEdge){
     return true
   }
   return false

  } 
