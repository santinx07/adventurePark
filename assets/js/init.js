function init(){
    //Background
    ctx.fillStyle = "#21b51f"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    //Text
    ctx.fillStyle = "black"
    ctx.font = "40px fantasy"
    ctx.textAlign = "center"
    ctx.fillText("ADVENTURE PARK", canvas.width/2,canvas.height/3)
    ctx.font = "15px fantasy"
    ctx.fillText("Game Made by David J. and Santiago N.", canvas.width/3*2, canvas.height/12*5)
    //Buttons
    ctx.fillStyle = "gold"
    ctx.fillRect(btn_x, btn1_y, btn_w, btn_h)
    ctx.fillRect(btn_x, btn2_y, btn_w, btn_h)
    ctx.strokeStyle = "goldenrod"
    ctx.lineWidth = 5
    ctx.strokeRect(btn_x, btn1_y, btn_w, btn_h)
    ctx.strokeRect(btn_x, btn2_y, btn_w, btn_h)
    ctx.fillStyle = "goldenrod"
    ctx.font = "25px fantasy"
    ctx.textBaseline = "middle"
    ctx.fillText("Start Game", canvas.width/2, btn1_y + btn_h/2)
    ctx.fillText("Color Picker", canvas.width/2, btn2_y + btn_h/2)
}
