var database;
var form, player, game;
var canvas;
var bacImg;
var gameState = 0;
var playerCount; 

function setup(){
 
  database = firebase.database();
  canvas = createCanvas(400,400);

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x1,y1){
  database.ref('ball/position').set({
    'x': position.x + x1 ,
    'y': position.y + y1
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
