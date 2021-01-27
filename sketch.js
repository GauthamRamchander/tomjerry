var Tom,tomimage1,jerry,jerryimage1,jerryimage3,tomimage3
var garden,gardenimg
function preload() {
    //load the images here
    gardenimg=loadImage("images/garden.png")   
    tomimage1=loadAnimation("images/tomOne.png","images/tomFour.png")
    tomimage3=loadAnimation("images/tomThree.png","images/tomTwo.png")
        jerryimage1=loadAnimation("images/jerryOne.png","images/jerryFour.png")
        jerryimage3=loadAnimation("images/jerryThree.png","images/jerryTwo.png")

}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
garden=createSprite(600,350)
garden.addImage(gardenimg)
garden.scale=1.0
Tom=createSprite(770,600,20,20)
Tom.addAnimation("tomTwo",tomimage3)
Tom.scale=0.1
jerry=createSprite(200,600,20,20)
jerry.addAnimation("jerryTwo",jerryimage3)
jerry.scale=0.1
}

function draw() {
keyPressed()
    background("black");
    //Write condition here to evalute if tom and jerry collide
if(Tom.x-jerry.x<(Tom.width-jerry.width)/2){
    Tom.velocityX=0
    Tom.addAnimation("images/tomFour",tomimage1)
    Tom.changeAnimation("images/tomFour")
    jerry.addAnimation("images/jerryFour",jerryimage1)
    jerry.changeAnimation("images/jerryFour")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
Tom.velocityX=-5
}
}

