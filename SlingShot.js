class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.slingImage1 = loadImage("./sprites/sling1.png")
        this.slingImage2 = loadImage("./sprites/sling2.png")
        this.slingImage3 = loadImage("./sprites/sling3.png")
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly() {
        this.chain.bodyA = null
    }

    reattached(){
        this.chain.bodyA=bird.body;
    }

    display() {
        image(this.slingImage1, 200, 20)
        image(this.slingImage2, 170, 20)

        if (this.chain.bodyA !== null) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB

            
            stroke(48, 22, 8)
            if (pointA.x < 220) {
                strokeWeight(4);
                line(pointA.x - 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 30, pointB.y);
                image(this.slingImage3, pointA.x - 25, pointA.y - 15, 15, 30)
            }
            else {
                strokeWeight(10);
                line(pointA.x + 25, pointA.y + 35, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y + 35, pointB.x + 30, pointB.y);
                image(this.slingImage3, pointA.x + 25, pointA.y + 15, 15, 30)

            }

        }
    }

}