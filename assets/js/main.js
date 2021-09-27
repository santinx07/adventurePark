
//Canvas DOM manipulation
var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d")

//Variables
var game_started = false
var current_location
var btn_start_game = [canvas.width/2 - 100, canvas.height/2, 200, 50]
var btn_color_picker = [canvas.width/2 - 100, canvas.height/16*11, 200, 50]
var btn_back = [canvas.width/2-100, canvas.height/24*21+18, 200, 25]
var btn_map1 = [canvas.width/3-45, canvas.height/4, 90, 90]
var btn_map2 = [canvas.width/3*2-45, canvas.height/4, 90, 90]
var btn_map3 = [canvas.width/3-45, canvas.height/2, 90, 90]
var btn_map4 = [canvas.width/3*2-45, canvas.height/2, 90, 90]
var update_interval 
var render_interval

//Call init function
init()

//Game set up function
function gameSetup(level){
    //reset
    //set current location
    current_location = level
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
        if ((mouse_x >= btn_start_game[0] && mouse_x <= btn_start_game[0] + btn_start_game[2])
        &&(mouse_y >= btn_start_game[1] && mouse_y <= btn_start_game[1] + btn_start_game[3])){
            console.log("Start Game")
            renderLevelSelector()
            return
        }
        //color picker button
        if ((mouse_x >= btn_color_picker[0] && mouse_x <= btn_color_picker[0] + btn_color_picker[2])
        &&(mouse_y >= btn_color_picker[1] && mouse_y <= btn_color_picker[1] + btn_color_picker[3])){
            console.log("Color Picker")
            return
        }
    }
    
    //Current Location: Level Selector
    if (current_location == "level selector") {
        //back button
        if ((mouse_x >= btn_back[0] && mouse_x <= btn_back[0] + btn_back[2])
        &&(mouse_y >= btn_back[1] && mouse_y <= btn_back[1] + btn_back[3])){
            console.log("Back")
            init()
            return
        }
        //tutorial/map1
        if ((mouse_x >= btn_map1[0] && mouse_x <= btn_map1[0] + btn_map1[2])
        &&(mouse_y >= btn_map1[1] && mouse_y <= btn_map1[1] + btn_map1[3])){
            console.log("Map 1")
            gameSetup("1")
            return
        }
        //map2
        if ((mouse_x >= btn_map2[0] && mouse_x <= btn_map2[0] + btn_map2[2])
        &&(mouse_y >= btn_map2[1] && mouse_y <= btn_map2[1] + btn_map2[3])){
            console.log("Map 2")
            gameSetup("2")
            return
        }
        //map3
        if ((mouse_x >= btn_map3[0] && mouse_x <= btn_map3[0] + btn_map3[2])
        &&(mouse_y >= btn_map3[1] && mouse_y <= btn_map3[1] + btn_map3[3])){
            console.log("Map 3")
            gameSetup("3")
            return
        }
        //map4
        if ((mouse_x >= btn_map4[0] && mouse_x <= btn_map4[0] + btn_map4[2])
        &&(mouse_y >= btn_map4[1] && mouse_y <= btn_map4[1] + btn_map4[3])){
            console.log("Map 4")
            gameSetup("4")
            return
        }
    }
})