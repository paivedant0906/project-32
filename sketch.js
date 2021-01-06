const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


var score=0;

var stand1,stand2;
var polygon;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var pi;
var backg;

function preload(){
   pi=loadImage("polygon.png") 
   gettime();
}
function setup(){
    createCanvas(1200,800)
    engine = Engine.create();
    world = engine.world;
    stand1=new Ground(600,700,250,10)
    stand2=new Ground(1000,500,180,10)

    //bottom stand1
    
    box1=new Box(540,675,30,40)
    box2=new Box(570,675,30,40)
    box3=new Box(600,675,30,40)
    box4=new Box(630,675,30,40)
    box5=new Box(660,675,30,40)
    box6=new Box(690,675,30,40)
    box7=new Box(510,675,30,40)

    // middle stand1
    
    box8=new Box(540,634,30,40)
    box9=new Box(570,634,30,40)
    box10=new Box(600,634,30,40)
    box11=new Box(630,634,30,40)
    box12=new Box(660,634,30,40)

    box13=new Box(570,593,30,40)
    box14=new Box(600,593,30,40)
    box15=new Box(630,593,30,40)

    // top stand1
    box16=new Box(600,552,30,40)


    // stand2 bottom

    box17=new Box(940,475,30,40)
    box18=new Box(970,475,30,40)
    box19=new Box(1000,475,30,40)
    box20=new Box(1030,475,30,40)
    box21=new Box(1060,475,30,40)

    // stand2 middle

    box22=new Box(970,434,30,40)
    box23=new Box(1000,434,30,40)
    box24=new Box(1030,434,30,40)
    
    // stand2 top
    box25=new Box(1000,393,30,40)

    // hexagon 
    polygon = Bodies.circle(50,500,20);
    World.add(world,polygon)
    sling = new Slingshot(polygon,{x:110,y:500})
}

function draw(){
if(backg)
    background(backg)
    fill("black");
    textSize(30)
    text("SCORE :" + score,1000,50);
    Engine.update(engine);
 
 stand1.display();
 stand2.display();
 fill("red")
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()

 box1.score()
 box2.score()
 box3.score()
 box4.score()
 box5.score()
 box6.score()
 box7.score()

 box8.score()
 box9.score()
 box10.score()
 box11.score()
 box12.score()
 box13.score()
 box14.score()
 box15.score()
 box16.score()
 box18.score()
 box19.score()
 box20.score()
 box22.score()
 box23.score()
 box24.score()
 box25.score();

 fill("yellow")
 box8.display()
 box9.display()
 box10.display()
box11.display()
box12.display()
fill("blue")
box13.display()
box14.display();
box15.display();
fill("green")
box16.display();

fill("white")
box17.display();
box18.display()
box19.display()
box20.display()
box21.display()

fill("purple")
box22.display()
box23.display()
box24.display()

fill("orange")
box25.display()


sling.display();

imageMode(CENTER)
image(pi,polygon.position.x,polygon.position.y,40,40)
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    sling.attach(polygon);
}


async function gettime(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)
    if(hour>06 && hour<18){
        backg=loadImage("bg.png")

    }
    else{
        backg=loadImage("bg2.jpg");
       
    }
}