const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for(i=0;i<width;i=i+80)
  {
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight));
  }

  
  //create 1st row of plinko objects
  for (var j = 0; j <=width; j=j+75) 
  { 
    for(var i =100;i<=400;i=i+50)    
    {
      plinkos.push(new Plinko(j,i));
    }
  }  

}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if(frameCount%60==0)
    {
      particles.push(new Particle(random(50,width-50)));
    }

  //display the plinkos 
  for (var p = 0; p < plinkos.length; p++) 
  {
     plinkos[p].display();
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the particles
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }
  fill ("");
  text(mouseX+","+mouseY,mouseX,mouseY);

  //display the paricles 

}
function spawnParticle()
{
  if(frameCount%60==0)
 {
    particles.push(new Particle(random(50,width-50)));
 }
}

