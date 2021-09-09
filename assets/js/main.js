
//Canvas DOM manipulation
var canvas = document.getElementById("adventurParkCanvas")
var ctx = canvas.getContext("2d")

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
    ctx.font = "15px Times New Roman"
    ctx.fillText("Game Made by David J. and Santiago N.", canvas.width/3*2, canvas.height/12*5)

    //Buttons

    //Put the gameSetup() function here
}