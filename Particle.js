class Particle
{
 constructor(x)
 {
     var options = 
     {
        restitution : 0.2,
        density:0.5,
        friction:0.05
     }
     this.r = 15;
     this.body = Bodies.circle(x,0,this.r,options);
     World.add(world,this.body);

    }

display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    fill (random(0,255));
    ellipseMode(CENTER);
    ellipse(0,0,this.r*2);
    pop ();
}
}