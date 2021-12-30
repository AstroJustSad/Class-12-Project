var Player, PlayerAnimation;
var Road, RoadAnimation;
var RoadRight, RoadLeft;
function preload(){
  //pre-load images
  PlayerAnimation = loadAnimation('Runner-1.png','Runner-2.png');
  RoadAnimation = loadImage('path.png');
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  // Creating a road
  Road = createSprite(200,200,400,400);
  Road.addImage('RoadImg', RoadAnimation);
  Road.velocityY = 9; 
  Road.scale = 1.2;

  // Creating a player
  Player = createSprite(200, 350, 20, 20);
  Player.addAnimation('PlayerAnim',PlayerAnimation);
  Player.scale = 0.06;

  // Creating a inv. boundary
  RoadRight = createSprite(410,0,100,800);
  RoadRight.visible = false;

  RoadLeft = createSprite(0,0,100,800);
  RoadLeft.visible = false;


}

function draw() {
  background(0);
  drawSprites();

  // Creating a reset point for background
  if (Road.y > 400){
    Road.y = height/400;
    console.log("Reset")
  }

  // Creating Player Movement
  Player.x = World.mouseX;

  Player.bounce(RoadLeft)
  Player.bounce(RoadRight)

}
