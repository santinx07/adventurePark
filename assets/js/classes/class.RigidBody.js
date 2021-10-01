
class RigidBody extends Entity{

    constructor(x, y, width, height, affected_by_gravity){
        super(x, y, width, height)

        this.affected_by_gravity = affected_by_gravity
        this.x_speed = 1
        this.y_speed = 1
        this.gravity = 1    
    }



    __update(gravity){
        this.y_speed += gravity
        
    }







}







