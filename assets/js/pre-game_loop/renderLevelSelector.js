
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
    ctx.fillRect(btn_map1[0], btn_map1[1], btn_map1[2], btn_map1[3]) 
    ctx.fillRect(btn_map2[0], btn_map2[1], btn_map2[2], btn_map2[3]) 
    ctx.fillRect(btn_map3[0], btn_map3[1], btn_map3[2], btn_map3[3]) 
    ctx.fillRect(btn_map4[0], btn_map4[1], btn_map4[2], btn_map4[3])
    //button stroke rectangle
    ctx.strokeStyle = "goldenrod"
    ctx.strokeRect(btn_map1[0], btn_map1[1], btn_map1[2], btn_map1[3]) 
    ctx.strokeRect(btn_map2[0], btn_map2[1], btn_map2[2], btn_map2[3]) 
    ctx.strokeRect(btn_map3[0], btn_map3[1], btn_map3[2], btn_map3[3]) 
    ctx.strokeRect(btn_map4[0], btn_map4[1], btn_map4[2], btn_map4[3]) 
    ctx.lineWidth = 3
    ctx.strokeRect(btn_back[0], btn_back[1], btn_back[2], btn_back[3])
    //button fill text
    ctx.fillStyle = "goldenrod"
    ctx.font = "25px Copperplate"
    ctx.textBaseline = "middle"
    ctx.fillText("Tutorial", canvas.width/3, canvas.height/4+45, 75)
    ctx.fillText("[map 2]", canvas.width/3*2, canvas.height/4+45, 75)
    ctx.fillText("[map 3]", canvas.width/3, canvas.height/2+45, 75)
    ctx.fillText("[map 4]", canvas.width/3*2, canvas.height/2+45, 75) 
    ctx.fillText("back", canvas.width/2,  canvas.width/24*22+8)
    //Set current location
    current_location = "level selector"
}