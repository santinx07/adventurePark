
//Canvas DOM manipulation
var canvas = document.getElementById("adventurParkCanvas")
var ctx = canvas.getContext("2d")

//Variables
var btn1_w = 200
var btn1_h = 50
var btn1_x = canvas.width/2 - btn1_w/2
var btn1_y = canvas.height/2
var update_interval 
var render_interval

//Call init function
init()

//Init Function
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
    ctx.fillRect(btn1_x, btn1_y, btn1_w, btn1_h)
    ctx.strokeStyle = "goldenrod"
    ctx.lineWidth = 5
    ctx.strokeRect(btn1_x, btn1_y, btn1_w, btn1_h)
    ctx.fillText("Start",)
}

function gameSetup(){

    update_interval = setInterval(function(){
        update()
    }, 10/1000)

    render_interval = setInterval( function(){
        render(ctx)
    }, 30/1000)
}



function update(){
}


function render(ctx){
    ctx.save
    ctx.clearRect(0,0,canvas.width, canvas.height)   
    ctx.restore
}