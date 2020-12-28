const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var maxDrops = 100;
var drops = [];
var umbrella;
var man_walking,man;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
  // loading animation for man
  man_walking = loadAnimation("WalkingMan/walking_1.png","WalkingMan/walking_2.png","WalkingMan/walking_3.png",
  "WalkingMan/walking_4.png","WalkingMan/walking_5.png","WalkingMan/walking_6.png","WalkingMan/walking_7.png","WalkingMan/walking_8.png");

  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png");



    
}

function setup(){
   canvas = createCanvas(700,600);

   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);

  //  make man
  man = createSprite(width/2,400,30,30);
  man.addAnimation("walking",man_walking);
  man.scale = 0.6;

 

//  loop to make rain
   for(var i=0 ; i<maxDrops ; i++){
    drops.push(new drop(random(0,700),random(0,600),10));
  }

   //  make umbrella
   umbrella = new Umb(350,300,200);
    


}

function draw(){
    background(0,1,40);
    getThunder();
   
    
// loop to display rain
    for(var i = 0; i<maxDrops; i++){
      drops[i].display();
    }
   
    umbrella.display();
   drawSprites();
    
}   

function getThunder(){
  if(frameCount%12===0){
    var thunder = createSprite(Math.round(random(0,width)),50,30,30);
  //  adding IMages

    var rand = Math.round(random(1,4));

    switch(rand){
      case 1: thunder.addImage(thunder1);
      break;
      case 2: thunder.addImage(thunder2);
      break;
      case 3: thunder.addImage(thunder3);
      break;
      case 4: thunder.addImage(thunder4);
      break;
      default: break;
    }
      thunder.scale = 0.4;

    thunder.lifetime = 10;
  }
}
