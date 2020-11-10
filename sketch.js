var head,body,neck;



function setup() {
  createCanvas(800,400);
  head=createSprite(200, 180, 50, 50);
  body = createSprite(200, 300, 50, 100);
  neck = createSprite(200, 230, 5, 60);
}

function draw() {
  background(255,255,255);

body.x=mouseX;
head.x=mouseX;
neck.x=mouseX;

if(mouseIsPressed){
  head.y=210;
}
else{
  head.y=180;  
}

  drawSprites();
}