function renderLevelSelector(){
    //Clear Canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    //Background
    //ground
    ctx.fillStyle = "#ab8035"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    //grass
    ctx.fillStyle = "#3ede35"
    ctx.fillRect(0,0,canvas.width,canvas.height/24*21)
    //sky
    ctx.fillStyle = "#74f2ec"
    ctx.fillRect(0,0,canvas.width, canvas.height/6*5)
    ctx.fillStyle = "#58ede6"
    ctx.fillRect(0,0,canvas.width, canvas.height/6*4)
    ctx.fillStyle = "#3cded6"
    ctx.fillRect(0,0,canvas.width, canvas.height/6*3)
    ctx.fillStyle = "#27cfc6"
    ctx.fillRect(0,0,canvas.width, canvas.height/6*2)
    ctx.fillStyle = "#16bab1"
    ctx.fillRect(0,0,canvas.width, canvas.height/6)
    //Buttons
    //button fill rectangle
    ctx.fillStyle = "gold"
    ctx.fillRect(canvas.width/3-45, canvas.height/4, 90, 90) 
    ctx.fillRect(canvas.width/3*2-45, canvas.height/4, 90, 90) 
    ctx.fillRect(canvas.width/3-45, canvas.height/2, 90, 90) 
    ctx.fillRect(canvas.width/3*2-45, canvas.height/2, 90, 90) 
    //button stroke rectangle
    ctx.strokeStyle = "goldenrod"
    ctx.strokeRect(canvas.width/3-45, canvas.height/4, 90, 90) 
    ctx.strokeRect(canvas.width/3*2-45, canvas.height/4, 90, 90) 
    ctx.strokeRect(canvas.width/3-45, canvas.height/2, 90, 90) 
    ctx.strokeRect(canvas.width/3*2-45, canvas.height/2, 90, 90) 
    //button fill text
    ctx.fillStyle = "goldenrod"
    ctx.font = "25px Copperplate"
    ctx.textBaseline = "middle"
    ctx.fillText("Tutorial", canvas.width/3, canvas.height/4+45, 75)
    ctx.fillText("[map 2]", canvas.width/3*2, canvas.height/4+45, 75)
    ctx.fillText("[map 3]", canvas.width/3, canvas.height/2+45, 75)
    ctx.fillText("[map 4]", canvas.width/3*2, canvas.height/2+45, 75) 
    //Set current location
    current_location = "level selector"
}