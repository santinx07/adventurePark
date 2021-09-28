
function renderColorPicker(){
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
    ctx.fillStyle = "#e5e5e5"
    ctx.fillRect(canvas.width/5-25, canvas.height/4, 50, 50)
    ctx.fillStyle = "#dae167"
    ctx.fillRect(canvas.width/5*2-25, canvas.height/4, 50, 50)
    ctx.fillStyle = "#ee5d5d"
    ctx.fillRect(canvas.width/5*3-25, canvas.height/4, 50, 50)
    ctx.fillStyle = "#79a7f2"
    ctx.fillRect(canvas.width/5*4-25, canvas.height/4, 50, 50)
    ctx.fillStyle = "#aadd60"
    ctx.fillRect(canvas.width/5-25, canvas.height/16*7, 50, 50)
    ctx.fillStyle = "gray"
    ctx.fillRect(canvas.width/5*2-25, canvas.height/16*7, 50, 50)
    ctx.fillRect(canvas.width/5*3-25, canvas.height/16*7, 50, 50)
    ctx.fillRect(canvas.width/5*4-25, canvas.height/16*7, 50, 50)
    ctx.fillRect(canvas.width/5-25, canvas.height/8*5, 50, 50)
    ctx.fillRect(canvas.width/5*2-25, canvas.height/8*5, 50, 50)
    ctx.fillRect(canvas.width/5*3-25, canvas.height/8*5, 50, 50)
    ctx.fillRect(canvas.width/5*4-25, canvas.height/8*5, 50, 50)
    //button stroke rectangle
    ctx.strokeStyle = "goldenrod"
    ctx.lineWidth = 3
    ctx.strokeRect(btn_back[0], btn_back[1], btn_back[2], btn_back[3])
    //button fill text
    ctx.fillStyle = "goldenrod"
    ctx.font = "25px Copperplate"
    ctx.textBaseline = "middle"
    ctx.fillText("back", canvas.width/2,  canvas.width/24*22+8)
    //Set current location
    current_location = "color picker"
}