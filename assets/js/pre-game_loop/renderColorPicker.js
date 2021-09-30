
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
    ctx.fillRect(btn_colors[0][0], btn_colors[0][1], btn_colors[0][2], btn_colors[0][3])
    ctx.fillStyle = "#e8ea30"
    ctx.fillRect(btn_colors[1][0], btn_colors[1][1], btn_colors[1][2], btn_colors[1][3])
    ctx.fillStyle = "#f03535"
    ctx.fillRect(btn_colors[2][0], btn_colors[2][1], btn_colors[2][2], btn_colors[2][3])
    ctx.fillStyle = "#1b5bf4"
    ctx.fillRect(btn_colors[3][0], btn_colors[3][1], btn_colors[3][2], btn_colors[3][3])
    ctx.fillStyle = "#fb9d34"
    ctx.fillRect(btn_colors[4][0], btn_colors[4][1], btn_colors[4][2], btn_colors[4][3])
    ctx.fillStyle = "#60ec50"
    ctx.fillRect(btn_colors[5][0], btn_colors[5][1], btn_colors[5][2], btn_colors[5][3])
    ctx.fillStyle = "#ff9c9c"
    ctx.fillRect(btn_colors[6][0], btn_colors[6][1], btn_colors[6][2], btn_colors[6][3])
    ctx.fillStyle = "#151515"
    ctx.fillRect(btn_colors[7][0], btn_colors[7][1], btn_colors[7][2], btn_colors[7][3])
    ctx.fillStyle = "#43f7f7"
    ctx.fillRect(btn_colors[8][0], btn_colors[8][1], btn_colors[8][2], btn_colors[8][3])
    // ctx.fillStyle = "gray"
    ctx.fillRect(btn_colors[9][0], btn_colors[9][1], btn_colors[9][2], btn_colors[9][3])
    ctx.fillRect(btn_colors[10][0], btn_colors[10][1], btn_colors[10][2], btn_colors[10][3])
    ctx.fillRect(btn_colors[11][0], btn_colors[11][1], btn_colors[11][2], btn_colors[11][3])
    //button stroke rectangle
    ctx.strokeStyle = "#969696"
    ctx.strokeRect(btn_colors[0][0], btn_colors[0][1], btn_colors[0][2], btn_colors[0][3])
    ctx.strokeStyle = "#c7c920"
    ctx.strokeRect(btn_colors[1][0], btn_colors[1][1], btn_colors[1][2], btn_colors[1][3])
    ctx.strokeStyle = "#d21616"
    ctx.strokeRect(btn_colors[2][0], btn_colors[2][1], btn_colors[2][2], btn_colors[2][3])
    ctx.strokeStyle = "#073ec1"
    ctx.strokeRect(btn_colors[3][0], btn_colors[3][1], btn_colors[3][2], btn_colors[3][3])
    ctx.strokeStyle = "#df8117"
    ctx.strokeRect(btn_colors[4][0], btn_colors[4][1], btn_colors[4][2], btn_colors[4][3])
    ctx.strokeStyle = "#3dc72d"
    ctx.strokeRect(btn_colors[5][0], btn_colors[5][1], btn_colors[5][2], btn_colors[5][3])
    ctx.strokeStyle = "#ea7a7a"
    ctx.strokeRect(btn_colors[6][0], btn_colors[6][1], btn_colors[6][2], btn_colors[6][3])
    ctx.strokeStyle = "#222222"
    ctx.strokeRect(btn_colors[7][0], btn_colors[7][1], btn_colors[7][2], btn_colors[7][3])
    ctx.strokeStyle = "#1ed9d9"
    ctx.strokeRect(btn_colors[8][0], btn_colors[8][1], btn_colors[8][2], btn_colors[8][3])
    // ctx.strokeStyle = "gray"
    ctx.strokeRect(btn_colors[9][0], btn_colors[9][1], btn_colors[9][2], btn_colors[9][3])
    ctx.strokeRect(btn_colors[10][0], btn_colors[10][1], btn_colors[10][2], btn_colors[10][3])
    ctx.strokeRect(btn_colors[11][0], btn_colors[11][1], btn_colors[11][2], btn_colors[11][3])
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