var balloon, background;
var database;
var position;
function preload() {
  backgroundImg = loadImage("Hot Air Ballon-01.png")
  balloonImage = loadAnimation("Hot Air Ballon-02.png", "Hot Air Ballon-03.png", "Hot Air Ballon-04.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
    createCanvas(500,500);
    var location = database.ref("balloon/position");
    location.on("value",readPosition);
balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;


}

function draw(){

    background(backgroundImg);
  
        if(keyDown(LEFT_ARROW)){
            balloon.x = balloon.x - 10;
        }
        else if(keyDown(RIGHT_ARROW)){
            balloon.x = balloon.x + 10;
        }
        else if(keyDown(UP_ARROW)){
            balloon.y = balloon.y - 10;
        }
        else if(keyDown(DOWN_ARROW)){
             balloon.y = balloon.y + 10;
        }
        drawSprites();
    }
    function writePosition(x,y){
      database.ref("balloon/position").set({
          x:balloon.x+x,
          y:balloon.y+y
      })
     
  }
  
  function readPosition(data){
      position = data.val();
      balloon.x = position.x;
      balloon.y = position.y;
  }

    


