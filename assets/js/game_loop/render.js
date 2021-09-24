
function render(ctx){
    //Save current context
    ctx.save()
    
    //Clear context
    ctx.clearRect(0,0,canvas.width, canvas.height)  
    
    //Render Entities

    //Restore saved context
    ctx.restore()
}