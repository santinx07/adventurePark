
//Canvas DOM manipulation
var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d")

//Variables
var game_started = false
var current_location
var btn_w = 200
var btn_h = 50
var btn_x = canvas.width/2 - btn_w/2
var btn1_y = canvas.height/2
var btn2_y = canvas.height/16*11
var update_interval 
var render_interval

//Call init function
init()

//Game set up function
function gameSetup(){
    //reset
    //create entities
    //start game loop
    update_interval = setInterval(function(){ update() }, 10/1000)
    render_interval = setInterval( function(){ render(ctx) }, 30/1000)
    game_started = true
}

//Stop game function
function stopGame(){
    game_started =  false
    clearInterval(update_interval)
    clearInterval(render_interval)
    init()
}

//Event listener for "Start Game" and "Color Picker" buttons
canvas.addEventListener("mouseup", function(evt){
    //Check mouse locations
    var mouse_x = evt.offsetX
    var mouse_y = evt.offsetY
    //Current Location: Menu
    if(current_location == "menu"){
        //Check clicked x location
        if(mouse_x < btn_x + btn_w && mouse_x > btn_x){
            //Check clicked y location
            //Start Game button (btn1)
            if(mouse_y > btn1_y && mouse_y < btn1_y + btn_h){
                renderLevelSelector()
                return
            }
            //Color Picker button (btn2)
            if(mouse_y > btn2_y && mouse_y < btn2_y + btn_h){
                return
            }
        }
    }
    //Current Location: Level Selector
    if(current_location == "level selector"){
        //Check clicked x location
        if(mouse_x < canvas.width/4 - 45 + 90 && mouse_x > canvas.width/4 - 45){
            //Check clicked y location
            if(mouse_y > canvas.height/4 && mouse_y < canvas.height/4 + 90){
                //Start game loop
                current_location = "map 1"
                gameSetup()
            }
        }
    }
})