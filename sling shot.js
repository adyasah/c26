class Shoot{
    constructor(a,b){
        var options={
            bodyA:a,
        pointB:b,
            stiffness:0.2,length:10
        }
       this.sling=Matter.Constraint.create(options)
       World.add(wd,this.sling)

    }
    display(){
        line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,
            this.sling.pointB.y)
    }
}