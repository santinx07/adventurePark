
//Canvas DOM manipulation
var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d")

//Variables
var game_started = false
var current_location
var btn_start_game = [canvas.width/2 - 100, 200, canvas.height/2, 50]
var btn_color_picker = [canvas.width/2 - 100, 200, canvas.height/16*11, 50]
var btn_map1 = [canvas.width/3-45, 90, canvas.height/4, 90]
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
        //start game button
        if ((mouse_x >= btn_start_game[0] && mouse_x <= btn_start_game[0] + btn_start_game[1])
        && (mouse_y >= btn_start_game[2] && mouse_y <= btn_start_game[2] + btn_start_game[3])) {
            renderLevelSelector()
            return
        }
        //color picker button
        if ((mouse_x >= btn_color_picker[0] && mouse_x <= btn_color_picker[0] + btn_color_picker[1])
        && (mouse_y >= btn_color_picker[2] && mouse_y <= btn_color_picker[2] + btn_color_picker[3])) {
            return
        }
    }
    
    //Current Location: Level Selector
        //tutorial/map1
        if ((mouse_x >= btn_map1[0] && mouse_x <= btn_map1[0] + btn_map1[1])
        && (mouse_y >= btn_map1[2] && mouse_y <= btn_map1[2] + btn_map1[3])) {
            console.log("working")
            return
        }
        //map2
        if ((mouse_x >= btn_color_picker[0] && mouse_x <= btn_color_picker[0] + btn_color_picker[1])
        && (mouse_y >= btn_color_picker[2] && mouse_y <= btn_color_picker[2] + btn_color_picker[3])) {
            console.log("working")
            return
        }
        //map3
        if ((mouse_x >= btn_color_picker[0] && mouse_x <= btn_color_picker[0] + btn_color_picker[1])
        && (mouse_y >= btn_color_picker[2] && mouse_y <= btn_color_picker[2] + btn_color_picker[3])) {
            console.log("working")
            return
        }
        //map4
        if ((mouse_x >= btn_color_picker[0] && mouse_x <= btn_color_picker[0] + btn_color_picker[1])
        && (mouse_y >= btn_color_picker[2] && mouse_y <= btn_color_picker[2] + btn_color_picker[3])) {
            console.log("working")
            return
        }
})