var good;
function preload(){
  good= loadImage("index.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
   createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255); 
   image(good,0,0,displayWidth,displayHeight)
  drawSprites();
  
}