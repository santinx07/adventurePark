class Entity{

    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = 'yellow'
        this.is_sprite = false
        this.sprite = ''

    }
    


    __render(ctx){

        if(this.sprite){
            let image = new Image()


        }
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

    }










    
}