var bgimg
var snowimg

function preload(){
bgimg = loadImage("snow2.jpg");
snowimg = loadImage("snow4.webp");
  
}
function setup() {
  createCanvas(2000,1100);
  
}

function draw() {
  background(bgimg);
  if(frameCount%40===0){
    var snow = createSprite(Math.round(random(20,1800)),-20);
    snow.addImage(snowimg);
    snow.velocityY = 3;
    snow.scale = 0.15;
    snow.lifetime = 400;
    
  } 
  drawSprites();
}