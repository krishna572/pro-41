var walkerAni,thunderAni,background;
var walker,thunder;

var drop;

function preload(){
    walkerAni = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");

    thunderAni = loadAnimation("1.png","2.png","3.png","4.png");

    
}

function setup(){
    createCanvas(600,600);
    

    walker = createSprite(300,400);
    walker.addAnimation("walker",walkerAni);
    walker.scale = (0.5);


    drop = new Drop();


    
}

function draw(){
    background(0);
    drop.display();
    
    if (frameCount === 30){
        thunder = createSprite(200,100);
    thunder.addAnimation("thunder",thunderAni);
    thunder.scale = (0.5);
    }


    drawSprites()
}   
