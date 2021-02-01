var cat,mouse,garden;
var catImg,mouseImg,gardenImg;
function preload() {
    //load the images here
    catImg1=loadImage("cat1.png");
    catImg2=loadImage("cat2.png");
    catImg3=loadImage("cat3.png");
    catImg4=loadImage("cat4.png");
    mouseImg1=loadImage("mouse1.png");
    mouseImg2=loadImage("mouse2.png");
    mouseImg3=loadImage("mouse3.png");
    mouseImg4=loadImage("mouse4.png");
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(70,580,20,20);
    cat.addAnimation("catRunning",catImg1);
    mouse = createSprite(30,400,20,20);
    mouse.addAnimation(mouseImg1);
    garden=createSprite(500,400,0,0);
    garden.addAnimation(gardenImg);
}
function draw() {

    background(255);
    
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("catLastImage",catImg2);
        cat.changeAnimation("catLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
     
  }
  if(keyCode === RIGHT_ARROW){
    cat.velocityY=5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    
}
}


