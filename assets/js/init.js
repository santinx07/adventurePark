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
    ctx.fillRect(btn_x, btn1_y, btn_w, btn_h)
    ctx.fillRect(btn_x, btn2_y, btn_w, btn_h)
    ctx.strokeStyle = "goldenrod"
    ctx.lineWidth = 5
    ctx.strokeRect(btn_x, btn1_y, btn_w, btn_h)
    ctx.strokeRect(btn_x, btn2_y, btn_w, btn_h)
    ctx.fillStyle = "goldenrod"
    ctx.font = "25px Copperplate"
    ctx.textBaseline = "middle"
    ctx.fillText("Start Game", canvas.width/2, btn1_y + btn_h/2)
    ctx.fillText("Color Picker", canvas.width/2, btn2_y + btn_h/2)
}
