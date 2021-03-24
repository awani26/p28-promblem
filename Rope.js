class Rope{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
      }
       display(){
           var pointA = this.rope.bodyA.postionS;
           var pointB = this.rope.bodyB.postion;
           strokeWeight(4)
          // line(pointA.x,pointA.y,pointB.x,pointB.y)
          //line(pointA.x, pointA.y, pointB.x, pointB.y)
       }
    }