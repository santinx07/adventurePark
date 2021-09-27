function init(){
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
    //Text
    ctx.fillStyle = "black"
    ctx.font = "40px fantasy"
    ctx.textAlign = "center"
    ctx.fillText("ADVENTURE PARK", canvas.width/2,canvas.height/3)
    //Buttons
    ctx.fillStyle = "gold"
    ctx.fillRect(btn_start_game[0], btn_start_game[2], btn_start_game[1], btn_start_game[3])
    ctx.fillRect(btn_color_picker[0], btn_color_picker[2], btn_color_picker[1], btn_color_picker[3])
    ctx.strokeStyle = "goldenrod"
    ctx.lineWidth = 5
    ctx.strokeRect(btn_start_game[0], btn_start_game[2], btn_start_game[1], btn_start_game[3])
    ctx.strokeRect(btn_color_picker[0], btn_color_picker[2], btn_color_picker[1], btn_color_picker[3])
    ctx.fillStyle = "goldenrod"
    ctx.font = "25px Copperplate"
    ctx.textBaseline = "middle"
    ctx.fillText("Start Game", canvas.width/2, btn_start_game[2] + btn_start_game[3]/2)
    ctx.fillText("Color Picker", canvas.width/2, btn_color_picker[2] + btn_color_picker[3]/2)
    //Set current location
    current_location = "menu"
}
