const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,20,30,50);
    box2 = new Box(230,100,30,50);
    box3 = new Box(260,10,30,50);
    box4 = new Box(290,50,30,50);
    box5 = new Box(320,90,30,50);
    box6 = new Box(200,100,30,50);
    box7 = new Box(230,100,30,50);
    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(260,250,200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    ground.display();
    ground2.display();
}