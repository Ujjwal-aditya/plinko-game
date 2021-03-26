class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        var colours = ["red","pink","yellow"];
        var i = 0;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(colours[i]);
        if(i==colours.length-1)
        {
            i= 0
        }
        i=i+1
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};