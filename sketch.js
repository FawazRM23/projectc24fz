const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberBall;
var stone1;
var iron1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubberBall = new Rubber(20,30,40);
    stone1 = new Stone(20,20,70,70); 
    iron1 = new Iron(20,20,20,20);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubberBall.display();
    plane.display();
    hammer.display();
    stone1.display();
    iron1.display();
    

    
 
}