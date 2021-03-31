var box1, box2, box3, box4;
var ball;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);
    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="black";
    ball.velocityX=3;
    ball.velocityY=3;

   
    box1=createSprite(100,580,180,30);
    box1.shapeColor="red";

    box2=createSprite(300,580,180,30);
    box2.shapeColor="green";

    box3=createSprite(500,580,180,30);
    box3.shapeColor="blue";

    box4=createSprite(700,580,180,30);
    boxe4.shapeColor="yellow";

    

}

function draw() {
    background(255)
   
    if(ball.x<0){
      music.stop()
        ball.velocityX=3
    }else if(ball.x>800){
      music.stop()
        ball.velocityX=-3
    }
   
  if(ball.isTouching(box4)){
    music.play()
    ball.shapeColor="yellow";
    ball.bounceOff(box4);
    
  }
  
  else if(ball.isTouching(box3)){
    music.stop()
    ball.shapeColor="blue";
    bounceOff(ball,box3)
   
  }
    
  else if(ball.isTouching(box2)){
    music.stop()
    ball.shapeColor="green";
    bounceOff(ball,box2)
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
  else if(ball.isTouching(box1)){
    music.stop()
    ball.shapeColor="red";
    ball.bounceOff(box1)
  }

  if (ball.y<0){
    music.stop()
    ball.velocityY=3
  }

  
   
    drawSprites()
}