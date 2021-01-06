var canvas;
var box;
var surface1 , surface2 , surface3 , surface4;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edges = createEdgeSprites();
    
    box = createSprite(500,100,30,30);
    box.shapeColor="white";
    box.velocityY = 3;
    box.velocityX = 3;
    
    surface1 = createSprite(80,590,185,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(290,590,185,20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(500,590,185,20);
    surface3.shapeColor = "purple";
    
    surface4 = createSprite(710,590,185,20);
    surface4.shapeColor = "green";

}


function draw() {
    background(rgb(169,169,169));
    
    box.bounceOff(edges);

    if(box.isTouching(surface1))
    {
     box.shapeColor = "blue"; 
     box.bounceOff(surface1)
     music.play();
    }

    if(box.isTouching(surface2))
    {
     box.shapeColor = "orange";
     box.velocityX = 0; 
     box.velocityY = 0;
     music.stop();    
    }

    if(box.isTouching(surface3))
    {
     box.shapeColor = "purple";
     box.bounceOff(surface3)
    }

    if(box.isTouching(surface4))
    {
     box.shapeColor = "green";
     box.bounceOff(surface4)   
    }
   
   

  drawSprites();
}

