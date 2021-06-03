class LauncherObject{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 5
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }

    attach(StoneBody){
        this.launch.bodyA = StoneBody;
    }


    display(){
        if(this.launch.bodyA != null ){
            var pointA = this.launch.bodyA.position;
            var pointB = this.launch.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
        
    }

};