var canvas;
var block1,block2,block3,block4;
var movingBox, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(0,0,255);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(255,128,0);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(153,0,76);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(0,100,0);

    movingBox = createSprite(random(20,750),100, 40,40);
    movingBox.shapeColor = rgb(255,255,255);
    movingBox.velocityX = 4;
    movingBox.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    movingBox.bounceOff(edges);

    if(block1.isTouching(movingBox) && movingBox.bounceOff(block1)){
        movingBox.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(movingBox)){
        movingBox.shapeColor = rgb(255,128,0);
        movingBox.velocityX = 0;
        movingBox.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(movingBox) && movingBox.bounceOff(block3)){
        movingBox.shapeColor = rgb(153,0,76);
    }

    if(block4.isTouching(movingBox) && movingBox.bounceOff(block4)){
        movingBox.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
