var movingrect, fixedrect;
function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(200, 200, 30, 80);
movingrect = createSprite(200,200,80,30);
movingrect.shapeColor = "red";
fixedrect.shapeColor = "red";
fixedrect.debug = true;
movingrect.debug = true;
}

function draw() {
  background(0,0,0);  
movingrect.x = mouseX;
movingrect.y = mouseY;

if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
  fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
  movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 && 
  fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2   
  ) {
  
movingrect.shapeColor = "blue";
fixedrect.shapeColor = "blue";

} else {
 
  movingrect.shapeColor = "red";
fixedrect.shapeColor = "red";

}

  drawSprites();
}