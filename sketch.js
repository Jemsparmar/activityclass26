const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5,box6;
var ground1;
function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,50,50);   
    box2=new Box(230,50,70,140); 
    box3=new Box(330,200,50,50);   
    box4=new Box(360,50,70,140); 
    box5=new Box(430,200,50,50);   
    box6=new Box(460,50,70,140);
    ground1=new Ground(350,690,800,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground1.display();
}

